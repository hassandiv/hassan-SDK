!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).hassanSdk=e()}(this,function(){function t(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,e(t,o)}function e(t,o){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},e(t,o)}var o,n=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://the-one-api.dev/v2/"}return t.prototype.invoke=function(t){return fetch(""+this.baseUrl+t,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.apiKey}}).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}(),r="movie",i=/*#__PURE__*/function(e){function o(){return e.apply(this,arguments)||this}t(o,e);var n=o.prototype;return n.getMovieById=function(t){return this.invoke(r+"/"+t)},n.getMovieQuote=function(t){return this.invoke(r+"/"+t+"/quote")},n.getLordOfTheRingsMovies=function(){return this.invoke(r+"?limit=3&offset=5")},o}(n),p=/*#__PURE__*/function(e){function o(){return e.apply(this,arguments)||this}return t(o,e),o}(n);return o=p,[i].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(o.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})}),p});
