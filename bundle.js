(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('legacy');

// I would expect to see the string 'A legacy global variable' written to
// the console after executing this statement, since it was "exported"
// in package.json.
console.log('The value of legacyGlobal is: ' + window.legacyGlobal);

},{"legacy":2}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*

Legacy code may have been written outside of a closure.
Therefore, in the legacy system, this variable would be "global".

*/
var legacyGlobal = 'A legacy global variable';

; browserify_shim__define__module__export__(typeof legacyGlobal != "undefined" ? legacyGlobal : window.legacyGlobal);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
