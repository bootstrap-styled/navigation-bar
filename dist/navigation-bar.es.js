import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import { Button, Close, Header, makeTheme } from 'bootstrap-styled';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var INFINITY = 1 / 0;
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var symbolTag = '[object Symbol]';
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);
  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
function cacheHas(cache, key) {
  return cache.has(key);
}
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Symbol$1 = root.Symbol;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeMax = Math.max;
var Map = getNative(root, 'Map');
var nativeCreate = getNative(Object, 'create');
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arrayLikeKeys(value, inherited) {
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};
  while (++index < length) {
    var key = props[index],
        value = object[key];
    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  return value === proto;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
var isArray = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var omit = baseRest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props, 1), toKey);
  return basePick(object, baseDifference(getAllKeysIn(object), props));
});
function stubArray() {
  return [];
}
var lodash_omit$1 = omit;

function mapToCssModules(className, cssModule) {
  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}

var theme$1 = makeTheme$1();
function makeTheme$1() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var newTheme = { navigationBar: {} };
  var u = userTheme;
  newTheme.navigationBar['$zindex-overlay'] = u.navigationBar && u.navigationBar['$zindex-overlay'] ? u.navigationBar['$zindex-overlay'] : '2050';
  newTheme.navigationBar['$menu-offset-width'] = u.navigationBar && u.navigationBar['$menu-offset-width'] ? u.navigationBar['$menu-offset-width'] : '220px';
  newTheme.navigationBar['$menu-offset-nav-bg-color'] = u.navigationBar && u.navigationBar['$menu-offset-nav-bg-color'] ? u.navigationBar['$menu-offset-nav-bg-color'] : 'white';
  newTheme.navigationBar['$zindex-overlay'] = u.navigationBar && u.navigationBar['$zindex-overlay'] ? u.navigationBar['$zindex-overlay'] : '2050';
  newTheme.navigationBar['$menu-offset-width'] = u.navigationBar && u.navigationBar['$menu-offset-width'] ? u.navigationBar['$menu-offset-width'] : '220px';
  newTheme.navigationBar['$menu-offset-nav-box-shadow'] = u.navigationBar && u.navigationBar['$menu-offset-nav-box-shadow'] ? u.navigationBar['$menu-offset-nav-box-shadow'] : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  newTheme.navigationBar['$menu-offset-nav-transition'] = u.navigationBar && u.navigationBar['$menu-offset-nav-transition'] ? u.navigationBar['$menu-offset-nav-transition'] : '.3s ease';
  newTheme.navigationBar['$menu-offset-nav-box-shadow'] = u.navigationBar && u.navigationBar['$menu-offset-nav-box-shadow'] ? u.navigationBar['$menu-offset-nav-box-shadow'] : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  newTheme.navigationBar['$menu-offset-nav-transition'] = u.navigationBar && u.navigationBar['$menu-offset-nav-transition'] ? u.navigationBar['$menu-offset-nav-transition'] : '.3s ease';
  newTheme.navigationBar['$zindex-overlay'] = u.navigationBar && u.navigationBar['$zindex-overlay'] ? u.navigationBar['$zindex-overlay'] : '2050';
  newTheme.navigationBar['$overlay-bg'] = u.navigationBar && u.navigationBar['$overlay-bg'] ? u.navigationBar['$overlay-bg'] : 'rgba(0, 0, 0, 0.3)';
  newTheme.navigationBar['$menu-offset-width'] = u.navigationBar && u.navigationBar['$menu-offset-width'] ? u.navigationBar['$menu-offset-width'] : '220px';
  newTheme.navigationBar['$menu-offset-nav-transition'] = u.navigationBar && u.navigationBar['$menu-offset-nav-transition'] ? u.navigationBar['$menu-offset-nav-transition'] : '.3s ease';
  return newTheme;
}

function unwrapExports$1 (x) {
	return x && x.__esModule ? x['default'] : x;
}
function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}
'use strict';
var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
'use strict';
var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}
	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};
var simpleSwizzle = createCommonjsModule$1(function (module) {
'use strict';
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
	var results = [];
	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];
		if (isArrayish(arg)) {
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}
	return results;
};
swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});
var colorString = createCommonjsModule$1(function (module) {
var reverseNames = {};
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}
var cs = module.exports = {
	to: {}
};
cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}
	if (!val) {
		return null;
	}
	return {model: model, value: val};
};
cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}
	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;
	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;
	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];
		for (i = 0; i < 3; i++) {
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}
		rgb = colorName[match[1]];
		if (!rgb) {
			return null;
		}
		rgb[3] = 1;
		return rgb;
	} else {
		return null;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);
	return rgb;
};
cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}
	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, s, l, a];
	}
	return null;
};
cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}
	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}
	return null;
};
cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};
cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);
	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);
	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}
	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});
