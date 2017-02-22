'use strict';

import 'babel-polyfill';

class BaseMatchError extends Error {}
class BadPatternError extends BaseMatchError {}
class NoMatchError extends BaseMatchError {}


function* iteratorProxy(target) {
  yield* target;
  throw BadPatternError;
}

const handler = {
  get(target, property, receiver) {
    if (property === Symbol.iterator) {
      if (target[property])
	return () => iteratorProxy(target);

      throw BadPatternError;
    }
    
    if (typeof property === 'string' && !target.hasOwnProperty(property))
      throw BadPatternError;

    return target[property];
  }
};


export default function match(arg, ...patterns) {
  const argProxy = new Proxy(arg, handler);

  for (const p of patterns) {
    try {
      return p(argProxy);
    } catch (e) {
      if (e !== BadPatternError)
        throw e;
    }
  }

  throw new NoMatchError();
}
