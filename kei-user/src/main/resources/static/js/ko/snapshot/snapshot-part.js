/**
 * @param {Snapshot.Builder.ConstructorOptions} option
 */
Snapshot.PartManager = function(option, magoManager) {
	this.partMap = {};
	this.magoManager = magoManager;
	this.totalDataCount = 0;
	
	for(var i in Snapshot.DATA_ENUM) {
		var info = Snapshot.DATA_ENUM[i];
		var partName = info.name;
		if(option[partName]) {
			this.partMap[partName] = new Snapshot[info.partClassName](this); 
		}
	}
	
	this.partCount = Object.keys(this.partMap).length;
}

Snapshot.PartManager.prototype.extract = function() {
	if(this.partCount === 0) {
		alert('저장할 데이터 유형이 선언되지 않았습니다.');
		return false;
	}
	
	for(var i in this.partMap) {
		if(!this.partMap.hasOwnProperty(i)) continue;
		
		var part = this.partMap[i];
		part.extract();
	}
}

Snapshot.PartManager.prototype.refine = function() {
	if(this.totalDataCount === 0) {
		alert('저장할 데이터가 없습니다.');
		return false;
	}
	
	for(var i in this.partMap) {
		if(!this.partMap.hasOwnProperty(i)) continue;
		
		var part = this.partMap[i];
		if(part.original.legnth === 0) continue;

		part.refine();
	}
	
	return this.createDataParts();
}

Snapshot.PartManager.prototype.createDataParts = function() {
	var parts = {};
	for(var i in this.partMap) {
		var part = this.partMap[i];
		if(Object.keys(part.refinedObj).length === 0) continue;
		
		if(i.indexOf('designLayer') > -1) {
			var type = i.split('designLayer')[1];
			if(!parts['designLayer']) parts['designLayer'] = {};
			parts['designLayer'][type] = part.refinedObj;
		} else {
			parts[i] = part.refinedObj;
		}
	}
	
	return parts;
}

/**
 * Abstract Part class. normally only used for creating subclasses and not * instantiated in apps.
 * @param {Mago3D.MagoManager} magoManager
 */
Snapshot.Part = function(partManager) {
	this.partManager = partManager;
	this.magoManager = partManager.magoManager;
	this.original = [];
	this.refinedObj = {};
}

Snapshot.Part.prototype.extract = function() {
	this.clearOriginal();

	/**
	 * Do extract data each part instance
	 */
	this.extractImpl();
	
	this.partManager.totalDataCount += this.original.length;
}

Snapshot.Part.prototype.refine = function() {
	this.refinedObj = {};
	
	/**
	 * Do refine data each part instance
	 */
	this.refineImpl();
	
	this.clearOriginal();
}

Snapshot.Part.prototype.clearOriginal = function() {
	this.original.length = 0;
}

Snapshot.PartMago3DFormat = function(option) {
	Snapshot.Part.call(this, option);
}
Snapshot.PartMago3DFormat.prototype = Object.create(Snapshot.Part.prototype);
Snapshot.PartMago3DFormat.prototype.constructor = Snapshot.PartMago3DFormat;

Snapshot.PartMago3DFormat.getPositionInfo = function(geoLocationData) {
	var geographicCoord = geoLocationData.geographicCoord; 
	return {
		longitude : geographicCoord.longitude,
		latitude : geographicCoord.latitude,
		altitude : geographicCoord.altitude,
		heading : geoLocationData.heading,
		pitch : geoLocationData.pitch,
		roll : geoLocationData.roll
	};
}

Snapshot.PartF4dFormat = function(option) {
	Snapshot.PartMago3DFormat.call(this, option);
}
Snapshot.PartF4dFormat.prototype = Object.create(Snapshot.PartMago3DFormat.prototype);
Snapshot.PartF4dFormat.prototype.constructor = Snapshot.PartF4dFormat;

Snapshot.PartF4dFormat.prototype.extractImpl = function() {
	var allVisiblesObject = this.magoManager.frustumVolumeControl.getAllVisiblesObject();
	var nodeMap = allVisiblesObject.nodeMap;
	
	if(Object.keys(nodeMap).length > 0) {
		for(var i in nodeMap) {
			if(!nodeMap.hasOwnProperty(i)) continue;
			var node = nodeMap[i];
			if(!node.data 
			|| !node.data.attributes 
			|| !node.data.attributes.isPhysical
			|| !this.checkAttributesCondition(node.data.attributes)) continue;
			
			this.original.push(node);
		}
	}
}

Snapshot.PartF4dFormat.prototype.refineImpl = function() {
	for(var i=0,orgLen=this.original.length;i<orgLen;i++) {
		var f4d = this.original[i];
		var data = f4d.data;
		var dataGroupId = data.dataGroupId || data.projectId;
		
		if(!this.refinedObj[dataGroupId]) this.refinedObj[dataGroupId] = [];
		
		var geoLocationData = f4d.getCurrentGeoLocationData();
		
		var refined = Snapshot.PartMago3DFormat.getPositionInfo(geoLocationData);
		refined.dataId = data.dataId;
		this.refinedObj[dataGroupId].push(refined);
	}
}

