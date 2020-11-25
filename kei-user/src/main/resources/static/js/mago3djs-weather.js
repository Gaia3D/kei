'use strict';
(function(_mago3d) 
{
	var Emitter=_mago3d["Emitter"];var Interaction=_mago3d["Interaction"];var MagoRenderable=_mago3d["MagoRenderable"];var ViewerInit=_mago3d["ViewerInit"];var APIGateway=_mago3d["APIGateway"];var ColorAPI=_mago3d["ColorAPI"];var DrawAPI=_mago3d["DrawAPI"];var LocationAndRotationAPI=_mago3d["LocationAndRotationAPI"];var LodAPI=_mago3d["LodAPI"];var AbsControl=_mago3d["AbsControl"];var Attribution=_mago3d["Attribution"];var Compass=_mago3d["Compass"];var FullScreen=_mago3d["FullScreen"];var InitCamera=_mago3d["InitCamera"];var Measure=_mago3d["Measure"];var OverviewMap=_mago3d["OverviewMap"];var Tools=_mago3d["Tools"];var Zoom=_mago3d["Zoom"];var AnimationData=_mago3d["AnimationData"];var AnimationManager=_mago3d["AnimationManager"];var BoundingBox=_mago3d["BoundingBox"];var BoundingSphere=_mago3d["BoundingSphere"];var BrowserEvent=_mago3d["BrowserEvent"];var BuildingSeed=_mago3d["BuildingSeed"];var BuildingSeedList=_mago3d["BuildingSeedList"];var BuildingSeedMap=_mago3d["BuildingSeedMap"];var Camera=_mago3d["Camera"];var CCTV=_mago3d["CCTV"];var CCTVList=_mago3d["CCTVList"];var CesiumViewerInit=_mago3d["CesiumViewerInit"];var CollisionCheckScene=_mago3d["CollisionCheckScene"];var Color=_mago3d["Color"];var ControlCollection=_mago3d["ControlCollection"];var DataType=_mago3d["DataType"];var DynamicColor=_mago3d["DynamicColor"];var F4dController=_mago3d["F4dController"];var FBO=_mago3d["FBO"];var FileRequestControler=_mago3d["FileRequestControler"];var FirstPersonView=_mago3d["FirstPersonView"];var Frustum=_mago3d["Frustum"];var FrustumVolumeControl=_mago3d["FrustumVolumeControl"];var GeographicCoord=_mago3d["GeographicCoord"];var GeographicCoordSegment=_mago3d["GeographicCoordSegment"];var GeographicCoordsList=_mago3d["GeographicCoordsList"];var GeographicExtent=_mago3d["GeographicExtent"];var GeoLocationData=_mago3d["GeoLocationData"];var GeoLocationDataManager=_mago3d["GeoLocationDataManager"];var Globe=_mago3d["Globe"];var HeightReference=_mago3d["HeightReference"];var IdentifierManager=_mago3d["IdentifierManager"];var InteractionCollection=_mago3d["InteractionCollection"];var LightSource=_mago3d["LightSource"];var Mago3d=_mago3d["Mago3d"];var MagoEarthViewerInit=_mago3d["MagoEarthViewerInit"];var MagoEvent=_mago3d["MagoEvent"];var MagoLayer=_mago3d["MagoLayer"];var MagoLayerCollection=_mago3d["MagoLayerCollection"];var MagoManager=_mago3d["MagoManager"];var MagoModel=_mago3d["MagoModel"];var ManagerFactory=_mago3d["ManagerFactory"];var Matrix4=_mago3d["Matrix4"];var Message=_mago3d["Message"];var MouseAction=_mago3d["MouseAction"];var Movement=_mago3d["Movement"];var ObjectMarker=_mago3d["ObjectMarker"];var ObjectMarkerManager=_mago3d["ObjectMarkerManager"];var OcclusionCullingOctree=_mago3d["OcclusionCullingOctree"];var OcclusionCullingOctreeCell=_mago3d["OcclusionCullingOctreeCell"];var Pin=_mago3d["Pin"];var Plane=_mago3d["Plane"];var Quaternion=_mago3d["Quaternion"];var SelectionColor=_mago3d["SelectionColor"];var Settings=_mago3d["Settings"];var SmartTile=_mago3d["SmartTile"];var SmartTileManager=_mago3d["SmartTileManager"];var Sphere=_mago3d["Sphere"];var SplitValue=_mago3d["SplitValue"];var SunSystem=_mago3d["SunSystem"];var TerranTile=_mago3d["TerranTile"];var Texture=_mago3d["Texture"];var TextureLayer=_mago3d["TextureLayer"];var TextureLayerFilter=_mago3d["TextureLayerFilter"];var TexturesManager=_mago3d["TexturesManager"];var TexturesStore=_mago3d["TexturesStore"];var TriPolyhedron=_mago3d["TriPolyhedron"];var TriSurface=_mago3d["TriSurface"];var VboBuffer=_mago3d["VboBuffer"];var VBOKeysNation=_mago3d["VBOKeysNation"];var VBOKeysStore=_mago3d["VBOKeysStore"];var VBOKeysWorld=_mago3d["VBOKeysWorld"];var VBOMemoryManager=_mago3d["VBOMemoryManager"];var VBOVertexIdxCacheKey=_mago3d["VBOVertexIdxCacheKey"];var VBOVertexIdxCacheKeysContainer=_mago3d["VBOVertexIdxCacheKeysContainer"];var VisibleObjectsController=_mago3d["VisibleObjectsController"];var WMSLayer=_mago3d["WMSLayer"];var XYZLayer=_mago3d["XYZLayer"];var API=_mago3d["API"];var Callback=_mago3d["Callback"];var ChangeHistory=_mago3d["ChangeHistory"];var CODE=_mago3d["CODE"];var Constant=_mago3d["Constant"];var MagoConfig=_mago3d["MagoConfig"];var Policy=_mago3d["Policy"];var Effect=_mago3d["Effect"];var EffectsManager=_mago3d["EffectsManager"];var DataStream=_mago3d["DataStream"];var i18next=_mago3d["i18next"];var i18nextBrowserLanguageDetector=_mago3d["i18nextBrowserLanguageDetector"];var i18nextXHRBackend=_mago3d["i18nextXHRBackend"];var rbush=_mago3d["rbush"];var tga=_mago3d["tga"];var Accessor=_mago3d["Accessor"];var Block=_mago3d["Block"];var BlocksArrayPartition=_mago3d["BlocksArrayPartition"];var BlocksList=_mago3d["BlocksList"];var CollisionCheckOctree=_mago3d["CollisionCheckOctree"];var HierarchyManager=_mago3d["HierarchyManager"];var InspectorBox=_mago3d["InspectorBox"];var Lego=_mago3d["Lego"];var LoadQueue=_mago3d["LoadQueue"];var LodBuilding=_mago3d["LodBuilding"];var LodBuildingData=_mago3d["LodBuildingData"];var MetaData=_mago3d["MetaData"];var ModelReferencedGroup=_mago3d["ModelReferencedGroup"];var MultiBuildings=_mago3d["MultiBuildings"];var MultiBuildingsElement=_mago3d["MultiBuildingsElement"];var NeoBuilding=_mago3d["NeoBuilding"];var NeoBuildingsList=_mago3d["NeoBuildingsList"];var NeoReference=_mago3d["NeoReference"];var NeoReferencesMotherAndIndices=_mago3d["NeoReferencesMotherAndIndices"];var NeoSimpleBuilding=_mago3d["NeoSimpleBuilding"];var NeoTexture=_mago3d["NeoTexture"];var Node=_mago3d["Node"];var Octree=_mago3d["Octree"];var ParseQueue=_mago3d["ParseQueue"];var ProcessQueue=_mago3d["ProcessQueue"];var ProjectTree=_mago3d["ProjectTree"];var ReaderWriter=_mago3d["ReaderWriter"];var SkinBuilding=_mago3d["SkinBuilding"];var TinTerrain=_mago3d["TinTerrain"];var TinTerrainManager=_mago3d["TinTerrainManager"];var Arc2D=_mago3d["Arc2D"];var AxisXYZ=_mago3d["AxisXYZ"];var BoundingRectangle=_mago3d["BoundingRectangle"];var BoxAux=_mago3d["BoxAux"];var BSplineCubic3D=_mago3d["BSplineCubic3D"];var Circle2D=_mago3d["Circle2D"];var Cluster=_mago3d["Cluster"];var CuttingPlane=_mago3d["CuttingPlane"];var Excavation=_mago3d["Excavation"];var Face=_mago3d["Face"];var HalfEdge=_mago3d["HalfEdge"];var HalfEdgesList=_mago3d["HalfEdgesList"];var IndexData=_mago3d["IndexData"];var IndexRange=_mago3d["IndexRange"];var Intersect=_mago3d["Intersect"];var Line=_mago3d["Line"];var Line2D=_mago3d["Line2D"];var MagoGeometry=_mago3d["MagoGeometry"];var MagoNativeProject=_mago3d["MagoNativeProject"];var MagoPoint=_mago3d["MagoPoint"];var MagoPolyline=_mago3d["MagoPolyline"];var MagoPolylineGround=_mago3d["MagoPolylineGround"];var MagoRectangle=_mago3d["MagoRectangle"];var MagoRectangleGround=_mago3d["MagoRectangleGround"];var MagoWorld=_mago3d["MagoWorld"];var Material=_mago3d["Material"];var MaterialsManager=_mago3d["MaterialsManager"];var Mesh=_mago3d["Mesh"];var Modeler=_mago3d["Modeler"];var ParametricMesh=_mago3d["ParametricMesh"];var Path3D=_mago3d["Path3D"];var PipeKnot=_mago3d["PipeKnot"];var PipePath=_mago3d["PipePath"];var PlaneGrid=_mago3d["PlaneGrid"];var Point2D=_mago3d["Point2D"];var Point2DList=_mago3d["Point2DList"];var Point3D=_mago3d["Point3D"];var Point3DList=_mago3d["Point3DList"];var Point4D=_mago3d["Point4D"];var Polygon2D=_mago3d["Polygon2D"];var PolyLine2D=_mago3d["PolyLine2D"];var PolyLine3D=_mago3d["PolyLine3D"];var ProcessCounterManager=_mago3d["ProcessCounterManager"];var Profile2D=_mago3d["Profile2D"];var Profiles2DList=_mago3d["Profiles2DList"];var QuatTree=_mago3d["QuatTree"];var Rectangle2D=_mago3d["Rectangle2D"];var Ring2D=_mago3d["Ring2D"];var Ring2DList=_mago3d["Ring2DList"];var RingType=_mago3d["RingType"];var ScreenQuad=_mago3d["ScreenQuad"];var Segment2D=_mago3d["Segment2D"];var Segment3D=_mago3d["Segment3D"];var ShadowMesh=_mago3d["ShadowMesh"];var Sky=_mago3d["Sky"];var Star2D=_mago3d["Star2D"];var StaticModel=_mago3d["StaticModel"];var Surface=_mago3d["Surface"];var Triangle=_mago3d["Triangle"];var Triangle2D=_mago3d["Triangle2D"];var TrianglesList=_mago3d["TrianglesList"];var TrianglesMatrix=_mago3d["TrianglesMatrix"];var Tunnel=_mago3d["Tunnel"];var Vertex=_mago3d["Vertex"];var VertexList=_mago3d["VertexList"];var VertexMatrix=_mago3d["VertexMatrix"];var VertexOctree=_mago3d["VertexOctree"];var VtxProfile=_mago3d["VtxProfile"];var VtxProfilesList=_mago3d["VtxProfilesList"];var VtxRing=_mago3d["VtxRing"];var VtxRingsList=_mago3d["VtxRingsList"];var VtxSegment=_mago3d["VtxSegment"];var AbsClickInteraction=_mago3d["AbsClickInteraction"];var AbsPointerInteraction=_mago3d["AbsPointerInteraction"];var ClickInteraction=_mago3d["ClickInteraction"];var DrawGeometryInteraction=_mago3d["DrawGeometryInteraction"];var InteractionActiveType=_mago3d["InteractionActiveType"];var InteractionEventType=_mago3d["InteractionEventType"];var LineDrawer=_mago3d["LineDrawer"];var NativeUpDownInteraction=_mago3d["NativeUpDownInteraction"];var PointDrawer=_mago3d["PointDrawer"];var PointSelectInteraction=_mago3d["PointSelectInteraction"];var RectangleDrawer=_mago3d["RectangleDrawer"];var RotateInteraction=_mago3d["RotateInteraction"];var TranslateInteraction=_mago3d["TranslateInteraction"];var Message=_mago3d["Message"];var MessageSource=_mago3d["MessageSource"];var GeoServer=_mago3d["GeoServer"];var AnimatedPerson=_mago3d["AnimatedPerson"];var Arrow=_mago3d["Arrow"];var BasicFactory=_mago3d["BasicFactory"];var BasicVehicle=_mago3d["BasicVehicle"];var Box=_mago3d["Box"];var ClippingBox=_mago3d["ClippingBox"];var ClippingPlane=_mago3d["ClippingPlane"];var ConcentricTubes=_mago3d["ConcentricTubes"];var Cylinder=_mago3d["Cylinder"];var Ellipsoid=_mago3d["Ellipsoid"];var ExtrusionBuilding=_mago3d["ExtrusionBuilding"];var GolfHoleFlag=_mago3d["GolfHoleFlag"];var ImageViewerRectangle=_mago3d["ImageViewerRectangle"];var Pipe=_mago3d["Pipe"];var PointMesh=_mago3d["PointMesh"];var RenderableObject=_mago3d["RenderableObject"];var SkeletalAnimationObject=_mago3d["SkeletalAnimationObject"];var SpeechBubble=_mago3d["SpeechBubble"];var TerrainScannerLinear=_mago3d["TerrainScannerLinear"];var TestFreeContourWallBuilding=_mago3d["TestFreeContourWallBuilding"];var Tube=_mago3d["Tube"];var VectorExtrudedMesh=_mago3d["VectorExtrudedMesh"];var VectorMesh=_mago3d["VectorMesh"];var Vehicle=_mago3d["Vehicle"];var Wheel=_mago3d["Wheel"];var Renderer=_mago3d["Renderer"];var RenderingSettings=_mago3d["RenderingSettings"];var SceneState=_mago3d["SceneState"];var Selection=_mago3d["Selection"];var SelectionCandidateFamily=_mago3d["SelectionCandidateFamily"];var SelectionManager=_mago3d["SelectionManager"];var AttribLocationState=_mago3d["AttribLocationState"];var PostFxShader=_mago3d["PostFxShader"];var PostFxShadersManager=_mago3d["PostFxShadersManager"];var ShaderSource=_mago3d["ShaderSource"];var Uniform1fDataPair=_mago3d["Uniform1fDataPair"];var Uniform1iDataPair=_mago3d["Uniform1iDataPair"];var UniformMatrix4fvDataPair=_mago3d["UniformMatrix4fvDataPair"];var UniformVec2fvDataPair=_mago3d["UniformVec2fvDataPair"];var UniformVec3fvDataPair=_mago3d["UniformVec3fvDataPair"];var UniformVec4fvDataPair=_mago3d["UniformVec4fvDataPair"];var Network=_mago3d["Network"];var NetworkEdge=_mago3d["NetworkEdge"];var NetworkNode=_mago3d["NetworkNode"];var NetworkSpace=_mago3d["NetworkSpace"];var abstract=_mago3d["abstract"];var ByteColor=_mago3d["ByteColor"];var CameraController=_mago3d["CameraController"];var createGuid=_mago3d["createGuid"];var defaultValue=_mago3d["defaultValue"];var defaultValueCheckLength=_mago3d["defaultValueCheckLength"];var defined=_mago3d["defined"];var GeometryUtils=_mago3d["GeometryUtils"];var isEmpty=_mago3d["isEmpty"];var loadWithXhr=_mago3d["loadWithXhr"];var ManagerUtils=_mago3d["ManagerUtils"];var workerDecodeTerrain=_mago3d["workerDecodeTerrain"];var workerParseTerrain=_mago3d["workerParseTerrain"];var OlMago3d=_mago3d["OlMago3d"];var Promise=_mago3d["Promise"];var GMLDataContainer=_mago3d["GMLDataContainer"];var JsonParsor_1_0_1=_mago3d["JsonParsor_1_0_1"];var JsonParsor_1_0_3=_mago3d["JsonParsor_1_0_3"];var CellSpaceMember=_mago3d["CellSpaceMember"];var StateMember=_mago3d["StateMember"];var SurfaceMember=_mago3d["SurfaceMember"];var TransitionMember=_mago3d["TransitionMember"];
    'use strict';


/**
 * @class DustLayer
 */
var DustLayer = function(options) 
{
	if (!(this instanceof DustLayer)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	this.weatherStation;
	this.gl;
	
	
};
'use strict';

var Slice = function() 
{
	// Image2D. numCols x numRows data.***
	this.dataArray;
	this.width;
	this.height;
	this.geographicExtent;
};

Slice.prototype.getValue = function(col, row)
{
	if (this.dataArray === undefined || this.dataArray.length === 0)
	{ return undefined; }
	
	var idx = Image3D.getIndexOfArray(this.width, col, row);
	return this.dataArray[idx];
};

Slice.prototype.setValue = function(col, row, value)
{
	if (this.dataArray === undefined || this.dataArray.length === 0)
	{ return false; }
	
	var idx = Image3D.getIndexOfArray(this.width, col, row);
	this.dataArray[idx] = value;
};

Slice.getMinMaxValuesOfArray = function(dataArray, resultValuesArray)
{
	// Provisional function.***
	if (dataArray === undefined || dataArray.length === 0)
	{ return resultValuesArray; }
	
	if (resultValuesArray === undefined)
	{ resultValuesArray = []; }
	
	var valuesCount = dataArray.length;
	var value, valueMin, valueMax;
	valueMin = dataArray[0]; // Init value min.***
	valueMax = dataArray[0]; // Init value max.***
	for (var i=1; i<valuesCount; i++)
	{
		value = dataArray[i];
		if (value > valueMax){ valueMax = value; }
		else if (value < valueMin){ valueMin = value; }
	}
	
	resultValuesArray.push(valueMin);
	resultValuesArray.push(valueMax);
	return resultValuesArray;
};

Slice.getColumn = function(slice, columnIdx, resultColumnValuesArray)
{
	// This function returns a desired columns values.***
	if (resultColumnValuesArray === undefined)
	{ return resultColumnValuesArray = []; }
	
	var height = slice, height;
	var value;
	var col = columnIdx;
	for (var row=0; row<height; row++)
	{
		value = slice.getValue(col, row);
		resultColumnValuesArray.push(value);
	}
	
	return resultColumnValuesArray;
};

Slice.getSplittedVertical = function(originalSlice, resultSplittedSlicesArray, originalGeoExtent, resultSplittedGeoExtentsArray, bUroborusWidth)
{
	// This function splits vertically a slice into a 2 slices.***
	//
	// +----+      +-+   +-+
	// |    |  ->  | | + | |
	// +----+      +-+   +-+
	
	if (originalSlice === undefined)
	{ return resultSplittedSlicesArray; }
	
	if (resultSplittedSlicesArray === undefined)
	{ return resultSplittedSlicesArray = []; }
	
	// Note: in the splitted zone, the values must be repeated in each splittedSlice.***
	var originalWidth = originalSlice.width;
	var originalHeight = originalSlice.height;
	
	// Calculate the splittingCol.***
	var splittingCol = Math.floor(originalWidth/2); // it can be with Math.ceil too.***
	var sliceLeft = new Slice();
	var sliceRight = new Slice();
	
	var leftWidth = splittingCol + 1;
	var rightWidth = originalWidth - splittingCol;
	
	if (bUroborusWidth === undefined)
	{ bUroborusWidth = false; }
	
	if (bUroborusWidth === true)
	{
		// Copy the firstColumn of the original slice, and insert into the lastColumn of the rightSlice.***
		// So, increment rightWidth in 1 unit.***
		rightWidth += 1;
	}
	
	var leftDataSize = leftWidth * originalHeight;
	var rightDataSize = rightWidth * originalHeight;
	
	if (originalGeoExtent && resultSplittedGeoExtentsArray)
	{
		// If optionally there are originalGeoExtent, then split it.***
		var originalMinGeoCoord = originalGeoExtent.minGeographicCoord;
		var originalMaxGeoCoord = originalGeoExtent.maxGeographicCoord;
		var longitudeRange = originalMaxGeoCoord.longitude - originalMinGeoCoord.longitude;
		var leftLongitudeRange = longitudeRange * (leftWidth/originalWidth);
		
		// Make the left & right geoExtent.***
		var leftGeoExtent = new GeographicExtent();
		var rightGeoExtent = new GeographicExtent();
		
		var minLon, minLat, minAlt, maxLon, maxLat, maxAlt;
		minLon = originalMinGeoCoord.longitude;
		minLat = originalMinGeoCoord.latitude;
		minAlt = originalMinGeoCoord.altitude;
		
		maxLon = originalMinGeoCoord.longitude + leftLongitudeRange;
		maxLat = originalMaxGeoCoord.latitude;
		maxAlt = originalMaxGeoCoord.altitude;
		
		leftGeoExtent.setExtent(minLon, minLat, minAlt, maxLon, maxLat, maxAlt);
		
		minLon = originalMinGeoCoord.longitude + leftLongitudeRange;
		minLat = originalMinGeoCoord.latitude;
		minAlt = originalMinGeoCoord.altitude;
		
		maxLon = originalMaxGeoCoord.longitude;
		maxLat = originalMaxGeoCoord.latitude;
		maxAlt = originalMaxGeoCoord.altitude;
		
		rightGeoExtent.setExtent(minLon, minLat, minAlt, maxLon, maxLat, maxAlt);
		
		resultSplittedGeoExtentsArray.push(leftGeoExtent);
		resultSplittedGeoExtentsArray.push(rightGeoExtent);
	}
	
	// Make splitted slices.***
	sliceLeft.dataArray = new Float32Array(leftDataSize);
	sliceLeft.width = leftWidth;
	sliceLeft.height = originalHeight;
	
	sliceRight.dataArray = new Float32Array(rightDataSize);
	sliceRight.width = rightWidth;
	sliceRight.height = originalHeight;
	
	var value;
	var idx;
	for (var r=0; r<originalHeight; r++)
	{
		for (var c=0; c<originalWidth; c++)
		{
			value = originalSlice.getValue(c, r);
			if (c < splittingCol)
			{
				sliceLeft.setValue(c, r, value);
			}
			else if (c === splittingCol)
			{
				sliceLeft.setValue(c, r, value);
				sliceRight.setValue(c - splittingCol, r, value);
			}
			else 
			{
				sliceRight.setValue(c - splittingCol, r, value);
			}
		}
		
		if (bUroborusWidth)
		{
			// Copy the firstColumn of the original slice, and insert into the lastColumn of the rightSlice.***
			value = originalSlice.getValue(0, r);
			sliceRight.setValue(sliceRight.width-1, r, value);
		}
	}
	
	resultSplittedSlicesArray.push(sliceLeft);
	resultSplittedSlicesArray.push(sliceRight);
	
	return resultSplittedSlicesArray;
};

Slice.exaggerateAltitude = function(slice)
{
	
};
//------------------------------------------------------------------------------

var Stack = function() 
{
	this.slicesArray;
};

Stack.prototype.newSlice = function()
{
	if (this.slicesArray === undefined)
	{ this.slicesArray = []; }
	
	var slice = new Slice();
	this.slicesArray.push(slice);
	return slice;
};

Stack.prototype.getSlicesCount = function()
{
	if (this.slicesArray === undefined)
	{ return 0; }
	
	return this.slicesArray.length;
};

Stack.prototype.getSlice = function(idx)
{
	if (this.slicesArray === undefined)
	{ return undefined; }
	
	if (idx >= this.slicesArraylength)
	{ return undefined; }
	
	return this.slicesArray[idx];
};
//------------------------------------------------------------------------------

var Image3D = function() 
{
	this.stacksArray;
	this.numSlicesPerStack;
};

Image3D.getIndexOfArray = function(numCols, col, row) 
{
	// function valid if numStacks = 1.***
	return col + row * numCols;
};

Image3D.getIndexOfArray3D = function(numCols, numRows, numSlices, numStacks, col, row, slice, stack)
{
	var idx = -1;
	
	// 1rst, calculate x,y for an uniqueSlice.***
	var x = stack * numCols + col;
	var y = slice * numRows + row;
	
	// x,y are the coordenates for an uniqueSlice image.***
	var uniqueSliceNumCols = numStacks * numCols;
	//var uniqueSliceNumRows = numSlices * numRows; // no necessary.***
	idx = Image3D.getIndexOfArray(uniqueSliceNumCols, x, y);
	
	return idx;
};

Image3D.prototype.getStack = function(idx) 
{
	if (this.stacksArray === undefined)
	{ return undefined; }
	
	if (idx >= this.stacksArray.length)
	{ return undefined; }
	
	return this.stacksArray[idx];
};

Image3D.prototype.getStacksCount = function() 
{
	if (this.stacksArray === undefined)
	{ return 0; }
	
	return this.stacksArray.length;
};

Image3D.prototype.newStack = function()
{
	if (this.stacksArray === undefined)
	{ this.stacksArray = []; }
	
	var stack = new Stack();
	this.stacksArray.push(stack);
	return stack;
};

Image3D.prototype.reverseSlicesOfStacks = function()
{
	if (this.stacksArray === undefined)
	{ return; }
	
	var stacksCount = this.stacksArray.length;
	for (var i=0; i<stacksCount; i++)
	{
		var stack = this.stacksArray[i];
		stack.slicesArray.reverse();
	}
};

Image3D.prototype.getAnUniqueSlice = function(resultSlice)
{
	if (resultSlice === undefined)
	{ resultSlice = new Slice(); }
	
	// Put all stacks into the resultSlice.***
	// 1rst, calculate the width & height of resultSlice.***

	var numStacks = this.stacksArray.length;
	var aStack = this.stacksArray[0];
	
	// Note: in the last stack, the numSlices can be minor than other stacks.***
	if (this.numSlicesPerStack === undefined)
	{ this.numSlicesPerStack = aStack.slicesArray.length; }
	
	var numSlices = this.numSlicesPerStack;
	var aSlice = aStack.slicesArray[0];
	var sliceWidth = aSlice.width;
	var sliceHeight = aSlice.height;
	
	var resultSliceWidth = sliceWidth * numStacks;
	var resultSliceHeight = sliceHeight * numSlices;
	resultSlice.width = resultSliceWidth;
	resultSlice.height = resultSliceHeight;
	var resultSliceSize = resultSliceWidth * resultSliceHeight;
	resultSlice.dataArray = new Uint8Array(resultSliceSize);
	
	// now, fill the resultSlice.***
	var idx = -1;
	var value;
	for (var t=0; t<numStacks; t++)
	{
		aStack = this.stacksArray[t];
		var slicesCount = aStack.slicesArray.length;
		for (var s=0; s<slicesCount; s++)
		{
			aSlice = aStack.slicesArray[s];
			var numRows = aSlice.height;
			var numCols = aSlice.width;
			for (var j=0; j<numRows; j++)
			{
				for (var i=0; i<numCols; i++)
				{
					if (i >= sliceWidth -1)
					{ var hola = 0; }
					
					value = aSlice.getValue(i, j);
					idx = Image3D.getIndexOfArray3D(numCols, numRows, numSlices, numStacks, i, j, s, t);
					resultSlice.dataArray[idx] = value;
				}
			}
		}
	}
	
	return resultSlice;
};


//------------------------------------------------------------------------------

var Image3DManager = function() 
{
	
};

Image3DManager.calculateNumStacks = function(maxTextureSizeAllowed, imageWidth, imageHeight, imageSlices) 
{
	// Note: if the image is very big, is possible that there are no solution.***
	//  (e.g. GTX480) reports MAX_TEXTURE_SIZE = 16384.
	var resultNumStacks = -1;
	if (imageWidth > maxTextureSizeAllowed)
	{ return -1; }
	
	// The limitation is from webgl gl.MAX_TEXTURE_SIZE.***
	var finished = false;
	var candidateNumStacks = 1;
	while (!finished)
	{
		var totalHeight = imageHeight * Math.ceil(imageSlices / candidateNumStacks);
		if (totalHeight < maxTextureSizeAllowed)
		{
			finished = true;
			
			// But, once finished, must check if the resultWidth is inferior to gl.MAX_TEXTURE_SIZE.***
			if (imageWidth * candidateNumStacks > maxTextureSizeAllowed)
			{
				return -1;
			}
			
			resultNumStacks = candidateNumStacks;
		}
		
		candidateNumStacks++;
		
		if (candidateNumStacks >= imageSlices)
		{ return -1; }
	}
	
	return resultNumStacks;
};

Image3DManager.convertMonoStackImage3DToMultiStackImage3D = function(image3d, resultImage3d, maxTextureSizeAllowed)
{
	// Note: the image3d must have only one stack.***
	// This function converts a monoStackImage3d to a multiStackImage3d.***
	if (image3d === undefined || image3d.stacksArray === undefined || image3d.stacksArray.length === 0)
	{ return; }
	
	if (resultImage3d === undefined)
	{ resultImage3d = new Image3D(); }
	
	// Must check the webgl limitations of gl.getParameter(gl.MAX_TEXTURE_SIZE).***
	var stack = image3d.stacksArray[0];
	var slice = stack.slicesArray[0]; // take any slice.***
	var imageWidth = slice.width;
	var imageHeight = slice.height;
	var numSlices = stack.slicesArray.length;
	var resultNumStacks = Image3DManager.calculateNumStacks(maxTextureSizeAllowed, imageWidth, imageHeight, numSlices);
	var resultNumSlices = Math.ceil(numSlices/resultNumStacks);
	// Note: in the last stack, the numSlices can be minor than other stacks.***
	resultImage3d.numSlicesPerStack = resultNumSlices;
	
	var resultSlicesCounter = 0;
	var resultStack = resultImage3d.newStack();
	resultStack.slicesArray = [];
	for (var s=0; s<numSlices; s++)
	{
		if (resultSlicesCounter >= resultNumSlices)
		{
			resultStack = resultImage3d.newStack();
			resultStack.slicesArray = [];
			resultSlicesCounter = 0;
		}
		
		var slice = stack.slicesArray[s];
		resultStack.slicesArray.push(slice);
		
		resultSlicesCounter++;
	}
	
	// Reverse slices of stacks.***
	resultImage3d.reverseSlicesOfStacks();
	
	return resultImage3d;
};
















































'use strict';

var precipDataCoords = {"lat" : [89.921875, 89.765625, 89.609375, 89.453125, 89.296875, 89.140625, 88.984375, 88.828125, 88.671875, 88.515625, 88.359375, 88.203125, 88.046875, 87.890625, 87.734375, 87.578125, 87.421875, 87.265625, 87.109375, 86.953125, 86.796875, 86.640625, 86.484375, 86.328125, 86.171875, 86.015625, 85.859375, 85.703125, 85.546875, 85.390625, 85.234375, 85.078125, 84.921875, 84.765625, 84.609375, 84.453125, 84.296875, 84.140625, 83.984375, 83.828125, 83.671875, 83.515625, 83.359375, 83.203125, 83.046875, 82.890625, 82.734375, 82.578125, 82.421875, 82.265625, 82.109375, 81.953125, 81.796875, 81.640625, 81.484375, 81.328125, 81.171875, 81.015625, 80.859375, 80.703125, 80.546875, 80.390625, 80.234375, 80.078125, 79.921875, 79.765625, 79.609375, 79.453125, 79.296875, 79.140625, 78.984375, 78.828125, 78.671875, 78.515625, 78.359375, 78.203125, 78.046875, 77.890625, 77.734375, 77.578125, 77.421875, 77.265625, 77.109375, 76.953125, 76.796875, 76.640625, 76.484375, 76.328125, 76.171875, 76.015625, 75.859375, 75.703125, 75.546875, 75.390625, 75.234375, 75.078125, 74.921875, 74.765625, 74.609375, 74.453125, 74.296875, 74.140625, 73.984375, 73.828125, 73.671875, 73.515625, 73.359375, 73.203125, 73.046875, 72.890625, 72.734375, 72.578125, 72.421875, 72.265625, 72.109375, 71.953125, 71.796875, 71.640625, 71.484375, 71.328125, 71.171875, 71.015625, 70.859375, 70.703125, 70.546875, 70.390625, 70.234375, 70.078125, 69.921875, 69.765625, 69.609375, 69.453125, 69.296875, 69.140625, 68.984375, 68.828125, 68.671875, 68.515625, 68.359375, 68.203125, 68.046875, 67.890625, 67.734375, 67.578125, 67.421875, 67.265625, 67.109375, 66.953125, 66.796875, 66.640625, 66.484375, 66.328125, 66.171875, 66.015625, 65.859375, 65.703125, 65.546875, 65.390625, 65.234375, 65.078125, 64.921875, 64.765625, 64.609375, 64.453125, 64.296875, 64.140625, 63.984375, 63.828125, 63.671875, 63.515625, 63.359375, 63.203125, 63.046875, 62.890625, 62.734375, 62.578125, 62.421875, 62.265625, 62.109375, 61.953125, 61.796875, 61.640625, 61.484375, 61.328125, 61.171875, 61.015625, 60.859375, 60.703125, 60.546875, 60.390625, 60.234375, 60.078125, 59.921875, 59.765625, 59.609375, 59.453125, 59.296875, 59.140625, 58.984375, 58.828125, 58.671875, 58.515625, 58.359375, 58.203125, 58.046875, 57.890625, 57.734375, 57.578125, 57.421875, 57.265625, 57.109375, 56.953125, 56.796875, 56.640625, 56.484375, 56.328125, 56.171875, 56.015625, 55.859375, 55.703125, 55.546875, 55.390625, 55.234375, 55.078125, 54.921875, 54.765625, 54.609375, 54.453125, 54.296875, 54.140625, 53.984375, 53.828125, 53.671875, 53.515625, 53.359375, 53.203125, 53.046875, 52.890625, 52.734375, 52.578125, 52.421875, 52.265625, 52.109375, 51.953125, 51.796875, 51.640625, 51.484375, 51.328125, 51.171875, 51.015625, 50.859375, 50.703125, 50.546875, 50.390625, 50.234375, 50.078125, 49.921875, 49.765625, 49.609375, 49.453125, 49.296875, 49.140625, 48.984375, 48.828125, 48.671875, 48.515625, 48.359375, 48.203125, 48.046875, 47.890625, 47.734375, 47.578125, 47.421875, 47.265625, 47.109375, 46.953125, 46.796875, 46.640625, 46.484375, 46.328125, 46.171875, 46.015625, 45.859375, 45.703125, 45.546875, 45.390625, 45.234375, 45.078125, 44.921875, 44.765625, 44.609375, 44.453125, 44.296875, 44.140625, 43.984375, 43.828125, 43.671875, 43.515625, 43.359375, 43.203125, 43.046875, 42.890625, 42.734375, 42.578125, 42.421875, 42.265625, 42.109375, 41.953125, 41.796875, 41.640625, 41.484375, 41.328125, 41.171875, 41.015625, 40.859375, 40.703125, 40.546875, 40.390625, 40.234375, 40.078125, 39.921875, 39.765625, 39.609375, 39.453125, 39.296875, 39.140625, 38.984375, 38.828125, 38.671875, 38.515625, 38.359375, 38.203125, 38.046875, 37.890625, 37.734375, 37.578125, 37.421875, 37.265625, 37.109375, 36.953125, 36.796875, 36.640625, 36.484375, 36.328125, 36.171875, 36.015625, 35.859375, 35.703125, 35.546875, 35.390625, 35.234375, 35.078125, 34.921875, 34.765625, 34.609375, 34.453125, 34.296875, 34.140625, 33.984375, 33.828125, 33.671875, 33.515625, 33.359375, 33.203125, 33.046875, 32.890625, 32.734375, 32.578125, 32.421875, 32.265625, 32.109375, 31.953125, 31.796875, 31.640625, 31.484375, 31.328125, 31.171875, 31.015625, 30.859375, 30.703125, 30.546875, 30.390625, 30.234375, 30.078125, 29.921875, 29.765625, 29.609375, 29.453125, 29.296875, 29.140625, 28.984375, 28.828125, 28.671875, 28.515625, 28.359375, 28.203125, 28.046875, 27.890625, 27.734375, 27.578125, 27.421875, 27.265625, 27.109375, 26.953125, 26.796875, 26.640625, 26.484375, 26.328125, 26.171875, 26.015625, 25.859375, 25.703125, 25.546875, 25.390625, 25.234375, 25.078125, 24.921875, 24.765625, 24.609375, 24.453125, 24.296875, 24.140625, 23.984375, 23.828125, 23.671875, 23.515625, 23.359375, 23.203125, 23.046875, 22.890625, 22.734375, 22.578125, 22.421875, 22.265625, 22.109375, 21.953125, 21.796875, 21.640625, 21.484375, 21.328125, 21.171875, 21.015625, 20.859375, 20.703125, 20.546875, 20.390625, 20.234375, 20.078125, 19.921875, 19.765625, 19.609375, 19.453125, 19.296875, 19.140625, 18.984375, 18.828125, 18.671875, 18.515625, 18.359375, 18.203125, 18.046875, 17.890625, 17.734375, 17.578125, 17.421875, 17.265625, 17.109375, 16.953125, 16.796875, 16.640625, 16.484375, 16.328125, 16.171875, 16.015625, 15.859375, 15.703125, 15.546875, 15.390625, 15.234375, 15.078125, 14.921875, 14.765625, 14.609375, 14.453125, 14.296875, 14.140625, 13.984375, 13.828125, 13.671875, 13.515625, 13.359375, 13.203125, 13.046875, 12.890625, 12.734375, 12.578125, 12.421875, 12.265625, 12.109375, 11.953125, 11.796875, 11.640625, 11.484375, 11.328125, 11.171875, 11.015625, 10.859375, 10.703125, 10.546875, 10.390625, 10.234375, 10.078125, 9.921875, 9.765625, 9.609375, 9.453125, 9.296875, 9.140625, 8.984375, 8.828125, 8.671875, 8.515625, 8.359375, 8.203125, 8.046875, 7.890625, 7.734375, 7.578125, 7.421875, 7.265625, 7.109375, 6.953125, 6.796875, 6.640625, 6.484375, 6.328125, 6.171875, 6.015625, 5.859375, 5.703125, 5.546875, 5.390625, 5.234375, 5.078125, 4.921875, 4.765625, 4.609375, 4.453125, 4.296875, 4.140625, 3.984375, 3.828125, 3.671875, 3.515625, 3.359375, 3.203125, 3.046875, 2.890625, 2.734375, 2.578125, 2.421875, 2.265625, 2.109375, 1.953125, 1.796875, 1.640625, 1.484375, 1.328125, 1.171875, 1.015625, 0.859375, 0.703125, 0.546875, 0.390625, 0.234375, 0.078125, -0.078125, -0.234375, -0.390625, -0.546875, -0.703125, -0.859375, -1.015625, -1.171875, -1.328125, -1.484375, -1.640625, -1.796875, -1.953125, -2.109375, -2.265625, -2.421875, -2.578125, -2.734375, -2.890625, -3.046875, -3.203125, -3.359375, -3.515625, -3.671875, -3.828125, -3.984375, -4.140625, -4.296875, -4.453125, -4.609375, -4.765625, -4.921875, -5.078125, -5.234375, -5.390625, -5.546875, -5.703125, -5.859375, -6.015625, -6.171875, -6.328125, -6.484375, -6.640625, -6.796875, -6.953125, -7.109375, -7.265625, -7.421875, -7.578125, -7.734375, -7.890625, -8.046875, -8.203125, -8.359375, -8.515625, -8.671875, -8.828125, -8.984375, -9.140625, -9.296875, -9.453125, -9.609375, -9.765625, -9.921875, -10.078125, -10.234375, -10.390625, -10.546875, -10.703125, -10.859375, -11.015625, -11.171875, -11.328125, -11.484375, -11.640625, -11.796875, -11.953125, -12.109375, -12.265625, -12.421875, -12.578125, -12.734375, -12.890625, -13.046875, -13.203125, -13.359375, -13.515625, -13.671875, -13.828125, -13.984375, -14.140625, -14.296875, -14.453125, -14.609375, -14.765625, -14.921875, -15.078125, -15.234375, -15.390625, -15.546875, -15.703125, -15.859375, -16.015625, -16.171875, -16.328125, -16.484375, -16.640625, -16.796875, -16.953125, -17.109375, -17.265625, -17.421875, -17.578125, -17.734375, -17.890625, -18.046875, -18.203125, -18.359375, -18.515625, -18.671875, -18.828125, -18.984375, -19.140625, -19.296875, -19.453125, -19.609375, -19.765625, -19.921875, -20.078125, -20.234375, -20.390625, -20.546875, -20.703125, -20.859375, -21.015625, -21.171875, -21.328125, -21.484375, -21.640625, -21.796875, -21.953125, -22.109375, -22.265625, -22.421875, -22.578125, -22.734375, -22.890625, -23.046875, -23.203125, -23.359375, -23.515625, -23.671875, -23.828125, -23.984375, -24.140625, -24.296875, -24.453125, -24.609375, -24.765625, -24.921875, -25.078125, -25.234375, -25.390625, -25.546875, -25.703125, -25.859375, -26.015625, -26.171875, -26.328125, -26.484375, -26.640625, -26.796875, -26.953125, -27.109375, -27.265625, -27.421875, -27.578125, -27.734375, -27.890625, -28.046875, -28.203125, -28.359375, -28.515625, -28.671875, -28.828125, -28.984375, -29.140625, -29.296875, -29.453125, -29.609375, -29.765625, -29.921875, -30.078125, -30.234375, -30.390625, -30.546875, -30.703125, -30.859375, -31.015625, -31.171875, -31.328125, -31.484375, -31.640625, -31.796875, -31.953125, -32.109375, -32.265625, -32.421875, -32.578125, -32.734375, -32.890625, -33.046875, -33.203125, -33.359375, -33.515625, -33.671875, -33.828125, -33.984375, -34.140625, -34.296875, -34.453125, -34.609375, -34.765625, -34.921875, -35.078125, -35.234375, -35.390625, -35.546875, -35.703125, -35.859375, -36.015625, -36.171875, -36.328125, -36.484375, -36.640625, -36.796875, -36.953125, -37.109375, -37.265625, -37.421875, -37.578125, -37.734375, -37.890625, -38.046875, -38.203125, -38.359375, -38.515625, -38.671875, -38.828125, -38.984375, -39.140625, -39.296875, -39.453125, -39.609375, -39.765625, -39.921875, -40.078125, -40.234375, -40.390625, -40.546875, -40.703125, -40.859375, -41.015625, -41.171875, -41.328125, -41.484375, -41.640625, -41.796875, -41.953125, -42.109375, -42.265625, -42.421875, -42.578125, -42.734375, -42.890625, -43.046875, -43.203125, -43.359375, -43.515625, -43.671875, -43.828125, -43.984375, -44.140625, -44.296875, -44.453125, -44.609375, -44.765625, -44.921875, -45.078125, -45.234375, -45.390625, -45.546875, -45.703125, -45.859375, -46.015625, -46.171875, -46.328125, -46.484375, -46.640625, -46.796875, -46.953125, -47.109375, -47.265625, -47.421875, -47.578125, -47.734375, -47.890625, -48.046875, -48.203125, -48.359375, -48.515625, -48.671875, -48.828125, -48.984375, -49.140625, -49.296875, -49.453125, -49.609375, -49.765625, -49.921875, -50.078125, -50.234375, -50.390625, -50.546875, -50.703125, -50.859375, -51.015625, -51.171875, -51.328125, -51.484375, -51.640625, -51.796875, -51.953125, -52.109375, -52.265625, -52.421875, -52.578125, -52.734375, -52.890625, -53.046875, -53.203125, -53.359375, -53.515625, -53.671875, -53.828125, -53.984375, -54.140625, -54.296875, -54.453125, -54.609375, -54.765625, -54.921875, -55.078125, -55.234375, -55.390625, -55.546875, -55.703125, -55.859375, -56.015625, -56.171875, -56.328125, -56.484375, -56.640625, -56.796875, -56.953125, -57.109375, -57.265625, -57.421875, -57.578125, -57.734375, -57.890625, -58.046875, -58.203125, -58.359375, -58.515625, -58.671875, -58.828125, -58.984375, -59.140625, -59.296875, -59.453125, -59.609375, -59.765625, -59.921875, -60.078125, -60.234375, -60.390625, -60.546875, -60.703125, -60.859375, -61.015625, -61.171875, -61.328125, -61.484375, -61.640625, -61.796875, -61.953125, -62.109375, -62.265625, -62.421875, -62.578125, -62.734375, -62.890625, -63.046875, -63.203125, -63.359375, -63.515625, -63.671875, -63.828125, -63.984375, -64.140625, -64.296875, -64.453125, -64.609375, -64.765625, -64.921875, -65.078125, -65.234375, -65.390625, -65.546875, -65.703125, -65.859375, -66.015625, -66.171875, -66.328125, -66.484375, -66.640625, -66.796875, -66.953125, -67.109375, -67.265625, -67.421875, -67.578125, -67.734375, -67.890625, -68.046875, -68.203125, -68.359375, -68.515625, -68.671875, -68.828125, -68.984375, -69.140625, -69.296875, -69.453125, -69.609375, -69.765625, -69.921875, -70.078125, -70.234375, -70.390625, -70.546875, -70.703125, -70.859375, -71.015625, -71.171875, -71.328125, -71.484375, -71.640625, -71.796875, -71.953125, -72.109375, -72.265625, -72.421875, -72.578125, -72.734375, -72.890625, -73.046875, -73.203125, -73.359375, -73.515625, -73.671875, -73.828125, -73.984375, -74.140625, -74.296875, -74.453125, -74.609375, -74.765625, -74.921875, -75.078125, -75.234375, -75.390625, -75.546875, -75.703125, -75.859375, -76.015625, -76.171875, -76.328125, -76.484375, -76.640625, -76.796875, -76.953125, -77.109375, -77.265625, -77.421875, -77.578125, -77.734375, -77.890625, -78.046875, -78.203125, -78.359375, -78.515625, -78.671875, -78.828125, -78.984375, -79.140625, -79.296875, -79.453125, -79.609375, -79.765625, -79.921875, -80.078125, -80.234375, -80.390625, -80.546875, -80.703125, -80.859375, -81.015625, -81.171875, -81.328125, -81.484375, -81.640625, -81.796875, -81.953125, -82.109375, -82.265625, -82.421875, -82.578125, -82.734375, -82.890625, -83.046875, -83.203125, -83.359375, -83.515625, -83.671875, -83.828125, -83.984375, -84.140625, -84.296875, -84.453125, -84.609375, -84.765625, -84.921875, -85.078125, -85.234375, -85.390625, -85.546875, -85.703125, -85.859375, -86.015625, -86.171875, -86.328125, -86.484375, -86.640625, -86.796875, -86.953125, -87.109375, -87.265625, -87.421875, -87.578125, -87.734375, -87.890625, -88.046875, -88.203125, -88.359375, -88.515625, -88.671875, -88.828125, -88.984375, -89.140625, -89.296875, -89.453125, -89.609375, -89.765625, -89.921875],
	"lon" : [0.117188, 0.351563, 0.585938, 0.820313, 1.054688, 1.289063, 1.523438, 1.757813, 1.992188, 2.226563, 2.460938, 2.695313, 2.929688, 3.164063, 3.398438, 3.632813, 3.867188, 4.101563, 4.335938, 4.570313, 4.804688, 5.039063, 5.273438, 5.507813, 5.742188, 5.976563, 6.210938, 6.445313, 6.679688, 6.914063, 7.148438, 7.382813, 7.617188, 7.851563, 8.085938, 8.320313, 8.554688, 8.789063, 9.023438, 9.257813, 9.492188, 9.726563, 9.960938, 10.195313, 10.429688, 10.664063, 10.898438, 11.132813, 11.367188, 11.601563, 11.835938, 12.070313, 12.304688, 12.539063, 12.773438, 13.007813, 13.242188, 13.476563, 13.710938, 13.945313, 14.179688, 14.414063, 14.648438, 14.882813, 15.117188, 15.351563, 15.585938, 15.820313, 16.054688, 16.289062, 16.523438, 16.757812, 16.992188, 17.226562, 17.460938, 17.695312, 17.929688, 18.164062, 18.398438, 18.632812, 18.867188, 19.101562, 19.335938, 19.570312, 19.804688, 20.039062, 20.273438, 20.507812, 20.742188, 20.976562, 21.210938, 21.445312, 21.679688, 21.914062, 22.148438, 22.382812, 22.617188, 22.851562, 23.085938, 23.320312, 23.554688, 23.789062, 24.023438, 24.257812, 24.492188, 24.726562, 24.960938, 25.195312, 25.429688, 25.664062, 25.898438, 26.132812, 26.367188, 26.601562, 26.835938, 27.070312, 27.304688, 27.539062, 27.773438, 28.007812, 28.242188, 28.476562, 28.710938, 28.945312, 29.179688, 29.414062, 29.648438, 29.882812, 30.117188, 30.351562, 30.585938, 30.820312, 31.054688, 31.289062, 31.523438, 31.757812, 31.992188, 32.226562, 32.460938, 32.695312, 32.929688, 33.164062, 33.398438, 33.632812, 33.867188, 34.101562, 34.335938, 34.570312, 34.804688, 35.039062, 35.273438, 35.507812, 35.742188, 35.976562, 36.210938, 36.445312, 36.679688, 36.914062, 37.148438, 37.382812, 37.617188, 37.851562, 38.085938, 38.320312, 38.554688, 38.789062, 39.023438, 39.257812, 39.492188, 39.726562, 39.960938, 40.195312, 40.429688, 40.664062, 40.898438, 41.132812, 41.367188, 41.601562, 41.835938, 42.070312, 42.304688, 42.539062, 42.773438, 43.007812, 43.242188, 43.476562, 43.710938, 43.945312, 44.179688, 44.414062, 44.648438, 44.882812, 45.117188, 45.351562, 45.585938, 45.820312, 46.054688, 46.289062, 46.523438, 46.757812, 46.992188, 47.226562, 47.460938, 47.695312, 47.929688, 48.164062, 48.398438, 48.632812, 48.867188, 49.101562, 49.335938, 49.570312, 49.804688, 50.039062, 50.273438, 50.507812, 50.742188, 50.976562, 51.210938, 51.445312, 51.679688, 51.914062, 52.148438, 52.382812, 52.617188, 52.851562, 53.085938, 53.320312, 53.554688, 53.789062, 54.023438, 54.257812, 54.492188, 54.726562, 54.960938, 55.195312, 55.429688, 55.664062, 55.898438, 56.132812, 56.367188, 56.601562, 56.835938, 57.070312, 57.304688, 57.539062, 57.773438, 58.007812, 58.242188, 58.476562, 58.710938, 58.945312, 59.179688, 59.414062, 59.648438, 59.882812, 60.117188, 60.351562, 60.585938, 60.820312, 61.054688, 61.289062, 61.523438, 61.757812, 61.992188, 62.226562, 62.460938, 62.695312, 62.929688, 63.164062, 63.398438, 63.632812, 63.867188, 64.10156, 64.33594, 64.57031, 64.80469, 65.03906, 65.27344, 65.50781, 65.74219, 65.97656, 66.21094, 66.44531, 66.67969, 66.91406, 67.14844, 67.38281, 67.61719, 67.85156, 68.08594, 68.32031, 68.55469, 68.78906, 69.02344, 69.25781, 69.49219, 69.72656, 69.96094, 70.19531, 70.42969, 70.66406, 70.89844, 71.13281, 71.36719, 71.60156, 71.83594, 72.07031, 72.30469, 72.53906, 72.77344, 73.00781, 73.24219, 73.47656, 73.71094, 73.94531, 74.17969, 74.41406, 74.64844, 74.88281, 75.11719, 75.35156, 75.58594, 75.82031, 76.05469, 76.28906, 76.52344, 76.75781, 76.99219, 77.22656, 77.46094, 77.69531, 77.92969, 78.16406, 78.39844, 78.63281, 78.86719, 79.10156, 79.33594, 79.57031, 79.80469, 80.03906, 80.27344, 80.50781, 80.74219, 80.97656, 81.21094, 81.44531, 81.67969, 81.91406, 82.14844, 82.38281, 82.61719, 82.85156, 83.08594, 83.32031, 83.55469, 83.78906, 84.02344, 84.25781, 84.49219, 84.72656, 84.96094, 85.19531, 85.42969, 85.66406, 85.89844, 86.13281, 86.36719, 86.60156, 86.83594, 87.07031, 87.30469, 87.53906, 87.77344, 88.00781, 88.24219, 88.47656, 88.71094, 88.94531, 89.17969, 89.41406, 89.64844, 89.88281, 90.11719, 90.35156, 90.58594, 90.82031, 91.05469, 91.28906, 91.52344, 91.75781, 91.99219, 92.22656, 92.46094, 92.69531, 92.92969, 93.16406, 93.39844, 93.63281, 93.86719, 94.10156, 94.33594, 94.57031, 94.80469, 95.03906, 95.27344, 95.50781, 95.74219, 95.97656, 96.21094, 96.44531, 96.67969, 96.91406, 97.14844, 97.38281, 97.61719, 97.85156, 98.08594, 98.32031, 98.55469, 98.78906, 99.02344, 99.25781, 99.49219, 99.72656, 99.96094, 100.19531, 100.42969, 100.66406, 100.89844, 101.13281, 101.36719, 101.60156, 101.83594, 102.07031, 102.30469, 102.53906, 102.77344, 103.00781, 103.24219, 103.47656, 103.71094, 103.94531, 104.17969, 104.41406, 104.64844, 104.88281, 105.11719, 105.35156, 105.58594, 105.82031, 106.05469, 106.28906, 106.52344, 106.75781, 106.99219, 107.22656, 107.46094, 107.69531, 107.92969, 108.16406, 108.39844, 108.63281, 108.86719, 109.10156, 109.33594, 109.57031, 109.80469, 110.03906, 110.27344, 110.50781, 110.74219, 110.97656, 111.21094, 111.44531, 111.67969, 111.91406, 112.14844, 112.38281, 112.61719, 112.85156, 113.08594, 113.32031, 113.55469, 113.78906, 114.02344, 114.25781, 114.49219, 114.72656, 114.96094, 115.19531, 115.42969, 115.66406, 115.89844, 116.13281, 116.36719, 116.60156, 116.83594, 117.07031, 117.30469, 117.53906, 117.77344, 118.00781, 118.24219, 118.47656, 118.71094, 118.94531, 119.17969, 119.41406, 119.64844, 119.88281, 120.11719, 120.35156, 120.58594, 120.82031, 121.05469, 121.28906, 121.52344, 121.75781, 121.99219, 122.22656, 122.46094, 122.69531, 122.92969, 123.16406, 123.39844, 123.63281, 123.86719, 124.10156, 124.33594, 124.57031, 124.80469, 125.03906, 125.27344, 125.50781, 125.74219, 125.97656, 126.21094, 126.44531, 126.67969, 126.91406, 127.14844, 127.38281, 127.61719, 127.85156, 128.08594, 128.32031, 128.55469, 128.78906, 129.02344, 129.25781, 129.49219, 129.72656, 129.96094, 130.19531, 130.42969, 130.66406, 130.89844, 131.13281, 131.36719, 131.60156, 131.83594, 132.07031, 132.30469, 132.53906, 132.77344, 133.00781, 133.24219, 133.47656, 133.71094, 133.94531, 134.17969, 134.41406, 134.64844, 134.88281, 135.11719, 135.35156, 135.58594, 135.82031, 136.05469, 136.28906, 136.52344, 136.75781, 136.99219, 137.22656, 137.46094, 137.69531, 137.92969, 138.16406, 138.39844, 138.63281, 138.86719, 139.10156, 139.33594, 139.57031, 139.80469, 140.03906, 140.27344, 140.50781, 140.74219, 140.97656, 141.21094, 141.44531, 141.67969, 141.91406, 142.14844, 142.38281, 142.61719, 142.85156, 143.08594, 143.32031, 143.55469, 143.78906, 144.02344, 144.25781, 144.49219, 144.72656, 144.96094, 145.19531, 145.42969, 145.66406, 145.89844, 146.13281, 146.36719, 146.60156, 146.83594, 147.07031, 147.30469, 147.53906, 147.77344, 148.00781, 148.24219, 148.47656, 148.71094, 148.94531, 149.17969, 149.41406, 149.64844, 149.88281, 150.11719, 150.35156, 150.58594, 150.82031, 151.05469, 151.28906, 151.52344, 151.75781, 151.99219, 152.22656, 152.46094, 152.69531, 152.92969, 153.16406, 153.39844, 153.63281, 153.86719, 154.10156, 154.33594, 154.57031, 154.80469, 155.03906, 155.27344, 155.50781, 155.74219, 155.97656, 156.21094, 156.44531, 156.67969, 156.91406, 157.14844, 157.38281, 157.61719, 157.85156, 158.08594, 158.32031, 158.55469, 158.78906, 159.02344, 159.25781, 159.49219, 159.72656, 159.96094, 160.19531, 160.42969, 160.66406, 160.89844, 161.13281, 161.36719, 161.60156, 161.83594, 162.07031, 162.30469, 162.53906, 162.77344, 163.00781, 163.24219, 163.47656, 163.71094, 163.94531, 164.17969, 164.41406, 164.64844, 164.88281, 165.11719, 165.35156, 165.58594, 165.82031, 166.05469, 166.28906, 166.52344, 166.75781, 166.99219, 167.22656, 167.46094, 167.69531, 167.92969, 168.16406, 168.39844, 168.63281, 168.86719, 169.10156, 169.33594, 169.57031, 169.80469, 170.03906, 170.27344, 170.50781, 170.74219, 170.97656, 171.21094, 171.44531, 171.67969, 171.91406, 172.14844, 172.38281, 172.61719, 172.85156, 173.08594, 173.32031, 173.55469, 173.78906, 174.02344, 174.25781, 174.49219, 174.72656, 174.96094, 175.19531, 175.42969, 175.66406, 175.89844, 176.13281, 176.36719, 176.60156, 176.83594, 177.07031, 177.30469, 177.53906, 177.77344, 178.00781, 178.24219, 178.47656, 178.71094, 178.94531, 179.17969, 179.41406, 179.64844, 179.88281, 180.11719, 180.35156, 180.58594, 180.82031, 181.05469, 181.28906, 181.52344, 181.75781, 181.99219, 182.22656, 182.46094, 182.69531, 182.92969, 183.16406, 183.39844, 183.63281, 183.86719, 184.10156, 184.33594, 184.57031, 184.80469, 185.03906, 185.27344, 185.50781, 185.74219, 185.97656, 186.21094, 186.44531, 186.67969, 186.91406, 187.14844, 187.38281, 187.61719, 187.85156, 188.08594, 188.32031, 188.55469, 188.78906, 189.02344, 189.25781, 189.49219, 189.72656, 189.96094, 190.19531, 190.42969, 190.66406, 190.89844, 191.13281, 191.36719, 191.60156, 191.83594, 192.07031, 192.30469, 192.53906, 192.77344, 193.00781, 193.24219, 193.47656, 193.71094, 193.94531, 194.17969, 194.41406, 194.64844, 194.88281, 195.11719, 195.35156, 195.58594, 195.82031, 196.05469, 196.28906, 196.52344, 196.75781, 196.99219, 197.22656, 197.46094, 197.69531, 197.92969, 198.16406, 198.39844, 198.63281, 198.86719, 199.10156, 199.33594, 199.57031, 199.80469, 200.03906, 200.27344, 200.50781, 200.74219, 200.97656, 201.21094, 201.44531, 201.67969, 201.91406, 202.14844, 202.38281, 202.61719, 202.85156, 203.08594, 203.32031, 203.55469, 203.78906, 204.02344, 204.25781, 204.49219, 204.72656, 204.96094, 205.19531, 205.42969, 205.66406, 205.89844, 206.13281, 206.36719, 206.60156, 206.83594, 207.07031, 207.30469, 207.53906, 207.77344, 208.00781, 208.24219, 208.47656, 208.71094, 208.94531, 209.17969, 209.41406, 209.64844, 209.88281, 210.11719, 210.35156, 210.58594, 210.82031, 211.05469, 211.28906, 211.52344, 211.75781, 211.99219, 212.22656, 212.46094, 212.69531, 212.92969, 213.16406, 213.39844, 213.63281, 213.86719, 214.10156, 214.33594, 214.57031, 214.80469, 215.03906, 215.27344, 215.50781, 215.74219, 215.97656, 216.21094, 216.44531, 216.67969, 216.91406, 217.14844, 217.38281, 217.61719, 217.85156, 218.08594, 218.32031, 218.55469, 218.78906, 219.02344, 219.25781, 219.49219, 219.72656, 219.96094, 220.19531, 220.42969, 220.66406, 220.89844, 221.13281, 221.36719, 221.60156, 221.83594, 222.07031, 222.30469, 222.53906, 222.77344, 223.00781, 223.24219, 223.47656, 223.71094, 223.94531, 224.17969, 224.41406, 224.64844, 224.88281, 225.11719, 225.35156, 225.58594, 225.82031, 226.05469, 226.28906, 226.52344, 226.75781, 226.99219, 227.22656, 227.46094, 227.69531, 227.92969, 228.16406, 228.39844, 228.63281, 228.86719, 229.10156, 229.33594, 229.57031, 229.80469, 230.03906, 230.27344, 230.50781, 230.74219, 230.97656, 231.21094, 231.44531, 231.67969, 231.91406, 232.14844, 232.38281, 232.61719, 232.85156, 233.08594, 233.32031, 233.55469, 233.78906, 234.02344, 234.25781, 234.49219, 234.72656, 234.96094, 235.19531, 235.42969, 235.66406, 235.89844, 236.13281, 236.36719, 236.60156, 236.83594, 237.07031, 237.30469, 237.53906, 237.77344, 238.00781, 238.24219, 238.47656, 238.71094, 238.94531, 239.17969, 239.41406, 239.64844, 239.88281, 240.11719, 240.35156, 240.58594, 240.82031, 241.05469, 241.28906, 241.52344, 241.75781, 241.99219, 242.22656, 242.46094, 242.69531, 242.92969, 243.16406, 243.39844, 243.63281, 243.86719, 244.10156, 244.33594, 244.57031, 244.80469, 245.03906, 245.27344, 245.50781, 245.74219, 245.97656, 246.21094, 246.44531, 246.67969, 246.91406, 247.14844, 247.38281, 247.61719, 247.85156, 248.08594, 248.32031, 248.55469, 248.78906, 249.02344, 249.25781, 249.49219, 249.72656, 249.96094, 250.19531, 250.42969, 250.66406, 250.89844, 251.13281, 251.36719, 251.60156, 251.83594, 252.07031, 252.30469, 252.53906, 252.77344, 253.00781, 253.24219, 253.47656, 253.71094, 253.94531, 254.17969, 254.41406, 254.64844, 254.88281, 255.11719, 255.35156, 255.58594, 255.82031, 256.0547, 256.28906, 256.52344, 256.7578, 256.9922, 257.22656, 257.46094, 257.6953, 257.9297, 258.16406, 258.39844, 258.6328, 258.8672, 259.10156, 259.33594, 259.5703, 259.8047, 260.03906, 260.27344, 260.5078, 260.7422, 260.97656, 261.21094, 261.4453, 261.6797, 261.91406, 262.14844, 262.3828, 262.6172, 262.85156, 263.08594, 263.3203, 263.5547, 263.78906, 264.02344, 264.2578, 264.4922, 264.72656, 264.96094, 265.1953, 265.4297, 265.66406, 265.89844, 266.1328, 266.3672, 266.60156, 266.83594, 267.0703, 267.3047, 267.53906, 267.77344, 268.0078, 268.2422, 268.47656, 268.71094, 268.9453, 269.1797, 269.41406, 269.64844, 269.8828, 270.1172, 270.35156, 270.58594, 270.8203, 271.0547, 271.28906, 271.52344, 271.7578, 271.9922, 272.22656, 272.46094, 272.6953, 272.9297, 273.16406, 273.39844, 273.6328, 273.8672, 274.10156, 274.33594, 274.5703, 274.8047, 275.03906, 275.27344, 275.5078, 275.7422, 275.97656, 276.21094, 276.4453, 276.6797, 276.91406, 277.14844, 277.3828, 277.6172, 277.85156, 278.08594, 278.3203, 278.5547, 278.78906, 279.02344, 279.2578, 279.4922, 279.72656, 279.96094, 280.1953, 280.4297, 280.66406, 280.89844, 281.1328, 281.3672, 281.60156, 281.83594, 282.0703, 282.3047, 282.53906, 282.77344, 283.0078, 283.2422, 283.47656, 283.71094, 283.9453, 284.1797, 284.41406, 284.64844, 284.8828, 285.1172, 285.35156, 285.58594, 285.8203, 286.0547, 286.28906, 286.52344, 286.7578, 286.9922, 287.22656, 287.46094, 287.6953, 287.9297, 288.16406, 288.39844, 288.6328, 288.8672, 289.10156, 289.33594, 289.5703, 289.8047, 290.03906, 290.27344, 290.5078, 290.7422, 290.97656, 291.21094, 291.4453, 291.6797, 291.91406, 292.14844, 292.3828, 292.6172, 292.85156, 293.08594, 293.3203, 293.5547, 293.78906, 294.02344, 294.2578, 294.4922, 294.72656, 294.96094, 295.1953, 295.4297, 295.66406, 295.89844, 296.1328, 296.3672, 296.60156, 296.83594, 297.0703, 297.3047, 297.53906, 297.77344, 298.0078, 298.2422, 298.47656, 298.71094, 298.9453, 299.1797, 299.41406, 299.64844, 299.8828, 300.1172, 300.35156, 300.58594, 300.8203, 301.0547, 301.28906, 301.52344, 301.7578, 301.9922, 302.22656, 302.46094, 302.6953, 302.9297, 303.16406, 303.39844, 303.6328, 303.8672, 304.10156, 304.33594, 304.5703, 304.8047, 305.03906, 305.27344, 305.5078, 305.7422, 305.97656, 306.21094, 306.4453, 306.6797, 306.91406, 307.14844, 307.3828, 307.6172, 307.85156, 308.08594, 308.3203, 308.5547, 308.78906, 309.02344, 309.2578, 309.4922, 309.72656, 309.96094, 310.1953, 310.4297, 310.66406, 310.89844, 311.1328, 311.3672, 311.60156, 311.83594, 312.0703, 312.3047, 312.53906, 312.77344, 313.0078, 313.2422, 313.47656, 313.71094, 313.9453, 314.1797, 314.41406, 314.64844, 314.8828, 315.1172, 315.35156, 315.58594, 315.8203, 316.0547, 316.28906, 316.52344, 316.7578, 316.9922, 317.22656, 317.46094, 317.6953, 317.9297, 318.16406, 318.39844, 318.6328, 318.8672, 319.10156, 319.33594, 319.5703, 319.8047, 320.03906, 320.27344, 320.5078, 320.7422, 320.97656, 321.21094, 321.4453, 321.6797, 321.91406, 322.14844, 322.3828, 322.6172, 322.85156, 323.08594, 323.3203, 323.5547, 323.78906, 324.02344, 324.2578, 324.4922, 324.72656, 324.96094, 325.1953, 325.4297, 325.66406, 325.89844, 326.1328, 326.3672, 326.60156, 326.83594, 327.0703, 327.3047, 327.53906, 327.77344, 328.0078, 328.2422, 328.47656, 328.71094, 328.9453, 329.1797, 329.41406, 329.64844, 329.8828, 330.1172, 330.35156, 330.58594, 330.8203, 331.0547, 331.28906, 331.52344, 331.7578, 331.9922, 332.22656, 332.46094, 332.6953, 332.9297, 333.16406, 333.39844, 333.6328, 333.8672, 334.10156, 334.33594, 334.5703, 334.8047, 335.03906, 335.27344, 335.5078, 335.7422, 335.97656, 336.21094, 336.4453, 336.6797, 336.91406, 337.14844, 337.3828, 337.6172, 337.85156, 338.08594, 338.3203, 338.5547, 338.78906, 339.02344, 339.2578, 339.4922, 339.72656, 339.96094, 340.1953, 340.4297, 340.66406, 340.89844, 341.1328, 341.3672, 341.60156, 341.83594, 342.0703, 342.3047, 342.53906, 342.77344, 343.0078, 343.2422, 343.47656, 343.71094, 343.9453, 344.1797, 344.41406, 344.64844, 344.8828, 345.1172, 345.35156, 345.58594, 345.8203, 346.0547, 346.28906, 346.52344, 346.7578, 346.9922, 347.22656, 347.46094, 347.6953, 347.9297, 348.16406, 348.39844, 348.6328, 348.8672, 349.10156, 349.33594, 349.5703, 349.8047, 350.03906, 350.27344, 350.5078, 350.7422, 350.97656, 351.21094, 351.4453, 351.6797, 351.91406, 352.14844, 352.3828, 352.6172, 352.85156, 353.08594, 353.3203, 353.5547, 353.78906, 354.02344, 354.2578, 354.4922, 354.72656, 354.96094, 355.1953, 355.4297, 355.66406, 355.89844, 356.1328, 356.3672, 356.60156, 356.83594, 357.0703, 357.3047, 357.53906, 357.77344, 358.0078, 358.2422, 358.47656, 358.71094, 358.9453, 359.1797, 359.41406, 359.64844, 359.8828]
};

/**
 * @class PrecipitationLayer
 */
var PrecipitationLayer = function() 
{
	if (!(this instanceof PrecipitationLayer)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	
	this.precipitationData;
	this.gl;
	this.maxPrecipitation;
	this.minPrecipitation;
	this.geographicExtent;
	
	this.weatherStation;
	
	//this.weatherEarthArray; // this array contains tinTerrains.***
};

PrecipitationLayer.prototype.init = function(gl, magoManager)
{
	this.gl = gl;
	
	// test load binaryData.***
	this.loadData();
	
	// set default geographicExtent.***
	if (this.geographicExtent === undefined)
	{ this.geographicExtent = new GeographicExtent(); }

	this.geographicExtent.setExtent(-180, -90, 0, 180, 90, 0);
};

PrecipitationLayer.prototype.loadData = function()
{
	var numCols = precipDataCoords.lon.length;
	var numRows = precipDataCoords.lat.length;
	
	var geometryDataPath = this.weatherStation.provisional_geometryDataPath;
	var filePath_inServer = geometryDataPath +"/volumRenderingTest/rain_iSuSok/Total_precipitation_surface_3_Hour_Accumulation.bin";
	var dataContainer = new DataContainer();
	dataContainer.numCols = numCols;
	dataContainer.numRows = numRows;
	
	ReaderWriter.loadBinaryData(filePath_inServer, dataContainer, this);
	
};

PrecipitationLayer.prototype.parseData = function(dataContainer)
{
	var gl = this.gl;
	var numCols = precipDataCoords.lon.length;
	var numRows = precipDataCoords.lat.length;
	var datasCount = numCols * numRows;
	
	// must determine maxValue & minValue.************************************************************
	var stream = new DataStream(dataContainer.dataArraybuffer, 0, DataStream.BIG_ENDIAN);
	var dataArray = stream.readFloat32Array(datasCount);
	dataContainer.dataArraybuffer = dataArray;
	
	var valuesCount = dataArray.length;
	this.maxPrecipitation = dataArray[0]; // init with the 1rst value.***
	this.minPrecipitation = dataArray[0]; // init with the 1rst value.***
	var currPrecip;
	for (var i=1; i< valuesCount; i++)
	{
		currPrecip = dataArray[i];
		if (currPrecip > this.maxPrecipitation) { this.maxPrecipitation = currPrecip; }
		else if (currPrecip < this.minPrecipitation) { this.minPrecipitation = currPrecip; }
	}
	
	var precipRange = this.maxPrecipitation - this.minPrecipitation;

	// 1rst, copy the original image, only rescaling.***
	this.image3d = new Image3D();
	
	//var resampledWidth = 720;
	//var resampledHeght = 560;
	var resampledWidth = numCols;
	var resampledHeght = numRows;
	this.resampledWidth = resampledWidth;
	this.resampledHeght = resampledHeght;
	
	// Note: in the precipDataCoords from LeeSuSok, there are from 0 to 360 degrees in Longitude,
	// but magoWeather system needs from -180 to 180 degrees in Longitude, so need apply "colOffset".***
	for (var i=0; i<numCols; i++)
	{
		precipDataCoords.lon[i] -= 180.0;
	}
	var minLon = precipDataCoords.lon[0];
	var maxLon = precipDataCoords.lon[numCols - 1];
	var minLat = precipDataCoords.lat[0];
	var maxLat = precipDataCoords.lat[numRows - 1];
	
	var colOffset = numCols / 2;

	var increX = Math.floor(numCols / resampledWidth);
	var increY = Math.floor(numRows / resampledHeght);
	
	// Original data only has 1 stack.***
	var stack = this.image3d.newStack();
	var numSlices = 1;
	for (var s=0; s<numSlices; s++)
	{
		var slice = stack.newSlice();
		var sliceSize = resampledWidth * resampledHeght;
		slice.dataArray = new Uint8Array(sliceSize); // We create Uint8 data.***
		slice.width = resampledWidth;
		slice.height = resampledHeght;
		for (var j=0; j<resampledHeght; j++)
		{
			for (var i=0; i<resampledWidth; i++)
			{
				var originalX = i*increX;
				var originalY = j*increY+(s*numRows);
				
				// Apply "colOffset".***
				originalX += colOffset;
				if (originalX > numCols)
				{ originalX -= numCols; }
				
				var originalIdx = Image3D.getIndexOfArray(numCols, originalX, originalY);
				var resampledIdx = Image3D.getIndexOfArray(resampledWidth, i, j);
				
				var value = dataArray[originalIdx];
				var valueUint8 = Math.floor(((value - this.minPrecipitation)*256.0)/precipRange);
				slice.dataArray[resampledIdx] = valueUint8;
			}
		}
		
		// Now, set the slice geographicExtent.***
		if (slice.geographicExtent === undefined)
		{ slice.geographicExtent = new GeographicExtent(); }
		
		slice.geographicExtent.setExtent(minLon, minLat, 0, maxLon, maxLat, 0);
	}
	

};

PrecipitationLayer.prototype.test_makeGeometryFromSlice = function(slice, minCol, minRow, maxCol, maxRow, minAltitude, maxAltitude)
{
	// Make real 3d geometry data.***
	// Given a "slice", make a surfaceMesh in (minCol, minRow, maxCol, maxRow).***
	if (this.image3d === undefined)
	{ return; }
	
	var degToRadFactor = Math.PI/180.0;
	
	// For entire slice: *************************************************************************
	var minLonEntireSlice = slice.geographicExtent.minGeographicCoord.longitude;
	var minLatEntireSlice = slice.geographicExtent.minGeographicCoord.latitude;
	var maxLonEntireSlice = slice.geographicExtent.maxGeographicCoord.longitude;
	var maxLatEntireSlice = slice.geographicExtent.maxGeographicCoord.latitude;
	
	var sliceNumCols = slice.width;
	var sliceNumRows = slice.height;
	
	var increLonRad = (maxLonEntireSlice - minLonEntireSlice)/(sliceNumCols-1);
	var increLatRad = (maxLatEntireSlice - minLatEntireSlice)/(sliceNumRows-1);
	//---------------------------------------------------------------------------------------------
	
	var minLon2 = minLonEntireSlice;
	var minLat2 = minLatEntireSlice;
	var maxLon2 = maxLonEntireSlice;
	var maxLat2 = maxLatEntireSlice;
	
	var lonSegments = maxCol - minCol;
	var latSegments = maxRow - minRow;

	// calculate total verticesCount.***
	var vertexCount = (lonSegments + 1)*(latSegments + 1);
	
	var currLon; 
	var currLat; 
	var currAlt;

	var colorAux;
	
	var vertexMatrix = new VertexMatrix();
	var vertexList;
	
	var exaggeratedMaxAlt = maxAltitude*(maxAltitude-minAltitude) *5.0;
	var altRange = (exaggeratedMaxAlt - minAltitude);
	var altUnitary;
	var alpha;
	alpha = 0.8;
	var vertex;
	var resultCartesian;
	
	// check if exist altitude.***
	var alt = 0;

	for (var currLatSeg = minRow; currLatSeg<=maxRow; currLatSeg++)
	{
		vertexList = vertexMatrix.newVertexList();
		
		////currLat = temperaturesData.lat[currLatSeg] * degToRadFactor; // if use dataCoords.***
		currLat = minLat2 + currLatSeg * increLatRad;
		for (var currLonSeg = minCol; currLonSeg<=maxCol; currLonSeg++)
		{
			// Uroborus.***
			var efectiveCurrLon = currLonSeg;
			if (efectiveCurrLon >= slice.width)
			{
				efectiveCurrLon -= slice.width;
			}
			
			////currLon = temperaturesData.lon[efectiveCurrLon] * degToRadFactor; // if use dataCoords.***
			currLon = minLon2 + efectiveCurrLon * increLonRad;
			// Now set the altitude. The Altitude is determined by the value of the slice.***
			if (slice)
			{
				currAlt = slice.getValue(efectiveCurrLon, currLatSeg);
			}
			else
			{ currAlt = alt; }
			
			var exaggerationAlt = (currAlt - minAltitude)*5.0;
			currAlt *= exaggerationAlt;
			currAlt+= 1000.0;
			
			// create vertex.***
			vertex = vertexList.newVertex();
			altUnitary = (currAlt - minAltitude)/altRange;
			if (altUnitary > 1.0){ altUnitary = 1.0; }
			else if (altUnitary < 0.0){ altUnitary = 0.0; }
			
			colorAux = Color.grayToRGB_MagoStyle(altUnitary, colorAux);
			
			resultCartesian = Globe.geographicToCartesianWgs84(currLon, currLat, currAlt, resultCartesian);
			vertex.setPosition(resultCartesian[0], resultCartesian[1], resultCartesian[2]);
			vertex.setColorRGBA(colorAux.b, colorAux.g, colorAux.r, alpha);
		}
	}
	
	// Now make the surface.***
	var bLoop = false;
	var mesh = new Mesh();
	var bClockWise = true;
	var surface = VertexMatrix.makeSurface(vertexMatrix, undefined, bLoop, bClockWise);
	surface.calculateVerticesNormals();
	mesh.addSurface(surface);
	
	if (this.meshesArray === undefined)
	{ this.meshesArray = []; }
	
	this.meshesArray.push(mesh);
	
};


PrecipitationLayer.prototype.test_makeGeometryFromData = function(magoManager)
{
	// Make real 3d geometry data.***
	if (this.image3d === undefined)
	{ return; }
	
	var minCol;
	var maxCol;
	var minRow;
	var maxRow;
	
	var maxWidthMosaic = 300;
	var maxHeightMosaic = 300;
	
	// Note: in this.image3d there are only one stack.***
	var stacksCount = this.image3d.getStacksCount();
	for (var i=0; i<stacksCount; i++)
	{
		var stack = this.image3d.getStack(i);
		var slicesCount = stack.getSlicesCount();
		for (var j=0; j<slicesCount; j++)
		{
			var slice = stack.getSlice(j);
			
			// Split the slice.***
			var resultValuesArray = [];
			resultValuesArray = Slice.getMinMaxValuesOfArray(slice.dataArray, resultValuesArray);
			var minAltitude = resultValuesArray[0];
			var maxAltitude = resultValuesArray[1];
			
			// Split the slice.***
			var mosaicColsCount = Math.floor(slice.width / maxWidthMosaic);
			var mosaicRowsCount = Math.floor(slice.height / maxHeightMosaic);
			
			for (var row = 0; row<=mosaicRowsCount; row++)
			{
				for (var col = 0; col<=mosaicColsCount; col++)
				{
					minCol = col*maxWidthMosaic;
					maxCol = (col+1)*maxWidthMosaic;
					if (maxCol > slice.width)
					{ maxCol = slice.width; }
					minRow = row*maxHeightMosaic;
					maxRow = (row+1)*maxHeightMosaic;
					if (maxRow>slice.height)
					{ maxRow = slice.height; }
					this.test_makeGeometryFromSlice(slice, minCol, minRow, maxCol, maxRow, minAltitude, maxAltitude);
				}
			}
			
			break;
		}
	}
};

PrecipitationLayer.prototype.renderMesh = function(magoManager, shader, renderType)
{
	// testing function, provisional.***
	if (this.meshesArray === undefined)
	{ return; }
	
	var mesh;
	var meshesCount = this.meshesArray.length;
	for (var i=0; i<meshesCount; i++)
	{
		mesh = this.meshesArray[i];
		mesh.render(magoManager, shader, renderType);
		//break; // test.***
	}
};





























































'use strict';


var volumes = {
	 sagittal: {
		 src     : "./images/sagittal.png",
		 name    : "Brain - Water",
		 columns : 2,
		 slices  : 176,
		 zScale  : 0.7
	},
	 vessels: {
		 src     : "./images/vessels.png",
		 name    : "Brain - Vessels",
		 columns : 1,
		 slices  : 160,
		 zScale  : 0.65
	},
	 handgelenk: {
		 src     : "./images/handgelenk.jpg",
		 name    : "Wrist",
		 columns : 4,
		 slices  : 316,
		 zScale  : 1.5
	},
	 handgelenk2: {
		 src     : "./images/handgelenk2.jpg",
		 name    : "Wrist 2",
		 columns : 2,
		 slices  : 160,
		 zScale  : 0.5
	},
	 broccoli: {
		 src     : "./images/broccoli.png",
		 name    : "Broccoli",
		 columns : 1,
		 slices  : 50,
		 zScale  : 0.7
	},
	 sphereAntialiased: {
		 src     : "./images/sphere_antialiased.png",
		 name    : "Sphere (Anti-aliased)",
		 columns : 16,
		 slices  : 256,
		 zScale  : 1
	},
	 cube: {
		 src     : "./images/cuuube.png",
		 name    : "Cube",
		 columns : 16,
		 slices  : 128,
		 zScale  : 1
	},
	 smallSphere: {
		 src     : "./images/smallsphere.png",
		 name    : "Small Sphere",
		 columns : 16,
		 slices  : 128,
		 zScale  : 1
	}
};

var shaders = {
	 specular: {
		 name : "Specular",
		 vert : "./js/shaders/vertex.vert",
		 frag : "./js/shaders/specular.frag"
	},
	 basic: {
		 name : "Basic",
		 vert : "./js/shaders/vertex.vert",
		 frag : "./js/shaders/basic.frag"
	},
	 maxValue: {
		 name : "Maximum Intensity",
		 vert : "./js/shaders/vertex.vert",
		 frag : "./js/shaders/maxValue.frag"
	},
	 shaded: {
		 name : "Shaded",
		 vert : "./js/shaders/vertex.vert",
		 frag : "./js/shaders/shaded.frag"
	},
	 realistic: {
		 name : "Realistic",
		 vert : "./js/shaders/vertex.vert",
		 frag : "./js/shaders/realistic.frag"
	}
	/*,noTransferImage: {
		 name: "No Transfer Image"
		,vert: "./js/shaders/vertex.vert"
		,frag: "./js/shaders/noTransferImage.frag"
	}*/
	/*,refraction: {
		 name: "Refraction"
		,vert: "./js/shaders/vertex.vert"
		,frag: "./js/shaders/refraction.frag"
	}*/
};

// Provisionally declare json data here.***
var temperaturesData = {"isobaric" : [40.0, 50.0, 100.0, 200.0, 300.0, 500.0, 700.0, 1000.0, 1500.0, 2000.0, 3000.0, 5000.0, 7000.0, 10000.0, 15000.0, 20000.0, 25000.0, 30000.0, 40000.0, 50000.0, 60000.0, 70000.0, 85000.0, 92500.0, 95000.0, 100000.0],
	"lat"      : [89.921875, 89.765625, 89.609375, 89.453125, 89.296875, 89.140625, 88.984375, 88.828125, 88.671875, 88.515625, 88.359375, 88.203125, 88.046875, 87.890625, 87.734375, 87.578125, 87.421875, 87.265625, 87.109375, 86.953125, 86.796875, 86.640625, 86.484375, 86.328125, 86.171875, 86.015625, 85.859375, 85.703125, 85.546875, 85.390625, 85.234375, 85.078125, 84.921875, 84.765625, 84.609375, 84.453125, 84.296875, 84.140625, 83.984375, 83.828125, 83.671875, 83.515625, 83.359375, 83.203125, 83.046875, 82.890625, 82.734375, 82.578125, 82.421875, 82.265625, 82.109375, 81.953125, 81.796875, 81.640625, 81.484375, 81.328125, 81.171875, 81.015625, 80.859375, 80.703125, 80.546875, 80.390625, 80.234375, 80.078125, 79.921875, 79.765625, 79.609375, 79.453125, 79.296875, 79.140625, 78.984375, 78.828125, 78.671875, 78.515625, 78.359375, 78.203125, 78.046875, 77.890625, 77.734375, 77.578125, 77.421875, 77.265625, 77.109375, 76.953125, 76.796875, 76.640625, 76.484375, 76.328125, 76.171875, 76.015625, 75.859375, 75.703125, 75.546875, 75.390625, 75.234375, 75.078125, 74.921875, 74.765625, 74.609375, 74.453125, 74.296875, 74.140625, 73.984375, 73.828125, 73.671875, 73.515625, 73.359375, 73.203125, 73.046875, 72.890625, 72.734375, 72.578125, 72.421875, 72.265625, 72.109375, 71.953125, 71.796875, 71.640625, 71.484375, 71.328125, 71.171875, 71.015625, 70.859375, 70.703125, 70.546875, 70.390625, 70.234375, 70.078125, 69.921875, 69.765625, 69.609375, 69.453125, 69.296875, 69.140625, 68.984375, 68.828125, 68.671875, 68.515625, 68.359375, 68.203125, 68.046875, 67.890625, 67.734375, 67.578125, 67.421875, 67.265625, 67.109375, 66.953125, 66.796875, 66.640625, 66.484375, 66.328125, 66.171875, 66.015625, 65.859375, 65.703125, 65.546875, 65.390625, 65.234375, 65.078125, 64.921875, 64.765625, 64.609375, 64.453125, 64.296875, 64.140625, 63.984375, 63.828125, 63.671875, 63.515625, 63.359375, 63.203125, 63.046875, 62.890625, 62.734375, 62.578125, 62.421875, 62.265625, 62.109375, 61.953125, 61.796875, 61.640625, 61.484375, 61.328125, 61.171875, 61.015625, 60.859375, 60.703125, 60.546875, 60.390625, 60.234375, 60.078125, 59.921875, 59.765625, 59.609375, 59.453125, 59.296875, 59.140625, 58.984375, 58.828125, 58.671875, 58.515625, 58.359375, 58.203125, 58.046875, 57.890625, 57.734375, 57.578125, 57.421875, 57.265625, 57.109375, 56.953125, 56.796875, 56.640625, 56.484375, 56.328125, 56.171875, 56.015625, 55.859375, 55.703125, 55.546875, 55.390625, 55.234375, 55.078125, 54.921875, 54.765625, 54.609375, 54.453125, 54.296875, 54.140625, 53.984375, 53.828125, 53.671875, 53.515625, 53.359375, 53.203125, 53.046875, 52.890625, 52.734375, 52.578125, 52.421875, 52.265625, 52.109375, 51.953125, 51.796875, 51.640625, 51.484375, 51.328125, 51.171875, 51.015625, 50.859375, 50.703125, 50.546875, 50.390625, 50.234375, 50.078125, 49.921875, 49.765625, 49.609375, 49.453125, 49.296875, 49.140625, 48.984375, 48.828125, 48.671875, 48.515625, 48.359375, 48.203125, 48.046875, 47.890625, 47.734375, 47.578125, 47.421875, 47.265625, 47.109375, 46.953125, 46.796875, 46.640625, 46.484375, 46.328125, 46.171875, 46.015625, 45.859375, 45.703125, 45.546875, 45.390625, 45.234375, 45.078125, 44.921875, 44.765625, 44.609375, 44.453125, 44.296875, 44.140625, 43.984375, 43.828125, 43.671875, 43.515625, 43.359375, 43.203125, 43.046875, 42.890625, 42.734375, 42.578125, 42.421875, 42.265625, 42.109375, 41.953125, 41.796875, 41.640625, 41.484375, 41.328125, 41.171875, 41.015625, 40.859375, 40.703125, 40.546875, 40.390625, 40.234375, 40.078125, 39.921875, 39.765625, 39.609375, 39.453125, 39.296875, 39.140625, 38.984375, 38.828125, 38.671875, 38.515625, 38.359375, 38.203125, 38.046875, 37.890625, 37.734375, 37.578125, 37.421875, 37.265625, 37.109375, 36.953125, 36.796875, 36.640625, 36.484375, 36.328125, 36.171875, 36.015625, 35.859375, 35.703125, 35.546875, 35.390625, 35.234375, 35.078125, 34.921875, 34.765625, 34.609375, 34.453125, 34.296875, 34.140625, 33.984375, 33.828125, 33.671875, 33.515625, 33.359375, 33.203125, 33.046875, 32.890625, 32.734375, 32.578125, 32.421875, 32.265625, 32.109375, 31.953125, 31.796875, 31.640625, 31.484375, 31.328125, 31.171875, 31.015625, 30.859375, 30.703125, 30.546875, 30.390625, 30.234375, 30.078125, 29.921875, 29.765625, 29.609375, 29.453125, 29.296875, 29.140625, 28.984375, 28.828125, 28.671875, 28.515625, 28.359375, 28.203125, 28.046875, 27.890625, 27.734375, 27.578125, 27.421875, 27.265625, 27.109375, 26.953125, 26.796875, 26.640625, 26.484375, 26.328125, 26.171875, 26.015625, 25.859375, 25.703125, 25.546875, 25.390625, 25.234375, 25.078125, 24.921875, 24.765625, 24.609375, 24.453125, 24.296875, 24.140625, 23.984375, 23.828125, 23.671875, 23.515625, 23.359375, 23.203125, 23.046875, 22.890625, 22.734375, 22.578125, 22.421875, 22.265625, 22.109375, 21.953125, 21.796875, 21.640625, 21.484375, 21.328125, 21.171875, 21.015625, 20.859375, 20.703125, 20.546875, 20.390625, 20.234375, 20.078125, 19.921875, 19.765625, 19.609375, 19.453125, 19.296875, 19.140625, 18.984375, 18.828125, 18.671875, 18.515625, 18.359375, 18.203125, 18.046875, 17.890625, 17.734375, 17.578125, 17.421875, 17.265625, 17.109375, 16.953125, 16.796875, 16.640625, 16.484375, 16.328125, 16.171875, 16.015625, 15.859375, 15.703125, 15.546875, 15.390625, 15.234375, 15.078125, 14.921875, 14.765625, 14.609375, 14.453125, 14.296875, 14.140625, 13.984375, 13.828125, 13.671875, 13.515625, 13.359375, 13.203125, 13.046875, 12.890625, 12.734375, 12.578125, 12.421875, 12.265625, 12.109375, 11.953125, 11.796875, 11.640625, 11.484375, 11.328125, 11.171875, 11.015625, 10.859375, 10.703125, 10.546875, 10.390625, 10.234375, 10.078125, 9.921875, 9.765625, 9.609375, 9.453125, 9.296875, 9.140625, 8.984375, 8.828125, 8.671875, 8.515625, 8.359375, 8.203125, 8.046875, 7.890625, 7.734375, 7.578125, 7.421875, 7.265625, 7.109375, 6.953125, 6.796875, 6.640625, 6.484375, 6.328125, 6.171875, 6.015625, 5.859375, 5.703125, 5.546875, 5.390625, 5.234375, 5.078125, 4.921875, 4.765625, 4.609375, 4.453125, 4.296875, 4.140625, 3.984375, 3.828125, 3.671875, 3.515625, 3.359375, 3.203125, 3.046875, 2.890625, 2.734375, 2.578125, 2.421875, 2.265625, 2.109375, 1.953125, 1.796875, 1.640625, 1.484375, 1.328125, 1.171875, 1.015625, 0.859375, 0.703125, 0.546875, 0.390625, 0.234375, 0.078125, -0.078125, -0.234375, -0.390625, -0.546875, -0.703125, -0.859375, -1.015625, -1.171875, -1.328125, -1.484375, -1.640625, -1.796875, -1.953125, -2.109375, -2.265625, -2.421875, -2.578125, -2.734375, -2.890625, -3.046875, -3.203125, -3.359375, -3.515625, -3.671875, -3.828125, -3.984375, -4.140625, -4.296875, -4.453125, -4.609375, -4.765625, -4.921875, -5.078125, -5.234375, -5.390625, -5.546875, -5.703125, -5.859375, -6.015625, -6.171875, -6.328125, -6.484375, -6.640625, -6.796875, -6.953125, -7.109375, -7.265625, -7.421875, -7.578125, -7.734375, -7.890625, -8.046875, -8.203125, -8.359375, -8.515625, -8.671875, -8.828125, -8.984375, -9.140625, -9.296875, -9.453125, -9.609375, -9.765625, -9.921875, -10.078125, -10.234375, -10.390625, -10.546875, -10.703125, -10.859375, -11.015625, -11.171875, -11.328125, -11.484375, -11.640625, -11.796875, -11.953125, -12.109375, -12.265625, -12.421875, -12.578125, -12.734375, -12.890625, -13.046875, -13.203125, -13.359375, -13.515625, -13.671875, -13.828125, -13.984375, -14.140625, -14.296875, -14.453125, -14.609375, -14.765625, -14.921875, -15.078125, -15.234375, -15.390625, -15.546875, -15.703125, -15.859375, -16.015625, -16.171875, -16.328125, -16.484375, -16.640625, -16.796875, -16.953125, -17.109375, -17.265625, -17.421875, -17.578125, -17.734375, -17.890625, -18.046875, -18.203125, -18.359375, -18.515625, -18.671875, -18.828125, -18.984375, -19.140625, -19.296875, -19.453125, -19.609375, -19.765625, -19.921875, -20.078125, -20.234375, -20.390625, -20.546875, -20.703125, -20.859375, -21.015625, -21.171875, -21.328125, -21.484375, -21.640625, -21.796875, -21.953125, -22.109375, -22.265625, -22.421875, -22.578125, -22.734375, -22.890625, -23.046875, -23.203125, -23.359375, -23.515625, -23.671875, -23.828125, -23.984375, -24.140625, -24.296875, -24.453125, -24.609375, -24.765625, -24.921875, -25.078125, -25.234375, -25.390625, -25.546875, -25.703125, -25.859375, -26.015625, -26.171875, -26.328125, -26.484375, -26.640625, -26.796875, -26.953125, -27.109375, -27.265625, -27.421875, -27.578125, -27.734375, -27.890625, -28.046875, -28.203125, -28.359375, -28.515625, -28.671875, -28.828125, -28.984375, -29.140625, -29.296875, -29.453125, -29.609375, -29.765625, -29.921875, -30.078125, -30.234375, -30.390625, -30.546875, -30.703125, -30.859375, -31.015625, -31.171875, -31.328125, -31.484375, -31.640625, -31.796875, -31.953125, -32.109375, -32.265625, -32.421875, -32.578125, -32.734375, -32.890625, -33.046875, -33.203125, -33.359375, -33.515625, -33.671875, -33.828125, -33.984375, -34.140625, -34.296875, -34.453125, -34.609375, -34.765625, -34.921875, -35.078125, -35.234375, -35.390625, -35.546875, -35.703125, -35.859375, -36.015625, -36.171875, -36.328125, -36.484375, -36.640625, -36.796875, -36.953125, -37.109375, -37.265625, -37.421875, -37.578125, -37.734375, -37.890625, -38.046875, -38.203125, -38.359375, -38.515625, -38.671875, -38.828125, -38.984375, -39.140625, -39.296875, -39.453125, -39.609375, -39.765625, -39.921875, -40.078125, -40.234375, -40.390625, -40.546875, -40.703125, -40.859375, -41.015625, -41.171875, -41.328125, -41.484375, -41.640625, -41.796875, -41.953125, -42.109375, -42.265625, -42.421875, -42.578125, -42.734375, -42.890625, -43.046875, -43.203125, -43.359375, -43.515625, -43.671875, -43.828125, -43.984375, -44.140625, -44.296875, -44.453125, -44.609375, -44.765625, -44.921875, -45.078125, -45.234375, -45.390625, -45.546875, -45.703125, -45.859375, -46.015625, -46.171875, -46.328125, -46.484375, -46.640625, -46.796875, -46.953125, -47.109375, -47.265625, -47.421875, -47.578125, -47.734375, -47.890625, -48.046875, -48.203125, -48.359375, -48.515625, -48.671875, -48.828125, -48.984375, -49.140625, -49.296875, -49.453125, -49.609375, -49.765625, -49.921875, -50.078125, -50.234375, -50.390625, -50.546875, -50.703125, -50.859375, -51.015625, -51.171875, -51.328125, -51.484375, -51.640625, -51.796875, -51.953125, -52.109375, -52.265625, -52.421875, -52.578125, -52.734375, -52.890625, -53.046875, -53.203125, -53.359375, -53.515625, -53.671875, -53.828125, -53.984375, -54.140625, -54.296875, -54.453125, -54.609375, -54.765625, -54.921875, -55.078125, -55.234375, -55.390625, -55.546875, -55.703125, -55.859375, -56.015625, -56.171875, -56.328125, -56.484375, -56.640625, -56.796875, -56.953125, -57.109375, -57.265625, -57.421875, -57.578125, -57.734375, -57.890625, -58.046875, -58.203125, -58.359375, -58.515625, -58.671875, -58.828125, -58.984375, -59.140625, -59.296875, -59.453125, -59.609375, -59.765625, -59.921875, -60.078125, -60.234375, -60.390625, -60.546875, -60.703125, -60.859375, -61.015625, -61.171875, -61.328125, -61.484375, -61.640625, -61.796875, -61.953125, -62.109375, -62.265625, -62.421875, -62.578125, -62.734375, -62.890625, -63.046875, -63.203125, -63.359375, -63.515625, -63.671875, -63.828125, -63.984375, -64.140625, -64.296875, -64.453125, -64.609375, -64.765625, -64.921875, -65.078125, -65.234375, -65.390625, -65.546875, -65.703125, -65.859375, -66.015625, -66.171875, -66.328125, -66.484375, -66.640625, -66.796875, -66.953125, -67.109375, -67.265625, -67.421875, -67.578125, -67.734375, -67.890625, -68.046875, -68.203125, -68.359375, -68.515625, -68.671875, -68.828125, -68.984375, -69.140625, -69.296875, -69.453125, -69.609375, -69.765625, -69.921875, -70.078125, -70.234375, -70.390625, -70.546875, -70.703125, -70.859375, -71.015625, -71.171875, -71.328125, -71.484375, -71.640625, -71.796875, -71.953125, -72.109375, -72.265625, -72.421875, -72.578125, -72.734375, -72.890625, -73.046875, -73.203125, -73.359375, -73.515625, -73.671875, -73.828125, -73.984375, -74.140625, -74.296875, -74.453125, -74.609375, -74.765625, -74.921875, -75.078125, -75.234375, -75.390625, -75.546875, -75.703125, -75.859375, -76.015625, -76.171875, -76.328125, -76.484375, -76.640625, -76.796875, -76.953125, -77.109375, -77.265625, -77.421875, -77.578125, -77.734375, -77.890625, -78.046875, -78.203125, -78.359375, -78.515625, -78.671875, -78.828125, -78.984375, -79.140625, -79.296875, -79.453125, -79.609375, -79.765625, -79.921875, -80.078125, -80.234375, -80.390625, -80.546875, -80.703125, -80.859375, -81.015625, -81.171875, -81.328125, -81.484375, -81.640625, -81.796875, -81.953125, -82.109375, -82.265625, -82.421875, -82.578125, -82.734375, -82.890625, -83.046875, -83.203125, -83.359375, -83.515625, -83.671875, -83.828125, -83.984375, -84.140625, -84.296875, -84.453125, -84.609375, -84.765625, -84.921875, -85.078125, -85.234375, -85.390625, -85.546875, -85.703125, -85.859375, -86.015625, -86.171875, -86.328125, -86.484375, -86.640625, -86.796875, -86.953125, -87.109375, -87.265625, -87.421875, -87.578125, -87.734375, -87.890625, -88.046875, -88.203125, -88.359375, -88.515625, -88.671875, -88.828125, -88.984375, -89.140625, -89.296875, -89.453125, -89.609375, -89.765625, -89.921875],
	"lon"      : [0.117188, 0.351563, 0.585938, 0.820313, 1.054688, 1.289063, 1.523438, 1.757813, 1.992188, 2.226563, 2.460938, 2.695313, 2.929688, 3.164063, 3.398438, 3.632813, 3.867188, 4.101563, 4.335938, 4.570313, 4.804688, 5.039063, 5.273438, 5.507813, 5.742188, 5.976563, 6.210938, 6.445313, 6.679688, 6.914063, 7.148438, 7.382813, 7.617188, 7.851563, 8.085938, 8.320313, 8.554688, 8.789063, 9.023438, 9.257813, 9.492188, 9.726563, 9.960938, 10.195313, 10.429688, 10.664063, 10.898438, 11.132813, 11.367188, 11.601563, 11.835938, 12.070313, 12.304688, 12.539063, 12.773438, 13.007813, 13.242188, 13.476563, 13.710938, 13.945313, 14.179688, 14.414063, 14.648438, 14.882813, 15.117188, 15.351563, 15.585938, 15.820313, 16.054688, 16.289062, 16.523438, 16.757812, 16.992188, 17.226562, 17.460938, 17.695312, 17.929688, 18.164062, 18.398438, 18.632812, 18.867188, 19.101562, 19.335938, 19.570312, 19.804688, 20.039062, 20.273438, 20.507812, 20.742188, 20.976562, 21.210938, 21.445312, 21.679688, 21.914062, 22.148438, 22.382812, 22.617188, 22.851562, 23.085938, 23.320312, 23.554688, 23.789062, 24.023438, 24.257812, 24.492188, 24.726562, 24.960938, 25.195312, 25.429688, 25.664062, 25.898438, 26.132812, 26.367188, 26.601562, 26.835938, 27.070312, 27.304688, 27.539062, 27.773438, 28.007812, 28.242188, 28.476562, 28.710938, 28.945312, 29.179688, 29.414062, 29.648438, 29.882812, 30.117188, 30.351562, 30.585938, 30.820312, 31.054688, 31.289062, 31.523438, 31.757812, 31.992188, 32.226562, 32.460938, 32.695312, 32.929688, 33.164062, 33.398438, 33.632812, 33.867188, 34.101562, 34.335938, 34.570312, 34.804688, 35.039062, 35.273438, 35.507812, 35.742188, 35.976562, 36.210938, 36.445312, 36.679688, 36.914062, 37.148438, 37.382812, 37.617188, 37.851562, 38.085938, 38.320312, 38.554688, 38.789062, 39.023438, 39.257812, 39.492188, 39.726562, 39.960938, 40.195312, 40.429688, 40.664062, 40.898438, 41.132812, 41.367188, 41.601562, 41.835938, 42.070312, 42.304688, 42.539062, 42.773438, 43.007812, 43.242188, 43.476562, 43.710938, 43.945312, 44.179688, 44.414062, 44.648438, 44.882812, 45.117188, 45.351562, 45.585938, 45.820312, 46.054688, 46.289062, 46.523438, 46.757812, 46.992188, 47.226562, 47.460938, 47.695312, 47.929688, 48.164062, 48.398438, 48.632812, 48.867188, 49.101562, 49.335938, 49.570312, 49.804688, 50.039062, 50.273438, 50.507812, 50.742188, 50.976562, 51.210938, 51.445312, 51.679688, 51.914062, 52.148438, 52.382812, 52.617188, 52.851562, 53.085938, 53.320312, 53.554688, 53.789062, 54.023438, 54.257812, 54.492188, 54.726562, 54.960938, 55.195312, 55.429688, 55.664062, 55.898438, 56.132812, 56.367188, 56.601562, 56.835938, 57.070312, 57.304688, 57.539062, 57.773438, 58.007812, 58.242188, 58.476562, 58.710938, 58.945312, 59.179688, 59.414062, 59.648438, 59.882812, 60.117188, 60.351562, 60.585938, 60.820312, 61.054688, 61.289062, 61.523438, 61.757812, 61.992188, 62.226562, 62.460938, 62.695312, 62.929688, 63.164062, 63.398438, 63.632812, 63.867188, 64.10156, 64.33594, 64.57031, 64.80469, 65.03906, 65.27344, 65.50781, 65.74219, 65.97656, 66.21094, 66.44531, 66.67969, 66.91406, 67.14844, 67.38281, 67.61719, 67.85156, 68.08594, 68.32031, 68.55469, 68.78906, 69.02344, 69.25781, 69.49219, 69.72656, 69.96094, 70.19531, 70.42969, 70.66406, 70.89844, 71.13281, 71.36719, 71.60156, 71.83594, 72.07031, 72.30469, 72.53906, 72.77344, 73.00781, 73.24219, 73.47656, 73.71094, 73.94531, 74.17969, 74.41406, 74.64844, 74.88281, 75.11719, 75.35156, 75.58594, 75.82031, 76.05469, 76.28906, 76.52344, 76.75781, 76.99219, 77.22656, 77.46094, 77.69531, 77.92969, 78.16406, 78.39844, 78.63281, 78.86719, 79.10156, 79.33594, 79.57031, 79.80469, 80.03906, 80.27344, 80.50781, 80.74219, 80.97656, 81.21094, 81.44531, 81.67969, 81.91406, 82.14844, 82.38281, 82.61719, 82.85156, 83.08594, 83.32031, 83.55469, 83.78906, 84.02344, 84.25781, 84.49219, 84.72656, 84.96094, 85.19531, 85.42969, 85.66406, 85.89844, 86.13281, 86.36719, 86.60156, 86.83594, 87.07031, 87.30469, 87.53906, 87.77344, 88.00781, 88.24219, 88.47656, 88.71094, 88.94531, 89.17969, 89.41406, 89.64844, 89.88281, 90.11719, 90.35156, 90.58594, 90.82031, 91.05469, 91.28906, 91.52344, 91.75781, 91.99219, 92.22656, 92.46094, 92.69531, 92.92969, 93.16406, 93.39844, 93.63281, 93.86719, 94.10156, 94.33594, 94.57031, 94.80469, 95.03906, 95.27344, 95.50781, 95.74219, 95.97656, 96.21094, 96.44531, 96.67969, 96.91406, 97.14844, 97.38281, 97.61719, 97.85156, 98.08594, 98.32031, 98.55469, 98.78906, 99.02344, 99.25781, 99.49219, 99.72656, 99.96094, 100.19531, 100.42969, 100.66406, 100.89844, 101.13281, 101.36719, 101.60156, 101.83594, 102.07031, 102.30469, 102.53906, 102.77344, 103.00781, 103.24219, 103.47656, 103.71094, 103.94531, 104.17969, 104.41406, 104.64844, 104.88281, 105.11719, 105.35156, 105.58594, 105.82031, 106.05469, 106.28906, 106.52344, 106.75781, 106.99219, 107.22656, 107.46094, 107.69531, 107.92969, 108.16406, 108.39844, 108.63281, 108.86719, 109.10156, 109.33594, 109.57031, 109.80469, 110.03906, 110.27344, 110.50781, 110.74219, 110.97656, 111.21094, 111.44531, 111.67969, 111.91406, 112.14844, 112.38281, 112.61719, 112.85156, 113.08594, 113.32031, 113.55469, 113.78906, 114.02344, 114.25781, 114.49219, 114.72656, 114.96094, 115.19531, 115.42969, 115.66406, 115.89844, 116.13281, 116.36719, 116.60156, 116.83594, 117.07031, 117.30469, 117.53906, 117.77344, 118.00781, 118.24219, 118.47656, 118.71094, 118.94531, 119.17969, 119.41406, 119.64844, 119.88281, 120.11719, 120.35156, 120.58594, 120.82031, 121.05469, 121.28906, 121.52344, 121.75781, 121.99219, 122.22656, 122.46094, 122.69531, 122.92969, 123.16406, 123.39844, 123.63281, 123.86719, 124.10156, 124.33594, 124.57031, 124.80469, 125.03906, 125.27344, 125.50781, 125.74219, 125.97656, 126.21094, 126.44531, 126.67969, 126.91406, 127.14844, 127.38281, 127.61719, 127.85156, 128.08594, 128.32031, 128.55469, 128.78906, 129.02344, 129.25781, 129.49219, 129.72656, 129.96094, 130.19531, 130.42969, 130.66406, 130.89844, 131.13281, 131.36719, 131.60156, 131.83594, 132.07031, 132.30469, 132.53906, 132.77344, 133.00781, 133.24219, 133.47656, 133.71094, 133.94531, 134.17969, 134.41406, 134.64844, 134.88281, 135.11719, 135.35156, 135.58594, 135.82031, 136.05469, 136.28906, 136.52344, 136.75781, 136.99219, 137.22656, 137.46094, 137.69531, 137.92969, 138.16406, 138.39844, 138.63281, 138.86719, 139.10156, 139.33594, 139.57031, 139.80469, 140.03906, 140.27344, 140.50781, 140.74219, 140.97656, 141.21094, 141.44531, 141.67969, 141.91406, 142.14844, 142.38281, 142.61719, 142.85156, 143.08594, 143.32031, 143.55469, 143.78906, 144.02344, 144.25781, 144.49219, 144.72656, 144.96094, 145.19531, 145.42969, 145.66406, 145.89844, 146.13281, 146.36719, 146.60156, 146.83594, 147.07031, 147.30469, 147.53906, 147.77344, 148.00781, 148.24219, 148.47656, 148.71094, 148.94531, 149.17969, 149.41406, 149.64844, 149.88281, 150.11719, 150.35156, 150.58594, 150.82031, 151.05469, 151.28906, 151.52344, 151.75781, 151.99219, 152.22656, 152.46094, 152.69531, 152.92969, 153.16406, 153.39844, 153.63281, 153.86719, 154.10156, 154.33594, 154.57031, 154.80469, 155.03906, 155.27344, 155.50781, 155.74219, 155.97656, 156.21094, 156.44531, 156.67969, 156.91406, 157.14844, 157.38281, 157.61719, 157.85156, 158.08594, 158.32031, 158.55469, 158.78906, 159.02344, 159.25781, 159.49219, 159.72656, 159.96094, 160.19531, 160.42969, 160.66406, 160.89844, 161.13281, 161.36719, 161.60156, 161.83594, 162.07031, 162.30469, 162.53906, 162.77344, 163.00781, 163.24219, 163.47656, 163.71094, 163.94531, 164.17969, 164.41406, 164.64844, 164.88281, 165.11719, 165.35156, 165.58594, 165.82031, 166.05469, 166.28906, 166.52344, 166.75781, 166.99219, 167.22656, 167.46094, 167.69531, 167.92969, 168.16406, 168.39844, 168.63281, 168.86719, 169.10156, 169.33594, 169.57031, 169.80469, 170.03906, 170.27344, 170.50781, 170.74219, 170.97656, 171.21094, 171.44531, 171.67969, 171.91406, 172.14844, 172.38281, 172.61719, 172.85156, 173.08594, 173.32031, 173.55469, 173.78906, 174.02344, 174.25781, 174.49219, 174.72656, 174.96094, 175.19531, 175.42969, 175.66406, 175.89844, 176.13281, 176.36719, 176.60156, 176.83594, 177.07031, 177.30469, 177.53906, 177.77344, 178.00781, 178.24219, 178.47656, 178.71094, 178.94531, 179.17969, 179.41406, 179.64844, 179.88281, 180.11719, 180.35156, 180.58594, 180.82031, 181.05469, 181.28906, 181.52344, 181.75781, 181.99219, 182.22656, 182.46094, 182.69531, 182.92969, 183.16406, 183.39844, 183.63281, 183.86719, 184.10156, 184.33594, 184.57031, 184.80469, 185.03906, 185.27344, 185.50781, 185.74219, 185.97656, 186.21094, 186.44531, 186.67969, 186.91406, 187.14844, 187.38281, 187.61719, 187.85156, 188.08594, 188.32031, 188.55469, 188.78906, 189.02344, 189.25781, 189.49219, 189.72656, 189.96094, 190.19531, 190.42969, 190.66406, 190.89844, 191.13281, 191.36719, 191.60156, 191.83594, 192.07031, 192.30469, 192.53906, 192.77344, 193.00781, 193.24219, 193.47656, 193.71094, 193.94531, 194.17969, 194.41406, 194.64844, 194.88281, 195.11719, 195.35156, 195.58594, 195.82031, 196.05469, 196.28906, 196.52344, 196.75781, 196.99219, 197.22656, 197.46094, 197.69531, 197.92969, 198.16406, 198.39844, 198.63281, 198.86719, 199.10156, 199.33594, 199.57031, 199.80469, 200.03906, 200.27344, 200.50781, 200.74219, 200.97656, 201.21094, 201.44531, 201.67969, 201.91406, 202.14844, 202.38281, 202.61719, 202.85156, 203.08594, 203.32031, 203.55469, 203.78906, 204.02344, 204.25781, 204.49219, 204.72656, 204.96094, 205.19531, 205.42969, 205.66406, 205.89844, 206.13281, 206.36719, 206.60156, 206.83594, 207.07031, 207.30469, 207.53906, 207.77344, 208.00781, 208.24219, 208.47656, 208.71094, 208.94531, 209.17969, 209.41406, 209.64844, 209.88281, 210.11719, 210.35156, 210.58594, 210.82031, 211.05469, 211.28906, 211.52344, 211.75781, 211.99219, 212.22656, 212.46094, 212.69531, 212.92969, 213.16406, 213.39844, 213.63281, 213.86719, 214.10156, 214.33594, 214.57031, 214.80469, 215.03906, 215.27344, 215.50781, 215.74219, 215.97656, 216.21094, 216.44531, 216.67969, 216.91406, 217.14844, 217.38281, 217.61719, 217.85156, 218.08594, 218.32031, 218.55469, 218.78906, 219.02344, 219.25781, 219.49219, 219.72656, 219.96094, 220.19531, 220.42969, 220.66406, 220.89844, 221.13281, 221.36719, 221.60156, 221.83594, 222.07031, 222.30469, 222.53906, 222.77344, 223.00781, 223.24219, 223.47656, 223.71094, 223.94531, 224.17969, 224.41406, 224.64844, 224.88281, 225.11719, 225.35156, 225.58594, 225.82031, 226.05469, 226.28906, 226.52344, 226.75781, 226.99219, 227.22656, 227.46094, 227.69531, 227.92969, 228.16406, 228.39844, 228.63281, 228.86719, 229.10156, 229.33594, 229.57031, 229.80469, 230.03906, 230.27344, 230.50781, 230.74219, 230.97656, 231.21094, 231.44531, 231.67969, 231.91406, 232.14844, 232.38281, 232.61719, 232.85156, 233.08594, 233.32031, 233.55469, 233.78906, 234.02344, 234.25781, 234.49219, 234.72656, 234.96094, 235.19531, 235.42969, 235.66406, 235.89844, 236.13281, 236.36719, 236.60156, 236.83594, 237.07031, 237.30469, 237.53906, 237.77344, 238.00781, 238.24219, 238.47656, 238.71094, 238.94531, 239.17969, 239.41406, 239.64844, 239.88281, 240.11719, 240.35156, 240.58594, 240.82031, 241.05469, 241.28906, 241.52344, 241.75781, 241.99219, 242.22656, 242.46094, 242.69531, 242.92969, 243.16406, 243.39844, 243.63281, 243.86719, 244.10156, 244.33594, 244.57031, 244.80469, 245.03906, 245.27344, 245.50781, 245.74219, 245.97656, 246.21094, 246.44531, 246.67969, 246.91406, 247.14844, 247.38281, 247.61719, 247.85156, 248.08594, 248.32031, 248.55469, 248.78906, 249.02344, 249.25781, 249.49219, 249.72656, 249.96094, 250.19531, 250.42969, 250.66406, 250.89844, 251.13281, 251.36719, 251.60156, 251.83594, 252.07031, 252.30469, 252.53906, 252.77344, 253.00781, 253.24219, 253.47656, 253.71094, 253.94531, 254.17969, 254.41406, 254.64844, 254.88281, 255.11719, 255.35156, 255.58594, 255.82031, 256.0547, 256.28906, 256.52344, 256.7578, 256.9922, 257.22656, 257.46094, 257.6953, 257.9297, 258.16406, 258.39844, 258.6328, 258.8672, 259.10156, 259.33594, 259.5703, 259.8047, 260.03906, 260.27344, 260.5078, 260.7422, 260.97656, 261.21094, 261.4453, 261.6797, 261.91406, 262.14844, 262.3828, 262.6172, 262.85156, 263.08594, 263.3203, 263.5547, 263.78906, 264.02344, 264.2578, 264.4922, 264.72656, 264.96094, 265.1953, 265.4297, 265.66406, 265.89844, 266.1328, 266.3672, 266.60156, 266.83594, 267.0703, 267.3047, 267.53906, 267.77344, 268.0078, 268.2422, 268.47656, 268.71094, 268.9453, 269.1797, 269.41406, 269.64844, 269.8828, 270.1172, 270.35156, 270.58594, 270.8203, 271.0547, 271.28906, 271.52344, 271.7578, 271.9922, 272.22656, 272.46094, 272.6953, 272.9297, 273.16406, 273.39844, 273.6328, 273.8672, 274.10156, 274.33594, 274.5703, 274.8047, 275.03906, 275.27344, 275.5078, 275.7422, 275.97656, 276.21094, 276.4453, 276.6797, 276.91406, 277.14844, 277.3828, 277.6172, 277.85156, 278.08594, 278.3203, 278.5547, 278.78906, 279.02344, 279.2578, 279.4922, 279.72656, 279.96094, 280.1953, 280.4297, 280.66406, 280.89844, 281.1328, 281.3672, 281.60156, 281.83594, 282.0703, 282.3047, 282.53906, 282.77344, 283.0078, 283.2422, 283.47656, 283.71094, 283.9453, 284.1797, 284.41406, 284.64844, 284.8828, 285.1172, 285.35156, 285.58594, 285.8203, 286.0547, 286.28906, 286.52344, 286.7578, 286.9922, 287.22656, 287.46094, 287.6953, 287.9297, 288.16406, 288.39844, 288.6328, 288.8672, 289.10156, 289.33594, 289.5703, 289.8047, 290.03906, 290.27344, 290.5078, 290.7422, 290.97656, 291.21094, 291.4453, 291.6797, 291.91406, 292.14844, 292.3828, 292.6172, 292.85156, 293.08594, 293.3203, 293.5547, 293.78906, 294.02344, 294.2578, 294.4922, 294.72656, 294.96094, 295.1953, 295.4297, 295.66406, 295.89844, 296.1328, 296.3672, 296.60156, 296.83594, 297.0703, 297.3047, 297.53906, 297.77344, 298.0078, 298.2422, 298.47656, 298.71094, 298.9453, 299.1797, 299.41406, 299.64844, 299.8828, 300.1172, 300.35156, 300.58594, 300.8203, 301.0547, 301.28906, 301.52344, 301.7578, 301.9922, 302.22656, 302.46094, 302.6953, 302.9297, 303.16406, 303.39844, 303.6328, 303.8672, 304.10156, 304.33594, 304.5703, 304.8047, 305.03906, 305.27344, 305.5078, 305.7422, 305.97656, 306.21094, 306.4453, 306.6797, 306.91406, 307.14844, 307.3828, 307.6172, 307.85156, 308.08594, 308.3203, 308.5547, 308.78906, 309.02344, 309.2578, 309.4922, 309.72656, 309.96094, 310.1953, 310.4297, 310.66406, 310.89844, 311.1328, 311.3672, 311.60156, 311.83594, 312.0703, 312.3047, 312.53906, 312.77344, 313.0078, 313.2422, 313.47656, 313.71094, 313.9453, 314.1797, 314.41406, 314.64844, 314.8828, 315.1172, 315.35156, 315.58594, 315.8203, 316.0547, 316.28906, 316.52344, 316.7578, 316.9922, 317.22656, 317.46094, 317.6953, 317.9297, 318.16406, 318.39844, 318.6328, 318.8672, 319.10156, 319.33594, 319.5703, 319.8047, 320.03906, 320.27344, 320.5078, 320.7422, 320.97656, 321.21094, 321.4453, 321.6797, 321.91406, 322.14844, 322.3828, 322.6172, 322.85156, 323.08594, 323.3203, 323.5547, 323.78906, 324.02344, 324.2578, 324.4922, 324.72656, 324.96094, 325.1953, 325.4297, 325.66406, 325.89844, 326.1328, 326.3672, 326.60156, 326.83594, 327.0703, 327.3047, 327.53906, 327.77344, 328.0078, 328.2422, 328.47656, 328.71094, 328.9453, 329.1797, 329.41406, 329.64844, 329.8828, 330.1172, 330.35156, 330.58594, 330.8203, 331.0547, 331.28906, 331.52344, 331.7578, 331.9922, 332.22656, 332.46094, 332.6953, 332.9297, 333.16406, 333.39844, 333.6328, 333.8672, 334.10156, 334.33594, 334.5703, 334.8047, 335.03906, 335.27344, 335.5078, 335.7422, 335.97656, 336.21094, 336.4453, 336.6797, 336.91406, 337.14844, 337.3828, 337.6172, 337.85156, 338.08594, 338.3203, 338.5547, 338.78906, 339.02344, 339.2578, 339.4922, 339.72656, 339.96094, 340.1953, 340.4297, 340.66406, 340.89844, 341.1328, 341.3672, 341.60156, 341.83594, 342.0703, 342.3047, 342.53906, 342.77344, 343.0078, 343.2422, 343.47656, 343.71094, 343.9453, 344.1797, 344.41406, 344.64844, 344.8828, 345.1172, 345.35156, 345.58594, 345.8203, 346.0547, 346.28906, 346.52344, 346.7578, 346.9922, 347.22656, 347.46094, 347.6953, 347.9297, 348.16406, 348.39844, 348.6328, 348.8672, 349.10156, 349.33594, 349.5703, 349.8047, 350.03906, 350.27344, 350.5078, 350.7422, 350.97656, 351.21094, 351.4453, 351.6797, 351.91406, 352.14844, 352.3828, 352.6172, 352.85156, 353.08594, 353.3203, 353.5547, 353.78906, 354.02344, 354.2578, 354.4922, 354.72656, 354.96094, 355.1953, 355.4297, 355.66406, 355.89844, 356.1328, 356.3672, 356.60156, 356.83594, 357.0703, 357.3047, 357.53906, 357.77344, 358.0078, 358.2422, 358.47656, 358.71094, 358.9453, 359.1797, 359.41406, 359.64844, 359.8828]
};

var DataContainer = function() 
{
	// provisional object class.***
};

/**
 * @class TemperatureLayer
 */
var TemperatureLayer = function() 
{
	if (!(this instanceof TemperatureLayer)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	
	// https://draemm.li/various/volumeRendering/webgl2/
	// https://fnndsc.github.io/ami/#vr_singlepass // cervell, uses THREE.***
	// http://www.lebarba.com/WebGL/Index.html // bonsai, foot, teapot, uses THREE.***
	
	this.volumeTex;
	this.gl;
	this.maxTemperature;
	this.minTemperature;
	this.geographicExtent;
	this.weatherStation; // owner.***
	
	// Cutting planes.***
	this.cuttingPlanesArray;
	
	// If you dont want to do volumetricRender, then create physical geometry.***
	// GeometryLayersArray.******************************************************
	this.weatherEarthArray; // this array contains tinTerrains.***
};

TemperatureLayer.prototype.loadVolumeTexture = function(volume, volumeTex)
{
	var img = document.createElement("img");
	img.onload = function(e)
	{
		var imageColumns = volume.columns;
		var imageWidth = img.width/imageColumns;
		var slices = volume.slices;
		var imageHeight = img.height/(slices/imageColumns);

		var textureCanvas = document.createElement("canvas");
		var textureContext = textureCanvas.getContext("2d");

		var textureData = new Uint8Array(imageWidth * imageHeight * slices);

		for (var c = 0; c < imageColumns; c++)
		{
			textureCanvas.width = imageWidth;
			textureCanvas.height = img.height;
			textureContext.drawImage(img, -c*imageWidth, 0);
			var imageData = textureContext.getImageData(0, 0, textureCanvas.width, textureCanvas.height).data;
			
			for (var i = 0; i < textureData.length/imageColumns; i++)
			{
				textureData[i+c*textureData.length/imageColumns] = imageData[i*4];
			}
		}

		var normals = new Uint8ClampedArray(textureData.length*3);

		var xn = 0;
		var yn = 0;
		var zn = 0;

		for (var i = 0; i < textureData.length; i++)
		{

			xn = textureData[i-1] - textureData[i+1];
			if (!isNaN(xn))
			{
				normals[i*3  ] = xn + 128;
			}
			else 
			{
				normals[i*3  ] = 128;
			}

			yn = textureData[i-imageWidth] - textureData[i+imageWidth];
			if (!isNaN(yn))
			{
				normals[i*3+1] = yn + 128;
			}
			else 
			{
				normals[i*3+1] = 128;
			}

			zn = textureData[i-(imageWidth*imageHeight)] - textureData[i+(imageWidth*imageHeight)];
			if (!isNaN(zn))
			{
				normals[i*3+2] = zn + 128;
			}
			else 
			{
				normals[i*3+2] = 128;
			}
			
		}

		normals = new Uint8Array(normals);

		//TemperatureLayer.updateVolumeTexture(textureData, imageWidth, imageHeight, slices, gl);
		//updateNormalsTexture(normals, imageWidth, imageHeight, slices);
		//zScale = volume.zScale;
		//updateZScale(volume.zScale);

	};
	img.src = volume.src;
};

TemperatureLayer.prototype.loadVolumeData = function()
{
	// load the binary data that contains 3dData.***
	var numCols = temperaturesData.lon.length;
	var numRows = temperaturesData.lat.length;
	var numSlices = temperaturesData.isobaric.length;
	
	var geometryDataPath = this.weatherStation.provisional_geometryDataPath;
	var filePath_inServer = geometryDataPath +"/volumRenderingTest/Temperature.bin";
	var dataContainer = new DataContainer();
	dataContainer.numCols = numCols;
	dataContainer.numRows = numRows;
	dataContainer.numSlices = numSlices;
	
	ReaderWriter.loadBinaryData(filePath_inServer, dataContainer, this);
};

TemperatureLayer.createTexture = function(gl, filter, data, width, height) 
{
	// static function.***
	// example of filter: gl.NEAREST
	var texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
	if (data instanceof Uint8Array) 
	{
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
	}
	else 
	{
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
	}
	gl.bindTexture(gl.TEXTURE_2D, null);
	return texture;
};

TemperatureLayer.calculateNumStacks = function(gl, imageWidth, imageHeight, imageSlices) 
{
	// Note: if the image is very big, is possible that there are no solution.***
	//  (e.g. GTX480) reports MAX_TEXTURE_SIZE = 16384.
	var resultNumStacks = -1;
	var maxTextureSizeAllowed = gl.getParameter(gl.MAX_TEXTURE_SIZE);
	if (imageWidth > maxTextureSizeAllowed)
	{ return -1; }
	
	// The limitation is from webgl gl.MAX_TEXTURE_SIZE.***
	var finished = false;
	var candidateNumStacks = 1;
	while (!finished)
	{
		var totalHeight = imageHeight * Math.ceil(imageSlices / candidateNumStacks);
		if (totalHeight < maxTextureSizeAllowed)
		{
			finished = true;
			
			// But, once finished, must check if the resultWidth is inferior to gl.MAX_TEXTURE_SIZE.***
			if (imageWidth * candidateNumStacks > maxTextureSizeAllowed)
			{
				return -1;
			}
			
			resultNumStacks = candidateNumStacks;
		}
		
		candidateNumStacks++;
		
		if (candidateNumStacks >= imageSlices)
		{ return -1; }
	}
	
	return resultNumStacks;
};

TemperatureLayer.prototype.parseData = function(dataContainer)
{
	var gl = this.gl;
	var numCols = temperaturesData.lon.length;
	var numRows = temperaturesData.lat.length;
	var numSlices = temperaturesData.isobaric.length;
	var datasCount = numCols * numRows * numSlices;
	
	// must determine maxValue & minValue.************************************************************
	var stream = new DataStream(dataContainer.dataArraybuffer, 0, DataStream.BIG_ENDIAN);
	var dataArray = stream.readFloat32Array(datasCount);
	dataContainer.dataArraybuffer = dataArray;
	
	var valuesCount = dataArray.length;
	this.maxTemperature = dataArray[0]; // init with the 1rst value.***
	this.minTemperature = dataArray[0]; // init with the 1rst value.***
	var currTemp;
	for (var i=1; i< valuesCount; i++)
	{
		currTemp = dataArray[i];
		if (currTemp > this.maxTemperature) { this.maxTemperature = currTemp; }
		else if (currTemp < this.minTemperature) { this.minTemperature = currTemp; }
	}
	
	var temperatureRange = this.maxTemperature - this.minTemperature;

	// 1rst, copy the original image, only rescaling.***
	this.image3d = new Image3D();
	
	//var resampledWidth = 720;
	//var resampledHeght = 560;
	var resampledWidth = numCols;
	var resampledHeght = numRows;
	this.resampledWidth = resampledWidth;
	this.resampledHeght = resampledHeght;
	
	// Note: in the temperaturesData from LeeSuSok, there are from 0 to 360 degrees in Longitude,
	// but magoWeather system needs from -180 to 180 degrees in Longitude, so need apply "colOffset".***
	for (var i=0; i<numCols; i++)
	{
		temperaturesData.lon[i] -= 180.0;
	}
	var minLon = temperaturesData.lon[0];
	var maxLon = temperaturesData.lon[numCols - 1];
	var minLat = temperaturesData.lat[0];
	var maxLat = temperaturesData.lat[numRows - 1];
	
	var colOffset = numCols / 2;

	var increX = Math.floor(numCols / resampledWidth);
	var increY = Math.floor(numRows / resampledHeght);
	
	// Original data only has 1 stack.***
	var stack = this.image3d.newStack();
	for (var s=0; s<numSlices; s++)
	{
		var slice = stack.newSlice();
		var sliceSize = resampledWidth * resampledHeght;
		slice.dataArray = new Uint8Array(sliceSize); // We create Uint8 data.***
		slice.width = resampledWidth;
		slice.height = resampledHeght;
		for (var j=0; j<resampledHeght; j++)
		{
			for (var i=0; i<resampledWidth; i++)
			{
				var originalX = i*increX;
				var originalY = j*increY+(s*numRows);
				
				// Apply "colOffset".***
				originalX += colOffset;
				if (originalX > numCols)
				{ originalX -= numCols; }
				
				var originalIdx = Image3D.getIndexOfArray(numCols, originalX, originalY);
				var resampledIdx = Image3D.getIndexOfArray(resampledWidth, i, j);
				
				var value = dataArray[originalIdx];
				var valueUint8 = Math.floor(((value - this.minTemperature)*256.0)/temperatureRange);
				slice.dataArray[resampledIdx] = valueUint8;
			}
		}
		
		// Now, set the slice geographicExtent.***
		if (slice.geographicExtent === undefined)
		{ slice.geographicExtent = new GeographicExtent(); }
		
		slice.geographicExtent.setExtent(minLon, minLat, 0, maxLon, maxLat, 0);
	}
	
	
	// Now, reverse the slices. We want slices from ground to sky.***
	this.image3d.stacksArray[0].slicesArray.reverse();
	
	var maxTextureSizeAllowed = gl.getParameter(gl.MAX_TEXTURE_SIZE);
	this.reorderedImage3d = Image3DManager.convertMonoStackImage3DToMultiStackImage3D(this.image3d, undefined, maxTextureSizeAllowed);
	
	// Finally make the uniqueSlice. In the "uniqueSlice" there are the image3D data into an one slice.***
	this.uniqueSlice = this.reorderedImage3d.getAnUniqueSlice(undefined);
	
	// now, make texture with uniqueSlice.***
	var finalWidth = this.uniqueSlice.width;
	var finalHeight = this.uniqueSlice.height;
	var filter = gl.LINEAR; // Linear filtering to interpolate values for longitude, latitude, but not for altitude.***
	var tex = TemperatureLayer.createTexture(gl, filter, this.uniqueSlice.dataArray, finalWidth, finalHeight);
	
	this.volumeTex = new Texture();
	this.volumeTex.texId = tex;
};

TemperatureLayer.prototype.init = function(gl, magoManager)
{
	this.gl = gl;
	
	// test load binaryData.***
	this.loadVolumeData();
	
	// Test: load test volume texture.*********************************************************
	/*
	var geometryDataPath = this.weatherStation.provisional_geometryDataPath;
	var filePath_inServer = geometryDataPath +"/volumRenderingTest/images/sagittal.png";
	volumes.sagittal.src = filePath_inServer;
	this.volumeTex = new Texture();
	this.loadVolumeTexture(volumes.sagittal, this.volumeTex);
	*/
	
	// create a quad to 1m distance from camera, in camera coordinates.***
	var sceneState = magoManager.sceneState;
	var camera = magoManager.myCameraSCX;
	var frustum = camera.bigFrustum;
	
	var fovyRad = magoManager.sceneState.camera.frustum.fovyRad;
	var aspectRatio = frustum.aspectRatio[0];
	var halfHeight = frustum.tangentOfHalfFovy[0];
	var halfWidth = halfHeight * aspectRatio;
	
	var lb = new Point3D(-halfWidth, -halfHeight, -1.0); // leftBottom.***
	var rb = new Point3D(halfWidth, -halfHeight, -1.0); // rightBottom.***
	var ru = new Point3D(halfWidth, halfHeight, -1.0); // rightUp.***
	var lu = new Point3D(-halfWidth, halfHeight, -1.0); // leftUp.***
	
	if (this.quadBuffer === undefined)
	{
		var data = new Float32Array([lb.x, lb.y, lb.z,   rb.x, rb.y, rb.z,   lu.x, lu.y, lu.z,   
			rb.x, rb.y, rb.z,   ru.x, ru.y, ru.z,   lu.x, lu.y, lu.z]);
		this.quadBuffer = FBO.createBuffer(gl, data);
	}

	// create shaders.************
	var vsSource = ShaderSource.wgs84_volumVS;
	var fsSource = ShaderSource.wgs84_volumFS;
	this.temperatureProgram = PostFxShader.createProgram(gl, vsSource, fsSource);
	
	// set default geographicExtent.***
	if (this.geographicExtent === undefined)
	{ this.geographicExtent = new GeographicExtent(); }

	this.geographicExtent.setExtent(-180, -90, 0, 180, 90, 0);
};

TemperatureLayer.prototype.test_makeGeometryFromSlice = function(slice, minCol, minRow, maxCol, maxRow, minAltitude, maxAltitude)
{
	// Make real 3d geometry data.***
	// Given a "slice", make a surfaceMesh in (minCol, minRow, maxCol, maxRow).***
	if (this.image3d === undefined)
	{ return; }
	
	var degToRadFactor = Math.PI/180.0;
	
	// For entire slice: *************************************************************************
	var minLonEntireSlice = slice.geographicExtent.minGeographicCoord.longitude;
	var minLatEntireSlice = slice.geographicExtent.minGeographicCoord.latitude;
	var maxLonEntireSlice = slice.geographicExtent.maxGeographicCoord.longitude;
	var maxLatEntireSlice = slice.geographicExtent.maxGeographicCoord.latitude;
	
	var sliceNumCols = slice.width;
	var sliceNumRows = slice.height;
	
	var increLonRad = (maxLonEntireSlice - minLonEntireSlice)/(sliceNumCols-1);
	var increLatRad = (maxLatEntireSlice - minLatEntireSlice)/(sliceNumRows-1);
	//---------------------------------------------------------------------------------------------
	
	var minLon2 = minLonEntireSlice;
	var minLat2 = minLatEntireSlice;
	var maxLon2 = maxLonEntireSlice;
	var maxLat2 = maxLatEntireSlice;
	
	var lonSegments = maxCol - minCol;
	var latSegments = maxRow - minRow;

	// calculate total verticesCount.***
	var vertexCount = (lonSegments + 1)*(latSegments + 1);
	
	var currLon; 
	var currLat; 
	var currAlt;

	var colorAux;
	
	var vertexMatrix = new VertexMatrix();
	var vertexList;
	
	var exaggeratedMaxAlt = maxAltitude*(maxAltitude-minAltitude) *5.0;
	var altRange = (exaggeratedMaxAlt - minAltitude);
	var altUnitary;
	var alpha;
	alpha = 0.8;
	var vertex;
	var resultCartesian;
	
	// check if exist altitude.***
	var alt = 0;

	for (var currLatSeg = minRow; currLatSeg<=maxRow; currLatSeg++)
	{
		vertexList = vertexMatrix.newVertexList();
		
		////currLat = temperaturesData.lat[currLatSeg] * degToRadFactor; // if use dataCoords.***
		currLat = minLat2 + currLatSeg * increLatRad;
		for (var currLonSeg = minCol; currLonSeg<=maxCol; currLonSeg++)
		{
			// Uroborus.***
			var efectiveCurrLon = currLonSeg;
			if (efectiveCurrLon >= slice.width)
			{
				efectiveCurrLon -= slice.width;
			}
			
			////currLon = temperaturesData.lon[efectiveCurrLon] * degToRadFactor; // if use dataCoords.***
			currLon = minLon2 + efectiveCurrLon * increLonRad;
			// Now set the altitude. The Altitude is determined by the value of the slice.***
			if (slice)
			{
				currAlt = slice.getValue(efectiveCurrLon, currLatSeg);
			}
			else
			{ currAlt = alt; }
			
			var exaggerationAlt = (currAlt - minAltitude)*5.0; // original 20200908.***
			currAlt *= exaggerationAlt;
			
			// create vertex.***
			vertex = vertexList.newVertex();
			altUnitary = (currAlt - minAltitude)/altRange;
			if (altUnitary > 1.0){ altUnitary = 1.0; }
			else if (altUnitary < 0.0){ altUnitary = 0.0; }
			
			colorAux = Color.grayToRGB_MagoStyle(altUnitary, colorAux);
			
			resultCartesian = Globe.geographicToCartesianWgs84(currLon, currLat, currAlt, resultCartesian);
			vertex.setPosition(resultCartesian[0], resultCartesian[1], resultCartesian[2]);
			vertex.setColorRGBA(colorAux.b, colorAux.g, colorAux.r, alpha);
		}
	}
	
	// Now make the surface.***
	var bLoop = false;
	var mesh = new Mesh();
	var bClockWise = true;
	var surface = VertexMatrix.makeSurface(vertexMatrix, undefined, bLoop, bClockWise);
	surface.calculateVerticesNormals();
	mesh.addSurface(surface);
	
	if (this.meshesArray === undefined)
	{ this.meshesArray = []; }
	
	this.meshesArray.push(mesh);
	
};

TemperatureLayer.prototype.test_makeGeometryFromData = function(magoManager)
{
	// Make real 3d geometry data.***
	if (this.image3d === undefined)
	{ return; }
	
	var minCol;
	var maxCol;
	var minRow;
	var maxRow;
	
	var maxWidthMosaic = 300;
	var maxHeightMosaic = 300;
	
	// Note: in this.image3d there are only one stack.***
	var stacksCount = this.image3d.getStacksCount();
	for (var i=0; i<stacksCount; i++)
	{
		var stack = this.image3d.getStack(i);
		var slicesCount = stack.getSlicesCount();
		for (var j=0; j<slicesCount; j++)
		{
			var slice = stack.getSlice(0);
			
			var resultValuesArray = [];
			resultValuesArray = Slice.getMinMaxValuesOfArray(slice.dataArray, resultValuesArray);
			var minAltitude = resultValuesArray[0];
			var maxAltitude = resultValuesArray[1];
			
			// Split the slice.***
			var mosaicColsCount = Math.floor(slice.width / maxWidthMosaic);
			var mosaicRowsCount = Math.floor(slice.height / maxHeightMosaic);
			
			for (var row = 0; row<=mosaicRowsCount; row++)
			{
				for (var col = 0; col<=mosaicColsCount; col++)
				{
					minCol = col*maxWidthMosaic;
					maxCol = (col+1)*maxWidthMosaic;
					if (maxCol > slice.width)
					{ maxCol = slice.width; }
					minRow = row*maxHeightMosaic;
					maxRow = (row+1)*maxHeightMosaic;
					if (maxRow>slice.height)
					{ maxRow = slice.height; }
					this.test_makeGeometryFromSlice(slice, minCol, minRow, maxCol, maxRow, minAltitude, maxAltitude);
				}
			}
			break;
		}
	}
};

TemperatureLayer.prototype.test_makeCuttingPlane = function(magoManager)
{
	// make a test cutting plane.***
	if (this.cuttingPlanesArray === undefined)
	{ this.cuttingPlanesArray = []; }
	
	var cutPlane = new CuttingPlane();
	this.cuttingPlanesArray.push(cutPlane);
	
	// now set the cutPlane.******************************************
	var longitude = 128.0;
	var latitude = 37.5;
	var altitude = 0.0;
	
	if (cutPlane.geoLocDataManager === undefined)
	{ cutPlane.geoLocDataManager = new GeoLocationDataManager(); }
	
	var geoLoc = cutPlane.geoLocDataManager.newGeoLocationData("default");
	var heading = 90.0;
	var pitch = 45.0;
	var roll = 0.0;
	ManagerUtils.calculateGeoLocationData(longitude, latitude, altitude, heading, pitch, roll, geoLoc, magoManager);
	
	var width = 500000.0;
	var height = 500000.0;
	cutPlane.makeRectangle(width, height);
	
	// make a second cutting plane.******************************************
	var cutPlane = new CuttingPlane();
	this.cuttingPlanesArray.push(cutPlane);
	
	// now set the cutPlane.***
	var longitude = 128.0;
	var latitude = 32.0;
	var altitude = 0.0;
	
	if (cutPlane.geoLocDataManager === undefined)
	{ cutPlane.geoLocDataManager = new GeoLocationDataManager(); }
	
	var geoLoc = cutPlane.geoLocDataManager.newGeoLocationData("default");
	var heading = 0.0;
	var pitch = 90.0;
	var roll = 0.0;
	ManagerUtils.calculateGeoLocationData(longitude, latitude, altitude, heading, pitch, roll, geoLoc, magoManager);
	
	var width = 500000.0;
	var height = 500000.0;
	cutPlane.makeRectangle(width, height);
};

TemperatureLayer.prototype.test_renderCuttingPlanes = function(magoManager, shader, renderType)
{
	if (this.cuttingPlanesArray === undefined)
	{ return; }
	
	var gl = magoManager.sceneState.gl;
	
	var cutPlanesCount = this.cuttingPlanesArray.length;
	for (var i=0; i<cutPlanesCount; i++)
	{
		var cutPlane = this.cuttingPlanesArray[i];
		var geoLocDatamanager = cutPlane.geoLocDataManager;
		if (geoLocDatamanager === undefined)
		{ continue; }
		
		var geoLoc = geoLocDatamanager.getCurrentGeoLocationData();
		if (geoLoc === undefined)
		{ continue; }
		
		gl.uniformMatrix4fv(shader.buildingRotMatrix_loc, false, geoLoc.rotMatrix._floatArrays);
		gl.uniform3fv(shader.buildingPosHIGH_loc, geoLoc.positionHIGH);
		gl.uniform3fv(shader.buildingPosLOW_loc, geoLoc.positionLOW);
		gl.uniform3fv(shader.aditionalMov_loc, [0.0, 0.0, 0.0]); //.***
		
		cutPlane.render(magoManager, shader, renderType);
	}
};

TemperatureLayer.prototype.test_getCuttingPlanesParams = function(resultPlanesparamsArray)
{
	var cutPlanesCount = this.cuttingPlanesArray.length;
	resultPlanesparamsArray = new Float32Array(6 * 4);
	if (cutPlanesCount > 0)
	{
		for (var i=0; i<cutPlanesCount; i++)
		{
			var cutPlane = this.cuttingPlanesArray[i];
			var plane = cutPlane.getPlane();
			resultPlanesparamsArray[i*4] = plane.a;
			resultPlanesparamsArray[i*4+1] = plane.b;
			resultPlanesparamsArray[i*4+2] = plane.c;
			resultPlanesparamsArray[i*4+3] = plane.d;
		}
	}
	
	return resultPlanesparamsArray;
};

TemperatureLayer.prototype.renderMesh = function(magoManager, shader, renderType)
{
	// testing function, provisional.***
	if (this.meshesArray === undefined)
	{ 
		return;
	}
	
	var mesh;
	var meshesCount = this.meshesArray.length;
	for (var i=0; i<meshesCount; i++)
	{
		mesh = this.meshesArray[i];
		mesh.render(magoManager, shader, renderType);
		//break; // test.***
	}
};

TemperatureLayer.prototype.render = function(magoManager)
{
	if (this.volumeTex === undefined)
	{ return; }

	if (this.reorderedImage3d === undefined)
	{ return; }

	var sceneState = magoManager.sceneState;
	var mvInv = sceneState.getModelViewMatrixInv();
	var projectionMat = sceneState.projectionMatrix;
	var camera = magoManager.myCameraSCX;
	var frustum = camera.bigFrustum;
	
	var gl = this.gl;
	
	gl.enable(gl.BLEND);

	var program = this.temperatureProgram;
	gl.useProgram(program.program);

	//FBO.bindAttribute(gl, this.quadBuffer, program.position, 1);
	// Positions.***
	gl.enableVertexAttribArray(program.position);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer);
	gl.vertexAttribPointer(program.position, 3, gl.FLOAT, false, 0, 0);
		
	FBO.bindTexture(gl, this.volumeTex.texId, 0);
	
	gl.uniformMatrix4fv(program.modelViewMatrixInv, false, mvInv._floatArrays);
	gl.uniformMatrix4fv(program.projectionMatrix, false, projectionMat._floatArrays);
	gl.uniform3fv(program.encodedCameraPositionMCHigh, sceneState.encodedCamPosHigh);
	gl.uniform3fv(program.encodedCameraPositionMCLow, sceneState.encodedCamPosLow);

	gl.uniform1f(program.screenWidth, sceneState.drawingBufferWidth[0]);  
	gl.uniform1f(program.screenHeight, sceneState.drawingBufferHeight[0]);
	gl.uniform1f(program.aspectRatio, frustum.aspectRatio[0]);
	gl.uniform1f(program.far, frustum.far[0]);
	//gl.uniform1f(program.far, 1000.0);
	gl.uniform1f(program.fovyRad, frustum.fovyRad[0]);
	gl.uniform1f(program.tanHalfFovy, frustum.tangentOfHalfFovy[0]);
	
	// volume tex definition.***
	// Need this.uniqueSlice & this.reorderedImage3d.***
	var numSlices = temperaturesData.isobaric.length;
	var aStack = this.reorderedImage3d.stacksArray[0];
	var numStacks = this.reorderedImage3d.stacksArray.length;
	var numSlicesPerStacks = aStack.slicesArray.length;
	var aSlice = aStack.slicesArray[0];
	var numColsPerSlice = aSlice.width;
	var numRowsPerSlice = aSlice.height;
	var numCols = this.uniqueSlice.width;
	var numRows = this.uniqueSlice.height;
	gl.uniform1i(program.texNumCols, numCols); // uniqueSliceTexture cols count.***
	gl.uniform1i(program.texNumRows, numRows); // uniqueSliceTexture rows count.***
	gl.uniform1i(program.texNumSlices, numSlices);
	gl.uniform1i(program.numSlicesPerStacks, numSlicesPerStacks);
	gl.uniform1i(program.slicesNumCols, numColsPerSlice);
	gl.uniform1i(program.slicesNumRows, numRowsPerSlice);
	
	// If exist cuttingPlanes, calculate the absolute position.***
	var cuttingPlanesCount = 0;
	if (this.cuttingPlanesArray)
	{ cuttingPlanesCount = this.cuttingPlanesArray.length; }
	
	var cutPlanesParams = this.test_getCuttingPlanesParams(undefined);
	gl.uniform1i(program.cuttingPlanesCount, cuttingPlanesCount);
	var cutPlanesLoc = gl.getUniformLocation(program.program, "cuttingPlanes");
	
	gl.uniform4fv(cutPlanesLoc, cutPlanesParams);
	
	// whole earth.***
	gl.uniform1f(program.maxLon, 180.0);
	gl.uniform1f(program.minLon, -180.0);
	gl.uniform1f(program.maxLat, 90.0);
	gl.uniform1f(program.minLat, -90.0);
	
	// a fragment of earth.***
	/*
	gl.uniform1f(program.maxLon, 130.6086);
	gl.uniform1f(program.minLon, 123.6086);
	gl.uniform1f(program.maxLat, 42.5819);
	gl.uniform1f(program.minLat, 32.5819);
	*/
	
	gl.uniform1f(program.maxAlt, 150000.0);
	gl.uniform1f(program.minAlt, 0.0);

	gl.uniform1f(program.maxValue, this.maxTemperature);
	gl.uniform1f(program.minValue, this.minTemperature);
	

	gl.drawArrays(gl.TRIANGLES, 0, 6);
	
	
	gl.disable(gl.BLEND);
};































'use strict';

/**
 * @class WeatherStation
 */
var WeatherStation = function() 
{
	if (!(this instanceof WeatherStation)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	this.provisional_geometryDataPath;
	this.windLayersArray;
	this.windVolumesArray;
	this.tempLayersArray;
	this.precipitLayersArray;
	this.dustLayersArray;
	
	this.focusedWindLayerIdx;
	this.windDisplayBox;
	
};

WeatherStation.prototype.getWindLayersCount = function()
{
	if (this.windLayersArray === undefined)
	{ return 0; }
	
	return this.windLayersArray.length;
};

WeatherStation.prototype.getWindLayer = function(idx)
{
	if (this.windLayersArray === undefined)
	{ return undefined; }
	
	return this.windLayersArray[idx];
};

WeatherStation.prototype.newWindLayer = function(options)
{
	if (this.windLayersArray === undefined)
	{ this.windLayersArray = []; }
	
	var windLayer = new WindLayer(options);
	windLayer.weatherStation = this;
	this.windLayersArray.push(windLayer);
	return windLayer;
};

WeatherStation.prototype.newWindVolume = function(options)
{
	if (this.windVolumesArray === undefined)
	{ this.windVolumesArray = []; }
	
	var windVolume = new WindVolume(options);
	windVolume.weatherStation = this;
	this.windVolumesArray.push(windVolume);
	return windVolume;
};

WeatherStation.prototype.newTemperatureLayer = function()
{
	if (this.tempLayersArray === undefined)
	{ this.tempLayersArray = []; }
	
	var tempLayer = new TemperatureLayer();
	tempLayer.weatherStation = this;
	this.tempLayersArray.push(tempLayer);
	return tempLayer;
};

WeatherStation.prototype.newPrecipitationLayer = function()
{
	if (this.precipitLayersArray === undefined)
	{ this.precipitLayersArray = []; }
	
	var precipLayer = new PrecipitationLayer();
	precipLayer.weatherStation = this;
	this.precipitLayersArray.push(precipLayer);
	return precipLayer;
};

WeatherStation.prototype.test_createTemperaturaLayerExample = function(magoManager)
{
	var gl = magoManager.sceneState.gl;
	
	if (this.provisional_geometryDataPath === undefined)
	{ this.provisional_geometryDataPath = magoManager.readerWriter.geometryDataPath; }
	
	if (this.tempLayersArray === undefined || this.tempLayersArray.length === 0)
	{
		var tempLayer = this.newTemperatureLayer();
		tempLayer.init(gl, magoManager);
		
		// test make cutting planes.***
		tempLayer.test_makeCuttingPlane(magoManager);
		
		// make the physical mesh.***
		tempLayer.test_makeGeometryFromData(magoManager);
	}
	
	// Test for temperatureMeshes.**********************************
	var tempeLayersCount = 0;
	
	if (this.tempLayersArray)
	{ tempeLayersCount = this.tempLayersArray.length; }
	
	for (var i=0; i<tempeLayersCount; i++)
	{
		var tempLayer = this.tempLayersArray[i];
		if (tempLayer.meshesArray === undefined)
		{
			tempLayer.test_makeGeometryFromData(magoManager);
		}
	}
};

WeatherStation.prototype.test_createPrecipitationLayerExample = function(magoManager)
{
	if (this.precipitLayersArray === undefined)
	{ 
		if (this.provisional_geometryDataPath === undefined)
		{ this.provisional_geometryDataPath = magoManager.readerWriter.geometryDataPath; }

		var precipLayer = this.newPrecipitationLayer();
		
		// 1rst load precipitation data.***
		precipLayer.init(); // here loads a test data.***
		
	}
	
	// Test for temperatureMeshes.**********************************
	var precipLayersCount = 0;
	
	if (this.precipitLayersArray)
	{ precipLayersCount = this.precipitLayersArray.length; }
	
	for (var i=0; i<precipLayersCount; i++)
	{
		var precipLayer = this.precipitLayersArray[i];
		if (precipLayer.meshesArray === undefined)
		{
			precipLayer.test_makeGeometryFromData(magoManager);
		}
	}
};

WeatherStation.prototype.test_createWindLayerExample = function(magoManager)
{
	var gl = magoManager.sceneState.gl;
	
	if (this.provisional_geometryDataPath === undefined)
	{ this.provisional_geometryDataPath = magoManager.readerWriter.geometryDataPath; }
	
	if (this.windLayersArray === undefined || this.windLayersArray.length === 0)
	{
		var geometryDataPath = this.provisional_geometryDataPath;
		
		var options = {
			name              : "earth",
			speedFactor       : 0.2,
			dropRate          : 0.03,
			dropRateBump      : 0.01,
			numParticles      : 65536,
			layerAltitude     : 6000.0,
			windMapFileName   : "wind_025",
			windMapFolderPath : geometryDataPath +"/volumRenderingTest/wind_iSuSok"
		};
		
		var options = {
			name              : "JeJu Island",
			speedFactor       : 2.0,
			dropRate          : 0.003,
			dropRateBump      : 0.001,
			numParticles      : 65536/16,
			layerAltitude     : 1000.0,
			windMapFileName   : "OBS-QWM_2016062000.grib2_wind_000",
			windMapFolderPath : geometryDataPath +"/JeJu_wind_20191127"
		};
		
		
		var windLayer = this.newWindLayer(options);
		windLayer.init(gl);
		
		//windLayer.createEarthRegion(undefined, undefined, undefined, undefined, altitude); // for 2d texture rendering mode.***
		
		// test a fragment of earth.*******************************************************************
		// Temple a sud_est de corea.***
		/*
		var minLon = 129.28786819982201;
		var minLat = 35.83359921813443;
		var maxLon = 129.29425212290536;
		var maxLat = 35.83835487485899;
		var altitude = 200;
		*/
		
		// Seoul.***
		/*
		var minLon = 126.87599414117341;
		var minLat = 37.4619380986301;
		var maxLon = 127.13467878686347;
		var maxLat = 37.609881001668334;
		var altitude = 200;
		*/
		
		//windLayer.createEarthRegion(minLon, minLat, maxLon, maxLat, altitude, magoManager); // original.***
		//windLayer.createEarthRegion(undefined, undefined, undefined, undefined, altitude, magoManager); // original.***
		// End test.-----------------------------------------------------------------------------------
		
	}
};

WeatherStation.prototype.renderWindMultiLayers = function(magoManager)
{
	if (this.windLayersArray === undefined)
	{ return; }
	
	if (this.windLayersArray.length === 0 )
	{ return; }


	if (this.focusedWindLayerIdx === undefined)
	{ this.focusedWindLayerIdx = 0; }
	
	var gl;
	var windLayer;
	var windLayersCount = this.windLayersArray.length;
	for (var i=windLayersCount-1; i>= 0; i--)
	{
		windLayer = this.windLayersArray[i];
		if (windLayer.isReadyToRender())
		{
			windLayer.renderMode3D(magoManager);
			
			gl = windLayer.gl;
			FBO.bindTexture(gl, windLayer.windMapTexture.texId, 0);
			windLayer.updateParticlesPositions(magoManager); 
			//break;
		}
		else 
		{
			windLayer.prepareWindLayer();
		}
	}
	
	//if (windLayer !== undefined && windLayer.windMapTexture !== undefined)
	//{
	//	if (windLayer.windMapTexture.fileLoadState === CODE.fileLoadState.BINDING_FINISHED)
	//	{ 
	//		FBO.bindTexture(gl, windLayer.windMapTexture.texId, 0);
	//		windLayer.updateParticlesPositions(magoManager); 
	//	}
	//}
};

WeatherStation.prototype.renderDust = function(magoManager)
{
	if (!this.dustLayersArray)
	{ return; }

	
};

WeatherStation.prototype.renderWeather = function(magoManager)
{
	// Render all active weather type.

	// provisionally render test.
	if (this.dustLayersArray)
	{
		// render dust layers.
		this.renderDust(magoManager);
	}

	if (this.windVolumesArray)
	{
		this.renderWindLayerDisplayPlanes(magoManager);
	}

	if (this.tempLayersArray)
	{ 
		var renderType = 1;
		var shader = magoManager.postFxShadersManager.getShader("modelRefSsao"); 
		var gl = magoManager.getGl();
		//magoManager.postFxShadersManager.useProgram(shader);
		shader.useProgram(shader);
		var identityMat = new Matrix4();
		gl.uniformMatrix4fv(shader.buildingRotMatrix_loc, false, identityMat._floatArrays);
		gl.uniform3fv(shader.buildingPosHIGH_loc, [0.0, 0.0, 0.0]);
		gl.uniform3fv(shader.buildingPosLOW_loc, [0.0, 0.0, 0.0]);
		shader.enableVertexAttribArray(shader.color4_loc);
		gl.uniform1i(shader.colorType_loc, 1); // 0= oneColor, 1= attribColor, 2= texture.
		gl.enable(gl.BLEND);

		var tempeLayersCount = this.tempLayersArray.length; 
		for (var i=0; i<tempeLayersCount; i++)
		{
			var tempLayer = this.tempLayersArray[i];
			if (tempLayer.meshesArray === undefined)
			{
				tempLayer.test_makeGeometryFromData(magoManager);
				
			}
			else
			{
				tempLayer.renderMesh(magoManager, shader, renderType);
			}
		}

		magoManager.postFxShadersManager.useProgram(null);
		shader.disableVertexAttribArray(shader.color4_loc);
	}
	
	
};

WeatherStation.prototype.renderWindLayerDisplayPlanes = function(magoManager)
{
	// DisplayVolumeBox + 3 displayPlanes.***
	if (this.windVolumesArray === undefined || this.windVolumesArray.length === 0)
	{ return; }
	
	var windVolumesCount = this.windVolumesArray.length;
	for (var i=0; i<windVolumesCount; i++)
	{
		if ( i > 0)
		{
			// try to eliminame the windDisplayBox.
			if (this.windVolumesArray[i].windDisplayBox)
			{
				this.windVolumesArray[i].windDisplayBox.setOneColor(0.2, 0.7, 0.8, 0.0);
			}
		}
		this.windVolumesArray[i].renderWindLayerDisplayPlanes(magoManager);
	}
	return;
};

WeatherStation.prototype.test_loadWindData3d = function(magoManager, windMapFileNamesArray, windMapFilesFolderPath)
{
	// Provisionally hardCoding.***
	var gl = magoManager.getGl();
	var geometryDataPath = magoManager.readerWriter.geometryDataPath;
	this.altitudeAux = 0.0;
	
	// test windVolume.
	var windVolume = this.newWindVolume();
	windVolume.loadWindData3d(magoManager, windMapFileNamesArray, windMapFilesFolderPath);
	/*
	var windVolume = this.newWindVolume();
	windVolume.loadWindData3d(magoManager, windMapFileNamesArray, windMapFilesFolderPath);
	
	var windVolume = this.newWindVolume();
	windVolume.loadWindData3d(magoManager, windMapFileNamesArray, windMapFilesFolderPath);
	*/
};

WeatherStation.prototype.test_loadDustData3d = function(magoManager, dustMapFileNamesArray, dustMapFilesFolderPath)
{
	var dustLayer = new DustLayer();
	var hola = 0;

	if (this.dustLayersArray === undefined)
	{ this.dustLayersArray = []; }

	this.dustLayersArray.push(dustLayer);
};

WeatherStation.prototype.test_renderWindLayer = function(magoManager)
{
	this.test_createWindLayerExample(magoManager);
	
	if (this.windLayersArray === undefined)
	{ return; }
	
	if (this.windLayersArray.length === 0 )
	{ return; }
	
	var gl;
	var windLayersCount = this.windLayersArray.length;
	for (var i=0; i<windLayersCount; i++)
	{
		if (i < windLayersCount-1)
		{ continue; }
		
		var windLayer = this.windLayersArray[i];
		//windLayer.render(magoManager);
		windLayer.renderMode3D(magoManager);
		gl = windLayer.gl;
	}
	
	for (var i=0; i<windLayersCount; i++)
	{
		if (i < windLayersCount-1)
		{ continue; }
		
		var windLayer = this.windLayersArray[i];
		if (windLayer.windMapTexture.fileLoadState !== CODE.fileLoadState.BINDING_FINISHED)
		{ continue; }
		
		FBO.bindTexture(gl, windLayer.windMapTexture.texId, 0);
		//FBO.bindTexture(gl, windLayer.particlesPositionTexture0, 1);
		//windLayer.renderWindScreen();	
		windLayer.updateParticlesPositions(magoManager);
	}
};

WeatherStation.prototype.test_renderTemperatureLayer = function(magoManager)
{
	this.test_createTemperaturaLayerExample(magoManager);
	
	if (this.tempLayersArray === undefined)
	{ return; }
	
	if (this.tempLayersArray.length === 0 )
	{ return; }
	
	var tempLayer = this.tempLayersArray[0];
	tempLayer.render(magoManager);

};

WeatherStation.prototype.test_renderTemperatureMesh = function(magoManager, shader, renderType)
{
	this.test_createTemperaturaLayerExample(magoManager);
	
	if (this.tempLayersArray === undefined)
	{ return; }
	
	if (this.tempLayersArray.length === 0 )
	{ return; }

	var tempLayer = this.tempLayersArray[0];
	tempLayer.renderMesh(magoManager, shader, renderType);
};

WeatherStation.prototype.test_renderPrecipitationMesh = function(magoManager, shader, renderType)
{
	this.test_createPrecipitationLayerExample(magoManager);
	
	if (this.precipitLayersArray === undefined)
	{ return; }
	
	if (this.precipitLayersArray.length === 0 )
	{ return; }

	var precipLayer = this.precipitLayersArray[0];
	precipLayer.renderMesh(magoManager, shader, renderType);
};

WeatherStation.prototype.test_renderCuttingPlanes = function(magoManager, renderType)
{
	var boolAux = false;
	if (!boolAux)
	{ return; }
	
	if (this.tempLayersArray === undefined)
	{ return; }
	
	if (this.tempLayersArray.length === 0 )
	{ return; }
	
	var tempLayer = this.tempLayersArray[0];
	
	// render cuttingPlanes if exist.***
	var gl = magoManager.sceneState.gl;
	var shader;
	if (renderType === 2) // colorCoding.***
	{
		shader = magoManager.postFxShadersManager.getShader("modelRefColorCoding"); 
		magoManager.postFxShadersManager.useProgram(shader);
		shader.bindUniformGenerals();
		
		shader.disableVertexAttribArray(shader.texCoord2_loc);
		shader.enableVertexAttribArray(shader.position3_loc);
		shader.disableVertexAttribArray(shader.normal3_loc);
		shader.disableVertexAttribArray(shader.color4_loc); 
	}
	else if (renderType === 0)
	{
		shader = magoManager.postFxShadersManager.getShader("modelRefDepth"); 
		magoManager.postFxShadersManager.useProgram(shader);
		shader.bindUniformGenerals();
		
		// test: in depth, set frustumFar = 1000.***
		//var frustumFarLoc = shader.uniformsMapGeneral["frustumFar"].uniformLocation;
		//gl.uniform1f(frustumFarLoc, new Float32Array([1000.0]));
		//if(shader.uniformsMapGeneral["frustumFar"].floatValue !== 1000)
		//	var hola = 0;
		
		shader.enableVertexAttribArray(shader.position3_loc);
	}
	else if (renderType === 1)
	{
		shader = magoManager.postFxShadersManager.getShader("modelRefSsao"); 
		magoManager.postFxShadersManager.useProgram(shader);
		shader.bindUniformGenerals();
		
		shader.disableVertexAttribArray(shader.texCoord2_loc);
		shader.enableVertexAttribArray(shader.position3_loc);
		shader.enableVertexAttribArray(shader.normal3_loc);
		shader.disableVertexAttribArray(shader.color4_loc); 
	}
	
	gl.uniform1i(shader.bApplySpecularLighting_loc, false);
	
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, magoManager.depthFboNeo.colorBuffer);  // original.***
	gl.activeTexture(gl.TEXTURE1);
	gl.bindTexture(gl.TEXTURE_2D, magoManager.noiseTexture);
	gl.activeTexture(gl.TEXTURE2); 
	gl.bindTexture(gl.TEXTURE_2D, magoManager.textureAux_1x1);
		
	tempLayer.test_renderCuttingPlanes(magoManager, shader, renderType);
};



































'use strict';

/**
 * @class WeatherVolume
 */
var WeatherVolume = function(options) 
{
	if (!(this instanceof WeatherVolume)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	
	//this.windLayersArray;
	this.weatherStation;
	this.extrusionHeight;
	
	// Box & plane.
	this.displayBox;
	this.displayPlane;
	this.displayPlanesArray = [];
};
'use strict';

/**
 * @class WindLayer
 */
var WindMapData = function(options) 
{
	this.windMapTexture; // uv encoded wind map.***
	this.windMapJson;
	this.windMapFileName;
	this.windMapFolderPath;
	
	this.windData = {};
	this.windData.uMin;
	this.windData.vMin;
	this.windData.uMax;
	this.windData.vMax;
	this.windData.height;
	this.windData.width;
};

/**
 * @class WindLayer
 */
var WindLayer = function(options) 
{
	// Based on https://blog.mapbox.com/how-i-built-a-wind-map-with-webgl-b63022b5537f
	if (!(this instanceof WindLayer)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	this.weatherStation;
	this.gl;
	
	this.windMapsArray = [];
	this.windMapTexture; // uv encoded wind map.***
	this.windMapJson;
	this.windMapFileName;
	this.windMapFolderPath;
	this.windData;
	
	this.currWindMap;
	this.currWindMapIdx = 0;
	
	this.screenTexture0;
	this.screenTexture1;
	this.screenTexWidth;
	this.screenTexHeight;
	
	this.geoExtent;
	this.layerAltitude = 6000.0;
	this.geoLocDataManager; // the geoLocdata of the center of the tile.

	// shader programs.***
	this.drawParticlesProgram; // render particles shader.***
	this.screenFadeProgram;
	this.updateParticlesProgram;
	this.drawRegionProgram; // no used yet.***
	
	this.quadBuffer;
	this.particlesPositionTexture0;
	this.particlesPositionTexture1;
	
	this.weatherEarth; // used only 2d wind render generation.
	
	// Test values.****************************************************************************
	this.fadeOpacity = 0.9999; // how fast the particle trails fade on each frame
	this.speedFactor = 0.04; // how fast the particles move
	this.dropRate = 0.003; // how often the particles move to a random place
	this.dropRateBump = 0.001; // drop rate increase relative to individual particle speed
	
	this.speedFactor = 0.1; // how fast the particles move
	this.dropRate = 0.003; // how often the particles move to a random place
	this.dropRateBump = 0.01; // drop rate increase relative to individual particle speed
	// End test values.-----------------------------------------------------------------------
	
	this.numParticles = 65536/4;// / 4; // 65536 = 256 x 256.***
	
	this.flipTexCoordsY_windMap = true;
	this.externalAlpha = 0.7;
	
	// Check if exist options.
	if (options !== undefined)
	{
		if (options.speedFactor !== undefined)
		{ this.speedFactor = options.speedFactor; }
		
		if (options.dropRate !== undefined)
		{ this.dropRate = options.dropRate; }
	
		if (options.dropRateBump !== undefined)
		{ this.dropRateBump = options.dropRateBump; }
	
		if (options.numParticles !== undefined)
		{ this.numParticles = options.numParticles; }
	
		if (options.windMapFileName !== undefined)
		{ this.windMapFileName = options.windMapFileName; }
	
		if (options.windMapFolderPath !== undefined)
		{ this.windMapFolderPath = options.windMapFolderPath; }
	
		if (options.layerAltitude !== undefined)
		{ this.layerAltitude = options.layerAltitude; }
	}
};

WindLayer.prototype.init = function(gl, magoManager)
{
	this.gl = gl;
	// screen textures.***
	/*
	this.screenTexWidth = screenTexWidth;
	this.screenTexHeight = screenTexHeight;
	
	if (screenTexWidth === undefined)
	{ this.screenTexWidth = 4096; }
	if (screenTexHeight === undefined)
	{ this.screenTexHeight = 4096; }
	
	var emptyPixels = new Uint8Array(this.screenTexWidth * this.screenTexHeight * 4);
	// screen textures to hold the drawn screen for the previous and the current frame
	this.screenTexture0 = Texture.createTexture(gl, gl.LINEAR, emptyPixels, this.screenTexWidth, this.screenTexHeight);
	this.screenTexture1 = Texture.createTexture(gl, gl.LINEAR, emptyPixels, this.screenTexWidth, this.screenTexHeight);
	*/
	
	// quad buffer.***
	if (this.quadBuffer === undefined)
	{
		var data = new Float32Array([0, 0,   1, 0,   0, 1,   0, 1,   1, 0,   1, 1]);
		this.quadBuffer = FBO.createBuffer(gl, data);
	}
	
	// frameBuffer.***
	if (this.windFramebuffer === undefined)
	{
		this.windFramebuffer = gl.createFramebuffer();
	}
	
	// shaders.***
	var vsSource = ShaderSource.draw_vert;
	var fsSource = ShaderSource.draw_frag;
	this.drawParticlesProgram = PostFxShader.createProgram(gl, vsSource, fsSource);

	vsSource = ShaderSource.quad_vert;
	fsSource = ShaderSource.screen_frag;
	this.screenFadeProgram = PostFxShader.createProgram(gl, vsSource, fsSource);
	
	vsSource = ShaderSource.quad_vert;
	fsSource = ShaderSource.update_frag;
	this.updateParticlesProgram = PostFxShader.createProgram(gl, vsSource, fsSource);
	this.updateParticlesProgram.u_visibleTilesRanges = gl.getUniformLocation(this.updateParticlesProgram.program, "u_visibleTilesRanges");
	
	// test for direct 3d drawing.***
	var vsSource = ShaderSource.draw_vert3D;
	var fsSource = ShaderSource.draw_frag3D;
	var shaderName = "drawWindParticles3d";
	var use_linearOrLogarithmicDepth = "USE_LINEAR_DEPTH";
	var useLogarithmicDepth = magoManager.postFxShadersManager.getUseLogarithmicDepth();
	if (useLogarithmicDepth)
	{
		use_linearOrLogarithmicDepth = "USE_LOGARITHMIC_DEPTH";
	}
	fsSource = fsSource.replace(/%USE_LOGARITHMIC_DEPTH%/g, use_linearOrLogarithmicDepth);

	this.drawParticles3DShader = magoManager.postFxShadersManager.createShaderProgram(gl, vsSource, fsSource, shaderName, magoManager);
	this.drawParticles3DShader.bUseLogarithmicDepth_loc = gl.getUniformLocation(this.drawParticles3DShader.program, "bUseLogarithmicDepth");
	this.drawParticles3DShader.uFCoef_logDepth_loc = gl.getUniformLocation(this.drawParticles3DShader.program, "uFCoef_logDepth");

	this.drawParticlesProgram3D = this.drawParticles3DShader.program;
	
	//vsSource = ShaderSource.Test_QuadVS;
	//fsSource = ShaderSource.Test_QuadFS;
	//this.drawRegionProgram = PostFxShader.createProgram(gl, vsSource, fsSource);
	
	// particles position textures.***
	var particleRes = this.particleStateResolution = Math.ceil(Math.sqrt(this.numParticles));
	this.numParticles = particleRes * particleRes;
	
	var particleState = new Uint8Array(this.numParticles * 4);
	for (var i = 0; i < particleState.length; i++) 
	{
		particleState[i] = Math.floor(Math.random() * 256); // randomize the initial particle positions
	}
	// textures to hold the particle state for the current and the next frame
	//this.particlesPositionTexture0 = Texture.createTexture(gl, gl.NEAREST, particleState, particleRes, particleRes);
	//this.particlesPositionTexture1 = Texture.createTexture(gl, gl.NEAREST, particleState, particleRes, particleRes);
	
	var particlesPositionTexturesCount = 70 ;//* 2;
	particlesPositionTexturesCount = 30 ;//* 2;
	particlesPositionTexturesCount = 10 ;// golfPark only one hole
	this.particlesPositionTexturesArray = [];
	for (var i=0; i<particlesPositionTexturesCount; i++)
	{
		var particlesPositionTexture = Texture.createTexture(gl, gl.NEAREST, particleState, particleRes, particleRes);
		this.particlesPositionTexturesArray.push(particlesPositionTexture);
	}

	var particleIndices = new Float32Array(this.numParticles);
	for (var i = 0; i < this.numParticles; i++) { particleIndices[i] = i; }
	this.particleIndexBuffer = FBO.createBuffer(gl, particleIndices);
};

WindLayer.prototype.prepareWindLayer = function()
{
	// Check if the winsMapTexture is loaded.
	if (this.windMapTexture === undefined)
	{
		this.windMapTexture = new Texture();
		this.windMapTexture.texId = this.gl.createTexture();
	}
	
	if (this.windMapTexture.fileLoadState === CODE.fileLoadState.READY)
	{
		var windMapTexturePath = this.windMapFolderPath + "/" + this.windMapFileName + ".png";
		ReaderWriter.loadImage(this.gl, windMapTexturePath, this.windMapTexture);
		return false;
	}
	
	if (this.windMapJsonFileLoadState === undefined || this.windMapJsonFileLoadState === CODE.fileLoadState.READY)
	{
		this.windMapJsonFileLoadState = CODE.fileLoadState.LOADING_STARTED;
		var that = this;
		var windMapJsonPath = this.windMapFolderPath + "/" + this.windMapFileName + ".json";
		loadWithXhr(windMapJsonPath, undefined, undefined, 'json', 'GET').done(function(res) 
		{
			that.windMapJson = res;
			that.windMapJsonFileLoadState = CODE.fileLoadState.LOADING_FINISHED;
			
			var jsonLonCount = that.windMapJson.lon.length;
			var jsonLatCount = that.windMapJson.lat.length;
			
			var jsonMinLon = that.windMapJson.lon[0];
			var jsonMaxLon = that.windMapJson.lon[jsonLonCount-1];
			
			var jsonMinLat = that.windMapJson.lat[jsonLatCount-1];
			var jsonMaxLat = that.windMapJson.lat[0];
			
			if (that.windMapJson.minLon)
			{
				jsonMinLon = that.windMapJson.minLon;
			}
			
			if (that.windMapJson.maxLon)
			{
				jsonMaxLon = that.windMapJson.maxLon;
			}
			
			if (that.windMapJson.minLat)
			{
				jsonMinLat = that.windMapJson.minLat;
			}
			
			if (that.windMapJson.maxLat)
			{
				jsonMaxLat = that.windMapJson.maxLat;
			}
			
			var lonOffSet = 0.0;
			var jsonAlt_above_ground = 10.0;
			
			if (that.windMapJson.height_above_ground !== undefined)
			{ jsonAlt_above_ground = that.windMapJson.height_above_ground[0]; }
			
			var lonRange = jsonMaxLon - jsonMinLon;
			/*
			var minLon = 360 - jsonMaxLon + lonRange + lonOffSet; 
			var minLat = jsonMinLat; 
			var minAlt = jsonAlt_above_ground; 
			var maxLon = 360 - jsonMinLon + lonRange - lonOffSet;
			var maxLat = jsonMaxLat;
			var maxAlt = jsonAlt_above_ground;
			*/
			
			var minLon = jsonMinLon; 
			var minLat = jsonMinLat; 
			var minAlt = jsonAlt_above_ground; 
			var maxLon = jsonMaxLon;
			var maxLat = jsonMaxLat;
			var maxAlt = jsonAlt_above_ground;
			
			that.geoExtent = new GeographicExtent(minLon, minLat, minAlt, maxLon, maxLat, maxAlt);
			
			if (that.windData === undefined)
			{
				that.windData = {};
			}
			that.windData.uMin = that.windMapJson.uMin;
			that.windData.vMin = that.windMapJson.vMin;
			that.windData.uMax = that.windMapJson.uMax;
			that.windData.vMax = that.windMapJson.vMax;
			that.windData.height = that.windMapJson.height;
			that.windData.width = that.windMapJson.width;
			that.windData.height_above_ground = that.windMapJson.height_above_ground[0];
			
			// calculate the geoLocationData.
			that.geoLocDataManager = new GeoLocationDataManager();
			var geoLocData = that.geoLocDataManager.newGeoLocationData("centerOfTile");
			var altitude = that.layerAltitude;
			ManagerUtils.calculateGeoLocationData((jsonMinLon + jsonMaxLon)/2, (jsonMinLat + jsonMaxLat)/2, altitude, 0, 0, 0, geoLocData);


		});
		return false;
	}
	
	return true;
};

WindLayer.prototype.isReadyToRender = function()
{
	// The windMap is ready to render if loaded windMapTexture & windMapJson.
	if ( this.windMapTexture !== undefined && this.windMapTexture.fileLoadState === CODE.fileLoadState.BINDING_FINISHED)
	{
		if (this.windMapJsonFileLoadState !== undefined && this.windMapJsonFileLoadState === CODE.fileLoadState.LOADING_FINISHED)
		{ return true; }
	}
	
	return false;
};

WindLayer.prototype.createEarthRegion = function(minLon, minLat, maxLon, maxLat, altitude, magoManager)
{
	if (minLon === undefined)
	{ minLon = -180; }
	
	if (minLat === undefined)
	{ minLat = -90; }
	
	if (maxLon === undefined)
	{ maxLon = 180; }
	
	if (maxLat === undefined)
	{ maxLat = 90; }
	
	if (altitude === undefined)
	{ altitude = 0; }

	this.weatherEarth = new TinTerrain();
	this.weatherEarth.geographicExtent = new GeographicExtent();
	this.weatherEarth.geographicExtent.minGeographicCoord = new GeographicCoord();
	this.weatherEarth.geographicExtent.maxGeographicCoord = new GeographicCoord();
	
	this.weatherEarth.geographicExtent.minGeographicCoord.setLonLatAlt(minLon, minLat, altitude);
	this.weatherEarth.geographicExtent.maxGeographicCoord.setLonLatAlt(maxLon, maxLat, altitude);
	
	this.weatherEarth.centerX = new Float64Array([0.0]);
	this.weatherEarth.centerY = new Float64Array([0.0]);
	this.weatherEarth.centerZ = new Float64Array([0.0]);

	var lonSegments = 72;
	var latSegments = 36;
	if (altitude === undefined)
	{ altitude = 16000.0; }
	this.weatherEarth.makeMeshVirtuallyCRS84(lonSegments, latSegments, altitude);
	
	// This is a earth made by only 1 tile, so the centerPosition is (0, 0, 0).
	this.weatherEarth.centerX[0] = 0;
	this.weatherEarth.centerX[1] = 0;
	this.weatherEarth.centerX[2] = 0;
	this.weatherEarth.makeVbo(magoManager.vboMemoryManager);
	
};

WindLayer.prototype.getVelocityVector2d = function(pixelX, pixelY, resultPoint2d, magoManager)
{
	// Note: to call this function MUST BE BINDED the windTexture.
	//-------------------------------------------------------------
	// Now, bind windTexture and read the pixel(pixelX, pixelY).
	// Read the picked pixel and find the object.*********************************************************
	var mosaicWidth = 1;
	var mosaicHeight = 1;
	var totalPixelsCount = mosaicWidth*mosaicHeight;
	var pixels = new Uint8Array(4 * mosaicWidth * mosaicHeight); // 1 pixels select.***

	if (pixelX < 0){ pixelX = 0; }
	if (pixelY < 0){ pixelY = 0; }
	
	var gl = magoManager.getGl();
	gl.readPixels(pixelX, pixelY, mosaicWidth, mosaicHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
	
	
	var red = pixels[0]/255.0;
	var green = pixels[1]/255.0;
	
	// Now, considering the maxWindU, minWindU, maxWindV & minWindV, calculate the wind speed.
	var uMin = this.windData.uMin;
	var vMin = this.windData.vMin;
	var uMax = this.windData.uMax;
	var vMax = this.windData.vMax;
	//vec2 velocity = mix(u_wind_min, u_wind_max, lookup_wind(windMapTexCoord));
	// mix(v1, v2, a) = v1 * (1 - a) + v2 * a
	
	var velU = uMin * (1.0 - red) + uMax * red;
	var velV = vMin * (1.0 - green) + vMax * green;
	
	if (resultPoint2d === undefined)
	{ resultPoint2d = new Point2D(); }
	
	resultPoint2d.set(velU, velV);
	return resultPoint2d;
};

WindLayer.prototype.getTrajectory = function(startGeoCoord, resultGeoCoordsArray, magoManager, options)
{
	// Obtain the velocity in this geoCoord.
	var minLonRad = this.geoExtent.getMinLongitudeRad();
	var minLatRad = this.geoExtent.getMinLatitudeRad();
	var maxLonRad = this.geoExtent.getMaxLongitudeRad();
	var maxLatRad = this.geoExtent.getMaxLatitudeRad();
	var minAlt = this.geoExtent.getMinAltitude();
	var maxAlt = this.geoExtent.getMaxAltitude();
	var lonRadRange = maxLonRad - minLonRad;
	var latRadRange = maxLatRad - minLatRad;
	var radToDeg = 180/Math.PI;
	var altitude = startGeoCoord.altitude;
	
	// speeds.
	var uMin = this.windData.uMin;
	var vMin = this.windData.vMin;
	var uMax = this.windData.uMax;
	var vMax = this.windData.vMax;

	var windSpeedMin = new Point2D(uMin, vMin);
	var windSpeedMax = new Point2D(uMax, vMax);

	// 1rst, create random points on the layer domain.
	
	var gl = magoManager.getGl();

	// Now, bind framebuffer of the windMapTexture.
	var windTexWidth = this.windMapTexture.imageWidth;
	var windTexHeight = this.windMapTexture.imageHeight;
	
	if (this.framebuffer === undefined)
	{ this.framebuffer = gl.createFramebuffer(); }
	
	// bind framebuffer.
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	// attach the texture to the framebuffer.
	gl.framebufferTexture2D( gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.windMapTexture.texId, 0);
	var canRead = (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE);
	if (canRead)
	{ 
		// 1rst, check if the geoCoord is inside of this windLayer range.
		if (!this.geoExtent.intersects2dWithGeoCoord(startGeoCoord))
		{ return resultGeoCoordsArray; }
	
		//var geoCoord = new GeographicCoord(126.40310387701689, 33.34144078912163, altitude);
		if (resultGeoCoordsArray === undefined)
		{ resultGeoCoordsArray = []; }
	
		if (!startGeoCoord.attributes)
		{ startGeoCoord.attributes = {}; }
			
		startGeoCoord.attributes.windSpeed = 0;
		resultGeoCoordsArray.push(startGeoCoord); // push the 1rst geoCoord.

		// Calculate the texCoord of the "geoCoord".
		var currLon = startGeoCoord.getLongitudeRad();
		var currLat = startGeoCoord.getLatitudeRad();
		
		var texWidth = this.windMapTexture.imageWidth;
		var texHeight = this.windMapTexture.imageHeight;
		
		var speedFactor = 2.0*0.0000001;
		var numPoints = 20;
		
		if (options)
		{
			if (options.speedFactor !== undefined)
			{ speedFactor = options.speedFactor; }
			
			if (options.numPoints !== undefined)
			{ numPoints = options.numPoints; }
		}
		
		// Create a lineString with numPoints.***
		for (var i=0; i<numPoints; i++)
		{
			var pixelX = Math.floor((currLon - minLonRad)/lonRadRange*texWidth);
			var pixelY = Math.floor((currLat - minLatRad)/latRadRange*texHeight);
			var velocity2d = this.getVelocityVector2d(pixelX, pixelY, undefined, magoManager); 
			var speed = velocity2d.getModul() / windSpeedMax.getModul();
			
			// calculate currLon & currLat.
			var distortion = Math.cos((minLatRad + currLat * latRadRange ));
			var offset = new Point2D(velocity2d.x / distortion*speedFactor, velocity2d.y*speedFactor);
			currLon += offset.x;
			currLat += offset.y;
			
			var currGeoCoord = new GeographicCoord(currLon*radToDeg, currLat*radToDeg, altitude);
			if (!currGeoCoord.attributes)
			{ currGeoCoord.attributes = {}; }
			
			currGeoCoord.attributes.windSpeed = speed;
			
			if (!this.geoExtent.intersects2dWithGeoCoord(currGeoCoord))
			{ return resultGeoCoordsArray; }
		
			resultGeoCoordsArray.push(currGeoCoord);
		}
	}
	
	// Unbind the framebuffer
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	return resultGeoCoordsArray;
};

WindLayer.prototype.renderMode3D = function(magoManager)
{
	if (!this.isReadyToRender())
	{ 
		this.prepareWindLayer();
		return; 
	}
	
	if (this.windDisplayPlane === undefined)
	{ return; }

	var windDisplayPlane = this.windDisplayPlane;
	
	// test to render in 3d directly.***
	// No need weatherEarth.***
	var camPos = magoManager.sceneState.camera.position;
	var gl = this.gl;
	var shader = this.drawParticles3DShader;
	var program = shader.program;
	gl.useProgram(program);
	this.drawParticles3DShader.bindUniformGenerals();
	gl.enableVertexAttribArray(shader.a_index);

	// Set if use logarithmic depth.
	gl.uniform1i(shader.bUseLogarithmicDepth_loc, magoManager.postFxShadersManager.bUseLogarithmicDepth);
	gl.uniform1f(shader.uFCoef_logDepth_loc, magoManager.sceneState.fCoef_logDepth[0]);
	
	// set modelViewProjectionMatrix.
	var mvpMat = magoManager.sceneState.modelViewProjMatrix;
	gl.uniformMatrix4fv(shader.ModelViewProjectionMatrix, false, mvpMat._floatArrays);
	
	var buildingGeoLocation = this.geoLocDataManager.getCurrentGeoLocationData();
	buildingGeoLocation.bindGeoLocationUniforms(gl, shader);
	
	var geoLocData = this.windDisplayPlane.geoLocDataManager.getCurrentGeoLocationData();
	geoLocData.bindGeoLocationUniforms(gl, shader);

	//FBO.bindAttribute(gl, this.particleIndexBuffer, shader.a_index, 1);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.particleIndexBuffer);
	gl.vertexAttribPointer(shader.a_index, 1, gl.FLOAT, false, 0, 0);
	gl.uniform1i(shader.u_colorScale, true);

	gl.uniform1i(shader.u_wind, 0);
	gl.uniform1i(shader.u_particles, 1);
	
	FBO.bindTexture(gl, this.windMapTexture.texId, 0);
	
	var uMin = this.windData.uMin;
	var vMin = this.windData.vMin;
	var uMax = this.windData.uMax;
	var vMax = this.windData.vMax;
	
	if (this.weatherStation.windData && this.weatherStation.windData.uMin)
	{
		uMin = this.weatherStation.windData.uMin;
		vMin = this.weatherStation.windData.vMin;
		uMax = this.weatherStation.windData.uMax;
		vMax = this.weatherStation.windData.vMax;
	}
	
	gl.uniform1f(shader.u_particles_res, this.particleStateResolution);
	gl.uniform2f(shader.u_wind_min, uMin, vMin);
	gl.uniform2f(shader.u_wind_max, uMax, vMax);
	gl.uniform1i(shader.u_flipTexCoordY_windMap, this.flipTexCoordsY_windMap);
	
	// Layer altitude (no used in small wind maps).********************************************************
	//var geoLocData = this.weatherStation.geoLocDataManager.getCurrentGeoLocationData();
	//var layerAltitude = geoLocData.geographicCoord.altitude;
	//gl.uniform1f(shader.u_layerAltitude, layerAltitude);
	//-----------------------------------------------------------------------------------------------------
	
	var minLonRad = this.geoExtent.getMinLongitudeRad();
	var minLatRad = this.geoExtent.getMinLatitudeRad();
	var maxLonRad = this.geoExtent.getMaxLongitudeRad();
	var maxLatRad = this.geoExtent.getMaxLatitudeRad();
	var minAlt = this.geoExtent.getMinAltitude();
	var maxAlt = this.geoExtent.getMaxAltitude();
	
	gl.uniform3fv(shader.u_geoCoordRadiansMax, [maxLonRad, maxLatRad, maxAlt]);
	gl.uniform3fv(shader.u_geoCoordRadiansMin, [minLonRad, minLatRad, minAlt]);
	
	gl.uniform3fv(shader.u_camPosWC, [camPos.x, camPos.y, camPos.z]);
	gl.uniform1f(shader.pendentPointSize, 20000.0);
	//gl.uniform1f(shader.pendentPointSize, 5000.0); // for all jeju island.
	//gl.uniform1f(shader.pendentPointSize, 3000.0); // jeju airport.
	//gl.uniform1f(shader.pendentPointSize, 1000.0); // jeju airport.
	//gl.uniform1f(shader.pendentPointSize, 80.0); // golfPark 1 hole.
	gl.uniform1f(shader.u_externAlpha, this.externalAlpha);
	
	gl.enable(gl.BLEND);
	
	var count = this.particlesPositionTexturesArray.length;
	for (var i = count-1; i>= 0; i--)
	{
		// Calculate the tail transparency alpha.
		var alpha = 1/count * (i+1);
		if (i === 0)
		{
			alpha = 0.1;
		}
		else 
		{
			alpha = 1/count * (i+1);
		}
		
		gl.uniform1f(shader.u_tailAlpha, alpha);
		FBO.bindTexture(gl, this.particlesPositionTexturesArray[i], 1);
		gl.drawArrays(gl.POINTS, 0, this.numParticles);
	}
	gl.disable(gl.BLEND);
};

WindLayer.prototype.render = function(magoManager)
{
	var gl = this.gl;
	
	if (this.weatherEarth)
	{
		// render the quad.***
		var currentShader = magoManager.postFxShadersManager.getShader("testQuad"); 
		var shaderProgram = currentShader.program;
		
		gl.useProgram(shaderProgram);
		gl.enableVertexAttribArray(currentShader.texCoord2_loc);
		gl.enableVertexAttribArray(currentShader.position3_loc);
		
		currentShader.bindUniformGenerals();
		
		currentShader.resetLastBuffersBinded();

		this.flipTexCoordsY_windMap = true;
		if (this.wwwMat === undefined)
		{
			this.wwwMat = new Matrix4();
			this.wwwMat.rotationAxisAngDeg(90.0, 1.0, 0.0, 0.0);
			this.flipTexCoordsY_windMap = false;
		}
		
		if (magoManager.configInformation.geo_view_library === Constant.WORLDWIND)
		{ gl.uniformMatrix4fv(currentShader.buildingRotMatrix_loc, false, this.wwwMat._floatArrays); }
		else
		{ gl.uniformMatrix4fv(currentShader.buildingRotMatrix_loc, false, [1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0,  0, 0, 0, 1]); }
		
		gl.uniform3fv(currentShader.buildingPosHIGH_loc, [0, 0, 0]);
		gl.uniform3fv(currentShader.buildingPosLOW_loc, [0, 0, 0]);

		gl.activeTexture(gl.TEXTURE2);
		gl.bindTexture(gl.TEXTURE_2D, this.screenTexture0);  
		//gl.bindTexture(gl.TEXTURE_2D, this.windMapTexture.texId);  
		//gl.bindTexture(gl.TEXTURE_2D, this.particleStateTexture0);  

		var vbo = this.weatherEarth.vboKeyContainer.vboCacheKeysArray[0];
	
		if (!vbo.bindDataTexCoord(currentShader, magoManager.vboMemoryManager))
		{ return; }
		if (!vbo.bindDataPosition(currentShader, magoManager.vboMemoryManager))
		{ return; }
		if (!vbo.bindDataIndice(currentShader, magoManager.vboMemoryManager)) 
		{ return; }
	
		gl.enable(gl.BLEND);
		gl.drawElements(gl.TRIANGLES, vbo.indicesCount, gl.UNSIGNED_SHORT, 0); // Fill.***
		gl.disable(gl.BLEND);
		
	}
};

WindLayer.prototype.renderWindScreen = function()
{
	var gl = this.gl;
	// draw the screen into a temporary framebuffer to retain it as the background on the next frame
	FBO.bindFramebuffer(gl, this.windFramebuffer, this.screenTexture0);
	
	gl.viewport(0, 0, this.screenTexWidth, this.screenTexHeight);

	this.drawFadeScreen(this.screenTexture1, this.fadeOpacity);
	this.renderParticles();
	
	// save the current screen as the background for the next frame
	var aux = this.screenTexture1;
	this.screenTexture1 = this.screenTexture0;
	this.screenTexture0 = aux;
	
};

WindLayer.prototype.drawFadeScreen = function(texture, opacity) 
{
	// here apply transparency to the particles tail.***
	var gl = this.gl;
	var program = this.screenFadeProgram;
	gl.useProgram(program.program);

	FBO.bindAttribute(gl, this.quadBuffer, program.a_pos, 2);
	FBO.bindTexture(gl, texture, 2);
	gl.uniform1i(program.u_screen, 2);
	gl.uniform1f(program.u_opacity, opacity);
	

	gl.drawArrays(gl.TRIANGLES, 0, 6);
};

WindLayer.prototype.renderParticles = function() 
{
	var gl = this.gl;
	var program = this.drawParticlesProgram;
	gl.useProgram(program.program);

	FBO.bindAttribute(gl, this.particleIndexBuffer, program.a_index, 1);
	gl.uniform1i(program.u_colorScale, true);

	gl.uniform1i(program.u_wind, 0);
	gl.uniform1i(program.u_particles, 1);
	
	gl.uniform1f(program.u_particles_res, this.particleStateResolution);
	gl.uniform2f(program.u_wind_min, this.windData.uMin, this.windData.vMin);
	gl.uniform2f(program.u_wind_max, this.windData.uMax, this.windData.vMax);
	gl.uniform1i(program.u_flipTexCoordY_windMap, this.flipTexCoordsY_windMap);

	gl.drawArrays(gl.POINTS, 0, this.numParticles);
};

WindLayer.prototype.updateParticlesPositions = function(magoManager) 
{
	//if (this.counterAux === undefined)
	//{ this.counterAux = 0; }
	
	//this.counterAux += 1;
	
	//if (this.counterAux < 8)
	//{ return; }

	//if (this.counterAux < 2)
	//{ return; }
	
	//this.counterAux = 0;
	
	var gl = magoManager.getGl();
	var layersToUpdateCount = 6;
	layersToUpdateCount = 1;
	var particlesPositionTexture = this.particlesPositionTexturesArray[this.particlesPositionTexturesArray.length-1];
	FBO.bindTexture(gl, particlesPositionTexture, 1);
	var interpolFactor = 1.0/(layersToUpdateCount); // original.
	for (var i=0; i<layersToUpdateCount; i++)
	{
		//var interpolation = interpolFactor * (1+i); // original.
		var interpolation = interpolFactor * (1+i);
		this.updateParticlesPositionsForInterpolation(magoManager, interpolation);
	}
};

WindLayer.prototype.updateParticlesPositionsForInterpolation = function(magoManager, interpolation) 
{
	var gl = this.gl;
	var currentParticlesPositionTexture = this.particlesPositionTexturesArray.shift();
	
	// do frustumCullling smartTiles.
	var camera = magoManager.sceneState.camera;
	var camPos = camera.position;
	//var camAltitude = camera.getCameraElevation();
	var resultIntersectedTilesNamesMap = {};
	var frustumVolume = magoManager.myCameraSCX.bigFrustum;
	var maxDepth = 6;
	resultIntersectedTilesNamesMap = SmartTile.getFrustumIntersectedTilesNames(frustumVolume, maxDepth, camPos, magoManager, resultIntersectedTilesNamesMap);
	
	/*
	var visiblesFixDepthTilesNamesMap = {};
	for (var key in resultIntersectedTilesNamesMap)
	{
		if (Object.prototype.hasOwnProperty.call(resultIntersectedTilesNamesMap, key))
		{
			var splittedStrings = key.split('\\');
			var currDepth = parseInt(splittedStrings[0]);
			var geoExtent = resultIntersectedTilesNamesMap[key];
			SmartTile.getTilesNamesByTargetDepth(maxDepth, currDepth, geoExtent.minGeographicCoord, geoExtent.maxGeographicCoord, visiblesFixDepthTilesNamesMap);
		}
	}
	*/
	
	// now, make visibleTilesRangesVector.
	var visibleTilesRanges = [];
	for (var key in resultIntersectedTilesNamesMap)
	{
		if (Object.prototype.hasOwnProperty.call(resultIntersectedTilesNamesMap, key))
		{
			// calculate normalized rectangle. Origin in left-down.
			var splittedStrings = key.split('\\');
			var currDepth = parseInt(splittedStrings[0]);
			//var insertCount = Math.floor(maxDepth/(currDepth+1));
			//if (insertCount === 0)
			//{ insertCount = 1; }
			
			var geoExtent = resultIntersectedTilesNamesMap[key];
			var minX = (geoExtent.minGeographicCoord.longitude + 180)/360;
			var minY = (geoExtent.minGeographicCoord.latitude + 90)/180;
			var maxX = (geoExtent.maxGeographicCoord.longitude + 180)/360;
			var maxY = (geoExtent.maxGeographicCoord.latitude + 90)/180;
			
			//for (var i=0; i<insertCount; i++)
			//{
			visibleTilesRanges.push(minX);
			visibleTilesRanges.push(minY);
			visibleTilesRanges.push(maxX);
			visibleTilesRanges.push(maxY);
			//}
		}
	}
	
	if (!this.windData)
	{ return; }
	
	FBO.bindFramebuffer(gl, this.windFramebuffer, currentParticlesPositionTexture);
	gl.viewport(0, 0, this.particleStateResolution, this.particleStateResolution);

	var program = this.updateParticlesProgram;
	gl.useProgram(program.program);

	FBO.bindAttribute(gl, this.quadBuffer, program.a_pos, 2);
	

	gl.uniform1i(program.u_wind, 0);
	gl.uniform1i(program.u_particles, 1);
	var randomSeed = Math.random();
	gl.uniform1f(program.u_rand_seed, randomSeed);
	gl.uniform2f(program.u_wind_res, this.windData.width, this.windData.height);
	gl.uniform2f(program.u_wind_min, this.windData.uMin, this.windData.vMin);
	gl.uniform2f(program.u_wind_max, this.windData.uMax, this.windData.vMax);
	gl.uniform1f(program.u_speed_factor, this.speedFactor);
	gl.uniform1f(program.u_interpolation, interpolation);
	gl.uniform1f(program.u_drop_rate, this.dropRate);
	gl.uniform1f(program.u_drop_rate_bump, this.dropRateBump);
	gl.uniform1i(program.u_flipTexCoordY_windMap, this.flipTexCoordsY_windMap);
	
	var minLonRad = this.geoExtent.getMinLongitudeRad();
	var minLatRad = this.geoExtent.getMinLatitudeRad();
	var maxLonRad = this.geoExtent.getMaxLongitudeRad();
	var maxLatRad = this.geoExtent.getMaxLatitudeRad();
	
	gl.uniform3fv(program.u_geoCoordRadiansMax, [maxLonRad, maxLatRad, 16000.0]);
	gl.uniform3fv(program.u_geoCoordRadiansMin, [minLonRad, minLatRad, 0.0]);
	
	var visiblesCount = visibleTilesRanges.length/4;
	if (visiblesCount > 16)
	{ visiblesCount = 16; }
	var visibleTilesRangesFloat32 = new Float32Array(visibleTilesRanges);
	gl.uniform4fv(program.u_visibleTilesRanges, visibleTilesRangesFloat32);
	gl.uniform1i(program.u_visibleTilesRangesCount, visiblesCount);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
	
	this.particlesPositionTexturesArray.push(currentParticlesPositionTexture);
	
	FBO.bindFramebuffer(gl, null);
};

WindLayer.prototype.updateParticlesPositions2dMode = function() 
{
	var gl = this.gl;
	FBO.bindFramebuffer(gl, this.windFramebuffer, this.particlesPositionTexture1);
	gl.viewport(0, 0, this.particleStateResolution, this.particleStateResolution);

	var program = this.updateParticlesProgram;
	gl.useProgram(program.program);

	FBO.bindAttribute(gl, this.quadBuffer, program.a_pos, 2);

	gl.uniform1i(program.u_wind, 0);
	gl.uniform1i(program.u_particles, 1);
	var randomSeed = Math.random();
	gl.uniform1f(program.u_rand_seed, randomSeed);
	gl.uniform2f(program.u_wind_res, this.windData.width, this.windData.height);
	gl.uniform2f(program.u_wind_min, this.windData.uMin, this.windData.vMin);
	gl.uniform2f(program.u_wind_max, this.windData.uMax, this.windData.vMax);
	gl.uniform1f(program.u_speed_factor, this.speedFactor);
	gl.uniform1f(program.u_drop_rate, this.dropRate);
	gl.uniform1f(program.u_drop_rate_bump, this.dropRateBump);
	gl.uniform1i(program.u_flipTexCoordY_windMap, this.flipTexCoordsY_windMap);

	gl.drawArrays(gl.TRIANGLES, 0, 6);

	// swap the particle state textures so the new one becomes the current one
	var temp = this.particlesPositionTexture0;
	this.particlesPositionTexture0 = this.particlesPositionTexture1;
	this.particlesPositionTexture1 = temp;
	
	FBO.bindFramebuffer(gl, null);
};


































'use strict';

/**
 * @class WindVolume
 */
var WindVolume = function(options) 
{
	if (!(this instanceof WindVolume)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	
	this.windLayersArray;
	this.weatherStation;
	this.extrusionHeight;
	
	// Box & plane.
	this.windDisplayBox;
	this.windDisplayPlane;
	this.windDisplayPlanesArray = [];
};

WindVolume.prototype.getWindLayersCount = function()
{
	if (this.windLayersArray === undefined)
	{ return 0; }
	
	return this.windLayersArray.length;
};

WindVolume.prototype.getWindLayer = function(idx)
{
	if (this.windLayersArray === undefined)
	{ return undefined; }
	
	return this.windLayersArray[idx];
};

WindVolume.prototype.newWindLayer = function(options)
{
	if (this.windLayersArray === undefined)
	{ this.windLayersArray = []; }
	
	var windLayer = new WindLayer(options);
	windLayer.weatherStation = this.weatherStation;
	windLayer.windVolume = this;
	this.windLayersArray.push(windLayer);
	return windLayer;
};

WindVolume.prototype.createWindDisplayPlane = function(magoManager)
{
	// 1rst, create a geoCoordsList.
	var someWindLayer = this.windLayersArray[0];
	var geoExtent = someWindLayer.geoExtent;
	if (!geoExtent)
	{ return false; }
	
	var minGeoCoord = geoExtent.minGeographicCoord;
	var maxGeoCoord = geoExtent.maxGeographicCoord;
	
	//minLon -= 0.00195;
	//maxLon += 0.00195;
	
	var minLon = minGeoCoord.longitude;
	var maxLon = maxGeoCoord.longitude;
	var minLat = minGeoCoord.latitude;
	var maxLat = maxGeoCoord.latitude;
	var minAlt = minGeoCoord.altitude;
	var maxAlt = maxGeoCoord.altitude;
	
	
	var geoCoordsList = new GeographicCoordsList();
	geoCoordsList.newGeoCoord(minLon, minLat, minAlt);
	geoCoordsList.newGeoCoord(maxLon, minLat, minAlt);
	geoCoordsList.newGeoCoord(maxLon, maxLat, minAlt);
	geoCoordsList.newGeoCoord(minLon, maxLat, minAlt);
	
	var extrusionHeight = 0.1;
	var bLoop = true;
	
	var displayPlanesCount = 1;
	for (var i=0; i<displayPlanesCount; i++)
	{
		var windDisplayPlane = geoCoordsList.getExtrudedMeshRenderableObject(extrusionHeight, bLoop, undefined, magoManager, undefined);
		windDisplayPlane.setOneColor(0.8, 0.7, 0.2, 0.0);
		windDisplayPlane.setWireframeColor(0.2, 0.3, 0.4, 1.0);
		windDisplayPlane.attributes.isMovable = true;
		windDisplayPlane.attributes.movementInAxisZ = true;

		windDisplayPlane.attributes.minAltitude = this.getMinAltitude();
		windDisplayPlane.attributes.maxAltitude = this.getMaxAltitude();

		// Test.*******************************************************************
		//if (windDisplayPlane.attributes.maxAltitude < 1000.0)
		//{ windDisplayPlane.attributes.maxAltitude = 2000.0; }
		//-------------------------------------------------------------------------
		
		windDisplayPlane.attributes.name = "windDisplayPlane";
		windDisplayPlane.attributes.selectedColor4 = new Color(1.0, 0.0, 0.0, 0.0);
		if (windDisplayPlane.options === undefined)
		{ windDisplayPlane.options = {}; }
		
		windDisplayPlane.options.renderWireframe = true;
		windDisplayPlane.options.renderShaded = true; // bcos must be selectable.
		windDisplayPlane.options.depthMask = false;
		var depth = 5;
		magoManager.modeler.addObject(windDisplayPlane, depth);
		
		this.windDisplayPlanesArray.push(windDisplayPlane);
	}
	
	return true;

};

WindVolume.prototype.createWindDisplayBox = function(magoManager)
{
	// 1rst, create a geoCoordsList.
	var windLayerLowest = this.windLayersArray[0];
	var windLayerHighest = this.windLayersArray[this.windLayersArray.length-1];
	var geoExtent = windLayerLowest.geoExtent;
	
	if (!geoExtent)
	{ return false; }
	
	var minGeoCoord = geoExtent.minGeographicCoord;
	var maxGeoCoord = geoExtent.maxGeographicCoord;
	
	var minLon = minGeoCoord.longitude;
	var maxLon = maxGeoCoord.longitude;
	var minLat = minGeoCoord.latitude;
	var maxLat = maxGeoCoord.latitude;
	var minAlt = minGeoCoord.altitude;
	var maxAlt = maxGeoCoord.altitude;
	

	var geoCoordsList = new GeographicCoordsList();
	geoCoordsList.newGeoCoord(minLon, minLat, minAlt);
	geoCoordsList.newGeoCoord(maxLon, minLat, minAlt);
	geoCoordsList.newGeoCoord(maxLon, maxLat, minAlt);
	geoCoordsList.newGeoCoord(minLon, maxLat, minAlt);

	var extrusionHeight = windLayerHighest.windData.height_above_ground - windLayerLowest.windData.height_above_ground;

	// Test.*******************************************
	//if (extrusionHeight < 1.0)
	//{ extrusionHeight = 2000.0; }
	//-------------------------------------------------
	
	var bLoop = true;
	this.windDisplayBox = geoCoordsList.getExtrudedMeshRenderableObject(extrusionHeight, bLoop, undefined, magoManager, undefined);
	this.windDisplayBox.setOneColor(0.2, 0.7, 0.8, 0.2);
	this.windDisplayBox.attributes.isMovable = false;
	this.windDisplayBox.attributes.isSelectable = false;
	this.windDisplayBox.attributes.name = "windDisplayBox";
	this.windDisplayBox.attributes.selectedColor4 = new Color(1.0, 0.0, 0.0, 0.0); // selectedColor fully transparent.
	if (this.windDisplayBox.options === undefined)
	{ this.windDisplayBox.options = {}; }
	
	this.windDisplayBox.options.renderWireframe = true;
	this.windDisplayBox.options.renderShaded = true;
	this.windDisplayBox.options.depthMask = false;
	var depth = 5;
	magoManager.modeler.addObject(this.windDisplayBox, depth);
	
	return true;
};

WindVolume.prototype.createdElemsForDisplayBox = function(magoManager)
{
	if (this.windDisplayBox === undefined)
	{ 
		if (this.createWindDisplayBox(magoManager))
		{
			if (this.windDisplayPlanesArray.length === 0)
			{ this.createWindDisplayPlane(magoManager); }
		}			
	}
};

WindVolume.prototype.loadWindData3d = function(magoManager, windMapFileNamesArray, windMapFilesFolderPath)
{
	// Provisionally hardCoding.***
	var gl = magoManager.getGl();
	var geometryDataPath = magoManager.readerWriter.geometryDataPath;
	this.altitudeAux = 0.0;
	
	var filesCount = windMapFileNamesArray.length;
	for (var i=0; i<filesCount; i++)
	{
		this.altitudeAux += 10.0;

		/*
		var options = {
			name              : "JeJu Airport",
			speedFactor       : 2.0,
			dropRate          : 0.003,
			dropRateBump      : 0.001,
			numParticles      : 65536/8,
			layerAltitude     : this.altitudeAux,
			windMapFileName   : windMapFileNamesArray[i],
			windMapFolderPath : windMapFilesFolderPath
		};
		*/
		
		var options = {
			name              : "JeJu Island",
			speedFactor       : 0.6,
			dropRate          : 0.003,
			dropRateBump      : 0.001,
			numParticles      : 65536/2,
			layerAltitude     : this.altitudeAux,
			windMapFileName   : windMapFileNamesArray[i],
			windMapFolderPath : windMapFilesFolderPath
		};

		
		var firstWindLayer;
		if (this.getWindLayersCount() > 0)
		{
			// maintain the 1rst windLayer.
			firstWindLayer = this.getWindLayer(0);
		}

		var windLayer = this.newWindLayer(options);
		windLayer.init(gl, magoManager);
		
		if (firstWindLayer !== undefined)
		{
			windLayer.particlesPositionTexturesArray = firstWindLayer.particlesPositionTexturesArray;
		}
	}
};

WindVolume.prototype.prepareWindVolume = function(magoManager)
{
	if (this.allWindLayersAreReady === undefined)
	{ this.allWindLayersAreReady = false; }
	
	if (!this.allWindLayersAreReady)
	{
		var ready = true;
		var windLayersCount = this.windLayersArray.length;
		for (var i=0; i< windLayersCount; i++)
		{
			var windLayer = this.windLayersArray[i];
			if (!windLayer.isReadyToRender())
			{
				windLayer.prepareWindLayer();
				ready = false;
			}
		}
		this.allWindLayersAreReady = ready;
	}
	
	return this.allWindLayersAreReady;
};

WindVolume.prototype.getMaxAltitude = function()
{
	var maxAltitude;
	var windLayersCount = this.windLayersArray.length;
	for (var i=0; i< windLayersCount; i++)
	{
		var windLayer = this.windLayersArray[i];
		if (i === 0)
		{
			maxAltitude = windLayer.windData.height_above_ground;
		}
		else
		{
			if (windLayer.windData.height_above_ground > maxAltitude)
			{ maxAltitude = windLayer.windData.height_above_ground; }
		}
	}
	
	return maxAltitude;
};

WindVolume.prototype.getMinAltitude = function()
{
	var minAltitude;
	var windLayersCount = this.windLayersArray.length;
	for (var i=0; i< windLayersCount; i++)
	{
		var windLayer = this.windLayersArray[i];
		if (i === 0)
		{
			minAltitude = windLayer.windData.height_above_ground;
		}
		else 
		{
			if (windLayer.windData.height_above_ground < minAltitude)
			{ minAltitude = windLayer.windData.height_above_ground; }
		}
	}
	
	return minAltitude;
};

WindVolume.prototype.getNearestWindLayerByAltitude = function(altitude)
{
	var resultWindLayer;
	var windLayersCount = this.windLayersArray.length;
	for (var i=0; i< windLayersCount-1; i++)
	{
		var windLayer = this.windLayersArray[i];
		var windLayerAbove = this.windLayersArray[i+1];
		
		if (altitude > windLayer.windData.height_above_ground && altitude < windLayerAbove.windData.height_above_ground)
		{
			resultWindLayer = windLayer;
			break;
		}
		
		if (i === 0 && altitude < windLayer.windData.height_above_ground)
		{
			resultWindLayer = windLayer;
			break;
		}
		else if (i === windLayersCount-2 && altitude > windLayerAbove.windData.height_above_ground)
		{
			resultWindLayer = windLayerAbove;
			break;
		}
	}
	
	if (!resultWindLayer)
	{ resultWindLayer = this.windLayersArray[0]; }
	
	return resultWindLayer;
};



WindVolume.prototype.renderMode3DThickLines = function(magoManager)
{
	if (this.thickLinesReady === undefined || this.thickLinesReady === false)
	{
		// Take the geoCoord of a golfHoleFlag:
		var altitude = 50.0;
		//altitude = 86;
		
		var options = {};
		options.speedFactor = 2.0*0.0000001;
		options.numPoints = 10;
		
		// Obtain the velocity in this geoCoord.
		var windLayer = this.getNearestWindLayerByAltitude(altitude);
		
		//var geoCoord = new GeographicCoord(126.40310387701689, 33.34144078912163, altitude);
		//var geoCoordsArray = windLayer.getTrajectory(geoCoord, undefined, magoManager, options);
		//var renderableObject = GeographicCoordsList.getRenderableObjectOfGeoCoordsArray(geoCoordsArray, magoManager);
		//magoManager.modeler.addObject(renderableObject, 15);
		
		// Test random points.
		var minLonRad = windLayer.geoExtent.getMinLongitudeRad();
		var minLatRad = windLayer.geoExtent.getMinLatitudeRad();
		var maxLonRad = windLayer.geoExtent.getMaxLongitudeRad();
		var maxLatRad = windLayer.geoExtent.getMaxLatitudeRad();
		var minAlt = windLayer.geoExtent.getMinAltitude();
		var maxAlt = windLayer.geoExtent.getMaxAltitude();
		var lonRadRange = maxLonRad - minLonRad;
		var latRadRange = maxLatRad - minLatRad;
		var radToDeg = 180/Math.PI;
		var optionsThickLine = {};
		optionsThickLine.startColor = new Color(0.6, 0.99, 0.99, 0.0);
		optionsThickLine.endColor = new Color(0.7, 0.9, 0.99, 1.0);
		for (var i=0; i< 40; i++)
		{
			var lon = Math.random() * (maxLonRad - minLonRad) + minLonRad;
			var lat = Math.random() * (maxLatRad - minLatRad) + minLatRad;
			
			var geoCoord = new GeographicCoord(lon*radToDeg, lat*radToDeg, altitude);
			var geoCoordsArray = windLayer.getTrajectory(geoCoord, undefined, magoManager, options);
			var renderableObject = GeographicCoordsList.getRenderableObjectOfGeoCoordsArray(geoCoordsArray, magoManager, optionsThickLine);
			var targetDepth = 5;
			magoManager.modeler.addObject(renderableObject, targetDepth);
		}
			
		this.thickLinesReady = true;
	}
};

WindVolume.prototype.renderWindLayerDisplayPlanes = function(magoManager)
{
	if (this.windLayersArray === undefined)
	{ return; }
	
	if (this.windLayersArray.length === 0 )
	{ return; }

	// In this point, must check & prepare windLayers.***
	if (!this.prepareWindVolume())
	{ return; }

	if (this.windDisplayBox === undefined)
	{ 
		this.createdElemsForDisplayBox(magoManager); 
		return;
	}
	
	

	// Calculate the total wind data.
	if (this.windData === undefined)
	{
		this.windData = {};
	
		var windLayersCount = this.windLayersArray.length;
	
		for (var i=0; i< windLayersCount; i++)
		{
			var windLayer = this.windLayersArray[i];
			if (windLayer.windData)
			{
				if (i===0)
				{
					this.windData.uMin = windLayer.windData.uMin;
					this.windData.vMin = windLayer.windData.vMin;
					this.windData.uMax = windLayer.windData.uMax;
					this.windData.vMax = windLayer.windData.vMax;
					this.windData.height = windLayer.windData.height;
					this.windData.width = windLayer.windData.width;
				}
				else
				{
					if (windLayer.windData.uMin < this.windData.uMin)
					{ this.windData.uMin = windLayer.windData.uMin; }
				
					if (windLayer.windData.vMin < this.windData.vMin)
					{ this.windData.vMin = windLayer.windData.vMin; }
				
					if (windLayer.windData.uMax > this.windData.uMax)
					{ this.windData.uMax = windLayer.windData.uMax; }
				
					if (windLayer.windData.vMax > this.windData.vMax)
					{ this.windData.vMax = windLayer.windData.vMax; }
				
				}
			}
		}
	}
	
	// Test.*********************
	//this.renderMode3DThickLines(magoManager);
	// End test.------------------
	
	var gl = magoManager.getGl();
	var windDisplayPlanesCount = this.windDisplayPlanesArray.length;
	for (var a=0; a<windDisplayPlanesCount; a++)
	{
		var windDisplayPlane = this.windDisplayPlanesArray[a];
		var windLayer;
		var windLayersCount = this.windLayersArray.length;
		
		for (var i=windLayersCount-1; i>= 0; i--)
		{
			// check windLayer's altitude.***
			var layerAltitude = 10;
			if (this.windDisplayBox)
			{
				var geoLocData = windDisplayPlane.geoLocDataManager.getCurrentGeoLocationData();
				layerAltitude = geoLocData.geographicCoord.altitude;
			}

			windLayer = this.getNearestWindLayerByAltitude(layerAltitude);
			if (windLayer)
			{
				windLayer.windDisplayPlane = windDisplayPlane;
				
				if (windLayer.isReadyToRender())
				{
					windLayer.renderMode3D(magoManager);
					gl = windLayer.gl;
					break;
				}
				else 
				{
					windLayer.prepareWindLayer();
				}
			}
		}
		if (windLayer !== undefined && windLayer.windMapTexture !== undefined)
		{
			if (windLayer.windMapTexture.fileLoadState === CODE.fileLoadState.BINDING_FINISHED)
			{ 
				if (magoManager.isFarestFrustum())
				{
					FBO.bindTexture(gl, windLayer.windMapTexture.texId, 0);
					windLayer.updateParticlesPositions(magoManager); 
				}
			}
		}
	}
};




























    _mago3d['DustLayer'] = DustLayer;
	_mago3d['Image3D'] = Image3D;
	_mago3d['PrecipitationLayer'] = PrecipitationLayer;
	_mago3d['TemperatureLayer'] = TemperatureLayer;
	_mago3d['WeatherStation'] = WeatherStation;
	_mago3d['WeatherVolume'] = WeatherVolume;
	_mago3d['WindLayer'] = WindLayer;
	_mago3d['WindVolume'] = WindVolume;
}(Mago3D));
