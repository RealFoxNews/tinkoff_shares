'use strict';function _0x493f(_0x3b85f2,_0x39cff6){const _0x35c9b0=_0x35c9();return _0x493f=function(_0x493f98,_0x3e91cf){_0x493f98=_0x493f98-0x1d9;let _0x179231=_0x35c9b0[_0x493f98];return _0x179231;},_0x493f(_0x3b85f2,_0x39cff6);}const _0x3060e7=_0x493f;(function(_0x3bc73d,_0x541ffd){const _0x453ccb=_0x493f,_0x26f2c9=_0x3bc73d();while(!![]){try{const _0x73f6d2=-parseInt(_0x453ccb(0x1dd))/0x1*(parseInt(_0x453ccb(0x1de))/0x2)+parseInt(_0x453ccb(0x1fc))/0x3+parseInt(_0x453ccb(0x1e6))/0x4*(-parseInt(_0x453ccb(0x1e5))/0x5)+-parseInt(_0x453ccb(0x1e9))/0x6+-parseInt(_0x453ccb(0x1f7))/0x7*(-parseInt(_0x453ccb(0x214))/0x8)+parseInt(_0x453ccb(0x209))/0x9+parseInt(_0x453ccb(0x1ee))/0xa*(parseInt(_0x453ccb(0x1ea))/0xb);if(_0x73f6d2===_0x541ffd)break;else _0x26f2c9['push'](_0x26f2c9['shift']());}catch(_0x378a67){_0x26f2c9['push'](_0x26f2c9['shift']());}}}(_0x35c9,0x9c401));Object[_0x3060e7(0x20d)](exports,'__esModule',{'value':!![]}),exports[_0x3060e7(0x201)]=void 0x0;const tinkoff_invest_api_1=require(_0x3060e7(0x1e0)),orders_1=require(_0x3060e7(0x1df)),uuid_1=require('uuid'),messenger_1=require(_0x3060e7(0x1f1));class Wallet{constructor(_0x53399c,_0x4227ea,_0x44220e){const _0x240480=_0x3060e7;this[_0x240480(0x1db)]=_0x53399c,this['accountId']=_0x4227ea,this[_0x240480(0x1e4)]=_0x44220e,this[_0x240480(0x203)]=new messenger_1[(_0x240480(0x1fd))](),this[_0x240480(0x1f8)]=new Set();}async[_0x3060e7(0x1f6)](){const _0x3a1071=_0x3060e7;this['account']=new tinkoff_invest_api_1[(_0x3a1071(0x1ed))](this['api'],this[_0x3a1071(0x208)]),console[_0x3a1071(0x1e7)](_0x3a1071(0x1f0));}[_0x3060e7(0x1f4)](){const _0x2b89b1=_0x3060e7;this[_0x2b89b1(0x1f5)]=undefined,this[_0x2b89b1(0x1e8)]=undefined,this[_0x2b89b1(0x1f8)]['forEach'](_0x3441ef=>this[_0x2b89b1(0x20a)](_0x3441ef,_0x2b89b1(0x200),_0x2b89b1(0x20f),0x0)),console[_0x2b89b1(0x1e7)](_0x2b89b1(0x1dc));}[_0x3060e7(0x207)](_0x1a3b43,_0xee931f,_0x38f93b,_0x172e02){const _0x4a032d=_0x3060e7;if(!this['account'])return;const _0x50ac88=_0x172e02?_0x172e02:_0xee931f[_0x4a032d(0x1f3)][_0x4a032d(0x1da)](_0x4a032d(0x212))?this[_0x4a032d(0x1e4)]['drop'][_0x4a032d(0x1eb)]:this[_0x4a032d(0x1e4)][_0x4a032d(0x1e2)][_0x4a032d(0x20b)],_0xba3ac2=Math[_0x4a032d(0x1e3)](Math['floor'](_0x50ac88/(_0x1a3b43*_0xee931f['lot']))),_0x3b7642=!_0xba3ac2?0x1:_0xba3ac2,_0x80782b=_0xee931f['ticker']+':\x20'+_0x3b7642+_0x4a032d(0x213)+_0x1a3b43;this[_0x4a032d(0x203)][_0x4a032d(0x210)](_0x38f93b,_0x80782b),this[_0x4a032d(0x1e8)][_0x4a032d(0x1fb)]({'figi':_0xee931f[_0x4a032d(0x202)],'quantity':_0x3b7642,'price':this[_0x4a032d(0x1db)][_0x4a032d(0x1ec)][_0x4a032d(0x1ff)](_0x1a3b43),'direction':orders_1[_0x4a032d(0x1ef)][_0x4a032d(0x204)],'orderType':orders_1[_0x4a032d(0x205)][_0x4a032d(0x206)],'orderId':(0x0,uuid_1['v4'])()})[_0x4a032d(0x1fe)](_0x5dd594=>{const _0x2c2245=_0x4a032d;this[_0x2c2245(0x203)][_0x2c2245(0x1fa)](_0x38f93b,_0x80782b,_0x2c2245(0x211),_0xee931f[_0x2c2245(0x20c)]),_0x5dd594&&_0x5dd594[_0x2c2245(0x20e)]&&this[_0x2c2245(0x1f8)][_0x2c2245(0x216)](_0x5dd594[_0x2c2245(0x20e)]),this[_0x2c2245(0x20a)](_0x5dd594&&_0x5dd594['orderId'],_0x38f93b,_0xee931f[_0x2c2245(0x20c)],0x3d*0x3e8);})['catch'](_0x435617=>{const _0x4f3e6b=_0x4a032d;var _0x32405f;this[_0x4f3e6b(0x203)][_0x4f3e6b(0x1fa)](_0x38f93b,_0x80782b,_0x4f3e6b(0x1e1),_0xee931f[_0x4f3e6b(0x20c)],(_0x32405f=_0x435617===null||_0x435617===void 0x0?void 0x0:_0x435617[_0x4f3e6b(0x215)])===null||_0x32405f===void 0x0?void 0x0:_0x32405f['message']);});}['cancelOrder'](_0x59e79c,_0x49549e,_0x4fed5f,_0xca8d6a){if(_0x59e79c)setTimeout(()=>{const _0xd7d719=_0x493f;this[_0xd7d719(0x1e8)]&&this['account'][_0xd7d719(0x20a)](_0x59e79c)[_0xd7d719(0x1fe)](_0x1a922a=>{const _0x2aa52a=_0xd7d719;this[_0x2aa52a(0x203)][_0x2aa52a(0x1f9)](_0x49549e,'success',_0x4fed5f),this[_0x2aa52a(0x1f8)][_0x2aa52a(0x1d9)](_0x59e79c);})[_0xd7d719(0x1f2)](_0x330d0d=>{const _0x50a654=_0xd7d719;var _0x1e279a;this[_0x50a654(0x203)]['cancelLimitOrderLogMessage'](_0x49549e,_0x50a654(0x1e1),_0x4fed5f,(_0x1e279a=_0x330d0d===null||_0x330d0d===void 0x0?void 0x0:_0x330d0d[_0x50a654(0x215)])===null||_0x1e279a===void 0x0?void 0x0:_0x1e279a['message']);});},_0xca8d6a);}}exports[_0x3060e7(0x201)]=Wallet;function _0x35c9(){const _0x70f2b5=['toQuotation','Выключение','Wallet','figi','message','ORDER_DIRECTION_BUY','OrderType','ORDER_TYPE_LIMIT','buy','accountId','11509137fwQQIJ','cancelOrder','foreignMaxMoneySize','ticker','defineProperty','orderId','Все','byLogMessage','success','MOEX','\x20по\x20','312hCvbwe','payload','add','delete','includes','api','Кошелек\x20выключен','1011763iAwiWO','2luvfYw','tinkoff-invest-api/cjs/generated/orders','tinkoff-invest-api','error','drop','floor','options','85FbPhzw','241460RYaORG','log','account','5609262SWPQyC','10535283zSjItH','maxMOEXMoneySize','helpers','RealAccount','10xktbIV','OrderDirection','Кошелек\x20запущен','./messenger','catch','exchange','stop','portfolio','init','139643kEcJHW','activeOrders','cancelLimitOrderLogMessage','openLimitOrderLogMessage','postOrder','1794867HEFURm','Messenger','then'];_0x35c9=function(){return _0x70f2b5;};return _0x35c9();}