/**
 * return {Boolean}
 */
Snapshot.PartF4dFormat.prototype.checkAttributesCondition = function() {
	return Mago3D.throwAbstractError();
}
//f4d
Snapshot.PartF4d = function(option) {
	Snapshot.PartF4dFormat.call(this, option);
}
Snapshot.PartF4d.prototype = Object.create(Snapshot.PartF4dFormat.prototype);
Snapshot.PartF4d.prototype.constructor = Snapshot.PartF4d;

Snapshot.PartF4d.prototype.checkAttributesCondition = function(attributes) {
	return !attributes.isReference && !attributes.fromSmartTile && !attributes.isVisible;
}

Snapshot.PartF4d.prototype.refineImpl = function() {
	for(var i=0,orgLen=this.original.length;i<orgLen;i++) {
		var f4d = this.original[i];
		var data = f4d.data;
		var dataGroupId = data.dataGroupId || data.projectId;
		
		if(!this.refinedObj[dataGroupId]) this.refinedObj[dataGroupId] = {};
		
		var geoLocationData = f4d.getCurrentGeoLocationData();
		this.refinedObj[dataGroupId][data.dataId] = Snapshot.PartMago3DFormat.getPositionInfo(geoLocationData);
	}
}

//DataLibrary
Snapshot.PartDataLibrary = function(option) {
	Snapshot.PartF4dFormat.call(this, option);
}
Snapshot.PartDataLibrary.prototype = Object.create(Snapshot.PartF4dFormat.prototype);
Snapshot.PartDataLibrary.prototype.constructor = Snapshot.PartDataLibrary;

Snapshot.PartDataLibrary.prototype.checkAttributesCondition = function(attributes) {
	return attributes.isReference && !attributes.fromSmartTile &&  !attributes.isVisible;
}

Snapshot.PartDataLibrary.prototype.refineImpl = function() {
	for(var i=0,orgLen=this.original.length;i<orgLen;i++) {
		var f4d = this.original[i];
		var data = f4d.data;
		var dataGroupId = data.dataGroupId || data.projectId;
		
		if(!this.refinedObj[dataGroupId]) this.refinedObj[dataGroupId] = [];
		
		var geoLocationData = f4d.getCurrentGeoLocationData();
		
		var refined = Snapshot.PartMago3DFormat.getPositionInfo(geoLocationData);
		this.refinedObj[dataGroupId].push(refined);
	}
}

//DesignLayerBuilding
Snapshot.PartDesignLayerBuilding = function(option) {
	Snapshot.PartMago3DFormat.call(this, option);
}
Snapshot.PartDesignLayerBuilding.prototype = Object.create(Snapshot.PartMago3DFormat.prototype);
Snapshot.PartDesignLayerBuilding.prototype.constructor = Snapshot.PartDesignLayerBuilding;

/**
 * TODO : 필터 컨디션을 일단 하드코딩함.
 */
Snapshot.PartDesignLayerBuilding.prototype.extractImpl = function() {
	var allVisiblesObject = this.magoManager.frustumVolumeControl.getAllVisiblesObject();
	var nativeMap = allVisiblesObject.nativeMap;
	
	if(Object.keys(nativeMap).length > 0) {
		for(var i in nativeMap) {
			if(!nativeMap.hasOwnProperty(i)) continue;
			var native = nativeMap[i];
			if(native.hasOwnProperty('designLayerId') || !native.attributes.isVisible) continue;
			
			this.original.push(native);
		}
	}
}

/**
 * 엔진 측에서 데이터의 변경이력 기록이 필요. 변경이력이 있는 항목만 저장.
 */
Snapshot.PartDesignLayerBuilding.prototype.refineImpl = function() {
	for(var i=0,orgLen=this.original.length;i<orgLen;i++) {
		var building = this.original[i];
		var designLayerGroupId = building.designLayerGroupId;
		var layerId = building.layerId;
		
		var buildId = building.buildId;
		var designLayerBuildingId = building.designLayerBuildingId;
		
		if(!this.refinedObj[designLayerGroupId]) this.refinedObj[designLayerGroupId] = {};
		if(!this.refinedObj[designLayerGroupId][layerId]) this.refinedObj[designLayerGroupId][layerId] = [];
		
		var refined = {};
		
		var positions = [];
		var geographicCoordListsArray = building.geographicCoordListsArray;
		for(var j=0;j<geographicCoordListsArray.length;j++) {
			var geographicCoordLists = geographicCoordListsArray[j];
			var geographicCoordsArray = geographicCoordLists.geographicCoordsArray;
			var position = [];
			for(var k=0;k<geographicCoordsArray.length;k++) {
				var geographicCoords = geographicCoordsArray[k];
				position.push([geographicCoords.longitude, geographicCoords.latitude]);
			}
			positions.push(position);
		}
		
		refined.positions = positions;
		refined.designLayerBuildingId = designLayerBuildingId;
		refined.buildId = buildId;
		refined.floorHeight = building.floorHeight;
		refined.height = building.height;
		
		this.refinedObj[designLayerGroupId][layerId].push(refined);
	}
}

