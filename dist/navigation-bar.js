(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('styled-components'), require('classnames'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'styled-components', 'classnames', 'react-dom'], factory) :
	(factory((global['navigation-bar'] = {}),global.React,global.PropTypes,global.styled,global.cn,global.ReactDom));
}(this, (function (exports,React,PropTypes,_styledComponents,_classnames,reactDom) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
_styledComponents = _styledComponents && _styledComponents.hasOwnProperty('default') ? _styledComponents['default'] : _styledComponents;
_classnames = _classnames && _classnames.hasOwnProperty('default') ? _classnames['default'] : _classnames;
reactDom = reactDom && reactDom.hasOwnProperty('default') ? reactDom['default'] : reactDom;

'use strict';

'use strict';
var ReactCurrentOwner = {
  current: null
};
var ReactCurrentOwner_1 = ReactCurrentOwner;

'use strict';
var validateFormat = function validateFormat(format) {};
{
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}
function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1;
    throw error;
  }
}
var invariant_1 = invariant;

'use strict';
function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}
var DOMPropertyInjection = {
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }
    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ? invariant_1(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : void 0;
      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];
      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,
        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant_1(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : void 0;
      {
        DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }
      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        {
          DOMProperty.getPossibleStandardName[attributeName] = propName;
        }
      }
      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }
      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }
      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }
      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',
  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
  properties: {},
  getPossibleStandardName: { autofocus: 'autoFocus' },
  _isCustomAttributeFunctions: [],
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },
  injection: DOMPropertyInjection
};
var DOMProperty_1 = DOMProperty;

'use strict';
var ReactDOMComponentFlags = {
  hasCachedChildNodes: 1 << 0
};
var ReactDOMComponentFlags_1 = ReactDOMComponentFlags;

'use strict';
var ATTR_NAME = DOMProperty_1.ID_ATTRIBUTE_NAME;
var Flags = ReactDOMComponentFlags_1;
var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);
function shouldPrecacheNode(node, nodeID) {
  return node.nodeType === 1 && node.getAttribute(ATTR_NAME) === String(nodeID) || node.nodeType === 8 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === 8 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
}
function getRenderedHostOrTextFromComponent(component) {
  var rendered;
  while (rendered = component._renderedComponent) {
    component = rendered;
  }
  return component;
}
function precacheNode(inst, node) {
  var hostInst = getRenderedHostOrTextFromComponent(inst);
  hostInst._hostNode = node;
  node[internalInstanceKey] = hostInst;
}
function uncacheNode(inst) {
  var node = inst._hostNode;
  if (node) {
    delete node[internalInstanceKey];
    inst._hostNode = null;
  }
}
function precacheChildNodes(inst, node) {
  if (inst._flags & Flags.hasCachedChildNodes) {
    return;
  }
  var children = inst._renderedChildren;
  var childNode = node.firstChild;
  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;
    }
    var childInst = children[name];
    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
    if (childID === 0) {
      continue;
    }
    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (shouldPrecacheNode(childNode, childID)) {
        precacheNode(childInst, childNode);
        continue outer;
      }
    }
    invariant_1(false, 'Unable to find element with ID %s.', childID);
  }
  inst._flags |= Flags.hasCachedChildNodes;
}
function getClosestInstanceFromNode(node) {
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];
  }
  var parents = [];
  while (!node[internalInstanceKey]) {
    parents.push(node);
    if (node.parentNode) {
      node = node.parentNode;
    } else {
      return null;
    }
  }
  var closest;
  var inst;
  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
    closest = inst;
    if (parents.length) {
      precacheChildNodes(inst, node);
    }
  }
  return closest;
}
function getInstanceFromNode(node) {
  var inst = getClosestInstanceFromNode(node);
  if (inst != null && inst._hostNode === node) {
    return inst;
  } else {
    return null;
  }
}
function getNodeFromInstance(inst) {
  !(inst._hostNode !== undefined) ? invariant_1(false, 'getNodeFromInstance: Invalid argument.') : void 0;
  if (inst._hostNode) {
    return inst._hostNode;
  }
  var parents = [];
  while (!inst._hostNode) {
    parents.push(inst);
    !inst._hostParent ? invariant_1(false, 'React DOM tree root should always have a node reference.') : void 0;
    inst = inst._hostParent;
  }
  for (; parents.length; inst = parents.pop()) {
    precacheChildNodes(inst, inst._hostNode);
  }
  return inst._hostNode;
}
var ReactDOMComponentTree = {
  getClosestInstanceFromNode: getClosestInstanceFromNode,
  getInstanceFromNode: getInstanceFromNode,
  getNodeFromInstance: getNodeFromInstance,
  precacheChildNodes: precacheChildNodes,
  precacheNode: precacheNode,
  uncacheNode: uncacheNode
};
var ReactDOMComponentTree_1 = ReactDOMComponentTree;

'use strict';
var ReactInstanceMap = {
  remove: function (key) {
    key._reactInternalInstance = undefined;
  },
  get: function (key) {
    return key._reactInternalInstance;
  },
  has: function (key) {
    return key._reactInternalInstance !== undefined;
  },
  set: function (key, value) {
    key._reactInternalInstance = value;
  }
};
var ReactInstanceMap_1 = ReactInstanceMap;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}
	return Object(val);
}
function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}
		var test1 = new String('abc');
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}
		return true;
	} catch (err) {
		return false;
	}
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;
	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);
		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}
		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}
	return to;
};

'use strict';

"use strict";
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
var emptyFunction = function emptyFunction() {};
emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};
var emptyFunction_1 = emptyFunction;

'use strict';
var warning = emptyFunction_1;
{
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };
  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (format.indexOf('Failed Composite propType: ') === 0) {
      return;
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      printWarning.apply(undefined, [format].concat(args));
    }
  };
}
var warning_1 = warning;

'use strict';
function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning_1(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
  }
}
var ReactNoopUpdateQueue = {
  isMounted: function (publicInstance) {
    return false;
  },
  enqueueCallback: function (publicInstance, callback) {},
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};
var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

'use strict';
var canDefineProperty$1 = false;
{
  try {
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty$1 = true;
  } catch (x) {
  }
}
var canDefineProperty_1 = canDefineProperty$1;

'use strict';
var emptyObject = {};
{
  Object.freeze(emptyObject);
}
var emptyObject_1 = emptyObject;

'use strict';
var lowPriorityWarning$1 = function () {};
{
  var printWarning$1 = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };
  lowPriorityWarning$1 = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      printWarning$1.apply(undefined, [format].concat(args));
    }
  };
}
var lowPriorityWarning_1 = lowPriorityWarning$1;

'use strict';
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  this.updater = updater || ReactNoopUpdateQueue_1;
}
ReactComponent.prototype.isReactComponent = {};
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty_1) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}
function ReactPureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  this.updater = updater || ReactNoopUpdateQueue_1;
}
function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
objectAssign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;
var ReactBaseClasses = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

'use strict';
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};
var twoArgumentPooler$1 = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};
var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};
var fourArgumentPooler$1 = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};
var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? invariant_1(false, 'Trying to release an instance into a pool of a different type.') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};
var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;
var addPoolingTo = function (CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};
var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler$1,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler$1
};
var PooledClass_1 = PooledClass;

'use strict';
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
var ReactElementSymbol = REACT_ELEMENT_TYPE;

'use strict';
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
function hasValidRef(config) {
  {
    if (hasOwnProperty$1.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}
function hasValidKey(config) {
  {
    if (hasOwnProperty$1.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}
function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning_1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}
function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning_1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    $$typeof: ReactElementSymbol,
    type: type,
    key: key,
    ref: ref,
    props: props,
    _owner: owner
  };
  {
    element._store = {};
    if (canDefineProperty_1) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }
  return element;
};
ReactElement.createElement = function (type, config, children) {
  var propName;
  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;
  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    for (propName in config) {
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== ReactElementSymbol) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  factory.type = type;
  return factory;
};
ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
};
ReactElement.cloneElement = function (element, config, children) {
  var propName;
  var props = objectAssign({}, element.props);
  var key = element.key;
  var ref = element.ref;
  var self = element._self;
  var source = element._source;
  var owner = element._owner;
  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }
  return ReactElement(element.type, key, ref, self, source, owner, props);
};
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === ReactElementSymbol;
};
var ReactElement_1 = ReactElement;

'use strict';
var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}
var getIteratorFn_1 = getIteratorFn;

'use strict';
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}
var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};
var KeyEscapeUtils_1 = KeyEscapeUtils;

'use strict';
var SEPARATOR = '.';
var SUBSEPARATOR = ':';
var didWarnAboutMaps = false;
function getComponentKey(component, index) {
  if (component && typeof component === 'object' && component.key != null) {
    return KeyEscapeUtils_1.escape(component.key);
  }
  return index.toString(36);
}
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;
  if (type === 'undefined' || type === 'boolean') {
    children = null;
  }
  if (children === null || type === 'string' || type === 'number' ||
  type === 'object' && children.$$typeof === ReactElementSymbol) {
    callback(traverseContext, children,
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }
  var child;
  var nextName;
  var subtreeCount = 0;
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn_1(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner_1.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner_1.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          warning_1(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum);
          didWarnAboutMaps = true;
        }
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils_1.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner_1.current) {
          var name = ReactCurrentOwner_1.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      invariant_1(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }
  return subtreeCount;
}
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }
  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
var traverseAllChildren_1 = traverseAllChildren;

'use strict';
var twoArgumentPooler = PooledClass_1.twoArgumentPooler;
var fourArgumentPooler = PooledClass_1.fourArgumentPooler;
var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren_1(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(MapBookKeeping, fourArgumentPooler);
function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction_1.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}
function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren_1(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}
function countChildren(children, context) {
  return traverseAllChildren_1(children, forEachSingleChildDummy, null);
}
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction_1.thatReturnsArgument);
  return result;
}
var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};
var ReactChildren_1 = ReactChildren;

'use strict';
function isNative(fn) {
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  .call(hasOwnProperty
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}
var canUseCollections =
typeof Array.from === 'function' &&
typeof Map === 'function' && isNative(Map) &&
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
typeof Set === 'function' && isNative(Set) &&
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;
if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();
  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };
  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };
  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };
  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}
var unmountedIDs = [];
function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;
    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}
function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}
function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}
function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  warning_1(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
  return describeComponentFrame(name, element && element._source, ownerName);
}
var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? invariant_1(false, 'Item must have been set') : void 0;
    item.childIDs = nextChildIDs;
    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? invariant_1(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant_1(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
      !nextChild.isMounted ? invariant_1(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
      }
      !(nextChild.parentID === id) ? invariant_1(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? invariant_1(false, 'Item must have been set') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      return;
    }
    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }
    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;
    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },
  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,
  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }
    var stack = [];
    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;
    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }
      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
    }
    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};
var ReactComponentTreeHook_1 = ReactComponentTreeHook;

var process = { argv: [], env: {} };

'use strict';
var ReactPropTypeLocationNames = {};
{
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}
var ReactPropTypeLocationNames_1 = ReactPropTypeLocationNames;

'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

'use strict';
var ReactComponentTreeHook$1;
if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
}
var loggedTypeFailures = {};
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      try {
        !(typeof typeSpecs[typeSpecName] === 'function') ? invariant_1(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1);
      } catch (ex) {
        error = ex;
      }
      warning_1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName, typeof error);
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        loggedTypeFailures[error.message] = true;
        var componentStackInfo = '';
        {
          if (!ReactComponentTreeHook$1) {
            ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getCurrentStackAddendum(element);
          }
        }
        warning_1(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo);
      }
    }
  }
}
var checkReactTypeSpec_1 = checkReactTypeSpec;

'use strict';
function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = ReactCurrentOwner_1.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}
function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}
var ownerHasKeyUseWarning = {};
function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();
  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;
  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }
  warning_1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook_1.getCurrentStackAddendum(element));
}
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn_1(node);
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec_1(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning_1(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}
var ReactElementValidator$2 = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }
        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }
        info += ReactComponentTreeHook_1.getCurrentStackAddendum();
        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook_1.pushNonStandardWarningStack(true, currentSource);
        warning_1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
        ReactComponentTreeHook_1.popNonStandardWarningStack();
      }
    }
    var element = ReactElement_1.createElement.apply(this, arguments);
    if (element == null) {
      return element;
    }
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }
    validatePropTypes(element);
    return element;
  },
  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$2.createElement.bind(null, type);
    validatedFactory.type = type;
    {
      if (canDefineProperty_1) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning_1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }
    return validatedFactory;
  },
  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};
var ReactElementValidator_1 = ReactElementValidator$2;

'use strict';
var createDOMFactory = ReactElement_1.createFactory;
{
  var ReactElementValidator$1 = ReactElementValidator_1;
  createDOMFactory = ReactElementValidator$1.createFactory;
}
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};
var ReactDOMFactories_1 = ReactDOMFactories;

'use strict';
var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$2;

'use strict';
{
  var invariant$2 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$3 = ReactPropTypesSecret_1$2;
  var loggedTypeFailures$1 = {};
}
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        try {
          invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$3);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          loggedTypeFailures$1[error.message] = true;
          var stack = getStack ? getStack() : '';
          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}
var checkPropTypes_1 = checkPropTypes;

'use strict';
var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret_1$2) {
        if (throwOnDirectAccess) {
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$2);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$2) == null) {
          return null;
        }
      }
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

'use strict';
var factory_1 = function(isValidElement) {
  var throwOnDirectAccess = false;
  return factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
};

'use strict';
var isValidElement = ReactElement_1.isValidElement;
var ReactPropTypes = factory_1(isValidElement);

'use strict';
var ReactVersion = '15.6.2';

'use strict';
{
  var warning$2 = warning_1;
}
var MIXINS_KEY = 'mixins';
function identity(fn) {
  return fn;
}
var ReactPropTypeLocationNames$2;
{
  ReactPropTypeLocationNames$2 = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}
function factory$2(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  var injectedMixins = [];
  var ReactClassInterface = {
    mixins: 'DEFINE_MANY',
    statics: 'DEFINE_MANY',
    propTypes: 'DEFINE_MANY',
    contextTypes: 'DEFINE_MANY',
    childContextTypes: 'DEFINE_MANY',
    getDefaultProps: 'DEFINE_MANY_MERGED',
    getInitialState: 'DEFINE_MANY_MERGED',
    getChildContext: 'DEFINE_MANY_MERGED',
    render: 'DEFINE_ONCE',
    componentWillMount: 'DEFINE_MANY',
    componentDidMount: 'DEFINE_MANY',
    componentWillReceiveProps: 'DEFINE_MANY',
    shouldComponentUpdate: 'DEFINE_ONCE',
    componentWillUpdate: 'DEFINE_MANY',
    componentDidUpdate: 'DEFINE_MANY',
    componentWillUnmount: 'DEFINE_MANY',
    updateComponent: 'OVERRIDE_BASE'
  };
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = objectAssign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = objectAssign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };
  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        {
          warning$2(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames$2[location],
            propName
          );
        }
      }
    }
  }
  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;
    if (ReactClassMixin.hasOwnProperty(name)) {
      invariant_1(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }
    if (isAlreadyDefined) {
      invariant_1(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;
        {
          warning$2(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }
      return;
    }
    invariant_1(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    invariant_1(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );
    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }
    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }
      if (name === MIXINS_KEY) {
        continue;
      }
      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);
      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;
        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];
            invariant_1(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            {
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }
  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }
      var isReserved = name in RESERVED_SPEC_KEYS;
      invariant_1(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );
      var isInherited = name in Constructor;
      invariant_1(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }
  function mergeIntoWithNoDuplicateKeys(one, two) {
    invariant_1(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );
    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        invariant_1(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        if (newThis !== component && newThis !== null) {
          {
            warning$2(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          {
            warning$2(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }
  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };
  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };
  var ReactClassMixin = {
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },
    isMounted: function() {
      {
        warning$2(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };
  var ReactClassComponent = function() {};
  objectAssign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );
  function createClass(spec) {
    var Constructor = identity(function(props, context, updater) {
      {
        warning$2(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }
      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue;
      this.state = null;
      var initialState = this.getInitialState ? this.getInitialState() : null;
      {
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          initialState = null;
        }
      }
      invariant_1(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );
      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];
    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }
    {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }
    invariant_1(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );
    {
      warning$2(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning$2(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }
    return Constructor;
  }
  return createClass;
}
var factory_1$2 = factory$2;

'use strict';
var Component = ReactBaseClasses.Component;
var isValidElement$1 = ReactElement_1.isValidElement;
var createClass = factory_1$2(Component, isValidElement$1, ReactNoopUpdateQueue_1);

'use strict';
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? invariant_1(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}
var onlyChild_1 = onlyChild;

'use strict';
var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;
{
  var lowPriorityWarning = lowPriorityWarning_1;
  var canDefineProperty = canDefineProperty_1;
  var ReactElementValidator = ReactElementValidator_1;
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}
var __spread = objectAssign;
var createMixin = function (mixin) {
  return mixin;
};
{
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return objectAssign.apply(null, arguments);
  };
  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}
var React$1 = {
  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },
  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,
  PropTypes: ReactPropTypes,
  createClass: createClass,
  createFactory: createFactory,
  createMixin: createMixin,
  DOM: ReactDOMFactories_1,
  version: ReactVersion,
  __spread: __spread
};
{
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React$1, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });
    Object.defineProperty(React$1, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createClass;
      }
    });
  }
  React$1.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories_1).forEach(function (factory) {
    React$1.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories_1[factory].apply(ReactDOMFactories_1, arguments);
    };
  });
}
var React_1 = React$1;

