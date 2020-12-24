"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

var _Editor = _interopRequireDefault(require("./components/Editor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ref:
// - https://umijs.org/plugins/api
// import { join } from 'path';
// import { IApi } from '@umijs/types';
// export function aa(api: IApi) {
//   api.logger.info('use plugin');
//
//   api.modifyHTML(($) => {
//     $('body').prepend(`<h1>hello umi plugin</h1>`);
//     return $;
//   });
//
//   // @ts-ignore
//   api.addUIPlugin(() => join(__dirname, '../dist/index.umd.js'));
//
//   // @ts-ignore
//   api.onUISocket(({ action, failure, success }) => {
//     if (action.type === 'org.xiaohuoni.demo.test') {
//       success({
//         data: 'demo.test',
//       });
//     }
//   });
// }
var _default = _Editor.default;
exports.default = _default;