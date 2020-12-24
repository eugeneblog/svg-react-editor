"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _pick = _interopRequireDefault(require("lodash/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editor = function Editor(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _pick.default)(props, ['className', 'style']), props.children);
};

var _default = Editor;
exports.default = _default;