'use strict';
var ReactNodeTypes = {
  HOST: 0,
  COMPOSITE: 1,
  EMPTY: 2,
  getType: function (node) {
    if (node === null || node === false) {
      return ReactNodeTypes.EMPTY;
    } else if (React_1.isValidElement(node)) {
      if (typeof node.type === 'function') {
        return ReactNodeTypes.COMPOSITE;
      } else {
        return ReactNodeTypes.HOST;
      }
    }
    invariant_1(false, 'Unexpected node: %s', node);
  }
};
var ReactNodeTypes_1 = ReactNodeTypes;

'use strict';
function getHostComponentFromComposite(inst) {
  var type;
  while ((type = inst._renderedNodeType) === ReactNodeTypes_1.COMPOSITE) {
    inst = inst._renderedComponent;
  }
  if (type === ReactNodeTypes_1.HOST) {
    return inst._renderedComponent;
  } else if (type === ReactNodeTypes_1.EMPTY) {
    return null;
  }
}
var getHostComponentFromComposite_1 = getHostComponentFromComposite;

'use strict';
function findDOMNode(componentOrElement) {
  {
    var owner = ReactCurrentOwner_1.current;
    if (owner !== null) {
      warning_1(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component');
      owner._warnedAboutRefsInRender = true;
    }
  }
  if (componentOrElement == null) {
    return null;
  }
  if (componentOrElement.nodeType === 1) {
    return componentOrElement;
  }
  var inst = ReactInstanceMap_1.get(componentOrElement);
  if (inst) {
    inst = getHostComponentFromComposite_1(inst);
    return inst ? ReactDOMComponentTree_1.getNodeFromInstance(inst) : null;
  }
  if (typeof componentOrElement.render === 'function') {
    invariant_1(false, 'findDOMNode was called on an unmounted component.');
  } else {
    invariant_1(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement));
  }
}
var findDOMNode_1$1 = findDOMNode;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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
var hasOwnProperty$2 = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Symbol$1 = root.Symbol;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeMax = Math.max;
var Map$1 = getNative(root, 'Map');
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
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$2.call(data, key);
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
    'map': new (Map$1 || ListCache),
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
    if ((inherited || hasOwnProperty$2.call(value, key)) &&
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
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
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
  return isArrayLikeObject(value) && hasOwnProperty$2.call(value, 'callee') &&
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



var mapToCssModules_es = Object.freeze({
	default: mapToCssModules
});

var conditional = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifThen = ifThen;
exports.ifElse = ifElse;
function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}
function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}
exports.default = {
  ifThen: ifThen,
  ifElse: ifElse
};
});
unwrapExports(conditional);
var conditional_1 = conditional.ifThen;

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

var simpleSwizzle = createCommonjsModule(function (module) {
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

var colorString = createCommonjsModule(function (module) {
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

var conversions = createCommonjsModule(function (module) {
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
var color = Color;

var borderRadius_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderRadius = borderRadius;
exports.borderTopRadius = borderTopRadius;
exports.borderRightRadius = borderRightRadius;
exports.borderBottomRadius = borderBottomRadius;
exports.borderLeftRadius = borderLeftRadius;
var defaultProps = exports.defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
exports.default = {
  defaultProps: defaultProps,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};
});
unwrapExports(borderRadius_1);

var hover_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = hover;
exports.hoverFocus = hoverFocus;
exports.plainHoverFocus = plainHoverFocus;
exports.hoverFocusActive = hoverFocusActive;
var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};
function hover(content) {
  return '\n    &:hover { ' + content + ' }\n  ';
}
function hoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return ' \n      &:focus { ' + content + ' }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus,\n    &:hover {\n      ' + content + '\n    }\n  ';
}
function plainHoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &, &:focus {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return ' \n    &, &:focus, &:hover {\n      ' + content + '\n    }\n  ';
}
function hoverFocusActive() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &:focus,\n      &:active {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus, &:active, &:hover {\n     ' + content + '\n    }\n  ';
}
hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;
exports.default = {
  defaultProps: defaultProps,
  hover: hover,
  hoverFocus: hoverFocus,
  plainHoverFocus: plainHoverFocus,
  hoverFocusActive: hoverFocusActive
};
});
unwrapExports(hover_1);

var boxShadow_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxShadow = boxShadow;
var defaultProps = exports.defaultProps = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
exports.default = {
  defaultProps: defaultProps,
  boxShadow: boxShadow
};
});
unwrapExports(boxShadow_1);
var boxShadow_2 = boxShadow_1.boxShadow;

var transition_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
var defaultProps = exports.defaultProps = {
  '$enable-transitions': true
};
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
exports.default = {
  transition: transition
};
});
unwrapExports(transition_1);
var transition_2 = transition_1.transition;

var buttons = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonVariant = buttonVariant;
exports.buttonOutlineVariant = buttonOutlineVariant;
exports.buttonSize = buttonSize;
exports.button = button;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-shadows': true,
  '$enable-hover-media-query': false,
  '$enable-transitions': true,
  '$enable-rounded': true,
  '$font-weight-normal': 'normal',
  '$btn-font-weight': 'normal',
  '$btn-line-height': '1.25',
  '$btn-transition': 'all .2s ease-in-out',
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-padding-y': '.5rem',
  '$font-size-base': '1rem',
  '$btn-border-radius': '.25rem',
  '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
  '$cursor-disabled': 'not-allowed',
  '$link-color': '#0275d8',
  '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$link-hover-decoration': 'underline',
  '$btn-link-disabled-color': '#636c72',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-x-sm': '.5rem',
  '$btn-padding-y-sm': '.25rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-block-spacing-y': '.5rem',
  '$btn-primary-color': '#fff',
  '$btn-primary-bg': '#0275d8',
  '$btn-primary-border': '#0275d8',
  '$btn-secondary-color': '#292b2c',
  '$btn-secondary-bg': '#fff',
  '$btn-secondary-border': '#ccc',
  '$btn-info-color': '#fff',
  '$btn-info-bg': '#5bc0de',
  '$btn-info-border': '#5bc0de',
  '$btn-success-color': '#fff',
  '$btn-success-bg': '#5cb85c',
  '$btn-success-border': '#5cb85c',
  '$btn-warning-color': '#fff',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-warning-border': '#f0ad4e',
  '$btn-danger-color': '#fff',
  '$btn-danger-bg': '#d9534f',
  '$btn-danger-border': '#d9534f'
};
function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var btnBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-box-shadow'];
  var activeBackground = (0, _color2.default)(background).darken(0.2).toString();
  var activeBorder = (0, _color2.default)(border).darken(0.12).toString();
  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + (0, boxShadow_1.boxShadow)(enableShadows, btnBoxShadow) + '\n  \n    ' + (0, hover_1.hover)('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      ' + (0, conditional.ifElse)('\n        box-shadow: ' + btnBoxShadow + ', 0 0 0 2px ' + (0, _color2.default)(border).alpha(0.5).toString() + ';\n      ', '\n        box-shadow: 0 0 0 2px ' + (0, _color2.default)(border).alpha(0.5).toString() + ';\n      ') + '\n    }\n  \n    /* Disabled comes first so active can properly restyle */\n    &.disabled,\n    &:disabled {\n      background-color: ' + background + ';\n      border-color: ' + border + ';\n    }\n    \n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      background-image: none;\n      border-color: ' + activeBorder + ';\n      ' + (0, boxShadow_1.boxShadow)(enableShadows, btnActiveBoxShadow) + '\n    }\n  ';
}
function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + (0, hover_1.hover)('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 2px ' + (0, _color2.default)(buttonColor).alpha(0.5).toString() + ';\n    }\n  \n    &.disabled,\n    &:disabled {\n      color: ' + buttonColor + ';\n      border-color: transparent;\n    }\n    \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    }\n  ';
}
function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];
  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + (0, borderRadius_1.borderRadius)(enableRounded, btnBorderRadius) + '\n  ';
}
function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$enable-rounded'];
  var $fontWeightNormal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$font-weight-normal'];
  var $btnFontWeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-line-height'];
  var $btnTransition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$btn-transition'];
  var $inputBtnBorderWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-base'];
  var $btnBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius'];
  var $btnBoxShadow = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$btn-box-shadow'];
  var $btnFocusBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$btn-focus-box-shadow'];
  var $btnActiveBoxShadow = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$cursor-disabled'];
  var $linkColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$link-color'];
  var $linkHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$btn-info-color'];
  var $btnInfoBg = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$btn-success-border'];
  var $btnWarningColor = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$btn-danger-border'];
  return '\n  \n    font-family: inherit;\n    \n    &.btn {\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + '\n      ' + (0, transition_1.transition)($enableTransitions, $btnTransition) + '\n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      &:focus,\n      &.focus {\n        outline: 0;\n        box-shadow: ' + $btnFocusBoxShadow + ';\n      }\n\n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, 'none') + '\n      }  \n\n      &:active,\n      &.active {\n        background-image: none;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow) + '\n      }\n    }\n    \n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary {\n      ' + buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-secondary {\n      ' + buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-info {\n      ' + buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-success {\n      ' + buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-warning {\n      ' + buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-danger {\n      ' + buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n   \n    &.btn-outline-primary {\n      ' + buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor) + '\n    }    \n    &.btn-outline-secondary {\n      ' + buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor) + '\n    }    \n    &.btn-outline-info {\n      ' + buttonOutlineVariant($btnInfoBg, $btnInfoColor) + '\n    }    \n    &.btn-outline-success {\n      ' + buttonOutlineVariant($btnSuccessBg, $btnSuccessColor) + '\n    }\n    &.btn-outline-warning {\n      ' + buttonOutlineVariant($btnWarningBg, $btnWarningColor) + '\n    }\n    &.btn-outline-danger {\n      ' + buttonOutlineVariant($btnDangerBg, $btnDangerColor) + '\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    &.btn-link {\n      font-weight: ' + $fontWeightNormal + ';\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, 'none') + '\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + (0, hover_1.hover)('border-color: transparent;') + '\n     \n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n        color: ' + $linkHoverColor + ';\n        text-decoration: ' + $linkHoverDecoration + ';\n        background-color: transparent;\n      ') + '\n     \n      &:disabled {\n        color: ' + $btnLinkDisabledColor + ';\n        ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n          text-decoration: none;\n        ') + '\n      }\n    }\n  \n  \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /* Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /* Specificity overrides */\n    input[type="submit"],\n    input[type="reset"],\n    input[type="button"] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    &[type="button"],\n    &[type="reset"],\n    &[type="submit"] {\n      -webkit-appearance: button;\n    }\n    \n    &::-moz-focus-inner,\n    &[type="button"]::-moz-focus-inner,\n    &[type="reset"]::-moz-focus-inner,\n    &[type="submit"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  buttonVariant: buttonVariant,
  buttonOutlineVariant: buttonOutlineVariant,
  buttonSize: buttonSize,
  button: button
};
});
unwrapExports(buttons);

var unitUtils = createCommonjsModule(function (module, exports) {
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
unwrapExports(unitUtils);

var variables = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertAscending = assertAscending;
exports.assertStartAtZero = assertStartAtZero;
exports.comparable = comparable;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
    } else if (!comparable(_unitUtils2.default.rmUnit(prevNum), _unitUtils2.default.rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    } else if (_unitUtils2.default.rmUnit(prevNum) >= _unitUtils2.default.rmUnit(num)) {
      if (process.env.NODE !== 'test') {
        console.warn('Invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' which isn\'t greater than ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    }
    prevKey = key;
    prevNum = num;
  });
  return asserted;
}
function assertStartAtZero(map) {
  var values = Object.keys(map).map(function (key) {
    return map[key];
  });
  var firstValue = _unitUtils2.default.rmUnit(values[0]);
  var asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn('First breakpoint in $grid-breakpoints must start at 0, but starts at ' + firstValue + '.');
    }
    asserted = false;
  }
  return asserted;
}
function comparable(a, b) {
  return !isNaN(a + b);
}
exports.default = {
  assertAscending: assertAscending,
  assertStartAtZero: assertStartAtZero,
  comparable: comparable
};
});
unwrapExports(variables);

var utils = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowFalseValue = allowFalseValue;
function allowFalseValue(userValue, defaultValue) {
  return userValue === false ? userValue : userValue || defaultValue;
}
});
unwrapExports(utils);

var makeOriginal_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeOriginal;
var _color2 = _interopRequireDefault(color);
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var detectUnit = _unitUtils2.default.detectUnit,
    rmUnit = _unitUtils2.default.rmUnit,
    UNIT = _unitUtils2.default.UNIT;
