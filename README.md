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
