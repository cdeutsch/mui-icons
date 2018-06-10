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
        _react2.default.createElement('path', { d: 'M149.5 283.3c-51.9 0-83.9 45.7-83.9 95.1 0 22.7-10.1 39.2-33.6 48.1 14.3 27.8 62 37.5 95.7 37.5 8.4 0 15.9-.6 21.8-1.7 35.6-6.4 80.1-24.9 90.7-77 12.3-60.6-38.8-102-90.7-102z' }),
        _react2.default.createElement('path', { d: 'M467.6 60.4c-7.7-7.7-16.8-12.4-26.1-12.4-6.3 0-12.7 2.2-18.8 7L247.6 209.1c-3.4-.9-6.6-1.4-9.7-1.4-4.8 0-9.3 1.2-13.2 3.8l-63.6 52.8c-1.6 1.6-1.5 4.3.1 5.9.5.5 1.1.8 1.7 1 .6 0 1.3.1 1.9.1h.1c47.9 3.4 92 37.8 90.3 90.5 0 .5 0 1-.1 1.5.1.8.5 1.7 1.1 2.3.8.8 1.9 1.2 2.9 1.2s2.1-.4 2.9-1.2h.1l.2-.2 54.3-62.2c4.2-6.4 4.7-14.2 2.4-22.9l154.2-175c11.7-15 7.4-32-5.6-44.9zM161.1 264.2z' })
      )
    )
  );
};

exports.default = Icon;