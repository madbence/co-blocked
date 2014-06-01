# co-blocked

[co](http://npmjs.org/package/co) compatible version of [blocked](http://npmjs.org/package/blocked).

## Install

```
$ npm install co-blocked
```

## Usage

```js
var blocked = requrie('co-blocked');
var co = require('co');

setInterval(function(){
  Array(100000000).join('a')
}, 3000);

co(function*() {
  var ms;
  while(ms = yield blocked()) {
    console.log('Blocked for %dms', ms);
  }
})
```

## License

MIT
