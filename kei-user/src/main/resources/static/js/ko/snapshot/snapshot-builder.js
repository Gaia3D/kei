/**
 * @typedef {Object} Snapshot.Builder.ConstructorOptions
 * 
 * Initialization options for the Snapshot constructor. 저장할 데이터의 카테고리별로 저장유무 플래그를 받음.
 * 
 * @property {Boolean} f4d Optional. 데이터라이브러리나 디자인레이어 중 하나가 있을 경우 없어도 됨
 * @property {Boolean} dataLibrary Optional. F4D나 디자인레이어 중 하나가 있을 경우 없어도 됨
 * @property {Boolean} designLayerBuilding Optional. F4D나 데이터라이브러리 중 하나가 있을 경우 없어도 됨
 * @property {Boolean} designLayerLand Optional. F4D나 데이터라이브러리 중 하나가 있을 경우 없어도 됨
 * @property {Boolean} designLayerBuildingHeight Optional. F4D나 데이터라이브러리 중 하나가 있을 경우 없어도 됨
 * @property {Boolean} imagery Optional. 미 지정 시 현재 지도에 표출된 배경지도 그대로 표출
 * @property {Boolean} terrain Optional. 미 지정 시 현재 지도에 표출된 터레인 표출
 * @property {Boolean} extent
 * @property {Object} mago3dOption mago3d 기본 옵션
 */
/**
 * mago3djs 및 Cesium을 통해 표출하고 있는 현재 화면의 간략한 데이터 정보를 가지고 저장 및 렌더링을 수행하는 클래스
 * 
 * @param {Snapshot.Builder.ConstructorOptions} options
 * @param {Mago3D.MagoManager} magoManager required
 */
Snapshot.Builder = function(options, magoManager) {
	var magoManagerClass = (window['Mago3D']) ? Mago3D.MagoManager : MagoManager;
	if(!magoManager || !(magoManager instanceof magoManagerClass)) {
		throw new Error('magoManager is required');
	}
	var constructorOptions = options ? options : {};
	var mago3dOption = constructorOptions.mago3dOption ? constructorOptions.mago3dOption : {}; 
	
	this.magoManager = magoManager;
	this.mode;
	
	this.location = {
		cameraPositon : undefined,
		cameraDirection : undefined
	}
	
	this.mago3dOption = {
		shadow : false,
		label : false
	}
	
	this.partManager = new Snapshot.PartManager(constructorOptions, magoManager);
}

/**
 * 현재 카메라 정보를 세팅
 */
Snapshot.Builder.prototype.setLocationProperty = function() {
	var camera = this.magoManager.scene.camera;
	var positionWC = camera.positionWC;
	
	this.location.cameraPositon =  {x : positionWC.x, y : positionWC.y, z : positionWC.z};
	this.location.cameraDirection =  {heading : camera.heading, pitch : camera.pitch, roll : camera.roll};
}

Snapshot.Builder.prototype.takeShot = function() {
	if(this.partManager.partCount === 0) {
		alert('저장할 데이터 유형이 선언되지 않았습니다.');
		return false;
	}
	
	this.setLocationProperty();
	this.partManager.extract();
}

Snapshot.Builder.prototype.print = function() {
	if(this.partManager.totalDataCount === 0) {
		alert('저장할 데이터가 없습니다.');
		return false;
	}
	var snapshot = {};
	snapshot.createDate = new Date();
	for(var i in Snapshot.BasicStructure) {
		if(Snapshot.BasicStructure[i]) {
			snapshot[i] = Snapshot.BasicStructure[i];
		} else {
			snapshot[i] = this[i];
		}
	}
	snapshot.parts = this.partManager.refine();
	
	return JSON.stringify(snapshot); 
}