var conversions = createCommonjsModule$1(function (module) {
var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}
var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}
		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}
		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}
		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}
convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	l = (min + max) / 2;
	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}
	return [h, s * 100, l * 100];
};
convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;
	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	v = ((max / 255) * 1000) / 10;
	return [h, s, v];
};
convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [h, w * 100, b * 100];
};
convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;
	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;
	return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}
convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}
	var currentClosestDistance = Infinity;
	var currentClosestKeyword;
	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];
			var distance = comparativeDistance(rgb, value);
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}
	return currentClosestKeyword;
};
convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};
convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	return [x * 100, y * 100, z * 100];
};
convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;
	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}
	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}
	t1 = 2 * l - t2;
	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}
		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}
		rgb[i] = val * 255;
	}
	return rgb;
};
convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;
	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
	return [h, sv * 100, v * 100];
};
convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;
	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;
	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};
convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;
	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;
	return [h, sl * 100, l * 100];
};
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}
	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}
	n = wh + f * (v - wh);
	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}
	return [r * 255, g * 255, b * 255];
};
convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;
	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;
	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;
	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;
	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;
	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;
	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;
	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	x *= 95.047;
	y *= 100;
	z *= 108.883;
	return [x, y, z];
};
convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;
	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}
	c = Math.sqrt(a * a + b * b);
	return [l, c, h];
};
convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;
	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);
	return [l, a, b];
};
convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
	value = Math.round(value / 50);
	if (value === 0) {
		return 30;
	}
	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
	if (value === 2) {
		ansi += 60;
	}
	return ansi;
};
convert.hsv.ansi16 = function (args) {
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}
		if (r > 248) {
			return 231;
		}
		return Math.round(((r - 8) / 247) * 24) + 232;
	}
	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);
	return ansi;
};
convert.ansi16.rgb = function (args) {
	var color = args % 10;
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}
		color = color / 10.5 * 255;
		return [color, color, color];
	}
	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;
	return [r, g, b];
};
convert.ansi256.rgb = function (args) {
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}
	args -= 16;
	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;
	return [r, g, b];
};
convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}
	var colorString = match[0];
	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}
	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;
	return [r, g, b];
};
convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;
	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}
	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}
	hue /= 6;
	hue %= 1;
	return [hue * 360, chroma * 100, grayscale * 100];
};
convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;
	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}
	return [hsl[0], c * 100, f * 100];
};
convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var c = s * v;
	var f = 0;
	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}
	return [hsv[0], c * 100, f * 100];
};
convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}
	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	mg = (1.0 - c) * g;
	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};
convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	var f = 0;
	if (v > 0.0) {
		f = c / v;
	}
	return [hcg[0], f * 100, v * 100];
};
convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;
	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}
	return [hcg[0], s * 100, l * 100];
};
convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;
	if (c < 1) {
		g = (v - c) / (1 - c);
	}
	return [hwb[0], c * 100, g * 100];
};
convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};
convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};
convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};
convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};
convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};
convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};
convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var models$1 = Object.keys(conversions);
function buildGraph() {
	var graph = {};
	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}
	return graph;
}
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel];
	graph[fromModel].distance = 0;
	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);
		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}
	return graph;
}
function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}
function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];
	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};
	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];
		if (node.parent === null) {
			continue;
		}
		conversion[toModel] = wrapConversion(toModel, graph);
	}
	return conversion;
};
var convert = {};
var models = Object.keys(conversions);
function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		return fn(args);
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		var result = fn(args);
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}
		return result;
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
models.forEach(function (fromModel) {
	convert[fromModel] = {};
	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	var routes = route(fromModel);
	var routeModels = Object.keys(routes);
	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];
		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});
