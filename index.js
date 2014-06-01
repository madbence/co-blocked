module.exports = function() {
  return function(cb) {
    var start = process.hrtime();
    var interval = 100;
    var threshold = 10;
    var timer = setInterval(function() {
      var delta = process.hrtime(start);
      var nanosec = delta[0] * 1e9 + delta[1]
      var ms = nanosec / 1e6;
      var n = ms - interval;
      start = process.hrtime();
      if(n > threshold) {
        clearInterval(timer);
        cb(null, n);
      }
    }, interval);
  };
};