function makeOriginal() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$red'] = u['$red'] || '#d9534f';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$yellow'] = u['$yellow'] || '#ffd500';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$pink'] = u['$pink'] || '#ff5b77';
  v['$purple'] = u['$purple'] || '#613d7c';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];
  v['$enable-rounded'] = (0, utils.allowFalseValue)(u['$enable-rounded'], true);
  v['$enable-shadows'] = (0, utils.allowFalseValue)(u['$enable-shadows'], false);
  v['$enable-gradients'] = (0, utils.allowFalseValue)(u['$enable-gradients'], false);
  v['$enable-transitions'] = (0, utils.allowFalseValue)(u['$enable-transitions'], true);
  v['$enable-hover-media-query'] = (0, utils.allowFalseValue)(u['$enable-hover-media-query'], false);
  v['$enable-grid-classes'] = (0, utils.allowFalseValue)(u['$enable-grid-classes'], true);
  v['$enable-print-styles'] = (0, utils.allowFalseValue)(u['$enable-print-styles'], true);
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$spacer-x'] = u['$spacer-x'] || v['$spacer'];
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  var detectedUnit = detectUnit(v['$spacer']);
  v['$spacers'] = u['$spacers'] || {
    0: {
      x: 0,
      y: 0
    },
    1: {
      x: rmUnit(v['$spacer-x']) * 0.25 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 0.25 + detectedUnit
    },
    2: {
      x: rmUnit(v['$spacer-x']) * 0.5 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 0.5 + detectedUnit
    },
    3: {
      x: v['$spacer-x'],
      y: v['$spacer-y']
    },
    4: {
      x: rmUnit(v['$spacer-x']) * 1.5 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 1.5 + detectedUnit
    },
    5: {
      x: rmUnit(v['$spacer-x']) * 3 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 3 + detectedUnit
    }
  };
  v['$border-width'] = u['$border-width'] || '1px';
  v['$sizes'] = u['$sizes'] || {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  };
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || (0, _color2.default)(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  (0, variables.assertAscending)(v['$grid-breakpoints'], '$grid-breakpoints');
  (0, variables.assertStartAtZero)(v['$grid-breakpoints']);
  v['$container-max-widths'] = u['$container-max-widths'] || {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  };
  (0, variables.assertAscending)(v['$container-max-widths'], '$container-max-widths');
  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$font-family-sans-serif'] = u['$font-family-sans-serif'] || '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-family-base'] = u['$font-family-base'] || v['$font-family-sans-serif'];
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
  v['$font-weight-base'] = u['$font-weight-base'] || v['$font-weight-normal'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';
  v['$font-size-h1'] = '2.5rem';
  v['$font-size-h2'] = '2rem';
  v['$font-size-h3'] = '1.75rem';
  v['$font-size-h4'] = '1.5rem';
  v['$font-size-h5'] = '1.25rem';
  v['$font-size-h6'] = '1rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = '6rem';
  v['$display2-size'] = '5.5rem';
  v['$display3-size'] = '4.5rem';
  v['$display4-size'] = '3.5rem';
  v['$display1-weight'] = '300';
  v['$display2-weight'] = '300';
  v['$display3-weight'] = '300';
  v['$display4-weight'] = '300';
  v['$display-line-height'] = u['$display-line-height'] || v['$headings-line-height'];
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  v['$small-font-size'] = u['$small-font-size'] || '80%';
  v['$text-muted'] = u['$text-muted'] || v['$gray-light'];
  v['$blockquote-small-color'] = u['$blockquote-small-color'] || v['$gray-light'];
  v['$blockquote-font-size'] = u['$blockquote-font-size'] || rmUnit(v['$font-size-base'], UNIT.REM) * 1.25 + UNIT.REM;
  v['$blockquote-border-color'] = u['$blockquote-border-color'] || v['$gray-lighter'];
  v['$blockquote-border-width'] = u['$blockquote-border-width'] || '.25rem';
  v['$hr-border-color'] = u['$hr-border-color'] || (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$hr-border-width'] = u['$hr-border-width'] || v['$border-width'];
  v['$mark-padding'] = u['$mark-padding'] || '.2em';
  v['$dt-font-weight'] = u['$dt-font-weight'] || v['$font-weight-bold'];
  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || 'inset 0 -.1rem 0 ' + (0, _color2.default)(v['$black']).alpha(0.25).toString();
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];
  v['$list-inline-padding'] = u['$list-inline-padding'] || '5px';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.3';
  v['$line-height-sm'] = u['$line-height-sm'] || '1.5';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$caret-width'] = u['$caret-width'] || '.3em';
  v['$transition-base'] = u['$transition-base'] || 'all .2s ease-in-out';
  v['$transition-fade'] = u['$transition-fade'] || 'opacity .15s linear';
  v['$transition-collapse'] = u['$transition-collapse'] || 'height .35s ease';
  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';
  v['$table-sm-cell-padding'] = u['$table-sm-cell-padding'] || '.3rem';
  v['$table-bg'] = u['$table-bg'] || 'transparent';
  v['$table-inverse-bg'] = u['$table-inverse-bg'] || v['$gray-dark'];
  v['$table-inverse-bg-accent'] = u['$table-inverse-bg-accent'] || (0, _color2.default)(v['$white']).alpha(0.05).toString();
  v['$table-inverse-bg-hover'] = u['$table-inverse-bg-hover'] || (0, _color2.default)(v['$white']).alpha(0.075).toString();
  v['$table-inverse-color'] = u['$table-inverse-color'] || v['$body-bg'];
  v['$table-inverse-border'] = u['$table-inverse-border'] || (0, _color2.default)(v['$gray-dark']).lighten(0.075).toString();
  v['$table-bg-accent'] = u['$table-bg-accent'] || (0, _color2.default)(v['$black']).alpha(0.05).toString();
  v['$table-bg-hover'] = u['$table-bg-hover'] || (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$table-bg-active'] = u['$table-bg-active'] || v['$table-bg-hover'];
  v['$table-head-bg'] = u['$table-head-bg'] || v['$gray-lighter'];
  v['$table-head-color'] = u['$table-head-color'] || v['$gray'];
  v['$table-border-width'] = u['$table-border-width'] || v['$border-width'];
  v['$table-border-color'] = u['$table-border-color'] || v['$gray-lighter'];
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-padding-y'] = u['$btn-padding-y'] || '.5rem';
  v['$btn-line-height'] = u['$btn-line-height'] || '1.25';
  v['$btn-font-weight'] = u['$btn-font-weight'] || v['$font-weight-normal'];
  v['$btn-box-shadow'] = u['$btn-box-shadow'] || 'inset 0 1px 0 ' + (0, _color2.default)(v['$white']).alpha(0.15).toString() + ', 0 1px 1px ' + (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$btn-focus-box-shadow'] = u['$btn-focus-box-shadow'] || '0 0 0 2px ' + (0, _color2.default)(v['$brand-primary']).alpha(0.25).toString();
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$btn-primary-color'] = u['$btn-primary-color'] || v['$white'];
  v['$btn-primary-bg'] = u['$btn-primary-bg'] || v['$brand-primary'];
  v['$btn-primary-border'] = u['$btn-primary-border'] || v['$btn-primary-bg'];
  v['$btn-secondary-color'] = u['$btn-secondary-color'] || v['$gray-dark'];
  v['$btn-secondary-bg'] = u['$btn-secondary-bg'] || v['$white'];
  v['$btn-secondary-border'] = u['$btn-secondary-border'] || '#ccc';
  v['$btn-info-color'] = u['$btn-info-color'] || v['$white'];
  v['$btn-info-bg'] = u['$btn-info-bg'] || v['$brand-info'];
  v['$btn-info-border'] = u['$btn-info-border'] || v['$btn-info-bg'];
  v['$btn-success-color'] = u['$btn-success-color'] || v['$white'];
  v['$btn-success-bg'] = u['$btn-success-bg'] || v['$brand-success'];
  v['$btn-success-border'] = u['$btn-success-border'] || v['$btn-success-bg'];
  v['$btn-warning-color'] = u['$btn-warning-color'] || v['$white'];
  v['$btn-warning-bg'] = u['$btn-warning-bg'] || v['$brand-warning'];
  v['$btn-warning-border'] = u['$btn-warning-border'] || v['$btn-warning-bg'];
  v['$btn-danger-color'] = u['$btn-danger-color'] || v['$white'];
  v['$btn-danger-bg'] = u['$btn-danger-bg'] || v['$brand-danger'];
  v['$btn-danger-border'] = u['$btn-danger-border'] || v['$btn-danger-bg'];
  v['$btn-link-disabled-color'] = u['$btn-link-disabled-color'] || v['$gray-light'];
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-block-spacing-y'] = u['$btn-block-spacing-y'] || '.5rem';
  v['$btn-border-radius'] = u['$btn-border-radius'] || v['$border-radius'];
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  v['$btn-transition'] = u['$btn-transition'] || 'all .2s ease-in-out';
  v['$input-padding-x'] = u['$input-padding-x'] || '.75rem';
  v['$input-padding-y'] = u['$input-padding-y'] || '.5rem';
  v['$input-line-height'] = u['$input-line-height'] || '1.25';
  v['$input-bg'] = u['$input-bg'] || v['$white'];
  v['$input-bg-disabled'] = u['$input-bg-disabled'] || v['$gray-lighter'];
  v['$input-color'] = u['$input-color'] || v['$gray'];
  v['$input-border-color'] = u['$input-border-color'] || (0, _color2.default)(v['$black']).alpha(0.15).toString();
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$input-box-shadow'] = u['$input-box-shadow'] || 'inset 0 1px 1px ' + (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$input-border-radius'] = u['$input-border-radius'] || v['$border-radius'];
  v['$input-border-radius-lg'] = u['$input-border-radius-lg'] || v['$border-radius-lg'];
  v['$input-border-radius-sm'] = u['$input-border-radius-sm'] || v['$border-radius-sm'];
  v['$input-bg-focus'] = u['$input-bg-focus'] || v['$input-bg'];
  v['$input-border-focus'] = u['$input-border-focus'] || (0, _color2.default)(v['$brand-primary']).lighten(0.25).toString();
  v['$input-box-shadow-focus'] = u['$input-box-shadow-focus'] || v['$input-box-shadow'] + ', 0 0 8px rgba(' + v['$input-border-focus'] + ',.6)';
  v['$input-color-focus'] = u['$input-color-focus'] || v['$input-color'];
  v['$input-color-placeholder'] = u['$input-color-placeholder'] || v['$gray-light'];
  v['$input-padding-x-sm'] = u['$input-padding-x-sm'] || '.5rem';
  v['$input-padding-y-sm'] = u['$input-padding-y-sm'] || '.25rem';
  v['$input-padding-x-lg'] = u['$input-padding-x-lg'] || '1.5rem';
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';
  v['$input-height'] = u['$input-height'] || rmUnit(v['$font-size-base'], UNIT.REM) * v['$line-height-base'] + rmUnit(v['$input-padding-y'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-height-sm'] = u['$input-height-sm'] || rmUnit(v['$font-size-sm'], UNIT.REM) * v['$line-height-sm'] + rmUnit(v['$input-padding-y-sm'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-height-lg'] = u['$input-height-lg'] || rmUnit(v['$font-size-lg'], UNIT.REM) * v['$line-height-lg'] + rmUnit(v['$input-padding-y-lg'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-transition'] = u['$input-transition'] || 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';
  v['$form-text-margin-top'] = u['$form-text-margin-top'] || '.25rem';
  v['$form-feedback-margin-top'] = u['$form-feedback-margin-top'] || v['$form-text-margin-top'];
  v['$form-check-margin-bottom'] = u['$form-check-margin-bottom'] || '.5rem';
  v['$form-check-input-gutter'] = u['$form-check-input-gutter'] || '1.25rem';
  v['$form-check-input-margin-y'] = u['$form-check-input-margin-y'] || '.25rem';
  v['$form-check-input-margin-x'] = u['$form-check-input-margin-x'] || '.25rem';
  v['$form-check-inline-margin-x'] = u['$form-check-inline-margin-x'] || '.75rem';
  v['$form-group-margin-bottom'] = u['$form-group-margin-bottom'] || v['$spacer-y'];
  v['$input-group-addon-bg'] = u['$input-group-addon-bg'] || v['$gray-lighter'];
  v['$input-group-addon-border-color'] = u['$input-group-addon-border-color'] || v['$input-border-color'];
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$custom-control-gutter'] = u['$custom-control-gutter'] || '1.5rem';
  v['$custom-control-spacer-x'] = u['$custom-control-spacer-x'] || '1rem';
  v['$custom-control-spacer-y'] = u['$custom-control-spacer-y'] || '.25rem';
  v['$custom-control-indicator-size'] = u['$custom-control-indicator-size'] || '1rem';
  v['$custom-control-indicator-bg'] = u['$custom-control-indicator-bg'] || '#ddd';
  v['$custom-control-indicator-bg-size'] = u['$custom-control-indicator-bg-size'] || '50% 50%';
  v['$custom-control-indicator-box-shadow'] = u['$custom-control-indicator-box-shadow'] || 'inset 0 .25rem .25rem ' + (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$custom-control-disabled-cursor'] = u['$custom-control-disabled-cursor'] || v['$cursor-disabled'];
  v['$custom-control-disabled-indicator-bg'] = u['$custom-control-disabled-indicator-bg'] || v['$gray-lighter'];
  v['$custom-control-disabled-description-color'] = u['$custom-control-disabled-description-color'] || v['$gray-light'];
  v['$custom-control-checked-indicator-color'] = u['$custom-control-checked-indicator-color'] || v['$white'];
  v['$custom-control-checked-indicator-bg'] = u['$custom-control-checked-indicator-bg'] || v['$brand-primary'];
  v['$custom-control-checked-indicator-box-shadow'] = u['$custom-control-checked-indicator-box-shadow'] || 'none';
  v['$custom-control-focus-indicator-box-shadow'] = u['$custom-control-focus-indicator-box-shadow'] || '0 0 0 1px ' + v['$body-bg'] + ', 0 0 0 3px ' + v['$brand-primary'];
  v['$custom-control-active-indicator-color'] = u['$custom-control-active-indicator-color'] || v['$white'];
  v['$custom-control-active-indicator-bg'] = u['$custom-control-active-indicator-bg'] || (0, _color2.default)(v['$brand-primary']).lighten(0.35).toString();
  v['$custom-control-active-indicator-box-shadow'] = u['$custom-control-active-indicator-box-shadow'] || 'none';
  v['$custom-checkbox-radius'] = u['$custom-checkbox-radius'] || v['$border-radius'];
  v['$custom-checkbox-checked-icon'] = u['$custom-checkbox-checked-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$custom-control-checked-indicator-color'] + '" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')';
  v['$custom-checkbox-indeterminate-bg'] = u['$custom-checkbox-indeterminate-bg'] || v['$brand-primary'];
  v['$custom-checkbox-indeterminate-indicator-color'] = u['$custom-checkbox-indeterminate-indicator-color'] || v['$custom-control-checked-indicator-color'];
  v['$custom-checkbox-indeterminate-icon'] = u['$custom-checkbox-indeterminate-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="' + v['$custom-checkbox-indeterminate-indicator-color'] + '" d="M0 2h4"/%3E%3C/svg%3E\')';
  v['$custom-checkbox-indeterminate-box-shadow'] = u['$custom-checkbox-indeterminate-box-shadow'] || 'none';
  v['$custom-radio-radius'] = u['$custom-radio-radius'] || '50%';
  v['$custom-radio-checked-icon'] = u['$custom-radio-checked-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="' + v['$custom-control-checked-indicator-color'] + '"/%3E%3C/svg%3E\')';
  v['$custom-select-padding-x'] = u['$custom-select-padding-x'] || '.75rem ';
  v['$custom-select-padding-y'] = u['$custom-select-padding-y'] || '.375rem';
  v['$custom-select-indicator-padding'] = u['$custom-select-indicator-padding'] || '1rem';
  v['$custom-select-line-height'] = u['$custom-select-line-height'] || v['$input-line-height'];
  v['$custom-select-color'] = u['$custom-select-color'] || v['$input-color'];
  v['$custom-select-disabled-color'] = u['$custom-select-disabled-color'] || v['$gray-light'];
  v['$custom-select-bg'] = u['$custom-select-bg'] || v['$white'];
  v['$custom-select-disabled-bg'] = u['$custom-select-disabled-bg'] || v['$gray-lighter'];
  v['$custom-select-bg-size'] = u['$custom-select-bg-size'] || '8px 10px';
  v['$custom-select-indicator-color'] = u['$custom-select-indicator-color'] || '#333';
  v['$custom-select-indicator'] = u['$custom-select-indicator'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="' + v['$custom-select-indicator-color'] + '" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')';
  v['$custom-select-border-width'] = u['$custom-select-border-width'] || v['$input-btn-border-width'];
  v['$custom-select-border-color'] = u['$custom-select-border-color'] || v['$input-border-color'];
  v['$custom-select-border-radius'] = u['$custom-select-border-radius'] || v['$border-radius'];
  v['$custom-select-focus-border-color'] = u['$custom-select-focus-border-color'] || (0, _color2.default)(v['$brand-primary']).lighten(0.25).toString();
  v['$custom-select-focus-box-shadow'] = u['$custom-select-focus-box-shadow'] || 'inset 0 1px 2px ' + (0, _color2.default)(v['$black']).alpha(0.75).toString() + ', 0 0 5px rgba(' + v['$custom-select-focus-border-color'] + ', .5)';
  v['$custom-select-sm-font-size'] = u['$custom-select-sm-font-size'] || '75%';
  v['$custom-file-height'] = u['$custom-file-height'] || '2.5rem';
  v['$custom-file-width'] = u['$custom-file-width'] || '14rem';
  v['$custom-file-focus-box-shadow'] = u['$custom-file-focus-box-shadow'] || '0 0 0 .075rem ' + v['$white'] + ', 0 0 0 .2rem ' + v['$brand-primary'];
  v['$custom-file-padding-x'] = u['$custom-file-padding-x'] || '.5rem';
  v['$custom-file-padding-y'] = u['$custom-file-padding-y'] || '1rem';
  v['$custom-file-line-height'] = u['$custom-file-line-height'] || '1.5';
  v['$custom-file-color'] = u['$custom-file-color'] || v['$gray'];
  v['$custom-file-bg'] = u['$custom-file-bg'] || v['$white'];
  v['$custom-file-border-width'] = u['$custom-file-border-width'] || v['$border-width'];
  v['$custom-file-border-color'] = u['$custom-file-border-color'] || v['$input-border-color'];
  v['$custom-file-border-radius'] = u['$custom-file-border-radius'] || v['$border-radius'];
  v['$custom-file-box-shadow'] = u['$custom-file-box-shadow'] || 'inset 0 .2rem .4rem ' + (0, _color2.default)(v['$black']).alpha(0.05).toString();
  v['$custom-file-button-color'] = u['$custom-file-button-color'] || v['$custom-file-color'];
  v['$custom-file-button-bg'] = u['$custom-file-button-bg'] || v['$gray-lighter'];
  v['$custom-file-text'] = u['$custom-file-text'] || {
    placeholder: {
      en: 'Choose file...'
    },
    'button-label': {
      en: 'Browse'
    }
  };
  v['$form-icon-success-color'] = u['$form-icon-success-color'] || v['$brand-success'];
  v['$form-icon-success'] = u['$form-icon-success'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-success-color'] + '" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')';
  v['$form-icon-warning-color'] = u['$form-icon-warning-color'] || v['$brand-warning'];
  v['$form-icon-warning'] = u['$form-icon-warning'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-warning-color'] + '" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')';
  v['$form-icon-danger-color'] = u['$form-icon-danger-color'] || v['$brand-danger'];
  v['$form-icon-danger'] = u['$form-icon-danger'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="' + v['$form-icon-danger-color'] + '" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')';
  v['$dropdown-min-width'] = u['$dropdown-min-width'] || '10rem';
  v['$dropdown-padding-y'] = u['$dropdown-padding-y'] || '.5rem';
  v['$dropdown-margin-top'] = u['$dropdown-margin-top'] || '.125rem';
  v['$dropdown-bg'] = u['$dropdown-bg'] || v['$white'];
  v['$dropdown-border-color'] = u['$dropdown-border-color'] || (0, _color2.default)(v['$black']).alpha(0.15).toString();
  v['$dropdown-border-width'] = u['$dropdown-border-width'] || v['$border-width'];
  v['$dropdown-divider-bg'] = u['$dropdown-divider-bg'] || v['$gray-lighter'];
  v['$dropdown-box-shadow'] = u['$dropdown-box-shadow'] || '0 .5rem 1rem rgba(' + v['$black'] + ',.175)';
  v['$dropdown-link-color'] = u['$dropdown-link-color'] || v['$gray-dark'];
  v['$dropdown-link-hover-color'] = u['$dropdown-link-hover-color'] || (0, _color2.default)(v['$gray-dark']).darken(0.05).toString();
  v['$dropdown-link-hover-bg'] = u['$dropdown-link-hover-bg'] || v['$gray-lightest'];
  v['$dropdown-link-active-color'] = u['$dropdown-link-active-color'] || v['$component-active-color'];
  v['$dropdown-link-active-bg'] = u['$dropdown-link-active-bg'] || v['$component-active-bg'];
  v['$dropdown-link-disabled-color'] = u['$dropdown-link-disabled-color'] || v['$gray-light'];
  v['$dropdown-item-padding-x'] = u['$dropdown-item-padding-x'] || '1.5rem';
  v['$dropdown-header-color'] = u['$dropdown-header-color'] || v['$gray-light'];
  v['$zindex-dropdown-backdrop'] = u['$zindex-dropdown-backdrop'] || '990';
  v['$zindex-dropdown'] = u['$zindex-dropdown'] || '1000';
  v['$zindex-fixed'] = u['$zindex-fixed'] || '1030';
  v['$zindex-sticky'] = u['$zindex-sticky'] || '1030';
  v['$zindex-modal-backdrop'] = u['$zindex-modal-backdrop'] || '1040';
  v['$zindex-modal'] = u['$zindex-modal'] || '1050';
  v['$zindex-popover'] = u['$zindex-popover'] || '1060';
  v['$zindex-tooltip'] = u['$zindex-tooltip'] || '1070';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || v['$font-size-lg'];
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || v['$btn-border-radius'];
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || (0, _color2.default)(v['$white']).alpha(0.5).toString();
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || (0, _color2.default)(v['$white']).alpha(0.75).toString();
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || (0, _color2.default)(v['$white']).alpha(1).toString();
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || (0, _color2.default)(v['$white']).alpha(0.25).toString();
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-inverse-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || (0, _color2.default)(v['$white']).alpha(0.1).toString();
  v['$navbar-light-color'] = u['$navbar-light-color'] || (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || (0, _color2.default)(v['$black']).alpha(0.7).toString();
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || (0, _color2.default)(v['$black']).alpha(0.9).toString();
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || (0, _color2.default)(v['$black']).alpha(0.3).toString();
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-light-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$nav-link-padding'] = u['$nav-link-padding'] || '.5em 1em';
  v['$nav-disabled-link-color'] = u['$nav-disabled-link-color'] || v['$gray-light'];
  v['$nav-tabs-border-color'] = u['$nav-tabs-border-color'] || '#ddd';
  v['$nav-tabs-border-width'] = u['$nav-tabs-border-width'] || v['$border-width'];
  v['$nav-tabs-border-radius'] = u['$nav-tabs-border-radius'] || v['$border-radius'];
  v['$nav-tabs-link-hover-border-color'] = u['$nav-tabs-link-hover-border-color'] || v['$gray-lighter'];
  v['$nav-tabs-active-link-hover-color'] = u['$nav-tabs-active-link-hover-color'] || v['$gray'];
  v['$nav-tabs-active-link-hover-bg'] = u['$nav-tabs-active-link-hover-bg'] || v['$body-bg'];
  v['$nav-tabs-active-link-hover-border-color'] = u['$nav-tabs-active-link-hover-border-color'] || '#ddd';
  v['$nav-pills-border-radius'] = u['$nav-pills-border-radius'] || v['$border-radius'];
  v['$nav-pills-active-link-color'] = u['$nav-pills-active-link-color'] || v['$component-active-color'];
  v['$nav-pills-active-link-bg'] = u['$nav-pills-active-link-bg'] || v['$component-active-bg'];
  v['$pagination-padding-x'] = u['$pagination-padding-x'] || '.75rem';
  v['$pagination-padding-y'] = u['$pagination-padding-y'] || '.5rem';
  v['$pagination-padding-x-sm'] = u['$pagination-padding-x-sm'] || '.5rem';
  v['$pagination-padding-y-sm'] = u['$pagination-padding-y-sm'] || '.25rem';
  v['$pagination-padding-x-lg'] = u['$pagination-padding-x-lg'] || '1.5rem';
  v['$pagination-padding-y-lg'] = u['$pagination-padding-y-lg'] || '.75rem';
  v['$pagination-line-height'] = u['$pagination-line-height'] || '1.25';
  v['$pagination-color'] = u['$pagination-color'] || v['$link-color'];
  v['$pagination-bg'] = u['$pagination-bg'] || v['$white'];
  v['$pagination-border-width'] = u['$pagination-border-width'] || v['$border-width'];
  v['$pagination-border-color'] = u['$pagination-border-color'] || '#ddd';
  v['$pagination-hover-color'] = u['$pagination-hover-color'] || v['$link-hover-color'];
  v['$pagination-hover-bg'] = u['$pagination-hover-bg'] || v['$gray-lighter'];
  v['$pagination-hover-border'] = u['$pagination-hover-border'] || '#ddd';
  v['$pagination-active-color'] = u['$pagination-active-color'] || v['$white'];
  v['$pagination-active-bg'] = u['$pagination-active-bg'] || v['$brand-primary'];
  v['$pagination-active-border'] = u['$pagination-active-border'] || v['$brand-primary'];
  v['$pagination-disabled-color'] = u['$pagination-disabled-color'] || v['$gray-light'];
  v['$pagination-disabled-bg'] = u['$pagination-disabled-bg'] || v['$white'];
  v['$pagination-disabled-border'] = u['$pagination-disabled-border'] || '#ddd';
  v['$jumbotron-padding'] = u['$jumbotron-padding'] || '2rem';
  v['$jumbotron-bg'] = u['$jumbotron-bg'] || v['$gray-lighter'];
  v['$state-success-text'] = u['$state-success-text'] || '#3c763d';
  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-success-border'] = u['$state-success-border'] || (0, _color2.default)(v['$state-success-bg']).darken(0.05).toString();
  v['$state-info-text'] = u['$state-info-text'] || '#31708f';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-info-border'] = u['$state-info-border'] || (0, _color2.default)(v['$state-info-bg']).darken(0.07).toString();
  v['$state-warning-text'] = u['$state-warning-text'] || '#8a6d3b';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$mark-bg'] = u['$mark-bg'] || v['$state-warning-bg'];
  v['$state-warning-border'] = u['$state-warning-border'] || (0, _color2.default)(v['$state-warning-bg']).darken(0.05).toString();
  v['$state-danger-text'] = u['$state-danger-text'] || '#a94442';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';
  v['$state-danger-border'] = u['$state-danger-border'] || (0, _color2.default)(v['$state-danger-bg']).darken(0.05).toString();
  v['$card-spacer-x'] = u['$card-spacer-x'] || '1.25rem';
  v['$card-spacer-y'] = u['$card-spacer-y'] || '.75rem';
  v['$card-border-width'] = u['$card-border-width'] || '1px';
  v['$card-border-radius'] = u['$card-border-radius'] || v['$border-radius'];
  v['$card-border-color'] = u['$card-border-color'] || (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$card-border-radius-inner'] = u['$card-border-radius-inner'] || 'calc(' + v['$card-border-radius'] + ' - ' + v['$card-border-width'] + ')';
  v['$card-cap-bg'] = u['$card-cap-bg'] || v['$gray-lightest'];
  v['$card-bg'] = u['$card-bg'] || v['$white'];
  v['$card-link-hover-color'] = u['$card-link-hover-color'] || v['$white'];
  v['$card-img-overlay-padding'] = u['$card-img-overlay-padding'] || '1.25rem';
  detectedUnit = detectUnit(v['$grid-gutter-width-base']);
  v['$card-deck-margin'] = u['$card-deck-margin'] || rmUnit(v['$grid-gutter-width-base'], detectedUnit) / 2 + detectedUnit;
  v['$card-columns-count'] = u['$card-columns-count'] || '3';
  v['$card-columns-gap'] = u['$card-columns-gap'] || '1.25rem';
  v['$card-columns-margin'] = u['$card-columns-margin'] || v['$card-spacer-y'];
  v['$tooltip-max-width'] = u['$tooltip-max-width'] || '200px';
  v['$tooltip-color'] = u['$tooltip-color'] || v['$white'];
  v['$tooltip-bg'] = u['$tooltip-bg'] || v['$black'];
  v['$tooltip-opacity'] = u['$tooltip-opacity'] || '.9';
  v['$tooltip-padding-y'] = u['$tooltip-padding-y'] || '3px';
  v['$tooltip-padding-x'] = u['$tooltip-padding-x'] || '8px';
  v['$tooltip-margin'] = u['$tooltip-margin'] || '3px';
  v['$tooltip-arrow-width'] = u['$tooltip-arrow-width'] || '5px';
  v['$tooltip-arrow-color'] = u['$tooltip-arrow-color'] || v['$tooltip-bg'];
  v['$popover-inner-padding'] = u['$popover-inner-padding'] || '1px';
  v['$popover-bg'] = u['$popover-bg'] || v['$white'];
  v['$popover-max-width'] = u['$popover-max-width'] || '276px';
  v['$popover-border-width'] = u['$popover-border-width'] || v['$border-width'];
  v['$popover-border-color'] = u['$popover-border-color'] || (0, _color2.default)(v['$black']).alpha(0.2).toString();
  v['$popover-box-shadow'] = u['$popover-box-shadow'] || '0 5px 10px ' + (0, _color2.default)(v['$black']).alpha(0.2).toString();
  v['$popover-title-bg'] = u['$popover-title-bg'] || (0, _color2.default)(v['$popover-bg']).darken(0.03).toString();
  v['$popover-title-padding-x'] = u['$popover-title-padding-x'] || '14px';
  v['$popover-title-padding-y'] = u['$popover-title-padding-y'] || '8px';
  v['$popover-content-padding-x'] = u['$popover-content-padding-x'] || '14px';
  v['$popover-content-padding-y'] = u['$popover-content-padding-y'] || '9px';
  v['$popover-arrow-width'] = u['$popover-arrow-width'] || '10px';
  v['$popover-arrow-color'] = u['$popover-arrow-color'] || v['$popover-bg'];
  v['$popover-arrow-outer-width'] = u['$popover-arrow-outer-width'] || rmUnit(v['$popover-arrow-width'], UNIT.PX) + 1 + UNIT.PX;
  v['$popover-arrow-outer-color'] = u['$popover-arrow-outer-color'] || (0, _color2.default)(v['$popover-border-color']).fade(0.5).toString();
  v['$badge-default-bg'] = u['$badge-default-bg'] || v['$gray-light'];
  v['$badge-primary-bg'] = u['$badge-primary-bg'] || v['$brand-primary'];
  v['$badge-success-bg'] = u['$badge-success-bg'] || v['$brand-success'];
  v['$badge-info-bg'] = u['$badge-info-bg'] || v['$brand-info'];
  v['$badge-warning-bg'] = u['$badge-warning-bg'] || v['$brand-warning'];
  v['$badge-danger-bg'] = u['$badge-danger-bg'] || v['$brand-danger'];
  v['$badge-color'] = u['$badge-color'] || v['$white'];
  v['$badge-link-hover-color'] = u['$badge-link-hover-color'] || v['$white'];
  v['$badge-font-size'] = u['$badge-font-size'] || '75%';
  v['$badge-font-weight'] = u['$badge-font-weight'] || v['$font-weight-bold'];
  v['$badge-padding-x'] = u['$badge-padding-x'] || '.4em';
  v['$badge-padding-y'] = u['$badge-padding-y'] || '.25em';
  v['$badge-pill-padding-x'] = u['$badge-pill-padding-x'] || '.6em';
  v['$badge-pill-border-radius'] = u['$badge-pill-border-radius'] || '10rem';
  v['$modal-inner-padding'] = u['$modal-inner-padding'] || '15px';
  v['$modal-dialog-margin'] = u['$modal-dialog-margin'] || '10px';
  v['$modal-dialog-sm-up-margin-y'] = u['$modal-dialog-sm-up-margin-y'] || '30px';
  v['$modal-title-line-height'] = u['$modal-title-line-height'] || v['$line-height-base'];
  v['$modal-content-bg'] = u['$modal-content-bg'] || v['$white'];
  v['$modal-content-border-color'] = u['$modal-content-border-color'] || (0, _color2.default)(v['$black']).alpha(0.2).toString();
  v['$modal-content-border-width'] = u['$modal-content-border-width'] || v['$border-width'];
  v['$modal-content-xs-box-shadow'] = u['$modal-content-xs-box-shadow'] || '0 3px 9px ' + (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$modal-content-sm-up-box-shadow'] = u['$modal-content-sm-up-box-shadow'] || '0 5px 15px ' + (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$modal-backdrop-bg'] = u['$modal-backdrop-bg'] || v['$black'];
  v['$modal-backdrop-opacity'] = u['$modal-backdrop-opacity'] || '.5';
  v['$modal-header-border-color'] = u['$modal-header-border-color'] || v['$gray-lighter'];
  v['$modal-footer-border-color'] = u['$modal-footer-border-color'] || v['$modal-header-border-color'];
  v['$modal-header-border-width'] = u['$modal-header-border-width'] || v['$modal-content-border-width'];
  v['$modal-footer-border-width'] = u['$modal-footer-border-width'] || v['$modal-header-border-width'];
  v['$modal-header-padding'] = u['$modal-header-padding'] || '15px';
  v['$modal-lg'] = u['$modal-lg'] || '800px';
  v['$modal-md'] = u['$modal-md'] || '500px';
  v['$modal-sm'] = u['$modal-sm'] || '300px';
  v['$modal-transition'] = u['$modal-transition'] || 'transform .3s ease-out';
  v['$alert-padding-x'] = u['$alert-padding-x'] || '1.25rem';
  v['$alert-padding-y'] = u['$alert-padding-y'] || '.75rem';
  v['$alert-margin-bottom'] = u['$alert-margin-bottom'] || v['$spacer-y'];
  v['$alert-border-radius'] = u['$alert-border-radius'] || v['$border-radius'];
  v['$alert-link-font-weight'] = u['$alert-link-font-weight'] || v['$font-weight-bold'];
  v['$alert-border-width'] = u['$alert-border-width'] || v['$border-width'];
  v['$alert-success-bg'] = u['$alert-success-bg'] || v['$state-success-bg'];
  v['$alert-success-text'] = u['$alert-success-text'] || v['$state-success-text'];
  v['$alert-success-border'] = u['$alert-success-border'] || v['$state-success-border'];
  v['$alert-info-bg'] = u['$alert-info-bg'] || v['$state-info-bg'];
  v['$alert-info-text'] = u['$alert-info-text'] || v['$state-info-text'];
  v['$alert-info-border'] = u['$alert-info-border'] || v['$state-info-border'];
  v['$alert-warning-bg'] = u['$alert-warning-bg'] || v['$state-warning-bg'];
  v['$alert-warning-text'] = u['$alert-warning-text'] || v['$state-warning-text'];
  v['$alert-warning-border'] = u['$alert-warning-border'] || v['$state-warning-border'];
  v['$alert-danger-bg'] = u['$alert-danger-bg'] || v['$state-danger-bg'];
  v['$alert-danger-text'] = u['$alert-danger-text'] || v['$state-danger-text'];
  v['$alert-danger-border'] = u['$alert-danger-border'] || v['$state-danger-border'];
  v['$progress-height'] = u['$progress-height'] || '1rem';
  v['$progress-font-size'] = u['$progress-font-size'] || '.75rem';
  v['$progress-bg'] = u['$progress-bg'] || v['$gray-lighter'];
  v['$progress-border-radius'] = u['$progress-border-radius'] || v['$border-radius'];
  v['$progress-box-shadow'] = u['$progress-box-shadow'] || 'inset 0 .1rem .1rem ' + (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$progress-bar-color'] = u['$progress-bar-color'] || v['$white'];
  v['$progress-bar-bg'] = u['$progress-bar-bg'] || v['$brand-primary'];
  v['$progress-bar-animation-timing'] = u['$progress-bar-animation-timing'] || '1s linear infinite';
  v['$list-group-color'] = u['$list-group-color'] || v['$body-color'];
  v['$list-group-bg'] = u['$list-group-bg'] || v['$white'];
  v['$list-group-border-color'] = u['$list-group-border-color'] || (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$list-group-border-width'] = u['$list-group-border-width'] || v['$border-width'];
  v['$list-group-border-radius'] = u['$list-group-border-radius'] || v['$border-radius'];
  v['$list-group-item-padding-x'] = u['$list-group-item-padding-x'] || '1.25rem';
  v['$list-group-item-padding-y'] = u['$list-group-item-padding-y'] || '.75rem';
  v['$list-group-hover-bg'] = u['$list-group-hover-bg'] || v['$gray-lightest'];
  v['$list-group-active-color'] = u['$list-group-active-color'] || v['$component-active-color'];
  v['$list-group-active-bg'] = u['$list-group-active-bg'] || v['$component-active-bg'];
  v['$list-group-active-border'] = u['$list-group-active-border'] || v['$list-group-active-bg'];
  v['$list-group-disabled-color'] = u['$list-group-disabled-color'] || v['$gray-light'];
  v['$list-group-disabled-bg'] = u['$list-group-disabled-bg'] || v['$list-group-bg'];
  v['$list-group-link-color'] = u['$list-group-link-color'] || v['$gray'];
  v['$list-group-link-hover-color'] = u['$list-group-link-hover-color'] || v['$list-group-link-color'];
  v['$list-group-link-active-color'] = u['$list-group-link-active-color'] || v['$list-group-color'];
  v['$list-group-link-active-bg'] = u['$list-group-link-active-bg'] || v['$gray-lighter'];
  v['$thumbnail-padding'] = u['$thumbnail-padding'] || '.25rem';
  v['$thumbnail-bg'] = u['$thumbnail-bg'] || v['$body-bg'];
  v['$thumbnail-border-width'] = u['$thumbnail-border-width'] || v['$border-width'];
  v['$thumbnail-border-color'] = u['$thumbnail-border-color'] || '#ddd';
  v['$thumbnail-border-radius'] = u['$thumbnail-border-radius'] || v['$border-radius'];
  v['$thumbnail-box-shadow'] = u['$thumbnail-box-shadow'] || '0 1px 2px ' + (0, _color2.default)(v['$black']).alpha(0.75).toString();
  v['$thumbnail-transition'] = u['$thumbnail-transition'] || 'all .2s ease-in-out';
  v['$figure-caption-font-size'] = u['$figure-caption-font-size'] || '90%';
  v['$figure-caption-color'] = u['$figure-caption-color'] || v['$gray-light'];
  v['$breadcrumb-padding-y'] = u['$breadcrumb-padding-y'] || '.75rem';
  v['$breadcrumb-padding-x'] = u['$breadcrumb-padding-x'] || '1rem';
  v['$breadcrumb-item-padding'] = u['$breadcrumb-item-padding'] || '.5rem';
  v['$breadcrumb-bg'] = u['$breadcrumb-bg'] || v['$gray-lighter'];
  v['$breadcrumb-divider-color'] = u['$breadcrumb-divider-color'] || v['$gray-light'];
  v['$breadcrumb-active-color'] = u['$breadcrumb-active-color'] || v['$gray-light'];
  v['$breadcrumb-divider'] = u['$breadcrumb-divider'] || '"/"';
  v['$close-font-size'] = u['$close-font-size'] || rmUnit(v['$font-size-base']) * 1.5 + detectUnit(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || '0 1px 0 ' + v['$white'];
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';
  v['$code-color'] = u['$code-color'] || '#bd4147';
  v['$code-bg'] = u['$code-bg'] || v['$gray-lightest'];
  v['$kbd-color'] = u['$kbd-color'] || v['$white'];
  v['$kbd-bg'] = u['$kbd-bg'] || v['$gray-dark'];
  v['$pre-color'] = u['$pre-color'] || v['$gray-dark'];
  v['$pre-scrollable-max-height'] = u['$pre-scrollable-max-height'] || '340px';
  return Object.assign({}, u, v);
}
module.exports = exports['default'];
});
unwrapExports(makeOriginal_1);

var makeExtend_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
exports.default = makeExtend;
var _color2 = _interopRequireDefault(color);
var _unitUtils2 = _interopRequireDefault(unitUtils);
var _makeOriginal2 = _interopRequireDefault(makeOriginal_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var rmUnit = _unitUtils2.default.rmUnit,
    UNIT = _unitUtils2.default.UNIT;
function makeExtend() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _makeOriginal2.default)();
  var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var v = original;
  var u = userTheme;
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || rmUnit(v['$card-spacer-y'], UNIT.REM) / 2 + UNIT.REM;
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || rmUnit(v['$card-spacer-x'], UNIT.REM) / 2 + UNIT.REM;
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || (0, _color2.default)(v['$brand-inverse']).darken(0.03).toString();
  v['$navbar-max-height'] = u['$navbar-max-height'] || '400px';
  v['$navbar-height'] = u['$navbar-height'] || '70px';
  v['$menu-push-bg'] = u['$menu-push-bg'] || v['$brand-inverse'];
  v['$menu-push-mini-width'] = u['$menu-push-mini-width'] || '75px';
  v['$menu-push-width'] = u['$menu-push-width'] || '220px';
  v['$menu-transition-duration'] = u['$menu-transition-duration'] || '.6s';
  v['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] || 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  v['$menu-offset-nav-box-shadow'] = u['$menu-offset-nav-box-shadow'] || 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  v['$menu-offset-nav-bg-color'] = u['$menu-offset-nav-bg-color'] || 'white';
  v['$overlay-bg'] = u['$overlay-bg-color'] || 'rgba(0, 0, 0, 0.3)';
  v['$zindex-menu-push'] = u['$zindex-menu-push'] || '2000';
  v['$zindex-overlay'] = u['$zindex-overlay'] || '2050';
  return _extends({}, u, v);
}
module.exports = exports['default'];
});
unwrapExports(makeExtend_1);

var makeTheme_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeTheme;
var _makeOriginal2 = _interopRequireDefault(makeOriginal_1);
var _makeExtend2 = _interopRequireDefault(makeExtend_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _makeExtend2.default)((0, _makeOriginal2.default)(userTheme), userTheme);
}
module.exports = exports['default'];
});
unwrapExports(makeTheme_1);

var makeTheme = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(makeTheme_1).default;
  }
});
Object.defineProperty(exports, 'makeTheme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(makeTheme_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
var makeTheme$1 = unwrapExports(makeTheme);

var theme$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;
exports.default = (0, makeTheme.makeTheme)();
var makeTheme$$1 = exports.makeTheme = makeTheme.makeTheme;
});
unwrapExports(theme$1);

var _mapToCssModules = ( mapToCssModules_es && mapToCssModules ) || mapToCssModules_es;

var Button_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  theme: _theme2.default,
  tag: 'button',
  color: 'secondary'
};
var ButtonUnstyled = function (_React$Component) {
  _inherits(ButtonUnstyled, _React$Component);
  function ButtonUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, ButtonUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonUnstyled.__proto__ || Object.getPrototypeOf(ButtonUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(ButtonUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          active = _omit.active,
          disabled = _omit.disabled,
          block = _omit.block,
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          color = _omit.color,
          outline = _omit.outline,
          size = _omit.size,
          getRef = _omit.getRef,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['active', 'disabled', 'block', 'className', 'cssModule', 'dropup', 'color', 'outline', 'size', 'getRef', 'tag']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'btn', (_cn = {
        dropup: dropup,
        active: active,
        disabled: disabled
      }, _defineProperty(_cn, 'btn-' + size, size), _defineProperty(_cn, 'btn-block', block), _cn), 'btn' + (outline ? '-outline' : '') + '-' + color), cssModule);
      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }
      return _react2.default.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        className: classes,
        ref: getRef
      }, attributes, {
        onClick: this.onClick
      }));
    }
  }]);
  return ButtonUnstyled;
}(_react2.default.Component);
ButtonUnstyled.propTypes = {
  active: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.string,
  dropup: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  theme: _propTypes2.default.object
};
var Button = (0, _styledComponents2.default)(ButtonUnstyled).withConfig({
  displayName: 'Button'
})(['', ' '], function (props) {
  return '\n    ' + (0, buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Button.defaultProps = defaultProps;
exports.default = Button;
module.exports = exports['default'];
});
unwrapExports(Button_1);

var navDivider_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navDivider = navDivider;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$spacer-y': '1rem'
};
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';
  var marginY = '' + _unitUtils2.default.rmUnit(spacerY, _unitUtils2.default.UNIT.REM) / 2 + _unitUtils2.default.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navDivider: navDivider
};
});
unwrapExports(navDivider_1);

var buttonGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonGroup = buttonGroup;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-shadows': true,
  '$enable-rounded': true,
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-y-sm': '.25rem',
  '$btn-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-border-width': '1px'
};
function buttonGroup() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-rounded'];
  var $inputBtnBorderWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$btn-padding-x'];
  var $btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var $btnPaddingXLg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius-sm'];
  return ' \n    /*  Make the div behave like a button */\n    &.btn-group,\n    & .btn-group,\n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      position: relative;\n      display: inline-flex;\n      vertical-align: middle; /* match .btn alignment given font-size hack above */\n    \n      > .btn {\n        position: relative;\n        flex: 0 1 auto;\n        margin-bottom: 0;\n    \n        /* Bring the "active" button to the front */\n        &:focus,\n        &:active,\n        &.active {\n          z-index: 2;\n        }\n        ' + (0, hover_1.hover)('\n          z-index: 2;\n        ') + '\n      }\n    }\n    \n    /*  Prevent double borders when buttons are next to each other */\n    &.btn-group,\n    & .btn-group {\n      .btn + .btn,\n      .btn + .btn-group,\n      .btn-group + .btn,\n      .btn-group + .btn-group {\n        margin-left: -' + $inputBtnBorderWidth + ';\n      }\n    }\n    \n    /* Optional: Group multiple button groups together for a toolbar */\n    &.btn-toolbar,\n    & .btn-toolbar {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n    \n      .input-group {\n        width: auto;\n      }\n    }\n     \n    &.btn-group,\n    & .btn-group {\n      > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n        border-radius: 0;\n      }\n    }\n    \n    /* Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match */\n    &.btn-group,\n    & .btn-group {\n      > .btn:first-child {\n        margin-left: 0;\n    \n        &:not(:last-child):not(.dropdown-toggle) {\n          ' + (0, borderRadius_1.borderRightRadius)($enableRounded, '0') + '\n        }\n      }\n    }\n    /* Need .dropdown-toggle since :last-child does not apply given a .dropdown-menu immediately after it */\n    &.btn-group > .btn:last-child:not(:first-child),\n    & .btn-group > .btn:last-child:not(:first-child),\n    &.btn-group > .dropdown-toggle:not(:first-child),\n    & .btn-group > .dropdown-toggle:not(:first-child) {\n      ' + (0, borderRadius_1.borderLeftRadius)($enableRounded, '0') + '\n    }\n    \n    /* Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group) */\n    &.btn-group > .btn-group,\n    & .btn-group > .btn-group {\n      float: left;\n    }\n    &.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    &.btn-group > .btn-group:first-child:not(:last-child),\n    & .btn-group > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + (0, borderRadius_1.borderRightRadius)($enableRounded, '0') + '\n      }\n    }\n    &.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + (0, borderRadius_1.borderLeftRadius)($enableRounded, '0') + '\n    }\n    \n    /* On active and open, do not show outline */\n    &.btn-group .dropdown-toggle:active,\n    & .btn-group .dropdown-toggle:active,\n    &.btn-group.open .dropdown-toggle,\n    & .btn-group.open .dropdown-toggle {\n      outline: 0;\n    }\n    \n    \n    /* \n    Sizing Remix the default button sizing classes into new ones for easier manipulation.\n    */\n    \n    &.btn-group-sm > .btn,\n    & .btn-group-sm > .btn { \n      ' + (0, buttons.buttonSize)($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n    &.btn-group-lg > .btn,\n    & .btn-group-lg > .btn {\n      ' + (0, buttons.buttonSize)($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n    \n    /*\n     Split button dropdowns\n    */\n    \n    & .btn + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingX, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingX, 0.75) + ';\n    \n      &::after {\n        margin-left: 0;\n      }\n    }\n    \n    & .btn-sm + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingXSm, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingXSm, 0.75) + ';\n    }\n    \n    & .btn-lg + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingXLg, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingXLg, 0.75) + ';\n    }\n    \n    \n    /* The clickable button for toggling the menu */\n    /* Remove the gradient and set the same inset shadow as the :active state */\n    &.btn-group.open .dropdown-toggle {\n      ' + (0, boxShadow_1.boxShadow)($enableShadows, $btnActiveBoxShadow) + '\n    \n      /* Show no shadow for .btn-link since it has no other button styles. */\n      &.btn-link {\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, 'none') + '\n      }\n    }\n\n    /*\n     Vertical button groups\n    */\n    \n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n    \n      .btn,\n      .btn-group {\n        width: 100%;\n      }\n      \n      > .btn + .btn,\n      > .btn + .btn-group,\n      > .btn-group + .btn,\n      > .btn-group + .btn-group {\n        margin-top: -' + $inputBtnBorderWidth + ';\n        margin-left: 0;\n      }\n    }\n    \n    &.btn-group-vertical > .btn,\n    & .btn-group-vertical > .btn {\n      &:not(:first-child):not(:last-child) {\n        border-radius: 0;\n      }\n      &:first-child:not(:last-child) {\n        ' + (0, borderRadius_1.borderBottomRadius)($enableRounded, '0') + '\n      }\n      &:last-child:not(:first-child) {\n        ' + (0, borderRadius_1.borderTopRadius)($enableRounded, '0') + '\n      }\n    }\n    \n    &.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    \n    &.btn-group-vertical > .btn-group:first-child:not(:last-child),\n    & .btn-group-vertical > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + (0, borderRadius_1.borderBottomRadius)($enableRounded, '0') + '      \n      }\n    }\n    &.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + (0, borderRadius_1.borderTopRadius)($enableRounded, '0') + '\n    }\n    \n    &.btn-group {\n      > .btn,\n      > .btn-group > .btn {\n        input[type="radio"],\n        input[type="checkbox"] {\n          position: absolute;\n          clip: rect(0,0,0,0);\n          pointer-events: none;\n        }\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  buttonGroup: buttonGroup
};
});
unwrapExports(buttonGroup_1);

