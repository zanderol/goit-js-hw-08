!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,y=Math.max,m=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),d?b(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function O(){var e=p();if(w(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?m(n,a-(e-c)):n}(e))}function S(e){return f=void 0,s&&r?b(e):(r=i=void 0,u)}function T(){var e=p(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=h(t)||0,g(n)&&(d=!!n.leading,a=(v="maxWait"in n)?y(h(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",w=document.querySelector(".feedback-form"),O={};w.addEventListener("input",e(t)((function(e){var t=e.target.name,n=e.target.value;O[t]=n,localStorage.setItem(j,JSON.stringify(O))}),2e3)),w.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),w={},O={},localStorage.removeItem(j)})),function(){var e=JSON.parse(localStorage.getItem(j));console.log(e);var t=!0,n=!1,r=void 0;try{for(var o,i=w[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;e.hasOwnProperty(a.name)&&(O[a.name]=a.value=e[a.name])}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}()}();
//# sourceMappingURL=03-feedback.60dddfc2.js.map
