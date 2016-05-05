onmessage = function(event) {
  importScripts('//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}