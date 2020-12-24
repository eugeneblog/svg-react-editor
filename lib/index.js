'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'Flow', {
  enumerable: true,
  get: function get() {
    return _Flow.default;
  },
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require('react'));

  _react = function _react() {
    return data;
  };

  return data;
}

var _Editor = _interopRequireDefault(require('./components/Editor'));

var _Flow = _interopRequireDefault(require('./components/Flow'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ref:
// - https://umijs.org/plugins/api
var _default = _Editor.default;
exports.default = _default;
