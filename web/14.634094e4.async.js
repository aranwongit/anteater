webpackJsonp([14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],{1407:function(e,t,a){function n(e){return a(r(e))}function r(e){var t=u[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var u={"./account.js":791,"./activities.js":792,"./bill.js":793,"./chart.js":794,"./detail.js":795,"./forget.js":796,"./form.js":797,"./global.js":210,"./index.js":809,"./list.js":798,"./login.js":799,"./media.js":800,"./monitor.js":801,"./profile.js":802,"./project.js":803,"./register.js":804,"./rule.js":805,"./slot.js":806,"./user.js":807,"./withdraw.js":808};n.keys=function(){return Object.keys(u)},n.resolve=r,e.exports=n,n.id=1407},791:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(881),c=n(s),o=a(131),d=n(o);a(882);var i=(a(314),a(315));t.default={namespace:"account",state:{company:"",contact_person:"",email:"",phone:"",financial_object:0,collection_company:"",contact_address:"",bussiness_license_num:"",bussiness_license_pic:"",account_open_permission:"",account_company:"",bank:"",bank_account:"",bank_branch:"",city:"",remark:""},effects:{fetch:d.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(i.queryAccount,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),modify:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,o=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"changeLoading",payload:!0});case 2:return e.next=4,s(i.modifyAccount,r);case 4:return n=e.sent,0==n.code?(c.default.success("\u4fee\u6539\u6210\u529f"),u&&u()):c.default.error("\u4fee\u6539\u5931\u8d25:"+n.code+"["+n.msg+"]"),e.next=8,o({type:"save",payload:n.data});case 8:return e.next=10,o({type:"changeLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)}),modifyFinance:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,o=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"changeLoading",payload:!0});case 2:return e.next=4,s(i.modifyFinance,r);case 4:return n=e.sent,0==n.code?(c.default.success("\u4fee\u6539\u6210\u529f"),u&&u()):c.default.error("\u4fee\u6539\u5931\u8d25:"+n.code+"["+n.msg+"]"),e.next=8,o({type:"save",payload:n.data});case 8:return e.next=10,o({type:"changeLoading",payload:!1});case 10:u&&u();case 11:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},changeLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}}},e.exports=t.default},792:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"activities",state:{list:[],loading:!0},effects:{fetchList:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(o.queryActivities);case 4:return n=e.sent,e.next=7,u({type:"saveList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveList:function(e,t){return(0,u.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},793:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"bill",state:{data:{list:[],pagination:{}},loading:!0},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryBill,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},794:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"chart",state:{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]},effects:{fetch:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.fakeChartData);case 2:return n=e.sent,e.next=5,u({type:"save",payload:n});case 5:case"end":return e.stop()}},e,this)}),fetchSalesData:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.fakeChartData);case 2:return n=e.sent,e.next=5,u({type:"save",payload:{salesData:n.salesData}});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},setter:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},clear:function(){return{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]}}}},e.exports=t.default},795:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"detail",state:{data:{bill_list:[],time:"",number:"",money:"",status:"",info:{company_info:{company_name:"",company_address:"",phone:"",recognition_number:"",bank:"",bank_account:"",type:""},mail:{address:"",postcodes:"",addressee:"",phone:""},invoice_info:{number:"",code:"",money:""}}},loading:!0},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryWithdrawDetail,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},796:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"forget",state:{status:void 0,token:""},effects:{send:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.mailForget,r);case 2:return n=e.sent,e.next=5,s({type:"registerHandle",payload:n});case 5:case"end":return e.stop()}},e,this)}),submit:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeSubmitting",payload:!0});case 2:return e.next=4,u(o.verifyForget,r);case 4:return n=e.sent,e.next=7,s({type:"setToken",payload:n});case 7:return e.next=9,s({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)}),reset:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeSubmitting",payload:!0});case 2:return e.next=4,u(o.resetForget,r);case 4:return n=e.sent,e.next=7,s({type:"registerHandle",payload:n});case 7:return e.next=9,s({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{registerHandle:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status})},setToken:function(e,t){var a=t.payload;return(0,u.default)({},e,{token:a.data.strToken})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},797:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(881),d=n(o);a(882);var i=a(314),l=a(315);t.default={namespace:"form",state:{step:{},regularFormSubmitting:!1,stepFormSubmitting:!1,advancedFormSubmitting:!1},effects:{submitRegularForm:c.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeRegularFormSubmitting",payload:!0});case 2:return e.next=4,r(l.fakeSubmitForm,n);case 4:return e.next=6,u({type:"changeRegularFormSubmitting",payload:!1});case 6:d.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)}),submitStepForm:c.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeStepFormSubmitting",payload:!0});case 2:return e.next=4,r(l.fakeSubmitForm,n);case 4:return e.next=6,u({type:"saveStepFormData",payload:n});case 6:return e.next=8,u({type:"changeStepFormSubmitting",payload:!1});case 8:return e.next=10,u(i.routerRedux.push("/form/step-form/result"));case 10:case"end":return e.stop()}},e,this)}),submitAdvancedForm:c.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeAdvancedFormSubmitting",payload:!0});case 2:return e.next=4,r(l.fakeSubmitForm,n);case 4:return e.next=6,u({type:"changeAdvancedFormSubmitting",payload:!1});case 6:d.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var a=t.payload;return(0,u.default)({},e,{step:(0,u.default)({},e.step,a)})},changeRegularFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{regularFormSubmitting:a})},changeStepFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{stepFormSubmitting:a})},changeAdvancedFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{advancedFormSubmitting:a})}}},e.exports=t.default},798:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"list",state:{list:[],loading:!1},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryFakeList,r);case 4:return n=e.sent,e.next=7,s({type:"appendList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{appendList:function(e,t){return(0,u.default)({},e,{list:e.list.concat(t.payload)})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},799:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(314),d=a(315);t.default={namespace:"login",state:{status:void 0},effects:{accountSubmit:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeSubmitting",payload:!0});case 2:return e.next=4,u(d.accountLogin,r);case 4:if(n=e.sent,0!=n.code){e.next=8;break}return e.next=8,s(o.routerRedux.push("/"));case 8:return e.next=10,s({type:"changeLoginStatus",payload:n});case 10:return e.next=12,s({type:"changeSubmitting",payload:!1});case 12:case"end":return e.stop()}},e,this)}),logout:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoginStatus",payload:{status:!1}});case 2:return e.next=4,r(d.accountLogout);case 4:return n=e.sent,e.next=7,u(o.routerRedux.push("/user/login"));case 7:case"end":return e.stop()}},e,this)})},reducers:{changeLoginStatus:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.code,type:"account"})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},800:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(881),c=n(s),o=a(131),d=n(o);a(882);var i=a(314),l=a(315);t.default={namespace:"media",state:{data:{list:[],pagination:{},valid:[]},loading:!0},effects:{fetch:d.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(l.queryMedia,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchDetail:d.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(l.queryMediaInfo,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchValidMedia:d.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(l.queryPassedMedia,r);case 4:return n=e.sent,e.next=7,s({type:"saveValid",payload:n.data.list});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,o=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.addMedia,r);case 2:if(n=e.sent,0!=n.code){e.next=9;break}return c.default.success("\u6dfb\u52a0\u6210\u529f"),e.next=7,o(i.routerRedux.push("/media/mlist"));case 7:e.next=10;break;case 9:c.default.error("\u6dfb\u52a0\u5931\u8d25:"+n.code+"["+n.msg+"]");case 10:u&&u();case 11:case"end":return e.stop()}},e,this)}),modify:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,o=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.modifyMedia,r);case 2:if(n=e.sent,0!=n.code){e.next=9;break}return c.default.success("\u4fee\u6539\u6210\u529f"),e.next=7,o(i.routerRedux.push("/media/mlist"));case 7:e.next=10;break;case 9:c.default.error("\u4fee\u6539\u5931\u8d25:"+n.code+"["+n.msg+"]");case 10:u&&u();case 11:case"end":return e.stop()}},e,this)}),submit:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,o=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.submitMedia,r);case 2:if(n=e.sent,0!=n.code){e.next=9;break}return c.default.success("\u63d0\u4ea4\u6210\u529f"),e.next=7,o(i.routerRedux.push("/media/mlist"));case 7:e.next=10;break;case 9:c.default.error("\u63d0\u4ea4\u5931\u8d25:"+n.code+"["+n.msg+"]");case 10:u&&u();case 11:case"end":return e.stop()}},e,this)}),remove:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,c=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:"changeLoading",payload:!0});case 2:return e.next=4,s(l.removeMedia,r);case 4:return n=e.sent,e.next=7,c({type:"save",payload:n});case 7:return e.next=9,c({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},saveValid:function(e,t){return(0,u.default)({},e,{data:{list:[],pagination:{},valid:t.payload}})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},801:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"monitor",state:{tags:[]},effects:{fetchTags:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.queryTags);case 2:return n=e.sent,e.next=5,u({type:"saveTags",payload:n.list});case 5:case"end":return e.stop()}},e,this)})},reducers:{saveTags:function(e,t){return(0,u.default)({},e,{tags:t.payload})}}},e.exports=t.default},802:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"profile",state:{basicGoods:[],basicLoading:!0,advancedOperation1:[],advancedOperation2:[],advancedOperation3:[],advancedLoading:!0},effects:{fetchBasic:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:{basicLoading:!0}});case 2:return e.next=4,r(o.queryBasicProfile);case 4:return n=e.sent,e.next=7,u({type:"show",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:{basicLoading:!1}});case 9:case"end":return e.stop()}},e,this)}),fetchAdvanced:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:{advancedLoading:!0}});case 2:return e.next=4,r(o.queryAdvancedProfile);case 4:return n=e.sent,e.next=7,u({type:"show",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:{advancedLoading:!1}});case 9:case"end":return e.stop()}},e,this)})},reducers:{show:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},changeLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}}},e.exports=t.default},803:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"project",state:{notice:[],loading:!0},effects:{fetchNotice:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(o.queryProjectNotice);case 4:return n=e.sent,e.next=7,u({type:"saveNotice",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveNotice:function(e,t){return(0,u.default)({},e,{notice:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},804:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(881),d=n(o);a(882);var i=a(314),l=a(315);t.default={namespace:"register",state:{status:void 0},effects:{submit:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeSubmitting",payload:!0});case 2:return e.next=4,u(l.register,r);case 4:if(n=e.sent,0!=n.code){e.next=11;break}return d.default.success("\u6ce8\u518c\u6210\u529f,\u5c06\u81ea\u52a8\u8df3\u8f6c"),e.next=9,s(i.routerRedux.push("/"));case 9:e.next=12;break;case 11:d.default.error("\u6ce8\u518c\u5931\u8d25:"+res.code+"["+res.msg+"]");case 12:return e.next=14,s({type:"registerHandle",payload:n});case 14:return e.next=16,s({type:"changeSubmitting",payload:!1});case 16:case"end":return e.stop()}},e,this)})},reducers:{registerHandle:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},805:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"rule",state:{data:{list:[],pagination:{}},loading:!0},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryRule,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:c.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({type:"changeLoading",payload:!0});case 2:return e.next=4,s(o.addRule,r);case 4:return n=e.sent,e.next=7,d({type:"save",payload:n});case 7:return e.next=9,d({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)}),remove:c.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({type:"changeLoading",payload:!0});case 2:return e.next=4,s(o.removeRule,r);case 4:return n=e.sent,e.next=7,d({type:"save",payload:n});case 7:return e.next=9,d({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},806:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(881),c=n(s),o=a(131),d=n(o);a(882);var i=a(314),l=a(315);t.default={namespace:"slot",state:{data:{list:[],pagination:{}},loading:!0},effects:{fetch:d.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(l.querySlot,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,o=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.addSlot,r);case 2:if(n=e.sent,0!=n.code){e.next=9;break}return c.default.success("\u6dfb\u52a0\u6210\u529f"),e.next=7,o(i.routerRedux.push("/slot/slist"));case 7:e.next=10;break;case 9:c.default.error("\u6dfb\u52a0\u5931\u8d25:"+n.code+"["+n.msg+"]");case 10:u&&u();case 11:case"end":return e.stop()}},e,this)}),remove:d.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,c=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:"changeLoading",payload:!0});case 2:return e.next=4,s(l.removeSlot,r);case 4:return n=e.sent,e.next=7,c({type:"save",payload:n});case 7:return e.next=9,c({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},807:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(131),c=n(s),o=a(315);t.default={namespace:"user",state:{list:[],loading:!1,currentUser:{code:-1}},effects:{fetchCurrent:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.queryCurrent);case 2:return n=e.sent,e.next=5,u({type:"saveCurrentUser",payload:n});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})},saveCurrentUser:function(e,t){return(0,u.default)({},e,{currentUser:t.payload})},changeNotifyCount:function(e,t){return(0,u.default)({},e,{currentUser:(0,u.default)({},e.currentUser,{notifyCount:t.payload})})}}},e.exports=t.default},808:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(881),c=n(s),o=a(131),d=n(o);a(882);var i=(a(314),a(315));t.default={namespace:"withdraw",state:{data:{list:[],balance:1e4,finance_status:2,pagination:{}},loading:!0},effects:{fetch:d.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(i.queryWithdraw,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n.data});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:d.default.mark(function e(t,a){var n,r,u=t.payload,s=t.callback,o=a.call,l=a.put;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"changeLoading",payload:!0});case 2:return e.next=4,o(i.addWithdraw,u);case 4:return n=e.sent,0==n.code?c.default.success("\u7533\u8bf7\u63d0\u73b0\u6210\u529f"):c.default.error("\u7533\u8bf7\u63d0\u73b0\u5931\u8d25:"+n.code+"["+n.msg+"]"),e.next=8,o(i.queryWithdraw,u);case 8:return r=e.sent,e.next=11,l({type:"save",payload:r.data});case 11:return e.next=13,l({type:"changeLoading",payload:!1});case 13:s&&s();case 14:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},809:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var n=a(1407),r=n.keys().filter(function(e){return"./index.js"!==e}),u=[],s=0;s<r.length;s+=1)u.push(n(r[s]));t.default=u,e.exports=t.default},881:function(e,t,a){"use strict";function n(e){if(i)return void e(i);s.a.newInstance({prefixCls:f,transitionName:"move-up",style:{top:d},getContainer:p},function(t){if(i)return void e(i);i=t,e(t)})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,a=arguments[2],r=arguments[3],s={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[a];"function"==typeof t&&(r=t,t=o);var d=l++;return n(function(n){n.notice({key:d,duration:t,style:{},content:u.createElement("div",{className:f+"-custom-content "+f+"-"+a},u.createElement(c.default,{type:s}),u.createElement("span",null,e)),onClose:r})}),function(){i&&i.removeNotice(d)}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(5),s=(a.n(u),a(323)),c=a(312),o=3,d=void 0,i=void 0,l=1,f="ant-message",p=void 0;t.default={info:function(e,t,a){return r(e,t,"info",a)},success:function(e,t,a){return r(e,t,"success",a)},error:function(e,t,a){return r(e,t,"error",a)},warn:function(e,t,a){return r(e,t,"warning",a)},warning:function(e,t,a){return r(e,t,"warning",a)},loading:function(e,t,a){return r(e,t,"loading",a)},config:function(e){void 0!==e.top&&(d=e.top,i=null),void 0!==e.duration&&(o=e.duration),void 0!==e.prefixCls&&(f=e.prefixCls),void 0!==e.getContainer&&(p=e.getContainer)},destroy:function(){i&&(i.destroy(),i=null)}}},882:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(192),r=(a.n(n),a(920));a.n(r)},920:function(e,t){}});