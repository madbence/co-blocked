var blocked = require('./');
var co = require('co');

setInterval(function(){
  Array(10000000).join('a');
}, 500);

setInterval(function(){
  Array(100000000).join('a');
}, 3000);

co(function*() {
  var ms;
  while(ms = yield blocked()) {
    console.log('Blocked for %dms', ms)
  }
})();
