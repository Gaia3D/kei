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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./Cartesian2-12797039"],function(e,h,n,i){"use strict";function r(){this.high=i.Cartesian3.clone(i.Cartesian3.ZERO),this.low=i.Cartesian3.clone(i.Cartesian3.ZERO)}r.encode=function(e,n){var i;return h.defined(n)||(n={high:0,low:0}),0<=e?(i=65536*Math.floor(e/65536),n.high=i,n.low=e-i):(i=65536*Math.floor(-e/65536),n.high=-i,n.low=e+i),n};var t={high:0,low:0};r.fromCartesian=function(e,n){h.defined(n)||(n=new r);var i=n.high,o=n.low;return r.encode(e.x,t),i.x=t.high,o.x=t.low,r.encode(e.y,t),i.y=t.high,o.y=t.low,r.encode(e.z,t),i.z=t.high,o.z=t.low,n};var a=new r;r.writeElements=function(e,n,i){r.fromCartesian(e,a);var o=a.high,h=a.low;n[i]=o.x,n[i+1]=o.y,n[i+2]=o.z,n[i+3]=h.x,n[i+4]=h.y,n[i+5]=h.z},e.EncodedCartesian3=r});
