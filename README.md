Destro
======

Pattern matching with ES6 destructuring for Javascript.

Examples
--------

```javascript
> match({ foo: 1 },
...     ({ bar }) => 'got bar',
...     ({ foo }) => 'got foo')
'got foo'
```

```javascript
> match([ 1, 2 ],
...     ([ x, y, z ]) => 'too many!',
...     ([ x, y ]) => 'just right')
'just right'
```

TODO
----

- Array `...rest` spread support