//DesignLayerLand
Snapshot.PartDesignLayerLand = function(option) {
	Snapshot.Part.call(this, option);
}
Snapshot.PartDesignLayerLand.prototype = Object.create(Snapshot.Part.prototype);
Snapshot.PartDesignLayerLand.prototype.constructor = Snapshot.PartDesignLayerLand;

Snapshot.PartDesignLayerLand.prototype.extractImpl = function() {
	var globe = this.magoManager.scene.globe;
	var imageryLayers = globe.imageryLayers;
	var layers = imageryLayers._layers;
	
	var allVisiblesObject = this.magoManager.frustumVolumeControl.getAllVisiblesObject();
	var nativeMap = allVisiblesObject.nativeMap;
	var hasNativeMap = Object.keys(nativeMap).length > 0; 
	
	for(var i=0,cnt=layers.length;i<cnt;i++) {
		var layer = layers[i];
		var provider = layer.imageryProvider;
		if(!layer.show || !(provider instanceof Cesium.WebMapServiceImageryProvider)) continue;
		
		var imageryCache = layer._imageryCache;
		var tilesToRender = globe._surface._tilesToRender;
		
		var rendering = false;
		for(var j=0,ttrLength=tilesToRender.length;j<ttrLength;j++) {
			var tile = tilesToRender[j];
			var cacheKey = JSON.stringify([tile.x, tile.y, tile.level]);
			if(imageryCache[cacheKey] && imageryCache[cacheKey].texture) {
				rendering = true;
				break;
			}
		}
		
		if(!rendering) continue;
		
		var layerId = layer.layerId;
		if(hasNativeMap) {
			for(var i in nativeMap) {
				if(!nativeMap.hasOwnProperty(i)) continue;
				var native = nativeMap[i];
				if(native.hasOwnProperty('designLayerId')) {
					layer.has3DModel = true;
					break;
				}
			}
		}
		this.original.push(layer);
	}
}

/**
 * 일단 LH 프로젝트 전용.. 
 */
Snapshot.PartDesignLayerLand.prototype.refineImpl = function() {
	var cacheData = {};
	for(var i=0,orgLen=this.original.length;i<orgLen;i++) {
		var layer = this.original[i];
		var layerId = layer.layerId;
		
		//추후 서버에서 요청할 지 고민을 해봐야함.
		if(!cacheData[layerId]) cacheData[layerId] = designLayerObj.getDataById(layerId);
		
		var designLayerGroupId = cacheData[layerId].designLayerGroupId;
		
		if(!this.refinedObj[designLayerGroupId]) this.refinedObj[designLayerGroupId] = {};
		
		var refined = {};
		refined.designLayerName = cacheData[layerId].designLayerName;
		refined.ogcWebServices = cacheData[layerId].ogcWebServices
		refined.designLayerLandId = layerId;
		if(layer.has3DModel) refined.has3DModel = layer.has3DModel;
		
		this.refinedObj[designLayerGroupId][layerId] = refined;
	}
}


/**
 * -------------나중에-----------------------
 */
//DesignLayerBuildingHeight
Snapshot.PartDesignLayerBuildingHeight = function(option) {
	Snapshot.Part.call(this, option);
}
Snapshot.PartDesignLayerBuildingHeight.prototype = Object.create(Snapshot.Part.prototype);
Snapshot.PartDesignLayerBuildingHeight.prototype.constructor = Snapshot.PartDesignLayerBuildingHeight;

Snapshot.PartDesignLayerBuildingHeight.prototype.extract = function() {
	return Mago3D.throwAbstractError();
}

Snapshot.PartDesignLayerBuildingHeight.prototype.refine = function() {
	return Mago3D.throwAbstractError();
}

//Imagery
Snapshot.PartImagery = function(option) {
	Snapshot.Part.call(this, option);
}
Snapshot.PartImagery.prototype = Object.create(Snapshot.Part.prototype);
Snapshot.PartImagery.prototype.constructor = Snapshot.PartImagery;

Snapshot.PartImagery.prototype.extract = function() {
	return Mago3D.throwAbstractError();
}

Snapshot.PartImagery.prototype.refine = function() {
	return Mago3D.throwAbstractError();
}

//Terrain
Snapshot.PartTerrain = function(option) {
	Snapshot.Part.call(this, option);
}
Snapshot.PartTerrain.prototype = Object.create(Snapshot.Part.prototype);
Snapshot.PartTerrain.prototype.constructor = Snapshot.PartTerrain;

Snapshot.PartTerrain.prototype.extract = function() {
	return Mago3D.throwAbstractError();
}

Snapshot.PartTerrain.prototype.refine = function() {
	return Mago3D.throwAbstractError();
}