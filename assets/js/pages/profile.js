!function(n){var t={};function s(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=n,s.c=t,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)s.d(n,t,function(e){return r[e]}.bind(null,t));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s(s.s=16)}({"./app/assets/es6/pages/profile.js":function(module,exports){eval("class PagesProfile {\r\n\r\n    static init() {\r\n\r\n        $('#list-view-btn').on('click', (e) => {\r\n            $('#list-view').removeClass('d-none');\r\n            $('#card-view').addClass('d-none')\r\n            $(e.currentTarget).addClass('active');\r\n            $('#card-view-btn').removeClass('active');\r\n        })\r\n\r\n        $('#card-view-btn').on('click', (e) => {\r\n            $('#card-view').removeClass('d-none');\r\n            $('#list-view').addClass('d-none');\r\n            $(e.currentTarget).addClass('active');\r\n            $('#list-view-btn').removeClass('active');\r\n        })\r\n    }\r\n}\r\n\r\n$(() => { PagesProfile.init(); });\r\n\r\n\n\n//# sourceURL=webpack:///./app/assets/es6/pages/profile.js?")},16:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__(/*! C:\\Users\\Nate\\Desktop\\themeforest selling\\Enlink-bootstrap\\v1.0.0\\Enlink - Bootstrap Admin Template\\demo\\app\\assets\\es6\\pages\\profile.js */"./app/assets/es6/pages/profile.js");\n\n\n//# sourceURL=webpack:///multi_./app/assets/es6/pages/profile.js?')}});