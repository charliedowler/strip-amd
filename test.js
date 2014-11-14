var test = require("tap").test;
var stripAMD = require('./');

var str = ['define(function() {',
          'var testing = true;',
          'return testing;',
          '});'].join('');

var str2 = ['define(function(){',
           'var testing = true;',
           'module.exports = testing;',
           '});'].join('');

var str3 = ['function() {',
            'return true;',
           '}'].join('');

test("make sure the thingie is a thing", function (t) {
  t.equal(stripAMD(str), 'var testing = true;', "strip amd wrapper and return statement");
  t.equal(stripAMD(str2), 'var testing = true;', "strip amd wrapper and module.exports");
  t.equal(stripAMD(str3), str3, "only strip if define");
  t.end();
});
