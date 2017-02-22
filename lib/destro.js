'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = match;

require('babel-polyfill');

var _marked = [iteratorProxy].map(regeneratorRuntime.mark);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseMatchError = function (_Error) {
  _inherits(BaseMatchError, _Error);

  function BaseMatchError() {
    _classCallCheck(this, BaseMatchError);

    return _possibleConstructorReturn(this, (BaseMatchError.__proto__ || Object.getPrototypeOf(BaseMatchError)).apply(this, arguments));
  }

  return BaseMatchError;
}(Error);

var BadPatternError = function (_BaseMatchError) {
  _inherits(BadPatternError, _BaseMatchError);

  function BadPatternError() {
    _classCallCheck(this, BadPatternError);

    return _possibleConstructorReturn(this, (BadPatternError.__proto__ || Object.getPrototypeOf(BadPatternError)).apply(this, arguments));
  }

  return BadPatternError;
}(BaseMatchError);

var NoMatchError = function (_BaseMatchError2) {
  _inherits(NoMatchError, _BaseMatchError2);

  function NoMatchError() {
    _classCallCheck(this, NoMatchError);

    return _possibleConstructorReturn(this, (NoMatchError.__proto__ || Object.getPrototypeOf(NoMatchError)).apply(this, arguments));
  }

  return NoMatchError;
}(BaseMatchError);

function iteratorProxy(target) {
  return regeneratorRuntime.wrap(function iteratorProxy$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(target, 't0', 1);

        case 1:
          throw BadPatternError;

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var handler = {
  get: function get(target, property, receiver) {
    if (property === Symbol.iterator) {
      if (target[property]) return function () {
        return iteratorProxy(target);
      };

      throw BadPatternError;
    }

    if (typeof property === 'string' && !target.hasOwnProperty(property)) throw BadPatternError;

    return target[property];
  }
};

function match(arg) {
  var argProxy = new Proxy(arg, handler);

  for (var _len = arguments.length, patterns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    patterns[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var p = _step.value;

      try {
        return p(argProxy);
      } catch (e) {
        if (e !== BadPatternError) throw e;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  throw new NoMatchError();
}
module.exports = exports['default'];