var colorConvert = convert;
'use strict';
var _slice = [].slice;
var skippedModels = [
	'keyword',
	'gray',
	'hex'
];
var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});
var limiters = {};
function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}
	if (model && model in skippedModels) {
		model = null;
	}
	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}
	var i;
	var channels;
	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}
		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;
		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}
		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}
		this.model = hashedModelKeys[hashedKeys];
		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}
		this.color = zeroArray(color);
	}
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}
	this.valpha = Math.max(0, Math.min(1, this.valpha));
	if (Object.freeze) {
		Object.freeze(this);
	}
}
Color.prototype = {
	toString: function () {
		return this.string();
	},
	toJSON: function () {
		return this[this.model]();
	},
	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},
	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},
	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},
	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;
		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}
		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}
		return result;
	},
	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;
		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}
		return rgb;
	},
	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;
		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}
		return rgb;
	},
	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},
	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}
		return this.valpha;
	},
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),
	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }),
	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),
	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),
	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),
	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),
	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),
	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),
	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),
	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorConvert[this.model].keyword(this.color);
	},
	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorString.to.hex(this.rgb().round().color);
	},
	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},
	luminosity: function () {
		var rgb = this.rgb().color;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},
	contrast: function (color2) {
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},
	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}
		return (contrastRatio >= 4.5) ? 'AA' : '';
	},
	dark: function () {
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},
	light: function () {
		return !this.dark();
	},
	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},
	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},
	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},
	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},
	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},
	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},
	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},
	grayscale: function () {
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},
	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},
	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},
	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},
	mix: function (mixinColor, weight) {
		var color1 = this.rgb();
		var color2 = mixinColor.rgb();
		var p = weight === undefined ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();
		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;
		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}
	var channels = colorConvert[model].channels;
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}
		if (arguments.length) {
			return new Color(arguments, model);
		}
		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});
function roundTo(num, places) {
	return Number(num.toFixed(places));
}
function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}
function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];
	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});
	model = model[0];
	return function (val) {
		var result;
		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}
			result = this[model]();
			result.color[channel] = val;
			return result;
		}
		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}
		return result;
	};
}
function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}
function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}
function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}
	return arr;
}
var defaultProps$5 = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$5['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
var unitUtils = createCommonjsModule$1(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var UnitUtils = function UnitUtils() {
  var _this = this;
  _classCallCheck(this, UnitUtils);
  this.UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%'
  };
  this.math = {
    addition: function addition(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) + this.rmUnit(b) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) - this.rmUnit(b) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) * this.rmUnit(b) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) / this.rmUnit(b) + unit;
    }.bind(this)
  };
  this.detectUnit = function (value) {
    var ext = void 0;
    var valueStr = value.toString();
    if (valueStr.match(_this.UNIT.PX)) {
      ext = _this.UNIT.PX;
    } else if (valueStr.match(_this.UNIT.REM)) {
      ext = _this.UNIT.REM;
    } else if (valueStr.match(_this.UNIT.EM)) {
      ext = _this.UNIT.EM;
    } else if (valueStr.match(_this.UNIT.PERCENT)) {
      ext = _this.UNIT.PERCENT;
    } else if (!isNaN(value)) {
      return null;
    } else {
      throw new Error('detectUnit can\'t find unit for ' + value);
    }
    return ext;
  };
  this.rmUnit = function (value, unit) {
    var valueStr = value.toString();
    var ext = unit || _this.detectUnit(valueStr);
    var number = valueStr.replace(ext, '');
    return parseFloat(number);
  };
  this.toPercent = function (value) {
    var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + _this.UNIT.PERCENT;
  };
};
exports.default = new UnitUtils();
module.exports = exports['default'];
});
var unitUtils$1 = unwrapExports$1(unitUtils);
var defaultProps$8 = {
  '$enable-transitions': true
};
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$8['$enable-transitions'];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
var parseTransition_1 = createCommonjsModule$1(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseTransition = function parseTransition(transitions) {
  if (!transitions) {
    return [];
  }
  var sample = transitions;
  var RULE_DELIMITER = ',';
  var PROPERTY_DELIMITER = ' ';
  var MS_UNIT = 'ms';
  var TMP_STR = 'TMP';
  var DEFAULT_PROPERTY = 'all';
  var DEFAULT_DURATION = 0;
  var DEFAULT_TIMING_FUNCTION = 'ease';
  var DEFAULT_DELAY = 0;
  var BEZIER_REGEX = /cubic-bezier\([^\)]+\)/gi;
  var cubicBezierList = transitions.match(BEZIER_REGEX);
  if (cubicBezierList) {
    sample = sample.replace(BEZIER_REGEX, TMP_STR);
  }
  var transitionList = sample.split(RULE_DELIMITER).map(function (rule) {
    var properties = rule.trim().split(PROPERTY_DELIMITER);
    return {
      property: properties[0] || DEFAULT_PROPERTY,
      duration: properties[1] && !(properties[1].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[1]) * 1000 : parseFloat(properties[1]) || DEFAULT_DURATION,
      timingFunction: properties[2] && properties[2] !== TMP_STR ? properties[2] : cubicBezierList ? cubicBezierList.shift() : DEFAULT_TIMING_FUNCTION,
      delay: properties[3] && !(properties[3].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[3]) * 1000 : parseFloat(properties[3]) || DEFAULT_DELAY
    };
  });
  return transitionList;
};
exports.default = parseTransition;
module.exports = exports['default'];
});
var parseTransition = unwrapExports$1(parseTransition_1);
var defaultProps$35 = {
  '$enable-transitions': true,
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease'
};
function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$35['$transition-collapse'];
  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n  ';
}
function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$transition-fade'];
  return '\n    .fade,\n     &.fade {\n      opacity: 0;\n      ' + transition(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}
