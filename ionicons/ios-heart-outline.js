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
        _react2.default.createElement('path', { d: 'M359.385 80C319.965 80 277.17 97.6 256 132.8 234.83 97.6 192.034 80 152.615 80 83.647 80 32 123.238 32 195.78c0 31.287 12.562 71.923 40.923 105.656 28.36 33.735 45.23 51.7 100.153 88C228 425.738 256 432 256 432s28-6.262 82.924-42.564c54.923-36.3 71.794-54.265 100.153-88C467.437 267.703 480 227.066 480 195.78 480 123.237 428.353 80 359.385 80zm67.445 211.14c-26.852 31.94-42.18 48.896-96.73 84.948-40.236 26.596-65.25 36.3-74.1 39.233-8.85-2.932-33.865-12.638-74.103-39.232-54.548-36.052-69.876-53.006-96.73-84.948-12.064-14.35-21.856-31.274-28.315-48.943C51.062 226.355 48 210.304 48 195.78c0-30.285 10.13-55.644 29.297-73.336 9.14-8.437 20.158-14.992 32.752-19.484 12.944-4.62 27.265-6.96 42.565-6.96 38.018 0 73.217 17.682 89.674 45.046L256 163.844l13.71-22.798C286.17 113.682 321.37 96 359.386 96c15.3 0 29.62 2.34 42.566 6.96 12.595 4.492 23.613 11.047 32.753 19.483C453.87 140.136 464 165.495 464 195.78c0 14.524-3.062 30.575-8.854 46.417-6.458 17.668-16.25 34.592-28.316 48.944z' })
      )
    )
  );
};

exports.default = Icon;