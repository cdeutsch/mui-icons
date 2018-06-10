'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M352.1 432c0 10.5-1.1 16 3.3 16h55.1c4.7 0 4.1-3.8 5.5-32-8.5 18.7-24 16-63.9 16zM96 416c1.5 28.4.8 32 5.5 32h55.1c4.4 0 3.3-5.5 3.3-16-39.9 0-50.4 3-63.9-16zM384 64H128c-17.6 0-32 14.4-32 32v280c0 22 18 40 40 40h240c22 0 40-18 40-40V96c0-17.6-14.4-32-32-32zM160 376c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm88-88H128.2c-8.8 0-16.2-7.2-16.2-16V144.2c0-8.8 7.4-16.2 16.2-16.2H248v160zm104 88c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm48-104c0 8.8-7.2 16-16 16H264V128h120c8.8 0 16 7.4 16 16.2V272zm-16-160H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16z' })
      )
    )
  );
};

exports.default = Icon;