var DropdownMenu_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  children: _propTypes2.default.node.isRequired,
  right: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var defaultProps = {
  tag: 'div'
};
var contextTypes = {
  isOpen: _propTypes2.default.bool.isRequired
};
var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag']);
  var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'dropdown-menu', { 'dropdown-menu-right': right }), cssModule);
  return _react2.default.createElement(Tag, _extends({}, attributes, { tabIndex: '-1', 'aria-hidden': !context.isOpen, role: 'menu', className: classes }));
};
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;
exports.default = DropdownMenu;
module.exports = exports['default'];
});
unwrapExports(DropdownMenu_1);

var tether = createCommonjsModule(function (module, exports) {
(function(root, factory) {
  if (typeof undefined === 'function' && undefined.amd) {
    undefined(factory);
  } else {
    module.exports = factory(commonjsRequire, exports, module);
  }
}(commonjsGlobal, function(require, exports, module) {
'use strict';
var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
var _get = function get(_x8, _x9, _x10) { var _again = true; _function: while (_again) { var object = _x8, property = _x9, receiver = _x10; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x8 = parent; _x9 = property; _x10 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var TetherBase = { modules: [] };
var zeroElement = null;
var deferred = [];
var defer = function defer(fn) {
  deferred.push(fn);
};
var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};
function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  args.forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });
  return out;
}
function getClassName(el) {
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}
function setClassName(el, className) {
  el.setAttribute('class', className);
}
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }
  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }
  return rect;
}
function getScrollParents(el) {
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];
  if (position === 'fixed') {
    return [el];
  }
  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}
    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }
    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }
  parents.push(el.ownerDocument.body);
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }
  return parents;
}
var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();
var zeroPosCache = {};
var getOrigin = function getOrigin() {
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });
    document.body.appendChild(node);
    zeroElement = node;
  }
  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);
    defer(function () {
      delete zeroPosCache[id];
    });
  }
  return zeroPosCache[id];
};
function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
}
function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }
  var docEl = doc.documentElement;
  var box = getActualBoundingClientRect(el);
  var origin = getOrigin();
  box.top -= origin.top;
  box.left -= origin.left;
  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }
  box.top -= docEl.clientTop;
  box.left -= docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;
  return box;
}
function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}
var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';
  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;
  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }
  document.body.removeChild(outer);
  var width = widthContained - widthScroll;
  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}
