parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KL8V":[function(require,module,exports) {
module.exports="/global_barristers/site_slide_bg-4-2.d96dcddc.webp";
},{}],"TpuF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(require("handlebars/dist/handlebars.runtime"));function e(n){return n&&n.__esModule?n:{default:n}}const l=n.default.template({compiler:[8,">= 4.3.0"],main:function(n,e,l,a,t){var r,o=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,u=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<main>\r\n  <div class='page-header' style='background-image: url("+u("function"==typeof(r=null!=(r=i(l,"image")||(null!=e?i(e,"image"):e))?r:s)?r.call(o,{name:"image",hash:{},data:t,loc:{start:{line:2,column:56},end:{line:2,column:65}}}):r)+");'></div>\r\n  <div class='container not_found'>\r\n    <h1 class='not_found'>\r\n      404\r\n    </h1>\r\n    <h2 class='sub_not_found'>Сторінку не знайдено</h2>\r\n\r\n    <p class='sub_not_par' style='opacity: 1;'>Запитану сторінку не знайдено. Можливо вона була\r\n      видалена або переміщена за новою адресою.</p>\r\n\r\n    <p class='sub_not_par' style='opacity: 1;'></p>\r\n\r\n    <p style='opacity: 1; font-size: 14px'><a href='"+u("function"==typeof(r=null!=(r=i(l,"HOST")||(null!=e?i(e,"HOST"):e))?r:s)?r.call(o,{name:"HOST",hash:{},data:t,loc:{start:{line:14,column:52},end:{line:14,column:60}}}):r)+"/"+u("function"==typeof(r=null!=(r=i(l,"lang")||(null!=e?i(e,"lang"):e))?r:s)?r.call(o,{name:"lang",hash:{},data:t,loc:{start:{line:14,column:61},end:{line:14,column:69}}}):r)+"' class='link_to_home'>Головна\r\n        сторінка</a></p>\r\n  </div>\r\n</main>"},useData:!0});var a=l;exports.default=a;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"xFI3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../../images/slider/site_slide_bg-4-2.webp")),t=r(require("./notFound.hbs"));function r(e){return e&&e.__esModule?e:{default:e}}const o=document.location.origin,u=r=>(0,t.default)({image:e.default,HOST:o,lang:r});var i=u;exports.default=i;
},{"../../../images/slider/site_slide_bg-4-2.webp":"KL8V","./notFound.hbs":"TpuF"}]},{},[], null)
//# sourceMappingURL=/global_barristers/notFound.ebf192d2.js.map