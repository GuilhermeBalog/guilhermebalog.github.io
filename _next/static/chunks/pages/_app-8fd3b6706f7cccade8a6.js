(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),s=n(4287),p=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=m.length;c<s;c++){var p=m[c];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?a=!1:n.add(p);else{var f=o.props[p],l=r[p]||new Set;"name"===p&&i||!l.has(f)?(l.add(f),r[p]=l):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function g(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},t)}g.rewind=function(){};var y=g;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),u=n(8585),c=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var p=n(7294),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=f},7370:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),o=n(9008),a=(n(8986),r.createElement),i="Guilherme Balog Gardino | Desenvolvedor de software",u="Ol\xe1! Meu nome \xe9 Guilherme Balog Gardino e sou desenvolvedor de software em S\xe3o Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados.",c="https://avatars0.githubusercontent.com/u/38947601?v=4";function s(e){var t=e.Component,n=e.pageProps;return a(r.Fragment,null,a(o.default,null,a("meta",{charSet:"utf-8"}),a("link",{rel:"icon",href:"/favicon.ico"}),a("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a("meta",{name:"theme-color",content:"#00BCD4"}),a("link",{rel:"apple-touch-icon",href:"/logo192.png"}),a("link",{rel:"manifest",href:"/manifest.json"}),a("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),a("link",{href:"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap",rel:"stylesheet"}),a("title",null,i),a("meta",{name:"description",content:u}),a("meta",{itemProp:"name",content:i}),a("meta",{itemProp:"description",content:u}),a("meta",{itemProp:"image",content:c}),a("meta",{property:"og:title",content:i}),a("meta",{property:"og:description",content:u}),a("meta",{property:"og:site_name",content:"Guilherme Balog Gardino"}),a("meta",{property:"og:url",content:"https://guilhermebalog.ga"}),a("meta",{property:"og:type",content:"website"}),a("meta",{property:"og:image",content:c}),a("meta",{property:"og:image:type",content:"image/jpeg"}),a("meta",{property:"og:image:width",content:"460"}),a("meta",{property:"og:image:height",content:"460"}),a("meta",{name:"twitter:card",content:"summary_large_image"}),a("meta",{name:"twitter:title",content:i}),a("meta",{name:"twitter:description",content:u}),a("meta",{name:"twitter:image",content:c})),a(t,n))}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7370)}])},8986:function(){},9008:function(e,t,n){e.exports=n(7947)},4453:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,282],(function(){return t(6363),t(2441)}));var n=e.O();_N_E=n}]);