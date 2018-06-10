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
        _react2.default.createElement('path', { d: 'M223.9 48c25.7 134.6-96.7 131.9-95.9 267.4.7 111 105 148.6 128.1 148.6 23.2 0 113.9-24.1 126.9-148.6C393.7 214 310.6 107.4 223.9 48zm32.2 408.6s-40.7-33.3-40.7-74.3S256 308 256 308s40.3 33.3 40.3 74.3-40.2 74.3-40.2 74.3zM367.2 314c-2.8 26.9-9.7 50.6-20.5 70.5-8.7 16.2-20.1 29.8-33.7 40.6-6.5 5.2-13.3 9.4-19.8 12.8 10-14.8 19.1-34.1 19.1-55.6 0-47.2-43.8-83.9-45.7-85.4l-10.6-8.7-10.6 8.7c-1.9 1.5-46 38.2-46 85.4 0 20.3 8.2 38.6 17.6 53.1-7.4-4-15.2-9.1-23-15.3-14.7-11.8-26.4-25.6-34.7-41.2-10.1-18.8-15.2-40.2-15.4-63.5-.4-59.4 24.1-88.9 50-120.1 24.6-29.6 49.8-60.1 49.5-113.4 32.5 26.8 61.3 58.5 82.8 91.8 31.4 48.3 45.5 96.8 41 140.3z' })
      )
    )
  );
};

exports.default = Icon;