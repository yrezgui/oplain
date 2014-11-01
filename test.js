var read = require('node-readability');

read('http://techcrunch.com/2014/09/21/dont-let-ios-8s-accidental-selfie-feature-ruin-your-life/', function(err, article, meta) {
  var dom = article.document;
  var html = '<html><head><meta charset="utf-8"><title>'+dom.title+'</title></head><body><h1>'+article.title+'</h1>'+article.content+'</body></html>';

  console.log(html);
});