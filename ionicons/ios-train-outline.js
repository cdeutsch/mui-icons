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
        _react2.default.createElement('path', { d: 'M347.2 464H370l-54.5-53.2-17.6 5.2 16.1 16H198l16.1-16-17.4-5.2L142 464h22.8l17.1-16h148.2zM256 368c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-78.5c-16.8 0-30.5 13.7-30.5 30.5s13.7 30.5 30.5 30.5 30.5-13.7 30.5-30.5-13.7-30.5-30.5-30.5z' }),
        _react2.default.createElement('path', { d: 'M337 64h-17c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16h-15c-35.3 0-65 27.7-65 63v224c0 35.3 144 65 144 65s144-29.7 144-65V127c0-35.3-27.7-63-63-63zm-128 0h94v16h-94V64zm175 286.5c0 1.6-8.7 14.3-65 31.9-27.2 8.5-53.7 15.4-62.6 17.3-8.9-1.9-35.5-8.7-62.7-17.2-56.5-17.6-64.7-30.3-65.7-31.9V127c0-26.2 22.3-47 49-47h15c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16h17c12.8 0 24.5 4.7 33.4 13.6 8.9 8.9 13.6 20.6 13.6 33.4v223.5z' }),
        _react2.default.createElement('path', { d: 'M336 144v64H176v-64h160m0-16H176c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z' })
      )
    )
  );
};

exports.default = Icon;