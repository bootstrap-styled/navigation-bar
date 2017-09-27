'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('../index');

describe('should exports login forms', function () {
  describe('NavigationBar', function () {
    it('should export NavigationBar', function () {
      expect(typeof _index.NavigationBar === 'undefined' ? 'undefined' : _typeof(_index.NavigationBar)).toEqual('function');
    });
    it('should export PageWrapper', function () {
      expect(typeof _index.PageWrapper === 'undefined' ? 'undefined' : _typeof(_index.PageWrapper)).toEqual('function');
    });
    it('should export makeTheme', function () {
      expect(typeof _index.makeThemeNavigationBar === 'undefined' ? 'undefined' : _typeof(_index.makeThemeNavigationBar)).toEqual('function');
    });
    it('should export LoginForm', function () {
      expect(typeof _index.themeNavigationBar === 'undefined' ? 'undefined' : _typeof(_index.themeNavigationBar)).toEqual('object');
    });
  });
});