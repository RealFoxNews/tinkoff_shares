'use strict';const _0x47d8e3=_0x250f;(function(_0x58aeb5,_0x160575){const _0x7245ef=_0x250f,_0x2374e9=_0x58aeb5();while(!![]){try{const _0x4ad594=parseInt(_0x7245ef(0x1e2))/0x1*(-parseInt(_0x7245ef(0x1e5))/0x2)+parseInt(_0x7245ef(0x1e9))/0x3*(parseInt(_0x7245ef(0x1fa))/0x4)+parseInt(_0x7245ef(0x1d9))/0x5+parseInt(_0x7245ef(0x1e3))/0x6+-parseInt(_0x7245ef(0x1f9))/0x7+parseInt(_0x7245ef(0x1df))/0x8*(-parseInt(_0x7245ef(0x1dd))/0x9)+parseInt(_0x7245ef(0x1f0))/0xa;if(_0x4ad594===_0x160575)break;else _0x2374e9['push'](_0x2374e9['shift']());}catch(_0x3cf366){_0x2374e9['push'](_0x2374e9['shift']());}}}(_0x20aa,0xb925f));Object['defineProperty'](exports,_0x47d8e3(0x1f7),{'value':!![]}),exports[_0x47d8e3(0x1f6)]=void 0x0;function _0x250f(_0x5d1662,_0xe9fefd){const _0x20aaa2=_0x20aa();return _0x250f=function(_0x250fe9,_0x5ea93a){_0x250fe9=_0x250fe9-0x1d2;let _0x65eb17=_0x20aaa2[_0x250fe9];return _0x65eb17;},_0x250f(_0x5d1662,_0xe9fefd);}const fs=require('fs'),path=require('path'),rxjs_1=require(_0x47d8e3(0x1e1)),base_config_1=require(_0x47d8e3(0x1d4)),instruments_1=require(_0x47d8e3(0x1d6)),merge_util_1=require(_0x47d8e3(0x1d7));class BaseTrader{constructor(){const _0x324a73=_0x47d8e3;this['status']=new rxjs_1[(_0x324a73(0x1e7))](),this[_0x324a73(0x1db)]['next']({'status':_0x324a73(0x1d3),'alive':![]}),this[_0x324a73(0x1db)][_0x324a73(0x1fb)]({'status':_0x324a73(0x1e4),'alive':![]});}[_0x47d8e3(0x1d2)](){const _0x3e0632=_0x47d8e3;this[_0x3e0632(0x1da)]=(0x0,merge_util_1[_0x3e0632(0x1f8)])(base_config_1[_0x3e0632(0x1f2)],JSON['parse'](fs[_0x3e0632(0x1dc)](path[_0x3e0632(0x1f3)](__dirname,'..','..','..','..',_0x3e0632(0x1ed)))[_0x3e0632(0x1eb)]()));}[_0x47d8e3(0x1e0)](_0xee5e08){const _0x20cb7d=_0x47d8e3;this[_0x20cb7d(0x1da)]=(0x0,merge_util_1['merge'])(this[_0x20cb7d(0x1da)],_0xee5e08);}[_0x47d8e3(0x1f1)](){const _0x158cfc=_0x47d8e3;this[_0x158cfc(0x1db)][_0x158cfc(0x1fb)]({'status':'api','alive':!![]}),console[_0x158cfc(0x1ec)]('\x1b[36m%s\x1b[0m',_0x158cfc(0x1d8),_0x158cfc(0x1e6));}[_0x47d8e3(0x1ee)](){const _0x5a2ee9=_0x47d8e3;this['api']=undefined,this[_0x5a2ee9(0x1db)][_0x5a2ee9(0x1fb)]({'status':_0x5a2ee9(0x1d3),'alive':![]}),console['log']('\x1b[31m',_0x5a2ee9(0x1ef),_0x5a2ee9(0x1e6));}[_0x47d8e3(0x1ea)](){const _0x505b6e=_0x47d8e3;this[_0x505b6e(0x1db)][_0x505b6e(0x1fb)]({'status':_0x505b6e(0x1e4),'alive':!![]});}[_0x47d8e3(0x1f4)](){const _0x71de20=_0x47d8e3;var _0x497f60;(_0x497f60=this[_0x71de20(0x1e4)])===null||_0x497f60===void 0x0?void 0x0:_0x497f60['stop'](),this[_0x71de20(0x1e4)]=undefined,this[_0x71de20(0x1db)]['next']({'status':_0x71de20(0x1e4),'alive':![]});}async['getAccounts'](){const _0x1f7c40=_0x47d8e3;console[_0x1f7c40(0x1ec)](this['api']);if(!this[_0x1f7c40(0x1d3)])return null;const {accounts:_0x311a40}=await this[_0x1f7c40(0x1d3)]['users'][_0x1f7c40(0x1de)]({});return console[_0x1f7c40(0x1ec)](_0x311a40),_0x311a40;}async['getShares'](){const _0x306ad2=_0x47d8e3;if(!this[_0x306ad2(0x1d3)])return null;const _0x578e78=await this[_0x306ad2(0x1d3)][_0x306ad2(0x1d5)]['shares']({'instrumentStatus':instruments_1[_0x306ad2(0x1f5)]['INSTRUMENT_STATUS_BASE']});return _0x578e78[_0x306ad2(0x1d5)];}['getShares$'](){const _0x484935=_0x47d8e3;return(0x0,rxjs_1[_0x484935(0x1e8)])(this['getShares']());}}function _0x20aa(){const _0x5a06e2=['api','../../models/base.config','instruments','tinkoff-invest-api/cjs/generated/instruments','../../utils/merge.util','Апи\x20запущено','728275uFjZTo','options','status','readFileSync','9rtczsQ','getAccounts','8882488NtJWeM','reloadOptions','rxjs','3229dfdHCF','643740cSbZGp','wallet','102cKvKwl','\x1b[37m','Subject','from','42918ZfQMnQ','onOpenWallet','toString','log','config.json','onCloseApi','Апи\x20выключено','23036170OozHGL','onOpenApi','BASE_CONFIG','join','onCloseWallet','InstrumentStatus','BaseTrader','__esModule','merge','7768257dYxTtb','164tItMmZ','next','initializeOptions'];_0x20aa=function(){return _0x5a06e2;};return _0x20aa();}exports[_0x47d8e3(0x1f6)]=BaseTrader;