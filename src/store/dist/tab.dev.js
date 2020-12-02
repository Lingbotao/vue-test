"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    //使用VueX
    tabsList: [{
      path: '/',
      name: 'home',
      label: '首页',
      icon: 'home'
    }]
  },
  mutations: {
    setMenu: function setMenu(state, val) {
      state.menu = val;

      _jsCookie["default"].set('menu', JSON.stringify(val));
    },
    clearMenu: function clearMenu(state) {
      state.menu = [];

      _jsCookie["default"].remove('menu');
    },
    addMenu: function addMenu(state, router) {
      if (!_jsCookie["default"].get('menu')) {
        return;
      }

      var menu = JSON.parse(_jsCookie["default"].get('menu'));
      state.menu = menu;
      var currentMenu = [{
        path: '/',
        component: function component() {
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("@/views/Main"));
          });
        },
        children: []
      }];
      menu.forEach(function (item) {
        if (item.children) {
          var _currentMenu$0$childr;

          item.children = item.children.map(function (item) {
            item.component = function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("@/views/".concat(item.url)));
              });
            };

            return item;
          });

          (_currentMenu$0$childr = currentMenu[0].children).push.apply(_currentMenu$0$childr, _toConsumableArray(item.children));
        } else {
          item.component = function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("@/views/".concat(item.url)));
            });
          };

          currentMenu[0].children.push(item);
        }
      });
      router.addRoutes(currentMenu);
    },
    selectMenu: function selectMenu(state, val) {
      //选择的菜单
      if (val.name !== 'home') {
        state.currentMenu = val;
        var result = state.tabsList.findIndex(function (item) {
          return item.name === val.name;
        });
        result === -1 ? state.tabsList.push(val) : '';

        _jsCookie["default"].set('tagList', JSON.stringify(state.tabsList));
      } else {
        state.currentMenu = null;
      } // val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)

    },
    getMenu: function getMenu(state) {
      if (_jsCookie["default"].get('tagList')) {
        var tagList = JSON.parse(_jsCookie["default"].get('tagList'));
        state.tabsList = tagList;
      }
    },
    closeTab: function closeTab(state, val) {
      var result = state.tabsList.findIndex(function (item) {
        return item.name === val.name;
      });
      state.tabsList.splice(result, 1);

      _jsCookie["default"].set('tagList', JSON.stringify(state.tabsList));
    },
    collapseMenu: function collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {}
};
exports["default"] = _default;