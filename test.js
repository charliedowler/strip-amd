var test = require("tap").test;
var stripAMD = require('./');

var str = ['define(function() {',
          'var testing = true;',
          'return testing;',
          '});'].join('');

test("make sure the thingie is a thing", function (t) {
  t.equal(stripAMD(str), 'var testing = true;', "strip amd wrapper and return statement");
  t.end();
});
