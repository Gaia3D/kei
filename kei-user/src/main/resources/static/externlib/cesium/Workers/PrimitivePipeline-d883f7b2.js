/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Cartesian2-12797039","./Transforms-1175e52c","./ComponentDatatype-a270fa7e","./GeometryAttribute-9396e1af","./GeometryAttributes-c3465b51","./GeometryPipeline-03f56e11","./IndexDatatype-d9fd3d17","./WebMercatorProjection-ecf80563"],function(e,b,t,G,u,P,k,C,w,v,A,c){"use strict";function m(e,t,r){e=G.defaultValue(e,0),t=G.defaultValue(t,0),r=G.defaultValue(r,0),this.value=new Float32Array([e,t,r])}function x(e,t){var r=e.attributes,n=r.position,i=n.values.length/n.componentsPerAttribute;r.batchId=new C.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});for(var o=r.batchId.values,a=0;a<i;++a)o[a]=t}function h(e){var t,r,n=e.instances,i=e.projection,o=e.elementIndexUintSupported,a=e.scene3DOnly,s=e.vertexCacheOptimize,d=e.compressVertices,p=e.modelMatrix,f=n.length;for(t=0;t<f;++t)if(b.defined(n[t].geometry)){n[t].geometry.primitiveType;break}if(function(e,t,r){var n,i=!r,o=e.length;if(!i&&1<o){var a=e[0].modelMatrix;for(n=1;n<o;++n)if(!P.Matrix4.equals(a,e[n].modelMatrix)){i=!0;break}}if(i)for(n=0;n<o;++n)b.defined(e[n].geometry)&&v.GeometryPipeline.transformToWorldCoordinates(e[n]);else P.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(n,p,a),!a)for(t=0;t<f;++t)b.defined(n[t].geometry)&&v.GeometryPipeline.splitLongitude(n[t]);if(function(e){for(var t=e.length,r=0;r<t;++r){var n=e[r];b.defined(n.geometry)?x(n.geometry,r):b.defined(n.westHemisphereGeometry)&&b.defined(n.eastHemisphereGeometry)&&(x(n.westHemisphereGeometry,r),x(n.eastHemisphereGeometry,r))}}(n),s)for(t=0;t<f;++t){var u=n[t];b.defined(u.geometry)?(v.GeometryPipeline.reorderForPostVertexCache(u.geometry),v.GeometryPipeline.reorderForPreVertexCache(u.geometry)):b.defined(u.westHemisphereGeometry)&&b.defined(u.eastHemisphereGeometry)&&(v.GeometryPipeline.reorderForPostVertexCache(u.westHemisphereGeometry),v.GeometryPipeline.reorderForPreVertexCache(u.westHemisphereGeometry),v.GeometryPipeline.reorderForPostVertexCache(u.eastHemisphereGeometry),v.GeometryPipeline.reorderForPreVertexCache(u.eastHemisphereGeometry))}var c=v.GeometryPipeline.combineInstances(n);for(f=c.length,t=0;t<f;++t){var m,l=(r=c[t]).attributes;if(a)for(m in l)l.hasOwnProperty(m)&&l[m].componentDatatype===k.ComponentDatatype.DOUBLE&&v.GeometryPipeline.encodeAttribute(r,m,m+"3DHigh",m+"3DLow");else for(m in l)if(l.hasOwnProperty(m)&&l[m].componentDatatype===k.ComponentDatatype.DOUBLE){var h=m+"3D",g=m+"2D";v.GeometryPipeline.projectTo2D(r,m,h,g,i),b.defined(r.boundingSphere)&&"position"===m&&(r.boundingSphereCV=P.BoundingSphere.fromVertices(r.attributes.position2D.values)),v.GeometryPipeline.encodeAttribute(r,h,h+"High",h+"Low"),v.GeometryPipeline.encodeAttribute(r,g,g+"High",g+"Low")}d&&v.GeometryPipeline.compressVertices(r)}if(!o){var y=[];for(f=c.length,t=0;t<f;++t)r=c[t],y=y.concat(v.GeometryPipeline.fitToUnsignedShortIndices(r));c=y}return c}function g(e,t,r,n){var i,o,a,s=n.length-1;if(0<=s){var d=n[s];i=d.offset+d.count,o=r[a=d.index].indices.length}else o=r[a=i=0].indices.length;for(var p=e.length,f=0;f<p;++f){var u=e[f][t];if(b.defined(u)){var c=u.indices.length;o<i+c&&(i=0,o=r[++a].indices.length),n.push({index:a,offset:i,count:c}),i+=c}}}Object.defineProperties(m.prototype,{componentDatatype:{get:function(){return k.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),m.fromCartesian3=function(e){return new m(e.x,e.y,e.z)},m.toValue=function(e,t){return b.defined(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};var l={};function i(e,t){var r=e.attributes;for(var n in r)if(r.hasOwnProperty(n)){var i=r[n];b.defined(i)&&b.defined(i.values)&&t.push(i.values.buffer)}b.defined(e.indices)&&t.push(e.indices.buffer)}function o(e){var t=e.length,r=1+(P.BoundingSphere.packedLength+1)*t,n=new Float32Array(r),i=0;n[i++]=t;for(var o=0;o<t;++o){var a=e[o];b.defined(a)?(n[i++]=1,P.BoundingSphere.pack(e[o],n,i)):n[i++]=0,i+=P.BoundingSphere.packedLength}return n}function r(e){for(var t=new Array(e[0]),r=0,n=1;n<e.length;)1===e[n++]&&(t[r]=P.BoundingSphere.unpack(e,n)),++r,n+=P.BoundingSphere.packedLength;return t}l.combineGeometry=function(e){var t,r,n,i,o=e.instances,a=o.length,s=!1;0<a&&(0<(t=h(e)).length&&(r=v.GeometryPipeline.createAttributeLocations(t[0]),e.createPickOffsets&&(n=function(e,t){var r=[];return g(e,"geometry",t,r),g(e,"westHemisphereGeometry",t,r),g(e,"eastHemisphereGeometry",t,r),r}(o,t))),b.defined(o[0].attributes)&&b.defined(o[0].attributes.offset)&&(i=new Array(a),s=!0));for(var d=new Array(a),p=new Array(a),f=0;f<a;++f){var u=o[f],c=u.geometry;b.defined(c)&&(d[f]=c.boundingSphere,p[f]=c.boundingSphereCV,s&&(i[f]=u.geometry.offsetAttribute));var m=u.eastHemisphereGeometry,l=u.westHemisphereGeometry;b.defined(m)&&b.defined(l)&&(b.defined(m.boundingSphere)&&b.defined(l.boundingSphere)&&(d[f]=P.BoundingSphere.union(m.boundingSphere,l.boundingSphere)),b.defined(m.boundingSphereCV)&&b.defined(l.boundingSphereCV)&&(p[f]=P.BoundingSphere.union(m.boundingSphereCV,l.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:r,pickOffsets:n,offsetInstanceExtend:i,boundingSpheres:d,boundingSpheresCV:p}},l.packCreateGeometryResults=function(e,t){var r=new Float64Array(function(e){for(var t=1,r=e.length,n=0;n<r;n++){var i=e[n];if(++t,b.defined(i)){var o=i.attributes;for(var a in t+=7+2*P.BoundingSphere.packedLength+(b.defined(i.indices)?i.indices.length:0),o){if(o.hasOwnProperty(a)&&b.defined(o[a]))t+=5+o[a].values.length}}}return t}(e)),n=[],i={},o=e.length,a=0;r[a++]=o;for(var s=0;s<o;s++){var d=e[s],p=b.defined(d);if(r[a++]=p?1:0,p){r[a++]=d.primitiveType,r[a++]=d.geometryType,r[a++]=G.defaultValue(d.offsetAttribute,-1);var f=b.defined(d.boundingSphere)?1:0;(r[a++]=f)&&P.BoundingSphere.pack(d.boundingSphere,r,a),a+=P.BoundingSphere.packedLength;var u=b.defined(d.boundingSphereCV)?1:0;(r[a++]=u)&&P.BoundingSphere.pack(d.boundingSphereCV,r,a),a+=P.BoundingSphere.packedLength;var c=d.attributes,m=[];for(var l in c)c.hasOwnProperty(l)&&b.defined(c[l])&&(m.push(l),b.defined(i[l])||(i[l]=n.length,n.push(l)));r[a++]=m.length;for(var h=0;h<m.length;h++){var g=m[h],y=c[g];r[a++]=i[g],r[a++]=y.componentDatatype,r[a++]=y.componentsPerAttribute,r[a++]=y.normalize?1:0,r[a++]=y.values.length,r.set(y.values,a),a+=y.values.length}var v=b.defined(d.indices)?d.indices.length:0;0<(r[a++]=v)&&(r.set(d.indices,a),a+=v)}}return t.push(r.buffer),{stringTable:n,packedData:r}},l.unpackCreateGeometryResults=function(e){for(var t,r=e.stringTable,n=e.packedData,i=new Array(n[0]),o=0,a=1;a<n.length;){if(1===n[a++]){var s,d,p,f,u,c=n[a++],m=n[a++],l=n[a++];-1===l&&(l=void 0),1===n[a++]&&(s=P.BoundingSphere.unpack(n,a)),a+=P.BoundingSphere.packedLength,1===n[a++]&&(d=P.BoundingSphere.unpack(n,a)),a+=P.BoundingSphere.packedLength;var h,g=new w.GeometryAttributes,y=n[a++];for(t=0;t<y;t++){var v=r[n[a++]],b=n[a++];u=n[a++];var G=0!==n[a++];p=n[a++],f=k.ComponentDatatype.createTypedArray(b,p);for(var x=0;x<p;x++)f[x]=n[a++];g[v]=new C.GeometryAttribute({componentDatatype:b,componentsPerAttribute:u,normalize:G,values:f})}if(0<(p=n[a++])){var S=f.length/u;for(h=A.IndexDatatype.createTypedArray(S,p),t=0;t<p;t++)h[t]=n[a++]}i[o++]=new C.Geometry({primitiveType:c,geometryType:m,boundingSphere:s,boundingSphereCV:d,indices:h,attributes:g,offsetAttribute:l})}else i[o++]=void 0}return i},l.packCombineGeometryParameters=function(e,t){for(var r=e.createGeometryResults,n=r.length,i=0;i<n;i++)t.push(r[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:function(e,t){var r=e.length,n=new Float64Array(1+19*r),i=0;n[i++]=r;for(var o=0;o<r;o++){var a=e[o];if(P.Matrix4.pack(a.modelMatrix,n,i),i+=P.Matrix4.packedLength,b.defined(a.attributes)&&b.defined(a.attributes.offset)){var s=a.attributes.offset.value;n[i]=s[0],n[i+1]=s[1],n[i+2]=s[2]}i+=3}return t.push(n.buffer),n}(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof P.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},l.unpackCombineGeometryParameters=function(e){for(var t=function(e){for(var t=e,r=new Array(t[0]),n=0,i=1;i<t.length;){var o,a=P.Matrix4.unpack(t,i);i+=P.Matrix4.packedLength,b.defined(t[i])&&(o={offset:new m(t[i],t[i+1],t[i+2])}),i+=3,r[n++]={modelMatrix:a,attributes:o}}return r}(e.packedInstances),r=e.createGeometryResults,n=r.length,i=0,o=0;o<n;o++)for(var a=l.unpackCreateGeometryResults(r[o]),s=a.length,d=0;d<s;d++){var p=a[d];t[i].geometry=p,++i}var f=u.Ellipsoid.clone(e.ellipsoid);return{instances:t,ellipsoid:f,projection:e.isGeographic?new P.GeographicProjection(f):new c.WebMercatorProjection(f),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:P.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},l.packCombineGeometryResults=function(e,t){b.defined(e.geometries)&&function(e,t){for(var r=e.length,n=0;n<r;++n)i(e[n],t)}(e.geometries,t);var r=o(e.boundingSpheres),n=o(e.boundingSpheresCV);return t.push(r.buffer,n.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r,boundingSpheresCV:n}},l.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r(e.boundingSpheres),boundingSpheresCV:r(e.boundingSpheresCV)}},e.PrimitivePipeline=l});
