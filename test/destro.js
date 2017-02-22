'use strict';

import assert from 'assert';
import match, { NoMatchError } from '../lib/destro';

describe('match', () => {
  it('should match only if destructuring pattern can be fulfilled', () => {
    assert(match({ foo: 1 },
                 ({ bar }) => false,
                 ({ foo, bar }) => false,
                 ({ foo }) => true));
  });

  it('should match partial destructuring of iterables', () => {
    assert(match([ 1, 2, 3 ],
                 ([ x ]) => true,
                 ([ x, y, z ]) => false));
  });

  it('should not match patterns with too many values to destructure from iterable', () => {
    assert.throws(
      () => match([ 1 ],
                  ([ x, y ]) => false),
      NoMatchError);
  });

  it('should support spread destructuring of iterables', () => {
    assert.equal(
      match([ 1, 2, 3 ],
            ([ x, ...rest ]) => rest),
      [ 2, 3 ]);
  });
});
