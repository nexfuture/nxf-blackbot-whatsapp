const _0x1c69f3=_0x18d3;(function(_0x5a31ed,_0x4d77ae){const _0x437ba0=_0x18d3,_0x670ad9=_0x5a31ed();while(!![]){try{const _0x3c938b=-parseInt(_0x437ba0(0x1be))/0x1*(-parseInt(_0x437ba0(0x1b5))/0x2)+parseInt(_0x437ba0(0x1b4))/0x3+parseInt(_0x437ba0(0x1af))/0x4+parseInt(_0x437ba0(0x1c2))/0x5*(-parseInt(_0x437ba0(0x1b3))/0x6)+parseInt(_0x437ba0(0x1b8))/0x7+-parseInt(_0x437ba0(0x1b6))/0x8+-parseInt(_0x437ba0(0x1b0))/0x9;if(_0x3c938b===_0x4d77ae)break;else _0x670ad9['push'](_0x670ad9['shift']());}catch(_0x2770cc){_0x670ad9['push'](_0x670ad9['shift']());}}}(_0x207c,0xd17de));const fs=require('fs'),rmLetras=_0x579613=>{const _0x30c771=_0x18d3;return _0x579613[_0x30c771(0x1b7)]()['normalize'](_0x30c771(0x1bc))[_0x30c771(0x1b1)](/[\u0300-\u036f]/g,'');};function _0x18d3(_0x2a6d18,_0x5e42ae){const _0x207c25=_0x207c();return _0x18d3=function(_0x18d31c,_0xbd604c){_0x18d31c=_0x18d31c-0x1af;let _0x4cbec7=_0x207c25[_0x18d31c];return _0x4cbec7;},_0x18d3(_0x2a6d18,_0x5e42ae);}function saveJSON(_0xb130a1,_0x5a58e4){const _0x580bcf=_0x18d3;fs['writeFileSync'](_0x5a58e4,JSON[_0x580bcf(0x1bd)](_0xb130a1,null,0x2));}stopcmdpath='./base\x20de\x20funcionamento/configcmd/stopcmd.json';!fs[_0x1c69f3(0x1b2)](stopcmdpath)&&saveJSON([],stopcmdpath);const stopcmd=JSON[_0x1c69f3(0x1bf)](fs[_0x1c69f3(0x1c0)](stopcmdpath));function saveSC(){saveJSON(stopcmd,stopcmdpath);}const isBlockGlobalCmd=_0x308bb4=>{txt=rmLetras(_0x308bb4),nmr=0x0;for(i of stopcmd){if(txt==i)nmr+=0x1;}if(nmr>0x0)return!![];return![];};function _0x207c(){const _0x486d29=['push','NFD','stringify','17155eJOleC','parse','readFileSync','length','5KlNDSX','4520084ENOQDt','18102636CmWkfl','replace','existsSync','8710602aydABV','2983674DmxyBW','146SsDItZ','3643424ByZwbt','toLowerCase','9798481fcNitk','splice','exports'];_0x207c=function(){return _0x486d29;};return _0x207c();}function addStopCmd(_0x4a4e32){const _0x4c39f9=_0x1c69f3;stopcmd[_0x4c39f9(0x1bb)](_0x4a4e32),saveSC();}function rmStopCmd(_0x5deadb){const _0x2dacad=_0x1c69f3;nmr=-0x1,caixa=[];for(i of stopcmd){nmr+=0x1;if(_0x5deadb==i)caixa[_0x2dacad(0x1bb)](nmr);}caixa[_0x2dacad(0x1c1)]>0x0&&(stopcmd[_0x2dacad(0x1b9)](caixa[0x0],0x1),saveSC());}module[_0x1c69f3(0x1ba)]={'stopcmd':stopcmd,'saveSC':saveSC,'isBlockGlobalCmd':isBlockGlobalCmd,'addStopCmd':addStopCmd,'rmStopCmd':rmStopCmd};