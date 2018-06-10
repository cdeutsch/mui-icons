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
        _react2.default.createElement('path', { d: 'M448 405.333V106.667C448 83.197 428.802 64 405.333 64H106.667C83.197 64 64 83.198 64 106.667v298.666C64 428.803 83.198 448 106.667 448h298.666c23.47 0 42.667-19.198 42.667-42.667zM181.333 288l53.334 64 74.666-96 96 128H106.667l74.666-96z' })
      )
    )
  );
};

exports.default = Icon;