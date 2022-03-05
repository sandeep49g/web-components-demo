(()=>{"use strict";var e={get userCardTemplate(){var e=document.createElement("template");return e.innerHTML='\n            <style>\n                :host {\n                    display: block;\n                    background: #fff;\n                    --brownColor: green;\n                    /* @apply --typography; */\n                }\n                \n                :host * {\n                    box-sizing: border-box;\n                }\n\n                :host div.some-box {\n                    background: #ccc;\n                    color: green;\n                }\n\n                ::slotted(div.slot-email) {\n                    color: green;\n                }\n\n                ::slotted(p) {\n                    color: blue;\n                }\n                \n                .user-card {\n                    font-family: \'Arial\', sans-serif;\n                    background: #f4f4f4;\n                    width: 800px;\n                    display: grid;\n                    grid-template-columns: 1fr 2fr;\n                    grid-gap: 10px;\n                    margin-bottom: 15px;\n                    border-bottom: #000 1px solid;\n                }\n                \n                .user-card img {\n                    width: 100%;\n                }\n                \n                .user-card button {\n                    cursor: pointer;\n                    background: var(--blackColor, #000);\n                    color: #fff;\n                    border: 0;\n                    border-radius: 5px;\n                    padding: 5px 10px;\n                    margin-bottom: 10px;\n                }\n                \n                h2 {\n                    color: var(--brownColor, orange)\n                }               \n            </style>\n            <div class="user-card">\n                <img />\n                <div>\n                    <h2>I am Web Component NEW</h2>\n                    <div part="some-box" class="some-box"><span>I am shared part which injectable from outside without css variable</span></div>\n                    <div part="some-box2" class="some-box2"><span>I am shared part 2 which injectable from outside without css variable</span></div>\n                    <h3></h3>\n                    <div class="info">\n                        <slot name="email" class="slot-email">\n                            <p>Default Email</p>\n                        </slot>\n                        <p>\n                            <slot name="phone">\n                                Default Phone\n                            </slot>\n                        </p>\n                    </div>\n                    <button id="toggle-info">Hide Info</button>\n                </div>\n            </div>\n        ',e}};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function r(e){var t="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return i(e,arguments,l(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,e)},r(e)}function i(e,t,n){return i=a()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&c(r,n.prototype),r},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var s=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,t);var r,i,s,u,f,d=(r=p,i=a(),function(){var e,t=l(r);if(i){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function p(){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=d.call(this)).showInfo=!0,t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e.userCardTemplate.content.cloneNode(!0)),t.render(),t}return s=p,f=[{key:"observedAttributes",get:function(){return["username","avatar"]}}],(u=[{key:"toggleInfo",value:function(){this.showInfo=!this.showInfo;var e=this.shadowRoot.querySelector(".info"),t=this.shadowRoot.querySelector("#toggle-info");this.showInfo?(e.style.display="block",t.innerText="Hide Info"):(e.style.display="none",t.innerText="Show Info"),t.dispatchEvent(new CustomEvent("clicked",{detail:"".concat(this.shadowRoot.querySelector("h3").innerText," : I am clicked")}))}},{key:"data",set:function(e){console.log("set data: "+e.fname),console.log("set data: "+e.lname),this.h3Element.textContent=e.username}},{key:"connectedCallback",value:function(){var e=this;console.log("mounted"),this.shadowRoot.querySelector("#toggle-info").addEventListener("click",(function(){return e.toggleInfo()})),this.shadowRoot.querySelector("#toggle-info").addEventListener("clicked",(function(e){console.log(e.detail)}))}},{key:"disconnectedCallback",value:function(){console.log("unmounted"),this.shadowRoot.querySelector("#toggle-info").removeEventListener("click",null),this.shadowRoot.querySelector("#toggle-info").removeEventListener("clicked",null)}},{key:"attributeChangedCallback",value:function(e,t,n){if(t!==n)switch(console.log("The attribute ".concat(e," has changed")),e){case"username":this.h3Element.textContent=n;break;case"avatar":this.imgElement.setAttribute("src",n)}}},{key:"adoptedCallback",value:function(){console.log("Adopted")}},{key:"render",value:function(){this.h3Element=this.shadowRoot.querySelector("h3"),this.imgElement=this.shadowRoot.querySelector("img")}}])&&n(s.prototype,u),f&&n(s,f),Object.defineProperty(s,"prototype",{writable:!1}),p}(r(HTMLElement));window.customElements.define("user-card",s)})();