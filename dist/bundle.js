(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,'.black-header {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 5em;\n    background-color: black;\n}\n\n.title {\n    color: white;\n    margin: 0px;\n    margin-top: 1.2em;\n    margin-left: 0.3em;\n}\n\n.tabs {\n    align-items: flex-end;\n    margin: 0;\n    padding-right: 2em;\n}\n\n.tab-link {\n    color: white;\n    list-style-type: none;\n    padding: 5px 10px;\n    font-size: large;\n}\n\n.tabs, .tab-link {\n    display: inline-flex;\n}\n\n.squares-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n        "left-box right-box"\n        "picture picture";\n    justify-items: center;\n}\n\n.square {\n    width: 50%;\n    height: 50px;\n    border: 10px solid black;\n    border-radius: 20px;\n    margin: 20px;\n    padding: 5em;\n}\n\n.left-box {\n    grid-area: left-box;\n}\n\n.right-box {\n    grid-area: right-box;\n}\n\n.wide-square {\n    width: 75%;\n    height: 100px;\n    border: 10px solid black;\n    border-radius: 20px;\n    margin: 20px;\n    padding: 5em;\n    grid-area: picture;\n}\n\n.hidden {\n    display: none;\n}\n\n\nbody {\n    margin: 0px;\n}\n\nfooter {\n    position: relative;\n    bottom: 0;\n    width: 100%;\n    height: 2.5rem;\n    color: white;\n    background-color: black;\n}',""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(n[p].references++,n[p].updater(m)):n.push({identifier:u,updater:a(m,r),references:1}),o.push(u)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=t(i[o]);n[d].references--}for(var s=r(e,a),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(){const e=document.createElement("div");return e.classList.add("square"),e}const n=function(){const n=document.createElement("div");n.classList.add("squares-container"),n.classList.add("homepage");const t=function(){const n=e(),t=document.createElement("p");return t.textContent="yo hello there",n.appendChild(t),n}(),r=function(){const n=e(),t=document.createElement("p");return t.textContent="Hey im the right side",n.appendChild(t),n}(),a=function(){const e=function(){const e=document.createElement("div");return e.classList.add("wide-square"),e}();e.classList.add("wide-square");const n=document.createElement("p");return n.textContent="This is a wide Square",e.appendChild(n),e}();return t.classList.add("left-box"),r.classList.add("right-box"),n.appendChild(t),n.appendChild(r),n.appendChild(a),n};var r=t(379),a=t.n(r),i=t(795),o=t.n(i),d=t(569),s=t.n(d),c=t(565),l=t.n(c),u=t(216),p=t.n(u),m=t(589),h=t.n(m),f=t(426),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),a()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;function g(e){if("Home"===e.srcElement.innerText){let e=document.querySelector(".homepage");e.classList.contains("hidden")&&e.classList.remove("hidden");let n=document.querySelector(".aboutpage");n.classList.contains("hidden")||n.classList.add("hidden")}else"About"===e.srcElement.innerText&&(document.querySelector(".homepage").classList.add("hidden"),document.querySelector(".aboutpage").classList.remove("hidden"))}document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("black-header");const n=document.createElement("h1");n.textContent="The Restaurant Company.",n.classList.add("title");const t=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("li");return t.classList.add("tabs"),r.classList.add("tab-link"),a.classList.add("tab-link"),r.textContent="Home",a.textContent="About",t.appendChild(r),t.appendChild(a),e.appendChild(n),e.appendChild(t),e}()),document.body.appendChild(function(){const e=document.createElement("div");e.id="content";let t=n(),r=function(){const e=document.createElement("div");e.classList.add("aboutpage");const n=document.createElement("h1");return n.textContent="Im the about page boo!",e.appendChild(n),e}();return r.classList.add("hidden"),e.appendChild(t),e.appendChild(r),e}()),Array.from(document.getElementsByClassName("tab-link")).forEach((e=>e.addEventListener("click",g)))})()})();