function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}
function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}
function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}
function updateClasses(el, add, all) {
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });
  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}
var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }
  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }
      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;
          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }
          handler.apply(context, args);
          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);
  return Evented;
})();
function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
  return a + diff >= b && b >= a - diff;
}
var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');
  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
  return '';
})();
var tethers = [];
var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};
function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}
(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;
  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      lastDuration = Math.min(lastDuration - 16, 250);
      pendingTimeout = setTimeout(tick, 250);
      return;
    }
    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      return;
    }
    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }
    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };
  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();
var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};
var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};
var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};
var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;
  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }
  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }
  return { left: left, top: top };
};
var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;
  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }
  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }
  return { left: left, top: top };
};
function addOffset() {
  var out = { top: 0, left: 0 };
  for (var _len3 = arguments.length, offsets = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    offsets[_key3] = arguments[_key3];
  }
  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;
    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }
    out.top += top;
    out.left += left;
  });
  return out;
}
function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }
  return offset;
}
var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');
  var _value$split2 = _slicedToArray(_value$split, 2);
  var top = _value$split2[0];
  var left = _value$split2[1];
  return { top: top, left: left };
};
var parseAttachment = parseOffset;
var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);
  function TetherClass(options) {
    var _this = this;
    _classCallCheck(this, TetherClass);
    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);
    tethers.push(this);
    this.history = [];
    this.setOptions(options, false);
    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });
    this.position();
  }
  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;
      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      }
      if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      }
      return key;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;
      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };
      this.options = extend(defaults, options);
      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;
      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;
      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }
      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }
        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });
      addClass(this.element, this.getClass('element'));
      if (this.options.addTargetClasses !== false) {
        addClass(this.target, this.getClass('target'));
      }
      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }
      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);
      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }
      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }
      if (this.options.enabled !== false) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          }
          var bounds = getBounds(this.target);
          var out = {
            height: bounds.height,
            width: bounds.width,
            top: bounds.top,
            left: bounds.left
          };
          out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
          out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
          out.height = Math.min(innerHeight, out.height);
          out.height -= 2;
          out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
          out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
          out.width = Math.min(innerWidth, out.width);
          out.width -= 2;
          if (out.top < pageYOffset) {
            out.top = pageYOffset;
          }
          if (out.left < pageXOffset) {
            out.left = pageXOffset;
          }
          return out;
        }
        if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;
            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }
          var style = getComputedStyle(target);
          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }
          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };
          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }
          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }
          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }
          return out;
        }
      }
      return getBounds(this.target);
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }
      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }
      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;
      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      if (this.options.addTargetClasses !== false) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;
      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });
      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;
      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;
      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;
      this.disable();
      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;
      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }
      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;
      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }
      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });
      defer(function () {
        if (typeof _this6._addAttachClasses === 'undefined') {
          return;
        }
        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (_this6.options.addTargetClasses !== false) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }
        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;
      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      if (!this.enabled) {
        return undefined;
      }
      this.clearCache();
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
      this.updateAttachClasses(this.attachment, targetAttachment);
      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });
      var width = elementPos.width;
      var height = elementPos.height;
      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }
      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
      var scrollbarSize = undefined;
      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;
      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });
        if (ret === false) {
          return false;
        }
        if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        }
        top = ret.top;
        left = ret.left;
      }
      var next = {
        page: { top: top, left: left },
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };
      var doc = this.target.ownerDocument;
      var win = doc.defaultView;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }
      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }
      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }
      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;
          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });
          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }
      this.move(next);
      this.history.unshift(next);
      if (this.history.length > 3) {
        this.history.pop();
      }
      if (flushChanges) {
        flush();
      }
      return true;
    }
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;
      if (typeof this.element.parentNode === 'undefined') {
        return;
      }
      var same = {};
      for (var type in pos) {
        same[type] = {};
        for (var key in pos[type]) {
          var found = false;
          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }
          if (!found) {
            same[type][key] = true;
          }
        }
      }
      var css = { top: '', left: '', right: '', bottom: '' };
      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }
          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }
          if (window.matchMedia) {
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }
          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
          if (transformKey !== 'msTransform') {
            css[transformKey] += ' translateZ(0)';
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }
          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };
      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });
          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }
          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }
      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }
            currentNode = currentNode.parentNode;
          }
          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];
        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }
      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);
  return TetherClass;
})(Evented);
TetherClass.modules = [];
TetherBase.position = position;
var Tether = extend(TetherClass, TetherBase);
var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }
  if (to === document) {
    to = to.documentElement;
  }
  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);
      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }
      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }
  return to;
}
TetherBase.modules.push({
  position: function position(_ref2) {
    var _this9 = this;
    var top = _ref2.top;
    var left = _ref2.left;
    var targetAttachment = _ref2.targetAttachment;
    if (!this.options.constraints) {
      return true;
    }
    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this9.element);
    });
    var height = _cache.height;
    var width = _cache.width;
    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize2 = this.lastSize;
      width = _lastSize2.width;
      height = _lastSize2.height;
    }
    var targetSize = this.cache('target-bounds', function () {
      return _this9.getTargetBounds();
    });
    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;
    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;
      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });
    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });
    var addClasses = [];
    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);
    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;
      if (typeof attachment === 'undefined') {
        attachment = '';
      }
      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');
        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }
      var bounds = getBoundingRect(_this9, to);
      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }
        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }
      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';
            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';
            eAttachment.top = 'bottom';
          }
        }
        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';
            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';
            eAttachment.top = 'top';
          }
        }
        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }
      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }
        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }
      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }
      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }
        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }
      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }
        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }
      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }
      pin = pin || [];
      var pinned = [];
      var oob = [];
      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }
      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }
      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }
      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }
      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this9.options.pinnedClass !== 'undefined') {
            pinnedClass = _this9.options.pinnedClass;
          } else {
            pinnedClass = _this9.getClass('pinned');
          }
          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }
      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this9.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this9.options.outOfBoundsClass;
          } else {
            oobClass = _this9.getClass('out-of-bounds');
          }
          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }
      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }
      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this9.attachment.top || eAttachment.left !== _this9.attachment.left) {
        _this9.updateAttachClasses(eAttachment, tAttachment);
        _this9.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });
    defer(function () {
      if (_this9.options.addTargetClasses !== false) {
        updateClasses(_this9.target, addClasses, allClasses);
      }
      updateClasses(_this9.element, addClasses, allClasses);
    });
    return { top: top, left: left };
  }
});
TetherBase.modules.push({
  position: function position(_ref3) {
    var _this10 = this;
    var top = _ref3.top;
    var left = _ref3.left;
    var _cache2 = this.cache('element-bounds', function () {
      return getBounds(_this10.element);
    });
    var height = _cache2.height;
    var width = _cache2.width;
    var targetPos = this.getTargetBounds();
    var bottom = top + height;
    var right = left + width;
    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }
    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }
    var allClasses = [];
    var addClasses = [];
    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this10.getClass('abutted') + '-' + side);
    });
    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }
    abutted.forEach(function (side) {
      addClasses.push(_this10.getClass('abutted') + '-' + side);
    });
    defer(function () {
      if (_this10.options.addTargetClasses !== false) {
        updateClasses(_this10.target, addClasses, allClasses);
      }
      updateClasses(_this10.element, addClasses, allClasses);
    });
    return true;
  }
});
TetherBase.modules.push({
  position: function position(_ref4) {
    var top = _ref4.top;
    var left = _ref4.left;
    if (!this.options.shift) {
      return undefined;
    }
    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }
    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];
      var _shift = shift;
      var _shift2 = _slicedToArray(_shift, 2);
      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];
      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }
    top += shiftTop;
    left += shiftLeft;
    return { top: top, left: left };
  }
});
return Tether;
}));
});

var TetherContent_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _reactDom2 = _interopRequireDefault(reactDom);
var _tetherFix2 = _interopRequireDefault(tether);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  isOpen: false,
  tetherRef: function tetherRef() {}
};
var TetherContent = function (_React$Component) {
  _inherits(TetherContent, _React$Component);
  function TetherContent() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, TetherContent);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.handleProps();
    }, _this.componentDidUpdate = function (prevProps) {
      if (_this.props.isOpen !== prevProps.isOpen) {
        _this.handleProps();
      } else if (_this.element) {
        _this.renderIntoSubtree();
      }
    }, _this.componentWillUnmount = function () {
      _this.hide();
    }, _this.getTarget = function () {
      var target = _this.props.tether.target;
      if ((0, _lodash2.default)(target)) {
        return target();
      }
      return target;
    }, _this.getTetherConfig = function () {
      var config = _extends({}, _this.props.tether);
      config.element = _this.element;
      config.target = _this.getTarget();
      return config;
    }, _this.handleDocumentClick = function (e) {
      var container = _this.element;
      if (e.target === container || !container.contains(e.target)) {
        _this.toggle();
      }
    }, _this.handleProps = function () {
      if (_this.props.isOpen) {
        _this.show();
      } else {
        _this.hide();
      }
    }, _this.hide = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
      if (_this.element) {
        document.body.removeChild(_this.element);
        _reactDom2.default.unmountComponentAtNode(_this.element);
        _this.element = null;
      }
      if (_this.tether) {
        _this.tether.destroy();
        _this.tether = null;
        _this.props.tetherRef(_this.tether);
      }
    }, _this.show = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
      _this.element = document.createElement('div');
      _this.element.className = _this.props.className;
      document.body.appendChild(_this.element);
      _this.renderIntoSubtree();
      _this.tether = new _tetherFix2.default(_this.getTetherConfig());
      _this.props.tetherRef(_this.tether);
      _this.tether.position();
      _this.element.childNodes[0].focus();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _this.renderIntoSubtree = function () {
      _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, _this.renderChildren(), _this.element);
    }, _this.renderChildren = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style;
      return _react2.default.cloneElement(children, { style: style });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(TetherContent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return TetherContent;
}(_react2.default.Component);
TetherContent.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  toggle: _propTypes2.default.func.isRequired,
  tether: _propTypes2.default.object.isRequired,
  tetherRef: _propTypes2.default.func,
  style: _propTypes2.default.node
};
TetherContent.defaultProps = defaultProps;
exports.default = TetherContent;
module.exports = exports['default'];
});
unwrapExports(TetherContent_1);

var Dropdown_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _reactDom2 = _interopRequireDefault(reactDom);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
var _DropdownMenu2 = _interopRequireDefault(DropdownMenu_1);
var _TetherContent2 = _interopRequireDefault(TetherContent_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  isOpen: false,
  tag: 'div',
  theme: _theme2.default
};
var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'dropdown', enabled: 'show' },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var DropdownUnstyled = function (_React$Component) {
  _inherits(DropdownUnstyled, _React$Component);
  function DropdownUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, DropdownUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownUnstyled.__proto__ || Object.getPrototypeOf(DropdownUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.getTetherConfig = function (childProps) {
      var target = function target() {
        return _this.getTetherTarget();
      };
      var vElementAttach = 'top';
      var hElementAttach = 'left';
      var vTargetAttach = 'bottom';
      var hTargetAttach = 'left';
      if (childProps.right) {
        hElementAttach = 'right';
        hTargetAttach = 'right';
      }
      if (_this.props.dropup) {
        vElementAttach = 'bottom';
        vTargetAttach = 'top';
      }
      return _extends({}, defaultTetherConfig, {
        attachment: vElementAttach + ' ' + hElementAttach,
        targetAttachment: vTargetAttach + ' ' + hTargetAttach,
        target: target
      }, _this.props.tether);
    }, _this.addEvents = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
    }, _this.removeEvents = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
    }, _this.handleDocumentClick = function (e) {
      var container = _reactDom2.default.findDOMNode(_this);
      if (container.contains(e.target) && container !== e.target) {
        return;
      }
      _this.toggle();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(DropdownUnstyled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getTetherTarget',
    value: function getTetherTarget() {
      var container = _reactDom2.default.findDOMNode(this);
      return container.querySelector('[data-toggle="dropdown"]');
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;
      var _props = this.props,
          tether = _props.tether,
          children = _props.children,
          attrs = _objectWithoutProperties(_props, ['tether', 'children']);
      attrs.toggle = this.toggle;
      return _react2.default.Children.map(_react2.default.Children.toArray(children), function (child) {
        if (tether && child.type === _DropdownMenu2.default) {
          var tetherConfig = _this2.getTetherConfig(child.props);
          return _react2.default.createElement(
            _TetherContent2.default,
            _extends({}, attrs, { tether: tetherConfig }),
            child
          );
        }
        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = (0, _lodash2.default)(this.props, ['toggle', 'tether', 'theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, (_cn = {
        'btn-group': group
      }, _defineProperty(_cn, 'btn-group-' + size, !!size), _defineProperty(_cn, 'dropdown', !group), _defineProperty(_cn, 'show', isOpen), _defineProperty(_cn, 'dropup', dropup), _cn)), cssModule);
      return _react2.default.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes
        }),
        this.renderChildren()
      );
    }
  }]);
  return DropdownUnstyled;
}(_react2.default.Component);
DropdownUnstyled.propTypes = {
  disabled: _propTypes2.default.bool,
  dropup: _propTypes2.default.bool,
  group: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  tether: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  toggle: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  theme: _propTypes2.default.object
};
DropdownUnstyled.childContextTypes = {
  toggle: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};
var Dropdown = (0, _styledComponents2.default)(DropdownUnstyled).withConfig({
  displayName: 'Dropdown'
})(['', ''], function (props) {
  return '\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ' + props.theme['$caret-width'] + ';\n        vertical-align: middle;\n        content: \'\';\n        border-top: ' + props.theme['$caret-width'] + ' solid;\n        border-right: ' + props.theme['$caret-width'] + ' solid transparent;\n        border-left: ' + props.theme['$caret-width'] + ' solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ' + props.theme['$caret-width'] + ' solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown'] + ';\n      display: none; // none by default, but block on "open" of the menu\n      float: left;\n      min-width: ' + props.theme['$dropdown-min-width'] + ';\n      padding: ' + props.theme['$dropdown-padding-y'] + ' 0;\n      margin: ' + props.theme['$dropdown-margin-top'] + ' 0; /* override default ul */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      color: ' + props.theme['$body-color'] + ';\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ' + props.theme['$dropdown-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$dropdown-border-width'] + ' solid ' + props.theme['$dropdown-border-color'] + ';\n      ' + (0, borderRadius_1.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n      ' + (0, boxShadow_1.boxShadow)(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']) + '\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ' + (0, navDivider_1.navDivider)(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']) + '\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ' + props.theme['$dropdown-item-padding-x'] + ';\n      clear: both;\n      font-weight: ' + props.theme['$font-weight-normal'] + ';\n      color: ' + props.theme['$dropdown-link-color'] + ';\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ' + (0, hover_1.hoverFocus)(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$dropdown-link-hover-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-hover-bg'] + '\n      ') + '\n\n      &.active,\n      &:active {\n        color: ' + props.theme['$dropdown-link-active-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-active-bg'] + '\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ' + props.theme['$dropdown-link-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: transparent;\n        ' + (0, conditional.ifThen)(props.theme['$enabled-gradients'], 'background-image: none; /* Remove CSS gradient */') + '\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown-backdrop'] + ';\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you\'re set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ' + props.theme['$dropdown-margin-top'] + ';\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ' + (0, buttonGroup_1.buttonGroup)(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
Dropdown.defaultProps = defaultProps;
exports.default = Dropdown;
module.exports = exports['default'];
});
unwrapExports(Dropdown_1);