function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$transition-collapse'];
  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + transition(enableTransitions, transitionCollapse) + '\n    }\n  ';
}
function getReactTransition(enableTransition, transition$$1) {
  var transitionList = parseTransition(transition$$1);
  var _transitionList$ = transitionList[0],
      property = _transitionList$.property,
      duration = _transitionList$.duration,
      timingFunction = _transitionList$.timingFunction,
      delay = _transitionList$.delay;
  return transition(enableTransition, property + ' ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms');
}
var transition$2 = {
  defaultProps: defaultProps$35,
  getTransitionUtilities: getTransitionUtilities,
  getReactTransition: getReactTransition,
  fade: fade,
  collapse: collapse
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var theme$2 = makeTheme(theme$1);
var defaultProps$2$1 = {
  active: false,
  dismiss: null,
  menuClose: false,
  bgColor: 'primary',
  'menu-right': false,
  'animation-push': false,
  cssModule: null,
  theme: theme$2
};
var OffsetNavUnstyled = function (_React$Component) {
  inherits(OffsetNavUnstyled, _React$Component);
  function OffsetNavUnstyled() {
    classCallCheck(this, OffsetNavUnstyled);
    return possibleConstructorReturn(this, (OffsetNavUnstyled.__proto__ || Object.getPrototypeOf(OffsetNavUnstyled)).apply(this, arguments));
  }
  createClass(OffsetNavUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme', 'elementWidth', 'animation-push']),
          className = _omit.className,
          children = _omit.children,
          active = _omit.active,
          dismiss = _omit.dismiss,
          menuClose = _omit.menuClose,
          bgColor = _omit.bgColor,
          cssModule = _omit.cssModule,
          menuRight = _omit['menu-right'],
          attributes = objectWithoutProperties(_omit, ['className', 'children', 'active', 'dismiss', 'menuClose', 'bgColor', 'cssModule', 'menu-right']);
      var menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';
      var cssClasses = cn(className, menuDirectionClassNames, defineProperty({}, 'bg-' + bgColor, bgColor));
      return React.createElement(
        'div',
        _extends({
          className: mapToCssModules(cn(cssClasses, { active: active }), cssModule)
        }, attributes),
        menuClose && React.createElement(Close, { 'aria-label': 'Close', onDismiss: dismiss }),
        children
      );
    }
  }]);
  return OffsetNavUnstyled;
}(React.Component);
OffsetNavUnstyled.defaultProps = defaultProps$2$1;
OffsetNavUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  dismiss: PropTypes.func,
  menuClose: PropTypes.bool,
  theme: PropTypes.object,
  bgColor: PropTypes.string,
  'menu-right': PropTypes.bool,
  'animation-push': PropTypes.bool,
  cssModule: PropTypes.object
};
var OffsetNav = styled(OffsetNavUnstyled).withConfig({
  displayName: 'OffsetNav'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n    height: 100%;\n    background-color: ' + props.theme.navigationBar['$menu-offset-nav-bg-color'] + ';\n    z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' + 10);\n  ';
});
OffsetNav.defaultProps = defaultProps$2$1;

