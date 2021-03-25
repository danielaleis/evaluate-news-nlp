var Client=function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=9)}([function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],c=e.base?i[0]+e.base:i[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=s(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:g(p,e),references:1}),o.push(u)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function A(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,b=0;function g(n,e){var t,o,r;if(e.singleton){var i=b++;t=f||(f=l(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=l(e),o=A.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);a[r].references--}for(var i=c(n,e),l=0;l<t.length;l++){var u=s(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){"use strict";function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var e=o(n,4),t=e[1],r=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */"),c=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(c).concat([s]).join("\n")}return[t].join("\n")}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";var o=t(1),r=t.n(o),i=t(2),a=t.n(i)()(r.a);a.push([n.i,'body{font:100% "Oswald",sans-serif;background:#6464db}\n',"",{version:3,sources:["webpack://./src/client/styles/main.scss"],names:[],mappings:"AAIA,KACE,6BALgC,CAMhC,kBAL+B",sourcesContent:["$font-family: 'Oswald', sans-serif;;\n$primary-color:rgb(100, 100, 219);\n$secondary-color: grey;\n\nbody {\n  font: 100% $font-family;\n  background: $primary-color;\n}"],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";var o=t(1),r=t.n(o),i=t(2),a=t.n(i)()(r.a);a.push([n.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n","",{version:3,sources:["webpack://./src/client/styles/reset.scss"],names:[],mappings:"AAKA,EACI,qBAAsB,CACzB,2ZAeA,QAAS,CACT,SAAU,CACV,QAAS,CACT,cAAe,CACf,YAAa,CACb,uBAAwB,CACxB,8EAIA,aAAc,CACd,KAEA,aAAc,CACd,MAEA,eAAgB,CAChB,aAEA,WAAY,CACZ,oDAGA,UAAW,CACX,YAAa,CACb,MAEA,wBAAyB,CACzB,gBAAiB,CACjB,GAEG,oBAAqB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\nul {\n    list-style-type: none;\n}\n"],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";var o=t(1),r=t.n(o),i=t(2),a=t.n(i)()(r.a);a.push([n.i,'body{font:100% "Oswald",sans-serif;background:#6464db}\n',"",{version:3,sources:["webpack://./src/client/styles/base.scss"],names:[],mappings:"AAIA,KACE,6BALgC,CAMhC,kBAL+B",sourcesContent:["$font-family: 'Oswald', sans-serif;;\n$primary-color:rgb(100, 100, 219);\n$secondary-color: grey;\n\nbody {\n  font: 100% $font-family;\n  background: $primary-color;\n}\n\n"],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";var o=t(1),r=t.n(o),i=t(2),a=t.n(i)()(r.a);a.push([n.i,"header{display:flex;justify-content:center;padding:10px 40px}.headline{font-size:2em;color:white;margin:50px 0px 40px 0px}\n","",{version:3,sources:["webpack://./src/client/styles/header.scss"],names:[],mappings:"AAAA,OACI,YAAa,CACb,sBAAuB,CACvB,iBAAkB,CACrB,UAGG,aAAc,CACd,WAAY,CACZ,wBAAyB",sourcesContent:["header {\n    display: flex;\n    justify-content: center;\n    padding: 10px 40px;\n}\n\n.headline {\n    font-size: 2em;\n    color: white;\n    margin: 50px 0px 40px 0px; \n}\n"],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";var o=t(1),r=t.n(o),i=t(2),a=t.n(i)()(r.a);a.push([n.i,"form{border-radius:20px;padding:40px;margin:10px 30px 10px 30px}textarea{border:10px solid grey;width:1000px;height:200px;padding:20px;font-size:1.5em;color:black;background-color:#ec73ec;width:100%;line-height:16px;margin:10px 0;border-radius:20px}input{width:1000px;height:200px;padding:5px 20px;background-color:#ec73ec;width:100%;line-height:16px;margin:10px 0;border-radius:5px}.button{width:150px;height:50px;background:WHITE;font-size:26px;font-family:'Oswald', sans-serif;border:none;border-radius:5px}.button:hover{background-color:#ec73ec}\n","",{version:3,sources:["webpack://./src/client/styles/form.scss"],names:[],mappings:"AASA,KACI,kBAAmB,CACnB,YAAa,CACb,0BAA2B,CAC9B,SAGG,sBAAuB,CACvB,YAAa,CACb,YAAa,CACb,YAAa,CACb,eAAgB,CAChB,WAAY,CACZ,wBAAmC,CACnC,UAAW,CACX,gBAAiB,CACjB,aAAc,CACd,kBAAmB,CACtB,MAGG,YAAa,CACb,YAAa,CACb,gBAAiB,CACjB,wBAAmC,CACnC,UAAW,CACX,gBAAiB,CACjB,aAAc,CACd,iBAAkB,CACrB,QAGG,WAAY,CACZ,WAAY,CACZ,gBAAiB,CAEjB,cAAe,CACf,gCAAiC,CACjC,WAAY,CACZ,iBAAkB,CARtB,cAYQ,wBAAoC",sourcesContent:["// //colors\n// $color_night_shadz_approx: rgb(167, 57, 72);\n// $color_mine_shaft_approx: #444;\n// $color_lavender_magenta_approx: rgb(236, 115, 236);\n\n// //fonts\n// $font_0: Oswald;\n// $font_1: sans-serif;\n\nform {\n    border-radius: 20px;\n    padding: 40px;\n    margin: 10px 30px 10px 30px;\n}\n\ntextarea {\n    border: 10px solid grey;\n    width: 1000px;\n    height: 200px;\n    padding: 20px;\n    font-size: 1.5em;\n    color: black;\n    background-color:rgb(236, 115, 236);\n    width: 100%;\n    line-height: 16px;\n    margin: 10px 0;\n    border-radius: 20px;\n}\n\ninput {\n    width: 1000px;\n    height: 200px;\n    padding: 5px 20px;\n    background-color:rgb(236, 115, 236);\n    width: 100%;\n    line-height: 16px;\n    margin: 10px 0;\n    border-radius: 5px;\n}\n\n.button {\n    width: 150px;\n    height: 50px;\n    background: WHITE;\n    $color: rgb(167, 57, 72);\n    font-size: 26px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n    border-radius: 5px;\n    $box-shadow: 2px 4px 5px #444;\n\n    &:hover {\n        background-color: rgb(236, 115, 236);\n    }\n}\n"],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";var o=t(1),r=t.n(o),i=t(2),a=t.n(i)()(r.a);a.push([n.i,"footer{display:flex;justify-content:center;padding:10px 40px;margin:10px 0px 10px 0px;background-color:grey;padding:3em;color:#fff}\n","",{version:3,sources:["webpack://./src/client/styles/footer.scss"],names:[],mappings:"AAEA,OACI,YAAa,CACb,sBAAuB,CACvB,iBAAkB,CAClB,wBAAyB,CACzB,qBAPkB,CAQlB,WAAY,CACZ,UAAW",sourcesContent:["$secondary-color: grey;\n\nfooter {\n    display: flex;\n    justify-content: center;\n    padding: 10px 40px;\n    margin: 10px 0px 10px 0px; \n    background-color: $secondary-color;\n    padding: 3em;\n    color: #fff;\n}"],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";function o(n){console.log("::: Running inputChecker :::",n);const e=new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);let t="";return t=n.match(e)?"url":"text",t}function r(n){n.preventDefault();const e=document.getElementById("name").value,t=Client.inputChecker(e);console.log("::: Form Submitted :::");const o={type:t,input:e};console.log(o),fetch("http://localhost:8080/add",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputObject:o})}).then(n=>n.json()).then((function(n){console.log(n),async function(n){const e=function(n){if(console.log(n),!n.confidence)return!1;return{irony:"This text is "+n.irony,confidence:"Confidence in the text is "+n.confidence+"%",subjectivity:"This text is "+n.subjectivity}}(n);console.log(n.irony),document.querySelector("#confidence").innerHTML=e.confidence,document.querySelector("#irony").innerHTML=e.irony,document.querySelector("#subjectivity").innerHTML=e.subjectivity}(n)}))}t.r(e),t.d(e,"inputChecker",(function(){return o})),t.d(e,"handleSubmit",(function(){return r}));var i=t(0),a=t.n(i),s=t(3),c={insert:"head",singleton:!1},l=(a()(s.a,c),s.a.locals,t(4)),u={insert:"head",singleton:!1},d=(a()(l.a,u),l.a.locals,t(5)),p={insert:"head",singleton:!1},A=(a()(d.a,p),d.a.locals,t(6)),f={insert:"head",singleton:!1},b=(a()(A.a,f),A.a.locals,t(7)),g={insert:"head",singleton:!1},h=(a()(b.a,g),b.a.locals,t(8)),C={insert:"head",singleton:!1};a()(h.a,C),h.a.locals}]);
//# sourceMappingURL=main.js.map