var typography_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = typography;
var defaultProps = exports.defaultProps = {
  '$headings-margin-bottom': '0.5rem',
  '$headings-font-family': 'inherit',
  '$headings-font-weight': '500',
  '$headings-line-height': '1.1',
  '$headings-color': 'inherit',
  '$display1-size': '6rem',
  '$display2-size': '5.5rem',
  '$display3-size': '4.5rem',
  '$display4-size': '3.5rem',
  '$display1-weight': '300',
  '$display2-weight': '300',
  '$display3-weight': '300',
  '$display4-weight': '300'
};
function typography() {
  var $headingsMarginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$headings-margin-bottom'];
  var $headingsFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$headings-font-family'];
  var $headingsFontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$headings-font-weight'];
  var $headingsLineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$headings-line-height'];
  var $headingsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$headings-color'];
  var $display1Size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$display1-size'];
  var $display2Size = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$display2-size'];
  var $display3Size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$display3-size'];
  var $display4Size = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$display4-size'];
  var $display1Weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$display1-weight'];
  var $display2Weight = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$display2-weight'];
  var $display3Weight = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$display3-weight'];
  var $display4Weight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$display4-weight'];
  return '\n    margin-bottom: ' + $headingsMarginBottom + ';\n    font-family: ' + $headingsFontFamily + ';\n    font-weight: ' + $headingsFontWeight + ';\n    line-height: ' + $headingsLineHeight + ';\n    color: ' + $headingsColor + ';\n    \n    /* Type Scss */\n\n    &.display-1 {\n      font-size: ' + $display1Size + ';\n      font-weight: ' + $display1Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n\n    }\n    \n    &.display-2 {\n      font-size: ' + $display2Size + ';\n      font-weight: ' + $display2Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-3 {\n      font-size: ' + $display3Size + ';\n      font-weight: ' + $display3Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-4 {\n      font-size: ' + $display4Size + ';\n      font-weight: ' + $display4Weight + ';\n        line-height: ' + $headingsLineHeight + ';\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  typography: typography
};
});
unwrapExports(typography_1);

var H6_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = { theme: _theme2.default };
var H6Unstyled = function (_React$Component) {
  _inherits(H6Unstyled, _React$Component);
  function H6Unstyled() {
    _classCallCheck(this, H6Unstyled);
    return _possibleConstructorReturn(this, (H6Unstyled.__proto__ || Object.getPrototypeOf(H6Unstyled)).apply(this, arguments));
  }
  _createClass(H6Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = _objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return _react2.default.createElement(
        'h6',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H6Unstyled;
}(_react2.default.Component);
H6Unstyled.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  lead: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var H6 = (0, _styledComponents2.default)(H6Unstyled).withConfig({
  displayName: 'H6'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h6'] + ';\n    ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H6.defaultProps = defaultProps;
exports.default = H6;
module.exports = exports['default'];
});
unwrapExports(H6_1);

var DropdownItem_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _H2 = _interopRequireDefault(H6_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'button'
};
var DropdownItem = function (_React$Component) {
  _inherits(DropdownItem, _React$Component);
  function DropdownItem() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, DropdownItem);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _this.getTabIndex = function () {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        return '-1';
      }
      return '0';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          divider = _props.divider,
          disabled = _props.disabled,
          Tag = _props.tag,
          header = _props.header,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'divider', 'disabled', 'tag', 'header']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
        disabled: disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);
      if (Tag === 'button') {
        if (header) {
          Tag = _H2.default;
        } else if (divider) {
          Tag = 'div';
        }
      }
      return _react2.default.createElement(Tag, _extends({
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }, attributes));
    }
  }]);
  return DropdownItem;
}(_react2.default.Component);
DropdownItem.propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  divider: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  header: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
DropdownItem.contextTypes = {
  toggle: _propTypes2.default.func
};
DropdownItem.defaultProps = defaultProps;
exports.default = DropdownItem;
module.exports = exports['default'];
});
unwrapExports(DropdownItem_1);

var tabFocus_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabFocus = tabFocus;
function tabFocus() {
  return "\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via 'outline: initial', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ";
}
exports.default = {
  tabFocus: tabFocus
};
});
unwrapExports(tabFocus_1);

var a_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.a = a;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$link-color': '#0275d8',
  '$link-decoration': 'none',
  '$link-hover-color': '#014C8D',
  '$link-hover-decoration': 'underline',
  '$enable-hover-media-query': false
};
function a() {
  var $linkColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$link-color'];
  var $linkDecoration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$link-decoration'];
  var $linkHoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$link-hover-decoration'];
  var $enableHoverMediaQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$enable-hover-media-query'];
  return '\n    color: ' + $linkColor + ';\n    text-decoration: ' + $linkDecoration + ';\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  \n    ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n      color: ' + $linkHoverColor + ';\n      text-decoration: ' + $linkHoverDecoration + ';\n    ') + '\n    \n    &:focus {\n      ' + (0, tabFocus_1.tabFocus)() + '\n    }\n\n    a:not([href]):not([tabindex]) {\n      color: inherit;\n      text-decoration: none;\n      \n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n        color: inherit;\n        text-decoration: none;\n      ') + '\n\n      &:focus {\n        outline: 0;\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  a: a
};
});
unwrapExports(a_1);

var composeLink_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
exports.default = composeLink;
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  theme: _theme2.default
};
function composeLink(RouterLink) {
  var Link = function (_React$Component) {
    _inherits(Link, _React$Component);
    function Link() {
      _classCallCheck(this, Link);
      return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }
    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _omit = (0, _lodash2.default)(this.props, ['theme']),
            className = _omit.className,
            to = _omit.to,
            attributes = _objectWithoutProperties(_omit, ['className', 'to']);
        return _react2.default.createElement(RouterLink, _extends({ className: className, to: to }, attributes));
      }
    }]);
    return Link;
  }(_react2.default.Component);
  Link.propTypes = {
    className: _propTypes2.default.string,
    to: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.object
  };
  Link = (0, _styledComponents2.default)(Link).withConfig({
    displayName: 'composeLink__Link'
  })(['', ''], function (props) {
    return '\n      ' + (0, a_1.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n    \n      ' + (0, buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n    ';
  });
  Link.defaultProps = defaultProps;
  return Link;
}
module.exports = exports['default'];
});
unwrapExports(composeLink_1);

var A_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeLink = undefined;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
Object.defineProperty(exports, 'composeLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(composeLink_1).default;
  }
});
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'a',
  theme: _theme2.default
};
var AUnstyled = function (_React$Component) {
  _inherits(AUnstyled, _React$Component);
  function AUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, AUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AUnstyled.__proto__ || Object.getPrototypeOf(AUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(AUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          disabled = _omit.disabled,
          cssModule = _omit.cssModule,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'active', 'disabled', 'cssModule', 'color', 'tag']);
      var focus = this.state.focus;
      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, _defineProperty({
          focus: focus,
          active: active,
          disabled: disabled
        }, 'text-' + color, color)), cssModule)
      }, attributes));
    }
  }]);
  return AUnstyled;
}(_react2.default.Component);
AUnstyled.propTypes = {
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var A = (0, _styledComponents2.default)(AUnstyled).withConfig({
  displayName: 'A'
})(['', ''], function (props) {
  return '\n    ' + (0, a_1.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n  ';
});
A.defaultProps = defaultProps;
exports.default = A;
});
unwrapExports(A_1);

var DropdownToggle_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _Button2 = _interopRequireDefault(Button);
var _A2 = _interopRequireDefault(A_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};
var DropdownToggle = function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);
  function DropdownToggle() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, DropdownToggle);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.nav && !_this.props.tag) {
        e.preventDefault();
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(DropdownToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'caret', 'split', 'nav', 'tag']);
      var ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);
      var children = attributes.children || _react2.default.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );
      var Tag = void 0;
      if (nav && !tag) {
        Tag = _A2.default;
        attributes.href = '#';
      } else if (!tag) {
        Tag = _Button2.default;
      } else {
        Tag = tag;
      }
      return _react2.default.createElement(
        Tag,
        _extends({
          className: classes,
          onClick: this.onClick,
          'aria-haspopup': 'true',
          'aria-expanded': this.context.isOpen
        }, attributes),
        children
      );
    }
  }]);
  return DropdownToggle;
}(_react2.default.Component);
DropdownToggle.propTypes = {
  caret: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  'data-toggle': _propTypes2.default.string,
  'aria-haspopup': _propTypes2.default.bool,
  split: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  nav: _propTypes2.default.bool
};
DropdownToggle.contextTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  toggle: _propTypes2.default.func.isRequired
};
DropdownToggle.defaultProps = defaultProps;
exports.default = DropdownToggle;
module.exports = exports['default'];
});
unwrapExports(DropdownToggle_1);

var Dropdown = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Dropdown_1).default;
  }
});
Object.defineProperty(exports, 'DropdownItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DropdownItem_1).default;
  }
});
Object.defineProperty(exports, 'DropdownToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DropdownToggle_1).default;
  }
});
Object.defineProperty(exports, 'DropdownMenu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DropdownMenu_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
unwrapExports(Dropdown);

var ButtonDropdown_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _Dropdown2 = _interopRequireDefault(Dropdown);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var propTypes = {
  children: _propTypes2.default.node,
  toggle: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};
var ButtonDropdown = function ButtonDropdown(props) {
  return _react2.default.createElement(_Dropdown2.default, _extends({}, props, { group: true }));
};
ButtonDropdown.propTypes = propTypes;
exports.default = ButtonDropdown;
module.exports = exports['default'];
});
unwrapExports(ButtonDropdown_1);

var Button = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Button_1).default;
  }
});
Object.defineProperty(exports, 'ButtonDropdown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(ButtonDropdown_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
var Button$1 = unwrapExports(Button);

var breakpoints = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.breakpointNext = breakpointNext;
exports.breakpointMin = breakpointMin;
exports.breakpointMax = breakpointMax;
exports.breakpointInfix = breakpointInfix;
exports.mediaBreakpointUp = mediaBreakpointUp;
exports.mediaBreakpointDown = mediaBreakpointDown;
exports.mediaBreakpointBetween = mediaBreakpointBetween;
exports.mediaBreakpointOnly = mediaBreakpointOnly;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function breakpointNext(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var breakpointNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(breakpoints);
  var n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}
function breakpointMin(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var min = breakpoints[name];
  return min !== '0' ? min : null;
}
function breakpointMax(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var next = breakpointNext(name, breakpoints);
  if (next) {
    var min = _unitUtils2.default.rmUnit(breakpointMin(next, breakpoints), _unitUtils2.default.UNIT.PX);
    return (min - 1).toString() + _unitUtils2.default.UNIT.PX;
  }
  return null;
}
function breakpointInfix(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  return breakpointMin(name, breakpoints) == null ? '' : '-' + name;
}
function mediaBreakpointUp(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  var min = breakpointMin(name, breakpoints);
  if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointDown(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  var max = breakpointMax(name, breakpoints);
  if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointBetween(lower, upper) {
  var breakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];
  var content = arguments[3];
  var min = breakpointMin(lower, breakpoints);
  var max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return '\n      @media (min-width: ' + min + ') and (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  } else if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  } else if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointOnly(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  return mediaBreakpointBetween(name, name, breakpoints, content);
}
exports.default = {
  defaultProps: defaultProps,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly
};
});
unwrapExports(breakpoints);

var navbarToggleable_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbarToggleable = navbarToggleable;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function navbarToggleable() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var next = (0, breakpoints.breakpointNext)(breakpoint, gridBreakpoints);
    var infix = (0, breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    var navbarBreakpoint = '\n      &.navbar-toggleable' + infix + ' {\n        ' + (0, breakpoints.mediaBreakpointDown)(breakpoint, gridBreakpoints, '\n          .navbar-nav {\n            .dropdown-menu {\n              position: static;\n              float: none;\n            }\n          }\n\n          > .container {\n            padding-right: 0;\n            padding-left: 0;\n          }\n        ') + '\n        ' + (0, breakpoints.mediaBreakpointUp)(next, gridBreakpoints, '\n          flex-direction: row;\n          flex-wrap: nowrap;\n          align-items: center;\n  \n          .navbar-nav {\n            flex-direction: row;\n  \n            .nav-link {\n              padding-right: .5rem;\n              padding-left: .5rem;\n            }\n          }\n  \n          /* For nesting containers, have to redeclare for alignment purposes */\n          > .container {\n            display: flex;\n            flex-wrap: nowrap;\n            align-items: center;\n          }\n  \n          .navbar-collapse {\n            display: flex !important;\n            width: 100%;\n\n           }\n           \n          .navbar-toggler {\n            display: none;\n          }\n        ') + '\n      }\n    ';
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return '\n    ' + navbarBreakpointList.join('\n') + '\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navbarToggleable: navbarToggleable
};
});
unwrapExports(navbarToggleable_1);

