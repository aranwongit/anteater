webpackJsonp([17],{808:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(7),o=a(r),c=t(903),i=a(c),u=t(131),s=a(u);t(904);var d=(t(314),t(315));n.default={namespace:"withdraw",state:{data:{list:[],balance:1e4,finance_status:2,pagination:{}},loading:!0},effects:{fetch:s.default.mark(function e(n,t){var a,r=n.payload,o=t.call,c=t.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:"changeLoading",payload:!0});case 2:return e.next=4,o(d.queryWithdraw,r);case 4:return a=e.sent,e.next=7,c({type:"save",payload:a.data});case 7:return e.next=9,c({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:s.default.mark(function e(n,t){var a,r=n.payload,o=n.callback,c=t.call,u=t.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(d.addWithdraw,r);case 4:return a=e.sent,0==a.code?i.default.success("\u7533\u8bf7\u63d0\u73b0\u6210\u529f"):i.default.error("\u7533\u8bf7\u63d0\u73b0\u5931\u8d25:"+a.code+"["+a.msg+"]"),e.next=8,u({type:"save",payload:a.data});case 8:return e.next=10,u({type:"changeLoading",payload:!1});case 10:o&&o();case 11:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,n){return(0,o.default)({},e,{data:n.payload})},changeLoading:function(e,n){return(0,o.default)({},e,{loading:n.payload})}}},e.exports=n.default},903:function(e,n,t){"use strict";function a(e){if(d)return void e(d);c.a.newInstance({prefixCls:f,transitionName:"move-up",style:{top:s},getContainer:p},function(n){if(d)return void e(d);d=n,e(n)})}function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments[2],r=arguments[3],c={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[t];"function"==typeof n&&(r=n,n=u);var s=l++;return a(function(a){a.notice({key:s,duration:n,style:{},content:o.createElement("div",{className:f+"-custom-content "+f+"-"+t},o.createElement(i.default,{type:c}),o.createElement("span",null,e)),onClose:r})}),function(){d&&d.removeNotice(s)}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(5),c=(t.n(o),t(326)),i=t(312),u=3,s=void 0,d=void 0,l=1,f="ant-message",p=void 0;n.default={info:function(e,n,t){return r(e,n,"info",t)},success:function(e,n,t){return r(e,n,"success",t)},error:function(e,n,t){return r(e,n,"error",t)},warn:function(e,n,t){return r(e,n,"warning",t)},warning:function(e,n,t){return r(e,n,"warning",t)},loading:function(e,n,t){return r(e,n,"loading",t)},config:function(e){void 0!==e.top&&(s=e.top,d=null),void 0!==e.duration&&(u=e.duration),void 0!==e.prefixCls&&(f=e.prefixCls),void 0!==e.getContainer&&(p=e.getContainer)},destroy:function(){d&&(d.destroy(),d=null)}}},904:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(192),r=(t.n(a),t(952));t.n(r)},952:function(e,n){}});