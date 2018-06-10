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
        _react2.default.createElement('path', { d: 'M384 368c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z' }),
        _react2.default.createElement('path', { d: 'M342.6 218.1c-13.3 0-26.1 0-38.1 4.1-51.6-43.1-187.8-156.9-198.2-167.5C101.5 49.8 96.2 48 91 48c-8.7 0-17 5.2-21.7 9.6-7 6.6-25.6 26.8-20.5 32 15.3 15.4 27.4 26.5 33.7 32.8 4.8 4.8 13.4-.8 19.6 3.3 5.5 3.6 10 9.9 14.6 14.5 5.3 5.4 9 7.8 8.9 15.7-.1 8.3.5 13.8 6.3 20 4.7 5 9.1 7.6 15.9 7.7 9.2.2 14.9 2.4 20.9 9.9 5.7 7.1 2.1 14.2 4.9 22 1.8 5.1 16 18.1 18 20.1s11 0 13.3 2.3 17.2 15.8 18.2 20.4-3 9-2 13.6c1.2 5.6 7.2 12.1 10.6 17.4-6.8 15.5-10.6 32.6-10.6 50.7 0 68.5 54.4 124 121.4 124S464 408.5 464 340s-54.4-121.9-121.4-121.9zM384 416c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z' })
      )
    )
  );
};

exports.default = Icon;