var navbar_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbar = navbar;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$navbar-padding-y': '0.5rem',
  '$navbar-padding-x': '1rem',
  '$zindex-navbar': '1000',
  '$zindex-navbar-fixed': '1030',
  '$zindex-navbar-sticky': '1030',
  '$navbar-brand-padding-y': '.25rem',
  '$font-size-lg': '1.25rem',
  '$navbar-divider-padding-y': '.425rem',
  '$navbar-toggler-padding-y': '.5rem',
  '$navbar-toggler-padding-x': '.75rem',
  '$navbar-toggler-font-size': '1.25rem',
  '$border-width': '1px',
  '$navbar-toggler-border-radius': '.25rem',
  '$navbar-light-active-color': 'rgba(0,0,0,.9)',
  '$navbar-light-color': 'rgba(0,0,0,.5)',
  '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
  '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
  '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
  '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
  '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
  '$navbar-inverse-color': 'rgba(255,255,255,.5)',
  '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
  '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
  '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
  '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
};
function navbar() {
  var $gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-hover-media-query'];
  var $navbarPaddingY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$navbar-padding-y'];
  var $navbarPaddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$navbar-padding-x'];
  var $zindexNavbar = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$zindex-navbar'];
  var $zindexNavbarFixed = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$zindex-navbar-fixed'];
  var $zindexNavbarSticky = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$zindex-navbar-sticky'];
  var $navbarBrandPaddingY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$navbar-brand-padding-y'];
  var $fontSizeLg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$font-size-lg'];
  var $navbarDividerPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$navbar-divider-padding-y'];
  var $navbarTogglerPaddingY = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$navbar-toggler-padding-y'];
  var $navbarTogglerPaddingX = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$navbar-toggler-padding-x'];
  var $navbarTogglerFontSize = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$navbar-toggler-font-size'];
  var $borderWidth = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$border-width'];
  var $navbarTogglerBorderRadius = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$navbar-toggler-border-radius'];
  var $navbarLightActiveColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$navbar-light-active-color'];
  var $navbarLightColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$navbar-light-color'];
  var $navbarLightHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$navbar-light-hover-color'];
  var $navbarLightTogglerBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$navbar-light-toggler-border'];
  var $navbarLightDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$navbar-light-disabled-color'];
  var $navbarLightTogglerBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$navbar-light-toggler-bg'];
  var $navbarInverseActiveColor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$navbar-inverse-active-color'];
  var $navbarInverseColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$navbar-inverse-color'];
  var $navbarInverseHoverColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$navbar-inverse-hover-color'];
  var $navbarInverseTogglerBorder = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$navbar-inverse-toggler-border'];
  var $navbarInverseTogglerBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$navbar-inverse-toggler-bg'];
  var $navbarInverseDisabledColor = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$navbar-inverse-disabled-color'];
  return '\n    /* Wrapper and base class\n\n     Provide a static navbar from which we expand to create full-width, fixed, and\n     other navbar variations.\n    */\n\n    &.navbar {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      padding: ' + $navbarPaddingY + ' ' + $navbarPaddingX + ';\n    }\n    \n    /*\n     Brand/project name\n    */\n\n    & .navbar-brand {\n      display: inline-block;\n      padding-top: ' + $navbarBrandPaddingY + ';\n      padding-bottom: ' + $navbarBrandPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      font-size: ' + $fontSizeLg + ';\n      line-height: inherit;\n      white-space: nowrap;\n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Navigation\n\n     Custom navbar navigation built on the base .nav styles.\n    */\n\n    &.navbar-nav,\n    & .navbar-nav {\n      display: flex;\n      flex-direction: column; /* cannot use inherit to get the .navbars value */\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    \n      .nav-link {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n    \n    /* Navbar text  */\n\n    & .navbar-text {\n      display: inline-block;\n      padding-top:    .425rem;\n      padding-bottom: .425rem;\n    }\n\n\n    /* Navbar toggle\n\n     Custom button for toggling the .navbar-collapse, powered by the collapse\n     Bootstrap JavaScript plugin.\n    */\n\n    & .navbar-toggler {\n      align-self: flex-start; \n      padding: ' + $navbarTogglerPaddingY + ' ' + $navbarTogglerPaddingX + ';\n      font-size: ' + $navbarTogglerFontSize + ';\n      line-height: 1;\n      background: transparent;\n      border: ' + $borderWidth + ' solid transparent;\n      ' + (0, borderRadius_1.borderRadius)($enableRounded, $navbarTogglerBorderRadius) + '\n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Keep as a separate element so folks can easily override it with another icon or image file as needed. */\n    & .navbar-toggler-icon {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      vertical-align: middle;\n      content: "";\n      background: no-repeat center center;\n      background-size: 100% 100%;\n    }\n    \n    /* Use position on the toggler to prevent it from being auto placed as a flex item and allow easy placement. */\n    & .navbar-toggler-left {\n      position: absolute;\n      left: ' + $navbarPaddingX + ';\n    }\n    & .navbar-toggler-right {\n      position: absolute;\n      right: ' + $navbarPaddingX + ';\n    }\n\n    /* Dark links against a light background */\n    &.navbar-light {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarLightActiveColor + ';\n\n        ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarLightActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarLightColor + ';\n          ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarLightHoverColor + ';') + '\n          &.disabled {\n            color: ' + $navbarLightDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarLightActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarLightTogglerBorder + ';\n      }\n      .navbar-toggler-icon {\n        background-image: ' + $navbarLightTogglerBg + ';\n      }\n  \n      .navbar-text {\n        color: ' + $navbarLightColor + ';\n      }\n    }\n      \n\n    /* White links against a dark background */\n    &.navbar-inverse {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarInverseActiveColor + ';\n        ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarInverseActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarInverseColor + ';\n          ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarInverseHoverColor + ';') + '\n          &.disabled {\n            color: ' + $navbarInverseDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarInverseActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarInverseTogglerBorder + ';\n      }\n      \n      .navbar-toggler-icon {\n        background-image: ' + $navbarInverseTogglerBg + ';\n      }\n    \n      .navbar-text {\n        color: ' + $navbarInverseColor + ';\n      }\n    }\n    \n\n    ' + (0, navbarToggleable_1.navbarToggleable)($gridBreakpoints) + '\n    \n    /* DELETED IN LATEST BOOTSTRAP VERSINO */\n    \n    /* Navbar alignment options\n\n     Display the navbar across the entirety of the page or fixed it to the top or\n     bottom of the page.\n    */\n\n    /* A static, full width modifier with no rounded corners. */\n    &.navbar-full {\n      z-index: ' + $zindexNavbar + ';\n      ' + (0, breakpoints.mediaBreakpointUp)('sm', $gridBreakpoints, (0, borderRadius_1.borderRadius)($enableRounded, '0')) + '\n    }\n\n      /* Fix the top/bottom navbars when screen real estate supports it */\n    &.navbar-fixed-top,\n    &.navbar-fixed-bottom {\n      position: fixed;\n      right: 0;\n      left: 0;\n      z-index: ' + $zindexNavbarFixed + ';\n      /*  Undo the rounded corners */\n      ' + (0, breakpoints.mediaBreakpointUp)('sm', $gridBreakpoints, (0, borderRadius_1.borderRadius)($enableRounded, '0')) + '\n    }\n\n    &.navbar-fixed-top {\n      top: 0;\n    }\n\n    &.navbar-fixed-bottom {\n      bottom: 0;\n    }\n\n    /* position sticky does not seem to be working AJT*/\n\n    &.navbar-sticky-top {\n      position: sticky;\n      top: 0;\n      z-index: ' + $zindexNavbarSticky + ';\n      width: 100%;\n\n        /*  Undo the rounded corners */\n      ' + (0, breakpoints.mediaBreakpointUp)('sm', $gridBreakpoints, (0, borderRadius_1.borderRadius)($enableRounded, '0')) + '\n    }\n\n    & .navbar-divider {\n      float: left;\n      width: ' + $borderWidth + ';\n      padding-top: ' + $navbarDividerPaddingY + ';\n      padding-bottom: ' + $navbarDividerPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      margin-left:  ' + $navbarPaddingX + ';\n      overflow: hidden;\n\n      &::before {\n        content: \'\0a0\';\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navbar: navbar
};
});
unwrapExports(navbar_1);

var Header_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = { theme: _theme2.default };
var Header = _styledComponents2.default.header.withConfig({
  displayName: 'Header'
})(['', '  '], function (props) {
  return '\n    ' + (0, navbar_1.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + (0, conditional.ifThen)(props.shadowHeader, 'box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);') + '\n  ';
});
Header.defaultProps = defaultProps;
exports.default = Header;
module.exports = exports['default'];
});
var Header = unwrapExports(Header_1);

var theme$3 = makeTheme$3();
function makeTheme$3() {
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

var Close_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(React);
var _propTypes2 = _interopRequireDefault(PropTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit$1);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = { theme: _theme2.default };
var CloseUnstyled = function (_React$Component) {
  _inherits(CloseUnstyled, _React$Component);
  function CloseUnstyled() {
    _classCallCheck(this, CloseUnstyled);
    return _possibleConstructorReturn(this, (CloseUnstyled.__proto__ || Object.getPrototypeOf(CloseUnstyled)).apply(this, arguments));
  }
  _createClass(CloseUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          srOnly = _omit['sr-only'],
          onDismiss = _omit.onDismiss,
          closeLabel = _omit.closeLabel,
          cssModule = _omit.cssModule,
          attributes = _objectWithoutProperties(_omit, ['className', 'sr-only', 'onDismiss', 'closeLabel', 'cssModule']);
      return _react2.default.createElement(
        'button',
        _extends({
          className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'close', {
            'sr-only': srOnly
          }), cssModule),
          type: 'button',
          onClick: onDismiss
        }, attributes),
        closeLabel,
        _react2.default.createElement(
          'span',
          null,
          '\xD7'
        )
      );
    }
  }]);
  return CloseUnstyled;
}(_react2.default.Component);
CloseUnstyled.propTypes = {
  theme: _propTypes2.default.object,
  'sr-only': _propTypes2.default.bool,
  className: _propTypes2.default.string,
  closeLabel: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  onDismiss: _propTypes2.default.func.isRequired
};
var Close = (0, _styledComponents2.default)(CloseUnstyled).withConfig({
  displayName: 'Close'
})(['', ''], function (props) {
  return '\n    float: right;\n    font-size: ' + props.theme['$close-font-size'] + ';\n    font-weight: ' + props.theme['$close-font-weight'] + ';\n    line-height: 1;\n    color: ' + props.theme['$close-color'] + ';\n    text-shadow: ' + props.theme['$close-text-shadow'] + ';\n    opacity: .2;\n    \n    &:focus {outline:0;}\n    \n    ' + (0, hover_1.hoverFocus)(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$close-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n        opacity: .5;\n      ') + '\n    \n    /* Additional properties for button version\n     iOS requires the button element instead of an anchor tag.\n     If you want the anchor version, it requires \'href="#"\'.\n     See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n     */\n    \n    /* scss-lint:disable QualifyingElement */\n    &button.close {\n      padding: 0;\n      cursor: pointer;\n      background: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    /* scss-lint:enable QualifyingElement */\n  ';
});
Close.defaultProps = defaultProps;
exports.default = Close;
module.exports = exports['default'];
});
var Close = unwrapExports(Close_1);

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

var createClass$2 = function () {
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

var theme$4 = makeTheme$1(theme$3);
var defaultProps$1 = {
  active: false,
  dismiss: null,
  menuClose: false,
  bgColor: 'primary',
  'menu-right': false,
  'animation-push': false,
  cssModule: null,
  theme: theme$4
};
var OffsetNavUnstyled = function (_React$Component) {
  inherits(OffsetNavUnstyled, _React$Component);
  function OffsetNavUnstyled() {
    classCallCheck(this, OffsetNavUnstyled);
    return possibleConstructorReturn(this, (OffsetNavUnstyled.__proto__ || Object.getPrototypeOf(OffsetNavUnstyled)).apply(this, arguments));
  }
  createClass$2(OffsetNavUnstyled, [{
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
      var cssClasses = _classnames(className, menuDirectionClassNames, defineProperty({}, 'bg-' + bgColor, bgColor));
      return React.createElement(
        'div',
        _extends({
          className: mapToCssModules(_classnames(cssClasses, { active: active }), cssModule)
        }, attributes),
        menuClose && React.createElement(Close, { 'aria-label': 'Close', onDismiss: dismiss }),
        children
      );
    }
  }]);
  return OffsetNavUnstyled;
}(React.Component);
OffsetNavUnstyled.defaultProps = defaultProps$1;
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
var OffsetNav = _styledComponents(OffsetNavUnstyled).withConfig({
  displayName: 'OffsetNav'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n    height: 100%;\n    background-color: ' + props.theme.navigationBar['$menu-offset-nav-bg-color'] + ';\n    z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' + 10);\n  ';
});
OffsetNav.defaultProps = defaultProps$1;

var OffsetNavPush = _styledComponents(OffsetNav).withConfig({
  displayName: 'OffsetNavPush'
})(['', ''], function (props) {
  return '\n    ' + boxShadow_2(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow']) + '\n    &.menu-left {\n      left: -' + props.theme['$menu-offset-width'] + ';\n      ' + transition_2(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n      &.active {\n        left: 0;\n      }\n    }\n    \n    &.menu-right {\n      right: -' + props.theme.navigationBar['$menu-offset-width'] + ';\n      ' + transition_2(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n      &.active {\n        right: 0;\n      }\n    }\n  ';
});

var OffsetNavSlide = _styledComponents(OffsetNav).withConfig({
  displayName: 'OffsetNavSlide'
})(['', ''], function (props) {
  return '\n    ' + transition_2(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n    ' + boxShadow_2(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow']) + '  \n    &.menu-left {\n      left: 0;\n      transform: translateX(-100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      transform: translateX(100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n\n  ';
});

var parseTransition_1 = createCommonjsModule(function (module, exports) {
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
unwrapExports(parseTransition_1);

var transition$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getTransitionUtilities = getTransitionUtilities;
exports.fade = fade;
exports.collapse = collapse;
exports.getReactTransition = getReactTransition;
var _parseTransition2 = _interopRequireDefault(parseTransition_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-transitions': true,
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease'
};
function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$transition-collapse'];
  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n  ';
}
function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  return '\n    .fade,\n     &.fade {\n      opacity: 0;\n      ' + (0, transition_1.transition)(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}
function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];
  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + (0, transition_1.transition)(enableTransitions, transitionCollapse) + '\n    }\n  ';
}
function getReactTransition(enableTransition, transition) {
  var transitionList = (0, _parseTransition2.default)(transition);
  var _transitionList$ = transitionList[0],
      property = _transitionList$.property,
      duration = _transitionList$.duration,
      timingFunction = _transitionList$.timingFunction,
      delay = _transitionList$.delay;
  return (0, transition_1.transition)(enableTransition, property + ' ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms');
}
exports.default = {
  defaultProps: defaultProps,
  getTransitionUtilities: getTransitionUtilities,
  getReactTransition: getReactTransition,
  fade: fade,
  collapse: collapse
};
});
unwrapExports(transition$1);
var transition_3$1 = transition$1.fade;

var theme$5 = makeTheme$1(theme$3);
var defaultProps$2 = {
  active: false,
  theme: theme$5
};
var OverlayUnstyled = function (_React$Component) {
  inherits(OverlayUnstyled, _React$Component);
  function OverlayUnstyled() {
    classCallCheck(this, OverlayUnstyled);
    return possibleConstructorReturn(this, (OverlayUnstyled.__proto__ || Object.getPrototypeOf(OverlayUnstyled)).apply(this, arguments));
  }
  createClass$2(OverlayUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          attributes = objectWithoutProperties(_omit, ['className', 'active']);
      return React.createElement('div', _extends({
        className: _classnames(className, 'fade', {
          show: active
        })
      }, attributes));
    }
  }]);
  return OverlayUnstyled;
}(React.Component);
OverlayUnstyled.defaultProps = defaultProps$2;
OverlayUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  active: PropTypes.bool,
  theme: PropTypes.object
};
var Overlay = _styledComponents(OverlayUnstyled).withConfig({
  displayName: 'Overlay'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ' + props.theme.navigationBar['$zindex-overlay'] + ';\n    background: ' + props.theme.navigationBar['$overlay-bg'] + ';\n    transform: translate3d(100%, 0, 0);\n    ' + transition_3$1(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n    &.show {\n      transform: translate3d(0, 0, 0);\n    }\n  ';
});
Overlay.defaultProps = defaultProps$2;

var theme$$1 = makeTheme$1(theme$3);
var defaultProps = {
  button: {
    component: Button$1,
    className: null
  },
  noOverlay: false,
  belowHeader: false,
  menuClose: false,
  onClick: null,
  shadowHeader: false,
  cssModule: null,
  dismiss: null,
  'nav-top': null,
  light: false,
  inverse: false,
  fixed: false,
  sticky: false,
  bgColor: 'primary',
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
  createClass$2(NavigationBarUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          animationPush = _props['animation-push'],
          menuRight = _props['menu-right'],
          belowHeader = _props.belowHeader;
      var componentAsANodeReact = findDOMNode_1$1(this);
      var node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
      var nodeHeight = node.clientHeight;
      var offsetNav = componentAsANodeReact.querySelector('.offset-header-navbar');
      belowHeader ? offsetNav.style.marginTop = nodeHeight + 'px' : null;
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
      var _omit = lodash_omit$1(this.props, ['theme', 'belowHeader']),
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
      var cssClasses = _classnames('navbar', 'justify-content-between', 'w-100', className, (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, defineProperty(_cn, 'bg-' + bgColor, bgColor), defineProperty(_cn, 'fixed-header-' + fixed, fixed), defineProperty(_cn, 'sticky-' + sticky, sticky), _cn));
      var buttonMenuRight = menuRight ? 'flex-last' : '';
      var buttonClasses = _classnames(buttonMenuRight, classNameButton, {
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
          dismiss: this.handleClick
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
          dismiss: this.handleClick
        },
        children
      );
      return React.createElement(
        'div',
        null,
        !noOverlay && React.createElement(Overlay, { active: this.state.show, onClick: this.handleClick }),
        React.createElement(
          Header,
          _extends({ className: mapToCssModules(_classnames(cssClasses), cssModule), shadowHeader: shadowHeader }, attributes, { innerRef: function innerRef(header) {
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
  belowHeader: PropTypes.bool,
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
var NavigationBar = _styledComponents(NavigationBarUnstyled).withConfig({
  displayName: 'NavigationBar'
})(['', ''], function (props) {
  return '\n    z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' - 10);\n    ' + conditional_1(props.belowHeader, 'z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' + 5);') + '\n    &.fixed-header-' + props.fixed + ' {\n      position: fixed;\n      ' + props.fixed + ': 0;\n    }\n  ';
});
NavigationBar.defaultProps = defaultProps;

var theme$6 = makeTheme$1(theme$3);
var defaultProps$3 = {
  theme: theme$6
};
var PageWrapperUnstyled = function (_React$Component) {
  inherits(PageWrapperUnstyled, _React$Component);
  function PageWrapperUnstyled() {
    classCallCheck(this, PageWrapperUnstyled);
    return possibleConstructorReturn(this, (PageWrapperUnstyled.__proto__ || Object.getPrototypeOf(PageWrapperUnstyled)).apply(this, arguments));
  }
  createClass$2(PageWrapperUnstyled, [{
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
PageWrapperUnstyled.defaultProps = defaultProps$3;
PageWrapperUnstyled.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  theme: PropTypes.object
};
var PageWrapper = _styledComponents(PageWrapperUnstyled).withConfig({
  displayName: 'PageWrapper'
})(['', ''], function (props) {
  return '\n    position: relative;\n    height: 100%;\n    transition: ' + props.theme.navigationBar['$menu-offset-nav-transition'] + ';\n    &.left {\n      left: 0;\n      &.active {\n        left: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n      }\n    }\n    &.right {\n      right: 0;\n      &.active {\n        right: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n      }\n    }\n  ';
});
PageWrapper.defaultProps = defaultProps$3;

exports.NavigationBar = NavigationBar;
exports.PageWrapper = NavigationBar;
exports.makeThemeNavigationBar = makeTheme$3;
exports.themeNavigationBar = theme$3;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=navigation-bar.js.map
