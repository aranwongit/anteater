webpackJsonp([22],{807:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(7),a=n(u),s=r(131),c=n(s),o=r(315);t.default={namespace:"user",state:{list:[],loading:!1,currentUser:{code:-1}},effects:{fetchCurrent:c.default.mark(function e(t,r){var n,u=r.call,a=r.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.queryCurrent);case 2:return n=e.sent,e.next=5,a({type:"saveCurrentUser",payload:n});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,a.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,a.default)({},e,{loading:t.payload})},saveCurrentUser:function(e,t){return(0,a.default)({},e,{currentUser:t.payload})},changeNotifyCount:function(e,t){return(0,a.default)({},e,{currentUser:(0,a.default)({},e.currentUser,{notifyCount:t.payload})})}}},e.exports=t.default}});