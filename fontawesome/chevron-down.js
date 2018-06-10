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
      _react2.default.createElement('path', { d: 'M22.5 10.8l-9.9 9.9q-.3.3-.6.3t-.6-.3l-9.9-9.9q-.3-.2-.3-.6t.3-.6l2.2-2.2q.2-.3.6-.3t.6.3l7.1 7.1 7.1-7.1q.3-.3.6-.3t.6.3l2.2 2.2q.3.3.3.6t-.3.6z' })
    )
  );
};

exports.default = Icon;