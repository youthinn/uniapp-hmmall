(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{2909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=u(n("6005")),o=u(n("db90")),a=u(n("06c5")),s=u(n("3427"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return(0,r.default)(e)||(0,o.default)(e)||(0,a.default)(e)||(0,s.default)()}},3427:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"4a3a":function(e,t,n){var r=n("77e9");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("4f06").default;o("3d23ad90",r,!0,{sourceMap:!1,shadowMode:!1})},"53a8":function(e,t,n){"use strict";var r=n("4ea4");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("2909"));n("96cf");var a=r(n("1da1")),s=r(n("2900")),u={data:function(){return{pageindex:1,goods:[],flag:!1}},components:{GoodsList:s.default},onLoad:function(){this.getGoodsList()},onReachBottom:function(){if(this.goods.length<10*this.pageindex)return this.flag=!0;this.pageindex++,this.getGoodsList()},onPullDownRefresh:function(){var e=this;this.pageindex=1,this.goods=[],this.flag=!1,setTimeout((function(){e.getGoodsList((function(){uni.stopPullDownRefresh()}))}),1e3)},methods:{getGoodsList:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/api/getgoods?pageindex="+t.pageindex});case 2:r=n.sent,t.goods=[].concat((0,o.default)(t.goods),(0,o.default)(r.data.message)),e&&e();case 5:case"end":return n.stop()}}),n)})))()}}};t.default=u},"5bed":function(e,t,n){"use strict";n.r(t);var r=n("ecf6"),o=n("e48a");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("bedb");var s,u=n("f0c5"),i=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"94464e8e",null,!1,r["a"],s);t["default"]=i.exports},6005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=o(n("6b75"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e))return(0,r.default)(e)}},"77e9":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-list[data-v-94464e8e]{background-color:#eee}.goods-list .goods-bottom[data-v-94464e8e]{color:#b2b2b2;text-align:center;line-height:%?68?%}',""]),e.exports=t},bedb:function(e,t,n){"use strict";var r=n("4a3a"),o=n.n(r);o.a},db90:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},e48a:function(e,t,n){"use strict";n.r(t);var r=n("53a8"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},ecf6:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"goods-list"},[n("goods-list",{attrs:{goods:e.goods}}),e.flag?n("v-uni-view",{staticClass:"goods-bottom"},[e._v("------我是有底线的------")]):e._e()],1)},a=[]}}]);