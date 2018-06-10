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
        _react2.default.createElement('path', { d: 'M214.1 87.3s0 .1-.1.1c-12.8 26.7-19.3 55.5-19.3 85.4 0 52.8 20.5 102.5 57.8 139.8 37.3 37.4 86.8 57.9 139.6 57.9 3.2 0 6.4-.1 9.6-.2h.2c-33.6 39.2-82.2 61.6-133.7 61.6-47.1 0-91.3-18.4-124.6-51.7C110.3 346.9 92 302.6 92 255.4c0-38.3 12-74.7 34.8-105.4 11-14.7 24.1-27.6 39-38.3 14.8-10.6 31.1-18.8 48.3-24.4M246.9 64c-12.6 1.4-24.9 4-36.6 7.7C132.4 96.4 76 169.3 76 255.4 76 361.8 162 448 268.2 448c58.7 0 111.2-26.4 146.5-67.9 8.1-9.5 15.2-19.8 21.4-30.8-11.4 2.8-23.1 4.5-35 5.1-2.9.1-5.9.2-8.8.2-48.4 0-94-18.9-128.2-53.2-34.3-34.3-53.1-80-53.1-128.5 0-27.6 6.1-54.3 17.7-78.5 4.9-10.7 11-20.9 18.2-30.4z' })
      )
    )
  );
};

exports.default = Icon;