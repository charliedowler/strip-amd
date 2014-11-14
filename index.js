(function() {
  var staRegex = /define\(.*?\{/;
  var retRegex = /return.*[^return]*$/;
  var modRegex = /module.exports(.|)=(.|)+/;
  var endRegex = /(}\);|}\))$/;

  var stripper = function(contents) {
    if (staRegex.test(contents)) {
      contents = contents.replace(staRegex, '')
        .replace(endRegex, '');

      if (retRegex) contents = contents.replace(retRegex, '');
      if (modRegex) contents = contents.replace(modRegex, '');
    }
    return contents;
  };

  if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = stripper;
  } else if (typeof define !== 'undefined') {
    define(function(require, exports, module) {
      module.exports = stripper;
    }, []);
  } else if (typeof window !== 'undefined') {
    window.strip_amd = stripper;
  }
})();
