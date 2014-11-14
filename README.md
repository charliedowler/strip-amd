## strip-amd [![Build Status][travis-image]][travis-url]

> Strip an AMD wrapper from body of text

## Installation
```shell
$ npm install --save strip-amd
```

### Usage

```js
var str = ['define(function() {',
          'var testing = true;',
          'return testing;',
          '});'].join('');

var stripAMD = require('strip-amd');
console.log(stripAMD(str));
// "var testing = true;"
```

## Release History
- 2014-11-14 v0.1.0 Initial release

[travis-url]: http://travis-ci.org/charliedowler/strip-amd
[travis-image]: https://secure.travis-ci.org/charliedowler/strip-amd.png?branch=master
