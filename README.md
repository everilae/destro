Destro
======

Pattern matching with ES6 destructuring for Javascript.

Examples
--------

```javascript
> const match = require('destro');
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

```javascript
> match({ noMatchForMe: 1 },
...     ({ foo }) => foo)
Error
    at NoMatchError.Error (native)
```

```javascript
> match({ noMatchForMe: 1 },
...     ({ foo }) => foo,
...     () => '...but I, the default')
'...but I, the default'
```

TODO
----

- Array `...rest` spread support
