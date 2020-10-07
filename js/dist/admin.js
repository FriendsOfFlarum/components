module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n){t.exports=flarum.core.compat["components/Switch"]},function(t,n){t.exports=flarum.core.compat.Component},function(t,n){t.exports=flarum.core.compat["utils/extract"]},function(t,n){t.exports=flarum.core.compat["components/Select"]},function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,n){t.exports=flarum.core.compat["utils/classList"]},function(t,n,e){"use strict";e.r(n),e.d(n,"settings",(function(){return w}));var r={};function i(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.r(r),e.d(r,"BooleanItem",(function(){return c})),e.d(r,"StringItem",(function(){return h})),e.d(r,"NumberItem",(function(){return d})),e.d(r,"SettingItem",(function(){return a})),e.d(r,"SelectItem",(function(){return b})),e.d(r,"types",(function(){return v}));var o=e(0),s=e.n(o),u=e(1),a=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var e=n.prototype;return e.oninit=function(n){if(t.prototype.oninit.call(this,n),this.cast=this.attrs.cast||function(t){return t},"function"!=typeof this.attrs.setting)throw new Error('[fof/components] SettingsModal - "setting" attribute must be a function, more specifically the SettingsModal setting() method passed to the modal\'s items attribute.')},e.setting=function(){return this.attrs.setting(this.attrs.name)},e.getValue=function(){return this.cast(this.setting()())},n}(e.n(u).a),c=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.cast=function(t){return!!Number(t)}},e.view=function(t){return m(s.a,{state:this.getValue(),onchange:this.setting()},this.attrs.label||t.children)},n}(a);function f(){return(f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var p=e(2),l=e.n(p),h=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.view=function(t){var n=f({},this.attrs),e=(n.simple,n.name,n.setting,function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(n,["simple","name","setting"])),r=l()(e,"label")||t.children;return e.className="FormControl "+(e.className||""),e.bidi=this.setting(),e.simple?m("input",e):m("div.Form-group",[m("label",r),m("input",e)])},n}(a),d=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.oninit=function(n){t.prototype.oninit.call(this,n),this.cast=function(t){return Number(t)}},n.initAttrs=function(t){t.type="number"},n}(h),g=e(3),y=e.n(g),b=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.view=function(){return y.a.component({options:this.attrs.options,value:this.getValue()||this.attrs.default,onchange:this.setting()})},n}(a),v={boolean:c,string:h,integer:d,number:d},S=e(4),x=e.n(S),O=e(5),j=e.n(O),w={SettingsModal:function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var e=n.prototype;return e.oninit=function(n){if(t.prototype.oninit.call(this,n),this.settings={},this.setting=this.setting.bind(this),this.attrs.onsaved&&(this.onsaved=this.attrs.onsaved.bind(this)),this.attrs.items&&"function"!=typeof this.attrs.items)throw new Error('[fof/components] SettingsModal - "items" attribute must be a function that accepts the setting() method to pass to all SettingItem children.')},e.className=function(){return j()([this.attrs.className,this.attrs.size&&"Modal--"+this.attrs.size])},e.title=function(){return this.attrs.title},e.form=function(){return this.attrs.form||[].concat(this.attrs.items(this.setting)).map((function(t){return!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t)}))},n}(x.a),items:r}}]);
//# sourceMappingURL=admin.js.map