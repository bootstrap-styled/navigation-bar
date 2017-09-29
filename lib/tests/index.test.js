'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('should exports login forms', function () {
  describe('NavigationBar', function () {
    it('should export NavigationBar', function () {
      expect(typeof _index2.default === 'undefined' ? 'undefined' : _typeof(_index2.default)).toEqual('function');
    });
    it('should export PageWrapper', function () {
      expect(typeof _index.PageWrapper === 'undefined' ? 'undefined' : _typeof(_index.PageWrapper)).toEqual('function');
    });
    it('should export makeTheme', function () {
      expect(typeof _index.makeTheme === 'undefined' ? 'undefined' : _typeof(_index.makeTheme)).toEqual('function');
    });
    it('should export theme', function () {
      expect(typeof _index.theme === 'undefined' ? 'undefined' : _typeof(_index.theme)).toEqual('object');
    });
  });
});