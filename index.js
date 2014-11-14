(function() {
  var staRegex = /define\(.*?\{/;
  var midRegex = /return.*[^return]*$/;
  var endRegex = /(}\);|}\))$/;

  var stripper = function(contents) {
    if (staRegex.test(contents)) {
      contents = contents.replace(staRegex, '');
      if (midRegex.test(contents)) {
        contents = contents.replace(midRegex, '');
      }
      else if (endRegex.test(contents)) {
        contents = contents.replace(endRegex, '');
      }
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