var OffsetNavPush = styled(OffsetNav).withConfig({
  displayName: 'OffsetNavPush'
})(['', ''], function (props) {
  return '\n    ' + boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow']) + '\n    &.menu-left {\n      left: -' + props.theme.navigationBar['$menu-offset-width'] + ';\n      ' + transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n      &.active {\n        left: 0;\n      }\n    }\n    \n    &.menu-right {\n      right: -' + props.theme.navigationBar['$menu-offset-width'] + ';\n      ' + transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n      &.active {\n        right: 0;\n      }\n    }\n  ';
});

var OffsetNavSlide = styled(OffsetNav).withConfig({
  displayName: 'OffsetNavSlide'
})(['', ''], function (props) {
  return '\n    ' + transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n    ' + boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow']) + '  \n    &.menu-left {\n      left: 0;\n      transform: translateX(-100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      transform: translateX(100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n\n  ';
});

var theme$3 = makeTheme(theme$1);
var defaultProps$3$1 = {
  active: false,
  theme: theme$3
};
var OverlayUnstyled = function (_React$Component) {
  inherits(OverlayUnstyled, _React$Component);
  function OverlayUnstyled() {
    classCallCheck(this, OverlayUnstyled);
    return possibleConstructorReturn(this, (OverlayUnstyled.__proto__ || Object.getPrototypeOf(OverlayUnstyled)).apply(this, arguments));
  }
  createClass(OverlayUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          attributes = objectWithoutProperties(_omit, ['className', 'active']);
      return React.createElement('div', _extends({
        className: cn(className, 'fade', {
          show: active
        })
      }, attributes));
    }
  }]);
  return OverlayUnstyled;
}(React.Component);
OverlayUnstyled.defaultProps = defaultProps$3$1;
OverlayUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  active: PropTypes.bool,
  theme: PropTypes.object
};
var Overlay = styled(OverlayUnstyled).withConfig({
  displayName: 'Overlay'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ' + props.theme.navigationBar['$zindex-overlay'] + ';\n    background: ' + props.theme.navigationBar['$overlay-bg'] + ';\n    transform: translate3d(100%, 0, 0);\n    ' + transition$2.fade(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n    &.show {\n      transform: translate3d(0, 0, 0);\n    }\n  ';
});
Overlay.defaultProps = defaultProps$3$1;

