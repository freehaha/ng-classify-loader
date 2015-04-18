var classify = require('ng-classify')

module.exports = function(content) {
  var options = this.options || {};
  if(options.ngClassify) {
    options = options.ngClassify;
  } else {
    options = null;
  };
  return classify(content, options);
};
