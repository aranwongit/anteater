webpackJsonp([30],{805:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=t(7),c=n(r),u=t(131),o=n(u),p=t(314);a.default={namespace:"report",state:{data:{list:[],chart:[],pagination:{},state:[]},loading:!0},effects:{fetchStat:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.queryStatReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),queryStatDaily:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.queryStatDailyReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchChannel:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.queryAcctReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchMedia:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.queryMediaReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchSlot:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.querySlotReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchChannelDaily:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.queryAcctDailyReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchMediaDaily:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.queryMediaDailyReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchSlotDaily:o.default.mark(function e(a,t){var n,r=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,c(p.querySlotDailyReport,r);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n.data});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){return(0,c.default)({},e,{data:a.payload})},changeLoading:function(e,a){return(0,c.default)({},e,{loading:a.payload})}}},e.exports=a.default}});