var theme$$1 = makeTheme(theme$1);
var defaultProps = {
  button: {
    component: Button,
    className: null
  },
  noOverlay: false,
  menuClose: false,
  onClick: null,
  shadowHeader: false,
  cssModule: null,
  dismiss: null,
  'nav-top': null,
  light: false,
  inverse: false,
  fixed: null,
  sticky: null,
  bgColor: null,
  offsetNavBgColor: null,
  'menu-right': false,
  'animation-push': false,
  theme: theme$$1
};
var NavigationBarUnstyled = function (_React$Component) {
  inherits(NavigationBarUnstyled, _React$Component);
  function NavigationBarUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, NavigationBarUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NavigationBarUnstyled.__proto__ || Object.getPrototypeOf(NavigationBarUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          animationPush = _this$props['animation-push'];
      if (onClick) {
        onClick(e);
      }
      _this.setState({ show: !_this.state.show });
      if (animationPush) {
        document.getElementById('wrapper').classList.toggle('active');
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass(NavigationBarUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          animationPush = _props['animation-push'],
          menuRight = _props['menu-right'];
      if (animationPush) {
        menuRight ?
        document.getElementById('wrapper').classList.toggle('right') : document.getElementById('wrapper').classList.toggle('left');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn,
          _this2 = this;
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          cssModule = _omit.cssModule,
          button = _omit.button,
          noOverlay = _omit.noOverlay,
          menuClose = _omit.menuClose,
          navTop = _omit['nav-top'],
          menuRight = _omit['menu-right'],
          animationPush = _omit['animation-push'],
          light = _omit.light,
          inverse = _omit.inverse,
          fixed = _omit.fixed,
          sticky = _omit.sticky,
          bgColor = _omit.bgColor,
          offsetNavBgColor = _omit.offsetNavBgColor,
          shadowHeader = _omit.shadowHeader,
          attributesTemp = objectWithoutProperties(_omit, ['className', 'children', 'cssModule', 'button', 'noOverlay', 'menuClose', 'nav-top', 'menu-right', 'animation-push', 'light', 'inverse', 'fixed', 'sticky', 'bgColor', 'offsetNavBgColor', 'shadowHeader']);
      var _omit2 = lodash_omit$1(attributesTemp, ['onClick']),
          attributes = objectWithoutProperties(_omit2, []);
      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = objectWithoutProperties(button, ['component', 'className']);
      var cssClasses = cn('navbar', 'justify-content-between', 'w-100', className, (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, defineProperty(_cn, 'bg-' + bgColor, bgColor), defineProperty(_cn, 'fixed-header-' + fixed, fixed), defineProperty(_cn, 'sticky-' + sticky, sticky), _cn));
      var buttonMenuRight = menuRight ? 'flex-last' : '';
      var buttonClasses = cn(buttonMenuRight, classNameButton, {
        'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton
      });
      var OffsetMenuAnimated = animationPush ? React.createElement(
        OffsetNavPush,
        {
          className: 'offset-header-navbar',
          active: this.state.show,
          bgColor: offsetNavBgColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick,
          innerRef: function innerRef(offsetNav) {
            _this2.offsetNav = offsetNav;
          }
        },
        children
      ) : React.createElement(
        OffsetNavSlide,
        {
          className: 'offset-header-navbar',
          active: this.state.show,
          bgColor: offsetNavBgColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick,
          innerRef: function innerRef(offsetNav) {
            _this2.offsetNav = offsetNav;
          }
        },
        children
      );
      return React.createElement(
        'div',
        null,
        !noOverlay && React.createElement(Overlay, { active: this.state.show, onClick: this.handleClick }),
        React.createElement(
          Header,
          _extends({ className: mapToCssModules(cn(cssClasses), cssModule), shadowHeader: shadowHeader }, attributes, { innerRef: function innerRef(header) {
              _this2.header = header;
            } }),
          React.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
          navTop && React.createElement(
            'div',
            null,
            navTop
          )
        ),
        OffsetMenuAnimated
      );
    }
  }]);
  return NavigationBarUnstyled;
}(React.Component);
NavigationBarUnstyled.defaultProps = defaultProps;
NavigationBarUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  onClick: PropTypes.func,
  shadowHeader: PropTypes.bool,
  noOverlay: PropTypes.bool,
  menuClose: PropTypes.bool,
  cssModule: PropTypes.object,
  button: PropTypes.shape({
    component: PropTypes.component,
    className: PropTypes.string
  }),
  'nav-top': PropTypes.node,
  light: PropTypes.bool,
  inverse: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  bgColor: PropTypes.string,
  offsetNavBgColor: PropTypes.string,
  'menu-right': PropTypes.bool,
  'animation-push': PropTypes.bool
};
var NavigationBar = styled(NavigationBarUnstyled).withConfig({
  displayName: 'NavigationBar'
})(['', ''], function (props) {
  return '\n    z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' - 10);\n    &.fixed-header-' + props.fixed + ' {\n      position: fixed;\n      ' + props.fixed + ': 0;\n    }\n  ';
});
NavigationBar.defaultProps = defaultProps;

var theme$4 = makeTheme(theme$1);
var defaultProps$4$1 = {
  theme: theme$4
};
var PageWrapperUnstyled = function (_React$Component) {
  inherits(PageWrapperUnstyled, _React$Component);
  function PageWrapperUnstyled() {
    classCallCheck(this, PageWrapperUnstyled);
    return possibleConstructorReturn(this, (PageWrapperUnstyled.__proto__ || Object.getPrototypeOf(PageWrapperUnstyled)).apply(this, arguments));
  }
  createClass(PageWrapperUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          attributes = objectWithoutProperties(_omit, ['className', 'children']);
      return React.createElement(
        'div',
        _extends({
          className: className,
          id: 'wrapper'
        }, attributes),
        children
      );
    }
  }]);
  return PageWrapperUnstyled;
}(React.Component);
PageWrapperUnstyled.defaultProps = defaultProps$4$1;
PageWrapperUnstyled.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  theme: PropTypes.object
};
var PageWrapper = styled(PageWrapperUnstyled).withConfig({
  displayName: 'PageWrapper'
})(['', ''], function (props) {
  return '\n    position: relative;\n    height: 100%;\n    transition: ' + props.theme.navigationBar['$menu-offset-nav-transition'] + ';\n    &.left {\n      left: 0;\n      &.active {\n        left: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n      }\n    }\n    &.right {\n      right: 0;\n      &.active {\n        right: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n      }\n    }\n  ';
});
PageWrapper.defaultProps = defaultProps$4$1;

export { PageWrapper, makeTheme$1 as makeTheme, theme$1 as theme };
export default NavigationBar;
//# sourceMappingURL=navigation-bar.es.js.map
