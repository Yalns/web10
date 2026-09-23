const _0x1dc4ca=_0x2eef;(function(_0x98bceb,_0x4b9aef){const _0x492a51=_0x2eef,_0xa3e6a7=_0x98bceb();while(!![]){try{const _0x5f9f21=-parseInt(_0x492a51(0x26a))/0x1+parseInt(_0x492a51(0xcc))/0x2+parseInt(_0x492a51(0x32c))/0x3+-parseInt(_0x492a51(0xdd))/0x4*(-parseInt(_0x492a51(0x125))/0x5)+-parseInt(_0x492a51(0x101))/0x6*(-parseInt(_0x492a51(0x3ae))/0x7)+parseInt(_0x492a51(0x9b))/0x8*(-parseInt(_0x492a51(0x258))/0x9)+parseInt(_0x492a51(0x111))/0xa*(-parseInt(_0x492a51(0x3bd))/0xb);if(_0x5f9f21===_0x4b9aef)break;else _0xa3e6a7['push'](_0xa3e6a7['shift']());}catch(_0x2ba9e2){_0xa3e6a7['push'](_0xa3e6a7['shift']());}}}(_0x4094,0xc5fc3));const _0x467bac=(function(){let _0x2a712e=!![];return function(_0x4699ce,_0x2dc14d){const _0x40ae1f=_0x2a712e?function(){const _0x45b3f4=_0x2eef;if(_0x2dc14d){const _0x1402dc=_0x2dc14d[_0x45b3f4(0x3ee)](_0x4699ce,arguments);return _0x2dc14d=null,_0x1402dc;}}:function(){};return _0x2a712e=![],_0x40ae1f;};}()),_0x349380=_0x467bac(this,function(){const _0x315a8b=_0x2eef;return _0x349380[_0x315a8b(0x267)]()[_0x315a8b(0x1b0)](_0x315a8b(0x35d))['toString']()[_0x315a8b(0x1a1)](_0x349380)[_0x315a8b(0x1b0)](_0x315a8b(0x35d));});_0x349380();const _0x51c9b1=(function(){let _0x44d4e5=!![];return function(_0x1ca67c,_0x33b16c){const _0x5b88c1=_0x44d4e5?function(){const _0x57d05b=_0x2eef;if(_0x33b16c){const _0x45b3d9=_0x33b16c[_0x57d05b(0x3ee)](_0x1ca67c,arguments);return _0x33b16c=null,_0x45b3d9;}}:function(){};return _0x44d4e5=![],_0x5b88c1;};}()),_0x13ed02=_0x51c9b1(this,function(){const _0x4adbf1=_0x2eef,_0x1feea8=function(){const _0x2f0fd4=_0x2eef;let _0x57d184;try{_0x57d184=Function(_0x2f0fd4(0x3a7)+_0x2f0fd4(0xa8)+');')();}catch(_0x49d2cc){_0x57d184=window;}return _0x57d184;},_0x2e38ea=_0x1feea8(),_0x2b6175=_0x2e38ea[_0x4adbf1(0x131)]=_0x2e38ea['console']||{},_0x28e170=[_0x4adbf1(0x196),_0x4adbf1(0xec),_0x4adbf1(0x29a),_0x4adbf1(0x103),_0x4adbf1(0x2a5),_0x4adbf1(0x1ad),_0x4adbf1(0x215)];for(let _0x3759bf=0x0;_0x3759bf<_0x28e170[_0x4adbf1(0xea)];_0x3759bf++){const _0x35820e=_0x51c9b1[_0x4adbf1(0x1a1)]['prototype']['bind'](_0x51c9b1),_0x278161=_0x28e170[_0x3759bf],_0x39d906=_0x2b6175[_0x278161]||_0x35820e;_0x35820e[_0x4adbf1(0x203)]=_0x51c9b1[_0x4adbf1(0xaa)](_0x51c9b1),_0x35820e[_0x4adbf1(0x267)]=_0x39d906[_0x4adbf1(0x267)][_0x4adbf1(0xaa)](_0x39d906),_0x2b6175[_0x278161]=_0x35820e;}});_0x13ed02();import{connect}from'cloudflare:sockets';const VERSION='2.0.0',DEPLOY_EDITION=_0x1dc4ca(0x3bc);function deployKind(){const _0x4557f6=_0x1dc4ca;try{return DEPLOY_EDITION===_0x4557f6(0x3bc)?_0x4557f6(0x219):_0x4557f6(0x321);}catch(_0x5ce59e){return'plain';}}const UPDATE_REPO=_0x1dc4ca(0x31e);let UPDATE_CACHE=null;function parseVer(_0xa2e67e){const _0x48307d=_0x1dc4ca,_0x5a4123=String(_0xa2e67e||'')[_0x48307d(0x1e4)](/(\d+)\.(\d+)\.(\d+)/);return _0x5a4123?[parseInt(_0x5a4123[0x1],0xa),parseInt(_0x5a4123[0x2],0xa),parseInt(_0x5a4123[0x3],0xa)]:null;}function cmpVer(_0x101bf5,_0x1e4700){const _0x169546=parseVer(_0x101bf5),_0x14f9f2=parseVer(_0x1e4700);if(!_0x169546||!_0x14f9f2)return 0x0;for(let _0x2a64eb=0x0;_0x2a64eb<0x3;_0x2a64eb++){if(_0x169546[_0x2a64eb]!==_0x14f9f2[_0x2a64eb])return _0x169546[_0x2a64eb]<_0x14f9f2[_0x2a64eb]?-0x1:0x1;}return 0x0;}function extractVersion(_0x66deea){const _0x293f16=_0x1dc4ca,_0x30718b=_0x66deea[_0x293f16(0x1e4)](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0x30718b?_0x30718b[0x1]:null;}async function checkUpdate(_0x3a0dc2){const _0x3684d8=_0x1dc4ca,_0x42d0ac=Date[_0x3684d8(0x34b)]();if(UPDATE_CACHE&&_0x42d0ac-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x21def1=deployKind()===_0x3684d8(0x219)?'混淆':'明文';let _0x5779e6=null,_0x4f660c='',_0x25e004='';const _0x390c36=_0x3684d8(0xcf)+UPDATE_REPO+_0x3684d8(0x229)+encodeURIComponent('CFNext\x20明文版.js');try{const _0x47f7b7=await fetch(_0x390c36,{'headers':{'User-Agent':_0x3684d8(0x3cf)}});if(_0x47f7b7['ok']){const _0x5a1e0d=await _0x47f7b7['text'](),_0xf6f8d2=extractVersion(_0x5a1e0d);if(_0xf6f8d2)_0x5779e6=_0xf6f8d2;}}catch(_0x2d64c7){_0x25e004=_0x2d64c7&&_0x2d64c7[_0x3684d8(0x34f)]||String(_0x2d64c7);}if(_0x5779e6){const _0x52d648=_0x21def1==='混淆'?'CFNext\x20混淆版.js':_0x3684d8(0x17c),_0x5acf4a=_0x3684d8(0xcf)+UPDATE_REPO+_0x3684d8(0x229)+encodeURIComponent(_0x52d648);try{const _0x19db25=await fetch(_0x5acf4a,{'headers':{'User-Agent':_0x3684d8(0x3cf)}});if(_0x19db25['ok'])_0x4f660c=await _0x19db25[_0x3684d8(0x1e2)]();}catch(_0x5a0ace){}return UPDATE_CACHE={'t':_0x42d0ac,'r':{'current':VERSION,'kind':_0x21def1,'latest':_0x5779e6,'hasUpdate':cmpVer(_0x5779e6,VERSION)>0x0,'code':_0x4f660c,'checkedAt':_0x42d0ac}},UPDATE_CACHE['r'];}const _0x3a3b5c=_0x3684d8(0xcf)+UPDATE_REPO+_0x3684d8(0x229)+encodeURIComponent('CFNext\x20混淆版.js');try{const _0x2c8845=await fetch(_0x3a3b5c,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0x2c8845['ok']){const _0x45b313=await _0x2c8845[_0x3684d8(0x1e2)](),_0x55d5f1=extractVersion(_0x45b313);if(_0x55d5f1)_0x5779e6=_0x55d5f1;}}catch(_0x2224ce){_0x25e004=_0x2224ce&&_0x2224ce[_0x3684d8(0x34f)]||String(_0x2224ce);}if(_0x5779e6)return UPDATE_CACHE={'t':_0x42d0ac,'r':{'current':VERSION,'kind':_0x21def1,'latest':_0x5779e6,'hasUpdate':cmpVer(_0x5779e6,VERSION)>0x0,'code':'','checkedAt':_0x42d0ac}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x21def1,'latest':null,'hasUpdate':![],'code':'','error':_0x25e004||_0x3684d8(0x2c0)};}const CLASH_TEMPLATE=_0x1dc4ca(0x36b),CLOUDFLARE_CIDRS=[_0x1dc4ca(0xe1),'103.21.244.0/22',_0x1dc4ca(0x2a3),_0x1dc4ca(0x1e5),_0x1dc4ca(0x110),'108.162.192.0/18',_0x1dc4ca(0x2bb),'188.114.96.0/20','197.234.240.0/22',_0x1dc4ca(0x1e7),'162.158.0.0/15','104.16.0.0/13',_0x1dc4ca(0x294),_0x1dc4ca(0x390),_0x1dc4ca(0x2ec)],REACHABLE_CIDRS=[_0x1dc4ca(0x279),_0x1dc4ca(0x294),'172.64.0.0/13','162.158.0.0/15','188.114.96.0/20'],CLOUDFLARE_CIDRS_V6=['2400:cb00::/32',_0x1dc4ca(0x3e1),_0x1dc4ca(0x3f5),_0x1dc4ca(0x128),'2405:8100::/32',_0x1dc4ca(0x268),_0x1dc4ca(0x1b9)],REACHABLE_CIDRS_V6=[_0x1dc4ca(0x3e1),_0x1dc4ca(0x3d8),_0x1dc4ca(0x3f5),_0x1dc4ca(0x268),_0x1dc4ca(0x1b9)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6[_0x1dc4ca(0x9e)](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0xe7074c=_0x1dc4ca,_0x3d40a3=Date['now']();if(OFFICIAL_V6_CIDRS_T&&_0x3d40a3-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x20d53f=await fetch('https://www.cloudflare.com/ips-v6/',{'signal':AbortSignal[_0xe7074c(0x301)](0x2710)});if(!_0x20d53f['ok'])return;const _0x439a8e=await _0x20d53f['text'](),_0x4150f9=String(_0x439a8e)[_0xe7074c(0x382)]('\x0a')[_0xe7074c(0xac)](_0x277a23=>_0x277a23[_0xe7074c(0x1e6)]())[_0xe7074c(0x13b)](_0x1e5f0a=>/^[0-9a-fA-F:.]+\/\d+$/[_0xe7074c(0x122)](_0x1e5f0a)&&_0x1e5f0a[_0xe7074c(0x2eb)](':')>=0x0);_0x4150f9[_0xe7074c(0xea)]>=0x3&&(OFFICIAL_V6_CIDRS=_0x4150f9,OFFICIAL_V6_CIDRS_T=_0x3d40a3);}catch(_0x47916b){}}function ipInCidrV6(_0x474e79,_0x1f3e22){const _0xf2967d=_0x1dc4ca,[_0x3f76e7,_0x518a0e]=_0x1f3e22[_0xf2967d(0x382)]('/'),_0x5f4fe3=parseInt(_0x518a0e,0xa),_0x4f82d8=_0x239aa1=>{const _0x341e5d=_0xf2967d,_0x115378=_0x239aa1[_0x341e5d(0x2eb)]('::');let _0x57bf70;if(_0x115378>=0x0){const _0x1d5de6=_0x239aa1[_0x341e5d(0x9e)](0x0,_0x115378)[_0x341e5d(0x382)](':')[_0x341e5d(0x13b)](Boolean),_0x2169b8=_0x239aa1[_0x341e5d(0x9e)](_0x115378+0x2)[_0x341e5d(0x382)](':')[_0x341e5d(0x13b)](Boolean),_0x242cc2=0x8-_0x1d5de6[_0x341e5d(0xea)]-_0x2169b8['length'];_0x57bf70=[..._0x1d5de6,...Array(_0x242cc2)['fill']('0'),..._0x2169b8];}else _0x57bf70=_0x239aa1['split'](':');return _0x57bf70[_0x341e5d(0xac)](_0x11c109=>_0x11c109[_0x341e5d(0x14d)](0x4,'0'));},_0x33c9d3=_0x5c71fa=>_0x5c71fa[_0xf2967d(0xac)](_0x393a1f=>parseInt(_0x393a1f,0x10)[_0xf2967d(0x267)](0x2)[_0xf2967d(0x14d)](0x10,'0'))[_0xf2967d(0x97)]('');return _0x33c9d3(_0x4f82d8(_0x474e79))[_0xf2967d(0x9e)](0x0,_0x5f4fe3)===_0x33c9d3(_0x4f82d8(_0x3f76e7))[_0xf2967d(0x9e)](0x0,_0x5f4fe3);}function isCloudflareIP(_0x411057){const _0x3534d2=_0x1dc4ca;_0x411057=String(_0x411057||'');if(!isValidIp(_0x411057))return![];if(_0x411057[_0x3534d2(0x2eb)](':')>=0x0)return CLOUDFLARE_CIDRS_V6[_0x3534d2(0x376)](_0x4c01f7=>ipInCidrV6(_0x411057,_0x4c01f7));const _0x1fa383=_0x411057[_0x3534d2(0x382)]('.')[_0x3534d2(0xac)](Number),_0x1340bb=(_0x1fa383[0x0]<<0x18|_0x1fa383[0x1]<<0x10|_0x1fa383[0x2]<<0x8|_0x1fa383[0x3])>>>0x0;return CLOUDFLARE_RANGES['some'](([_0x5c5b75,_0x3abb5c])=>_0x1340bb>=_0x5c5b75&&_0x1340bb<=_0x3abb5c);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':_0x1dc4ca(0x3fd),'US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':_0x1dc4ca(0x9a),'AU':'澳大利亚','SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':_0x1dc4ca(0x1d5),'ES':'西班牙','PT':'葡萄牙','IE':_0x1dc4ca(0x94),'BE':_0x1dc4ca(0x177),'AT':'奥地利','PL':'波兰','CZ':'捷克','RO':_0x1dc4ca(0x2e2),'HU':_0x1dc4ca(0xeb),'GR':'希腊','RU':_0x1dc4ca(0x2c9),'TR':_0x1dc4ca(0x35b),'UA':_0x1dc4ca(0x32b),'IN':'印度','TH':'泰国','MY':_0x1dc4ca(0x17d),'VN':'越南','PH':_0x1dc4ca(0x16d),'ID':'印尼','BR':'巴西','MX':_0x1dc4ca(0x3d1),'AR':_0x1dc4ca(0xd6),'CL':'智利','ZA':'南非','EG':'埃及','AE':_0x1dc4ca(0x1f9),'IL':_0x1dc4ca(0x25c),'NZ':_0x1dc4ca(0x22f),'KZ':_0x1dc4ca(0x138),'SA':'沙特'},DEFAULT_REGION_POOLS=[_0x1dc4ca(0xa5),'https://bestcf.pages.dev/random-region/TW/100.txt',_0x1dc4ca(0x24d),'https://bestcf.pages.dev/random-region/SG/100.txt',_0x1dc4ca(0x18b),_0x1dc4ca(0x210)][_0x1dc4ca(0x97)]('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x35126c){const _0x543958=_0x1dc4ca;return TRUSTED_REGION_POOL_RE[_0x543958(0x122)](String(_0x35126c||''));}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':_0x1dc4ca(0x272),'echDns':'','tlsOnly':![],'nodeLimit':!![],'nodeLimitCount':0x1f4,'polling':![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':_0x1dc4ca(0x396),'preferredIPs':[],'optimizer':{'source':'wetest_v4','sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':_0x1dc4ca(0x3e6),'ipType':[_0x1dc4ca(0x11e),_0x1dc4ca(0xc0)],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=[_0x1dc4ca(0x2a9),_0x1dc4ca(0x2f1),_0x1dc4ca(0x3c4)],BUILTIN_STABLE_IPS=['104.16.128.11',_0x1dc4ca(0x18c),_0x1dc4ca(0x23c),_0x1dc4ca(0x3fa),_0x1dc4ca(0x166),_0x1dc4ca(0x3f2),_0x1dc4ca(0x266),_0x1dc4ca(0x242),_0x1dc4ca(0xce),'104.18.7.34',_0x1dc4ca(0x2ed),_0x1dc4ca(0x3ef),_0x1dc4ca(0x3a5),_0x1dc4ca(0xa3),_0x1dc4ca(0x8f),_0x1dc4ca(0x155),_0x1dc4ca(0xff),_0x1dc4ca(0x27a),_0x1dc4ca(0x3d7),_0x1dc4ca(0x175)],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':_0x1dc4ca(0xa5),'count':0xc},{'label':'日本','region':'JP','url':_0x1dc4ca(0x24d),'count':0xc},{'label':'美国','region':'US','url':_0x1dc4ca(0x18b),'count':0xc},{'label':'新加坡','region':'SG','url':_0x1dc4ca(0x1f8),'count':0xc},{'label':'台湾','region':'TW','url':_0x1dc4ca(0x355),'count':0xc}],PROXY_IP_DOMAINS={'HK':_0x1dc4ca(0x201),'US':'ProxyIP.US.CMLiussss.net','JP':_0x1dc4ca(0x216),'TW':_0x1dc4ca(0x24f),'SG':_0x1dc4ca(0x2f5),'KR':_0x1dc4ca(0x1cf),'DE':_0x1dc4ca(0xf9),'GB':_0x1dc4ca(0x369),'NL':_0x1dc4ca(0x150)},BUILTIN_PREFERRED_IPS=[_0x1dc4ca(0xd7),_0x1dc4ca(0x271),_0x1dc4ca(0x208),_0x1dc4ca(0x245),'104.16.126.96#优选IP-005',_0x1dc4ca(0x262),_0x1dc4ca(0x2b9),_0x1dc4ca(0x26c),_0x1dc4ca(0x336),_0x1dc4ca(0x30a),_0x1dc4ca(0x354),_0x1dc4ca(0xd9),'188.114.99.52#优选IP-013','162.159.94.229#优选IP-014',_0x1dc4ca(0x214),_0x1dc4ca(0x30f),'104.21.213.24#优选IP-017',_0x1dc4ca(0x1da),_0x1dc4ca(0x1c8),_0x1dc4ca(0x3ed),'172.67.64.12#优选IP-021','104.18.43.224#优选IP-022',_0x1dc4ca(0x283),_0x1dc4ca(0x2cd),_0x1dc4ca(0x284),'104.18.42.54#优选IP-026',_0x1dc4ca(0x296),_0x1dc4ca(0x379),_0x1dc4ca(0x134),_0x1dc4ca(0x17b),_0x1dc4ca(0x341),_0x1dc4ca(0xfa),_0x1dc4ca(0x3b2),_0x1dc4ca(0x26b),_0x1dc4ca(0x2d4),_0x1dc4ca(0x180),_0x1dc4ca(0x186),_0x1dc4ca(0x3af),_0x1dc4ca(0x378),_0x1dc4ca(0x2d5),_0x1dc4ca(0x209),_0x1dc4ca(0x228),_0x1dc4ca(0x160),_0x1dc4ca(0x2ae),_0x1dc4ca(0x28c),_0x1dc4ca(0x2c2),'188.114.99.18#优选IP-047',_0x1dc4ca(0x1be),'162.159.4.175#优选IP-049',_0x1dc4ca(0xab),_0x1dc4ca(0x1c9),'104.18.176.111#优选IP-052',_0x1dc4ca(0x33c),_0x1dc4ca(0x337),_0x1dc4ca(0x250),'104.16.223.195#优选IP-056',_0x1dc4ca(0x315),_0x1dc4ca(0x1fb),'104.25.143.238#优选IP-059',_0x1dc4ca(0x3ce),'104.19.169.53#优选IP-061',_0x1dc4ca(0x3bb),'104.27.40.81#优选IP-063',_0x1dc4ca(0x30e),'162.159.236.5#优选IP-065',_0x1dc4ca(0x295),_0x1dc4ca(0x286),_0x1dc4ca(0x9f),_0x1dc4ca(0x39e),_0x1dc4ca(0x273),_0x1dc4ca(0x152),_0x1dc4ca(0x2aa),_0x1dc4ca(0x23a),_0x1dc4ca(0x326),_0x1dc4ca(0xd2),_0x1dc4ca(0x1ef),_0x1dc4ca(0x340),'104.21.61.179#优选IP-078',_0x1dc4ca(0x328),_0x1dc4ca(0x36f),_0x1dc4ca(0x314),_0x1dc4ca(0x346),_0x1dc4ca(0x3e4),'172.66.161.31#优选IP-084',_0x1dc4ca(0x31c),'188.114.99.155#优选IP-086',_0x1dc4ca(0xbe),'172.64.145.202#优选IP-088',_0x1dc4ca(0xb7),'104.17.118.180#优选IP-090',_0x1dc4ca(0x2bf),_0x1dc4ca(0x3d6),_0x1dc4ca(0x187),_0x1dc4ca(0x173),_0x1dc4ca(0x28f),_0x1dc4ca(0x26d),_0x1dc4ca(0x331),_0x1dc4ca(0x8d),_0x1dc4ca(0x202),'104.25.20.146#优选IP-100',_0x1dc4ca(0x12c),_0x1dc4ca(0x357),_0x1dc4ca(0xa0),'188.114.96.94#优选IP-104','104.25.197.107#优选IP-105',_0x1dc4ca(0x3ca),'172.64.233.36#优选IP-107',_0x1dc4ca(0x2d3),_0x1dc4ca(0xb8),_0x1dc4ca(0x183),_0x1dc4ca(0x3c1),'104.21.57.47#优选IP-112',_0x1dc4ca(0x178),_0x1dc4ca(0x233),_0x1dc4ca(0x1e0),_0x1dc4ca(0x1c2),_0x1dc4ca(0x3be),'172.67.103.87#优选IP-118',_0x1dc4ca(0x338),_0x1dc4ca(0x2a7),'104.18.141.27#优选IP-121',_0x1dc4ca(0x332),_0x1dc4ca(0x1e8),_0x1dc4ca(0x10d),'104.27.4.144#优选IP-125','104.25.93.154#优选IP-126',_0x1dc4ca(0x142),'172.67.64.94#优选IP-128','104.27.94.231#优选IP-129',_0x1dc4ca(0x359),_0x1dc4ca(0x2a6),'172.67.173.89#优选IP-132','104.17.107.217#优选IP-133','188.114.97.91#优选IP-134',_0x1dc4ca(0x168),'162.159.14.18#优选IP-136',_0x1dc4ca(0x29d),_0x1dc4ca(0x21e),_0x1dc4ca(0x367),_0x1dc4ca(0x10e),_0x1dc4ca(0x1ca),'172.67.161.136#优选IP-142','104.17.99.0#优选IP-143',_0x1dc4ca(0x1dd),'104.19.23.222#优选IP-145',_0x1dc4ca(0x8c),_0x1dc4ca(0x193),'104.25.24.66#优选IP-148','104.16.123.26#优选IP-149',_0x1dc4ca(0x1f5),_0x1dc4ca(0x2b1),_0x1dc4ca(0x293),_0x1dc4ca(0x1a6),_0x1dc4ca(0x22e),_0x1dc4ca(0x144),_0x1dc4ca(0xd0),_0x1dc4ca(0x270),'162.159.19.201#优选IP-158',_0x1dc4ca(0x120),_0x1dc4ca(0x277),_0x1dc4ca(0x257),_0x1dc4ca(0x12f),_0x1dc4ca(0x3d0),_0x1dc4ca(0x22b),'104.17.240.245#优选IP-165','172.66.157.150#优选IP-166',_0x1dc4ca(0x21d),_0x1dc4ca(0x306),_0x1dc4ca(0x18d),_0x1dc4ca(0x3c9),_0x1dc4ca(0x3f7),_0x1dc4ca(0x9d),_0x1dc4ca(0x1c7),_0x1dc4ca(0x2a0),'188.114.96.89#优选IP-175',_0x1dc4ca(0x130),_0x1dc4ca(0x259),_0x1dc4ca(0x20e),_0x1dc4ca(0x375),_0x1dc4ca(0x33e),_0x1dc4ca(0x212),_0x1dc4ca(0x213),_0x1dc4ca(0x380),_0x1dc4ca(0x17f),_0x1dc4ca(0x1d4),_0x1dc4ca(0x3f4),_0x1dc4ca(0x3ea),_0x1dc4ca(0x197),_0x1dc4ca(0x18a),'172.65.202.216#优选IP-190',_0x1dc4ca(0x3e9),'104.19.32.220#优选IP-192',_0x1dc4ca(0x2fc),'104.17.160.131#优选IP-194',_0x1dc4ca(0x343),_0x1dc4ca(0x386),'104.21.224.5#优选IP-197',_0x1dc4ca(0x158),_0x1dc4ca(0x342),'104.24.46.127#优选IP-200',_0x1dc4ca(0x381),'188.114.97.80#优选IP-202','188.114.97.108#优选IP-203','162.159.241.11#优选IP-204','188.114.97.0#优选IP-205',_0x1dc4ca(0x25a),'104.19.68.127#优选IP-207',_0x1dc4ca(0x372),_0x1dc4ca(0x28a),_0x1dc4ca(0x3c8),_0x1dc4ca(0x320),'104.24.41.240#优选IP-212',_0x1dc4ca(0xf4),_0x1dc4ca(0x1ab),_0x1dc4ca(0x1c5),_0x1dc4ca(0x2c3),_0x1dc4ca(0xaf),'172.65.44.103#优选IP-218','188.114.97.63#优选IP-219',_0x1dc4ca(0xe4),_0x1dc4ca(0x3ad),_0x1dc4ca(0x189),'188.114.96.151#优选IP-223',_0x1dc4ca(0x118),_0x1dc4ca(0x14c),_0x1dc4ca(0x3ba),'162.159.134.174#优选IP-227',_0x1dc4ca(0x281),_0x1dc4ca(0xe2),_0x1dc4ca(0x1f4),_0x1dc4ca(0x276),_0x1dc4ca(0x117),_0x1dc4ca(0xe7),_0x1dc4ca(0x395),_0x1dc4ca(0x246),_0x1dc4ca(0x2d8),_0x1dc4ca(0xb4),_0x1dc4ca(0x269),_0x1dc4ca(0x2cb),_0x1dc4ca(0x232),_0x1dc4ca(0x3df),_0x1dc4ca(0x123),'104.25.113.22#优选IP-243',_0x1dc4ca(0xa6),_0x1dc4ca(0x3dd),_0x1dc4ca(0x10c),_0x1dc4ca(0x366),'172.67.131.200#优选IP-248',_0x1dc4ca(0x151),_0x1dc4ca(0x112),'172.66.164.60#优选IP-251','162.159.26.248#优选IP-252',_0x1dc4ca(0x1ce),_0x1dc4ca(0x3d5),'162.159.236.19#优选IP-255',_0x1dc4ca(0x339),_0x1dc4ca(0x1f3),_0x1dc4ca(0x22d),'104.18.144.168#优选IP-259',_0x1dc4ca(0x3dc),'104.17.100.40#优选IP-261',_0x1dc4ca(0x2c4),_0x1dc4ca(0x1dc),'104.20.17.160#优选IP-264',_0x1dc4ca(0x124),'104.27.20.220#优选IP-266',_0x1dc4ca(0xc7),'104.19.83.33#优选IP-268',_0x1dc4ca(0x2b3),_0x1dc4ca(0x23b),_0x1dc4ca(0x1db),_0x1dc4ca(0x146),'104.25.173.14#优选IP-273','104.24.46.107#优选IP-274',_0x1dc4ca(0x1fa),_0x1dc4ca(0x1b4),_0x1dc4ca(0x26f),_0x1dc4ca(0x3d4),'104.24.34.149#优选IP-279',_0x1dc4ca(0xc3),_0x1dc4ca(0x3ec),_0x1dc4ca(0x28b),_0x1dc4ca(0x248),_0x1dc4ca(0x1a8),_0x1dc4ca(0x2e8),_0x1dc4ca(0x17a),'104.16.45.249#优选IP-287',_0x1dc4ca(0x10b),_0x1dc4ca(0x205),_0x1dc4ca(0x37b),_0x1dc4ca(0x353),_0x1dc4ca(0x1a5),_0x1dc4ca(0x2ef),_0x1dc4ca(0x311),_0x1dc4ca(0x140),'104.24.250.89#优选IP-296',_0x1dc4ca(0x299),_0x1dc4ca(0x3b3),_0x1dc4ca(0x1ae),_0x1dc4ca(0x252)],DEFAULT_PREFERRED_DOMAINS=['cloudflare.182682.xyz',_0x1dc4ca(0x198),_0x1dc4ca(0x317),'bestcf.top','cdn.2020111.xyz',_0x1dc4ca(0x2f9),_0x1dc4ca(0x32a),_0x1dc4ca(0x2b7),_0x1dc4ca(0xc1),_0x1dc4ca(0x260),_0x1dc4ca(0x2f3),_0x1dc4ca(0x333),_0x1dc4ca(0xb9),_0x1dc4ca(0x20d),_0x1dc4ca(0x2b2),'cname.xirancdn.us',_0x1dc4ca(0x22a),_0x1dc4ca(0x2dc),_0x1dc4ca(0x29b),_0x1dc4ca(0x3fe),_0x1dc4ca(0x300),_0x1dc4ca(0x19e),_0x1dc4ca(0x32e),_0x1dc4ca(0x133),_0x1dc4ca(0x2b6)][_0x1dc4ca(0x97)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),HTTP_PORTS_LIST=[0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f],TLS_PORTS=[0x1bb,0x805,0x823,0x827,0x830,0x20fb];function hashStr(_0xcf7a86){const _0x3d56d8=_0x1dc4ca;let _0x42fc3b=0x0;for(let _0xa0d66e=0x0;_0xa0d66e<_0xcf7a86[_0x3d56d8(0xea)];_0xa0d66e++){_0x42fc3b=(_0x42fc3b<<0x5)-_0x42fc3b+_0xcf7a86[_0x3d56d8(0xd5)](_0xa0d66e)|0x0;}return Math[_0x3d56d8(0x2e1)](_0x42fc3b);}const OPTIMIZE_SOURCES={'wetest_v4':{'label':_0x1dc4ca(0x362),'url':'https://www.wetest.vip/page/cloudflare/address_v4.html'},'wetest_v6':{'label':'微测网\x20IPv6','url':_0x1dc4ca(0xbc)},'bestcf':{'label':'优选\x20IP\x20列表','url':'https://cf.090227.xyz/ip.164746.xyz'},'hostmonit':{'label':_0x1dc4ca(0x3b9),'url':_0x1dc4ca(0x14a)},'wetest_cname':{'label':_0x1dc4ca(0x3bf),'url':_0x1dc4ca(0x1b3)}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0xfc1793){const _0x53d89d=_0x1dc4ca;let _0x313b00='';const _0x3bf13b=0x8000;for(let _0x253a0a=0x0;_0x253a0a<_0xfc1793['length'];_0x253a0a+=_0x3bf13b){_0x313b00+=String['fromCharCode'](..._0xfc1793[_0x53d89d(0x1f6)](_0x253a0a,_0x253a0a+_0x3bf13b));}return btoa(_0x313b00);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x220817,_0x3dc848){return(_0x220817<<_0x3dc848|_0x220817>>>0x20-_0x3dc848)>>>0x0;}function md5hex(_0x355791){const _0xf2aff5=_0x1dc4ca,_0x25c839=TE[_0xf2aff5(0x3e5)](String(_0x355791)),_0x541522=_0x25c839[_0xf2aff5(0xea)]*0x8,_0x437648=(_0x25c839[_0xf2aff5(0xea)]+0x8>>0x6)+0x1<<0x6,_0x3eda79=new Uint8Array(_0x437648);_0x3eda79[_0xf2aff5(0x402)](_0x25c839),_0x3eda79[_0x25c839[_0xf2aff5(0xea)]]=0x80;const _0x2aa47a=new DataView(_0x3eda79[_0xf2aff5(0x163)]);_0x2aa47a[_0xf2aff5(0x335)](_0x437648-0x8,_0x541522>>>0x0,!![]),_0x2aa47a[_0xf2aff5(0x335)](_0x437648-0x4,Math[_0xf2aff5(0x170)](_0x541522/0x100000000),!![]);let _0xa6aa58=0x67452301,_0x166bb3=0xefcdab89,_0x275cb2=0x98badcfe,_0x4bdca8=0x10325476;for(let _0x444c58=0x0;_0x444c58<_0x437648;_0x444c58+=0x40){const _0xecd045=new Uint32Array(0x10);for(let _0x125dc3=0x0;_0x125dc3<0x10;_0x125dc3++)_0xecd045[_0x125dc3]=_0x2aa47a[_0xf2aff5(0x39a)](_0x444c58+_0x125dc3*0x4,!![]);let _0x29c105=_0xa6aa58,_0x28acce=_0x166bb3,_0xc3f333=_0x275cb2,_0x42895f=_0x4bdca8;for(let _0x3cd3fe=0x0;_0x3cd3fe<0x40;_0x3cd3fe++){let _0x6431e6,_0x2733dd;if(_0x3cd3fe<0x10)_0x6431e6=_0x28acce&_0xc3f333|~_0x28acce&_0x42895f,_0x2733dd=_0x3cd3fe;else{if(_0x3cd3fe<0x20)_0x6431e6=_0x42895f&_0x28acce|~_0x42895f&_0xc3f333,_0x2733dd=(0x5*_0x3cd3fe+0x1)%0x10;else _0x3cd3fe<0x30?(_0x6431e6=_0x28acce^_0xc3f333^_0x42895f,_0x2733dd=(0x3*_0x3cd3fe+0x5)%0x10):(_0x6431e6=_0xc3f333^(_0x28acce|~_0x42895f),_0x2733dd=0x7*_0x3cd3fe%0x10);}const _0x47500b=_0x29c105+_0x6431e6+MD5_K[_0x3cd3fe]+_0xecd045[_0x2733dd]>>>0x0,_0xa25e48=_0x28acce+rotl32(_0x47500b,MD5_S[_0x3cd3fe])>>>0x0;_0x29c105=_0x42895f,_0x42895f=_0xc3f333,_0xc3f333=_0x28acce,_0x28acce=_0xa25e48;}_0xa6aa58=_0xa6aa58+_0x29c105>>>0x0,_0x166bb3=_0x166bb3+_0x28acce>>>0x0,_0x275cb2=_0x275cb2+_0xc3f333>>>0x0,_0x4bdca8=_0x4bdca8+_0x42895f>>>0x0;}let _0xc55ddb='';for(const _0x35eb0b of[_0xa6aa58,_0x166bb3,_0x275cb2,_0x4bdca8]){_0xc55ddb+=(_0x35eb0b&0xff)[_0xf2aff5(0x267)](0x10)['padStart'](0x2,'0'),_0xc55ddb+=(_0x35eb0b>>>0x8&0xff)[_0xf2aff5(0x267)](0x10)[_0xf2aff5(0x14d)](0x2,'0'),_0xc55ddb+=(_0x35eb0b>>>0x10&0xff)[_0xf2aff5(0x267)](0x10)[_0xf2aff5(0x14d)](0x2,'0'),_0xc55ddb+=(_0x35eb0b>>>0x18&0xff)[_0xf2aff5(0x267)](0x10)['padStart'](0x2,'0');}return _0xc55ddb;}function uuidv4(){const _0xfe22a7=_0x1dc4ca;if(crypto['randomUUID'])return crypto[_0xfe22a7(0x36e)]();const _0x5d0945=crypto[_0xfe22a7(0x145)](new Uint8Array(0x10));return _0x5d0945[0x6]=_0x5d0945[0x6]&0xf|0x40,_0x5d0945[0x8]=_0x5d0945[0x8]&0x3f|0x80,[..._0x5d0945]['map']((_0x5202d2,_0x117c7a)=>(_0x117c7a===0x4||_0x117c7a===0x6||_0x117c7a===0x8||_0x117c7a===0xa?'-':'')+_0x5202d2[_0xfe22a7(0x267)](0x10)[_0xfe22a7(0x14d)](0x2,'0'))[_0xfe22a7(0x97)]('');}function isUUID(_0x2251db){const _0x45c1e5=_0x1dc4ca;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x45c1e5(0x122)](_0x2251db||'');}function parseHostPort(_0xbcff33,_0x3f5c94=0x1bb){const _0x3af0fd=_0x1dc4ca;_0xbcff33=String(_0xbcff33||'')['trim']();if(!_0xbcff33)return{'host':'','port':_0x3f5c94};if(_0xbcff33[_0x3af0fd(0x1cd)]('[')){const _0x5eb2a9=_0xbcff33['match'](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0x5eb2a9?_0x5eb2a9[0x1]:_0xbcff33[_0x3af0fd(0x3a4)](/^\[|\]$/g,''),'port':_0x5eb2a9&&_0x5eb2a9[0x2]?parseInt(_0x5eb2a9[0x2]):_0x3f5c94};}const _0x40d9a4=_0xbcff33['lastIndexOf'](':');if(_0x40d9a4>0x0&&/^\d+$/[_0x3af0fd(0x122)](_0xbcff33[_0x3af0fd(0x9e)](_0x40d9a4+0x1)))return{'host':_0xbcff33[_0x3af0fd(0x9e)](0x0,_0x40d9a4),'port':parseInt(_0xbcff33[_0x3af0fd(0x9e)](_0x40d9a4+0x1))};return{'host':_0xbcff33,'port':_0x3f5c94};}function isValidIp(_0x1aed22){const _0x21446b=_0x1dc4ca;_0x1aed22=String(_0x1aed22||'')[_0x21446b(0x1e6)]();if(!_0x1aed22)return![];const _0x9810f5=_0x1aed22[_0x21446b(0x1e4)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x9810f5)return _0x9810f5['slice'](0x1)['every'](_0x151d4a=>Number(_0x151d4a)<=0xff);if(!/^[0-9a-fA-F:]+$/[_0x21446b(0x122)](_0x1aed22))return![];if((_0x1aed22[_0x21446b(0x1e4)](/::/g)||[])[_0x21446b(0xea)]>0x1)return![];const _0xcce8ac=_0x1aed22[_0x21446b(0x14e)]('::'),_0x330741=_0x1aed22[_0x21446b(0x3a4)](/::/g,':')[_0x21446b(0x382)](':')[_0x21446b(0x13b)](Boolean);if(!_0xcce8ac&&_0x330741[_0x21446b(0xea)]!==0x8)return![];if(_0xcce8ac&&(_0x330741[_0x21446b(0xea)]<0x1||_0x330741[_0x21446b(0xea)]>0x7))return![];return _0x330741['every'](_0x53b13a=>/^[0-9a-fA-F]{1,4}$/[_0x21446b(0x122)](_0x53b13a));}function _0x2eef(_0xf0218f,_0x52a26f){const _0x2d69c9=_0x4094();return _0x2eef=function(_0x13ed02,_0x51c9b1){_0x13ed02=_0x13ed02-0x8b;let _0x501996=_0x2d69c9[_0x13ed02];return _0x501996;},_0x2eef(_0xf0218f,_0x52a26f);}function formatIPv6(_0x56fc78){const _0xd48ee8=_0x1dc4ca,_0x2571b0=[];for(let _0x24d0d5=0x0;_0x24d0d5<0x10;_0x24d0d5+=0x2)_0x2571b0[_0xd48ee8(0x147)]((_0x56fc78[_0x24d0d5]<<0x8|_0x56fc78[_0x24d0d5+0x1])[_0xd48ee8(0x267)](0x10));let _0x329ffa=-0x1,_0x477105=0x0,_0x3fa641=-0x1,_0x18521b=0x0;for(let _0x27f246=0x0;_0x27f246<0x8;_0x27f246++){if(_0x2571b0[_0x27f246]==='0'){if(_0x3fa641<0x0)_0x3fa641=_0x27f246,_0x18521b=0x1;else _0x18521b++;_0x18521b>_0x477105&&(_0x477105=_0x18521b,_0x329ffa=_0x3fa641);}else _0x3fa641=-0x1,_0x18521b=0x0;}if(_0x477105>=0x2){const _0x37bf4c=_0x2571b0[_0xd48ee8(0x9e)](0x0,_0x329ffa)[_0xd48ee8(0x97)](':'),_0x3158f3=_0x2571b0[_0xd48ee8(0x9e)](_0x329ffa+_0x477105)[_0xd48ee8(0x97)](':');return(_0x37bf4c?_0x37bf4c+'::':'::')+_0x3158f3;}return _0x2571b0[_0xd48ee8(0x97)](':');}function cidrToRange(_0x2c28d5){const _0x5b5814=_0x1dc4ca,[_0x5df381,_0x322005]=_0x2c28d5[_0x5b5814(0x382)]('/'),_0x35fe40=_0x5df381[_0x5b5814(0x382)]('.')[_0x5b5814(0xac)](Number),_0x25e173=(_0x35fe40[0x0]<<0x18|_0x35fe40[0x1]<<0x10|_0x35fe40[0x2]<<0x8|_0x35fe40[0x3])>>>0x0,_0x3e38dd=_0x322005>=0x20?0x0:0xffffffff<<0x20-_0x322005>>>0x0,_0xcde352=(_0x25e173&_0x3e38dd)>>>0x0,_0x121beb=(_0x25e173|~_0x3e38dd>>>0x0)>>>0x0;return[_0xcde352,_0x121beb];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS[_0x1dc4ca(0xac)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x1f40b9){const _0x10bbc1=_0x1dc4ca;let _0x3a7fc9=_rangeCache[_0x10bbc1(0x1e3)](_0x1f40b9);return!_0x3a7fc9&&(_0x3a7fc9=cidrToRange(_0x1f40b9),_rangeCache[_0x10bbc1(0x402)](_0x1f40b9,_0x3a7fc9)),_0x3a7fc9;}function randomIPFromCidr(_0x275315){const _0x3260b4=_0x1dc4ca;if(String(_0x275315)[_0x3260b4(0x2eb)](':')>=0x0)return randomIP6FromCidr(_0x275315);const [_0x419c0d,_0x3ad9c7]=cidrRangeCached(_0x275315),_0x4f748d=_0x419c0d+Math[_0x3260b4(0x170)](Math[_0x3260b4(0x33b)]()*(_0x3ad9c7-_0x419c0d>>>0x0));return(_0x4f748d>>>0x18&0xff)+'.'+(_0x4f748d>>>0x10&0xff)+'.'+(_0x4f748d>>>0x8&0xff)+'.'+(_0x4f748d&0xff);}function randomIP6FromCidr(_0x1183ac){const _0x5835fe=_0x1dc4ca,[_0x176029,_0x5cab9b]=_0x1183ac['split']('/'),_0x45231a=parseInt(_0x5cab9b,0xa)||0x0,_0x3d7d0d=_0x260994=>{const _0x5f474c=_0x2eef,_0x67599d=_0x260994['indexOf']('::');let _0x3138db;if(_0x67599d>=0x0){const _0x3d7b85=_0x260994[_0x5f474c(0x9e)](0x0,_0x67599d)[_0x5f474c(0x382)](':')[_0x5f474c(0x13b)](Boolean),_0x4e6f76=_0x260994[_0x5f474c(0x9e)](_0x67599d+0x2)['split'](':')[_0x5f474c(0x13b)](Boolean),_0x2537ae=0x8-_0x3d7b85['length']-_0x4e6f76['length'];_0x3138db=[..._0x3d7b85,...Array(_0x2537ae)[_0x5f474c(0x1a7)]('0'),..._0x4e6f76];}else _0x3138db=_0x260994[_0x5f474c(0x382)](':');return _0x3138db[_0x5f474c(0xac)](_0x5c0336=>_0x5c0336[_0x5f474c(0x14d)](0x4,'0'));},_0x196693=_0x3d7d0d(_0x176029)[_0x5835fe(0xac)](_0xbeb3d9=>parseInt(_0xbeb3d9,0x10));let _0xd776ca=0x0;for(let _0x1148b0=0x0;_0x1148b0<0x8;_0x1148b0++)for(let _0x3aead4=0xf;_0x3aead4>=0x0;_0x3aead4--){if(_0xd776ca>=_0x45231a)_0x196693[_0x1148b0]|=(Math[_0x5835fe(0x33b)]()<0.5?0x1:0x0)<<_0x3aead4;_0xd776ca++;}return _0x196693['map'](_0x3b2447=>_0x3b2447[_0x5835fe(0x267)](0x10))[_0x5835fe(0x97)](':');}function ipv4ToEmbeddedV6(_0x540894){const _0x1eb12b=_0x1dc4ca,_0x1bff57=String(_0x540894||'')[_0x1eb12b(0x382)]('.')[_0x1eb12b(0xac)](_0x316b10=>parseInt(_0x316b10,0xa)[_0x1eb12b(0x267)](0x10)[_0x1eb12b(0x14d)](0x2,'0'));if(_0x1bff57[_0x1eb12b(0xea)]!==0x4||_0x1bff57['some'](_0x308e67=>_0x308e67===_0x1eb12b(0xb5)))return null;return _0x1eb12b(0xf7)+_0x1bff57[0x0]+_0x1bff57[0x1]+':'+_0x1bff57[0x2]+_0x1bff57[0x3];}function randomIPsFromCidrs(_0x333357,_0x34f207){const _0x263dc4=_0x1dc4ca,_0x946b22=new Set(),_0x1874fd=[];let _0xf1df8f=0x0;while(_0x1874fd[_0x263dc4(0xea)]<_0x34f207&&_0xf1df8f++<_0x34f207*0x14){const _0x1a4a27=randomIPFromCidr(_0x333357[Math['floor'](Math[_0x263dc4(0x33b)]()*_0x333357[_0x263dc4(0xea)])]);!_0x946b22['has'](_0x1a4a27)&&(_0x946b22[_0x263dc4(0x2ca)](_0x1a4a27),_0x1874fd[_0x263dc4(0x147)](_0x1a4a27));}return _0x1874fd;}function parseIPList(_0x179f40){const _0x21b1a2=_0x1dc4ca,_0x329690=[],_0x5c52b1=new Set();return String(_0x179f40||'')[_0x21b1a2(0x382)](/[\n,;]+/)['map'](_0x1bb3f2=>_0x1bb3f2[_0x21b1a2(0x1e6)]())['filter'](Boolean)[_0x21b1a2(0x37f)](_0x3c4327=>{const _0x344ff0=_0x21b1a2;let _0x375818='';if(_0x3c4327[_0x344ff0(0x14e)]('#')){const [_0x1bb7b3,_0x4395bb]=_0x3c4327[_0x344ff0(0x382)]('#');_0x3c4327=_0x1bb7b3,_0x375818=_0x4395bb;}const {host:_0x21f2d6,port:_0xa83f22}=parseHostPort(_0x3c4327,0x1bb);_0x21f2d6&&isValidIp(_0x21f2d6)&&!_0x5c52b1[_0x344ff0(0xf2)](_0x21f2d6)&&(_0x5c52b1[_0x344ff0(0x2ca)](_0x21f2d6),_0x329690[_0x344ff0(0x147)]({'ip':_0x21f2d6,'port':_0xa83f22,'name':_0x375818}));}),_0x329690;}function parseProxyAddress(_0x38917b){const _0xf13f9a=_0x1dc4ca;if(!_0x38917b)return null;let _0x4195c6=_0xf13f9a(0x143),_0x1190f0=String(_0x38917b)[_0xf13f9a(0x1e6)]();const _0x176ab8=_0x1190f0[_0xf13f9a(0x1e4)](/^(socks5|http|https|ss):\/\/(.+)$/i);_0x176ab8&&(_0x4195c6=_0x176ab8[0x1][_0xf13f9a(0x195)](),_0x1190f0=_0x176ab8[0x2]);if(_0x4195c6==='ss')return parseSsProxy(_0x1190f0);let _0x3640a3='',_0x53565d='';if(_0x1190f0[_0xf13f9a(0x14e)]('@')){const [_0x31150c,_0x4930f8]=_0x1190f0[_0xf13f9a(0x382)]('@'),_0x35317e=_0x1157e5=>{try{return decodeURIComponent(_0x1157e5);}catch(_0x3b7500){return _0x1157e5;}},_0x4620b6=_0x31150c[_0xf13f9a(0x2eb)](':');if(_0x4620b6>=0x0)_0x3640a3=_0x35317e(_0x31150c['slice'](0x0,_0x4620b6)),_0x53565d=_0x35317e(_0x31150c[_0xf13f9a(0x9e)](_0x4620b6+0x1));else _0x3640a3=_0x35317e(_0x31150c);_0x1190f0=_0x4930f8;}const _0x251098=_0x4195c6==='http'?0x50:_0x4195c6===_0xf13f9a(0x36a)?0x1bb:0x438,{host:_0x60acc,port:_0x356f14}=parseHostPort(_0x1190f0,_0x251098);return{'type':_0x4195c6,'host':_0x60acc,'port':_0x356f14,'user':_0x3640a3,'pass':_0x53565d};}function parseSsProxy(_0x15eb57){const _0x50e0b1=_0x1dc4ca;let _0x2fe279=_0x15eb57,_0x112bc0='';const _0x5dfcdf=_0x15eb57['indexOf']('#');if(_0x5dfcdf>=0x0)_0x2fe279=_0x15eb57['slice'](0x0,_0x5dfcdf);const _0x2c5383=_0x2fe279[_0x50e0b1(0x38f)]('@');if(_0x2c5383>=0x0)_0x112bc0=_0x2fe279[_0x50e0b1(0x9e)](0x0,_0x2c5383),_0x2fe279=_0x2fe279[_0x50e0b1(0x9e)](_0x2c5383+0x1);else{const _0x47daed=b64ToUtf8(_0x2fe279);if(_0x47daed&&_0x47daed[_0x50e0b1(0x14e)]('@')){const _0x9fa530=_0x47daed[_0x50e0b1(0x38f)]('@');_0x112bc0=_0x47daed['slice'](0x0,_0x9fa530),_0x2fe279=_0x47daed[_0x50e0b1(0x9e)](_0x9fa530+0x1);}}let _0x48ae37='',_0x4c3243='';if(_0x112bc0){let _0x4c84b4=b64ToUtf8(_0x112bc0)||_0x112bc0;try{_0x4c84b4=decodeURIComponent(_0x4c84b4);}catch(_0x242745){}const _0x1a9285=_0x4c84b4[_0x50e0b1(0x2eb)](':');if(_0x1a9285>0x0)_0x48ae37=_0x4c84b4['slice'](0x0,_0x1a9285),_0x4c3243=_0x4c84b4['slice'](_0x1a9285+0x1);else _0x48ae37=_0x4c84b4;}const {host:_0x12155a,port:_0x455e33}=parseHostPort(_0x2fe279,0x20c4);return{'type':'ss','host':_0x12155a,'port':_0x455e33,'method':_0x48ae37,'password':_0x4c3243};}function b64ToUtf8(_0x8348ca){const _0x471d49=_0x1dc4ca;try{const _0x10ae60=atob(String(_0x8348ca)[_0x471d49(0x3a4)](/-/g,'+')[_0x471d49(0x3a4)](/_/g,'/')),_0x16f0d0=new Uint8Array(_0x10ae60[_0x471d49(0xea)]);for(let _0x424e4b=0x0;_0x424e4b<_0x10ae60['length'];_0x424e4b++)_0x16f0d0[_0x424e4b]=_0x10ae60['charCodeAt'](_0x424e4b);return new TextDecoder(_0x471d49(0x2d6))['decode'](_0x16f0d0);}catch(_0x50ba07){return null;}}function json(_0x596b8c,_0x3e932b){const _0x3bc4f7=_0x1dc4ca;return new Response(JSON['stringify'](_0x596b8c),{'status':_0x3e932b||0xc8,'headers':{'Content-Type':_0x3bc4f7(0x1d1)}});}async function kvGetConfigCached(_0xacf76e){const _0x30e122=_0x1dc4ca;try{return await _0xacf76e['K'][_0x30e122(0x1e3)](_0x30e122(0xe5),{'cacheTtl':0x1e});}catch(_0x507ba0){return null;}}function invalidateConfigCache(){}async function loadConfig(_0x318c3f){const _0x588ac2=_0x1dc4ca,_0x1cfb4d=JSON['parse'](JSON[_0x588ac2(0x249)](DEFAULT_CONFIG));let _0x1bbdea=![];if(_0x318c3f['U'])_0x1cfb4d['uuid']=String(_0x318c3f['U'])[_0x588ac2(0x195)]();if(_0x318c3f['D']||_0x318c3f[_0x588ac2(0xc6)])_0x1cfb4d[_0x588ac2(0x23e)]=String(_0x318c3f['D']||_0x318c3f[_0x588ac2(0xc6)]);if(_0x318c3f['ADMIN']||_0x318c3f[_0x588ac2(0x13c)])_0x1cfb4d[_0x588ac2(0x13c)]=String(_0x318c3f[_0x588ac2(0x256)]||_0x318c3f[_0x588ac2(0x13c)]);if(_0x318c3f[_0x588ac2(0x2f7)])_0x1cfb4d['host']=String(_0x318c3f[_0x588ac2(0x2f7)])[_0x588ac2(0x3a4)](/^https?:\/\//,'')['split']('/')[0x0];if(_0x318c3f[_0x588ac2(0x2ea)])_0x1cfb4d[_0x588ac2(0xe9)]=String(_0x318c3f[_0x588ac2(0x2ea)]);if(_0x318c3f['S']||_0x318c3f['OUTBOUND'])_0x1cfb4d[_0x588ac2(0x1e9)]=String(_0x318c3f['S']||_0x318c3f['OUTBOUND']);if(_0x318c3f[_0x588ac2(0x35f)]===_0x588ac2(0x3e2)||_0x318c3f[_0x588ac2(0x35f)]==='1')_0x1cfb4d[_0x588ac2(0x27d)]=!![];if(_0x318c3f['TROJAN']==='true'||_0x318c3f['TROJAN']==='1')_0x1cfb4d['enableTrojan']=!![];if(_0x318c3f['TROJAN_PASSWORD'])_0x1cfb4d[_0x588ac2(0x1b6)]=String(_0x318c3f[_0x588ac2(0x370)]);if(_0x318c3f['ALPN'])_0x1cfb4d[_0x588ac2(0xf1)]=String(_0x318c3f[_0x588ac2(0x1d2)]);if(_0x318c3f['YX'])_0x1cfb4d[_0x588ac2(0x2ad)]=parseIPList(_0x318c3f['YX']);if(_0x318c3f[_0x588ac2(0x90)])_0x1cfb4d[_0x588ac2(0x2f8)][_0x588ac2(0x149)]=String(_0x318c3f[_0x588ac2(0x90)]);if(_0x318c3f['K']&&typeof _0x318c3f['K'][_0x588ac2(0x1e3)]===_0x588ac2(0x2a1))try{const _0x2bd556=await kvGetConfigCached(_0x318c3f);if(_0x2bd556){const _0x2f93c1=JSON['parse'](_0x2bd556);if(_0x2f93c1[_0x588ac2(0xc2)]!==undefined)_0x1bbdea=!![];Object[_0x588ac2(0x108)](_0x1cfb4d,_0x2f93c1);if(_0x2f93c1['optimizer'])_0x1cfb4d['optimizer']=Object[_0x588ac2(0x108)](JSON['parse'](JSON[_0x588ac2(0x249)](DEFAULT_CONFIG[_0x588ac2(0x2f8)])),_0x2f93c1[_0x588ac2(0x2f8)]);if(_0x2f93c1[_0x588ac2(0x2ad)]&&Array['isArray'](_0x2f93c1[_0x588ac2(0x2ad)]))_0x1cfb4d[_0x588ac2(0x2ad)]=_0x2f93c1[_0x588ac2(0x2ad)];if(_0x2f93c1[_0x588ac2(0x13c)])_0x1cfb4d[_0x588ac2(0x13c)]=String(_0x2f93c1['admin']);if(_0x2f93c1['uuid'])_0x1cfb4d[_0x588ac2(0xd1)]=String(_0x2f93c1[_0x588ac2(0xd1)])[_0x588ac2(0x195)]();}}catch(_0x343fb6){}delete _0x1cfb4d[_0x588ac2(0x23d)],delete _0x1cfb4d[_0x588ac2(0x35a)],_0x1cfb4d[_0x588ac2(0xd1)]=String(_0x1cfb4d[_0x588ac2(0xd1)]||'')[_0x588ac2(0x195)]();if(!isUUID(_0x1cfb4d[_0x588ac2(0xd1)]))_0x1cfb4d[_0x588ac2(0xd1)]=uuidv4();if(!_0x1cfb4d['path']||_0x1cfb4d['path']==='/'||_0x1cfb4d[_0x588ac2(0x23e)]==='')_0x1cfb4d[_0x588ac2(0x23e)]=_0x1cfb4d[_0x588ac2(0xd1)];if(!Array[_0x588ac2(0x218)](_0x1cfb4d[_0x588ac2(0x2ad)]))_0x1cfb4d[_0x588ac2(0x2ad)]=parseIPList(_0x1cfb4d[_0x588ac2(0x2ad)]);if(!_0x1bbdea){const _0x461ef0=Boolean(_0x1cfb4d[_0x588ac2(0x221)]&&_0x1cfb4d[_0x588ac2(0x96)]||_0x318c3f['CF_ACCOUNT_ID']&&_0x318c3f[_0x588ac2(0x34d)]);if(_0x461ef0)_0x1cfb4d[_0x588ac2(0xc2)]=!![];}return _0x1cfb4d;}async function saveConfig(_0x502489,_0x5e50c2){const _0x589072=_0x1dc4ca;if(!_0x502489['K']||typeof _0x502489['K'][_0x589072(0x28e)]!==_0x589072(0x2a1))return![];const _0x184977=JSON[_0x589072(0x18f)](JSON[_0x589072(0x249)](_0x5e50c2));if(_0x184977[_0x589072(0x13c)])_0x184977['admin']=String(_0x184977[_0x589072(0x13c)]);return await _0x502489['K'][_0x589072(0x28e)]('config',JSON['stringify'](_0x184977)),invalidateConfigCache(),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x26a617,_0x37141f){const _0xf5922e=_0x1dc4ca,_0x4dd1d1=String(_0x26a617[_0xf5922e(0x3d3)]||_0x37141f&&_0x37141f[_0xf5922e(0x221)]||'')[_0xf5922e(0x1e6)](),_0x32160a=String(_0x26a617[_0xf5922e(0x34d)]||_0x37141f&&_0x37141f[_0xf5922e(0x96)]||'')[_0xf5922e(0x1e6)]();if(!_0x4dd1d1||!_0x32160a)return{'configured':![]};const _0xaf91df=Date['now']();if(_0xaf91df<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE[_0xf5922e(0x239)])return Object['assign']({},QUOTA_CACHE[_0xf5922e(0x239)],{'stale':!![],'error':_0xf5922e(0x3b0)});return{'configured':!![],'error':_0xf5922e(0x1af)};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0xaf91df-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE['data'];try{const _0x52927f=new Date();_0x52927f['setUTCHours'](0x0,0x0,0x0,0x0);const _0x4aef87=new Date(),_0xf71d4c={'query':_0xf5922e(0x91),'variables':{'accountId':_0x4dd1d1,'filter':{'datetime_geq':_0x52927f[_0xf5922e(0x1b2)](),'datetime_leq':_0x4aef87['toISOString']()}}},_0x51a634=await fetch('https://api.cloudflare.com/client/v4/graphql',{'method':_0xf5922e(0xb6),'headers':{'Content-Type':_0xf5922e(0x329),'Authorization':_0xf5922e(0x14b)+_0x32160a},'body':JSON['stringify'](_0xf71d4c)});if(!_0x51a634['ok'])throw new Error(_0xf5922e(0x1d9)+_0x51a634[_0xf5922e(0x275)]);const _0x313ed8=await _0x51a634[_0xf5922e(0x264)]();if(_0x313ed8['errors']&&_0x313ed8[_0xf5922e(0x2b8)][_0xf5922e(0xea)])throw new Error('GraphQL:\x20'+JSON['stringify'](_0x313ed8[_0xf5922e(0x2b8)])[_0xf5922e(0x9e)](0x0,0xc8));const _0x3e75cc=_0x313ed8&&_0x313ed8[_0xf5922e(0x239)]&&_0x313ed8[_0xf5922e(0x239)][_0xf5922e(0x13a)]&&_0x313ed8['data'][_0xf5922e(0x13a)][_0xf5922e(0x2d2)]||[];if(!_0x3e75cc[_0xf5922e(0xea)])throw new Error(_0xf5922e(0x231));const _0x254f38=_0x3e75cc[0x0],_0x36f891=(_0x254f38[_0xf5922e(0x2e5)]||[])[0x0]||{},_0x2bc81d=(_0x254f38[_0xf5922e(0x280)]||[])['reduce']((_0x64fe9a,_0x1568cc)=>_0x64fe9a+(_0x1568cc&&_0x1568cc[_0xf5922e(0x14f)]&&_0x1568cc['sum'][_0xf5922e(0x37e)]||0x0),0x0),_0x2337bf=(_0x36f891[_0xf5922e(0x14f)]&&_0x36f891[_0xf5922e(0x14f)]['requests']||0x0)+_0x2bc81d,_0x25b367=_0x36f891[_0xf5922e(0x1ff)]&&_0x36f891[_0xf5922e(0x1ff)][_0xf5922e(0x3eb)]||0x0,_0x3a3c38=_0x36f891[_0xf5922e(0x14f)]&&_0x36f891[_0xf5922e(0x14f)][_0xf5922e(0x288)]||0x0,_0x945cbd=QUOTA_LIMIT>0x0?Math[_0xf5922e(0xb3)](_0x2337bf/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x1ce01b={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x2337bf,'cpuTime':_0x25b367,'subrequests':_0x3a3c38},'percent':_0x945cbd,'remaining':Math[_0xf5922e(0x1aa)](0x0,QUOTA_LIMIT-_0x2337bf),'updatedAt':_0x4aef87['toISOString']()};return QUOTA_CACHE={'at':_0xaf91df,'data':_0x1ce01b},_0x1ce01b;}catch(_0xb8f7a6){const _0x13d6b1=_0xb8f7a6&&_0xb8f7a6[_0xf5922e(0x34f)]||String(_0xb8f7a6);if(_0x13d6b1[_0xf5922e(0x2eb)](_0xf5922e(0x2d0))>=0x0){QUOTA_BACKOFF=_0xaf91df+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE[_0xf5922e(0x239)])return Object['assign']({},QUOTA_CACHE[_0xf5922e(0x239)],{'stale':!![],'error':_0xf5922e(0x3b0)});return{'configured':!![],'error':'CF\x20API\x20限流(429)，请\x2015\x20分钟后再试'};}return{'configured':!![],'error':_0x13d6b1};}}function readAddress(_0x40d333,_0x21ef84,_0x116559,_0x120e9e){const _0x281344=_0x1dc4ca;if(_0x120e9e===0x1)return{'addr':_0x21ef84[_0x281344(0x2c5)](_0x116559)+'.'+_0x21ef84['getUint8'](_0x116559+0x1)+'.'+_0x21ef84[_0x281344(0x2c5)](_0x116559+0x2)+'.'+_0x21ef84[_0x281344(0x2c5)](_0x116559+0x3),'len':0x4};if(_0x120e9e===0x2){const _0x5d9abe=_0x21ef84['getUint8'](_0x116559),_0x37745b=_0x40d333['subarray'](_0x116559+0x1,_0x116559+0x1+_0x5d9abe);return{'addr':TD[_0x281344(0x223)](_0x37745b),'len':0x1+_0x5d9abe};}if(_0x120e9e===0x3){const _0xa76855=_0x40d333[_0x281344(0x1f6)](_0x116559,_0x116559+0x10);return{'addr':formatIPv6(_0xa76855),'len':0x10};}throw new Error(_0x281344(0xb0));}function parseVlessHeader(_0x459634){const _0x217627=_0x1dc4ca;if(!_0x459634||_0x459634[_0x217627(0x222)]<0x1)throw new Error(_0x217627(0x24c));const _0x3b561d=new DataView(_0x459634[_0x217627(0x163)],_0x459634[_0x217627(0x1c1)],_0x459634[_0x217627(0x222)]);let _0x2148d5=0x0;if(_0x3b561d['getUint8'](0x0)!==0x0)throw new Error(_0x217627(0x38d));_0x2148d5+=0x1+0x10;if(_0x2148d5>=_0x459634[_0x217627(0x222)])throw new Error(_0x217627(0x24c));const _0x430a41=_0x3b561d[_0x217627(0x2c5)](_0x2148d5);_0x2148d5+=0x1,_0x2148d5+=_0x430a41;if(_0x2148d5+0x3>_0x459634[_0x217627(0x222)])throw new Error('VLESS\x20头部过短');const _0xde60d9=_0x3b561d['getUint8'](_0x2148d5);_0x2148d5+=0x1;const _0x3ad0b4=_0x3b561d[_0x217627(0x38b)](_0x2148d5);_0x2148d5+=0x2;const _0x47e471=_0x3b561d[_0x217627(0x2c5)](_0x2148d5);_0x2148d5+=0x1;const {addr:_0x34d655,len:_0x55dee8}=readAddress(_0x459634,_0x3b561d,_0x2148d5,_0x47e471);return _0x2148d5+=_0x55dee8,{'command':_0xde60d9,'port':_0x3ad0b4,'addr':_0x34d655,'headerLength':_0x2148d5,'earlyData':_0x459634[_0x217627(0x1f6)](_0x2148d5)};}function parseTrojanHeader(_0x196fe7){const _0x3af512=_0x1dc4ca;if(!_0x196fe7||_0x196fe7['byteLength']<0x3a+0x8)throw new Error(_0x3af512(0x24a));const _0x30bc1f=new DataView(_0x196fe7[_0x3af512(0x163)],_0x196fe7[_0x3af512(0x1c1)],_0x196fe7[_0x3af512(0x222)]);let _0x500239=0x3a;const _0x561b3e=_0x30bc1f[_0x3af512(0x2c5)](_0x500239);_0x500239+=0x1;const _0xa48496=_0x30bc1f[_0x3af512(0x2c5)](_0x500239);_0x500239+=0x1;let _0x51cf13,_0x370c6c;if(_0xa48496===0x1)_0x51cf13=_0x30bc1f[_0x3af512(0x2c5)](_0x500239)+'.'+_0x30bc1f['getUint8'](_0x500239+0x1)+'.'+_0x30bc1f[_0x3af512(0x2c5)](_0x500239+0x2)+'.'+_0x30bc1f[_0x3af512(0x2c5)](_0x500239+0x3),_0x370c6c=0x4;else{if(_0xa48496===0x3){const _0x5af332=_0x30bc1f[_0x3af512(0x2c5)](_0x500239);_0x51cf13=TD[_0x3af512(0x223)](_0x196fe7[_0x3af512(0x1f6)](_0x500239+0x1,_0x500239+0x1+_0x5af332)),_0x370c6c=0x1+_0x5af332;}else{if(_0xa48496===0x4)_0x51cf13=formatIPv6(_0x196fe7[_0x3af512(0x1f6)](_0x500239,_0x500239+0x10)),_0x370c6c=0x10;else throw new Error(_0x3af512(0xb0));}}_0x500239+=_0x370c6c;const _0x3c8e41=_0x30bc1f['getUint16'](_0x500239);return _0x500239+=0x2,_0x500239+=0x2,{'command':_0x561b3e,'port':_0x3c8e41,'addr':_0x51cf13,'password':TD[_0x3af512(0x223)](_0x196fe7[_0x3af512(0x1f6)](0x0,0x38)),'headerLength':_0x500239};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x5f076a){const _0x1d1d2c=_0x1dc4ca,_0x3148af=TE[_0x1d1d2c(0x3e5)](String(_0x5f076a)),_0x4af826=_0x3148af[_0x1d1d2c(0xea)]*0x8,_0x5ccdb6=(_0x3148af[_0x1d1d2c(0xea)]+0x8>>0x6)+0x1<<0x6,_0x5b87c9=new Uint8Array(_0x5ccdb6);_0x5b87c9['set'](_0x3148af),_0x5b87c9[_0x3148af[_0x1d1d2c(0xea)]]=0x80;const _0xa54125=new DataView(_0x5b87c9[_0x1d1d2c(0x163)]);_0xa54125[_0x1d1d2c(0x335)](_0x5ccdb6-0x8,Math[_0x1d1d2c(0x170)](_0x4af826/0x100000000),![]),_0xa54125[_0x1d1d2c(0x335)](_0x5ccdb6-0x4,_0x4af826>>>0x0,![]);let _0xb464f9=0xc1059ed8,_0x1b1014=0x367cd507,_0x5be936=0x3070dd17,_0x5618b3=0xf70e5939,_0x2e61c9=0xffc00b31,_0x4f75a7=0x68581511,_0x1b4a48=0x64f98fa7,_0x5104d3=0xbefa4fa4;const _0x238bf8=(_0x2da204,_0x4e1a28)=>_0x2da204>>>_0x4e1a28|_0x2da204<<0x20-_0x4e1a28;for(let _0x5c1602=0x0;_0x5c1602<_0x5ccdb6;_0x5c1602+=0x40){const _0x29b39a=new Uint32Array(0x40);for(let _0x2fe573=0x0;_0x2fe573<0x10;_0x2fe573++)_0x29b39a[_0x2fe573]=_0xa54125['getUint32'](_0x5c1602+_0x2fe573*0x4,![]);for(let _0x4d6a83=0x10;_0x4d6a83<0x40;_0x4d6a83++){const _0x4ba0ce=_0x238bf8(_0x29b39a[_0x4d6a83-0xf],0x7)^_0x238bf8(_0x29b39a[_0x4d6a83-0xf],0x12)^_0x29b39a[_0x4d6a83-0xf]>>>0x3,_0x4b771f=_0x238bf8(_0x29b39a[_0x4d6a83-0x2],0x11)^_0x238bf8(_0x29b39a[_0x4d6a83-0x2],0x13)^_0x29b39a[_0x4d6a83-0x2]>>>0xa;_0x29b39a[_0x4d6a83]=_0x29b39a[_0x4d6a83-0x10]+_0x4ba0ce+_0x29b39a[_0x4d6a83-0x7]+_0x4b771f>>>0x0;}let _0x4784eb=_0xb464f9,_0x38e86c=_0x1b1014,_0x151f4=_0x5be936,_0x549c40=_0x5618b3,_0x34fb82=_0x2e61c9,_0x584c4a=_0x4f75a7,_0xdbf1d8=_0x1b4a48,_0x4a5145=_0x5104d3;for(let _0x45d1ec=0x0;_0x45d1ec<0x40;_0x45d1ec++){const _0x313fbe=_0x238bf8(_0x34fb82,0x6)^_0x238bf8(_0x34fb82,0xb)^_0x238bf8(_0x34fb82,0x19),_0x26cf51=_0x34fb82&_0x584c4a^~_0x34fb82&_0xdbf1d8,_0x227864=_0x4a5145+_0x313fbe+_0x26cf51+SHA256_K[_0x45d1ec]+_0x29b39a[_0x45d1ec]>>>0x0,_0x1a9575=_0x238bf8(_0x4784eb,0x2)^_0x238bf8(_0x4784eb,0xd)^_0x238bf8(_0x4784eb,0x16),_0x25989c=_0x4784eb&_0x38e86c^_0x4784eb&_0x151f4^_0x38e86c&_0x151f4,_0x3de248=_0x1a9575+_0x25989c>>>0x0;_0x4a5145=_0xdbf1d8,_0xdbf1d8=_0x584c4a,_0x584c4a=_0x34fb82,_0x34fb82=_0x549c40+_0x227864>>>0x0,_0x549c40=_0x151f4,_0x151f4=_0x38e86c,_0x38e86c=_0x4784eb,_0x4784eb=_0x227864+_0x3de248>>>0x0;}_0xb464f9=_0xb464f9+_0x4784eb>>>0x0,_0x1b1014=_0x1b1014+_0x38e86c>>>0x0,_0x5be936=_0x5be936+_0x151f4>>>0x0,_0x5618b3=_0x5618b3+_0x549c40>>>0x0,_0x2e61c9=_0x2e61c9+_0x34fb82>>>0x0,_0x4f75a7=_0x4f75a7+_0x584c4a>>>0x0,_0x1b4a48=_0x1b4a48+_0xdbf1d8>>>0x0,_0x5104d3=_0x5104d3+_0x4a5145>>>0x0;}let _0x7c077d='';for(const _0x4bd7b8 of[_0xb464f9,_0x1b1014,_0x5be936,_0x5618b3,_0x2e61c9,_0x4f75a7,_0x1b4a48]){_0x7c077d+=(_0x4bd7b8>>>0x18&0xff)[_0x1d1d2c(0x267)](0x10)[_0x1d1d2c(0x14d)](0x2,'0'),_0x7c077d+=(_0x4bd7b8>>>0x10&0xff)[_0x1d1d2c(0x267)](0x10)[_0x1d1d2c(0x14d)](0x2,'0'),_0x7c077d+=(_0x4bd7b8>>>0x8&0xff)['toString'](0x10)[_0x1d1d2c(0x14d)](0x2,'0'),_0x7c077d+=(_0x4bd7b8&0xff)[_0x1d1d2c(0x267)](0x10)[_0x1d1d2c(0x14d)](0x2,'0');}return _0x7c077d;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x2a832b){return _0x2a832b!==_trojanPassC&&(_trojanPassC=_0x2a832b,_trojanHashC=sha224hex(_0x2a832b)),_trojanHashC;}function detectTrojan(_0x595a22,_0x29c4f8){const _0x3ede55=_0x1dc4ca;if(!_0x29c4f8['enableTrojan']||!_0x595a22||_0x595a22[_0x3ede55(0x222)]<0x3a)return![];const _0x3de170=_0x595a22[_0x3ede55(0x1f6)](0x0,0x38);if(TD[_0x3ede55(0x223)](_0x3de170)['toLowerCase']()===trojanPasswordHash(_0x29c4f8[_0x3ede55(0x1b6)]||_0x29c4f8['uuid']))return!![];if(_0x595a22[0x38]===0xd&&_0x595a22[0x39]===0xa){for(let _0x4ab9f3=0x0;_0x4ab9f3<0x38;_0x4ab9f3++){const _0x297721=_0x3de170[_0x4ab9f3];if(!(_0x297721>=0x30&&_0x297721<=0x39||_0x297721>=0x61&&_0x297721<=0x66||_0x297721>=0x41&&_0x297721<=0x46))return![];}return!![];}return![];}const DOH_ENDPOINTS=[_0x1dc4ca(0xda),_0x1dc4ca(0x244),_0x1dc4ca(0x1c3),'https://8.8.8.8/dns-query','https://dns.google/dns-query','https://cloudflare-dns.com/dns-query'];function ipv6ToBytes(_0x113d6e){const _0x2d5c24=_0x1dc4ca,_0x3d354d=String(_0x113d6e)['split']('::'),_0x32b072=_0x3d354d[0x0]?_0x3d354d[0x0][_0x2d5c24(0x382)](':')['filter'](Boolean):[],_0x20fd99=_0x3d354d[0x1]?_0x3d354d[0x1]['split'](':')[_0x2d5c24(0x13b)](Boolean):[],_0x27f66e=[..._0x32b072,...Array(Math[_0x2d5c24(0x1aa)](0x0,0x8-_0x32b072[_0x2d5c24(0xea)]-_0x20fd99[_0x2d5c24(0xea)]))[_0x2d5c24(0x1a7)]('0'),..._0x20fd99],_0x328346=new Uint8Array(0x10);return _0x27f66e[_0x2d5c24(0x37f)]((_0x40a725,_0x1bb96e)=>{const _0x15a406=parseInt(_0x40a725,0x10)||0x0;_0x328346[_0x1bb96e*0x2]=_0x15a406>>0x8&0xff,_0x328346[_0x1bb96e*0x2+0x1]=_0x15a406&0xff;}),_0x328346;}async function dnsToDoH(_0x53bf9e){const _0x10ecd8=_0x1dc4ca;if(!_0x53bf9e||_0x53bf9e[_0x10ecd8(0x222)]<0x11)return null;const _0x1c3ef8=new DataView(_0x53bf9e['buffer'],_0x53bf9e[_0x10ecd8(0x1c1)],_0x53bf9e[_0x10ecd8(0x222)]),_0x2d56cf=_0x1c3ef8['getUint16'](0x0);if(_0x1c3ef8[_0x10ecd8(0x38b)](0x2)&0x8000)return null;if(_0x1c3ef8[_0x10ecd8(0x38b)](0x4)!==0x1)return null;let _0x54b951=0xc,_0x17f6f9=[];while(_0x54b951<_0x53bf9e[_0x10ecd8(0x222)]){const _0x274ae1=_0x1c3ef8[_0x10ecd8(0x2c5)](_0x54b951);if(_0x274ae1===0x0){_0x54b951++;break;}if((_0x274ae1&0xc0)===0xc0){_0x54b951+=0x2;break;}if(_0x54b951+0x1+_0x274ae1>_0x53bf9e['byteLength'])return null;_0x17f6f9[_0x10ecd8(0x147)](TD[_0x10ecd8(0x223)](_0x53bf9e[_0x10ecd8(0x1f6)](_0x54b951+0x1,_0x54b951+0x1+_0x274ae1))),_0x54b951+=0x1+_0x274ae1;}if(_0x54b951+0x4>_0x53bf9e[_0x10ecd8(0x222)]||_0x17f6f9['length']===0x0)return null;const _0x530634=_0x1c3ef8[_0x10ecd8(0x38b)](_0x54b951),_0x1336f3=_0x1c3ef8[_0x10ecd8(0x38b)](_0x54b951+0x2),_0x1f541c=_0x54b951+0x4;if(_0x530634!==0x1&&_0x530634!==0x1c)return null;const _0x18b10a=_0x17f6f9[_0x10ecd8(0x97)]('.'),_0x19be21=_0x53bf9e[_0x10ecd8(0x1f6)](0xc,_0x1f541c);let _0x43e5d8=null;for(const _0x436ee6 of DOH_ENDPOINTS){try{const _0x4d0ddf=await fetchTimeout(_0x436ee6+_0x10ecd8(0x116)+encodeURIComponent(_0x18b10a)+'&type='+_0x530634,{'headers':{'accept':_0x10ecd8(0xbf)}},0x1388);if(!_0x4d0ddf||!_0x4d0ddf['ok'])continue;const _0x1e679d=await _0x4d0ddf['json']();if(!_0x1e679d||_0x1e679d['Status']!==0x0)continue;const _0x310575=(_0x1e679d[_0x10ecd8(0x162)]||[])[_0x10ecd8(0x13b)](_0x424862=>_0x424862[_0x10ecd8(0x121)]===_0x530634&&(_0x424862[_0x10ecd8(0x121)]===0x1?isValidIp(String(_0x424862[_0x10ecd8(0x239)])):/^[0-9a-fA-F:]+$/[_0x10ecd8(0x122)](String(_0x424862['data']))));if(_0x310575[_0x10ecd8(0xea)]){_0x43e5d8=_0x310575;break;}}catch(_0x2b2043){}}if(!_0x43e5d8)return null;const _0x36ea30=new Uint8Array(0xc),_0x584894=new DataView(_0x36ea30[_0x10ecd8(0x163)]);_0x584894[_0x10ecd8(0x324)](0x0,_0x2d56cf),_0x584894['setUint16'](0x2,0x8180),_0x584894[_0x10ecd8(0x324)](0x4,0x1),_0x584894[_0x10ecd8(0x324)](0x6,_0x43e5d8[_0x10ecd8(0xea)]);const _0xa08649=[_0x36ea30,_0x19be21];for(const _0x2c5c13 of _0x43e5d8){const _0x308d67=String(_0x2c5c13[_0x10ecd8(0x239)]),_0x2d68cc=_0x2c5c13['type']===0x1?Uint8Array[_0x10ecd8(0x217)](_0x308d67['split']('.')[_0x10ecd8(0xac)](Number)):ipv6ToBytes(_0x308d67);if(_0x2d68cc[_0x10ecd8(0xea)]!==(_0x2c5c13[_0x10ecd8(0x121)]===0x1?0x4:0x10))continue;const _0x1e02ed=new Uint8Array(0xa),_0x5726c8=new DataView(_0x1e02ed[_0x10ecd8(0x163)]);_0x5726c8['setUint16'](0x0,0xc00c),_0x5726c8[_0x10ecd8(0x324)](0x2,_0x2c5c13[_0x10ecd8(0x121)]),_0x5726c8[_0x10ecd8(0x324)](0x4,_0x1336f3===0x0?0x1:_0x1336f3),_0x5726c8['setUint32'](0x6,Number(_0x2c5c13[_0x10ecd8(0x3a6)])||0x12c),_0xa08649[_0x10ecd8(0x147)](_0x1e02ed,new Uint8Array([_0x2d68cc[_0x10ecd8(0xea)]>>0x8&0xff,_0x2d68cc[_0x10ecd8(0xea)]&0xff]),_0x2d68cc);}let _0x5914e7=0x0;_0xa08649[_0x10ecd8(0x37f)](_0xa76c98=>_0x5914e7+=_0xa76c98['byteLength']);const _0x135708=new Uint8Array(_0x5914e7);let _0x3a0d9d=0x0;for(const _0x712289 of _0xa08649){_0x135708[_0x10ecd8(0x402)](_0x712289,_0x3a0d9d),_0x3a0d9d+=_0x712289[_0x10ecd8(0x222)];}return _0x135708;}function withTimeout(_0x3b6194,_0x550079,_0x50563c){const _0x2e1707=_0x1dc4ca;return Promise[_0x2e1707(0x327)]([_0x3b6194,new Promise((_0x294442,_0x395af2)=>setTimeout(()=>_0x395af2(new Error(_0x50563c||_0x2e1707(0x1d3))),_0x550079||0x1770))]);}async function connectWithTimeout(_0x2fa1c7,_0x20d4b9,_0x882186){const _0x47fbdf=_0x1dc4ca,_0x3e294d=connect({'hostname':_0x2fa1c7,'port':_0x20d4b9});try{await withTimeout(_0x3e294d[_0x47fbdf(0x1df)],_0x882186||0x1770,'连接超时（SYN\x20被静默丢弃）');}catch(_0x249e0c){try{_0x3e294d[_0x47fbdf(0x29f)]();}catch(_0x5206e5){}throw _0x249e0c;}return _0x3e294d;}async function connectDirect(_0x2d0948,_0x3a895b){const _0x1e080f=_0x1dc4ca;return connectWithTimeout(_0x2d0948[_0x1e080f(0x3f9)],_0x2d0948[_0x1e080f(0x16a)],_0x3a895b||0x1770);}async function connectViaSocks5(_0x52fec8,_0xa519c8){const _0x2c7e8c=_0x1dc4ca,_0x2bc67f=await connectWithTimeout(_0x52fec8[_0x2c7e8c(0xa9)],_0x52fec8['port'],0x1770),_0x57888a=_0x2bc67f[_0x2c7e8c(0x1a9)][_0x2c7e8c(0x2f2)](),_0x5c5525=_0x2bc67f['readable'][_0x2c7e8c(0x113)]();let _0x5bd943=new Uint8Array(0x0);const _0x5992f2=async _0x4c5bec=>{const _0x3b4a48=_0x2c7e8c;while(_0x5bd943[_0x3b4a48(0xea)]<_0x4c5bec){const {done:_0x10b729,value:_0x2eb194}=await _0x5c5525[_0x3b4a48(0x100)]();if(_0x10b729)throw new Error(_0x3b4a48(0x302));_0x5bd943=concatBytes(_0x5bd943,_0x2eb194);}const _0xa85d0=_0x5bd943[_0x3b4a48(0x9e)](0x0,_0x4c5bec);return _0x5bd943=_0x5bd943[_0x3b4a48(0x1f6)](_0x4c5bec),_0xa85d0;},_0x4e41ce=_0x52fec8[_0x2c7e8c(0x16c)]?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x57888a[_0x2c7e8c(0xdb)](new Uint8Array(_0x4e41ce));const _0x130c0a=await _0x5992f2(0x2);if(_0x130c0a[0x0]!==0x5||_0x130c0a[0x1]===0xff)throw new Error(_0x2c7e8c(0x200));if(_0x130c0a[0x1]===0x2){if(!_0x52fec8['user'])throw new Error(_0x2c7e8c(0x350));const _0x58553b=TE[_0x2c7e8c(0x3e5)](_0x52fec8[_0x2c7e8c(0x16c)]),_0xabdfa0=TE[_0x2c7e8c(0x3e5)](_0x52fec8[_0x2c7e8c(0x176)]),_0x3d771f=new Uint8Array([0x1,_0x58553b['length'],..._0x58553b,_0xabdfa0[_0x2c7e8c(0xea)],..._0xabdfa0]);await _0x57888a['write'](_0x3d771f);const _0xff6e90=await _0x5992f2(0x2);if(_0xff6e90[0x1]!==0x0)throw new Error(_0x2c7e8c(0x2fb));}else{if(_0x130c0a[0x1]!==0x0)throw new Error(_0x2c7e8c(0x1ee)+_0x130c0a[0x1]);}const _0x41ffb9=TE[_0x2c7e8c(0x3e5)](_0xa519c8[_0x2c7e8c(0x3f9)]);let _0x38d0e3;/^\d+\.\d+\.\d+\.\d+$/[_0x2c7e8c(0x122)](_0xa519c8[_0x2c7e8c(0x3f9)])?_0x38d0e3=new Uint8Array([0x5,0x1,0x0,0x1,..._0xa519c8[_0x2c7e8c(0x3f9)][_0x2c7e8c(0x382)]('.')[_0x2c7e8c(0xac)](Number),_0xa519c8[_0x2c7e8c(0x16a)]>>0x8&0xff,_0xa519c8[_0x2c7e8c(0x16a)]&0xff]):_0x38d0e3=new Uint8Array([0x5,0x1,0x0,0x3,_0x41ffb9['length'],..._0x41ffb9,_0xa519c8[_0x2c7e8c(0x16a)]>>0x8&0xff,_0xa519c8[_0x2c7e8c(0x16a)]&0xff]);await _0x57888a[_0x2c7e8c(0xdb)](_0x38d0e3);const _0x217d60=await _0x5992f2(0x4);if(_0x217d60[0x1]!==0x0)throw new Error(_0x2c7e8c(0x16b)+_0x217d60[0x1]);if(_0x217d60[0x3]===0x1)await _0x5992f2(0x6);else{if(_0x217d60[0x3]===0x3){const _0x1658a8=(await _0x5992f2(0x1))[0x0];await _0x5992f2(_0x1658a8+0x2);}else{if(_0x217d60[0x3]===0x4)await _0x5992f2(0x12);}}if(_0x5bd943[_0x2c7e8c(0x222)]>0x0)_0x2bc67f[_0x2c7e8c(0x2db)]=_0x5bd943;return _0x57888a[_0x2c7e8c(0x139)](),_0x5c5525['releaseLock'](),_0x2bc67f;}async function connectViaHttpProxy(_0x2a1b07,_0x5ca7e1){const _0x3f68e8=_0x1dc4ca,_0x341f2e=await connectWithTimeout(_0x2a1b07['host'],_0x2a1b07['port'],0x1770),_0x21cb9e=_0x341f2e[_0x3f68e8(0x1a9)][_0x3f68e8(0x2f2)](),_0xdbb5f4=_0x341f2e[_0x3f68e8(0x3a0)][_0x3f68e8(0x113)]();let _0x5eec96='';if(_0x2a1b07[_0x3f68e8(0x16c)])_0x5eec96='Proxy-Authorization:\x20Basic\x20'+b64FromBytes(TE[_0x3f68e8(0x3e5)](_0x2a1b07[_0x3f68e8(0x16c)]+':'+_0x2a1b07[_0x3f68e8(0x176)]))+'\x0d\x0a';const _0x430b1d=_0x3f68e8(0x105)+_0x5ca7e1['hostname']+':'+_0x5ca7e1[_0x3f68e8(0x16a)]+'\x20HTTP/1.1\x0d\x0aHost:\x20'+_0x5ca7e1[_0x3f68e8(0x3f9)]+':'+_0x5ca7e1['port']+'\x0d\x0a'+_0x5eec96+'\x0d\x0a';await _0x21cb9e[_0x3f68e8(0xdb)](TE[_0x3f68e8(0x3e5)](_0x430b1d));const {head:_0x1c5849,leftover:_0x30e40e}=await readUntilCRLFCRLF(_0xdbb5f4);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x3f68e8(0x122)](_0x1c5849))throw new Error(_0x3f68e8(0x27c)+_0x1c5849[_0x3f68e8(0x382)]('\x0d\x0a')[0x0]);if(_0x30e40e&&_0x30e40e[_0x3f68e8(0x222)]>0x0)_0x341f2e[_0x3f68e8(0x2db)]=_0x30e40e;return _0x21cb9e[_0x3f68e8(0x139)](),_0xdbb5f4[_0x3f68e8(0x139)](),_0x341f2e;}function ssCipherAlgo(_0x54e2f7){const _0x54ab3a=_0x1dc4ca,_0x95f01=String(_0x54e2f7||'')[_0x54ab3a(0x195)]()['replace'](/_/g,'-');if(_0x95f01===_0x54ab3a(0x13d)||_0x95f01===_0x54ab3a(0x27f))return{'name':_0x54ab3a(0x3a3),'keyLen':0x10};if(_0x95f01===_0x54ab3a(0x104)||_0x95f01===_0x54ab3a(0x10a))return{'name':_0x54ab3a(0x3a3),'keyLen':0x20};if(_0x95f01==='chacha20-ietf-poly1305'||_0x95f01===_0x54ab3a(0x1c4)||_0x95f01==='chacha20poly1305')return{'name':_0x54ab3a(0x26e),'keyLen':0x20};return null;}function sha1Bytes(_0x56b133){const _0x3e3631=_0x1dc4ca,_0x4116fb=_0x56b133 instanceof Uint8Array?_0x56b133:new Uint8Array(_0x56b133),_0x262263=_0x4116fb[_0x3e3631(0xea)],_0x5bdac7=_0x262263*0x8,_0x2b21e0=new Uint8Array((_0x262263+0x8>>0x6)+0x1<<0x6);_0x2b21e0['set'](_0x4116fb),_0x2b21e0[_0x262263]=0x80;const _0x287ba9=new DataView(_0x2b21e0['buffer']);_0x287ba9[_0x3e3631(0x335)](_0x2b21e0[_0x3e3631(0xea)]-0x8,Math[_0x3e3631(0x170)](_0x5bdac7/0x100000000),![]),_0x287ba9[_0x3e3631(0x335)](_0x2b21e0[_0x3e3631(0xea)]-0x4,_0x5bdac7>>>0x0,![]);let _0x269264=0x67452301,_0x5ce2bc=0xefcdab89,_0x20fb5b=0x98badcfe,_0x5b87eb=0x10325476,_0x41cb4f=0xc3d2e1f0;const _0x4eb126=new Uint32Array(0x50);for(let _0x11eb82=0x0;_0x11eb82<_0x2b21e0[_0x3e3631(0xea)];_0x11eb82+=0x40){for(let _0x35a725=0x0;_0x35a725<0x10;_0x35a725++)_0x4eb126[_0x35a725]=_0x287ba9[_0x3e3631(0x39a)](_0x11eb82+_0x35a725*0x4,![]);for(let _0xeb7644=0x10;_0xeb7644<0x50;_0xeb7644++)_0x4eb126[_0xeb7644]=rotl32(_0x4eb126[_0xeb7644-0x3]^_0x4eb126[_0xeb7644-0x8]^_0x4eb126[_0xeb7644-0xe]^_0x4eb126[_0xeb7644-0x10],0x1);let _0x439af3=_0x269264,_0x177940=_0x5ce2bc,_0x16ff36=_0x20fb5b,_0x1a144b=_0x5b87eb,_0x519fad=_0x41cb4f;for(let _0x79e9a8=0x0;_0x79e9a8<0x50;_0x79e9a8++){let _0x53e72e,_0xecc62d;if(_0x79e9a8<0x14)_0x53e72e=_0x177940&_0x16ff36|~_0x177940&_0x1a144b,_0xecc62d=0x5a827999;else{if(_0x79e9a8<0x28)_0x53e72e=_0x177940^_0x16ff36^_0x1a144b,_0xecc62d=0x6ed9eba1;else _0x79e9a8<0x3c?(_0x53e72e=_0x177940&_0x16ff36|_0x177940&_0x1a144b|_0x16ff36&_0x1a144b,_0xecc62d=0x8f1bbcdc):(_0x53e72e=_0x177940^_0x16ff36^_0x1a144b,_0xecc62d=0xca62c1d6);}const _0x1f1ff0=rotl32(_0x439af3,0x5)+_0x53e72e+_0x519fad+_0xecc62d+_0x4eb126[_0x79e9a8]>>>0x0;_0x519fad=_0x1a144b,_0x1a144b=_0x16ff36,_0x16ff36=rotl32(_0x177940,0x1e),_0x177940=_0x439af3,_0x439af3=_0x1f1ff0;}_0x269264=_0x269264+_0x439af3>>>0x0,_0x5ce2bc=_0x5ce2bc+_0x177940>>>0x0,_0x20fb5b=_0x20fb5b+_0x16ff36>>>0x0,_0x5b87eb=_0x5b87eb+_0x1a144b>>>0x0,_0x41cb4f=_0x41cb4f+_0x519fad>>>0x0;}const _0x150019=new Uint8Array(0x14),_0x86fe60=new DataView(_0x150019['buffer']);return _0x86fe60[_0x3e3631(0x335)](0x0,_0x269264,![]),_0x86fe60[_0x3e3631(0x335)](0x4,_0x5ce2bc,![]),_0x86fe60[_0x3e3631(0x335)](0x8,_0x20fb5b,![]),_0x86fe60[_0x3e3631(0x335)](0xc,_0x5b87eb,![]),_0x86fe60[_0x3e3631(0x335)](0x10,_0x41cb4f,![]),_0x150019;}function hmacSha1(_0x31d3af,_0x418160){const _0x29385f=_0x1dc4ca,_0x517f95=0x40;let _0x38d133=_0x31d3af;if(_0x38d133['length']>_0x517f95)_0x38d133=sha1Bytes(_0x38d133);const _0xd0a93=new Uint8Array(_0x517f95),_0x56f557=new Uint8Array(_0x517f95);for(let _0x1f8fb8=0x0;_0x1f8fb8<_0x517f95;_0x1f8fb8++){_0xd0a93[_0x1f8fb8]=(_0x1f8fb8<_0x38d133['length']?_0x38d133[_0x1f8fb8]:0x0)^0x36,_0x56f557[_0x1f8fb8]=(_0x1f8fb8<_0x38d133[_0x29385f(0xea)]?_0x38d133[_0x1f8fb8]:0x0)^0x5c;}return sha1Bytes(concatBytes(_0x56f557,sha1Bytes(concatBytes(_0xd0a93,_0x418160))));}function hkdfSha1(_0x4a2521,_0x3c152c,_0x4333fc){const _0x11336a=_0x1dc4ca,_0x1659ec=hmacSha1(_0x3c152c&&_0x3c152c['length']?_0x3c152c:new Uint8Array(0x14),_0x4a2521);let _0x4a2502=new Uint8Array(0x0),_0x57fab6=new Uint8Array(0x0);for(let _0x21f644=0x1;_0x57fab6['length']<_0x4333fc;_0x21f644++){const _0x4078f7=new Uint8Array([_0x21f644]);_0x4a2502=hmacSha1(_0x1659ec,concatBytes(concatBytes(_0x4a2502,TE['encode'](_0x11336a(0x30c))),_0x4078f7)),_0x57fab6=concatBytes(_0x57fab6,_0x4a2502);}return _0x57fab6[_0x11336a(0x9e)](0x0,_0x4333fc);}function chacha20Block(_0x3f0989,_0x417088,_0x5f0c19){const _0x1656b3=_0x1dc4ca,_0x9229a=new Uint32Array(0x10);_0x9229a[0x0]=0x61707865,_0x9229a[0x1]=0x3320646e,_0x9229a[0x2]=0x79622d32,_0x9229a[0x3]=0x6b206574;const _0xa0763d=new DataView(_0x3f0989[_0x1656b3(0x163)],_0x3f0989[_0x1656b3(0x1c1)],0x20);for(let _0x410240=0x0;_0x410240<0x8;_0x410240++)_0x9229a[0x4+_0x410240]=_0xa0763d['getUint32'](_0x410240*0x4,!![]);_0x9229a[0xc]=_0x417088>>>0x0;const _0x2d8a9a=new DataView(_0x5f0c19['buffer'],_0x5f0c19[_0x1656b3(0x1c1)],0xc);_0x9229a[0xd]=_0x2d8a9a[_0x1656b3(0x39a)](0x0,!![]),_0x9229a[0xe]=_0x2d8a9a[_0x1656b3(0x39a)](0x4,!![]),_0x9229a[0xf]=_0x2d8a9a[_0x1656b3(0x39a)](0x8,!![]);const _0x5e7e7e=_0x9229a['slice'](),_0x4f54b6=(_0x50ba78,_0x591a16,_0x4f55ab,_0x17ca4d)=>{_0x5e7e7e[_0x50ba78]=_0x5e7e7e[_0x50ba78]+_0x5e7e7e[_0x591a16]>>>0x0,_0x5e7e7e[_0x17ca4d]=rotl32(_0x5e7e7e[_0x17ca4d]^_0x5e7e7e[_0x50ba78],0x10),_0x5e7e7e[_0x4f55ab]=_0x5e7e7e[_0x4f55ab]+_0x5e7e7e[_0x17ca4d]>>>0x0,_0x5e7e7e[_0x591a16]=rotl32(_0x5e7e7e[_0x591a16]^_0x5e7e7e[_0x4f55ab],0xc),_0x5e7e7e[_0x50ba78]=_0x5e7e7e[_0x50ba78]+_0x5e7e7e[_0x591a16]>>>0x0,_0x5e7e7e[_0x17ca4d]=rotl32(_0x5e7e7e[_0x17ca4d]^_0x5e7e7e[_0x50ba78],0x8),_0x5e7e7e[_0x4f55ab]=_0x5e7e7e[_0x4f55ab]+_0x5e7e7e[_0x17ca4d]>>>0x0,_0x5e7e7e[_0x591a16]=rotl32(_0x5e7e7e[_0x591a16]^_0x5e7e7e[_0x4f55ab],0x7);};for(let _0x47a541=0x0;_0x47a541<0xa;_0x47a541++){_0x4f54b6(0x0,0x4,0x8,0xc),_0x4f54b6(0x1,0x5,0x9,0xd),_0x4f54b6(0x2,0x6,0xa,0xe),_0x4f54b6(0x3,0x7,0xb,0xf),_0x4f54b6(0x0,0x5,0xa,0xf),_0x4f54b6(0x1,0x6,0xb,0xc),_0x4f54b6(0x2,0x7,0x8,0xd),_0x4f54b6(0x3,0x4,0x9,0xe);}const _0x75503b=new Uint8Array(0x40),_0x2ed2c7=new DataView(_0x75503b['buffer']);for(let _0x27e189=0x0;_0x27e189<0x10;_0x27e189++){_0x5e7e7e[_0x27e189]=_0x5e7e7e[_0x27e189]+_0x9229a[_0x27e189]>>>0x0,_0x2ed2c7['setUint32'](_0x27e189*0x4,_0x5e7e7e[_0x27e189],!![]);}return _0x75503b;}function chacha20Xor(_0x2ffea2,_0x58d84e,_0x21660f,_0x55e727){const _0x35893d=_0x1dc4ca,_0x582e5d=_0x55e727[_0x35893d(0x9e)](),_0x3c8892=Math[_0x35893d(0x33f)](_0x55e727[_0x35893d(0xea)]/0x40);for(let _0x27ea14=0x0;_0x27ea14<_0x3c8892;_0x27ea14++){const _0x24baa5=chacha20Block(_0x2ffea2,_0x21660f+_0x27ea14,_0x58d84e),_0x2ca64b=_0x27ea14*0x40,_0x59b8a9=Math[_0x35893d(0x33a)](0x40,_0x582e5d[_0x35893d(0xea)]-_0x2ca64b);for(let _0x4b61ac=0x0;_0x4b61ac<_0x59b8a9;_0x4b61ac++)_0x582e5d[_0x2ca64b+_0x4b61ac]^=_0x24baa5[_0x4b61ac];}return _0x582e5d;}function poly1305(_0xce24a,_0x4c1b0b){const _0x1ec218=_0x1dc4ca;let _0xd52a94=0x0n,_0x479ab2=0x0n;for(let _0x48aea2=0x0;_0x48aea2<0x10;_0x48aea2++){_0xd52a94|=BigInt(_0xce24a[_0x48aea2])<<BigInt(0x8*_0x48aea2),_0x479ab2|=BigInt(_0xce24a[0x10+_0x48aea2])<<BigInt(0x8*_0x48aea2);}_0xd52a94&=0xffffffc0ffffffc0ffffffc0fffffffn;let _0x40fada=0x0n;const _0x379a9b=(0x1n<<0x82n)-0x5n;for(let _0x38d023=0x0;_0x38d023<_0x4c1b0b['length'];_0x38d023+=0x10){const _0x506844=Math['min'](0x10,_0x4c1b0b[_0x1ec218(0xea)]-_0x38d023);let _0x397f62=0x1n;for(let _0x4aa9ba=_0x506844-0x1;_0x4aa9ba>=0x0;_0x4aa9ba--)_0x397f62=_0x397f62<<0x8n|BigInt(_0x4c1b0b[_0x38d023+_0x4aa9ba]);_0x40fada=(_0x40fada+_0x397f62)*_0xd52a94%_0x379a9b;}_0x40fada=_0x40fada+_0x479ab2&(0x1n<<0x80n)-0x1n;const _0x547018=new Uint8Array(0x10);for(let _0x278ebe=0x0;_0x278ebe<0x10;_0x278ebe++)_0x547018[_0x278ebe]=Number(_0x40fada>>BigInt(0x8*_0x278ebe)&0xffn);return _0x547018;}function chacha20Poly1305Seal(_0x4cb134,_0x1b6955,_0x726ff7,_0xb0f02a){const _0x2d5735=_0x1dc4ca,_0xea72af=_0xb0f02a||new Uint8Array(0x0),_0x56e9da=chacha20Xor(_0x4cb134,_0x1b6955,0x0,new Uint8Array(0x20)),_0x2468fa=chacha20Xor(_0x4cb134,_0x1b6955,0x1,_0x726ff7),_0x3108c5=_0x5b2cef=>new Uint8Array((0x10-_0x5b2cef%0x10)%0x10),_0x33f954=_0x36efaa=>{const _0x55da86=_0x2eef,_0x46137=new Uint8Array(0x8),_0x31a10d=new DataView(_0x46137[_0x55da86(0x163)]);return _0x31a10d[_0x55da86(0x335)](0x0,_0x36efaa>>>0x0,!![]),_0x31a10d[_0x55da86(0x335)](0x4,Math['floor'](_0x36efaa/0x100000000),!![]),_0x46137;},_0x2fb8a8=concatBytes(_0xea72af,concatBytes(_0x3108c5(_0xea72af[_0x2d5735(0xea)]),concatBytes(_0x2468fa,concatBytes(_0x3108c5(_0x2468fa['length']),concatBytes(_0x33f954(_0xea72af[_0x2d5735(0xea)]),_0x33f954(_0x2468fa['length'])))))),_0x29b8be=poly1305(_0x56e9da,_0x2fb8a8);return concatBytes(_0x2468fa,_0x29b8be);}function chacha20Poly1305Open(_0x153206,_0x5dacdc,_0x482788,_0x4e93ab){const _0x375917=_0x1dc4ca;if(_0x482788[_0x375917(0xea)]<0x10)throw new Error(_0x375917(0x1d7));const _0x48d734=_0x482788['subarray'](0x0,_0x482788['length']-0x10),_0x5963fa=_0x482788['subarray'](_0x482788['length']-0x10),_0x514bd5=_0x4e93ab||new Uint8Array(0x0),_0x393a97=chacha20Xor(_0x153206,_0x5dacdc,0x0,new Uint8Array(0x20)),_0x3fab4f=_0x4ecf71=>new Uint8Array((0x10-_0x4ecf71%0x10)%0x10),_0x47fb2f=_0x820527=>{const _0x3061f3=_0x375917,_0x2a8abb=new Uint8Array(0x8),_0x5bb109=new DataView(_0x2a8abb[_0x3061f3(0x163)]);return _0x5bb109[_0x3061f3(0x335)](0x0,_0x820527>>>0x0,!![]),_0x5bb109[_0x3061f3(0x335)](0x4,Math[_0x3061f3(0x170)](_0x820527/0x100000000),!![]),_0x2a8abb;},_0x40283f=concatBytes(_0x514bd5,concatBytes(_0x3fab4f(_0x514bd5[_0x375917(0xea)]),concatBytes(_0x48d734,concatBytes(_0x3fab4f(_0x48d734[_0x375917(0xea)]),concatBytes(_0x47fb2f(_0x514bd5[_0x375917(0xea)]),_0x47fb2f(_0x48d734['length'])))))),_0x190cbe=poly1305(_0x393a97,_0x40283f);let _0x18894b=0x0;for(let _0x166bf7=0x0;_0x166bf7<0x10;_0x166bf7++)_0x18894b|=_0x190cbe[_0x166bf7]^_0x5963fa[_0x166bf7];if(_0x18894b!==0x0)return null;return chacha20Xor(_0x153206,_0x5dacdc,0x1,_0x48d734);}async function newSsAead(_0x11be2a,_0x110a20){const _0x8be42c=_0x1dc4ca,_0x527bc3=new Uint8Array(0xc),_0x13af3c=()=>{const _0x19d04a=_0x2eef,_0x358b79=_0x527bc3[_0x19d04a(0x9e)]();for(let _0x4b211c=0xb;_0x4b211c>=0x0;_0x4b211c--){_0x358b79[_0x4b211c]++;if(_0x358b79[_0x4b211c]!==0x0)break;}return _0x358b79;};if(_0x11be2a===_0x8be42c(0x26e))return{'seal'(_0x5c4007){return chacha20Poly1305Seal(_0x110a20,_0x13af3c(),_0x5c4007);},'open'(_0x45d09d){const _0xa6b08e=_0x8be42c,_0x573adf=chacha20Poly1305Open(_0x110a20,_0x13af3c(),_0x45d09d);if(!_0x573adf)throw new Error(_0xa6b08e(0xa1));return _0x573adf;}};const _0x2460d4=await crypto[_0x8be42c(0xcb)][_0x8be42c(0x285)](_0x8be42c(0x2cf),_0x110a20,{'name':_0x11be2a},![],['encrypt',_0x8be42c(0x3ac)]);return{async 'seal'(_0x5d244b){const _0x5f4303=_0x8be42c;return new Uint8Array(await crypto[_0x5f4303(0xcb)][_0x5f4303(0x3db)]({'name':_0x11be2a,'iv':_0x13af3c()},_0x2460d4,_0x5d244b));},async 'open'(_0x5d1d42){const _0xa702a5=_0x8be42c;try{return new Uint8Array(await crypto[_0xa702a5(0xcb)]['decrypt']({'name':_0x11be2a,'iv':_0x13af3c()},_0x2460d4,_0x5d1d42));}catch(_0x18460f){throw new Error(_0xa702a5(0xa1));}}};}async function ssSealChunk(_0x42d788,_0x280ba8){const _0x2aeab7=_0x1dc4ca,_0x6ce65d=new Uint8Array([_0x280ba8['length']>>0x8&0xff,_0x280ba8[_0x2aeab7(0xea)]&0xff]);return concatBytes(await _0x42d788[_0x2aeab7(0x2ab)](_0x6ce65d),await _0x42d788[_0x2aeab7(0x2ab)](_0x280ba8));}async function connectViaShadowsocks(_0x309de7,_0x13dcd8){const _0x7f4dca=_0x1dc4ca,_0x3b9b98=ssCipherAlgo(_0x309de7[_0x7f4dca(0x1ba)]);if(!_0x3b9b98)throw new Error(_0x7f4dca(0x388)+(_0x309de7[_0x7f4dca(0x1ba)]||_0x7f4dca(0x2e0)));if(!_0x309de7[_0x7f4dca(0x389)])throw new Error(_0x7f4dca(0x2de));const _0x4dda0c=await connectWithTimeout(_0x309de7[_0x7f4dca(0xa9)],_0x309de7[_0x7f4dca(0x16a)],0x1770),_0x1b74ac=_0x4dda0c[_0x7f4dca(0x1a9)]['getWriter'](),_0x3e2399=_0x4dda0c[_0x7f4dca(0x3a0)]['getReader']();let _0x239e73=new Uint8Array(0x0);const _0x4647da=async _0x238aea=>{const _0x15c5e7=_0x7f4dca;while(_0x239e73[_0x15c5e7(0xea)]<_0x238aea){const {done:_0x1f5a20,value:_0x5564a3}=await _0x3e2399['read']();if(_0x1f5a20)throw new Error(_0x15c5e7(0x11d));_0x239e73=concatBytes(_0x239e73,_0x5564a3);}const _0x609f52=_0x239e73[_0x15c5e7(0x9e)](0x0,_0x238aea);return _0x239e73=_0x239e73[_0x15c5e7(0x1f6)](_0x238aea),_0x609f52;},_0x5022a6=new Uint8Array(await crypto[_0x7f4dca(0xcb)][_0x7f4dca(0x368)](_0x7f4dca(0x20b),TE[_0x7f4dca(0x3e5)](_0x309de7[_0x7f4dca(0x389)]))),_0x75e97b=crypto['getRandomValues'](new Uint8Array(0x10)),_0x278911=await newSsAead(_0x3b9b98['name'],await hkdfSha1(_0x5022a6,_0x75e97b,_0x3b9b98[_0x7f4dca(0xd3)]));await _0x1b74ac['write'](_0x75e97b),await _0x1b74ac[_0x7f4dca(0xdb)](await ssSealChunk(_0x278911,new Uint8Array(0x0)));const _0x3f8743=new ReadableStream({async 'start'(_0x40a1b5){const _0x463de3=_0x7f4dca;try{const _0x15634a=await _0x4647da(0x10),_0x93b65d=await newSsAead(_0x3b9b98[_0x463de3(0x22c)],await hkdfSha1(_0x5022a6,_0x15634a,_0x3b9b98[_0x463de3(0xd3)]));while(!![]){const _0x29080f=await _0x93b65d[_0x463de3(0x136)](await _0x4647da(0x12)),_0x5ae709=_0x29080f[0x0]<<0x8|_0x29080f[0x1];if(_0x5ae709>0x4000)throw new Error(_0x463de3(0x3d9)+_0x5ae709);const _0x47ea00=await _0x93b65d[_0x463de3(0x136)](await _0x4647da(_0x5ae709+0x10));if(_0x5ae709>0x0)_0x40a1b5['enqueue'](_0x47ea00);}}catch(_0x5713bf){try{_0x40a1b5[_0x463de3(0x103)](_0x5713bf);}catch(_0x28e202){}}}}),_0x461ffc=new WritableStream({async 'write'(_0xb212a3){const _0x35e11f=_0x7f4dca,_0x5ad5c0=_0xb212a3 instanceof Uint8Array?_0xb212a3:new Uint8Array(_0xb212a3);for(let _0x436055=0x0;_0x436055<_0x5ad5c0['length'];_0x436055+=0x4000){await _0x1b74ac[_0x35e11f(0xdb)](await ssSealChunk(_0x278911,_0x5ad5c0[_0x35e11f(0x1f6)](_0x436055,Math[_0x35e11f(0x33a)](_0x5ad5c0[_0x35e11f(0xea)],_0x436055+0x4000))));}},'close'(){const _0x13b8be=_0x7f4dca;try{_0x1b74ac[_0x13b8be(0x29f)]();}catch(_0x14619c){}},'abort'(){try{_0x1b74ac['abort']();}catch(_0x471ce1){}}});return{'readable':_0x3f8743,'writable':_0x461ffc,'close'(){try{_0x4dda0c['close']();}catch(_0x2e7cea){}}};}async function readN(_0x34cb98,_0x3eee7d){const _0x56be94=_0x1dc4ca,_0x23634e=new Uint8Array(_0x3eee7d);let _0xc79c45=0x0;while(_0xc79c45<_0x3eee7d){const {done:_0x1cd6e2,value:_0x42dd03}=await _0x34cb98[_0x56be94(0x100)]();if(_0x1cd6e2)throw new Error('连接被关闭');const _0x6948f=_0x3eee7d-_0xc79c45;_0x23634e[_0x56be94(0x402)](_0x42dd03[_0x56be94(0x1f6)](0x0,Math['min'](_0x6948f,_0x42dd03['length'])),_0xc79c45),_0xc79c45+=Math[_0x56be94(0x33a)](_0x6948f,_0x42dd03[_0x56be94(0xea)]);}return _0x23634e;}async function readUntilCRLFCRLF(_0x35d3ad){const _0x1256de=_0x1dc4ca;let _0x1eb166=new Uint8Array(0x0);while(_0x1eb166[_0x1256de(0xea)]<0x10000){const {done:_0x85c5e7,value:_0x5a71e2}=await _0x35d3ad[_0x1256de(0x100)]();if(_0x85c5e7)break;_0x1eb166=concatBytes(_0x1eb166,_0x5a71e2);const _0x4a78c8=findBytes(_0x1eb166,[0xd,0xa,0xd,0xa]);if(_0x4a78c8>=0x0)return{'head':TD[_0x1256de(0x223)](_0x1eb166[_0x1256de(0x1f6)](0x0,_0x4a78c8)),'leftover':_0x1eb166[_0x1256de(0x1f6)](_0x4a78c8+0x4)};}return{'head':TD[_0x1256de(0x223)](_0x1eb166),'leftover':new Uint8Array(0x0)};}function concatBytes(_0x304dc4,_0x48b121){const _0x36bafb=_0x1dc4ca,_0x4a31a0=new Uint8Array(_0x304dc4[_0x36bafb(0xea)]+_0x48b121[_0x36bafb(0xea)]);return _0x4a31a0['set'](_0x304dc4,0x0),_0x4a31a0[_0x36bafb(0x402)](_0x48b121,_0x304dc4[_0x36bafb(0xea)]),_0x4a31a0;}function findBytes(_0x43e384,_0x5bc5e6){const _0x43c328=_0x1dc4ca;_0x6e86e5:for(let _0x4f61d1=0x0;_0x4f61d1<=_0x43e384[_0x43c328(0xea)]-_0x5bc5e6[_0x43c328(0xea)];_0x4f61d1++){for(let _0x178b78=0x0;_0x178b78<_0x5bc5e6[_0x43c328(0xea)];_0x178b78++)if(_0x43e384[_0x4f61d1+_0x178b78]!==_0x5bc5e6[_0x178b78])continue _0x6e86e5;return _0x4f61d1;}return-0x1;}const RELAY_DOMAINS={'HK':_0x1dc4ca(0x12d),'US':_0x1dc4ca(0x191),'SG':_0x1dc4ca(0x17e),'JP':'proxyip.jp.cmliussss.net','KR':_0x1dc4ca(0x15c),'DE':_0x1dc4ca(0x3e8),'SE':_0x1dc4ca(0x153),'NL':_0x1dc4ca(0x254),'FI':_0x1dc4ca(0x303),'GB':_0x1dc4ca(0x2a4),'Oracle':_0x1dc4ca(0x1bd),'DigitalOcean':_0x1dc4ca(0x92),'Vultr':_0x1dc4ca(0x2a2),'Multacom':'proxyip.multacom.cmliussss.net'};function selectRelayRegion(_0x54cf66){const _0x53cc14=_0x1dc4ca,_0x19b7b4=(_0x54cf66||'')[_0x53cc14(0x3e0)]();if(_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x37a))||_0x19b7b4[_0x53cc14(0x1cd)]('HK'))return'HK';if(_0x19b7b4[_0x53cc14(0x1cd)]('SIN')||_0x19b7b4[_0x53cc14(0x1cd)]('SG'))return'SG';if(_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x167))||_0x19b7b4[_0x53cc14(0x1cd)]('KIX')||_0x19b7b4[_0x53cc14(0x1cd)]('TYO')||_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0xf3))||_0x19b7b4[_0x53cc14(0x1cd)]('JP'))return'JP';if(_0x19b7b4['startsWith'](_0x53cc14(0x27e))||_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x39f))||_0x19b7b4[_0x53cc14(0x1cd)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/['test'](_0x19b7b4))return'HK';if(_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x190))||_0x19b7b4['startsWith'](_0x53cc14(0xdc))||_0x19b7b4['startsWith'](_0x53cc14(0x3a1))||_0x19b7b4['startsWith'](_0x53cc14(0x292))||_0x19b7b4[_0x53cc14(0x1cd)]('HAM')||_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x39d))||_0x19b7b4[_0x53cc14(0x1cd)]('DE'))return'DE';if(_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x398))||_0x19b7b4['startsWith']('SE'))return'SE';if(_0x19b7b4['startsWith']('AMS')||_0x19b7b4['startsWith']('NL'))return'NL';if(_0x19b7b4['startsWith'](_0x53cc14(0x263))||_0x19b7b4['startsWith']('FI'))return'FI';if(_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x127))||_0x19b7b4[_0x53cc14(0x1cd)](_0x53cc14(0x1fc))||_0x19b7b4[_0x53cc14(0x1cd)]('GB')||_0x19b7b4[_0x53cc14(0x1cd)]('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/[_0x53cc14(0x122)](_0x19b7b4))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x263f9f,_0x560aeb){const _0x5d2b90=_0x1dc4ca;_0x560aeb=_0x560aeb||0x1bb;if(isValidIp(_0x263f9f))return[{'hostname':_0x263f9f,'port':_0x560aeb}];const _0x483dde=_0x263f9f+':'+_0x560aeb,_0x9e8d42=Date[_0x5d2b90(0x34b)](),_0xe5b4f3=PROXYIP_CACHE[_0x5d2b90(0x1e3)](_0x483dde);if(_0xe5b4f3&&_0x9e8d42-_0xe5b4f3['t']<0x5*0x3c*0x3e8)return _0xe5b4f3[_0x5d2b90(0x1de)];const _0x476256=[_0x5d2b90(0x129),'https://dns.alidns.com/resolve',_0x5d2b90(0xda)],_0xebf74e=async(_0x3e98de,_0x215c8a)=>{const _0x4ffa77=_0x5d2b90,_0x193a06=_0x476256['map'](async _0x4a80e0=>{const _0x5a467e=_0x2eef,_0x1c5f96=await fetchTimeout(_0x4a80e0+'?name='+encodeURIComponent(_0x263f9f)+_0x5a467e(0xe3)+_0x3e98de,{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x1c5f96||!_0x1c5f96['ok'])throw new Error(_0x5a467e(0x35e));const _0x4da3ad=await _0x1c5f96[_0x5a467e(0x264)]();return(_0x4da3ad[_0x5a467e(0x162)]||[])[_0x5a467e(0x13b)](_0x33f4ed=>_0x33f4ed[_0x5a467e(0x121)]===_0x215c8a)['map'](_0x3f25b3=>_0x3f25b3[_0x5a467e(0x239)]);});try{return await Promise[_0x4ffa77(0x1d0)](_0x193a06);}catch(_0x5ce58b){return[];}},[_0x59dcf4,_0x40ad6e]=await Promise[_0x5d2b90(0x3e6)]([_0xebf74e('TXT',0x10),_0xebf74e('A',0x1)]);let _0x4d56cc=[];for(const _0x350373 of _0x59dcf4){const _0x2dfdf6=String(_0x350373)[_0x5d2b90(0x3a4)](/^"|"$/g,'')[_0x5d2b90(0x3a4)](/\\010/g,',')['replace'](/\n/g,',')[_0x5d2b90(0x1e6)]();if(!_0x2dfdf6)continue;if(_0x2dfdf6===_0x5d2b90(0xe6)){_0x4d56cc=_0x40ad6e[_0x5d2b90(0x13b)](_0x151d90=>/^\d+\.\d+\.\d+\.\d+$/[_0x5d2b90(0x122)](_0x151d90))[_0x5d2b90(0xac)](_0x512e00=>({'hostname':_0x512e00,'port':_0x560aeb}));break;}const _0x27f3e8=_0x2dfdf6[_0x5d2b90(0x382)](/[,;\s]+/)['map'](_0x3c3154=>_0x3c3154[_0x5d2b90(0x1e6)]())[_0x5d2b90(0x13b)](Boolean),_0x28f36c=[];for(const _0x1efb56 of _0x27f3e8){const {host:_0x1fd78b,port:_0x16770f}=parseHostPort(_0x1efb56,_0x560aeb);if(isValidIp(_0x1fd78b))_0x28f36c[_0x5d2b90(0x147)]({'hostname':_0x1fd78b,'port':_0x16770f});}if(_0x28f36c[_0x5d2b90(0xea)]){_0x4d56cc=_0x28f36c;break;}}!_0x4d56cc[_0x5d2b90(0xea)]&&(_0x4d56cc=_0x40ad6e[_0x5d2b90(0x13b)](_0x49ad54=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0x49ad54))['map'](_0x3b0106=>({'hostname':_0x3b0106,'port':_0x560aeb})));if(!_0x4d56cc['length']){const _0xf61211=await _0xebf74e(_0x5d2b90(0x251),0x1c);_0x4d56cc=_0xf61211[_0x5d2b90(0x13b)](_0x4eb117=>isValidIp(_0x4eb117))[_0x5d2b90(0xac)](_0x15b293=>({'hostname':_0x15b293,'port':_0x560aeb}));}const _0x26283d=new Set(),_0x203563=_0x4d56cc[_0x5d2b90(0x13b)](_0x2a3dbe=>{const _0x9a3f61=_0x5d2b90,_0x52167d=_0x2a3dbe['hostname']+':'+_0x2a3dbe[_0x9a3f61(0x16a)];if(_0x26283d[_0x9a3f61(0xf2)](_0x52167d))return![];return _0x26283d['add'](_0x52167d),!![];});if(_0x203563[_0x5d2b90(0xea)])PROXYIP_CACHE[_0x5d2b90(0x402)](_0x483dde,{'t':_0x9e8d42,'ips':_0x203563});return _0x203563;}function _0x4094(){const _0x29915d=['getWriter','cf.zerone-cdn.pp.ua','binaryType','ProxyIP.SG.CMLiussss.net','src','HOST','optimizer','cfip.cfcdn.vip','&security=tls&sni=','SOCKS5\x20认证失败','104.18.211.8#优选IP-193','current','🚀\x20节点选择','arraybuffer','xn--b6gac.eu.org','timeout','连接被关闭','proxyip.fi.cmliussss.net','enqueue','nodeLimitCount','104.18.26.28#优选IP-168','未知\x20API:\x20','vless=','subIncludeDefault','162.159.0.1#优选IP-010','\x20\x20\x20\x20sni:\x20','ss-subkey','CF优选\x20','188.114.98.91#优选IP-064','104.18.119.34#优选IP-016','no\x20answer','172.67.71.106#优选IP-294','count','no-store','172.65.145.187#优选IP-081','104.25.101.186#优选IP-057','custom','freeyx.cloudflare88.eu.org','://','tcp\x20timeout','订阅生成失败:\x20','trojan://','104.18.133.24#优选IP-085','preset','PAICNI/CFNext','udp://223.5.5.5','188.114.96.164#优选IP-211','plain','ws-opts','&type=A','setUint16','enableVless','104.19.168.107#优选IP-074','race','104.21.114.216#优选IP-079','application/json','cf.0sm.com','乌克兰','1467114cpnlea','number','cdns.doon.eu.org','encryption=none','UNICOM','104.24.58.243#优选IP-097','172.65.11.191#优选IP-122','cfip.1323123.xyz','\x20\x20\x20\x20ws-opts:','setUint32','104.16.249.249#优选IP-009','188.114.96.116#优选IP-054','162.159.237.243#优选IP-119','104.19.143.220#优选IP-256','min','random','104.25.122.6#优选IP-053','issued','104.25.129.238#优选IP-180','ceil','104.24.2.253#优选IP-077','162.159.44.215#优选IP-031','162.159.6.246#优选IP-199','162.159.6.39#优选IP-195','unreachable','&ech=','188.114.96.255#优选IP-082','mixed','密码错误','http','tokenish','now','\x20\x20\x20\x20type:\x20','CF_API_TOKEN','#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a','message','SOCKS5\x20服务器要求认证但未提供凭据','region','x-padding-header','104.25.169.144#优选IP-291','188.114.96.1#优选IP-011','https://bestcf.pages.dev/random-region/TW/100.txt','href','104.24.230.144#优选IP-102','下载速度','104.24.168.96#优选IP-130','fragmentParam','土耳其','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','(((.+)+)+)+$','doh\x20fail','ECH','拉取失败:\x20','attachment;\x20filename=\x22CFNext\x22;\x20filename*=utf-8\x27\x27CFNext','微测网\x20IPv4','preferredDomains','，请换一个数据源',',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a','104.21.215.255#优选IP-247','104.19.97.238#优选IP-139','digest','ProxyIP.GB.CMLiussss.net','https','\x0a#\x20====================\x20锚点配置\x20====================\x0a#\x20代理提供者模板\x20-\x20订阅源基础配置\x0a\x0a#\x20节点筛选正则表达式\x20-\x20仅保留常用地区\x0aFilterHK:\x20&FilterHK\x20\x27^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\x27\x0aFilterSG:\x20&FilterSG\x20\x27^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\x27\x0aFilterJP:\x20&FilterJP\x20\x27^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\x27\x0aFilterUS:\x20&FilterUS\x20\x27^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\x27\x0a#\x20注意：🇼🇸\x20是萨摩亚旗帜，不是台湾，已移除，避免误匹配\x0aFilterTW:\x20&FilterTW\x20\x27^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\x27\x0a\x0a#\x20====================\x20监听器\x20====================\x0alisteners:\x0a\x20\x20#\x20Shadowsocks监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\x0a\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20shadowsocks,\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20udp:\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20aes-256-gcm}\x0a\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\x0a\x20\x20-\x20{name:\x20MIXED-SG,\x20type:\x20mixed,\x20port:\x2050000,\x20proxy:\x20新加坡节点}\x0a\x20\x20-\x20{name:\x20MIXED-US,\x20type:\x20mixed,\x20port:\x2050001,\x20proxy:\x20美国节点}\x0a\x20\x20-\x20{name:\x20MIXED-TW,\x20type:\x20mixed,\x20port:\x2050002,\x20proxy:\x20台湾节点}\x0a\x20\x20-\x20{name:\x20MIXED-HK,\x20type:\x20mixed,\x20port:\x2050003,\x20proxy:\x20香港节点}\x0a\x20\x20-\x20{name:\x20MIXED-JP,\x20type:\x20mixed,\x20port:\x2050004,\x20proxy:\x20日本节点}\x0a\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20一键连接}\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0aredir-port:\x207892\x0amixed-port:\x207893\x0atproxy-port:\x207895\x0aipv6:\x20true\x0aallow-lan:\x20true\x0aunified-delay:\x20true\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20mihomo:yyds666\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20zashboard\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20yyds666\x20\x20\x20\x20#\x20请修改为自定义密钥\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-network:\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20流量嗅探\x0asniffer:\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20TLS:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20dns-hijack:\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a#\x20====================\x20DNS\x20配置\x20====================\x0a#\x20防泄露要点：\x0a#\x20\x20\x201)\x20respect-rules:\x20true：DNS\x20服务器连接遵循路由规则（国外\x20DoH\x20走代理隧道、国内\x20DoH\x20直连），\x0a#\x20\x20\x20\x20\x20\x20解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\x0a#\x20\x20\x202)\x20默认\x20nameserver\x20用国内\x20DoH；只有“将走代理”的规则集才用国外\x20DoH，\x0a#\x20\x20\x20\x20\x20\x20且其域名在\x20rules\x20中显式固定走代理。\x0a#\x20\x20\x203)\x20fake-ip-filter\x20补齐系统连通性检测\x20/\x20时间同步\x20/\x20运营商登录等域名，防止系统误判断网而回退运营商\x20DNS。\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msftconnecttest.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22connectivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20rule-set:Direct\x0a\x20\x20\x20\x20-\x20rule-set:Private\x0a\x20\x20\x20\x20-\x20rule-set:China\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析：未命中\x20nameserver-policy\x20的域名（国内\x20DoH，直连）\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20直连出口的解析\x0a\x20\x20direct-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析代理节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20proxy-server-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20nameserver-policy:\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22rule-set:Advertising,AWAvenueAds\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20直连类：国内\x20DoH\x0a\x20\x20\x20\x20\x22rule-set:Direct,Private,China\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20走代理类：国外\x20DoH（连接本身经代理隧道，不直连暴露查询）\x0a\x20\x20\x20\x20\x22rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Microsoft,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.google/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://cloudflare-dns.com/dns-query\x22\x0a\x0a#\x20====================\x20代理策略组（9\x20个可见\x20+\x206\x20个隐藏自动子组）\x20====================\x0aproxy-groups:\x0a\x20\x20#\x20主入口：默认自动选择，可手动切换各地区\x20/\x20故障转移\x20/\x20全部节点\x20/\x20直接连接\x0a\x20\x20-\x20{name:\x20一键连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[自动选择,\x20故障转移,\x20香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点,\x20直接连接],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\x0a\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\x0a\x20\x20-\x20{name:\x20自动选择,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20hidden:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20故障转移,\x20\x20\x20\x20\x20type:\x20fallback,\x20proxies:\x20[香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点],\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\x0a\x20\x20#\x20常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\x0a\x20\x20-\x20{name:\x20香港节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20proxies:\x20[香港自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\x0a\x20\x20-\x20{name:\x20台湾节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20proxies:\x20[台湾自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\x0a\x20\x20-\x20{name:\x20日本节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20proxies:\x20[日本自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\x0a\x20\x20-\x20{name:\x20美国节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20proxies:\x20[美国自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\x0a\x20\x20-\x20{name:\x20新加坡节点,\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20proxies:\x20[新加坡自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\x0a\x20\x20#\x20全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\x0a\x20\x20-\x20{name:\x20全部节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20proxies:\x20[自动选择],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\x0a\x20\x20#\x20各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\x0a\x20\x20-\x20{name:\x20香港自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20台湾自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20日本自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20美国自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20新加坡自动,\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20#\x20直连分组（放在最下方）\x0a\x20\x20-\x20{name:\x20直接连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[DIRECT],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\x0a\x20\x20-\x20RULE-SET,Tracking,REJECT\x0a\x20\x20-\x20RULE-SET,AWAvenueAds,REJECT\x0a\x20\x20-\x20RULE-SET,Advertising,REJECT\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直接连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直接连接\x0a\x20\x20-\x20DOMAIN,dns.google,一键连接\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,一键连接\x0a\x0a\x20\x20#\x20直连规则\x0a\x20\x20-\x20RULE-SET,Private,直接连接\x0a\x20\x20-\x20RULE-SET,Direct,直接连接\x0a\x20\x20-\x20RULE-SET,Download,直接连接\x0a\x20\x20-\x20RULE-SET,AppleCN,直接连接\x0a\x20\x20#\x20阻止走代理的\x20QUIC（强制回退\x20TCP，避免\x20QUIC\x20绕过代理\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC\x20不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走一键连接）\x0a\x20\x20-\x20RULE-SET,AI,一键连接\x0a\x20\x20-\x20RULE-SET,Telegram,一键连接\x0a\x20\x20-\x20RULE-SET,Twitter,一键连接\x0a\x20\x20-\x20RULE-SET,SocialMedia,一键连接\x0a\x20\x20-\x20RULE-SET,Netflix,一键连接\x0a\x20\x20-\x20RULE-SET,YouTube,一键连接\x0a\x20\x20-\x20RULE-SET,Spotify,一键连接\x0a\x20\x20-\x20RULE-SET,TikTok,一键连接\x0a\x20\x20-\x20RULE-SET,disney,一键连接\x0a\x20\x20-\x20RULE-SET,Google,一键连接\x0a\x20\x20-\x20RULE-SET,Microsoft,一键连接\x0a\x20\x20-\x20RULE-SET,github,一键连接\x0a\x20\x20-\x20RULE-SET,Proxy,一键连接\x0a\x20\x20-\x20RULE-SET,China,直接连接\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20RULE-SET,PrivateIP,直接连接,no-resolve\x0a\x20\x20-\x20RULE-SET,TelegramIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ProxyIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ChinaIP,直接连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：国内\x20IP\x20直连（ChinaIP\x20规则集已覆盖），其余走一键连接\x0a\x20\x20-\x20MATCH,一键连接\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x203600,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0a\x0a#\x20规则提供者（仅保留常用）\x0arule-providers:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\x0a\x20\x20AWAvenueAds:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/China.mrs}\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\x0a\x20\x20YouTube:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Microsoft.mrs}\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\x0a\x20\x20#\x20媒体（DustinWin）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20https://rule.kelee.one/Clash/GitHub.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\x0a\x20\x20ProxyIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a','原生地址','http/1.1','randomUUID','188.114.98.53#优选IP-080','TROJAN_PASSWORD','MB/s','162.159.10.45#优选IP-208','echHost','object','162.159.153.10#优选IP-179','some','&host=','104.19.88.253#优选IP-039','172.64.146.15#优选IP-028','HKG','172.65.45.248#优选IP-290','isp','server','requests','forEach','104.18.178.193#优选IP-183','104.17.87.46#优选IP-201','split','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','|rf','所有出站方式均失败','162.159.43.223#优选IP-196','x-padding-obfs-mode','不支持的\x20SS\x20加密方式:\x20','password','&type=ws&path=','getUint16','proxy\x20timeout','不支持的\x20VLESS\x20版本','headerLength','lastIndexOf','172.64.0.0/13','\x20\x20\x20\x20\x20\x20path:\x20','subUrl','latest','values','104.17.0.4#优选IP-234','https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','sort','ARN','presetErr','getUint32',',\x20ws-headers=Host:','#原生地址','STR','104.18.196.199#优选IP-069','SEL','readable','MUC','HTTP\x20','AES-GCM','replace','104.20.15.15','TTL','return\x20(function()\x20','tls','mozilla','redirect','relay','decrypt','104.17.245.237#优选IP-221','931ZJGUKG','104.25.45.44#优选IP-038','CF\x20API\x20限流(429)，显示缓存数据（可能滞后）','_quotaCap','104.18.217.109#优选IP-033','104.27.21.175#优选IP-298','\x20\x20\x20\x20\x20\x20enable:\x20','wetest_cname','|raw','vless',',\x20obfs=','HostMonit\x20优选','104.21.7.133#优选IP-226','104.16.113.211#优选IP-062','混淆版','5481707LkGMbG','162.159.197.16#优选IP-117','微测网\x20优选域名','surge','104.27.72.4#优选IP-111','🌐\x20谷歌服务','customPref','speed.cloudflare.com','type=xhttp','geosite-netflix','text/yaml','104.24.178.200#优选IP-210','104.25.124.155#优选IP-170','104.16.108.18#优选IP-106','signal','v2ray','echDns','188.114.99.114#优选IP-060','Mozilla/5.0\x20(CFNext)','104.16.11.246#优选IP-163','墨西哥','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','CF_ACCOUNT_ID','104.27.124.239#优选IP-278','172.65.50.167#优选IP-254','172.65.35.169#优选IP-092','104.26.1.1','2400:cb00::/32','SS\x20分片长度非法\x20','stash','encrypt','162.159.228.231#优选IP-260','162.159.198.200#优选IP-245','protocol','172.65.167.52#优选IP-241','toUpperCase','2606:4700::/32','true',',\x20obfs=wss,\x20obfs-host=','104.25.245.147#优选IP-083','encode','all','subRandomCount','proxyip.de.cmliussss.net','172.65.21.190#优选IP-191','104.25.73.92#优选IP-187','cpuTimeP50','162.159.10.243#优选IP-281','172.67.64.211#优选IP-020','apply','104.19.1.1','clash','domains','104.16.98.7','catch','104.19.69.150#优选IP-186','2803:f800::/32','/login?next=','188.114.96.64#优选IP-171','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','hostname','104.16.66.7','geosite-github','数据中心','新加坡','cf.877771.xyz','http\x20timeout','域名-','\x20\x20\x20\x20servername:\x20','set','x-padding-placement','188.114.96.141#优选IP-146','104.27.207.36#优选IP-098','vless://','104.21.23.1','YXURL','query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','proxyip.digitalocean.cmliussss.net','\x20\x20\x20\x20alpn:\x20[h2]','爱尔兰','Upgrade','cfApiToken','join','resolve','内置·保底-','加拿大','8ZHeWUw','hasUpdate','104.18.18.214#优选IP-172','slice','104.18.84.180#优选IP-068','172.65.134.100#优选IP-103','SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）',',\x20password=','104.20.1.1','security=tls&sni=','https://bestcf.pages.dev/random-region/HK/100.txt','188.114.98.27#优选IP-244',',\x20tls=false','{}.constructor(\x22return\x20this\x22)(\x20)','host','bind','104.18.255.187#优选IP-050','map','candidates','polling','104.17.169.109#优选IP-217','无法识别的地址类型','security=none','arrayBuffer','round','172.67.127.122#优选IP-237','NaN','POST','104.19.78.30#优选IP-089','104.24.230.213#优选IP-109','cnamefuckxxs.yuchen.icu','未授权（需要管理密码）','sub','https://www.wetest.vip/page/cloudflare/address_v6.html','endsWith','172.64.34.109#优选IP-087','application/dns-json','IPv6','cf.zhetengsha.eu.org','quotaAuto','104.19.246.234#优选IP-280','反代·','delete','PATH','172.65.118.85#优选IP-267','未绑定\x20KV\x20命名空间，无需重置','\x20\x20\x20\x20xhttp-opts:','\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20','subtle','530544EbTXSG','&fp=chrome&host=','104.18.34.34','https://raw.githubusercontent.com/','104.18.28.48#优选IP-156','uuid','104.24.244.237#优选IP-075','keyLen','线路名称','charCodeAt','阿根廷','104.17.127.180#优选IP-001',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','104.17.24.252#优选IP-012','https://doh.pub/dns-query','write','BER','5077308oBPmqq','[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a','xhttp\x20代理错误:\x20','🎯\x20全球直连','173.245.48.0/20','188.114.97.21#优选IP-229','&type=','172.65.47.182#优选IP-220','config','@edtunnel','162.159.240.54#优选IP-233','text/html;\x20charset=utf-8','proxyIP','length','匈牙利','warn','xudp','\x20=\x20','command','selector','alpn','has','OSA','104.17.97.72#优选IP-213','colo','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','2606:4700::','login','ProxyIP.DE.CMLiussss.net','162.159.44.214#优选IP-032','trojan=','IP地址','version','waitUntil','104.24.12.10','read','13218nLpjJV','检测失败:\x20','error','aes-256-gcm','CONNECT\x20','\x20\x20\x20\x20\x20\x20query-server-name:\x20','\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','assign','\x20\x20\x20\x20tls:\x20true','aes-256gcm','104.16.234.241#优选IP-288','104.17.76.49#优选IP-246','188.114.97.52#优选IP-124','104.25.161.217#优选IP-140','headers','141.101.64.0/18','20AYNVXD','172.65.45.102#优选IP-250','getReader','ms\x20','tun','?name=','162.159.192.111#优选IP-232','172.65.139.108#优选IP-224','enableTrojan','自定义源:\x20','https://cloudflare-dns.com/dns-query?name=','then','SS\x20连接被关闭','IPv4','\x20=\x20trojan,\x20','104.25.166.112#优选IP-159','type','test','172.67.159.243#优选IP-242','104.25.62.39#优选IP-265','5rmGeLw','🌍\x20国外媒体','LHR','2405:b500::/32','https://cloudflare-dns.com/dns-query','update','trojan','104.27.113.151#优选IP-101','proxyip.hk.cmliussss.net',',\x20tls-verification=true,\x20tls13=true','172.67.82.86#优选IP-162','172.67.174.143#优选IP-176','console','keys','fn.130519.xyz','104.17.185.207#优选IP-029','luma_auth=','open','&type=xhttp&mode=stream-one','哈萨克斯坦','releaseLock','viewer','filter','admin','aes-128-gcm','network','https://','162.159.228.164#优选IP-295','remote','172.66.199.166#优选IP-127','socks5','104.16.218.231#优选IP-155','getRandomValues','104.25.126.144#优选IP-272','push','预设源:\x20','sourceURL','https://stock.hostmonit.com/CloudFlareYes','Bearer\x20','172.65.118.105#优选IP-225','padStart','includes','sum','ProxyIP.NL.CMLiussss.net','162.159.135.234#优选IP-249','162.159.228.244#优选IP-071','proxyip.se.cmliussss.net','Host','104.21.2.1','dns','nodeLimit','104.25.18.216#优选IP-198','unknown','application/octet-stream','_skipIssued','proxyip.kr.cmliussss.net','quantumultx','已保存并生效','&alpn=','104.25.246.123#优选IP-043','明文版','Answer','buffer','encryption=none&','send','104.16.88.7','NRT','104.17.195.184#优选IP-135','list','port','SOCKS5\x20连接失败\x20码','user','菲律宾','doh\x20unavailable','\x20\x20\x20\x20password:\x20','floor','code','172.19.0.1/30','104.16.238.98#优选IP-094','today','162.159.128.1','pass','比利时','172.65.162.213#优选IP-113','reset','104.25.238.237#优选IP-286','104.17.101.139#优选IP-030','CFNext\x20明文版.js','马来西亚','proxyip.sg.cmliussss.net','104.19.78.144#优选IP-184','162.159.137.205#优选IP-036','🐟\x20漏网之鱼','查询失败:\x20','104.19.106.1#优选IP-110','quota','geosite-openai','172.65.64.7#优选IP-037','104.16.0.133#优选IP-093','fillCount','162.159.2.86#优选IP-222','172.65.184.114#优选IP-189','https://bestcf.pages.dev/random-region/US/100.txt','172.67.72.4','104.18.123.15#优选IP-169','flatMap','parse','FRA','proxyip.us.cmliussss.net','tun0','104.19.247.23#优选IP-147','127.0.0.1','toLowerCase','log','172.67.195.152#优选IP-188','speed.marisalnc.com',',\x20username=','value','block','text/plain','nekoray','bestcf.030101.xyz','geosite-spotify','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','constructor','xPaddingPlacement','Sec-WebSocket-Protocol','native','104.27.27.106#优选IP-292','104.16.68.175#优选IP-153','fill','104.24.25.178#优选IP-284','writable','max','104.16.77.112#优选IP-214','shift','table','104.24.49.39#优选IP-299','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','search','198.18.0.0/15','toISOString','https://www.wetest.vip/page/cloudflare/cname.html','162.159.137.71#优选IP-276','body','trojanPassword','CHINATELECOM','tun-in','2c0f:f248::/32','method','abort','BESTIP_AUTO','proxyip.oracle.cmliussss.net','104.17.127.106#优选IP-048','concat','tlsOnly','byteOffset','162.159.230.149#优选IP-116','https://1.1.1.1/dns-query','chacha20-poly1305','104.19.181.118#优选IP-215','182682','104.17.46.187#优选IP-173','104.16.245.187#优选IP-019','172.65.173.221#优选IP-051','104.17.146.117#优选IP-141','&path=','latency','startsWith','162.159.90.82#优选IP-253','ProxyIP.KR.CMLiussss.net','any','application/json;\x20charset=utf-8','ALPN','操作超时','104.18.63.107#优选IP-185','意大利','enable','SS\x20AEAD\x20数据过短','exec','CF\x20API\x20HTTP\x20','104.17.234.5#优选IP-018','104.27.46.114#优选IP-271','162.159.199.220#优选IP-263','104.25.100.203#优选IP-144','ips','opened','172.67.189.246#优选IP-115','\x20\x20\x20\x20udp:\x20true','text','get','match','103.31.4.0/22','trim','198.41.128.0/17','104.24.184.158#优选IP-123','outboundProxy','cloudflare','仅支持\x20POST','\x20\x20\x20\x20port:\x20','wss','SOCKS5\x20不支持的认证方法\x20','104.27.66.179#优选IP-076','090227','subMode','ipType','104.17.151.244#优选IP-257','162.159.9.18#优选IP-230','104.27.23.242#优选IP-150','subarray','Mozilla/5.0','https://bestcf.pages.dev/random-region/SG/100.txt','阿联酋','104.25.109.0#优选IP-275','172.64.81.44#优选IP-058','MAN',',\x20tls-verification=true,\x20tag=','\x20=\x20vless,\x20','quantiles','SOCKS5\x20握手失败','ProxyIP.HK.CMLiussss.net','104.21.192.230#优选IP-099','__proto__','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','104.24.18.62#优选IP-289','geosite-microsoft',',\x20obfs-uri=','104.16.124.96#优选IP-003','104.18.185.40#优选IP-041','dns-out','SHA-256',',\x20obfs-host=','cloudflare-ip.mofashi.ltd','104.27.195.79#优选IP-178','优选IP-S','https://bestcf.pages.dev/random-region/KR/100.txt','127.0.0.1:9090','172.65.3.67#优选IP-181','172.67.232.109#优选IP-182','162.159.5.175#优选IP-015','trace','ProxyIP.JP.CMLiussss.net','from','isArray','obfuscated','http:','useCidr','threads','104.17.25.173#优选IP-167','104.24.51.58#优选IP-138','stats','direct','cfAccountId','byteLength','decode','size','\x20\x20-\x20name:\x20','mode','.list','104.25.141.168#优选IP-042','/main/','f3058171cad.002404.xyz','188.114.97.61#优选IP-164','name','104.17.121.245#优选IP-258','188.114.98.19#优选IP-154','新西兰',',\x20over-tls=true,\x20tls-host=','未找到账户数据（检查账户\x20ID\x20与令牌权限）','104.25.123.130#优选IP-240','172.67.255.83#优选IP-114','优选IP-',',\x20tls=true,\x20skip-cert-verify=true,\x20sni=','Ⓜ️\x20微软服务','_ctx','CHINAMOBILE','data','104.19.214.25#优选IP-073','162.159.42.67#优选IP-270','104.17.201.77','fragment','path','enableXhttp','重置失败:\x20','searchParams','104.17.44.9','customErr','https://dns.alidns.com/resolve','104.16.125.96#优选IP-004','104.25.86.143#优选IP-235','Not\x20Found','172.65.78.200#优选IP-283','stringify','Trojan\x20头部过短','only','VLESS\x20头部过短','https://bestcf.pages.dev/random-region/JP/100.txt','\x20\x20\x20\x20\x20\x20headers:','ProxyIP.TW.CMLiussss.net','104.25.214.211#优选IP-055','AAAA','172.67.85.54#优选IP-300','sing-box','proxyip.nl.cmliussss.net','GET\x20/\x20HTTP/1.1\x0d\x0aHost:\x20','ADMIN','104.16.91.33#优选IP-161','1842363mhFKad','104.25.251.220#优选IP-177','188.114.99.14#优选IP-206','\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20','以色列','next','geosite-twitter',';\x20charset=utf-8','cloudflare.9jy.cc','findIndex','104.16.127.96#优选IP-006','HEL','json','quanx','104.17.2.7','toString','2a06:98c0::/29','104.25.33.126#优选IP-238','304308nZxpKR','172.65.127.225#优选IP-034','104.16.248.248#优选IP-008','104.19.115.243#优选IP-096','CHACHA20-POLY1305','104.25.238.28#优选IP-277','162.159.143.225#优选IP-157','104.16.123.96#优选IP-002','cloudflare-ech.com','104.24.155.234#优选IP-070','addEventListener','status','104.18.41.168#优选IP-231','104.16.201.45#优选IP-160','url','104.16.0.0/13','104.25.0.1','geosite-cn','HTTP\x20代理\x20CONNECT\x20失败:\x20','ech','ICN','aes-128gcm','pagesFunctionsInvocationsAdaptiveGroups','104.18.194.107#优选IP-228','Cookie','104.18.40.93#优选IP-023','104.18.47.234#优选IP-025','importKey','162.159.46.167#优选IP-067','chrome','subrequests','https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/','104.25.181.74#优选IP-209','104.27.96.232#优选IP-282','104.19.123.4#优选IP-045','没有可测的\x20IP','put','104.18.28.140#优选IP-095','\x0d\x0aUser-Agent:\x20Mozilla/5.0\x0d\x0aConnection:\x20close\x0d\x0a\x0d\x0a',',\x20ws=true,\x20ws-path=','DUS','104.17.195.133#优选IP-152','104.24.0.0/14','104.25.44.144#优选IP-066','172.64.144.49#优选IP-027','prefDomain','🍎\x20苹果服务','104.18.185.26#优选IP-297','info','cdn.tzpro.xyz','alive','172.67.229.44#优选IP-137','url:','close','104.17.153.58#优选IP-174','function','proxyip.vultr.cmliussss.net','103.22.200.0/22','proxyip.gb.cmliussss.net','exception','104.18.173.224#优选IP-131','104.25.193.135#优选IP-120','boolean','cloudflare.com','162.159.235.27#优选IP-072','seal','shadowrocket','preferredIPs','104.24.54.254#优选IP-044','&extra=','source','104.25.36.200#优选IP-151','115155.xyz','188.114.96.238#优选IP-269','text/plain;\x20charset=utf-8','User-Agent','saas.sin.fan','cf.090227.xyz','errors','104.16.132.229#优选IP-007','gbk','190.93.240.0/20','find','\x20\x20\x20\x20skip-cert-verify:\x20true',',\x20method=none,\x20password=','104.17.13.179#优选IP-091','未在仓库中找到版本信息','\x20\x20\x20\x20uuid:\x20','188.114.98.144#优选IP-046','172.67.165.245#优选IP-216','104.27.116.114#优选IP-262','getUint8','xPaddingObfsMode','servername','ech-opts','俄罗斯','add','104.25.223.90#优选IP-239','<tr','104.18.37.92#优选IP-024','pathname','raw','429','websocket','accounts','172.67.163.14#优选IP-108','104.18.184.243#优选IP-035','162.159.136.73#优选IP-040','utf-8','&security=none','104.27.97.130#优选IP-236','loon','security','_preamble','8.889288.xyz','dns-remote','SS\x20出站缺少密码','.top','（未指定）','abs','罗马尼亚','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','fmt','workersInvocationsAdaptive','优选地址','empty','104.24.84.86#优选IP-285','xhttp','PROXYIP','indexOf','131.0.72.0/22','104.19.191.31','surfboard','162.159.43.85#优选IP-293','geosite-category-ads-all','www.cloudflare.com'];_0x4094=function(){return _0x29915d;};return _0x4094();}async function openOutbound(_0x456472,_0x29ba56,_0x336eb5,_0x1a1b45){const _0x2f54b6=_0x1dc4ca,_0x121304=parseProxyAddress(_0x29ba56['outboundProxy']),_0x20250f=_0x29ba56['outboundMode']||'',_0x588316=_0x121304?_0x121304[_0x2f54b6(0x121)]===_0x2f54b6(0x349)||_0x121304['type']==='https'?_0x36a8d7=>connectViaHttpProxy(_0x121304,_0x36a8d7):_0x121304[_0x2f54b6(0x121)]==='ss'?_0x24271d=>connectViaShadowsocks(_0x121304,_0x24271d):_0x1b693b=>connectViaSocks5(_0x121304,_0x1b693b):null,_0x37e1d9=(_0x451804,_0x4b5222)=>{const _0xb0ff11=_0x2f54b6,_0x3c53e4=[];if(_0x20250f===_0xb0ff11(0x24b))_0x3c53e4[_0xb0ff11(0x147)](_0x588316?()=>_0x588316(_0x451804):()=>connectDirect(_0x451804,_0x4b5222));else{if(_0x20250f==='no'){_0x3c53e4['push'](()=>connectDirect(_0x451804,_0x4b5222));if(_0x588316)_0x3c53e4[_0xb0ff11(0x147)](()=>_0x588316(_0x451804));}else{if(_0x588316)_0x3c53e4[_0xb0ff11(0x147)](()=>_0x588316(_0x451804));_0x3c53e4[_0xb0ff11(0x147)](()=>connectDirect(_0x451804,_0x4b5222));}}return _0x3c53e4;};let _0x299fe4;const _0x5e2185=async(_0x4edaf2,_0x407bfb)=>{for(const _0x1c73ff of _0x37e1d9(_0x4edaf2,_0x407bfb)){try{return await _0x1c73ff();}catch(_0x4e0403){_0x299fe4=_0x4e0403;}}return null;},_0x3ce26c=_0x29ba56['proxyIP']?parseHostPort(_0x29ba56[_0x2f54b6(0xe9)],0x1bb):null;if(_0x3ce26c&&_0x3ce26c[_0x2f54b6(0xa9)]){let _0x203eb6=await resolveProxyIPs(_0x3ce26c[_0x2f54b6(0xa9)],_0x3ce26c[_0x2f54b6(0x16a)]);if(!_0x203eb6[_0x2f54b6(0xea)])_0x203eb6=[{'hostname':_0x3ce26c[_0x2f54b6(0xa9)],'port':_0x3ce26c[_0x2f54b6(0x16a)]}];for(const _0x45249f of _0x203eb6){const _0x152cac=await _0x5e2185(_0x45249f,0x1770);if(_0x152cac)return _0x152cac;}}const _0x439f5d=await _0x5e2185({'hostname':_0x456472['addr'],'port':_0x456472[_0x2f54b6(0x16a)]},0x1770);if(_0x439f5d)return _0x439f5d;{const _0x1d6a3a=selectRelayRegion(_0x336eb5),_0x5707ec=[_0x1d6a3a,...Object[_0x2f54b6(0x132)](RELAY_DOMAINS)[_0x2f54b6(0x13b)](_0x29cf8f=>_0x29cf8f!==_0x1d6a3a)]['slice'](0x0,0x3);for(const _0x2673ed of _0x5707ec){const _0x206392=RELAY_DOMAINS[_0x2673ed];if(!_0x206392)continue;let _0x5d7bba=[];try{_0x5d7bba=await resolveProxyIPs(_0x206392,0x1bb);}catch(_0x2c0965){}if(!_0x5d7bba['length'])continue;for(const _0x4e57f5 of _0x5d7bba){const _0x263891=await _0x5e2185(_0x4e57f5,0x1388);if(_0x263891)return _0x263891;}}}throw _0x299fe4||new Error(_0x2f54b6(0x385));}async function pumpToReader(_0x52b8a5,_0x5c8f83,_0x3e57f0){const _0x4d8638=_0x1dc4ca;try{while(!![]){const {done:_0x55e31b,value:_0x52e5be}=await _0x52b8a5[_0x4d8638(0x100)]();if(_0x55e31b)break;_0x5c8f83(_0x52e5be);}}catch(_0x3b87d9){}try{if(_0x3e57f0)_0x3e57f0();}catch(_0x587a64){}}async function handleWebSocketProxy(_0x58f426,_0x3a7dc9){const _0x195f72=_0x1dc4ca,_0x3126bb=new WebSocketPair(),[_0x2ad2ea,_0x343e82]=Object[_0x195f72(0x394)](_0x3126bb);try{_0x343e82['accept']({'allowHalfOpen':!![]});}catch(_0x39e9af){_0x343e82['accept']();}_0x343e82[_0x195f72(0x2f4)]=_0x195f72(0x2ff);let _0x48b614=null,_0x36ba79=null,_0x27ea6c=![],_0x473743=null;const _0x381f8f=_0x3d3f8f=>{const _0xc44545=_0x195f72;try{_0x343e82[_0xc44545(0x165)](_0x3d3f8f);}catch(_0x1c7010){}};_0x343e82['addEventListener'](_0x195f72(0x34f),async _0x316a8d=>{const _0x4fb49d=_0x195f72;try{const _0x2be822=typeof _0x316a8d[_0x4fb49d(0x239)]==='string'?TE[_0x4fb49d(0x3e5)](_0x316a8d[_0x4fb49d(0x239)]):new Uint8Array(_0x316a8d[_0x4fb49d(0x239)]);if(!_0x27ea6c){_0x473743=_0x473743?concatBytes(_0x473743,_0x2be822):_0x2be822;let _0x40d592,_0x239f80;try{let _0x2f89e1=detectTrojan(_0x473743,_0x3a7dc9);if(!_0x2f89e1&&_0x473743[_0x4fb49d(0x222)]>0x0&&_0x473743[0x0]!==0x0&&_0x473743[_0x4fb49d(0x222)]<0x3a)return;_0x239f80=!_0x2f89e1,_0x40d592=_0x2f89e1?parseTrojanHeader(_0x473743):parseVlessHeader(_0x473743);}catch(_0xf4147a){if(/头部过短/[_0x4fb49d(0x122)](_0xf4147a[_0x4fb49d(0x34f)]||''))return;throw _0xf4147a;}_0x27ea6c=!![];if(_0x40d592[_0x4fb49d(0xef)]===0x2){try{const _0x258d50=_0x473743[_0x4fb49d(0x1f6)](_0x40d592['headerLength']);if(_0x40d592[_0x4fb49d(0x16a)]===0x35&&_0x258d50[_0x4fb49d(0x222)]>=0xc){const _0x4f4fa4=await dnsToDoH(_0x258d50);if(_0x4f4fa4)_0x381f8f(_0x4f4fa4);}}catch(_0x397eae){}try{_0x343e82[_0x4fb49d(0x29f)](0x3e8);}catch(_0x6e3c2d){}return;}const _0x5e3c90=await openOutbound(_0x40d592,_0x3a7dc9,_0x58f426['cf']&&_0x58f426['cf'][_0x4fb49d(0xf5)],_0x239f80);_0x48b614=_0x5e3c90,_0x36ba79=_0x5e3c90[_0x4fb49d(0x1a9)][_0x4fb49d(0x2f2)]();if(_0x239f80)_0x381f8f(new Uint8Array([0x0,0x0]));if(_0x5e3c90[_0x4fb49d(0x2db)]&&_0x5e3c90[_0x4fb49d(0x2db)][_0x4fb49d(0x222)]>0x0)_0x381f8f(_0x5e3c90[_0x4fb49d(0x2db)]);if(_0x473743&&_0x473743[_0x4fb49d(0x222)]>_0x40d592['headerLength'])await _0x36ba79[_0x4fb49d(0xdb)](_0x473743[_0x4fb49d(0x1f6)](_0x40d592['headerLength']));_0x473743=null,pumpToReader(_0x5e3c90[_0x4fb49d(0x3a0)][_0x4fb49d(0x113)](),_0x381f8f,()=>{try{_0x343e82['close'](0x3e8);}catch(_0x27b0a3){}});}else{if(_0x36ba79)await _0x36ba79[_0x4fb49d(0xdb)](_0x2be822);else _0x473743=_0x473743?concatBytes(_0x473743,_0x2be822):_0x2be822;}}catch(_0x34b3d7){try{_0x343e82[_0x4fb49d(0x29f)](0x3f3,String(_0x34b3d7&&_0x34b3d7[_0x4fb49d(0x34f)]||_0x34b3d7));}catch(_0x13fd51){}}});const _0x211a91=()=>{const _0x4dba73=_0x195f72;if(_0x48b614){try{_0x48b614[_0x4dba73(0x29f)]();}catch(_0xbf37cb){}_0x48b614=null;}};return _0x343e82['addEventListener'](_0x195f72(0x29f),_0x211a91),_0x343e82[_0x195f72(0x274)](_0x195f72(0x103),_0x211a91),new Response(null,{'status':0x65,'webSocket':_0x2ad2ea});}async function handleXhttpProxy(_0x4c1587,_0x201489){const _0x232fd2=_0x1dc4ca,_0x25d454=_0x4c1587['body'][_0x232fd2(0x113)](),_0x5edff0=await _0x25d454[_0x232fd2(0x100)]();if(_0x5edff0['done'])return new Response(_0x232fd2(0x2e7),{'status':0x190});const _0x49b5d8=parseVlessHeader(_0x5edff0[_0x232fd2(0x19a)]),_0x4f9dfc=await openOutbound(_0x49b5d8,_0x201489,_0x4c1587['cf']&&_0x4c1587['cf'][_0x232fd2(0xf5)],!![]),_0x5a5795=_0x4f9dfc[_0x232fd2(0x1a9)][_0x232fd2(0x2f2)]();await _0x5a5795[_0x232fd2(0xdb)](_0x5edff0['value']['subarray'](_0x49b5d8[_0x232fd2(0x38e)])),((async()=>{const _0x32ed26=_0x232fd2;try{while(!![]){const {done:_0x39e4f6,value:_0x2603b6}=await _0x25d454[_0x32ed26(0x100)]();if(_0x39e4f6)break;await _0x5a5795['write'](_0x2603b6);}}catch(_0x5e6cbb){}try{await _0x5a5795['close']();}catch(_0x130d13){}})());const _0x22e516=new ReadableStream({async 'start'(_0x3c239b){const _0x525c2f=_0x232fd2;_0x3c239b[_0x525c2f(0x304)](new Uint8Array([0x0,0x0]));if(_0x4f9dfc[_0x525c2f(0x2db)]&&_0x4f9dfc[_0x525c2f(0x2db)]['byteLength']>0x0)_0x3c239b[_0x525c2f(0x304)](_0x4f9dfc[_0x525c2f(0x2db)]);const _0x46e3d6=_0x4f9dfc[_0x525c2f(0x3a0)][_0x525c2f(0x113)]();try{while(!![]){const {done:_0x4eb619,value:_0x2b6ce1}=await _0x46e3d6[_0x525c2f(0x100)]();if(_0x4eb619)break;_0x3c239b[_0x525c2f(0x304)](_0x2b6ce1);}}catch(_0x588cea){}try{_0x3c239b[_0x525c2f(0x29f)]();}catch(_0x554742){}try{_0x4f9dfc['close']();}catch(_0x16b6a6){}},'cancel'(){const _0x5d6b12=_0x232fd2;try{_0x4f9dfc[_0x5d6b12(0x29f)]();}catch(_0x60c667){}}});return new Response(_0x22e516,{'status':0xc8,'headers':{'content-type':_0x232fd2(0x15a),'x-accel-buffering':'no','cache-control':_0x232fd2(0x313)}});}function decodeUtf8OrGbk(_0x71336c){const _0x575c7b=_0x1dc4ca,_0x2cb212=_0x71336c instanceof Uint8Array?_0x71336c:new Uint8Array(_0x71336c);try{const _0x416796=new TextDecoder(_0x575c7b(0x2d6))[_0x575c7b(0x223)](_0x2cb212);if(!_0x416796['includes'](' '))return _0x416796;}catch(_0x5b73d2){}try{return new TextDecoder(_0x575c7b(0x2ba))[_0x575c7b(0x223)](_0x2cb212);}catch(_0x28b84e){}return new TextDecoder()[_0x575c7b(0x223)](_0x2cb212);}function extractCandidates(_0x4c64b1){const _0x32075b=_0x1dc4ca,_0x5f17cc=new Set(),_0xc29ae2=[],_0x1db794=(_0x52674a,_0x3931af,_0x32b8ee)=>{const _0x49a980=_0x2eef;if(!isValidIp(_0x52674a))return;if(_0x5f17cc[_0x49a980(0xf2)](_0x52674a))return;_0x5f17cc[_0x49a980(0x2ca)](_0x52674a),_0xc29ae2[_0x49a980(0x147)]({'ip':_0x52674a,'port':_0x3931af||0x1bb,'name':_0x32b8ee||''});};parseIPList(_0x4c64b1)['forEach'](_0x57033e=>_0x1db794(_0x57033e['ip'],_0x57033e[_0x32075b(0x16a)],_0x57033e['name']));const _0x1ae6c1=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x107cac;while(_0x107cac=_0x1ae6c1[_0x32075b(0x1d8)](_0x4c64b1)){const {host:_0x28d040,port:_0x17cb26}=parseHostPort(_0x107cac[0x0],0x1bb);if(_0x28d040)_0x1db794(_0x28d040,_0x17cb26,'');}const _0x261ee4=/[0-9a-fA-F:]+/g;while(_0x107cac=_0x261ee4['exec'](_0x4c64b1)){const _0x307591=_0x107cac[0x0];if(_0x307591[_0x32075b(0x14e)](':')&&_0x307591['split'](':')[_0x32075b(0xea)]>=0x3&&isValidIp(_0x307591))_0x1db794(_0x307591,0x1bb,'');}return _0xc29ae2;}function extractDomains(_0x2a0eca){const _0x481807=_0x1dc4ca,_0x1f243a=new Set(),_0x12dacb=[],_0x20d69b=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x29a156;while(_0x29a156=_0x20d69b[_0x481807(0x1d8)](_0x2a0eca)){const _0x144564=_0x29a156[0x0][_0x481807(0x195)]();!_0x1f243a[_0x481807(0xf2)](_0x144564)&&(_0x144564[_0x481807(0x14e)](_0x481807(0x1ea))||_0x144564[_0x481807(0x14e)]('bestcf')||_0x144564[_0x481807(0x14e)](_0x481807(0x1c6))||_0x144564[_0x481807(0x14e)](_0x481807(0x1f0))||_0x144564[_0x481807(0xbd)]('.xyz')||_0x144564[_0x481807(0xbd)](_0x481807(0x2df)))&&(_0x1f243a[_0x481807(0x2ca)](_0x144564),_0x12dacb[_0x481807(0x147)](_0x144564));}return _0x12dacb[_0x481807(0x9e)](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x44a5d7){const _0x22d0a8=_0x1dc4ca;_0x44a5d7=Math[_0x22d0a8(0x1aa)](0x1,parseInt(_0x44a5d7)||0x96);if(Date[_0x22d0a8(0x34b)]()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE[_0x22d0a8(0x1de)];const _0x176f59=await fetchTimeout(_0x22d0a8(0x14a),{'headers':{'User-Agent':_0x22d0a8(0x1f7)}},0x1770);if(_0x176f59&&_0x176f59['ok']){const _0x29f0c8=extractCandidates(await _0x176f59['text']())[_0x22d0a8(0x13b)](_0x1bb989=>_0x1bb989['ip']&&isCloudflareIP(_0x1bb989['ip'])),_0x25f0c8=new Set(),_0xe14119=[];for(const _0x1acc28 of _0x29f0c8){if(_0x25f0c8[_0x22d0a8(0xf2)](_0x1acc28['ip']))continue;_0x25f0c8[_0x22d0a8(0x2ca)](_0x1acc28['ip']),_0xe14119[_0x22d0a8(0x147)](_0x1acc28);if(_0xe14119['length']>=_0x44a5d7)break;}return SUBPREF_CACHE['t']=Date[_0x22d0a8(0x34b)](),SUBPREF_CACHE[_0x22d0a8(0x1de)]=_0xe14119,_0xe14119;}return null;}async function collectCandidates(_0x3f8800){const _0x5ac2d2=_0x1dc4ca;_0x3f8800=_0x3f8800||{};const _0x171ad3=[],_0x5ef88c={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x37d3bf=_0x258373=>{const _0x3d93f3=_0x2eef;if(_0x258373&&_0x258373['ip']&&isCloudflareIP(_0x258373['ip']))_0x171ad3[_0x3d93f3(0x147)]({'ip':_0x258373['ip'],'port':_0x3f8800[_0x3d93f3(0x16a)]||_0x258373[_0x3d93f3(0x16a)]||0x1bb,'name':_0x258373[_0x3d93f3(0x22c)]||''});};if(_0x3f8800[_0x5ac2d2(0x2b0)]&&OPTIMIZE_SOURCES[_0x3f8800[_0x5ac2d2(0x2b0)]]){const _0x591e9b=await fetchTimeout(OPTIMIZE_SOURCES[_0x3f8800[_0x5ac2d2(0x2b0)]]['url'],{'headers':{'User-Agent':_0x5ac2d2(0x1f7)}},0x1770);if(_0x591e9b&&_0x591e9b['ok']){const _0x18060c=extractCandidates(await _0x591e9b[_0x5ac2d2(0x1e2)]());_0x18060c['forEach'](_0x37d3bf),_0x5ef88c[_0x5ac2d2(0x31d)]=_0x18060c[_0x5ac2d2(0xea)];}else _0x5ef88c[_0x5ac2d2(0x399)]=_0x591e9b?'HTTP\x20'+_0x591e9b[_0x5ac2d2(0x275)]:'超时/网络错误';}if(_0x3f8800[_0x5ac2d2(0x149)]){const _0x3ffe07=await fetchTimeout(_0x3f8800[_0x5ac2d2(0x149)],{'headers':{'User-Agent':_0x5ac2d2(0x1f7)}},0x1770);if(_0x3ffe07&&_0x3ffe07['ok']){const _0x1ade57=extractCandidates(await _0x3ffe07[_0x5ac2d2(0x1e2)]());_0x1ade57[_0x5ac2d2(0x37f)](_0x37d3bf),_0x5ef88c[_0x5ac2d2(0x316)]=_0x1ade57[_0x5ac2d2(0xea)];}else _0x5ef88c[_0x5ac2d2(0x243)]=_0x3ffe07?_0x5ac2d2(0x3a2)+_0x3ffe07[_0x5ac2d2(0x275)]:'超时/网络错误';}const _0x3cb60c=new Set(),_0xafbe22=[];for(const _0x3c52cb of _0x171ad3){if(_0x3cb60c[_0x5ac2d2(0xf2)](_0x3c52cb['ip']))continue;_0x3cb60c['add'](_0x3c52cb['ip']),_0xafbe22[_0x5ac2d2(0x147)](_0x3c52cb);}if(_0xafbe22[_0x5ac2d2(0xea)]<(_0x3f8800['count']||0x14)){let _0xb46cf9=(_0x3f8800[_0x5ac2d2(0x312)]||0x14)-_0xafbe22[_0x5ac2d2(0xea)];try{const _0x10d4c8=await fetchBestcfPool();for(const _0xbe9935 of _0x10d4c8){if(_0xb46cf9<=0x0)break;if(_0x3cb60c[_0x5ac2d2(0xf2)](_0xbe9935['ip']))continue;if(!isCloudflareIP(_0xbe9935['ip']))continue;_0x3cb60c['add'](_0xbe9935['ip']),_0xafbe22[_0x5ac2d2(0x147)]({'ip':_0xbe9935['ip'],'port':_0x3f8800[_0x5ac2d2(0x16a)]||_0xbe9935['port']||0x1bb,'name':_0xbe9935[_0x5ac2d2(0x22c)]||''}),_0xb46cf9--;}}catch(_0x5ee9f5){}_0x5ef88c['bestcf']=(_0x3f8800['count']||0x14)-_0xafbe22[_0x5ac2d2(0xea)]-_0xb46cf9;}if(_0x3f8800[_0x5ac2d2(0x21b)]!==![]&&_0xafbe22[_0x5ac2d2(0xea)]<(_0x3f8800['count']||0x14)){const _0x2ca688=(_0x3f8800[_0x5ac2d2(0x312)]||0x14)-_0xafbe22['length'],_0x58642e=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x2ca688*0x3);let _0x4526aa=0x0;for(const _0x14ca6f of _0x58642e){if(_0x4526aa>=_0x2ca688)break;if(_0x3cb60c[_0x5ac2d2(0xf2)](_0x14ca6f))continue;_0x3cb60c['add'](_0x14ca6f),_0xafbe22[_0x5ac2d2(0x147)]({'ip':_0x14ca6f,'port':_0x3f8800[_0x5ac2d2(0x16a)]||0x1bb,'name':''}),_0x4526aa++;}_0x5ef88c['cidr']=_0x4526aa;}return{'candidates':_0xafbe22,'stats':_0x5ef88c};}function testOneLatency(_0x5d6954,_0x56ed35,_0x4b2cf8){return new Promise(_0x5d04b1=>{const _0x5b418c=_0x2eef,_0x3587bb=Date[_0x5b418c(0x34b)]();let _0x1cb834,_0x10242b=![];const _0x21406b=(_0x3a8398,_0x40b6fc)=>{const _0x30bf98=_0x5b418c;if(_0x10242b)return;_0x10242b=!![],clearTimeout(_0x1651c1);try{if(_0x1cb834)_0x1cb834[_0x30bf98(0x29f)]();}catch(_0x4e39dc){}_0x5d04b1({'ip':_0x5d6954,'port':_0x56ed35,'ok':_0x3a8398,'latency':_0x40b6fc});},_0x1651c1=setTimeout(()=>_0x21406b(![],-0x1),_0x4b2cf8);try{_0x1cb834=connect({'hostname':_0x5d6954,'port':_0x56ed35});}catch(_0x1eeb86){return _0x21406b(![],-0x1);}_0x1cb834[_0x5b418c(0x1df)][_0x5b418c(0x11c)](()=>_0x21406b(!![],Date['now']()-_0x3587bb))[_0x5b418c(0x3f3)](()=>_0x21406b(![],-0x1));});}async function runLatencyTest(_0x3fb7c5,_0x5bd94e,_0x2eec53){const _0x28eb03=_0x1dc4ca;_0x5bd94e=Math['max'](0x1,Math[_0x28eb03(0x33a)](0x32,Number(_0x5bd94e)||0x5)),_0x2eec53=Math[_0x28eb03(0x1aa)](0x1f4,Number(_0x2eec53)||0x1388);const _0x4112b2=[];let _0x4cd601=0x0;async function _0x334ece(){const _0x2f9a71=_0x28eb03;while(_0x4cd601<_0x3fb7c5[_0x2f9a71(0xea)]){const _0x5c07bc=_0x3fb7c5[_0x4cd601++],_0x50cdf8=await testOneLatency(_0x5c07bc['ip'],_0x5c07bc[_0x2f9a71(0x16a)],_0x2eec53);_0x4112b2[_0x2f9a71(0x147)](_0x50cdf8);}}return await Promise['all'](Array[_0x28eb03(0x217)]({'length':_0x5bd94e},_0x334ece)),_0x4112b2[_0x28eb03(0x397)]((_0x4da173,_0x36c869)=>(_0x4da173[_0x28eb03(0x1cc)]<0x0?0x3b9aca00:_0x4da173['latency'])-(_0x36c869[_0x28eb03(0x1cc)]<0x0?0x3b9aca00:_0x36c869[_0x28eb03(0x1cc)])),_0x4112b2;}function xhttpPadding(_0x7b7341){const _0x39e4bd=_0x1dc4ca,_0x4ae3e1=_0x7b7341[_0x39e4bd(0xd1)]||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0x39e4bd(0x34a),'xPaddingPlacement':'queryInHeader','xPaddingHeader':_0x4ae3e1[_0x39e4bd(0x9e)](0x1,0x7),'xPaddingKey':'_'+_0x4ae3e1[_0x39e4bd(0x9e)](0x19,0x1f)};}function vlessNode(_0x5a93c7,_0x2766e0,_0x5b8909,_0x4d5aeb,_0x156d79={}){const _0x8b2684=_0x1dc4ca,_0xa47c4=_0x5a93c7[_0x8b2684(0xa9)],_0x181988=_0x2766e0['includes'](':')&&!_0x2766e0[_0x8b2684(0x1cd)]('[')?'['+_0x2766e0+']':_0x2766e0,_0xd1c19c=!HTTP_PORTS['has'](Number(_0x5b8909)),_0x398b76=encodeURIComponent;let _0x409338=_0x8b2684(0x32f);if(_0xd1c19c)_0x409338+=_0x8b2684(0x2fa)+_0x398b76(_0xa47c4)+'&fp=chrome';else _0x409338+=_0x8b2684(0x2d7);_0x409338+=_0x8b2684(0x377)+_0x398b76(_0xa47c4);if(_0x156d79[_0x8b2684(0x121)]==='xhttp'&&_0xd1c19c)_0x409338+=_0x8b2684(0x137),_0x409338+=_0x8b2684(0x2af)+_0x398b76(JSON[_0x8b2684(0x249)](xhttpPadding(_0x5a93c7)));else _0x409338+='&type=ws';_0x409338+=_0x8b2684(0x1cb)+_0x398b76('/'+_0x5a93c7['path']);if(_0x5a93c7[_0x8b2684(0xf1)])_0x409338+=_0x8b2684(0x15f)+_0x398b76(_0x5a93c7[_0x8b2684(0xf1)]);return _0x5a93c7['ech']&&(_0x409338+='&ech='+_0x398b76((_0x5a93c7[_0x8b2684(0x373)]||_0x8b2684(0x272))+'+'+(_0x5a93c7[_0x8b2684(0x3cd)]||'https://223.5.5.5/dns-query'))),_0x8b2684(0x8e)+_0x5a93c7[_0x8b2684(0xd1)]+'@'+_0x181988+':'+_0x5b8909+'?'+_0x409338+'#'+encodeURIComponent(_0x4d5aeb);}function trojanNode(_0x2a13ac,_0xb9c5c7,_0x3c50b8,_0x4c3d0c){const _0x149b31=_0x1dc4ca,_0x3a6dca=_0x2a13ac[_0x149b31(0xa9)],_0x102c83=_0xb9c5c7['includes'](':')&&!_0xb9c5c7[_0x149b31(0x1cd)]('[')?'['+_0xb9c5c7+']':_0xb9c5c7,_0x441791=encodeURIComponent,_0x176246=!HTTP_PORTS[_0x149b31(0xf2)](Number(_0x3c50b8));let _0x5c3d61=_0x176246?_0x149b31(0xa4)+_0x441791(_0x3a6dca)+_0x149b31(0xcd)+_0x441791(_0x3a6dca)+'&type=ws&path='+_0x441791('/'+_0x2a13ac['path']):'security=none&host='+_0x441791(_0x3a6dca)+_0x149b31(0x38a)+_0x441791('/'+_0x2a13ac['path']);if(_0x2a13ac[_0x149b31(0xf1)]&&_0x176246)_0x5c3d61+=_0x149b31(0x15f)+_0x441791(_0x2a13ac['alpn']);if(_0x2a13ac[_0x149b31(0x27d)]&&_0x176246)_0x5c3d61+=_0x149b31(0x345)+_0x441791((_0x2a13ac[_0x149b31(0x373)]||_0x149b31(0x272))+'+'+(_0x2a13ac[_0x149b31(0x3cd)]||'https://223.5.5.5/dns-query'));return _0x149b31(0x31b)+(_0x2a13ac[_0x149b31(0x1b6)]||_0x2a13ac[_0x149b31(0xd1)])+'@'+_0x102c83+':'+_0x3c50b8+'?'+_0x5c3d61+'#'+encodeURIComponent(_0x4c3d0c);}const DNH_CACHE=new Map();function fetchTimeout(_0x39381e,_0x55a490,_0x43ffa3){return new Promise(_0x17cedf=>{const _0x3c65d3=_0x2eef,_0x1c1f24=new AbortController(),_0x49d761=setTimeout(()=>_0x1c1f24[_0x3c65d3(0x1bb)](),_0x43ffa3);fetch(_0x39381e,Object['assign']({},_0x55a490,{'signal':_0x1c1f24[_0x3c65d3(0x3cb)]}))['then'](_0xbae267=>{clearTimeout(_0x49d761),_0x17cedf(_0xbae267);})[_0x3c65d3(0x3f3)](()=>{clearTimeout(_0x49d761),_0x17cedf(null);});});}async function resolvePreferredDomains(_0x1175d4,_0x4d6cb0=0x64,_0x42a384=0x12c,_0x206653=![],_0x5adc7a=!![],_0x704fe4=![]){const _0x4486b3=_0x1dc4ca,_0x56df2f=String(_0x1175d4||'')[_0x4486b3(0x382)](/[\n,;]+/)['map'](_0x5d46ab=>_0x5d46ab[_0x4486b3(0x1e6)]()[_0x4486b3(0x3a4)](/^\*\./,''))['filter'](Boolean),_0x12849d=Date[_0x4486b3(0x34b)](),_0x29c68b=[_0x4486b3(0x129),'https://dns.alidns.com/resolve'],_0x513cae=async(_0x2764af,_0xf6e4b7,_0x5298ba)=>{const _0x566a7e=_0x4486b3,_0x509220=_0x29c68b[_0x566a7e(0xac)](async _0x58f69a=>{const _0x30c40a=_0x566a7e,_0x1c68d1=await fetchTimeout(_0x58f69a+_0x30c40a(0x116)+encodeURIComponent(_0x2764af)+_0x30c40a(0xe3)+_0xf6e4b7,{'headers':{'accept':_0x30c40a(0xbf)}},0xfa0);if(!_0x1c68d1||!_0x1c68d1['ok'])throw new Error(_0x30c40a(0x16e));const _0x59b338=await _0x1c68d1[_0x30c40a(0x264)](),_0x4cb9fc=(_0x59b338['Answer']||[])['filter'](_0x494da1=>_0x494da1['type']===_0x5298ba&&(_0xf6e4b7==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x494da1[_0x30c40a(0x239)]):/^[0-9a-fA-F:]+$/[_0x30c40a(0x122)](_0x494da1[_0x30c40a(0x239)])))[_0x30c40a(0xac)](_0x1aab30=>_0x1aab30[_0x30c40a(0x239)]);if(!_0x4cb9fc['length'])throw new Error(_0x30c40a(0x310));return _0x4cb9fc;});try{return await Promise['any'](_0x509220);}catch(_0x5d31c7){return[];}},_0x4b5217=await Promise[_0x4486b3(0x3e6)](_0x56df2f['map'](async _0xaecd7f=>{const _0x1a36f4=_0x4486b3;if(_0xaecd7f[_0x1a36f4(0x14e)](_0x1a36f4(0x318))){if(_0xaecd7f[_0x1a36f4(0x1cd)]('sub://')){let _0x4e0bae=_0xaecd7f[_0x1a36f4(0x9e)](0x6);if(/^[A-Za-z0-9+/=]+$/[_0x1a36f4(0x122)](_0x4e0bae)&&_0x4e0bae[_0x1a36f4(0xea)]%0x4===0x0)try{const _0x243cd0=atob(_0x4e0bae);if(/^https?:\/\//i['test'](_0x243cd0))_0x4e0bae=_0x243cd0;}catch(_0x566c4e){}if(!/^https?:\/\//i['test'](_0x4e0bae))_0x4e0bae=_0x1a36f4(0x13f)+_0x4e0bae;_0xaecd7f=_0x4e0bae;}const _0x8526ba=_0x1a36f4(0x29e)+_0xaecd7f+(_0x206653?_0x1a36f4(0x384):'')+(_0x5adc7a?'':_0x1a36f4(0x3b6)),_0x12ad56=DNH_CACHE[_0x1a36f4(0x1e3)](_0x8526ba);if(_0x12ad56&&_0x12849d-_0x12ad56['t']<0xa*0x3c*0x3e8)return _0x12ad56[_0x1a36f4(0x1de)][_0x1a36f4(0x9e)](0x0,_0x4d6cb0);try{const _0x3f6149=await fetchTimeout(_0xaecd7f,{},0x1770);if(!_0x3f6149||!_0x3f6149['ok'])throw new Error(_0x1a36f4(0x344));const _0x587f8a=decodeUtf8OrGbk(await _0x3f6149[_0x1a36f4(0xb2)]());let _0x384030=_0x587f8a;if(/^[A-Za-z0-9+/=\s]{40,}$/['test'](_0x384030[_0x1a36f4(0x9e)](0x0,0x7d0))&&_0x384030[_0x1a36f4(0x3a4)](/\s+/g,'')['length']%0x4===0x0)try{const _0x572863=atob(_0x384030[_0x1a36f4(0x3a4)](/\s+/g,''));_0x384030=decodeUtf8OrGbk(Uint8Array[_0x1a36f4(0x217)](_0x572863,_0x54503b=>_0x54503b[_0x1a36f4(0xd5)](0x0)));}catch(_0xb485aa){}const _0x1dee78=new Set(),_0x45ceb8={},_0x40dbdd=[],_0x15f5e0=isTrustedRegionPool(_0xaecd7f),_0x1d3446=_0x1f9fe0=>!_0x5adc7a||isCloudflareIP(_0x1f9fe0)||_0x15f5e0,_0x150168=_0x384030[_0x1a36f4(0x1e6)]()[_0x1a36f4(0x382)](/\r?\n/)['map'](_0xb52e10=>_0xb52e10[_0x1a36f4(0x1e6)]())[_0x1a36f4(0x13b)](Boolean);if(_0x150168['length']>0x1&&_0x150168[0x0][_0x1a36f4(0x14e)](',')){const _0x7c1581=_0x150168[0x0][_0x1a36f4(0x382)](',')['map'](_0x45ea23=>_0x45ea23[_0x1a36f4(0x1e6)]()),_0x2350d8=_0x7c1581[_0x1a36f4(0x14e)](_0x1a36f4(0xfc))&&_0x7c1581[_0x1a36f4(0x14e)]('端口'),_0x394718=_0x7c1581[_0x1a36f4(0x376)](_0x47aa6e=>_0x47aa6e[_0x1a36f4(0x14e)]('IP'))&&_0x7c1581[_0x1a36f4(0x376)](_0xa99c39=>_0xa99c39[_0x1a36f4(0x14e)]('延迟'))&&_0x7c1581[_0x1a36f4(0x376)](_0x4ddda9=>_0x4ddda9[_0x1a36f4(0x14e)]('下载速度'));if(_0x2350d8||_0x394718){const _0x1eccb4=_0x7c1581[_0x1a36f4(0x261)](_0x3c868d=>_0x3c868d[_0x1a36f4(0x14e)]('IP')),_0xde2222=_0x7c1581[_0x1a36f4(0x2eb)]('端口'),_0x338dde=_0x7c1581[_0x1a36f4(0x261)](_0x366d09=>_0x366d09['includes']('延迟')),_0x4bcb2a=_0x7c1581[_0x1a36f4(0x261)](_0x30aa20=>_0x30aa20[_0x1a36f4(0x14e)](_0x1a36f4(0x358))),_0x34cfe5=_0x7c1581[_0x1a36f4(0x2eb)]('国家')>-0x1?_0x7c1581[_0x1a36f4(0x2eb)]('国家'):_0x7c1581[_0x1a36f4(0x2eb)]('城市')>-0x1?_0x7c1581[_0x1a36f4(0x2eb)]('城市'):_0x7c1581['indexOf'](_0x1a36f4(0x3fc)),_0x2c6cba=_0x7c1581[_0x1a36f4(0x2eb)]('TLS');for(const _0x14b884 of _0x150168[_0x1a36f4(0x9e)](0x1)){if(_0x40dbdd[_0x1a36f4(0xea)]>=_0x4d6cb0)break;const _0xec8d56=_0x14b884[_0x1a36f4(0x382)](',')[_0x1a36f4(0xac)](_0x4a15a3=>_0x4a15a3[_0x1a36f4(0x1e6)]());if(_0x2c6cba!==-0x1&&_0xec8d56[_0x2c6cba]&&_0xec8d56[_0x2c6cba][_0x1a36f4(0x195)]()!=='true')continue;const _0x235bec=_0xec8d56[_0x1eccb4]||'',_0x289741=_0x235bec[_0x1a36f4(0x1e4)](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!_0x289741)continue;const _0x47bbf0=_0x289741[0x1]['replace'](/^\[|\]$/g,''),_0x189650=_0xde2222!==-0x1&&_0xec8d56[_0xde2222]?parseInt(_0xec8d56[_0xde2222]):0x1bb,_0x5e5a5f=_0x47bbf0+':'+_0x189650;if(_0x1dee78[_0x1a36f4(0xf2)](_0x5e5a5f))continue;if(!_0x1d3446(_0x47bbf0))continue;_0x1dee78['add'](_0x5e5a5f);let _0x1e4599=_0x34cfe5!==-0x1&&_0xec8d56[_0x34cfe5]?_0xec8d56[_0x34cfe5]:'';if(!_0x1e4599&&_0x338dde!==-0x1&&_0x4bcb2a!==-0x1)_0x1e4599=_0x1a36f4(0x30d)+(_0xec8d56[_0x338dde]||'')+_0x1a36f4(0x114)+(_0xec8d56[_0x4bcb2a]||'')+_0x1a36f4(0x371);if(_0x1e4599)_0x45ceb8[_0x1e4599]=(_0x45ceb8[_0x1e4599]||0x0)+0x1,_0x40dbdd[_0x1a36f4(0x147)]({'ip':_0x47bbf0,'port':_0x189650,'name':_0x1e4599+'-'+String(_0x45ceb8[_0x1e4599])[_0x1a36f4(0x14d)](0x2,'0'),..._0x15f5e0?{'relay':!![]}:{}});else _0x40dbdd[_0x1a36f4(0x147)]({'ip':_0x47bbf0,'port':_0x189650,'name':'',..._0x15f5e0?{'relay':!![]}:{}});}return DNH_CACHE[_0x1a36f4(0x402)](_0x8526ba,{'t':_0x12849d,'ips':_0x40dbdd}),_0x40dbdd[_0x1a36f4(0x9e)]();}}if(_0x384030['includes'](_0x1a36f4(0x2cc))&&_0x384030['includes']('data-label')){for(const _0x32165a of _0x384030['match'](/<tr[\s\S]*?<\/tr>/g)||[]){if(_0x40dbdd[_0x1a36f4(0xea)]>=_0x4d6cb0)break;const _0x578c5f={};for(const _0x4440ae of _0x32165a[_0x1a36f4(0x1e4)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const _0x1737eb=_0x4440ae[_0x1a36f4(0x1e4)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);if(_0x1737eb)_0x578c5f[_0x1737eb[0x1]]=_0x1737eb[0x2]['replace'](/<[^>]+>/g,'')[_0x1a36f4(0x1e6)]();}const _0x44a162=(_0x578c5f[_0x1a36f4(0x2e6)]||'')['match'](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!_0x44a162)continue;const _0xc20c35=_0x44a162[0x1],_0x3b96e4=_0x44a162[0x2]?parseInt(_0x44a162[0x2]):0x1bb,_0x2749ce=_0xc20c35+':'+_0x3b96e4;if(_0x1dee78[_0x1a36f4(0xf2)](_0x2749ce))continue;if(!_0x1d3446(_0xc20c35))continue;_0x1dee78[_0x1a36f4(0x2ca)](_0x2749ce);const _0x549444=(_0x578c5f[_0x1a36f4(0xd4)]||_0x578c5f['数据中心']||'线路')[_0x1a36f4(0x1e6)]();if(_0x549444)_0x45ceb8[_0x549444]=(_0x45ceb8[_0x549444]||0x0)+0x1,_0x40dbdd[_0x1a36f4(0x147)]({'ip':_0xc20c35,'port':_0x3b96e4,'name':_0x549444+'-'+String(_0x45ceb8[_0x549444])['padStart'](0x2,'0'),..._0x15f5e0?{'relay':!![]}:{}});else _0x40dbdd[_0x1a36f4(0x147)]({'ip':_0xc20c35,'port':_0x3b96e4,'name':'',..._0x15f5e0?{'relay':!![]}:{}});}return DNH_CACHE[_0x1a36f4(0x402)](_0x8526ba,{'t':_0x12849d,'ips':_0x40dbdd}),_0x40dbdd[_0x1a36f4(0x9e)]();}for(const _0x2be8c4 of _0x384030[_0x1a36f4(0x382)](/\r?\n/)){if(_0x40dbdd[_0x1a36f4(0xea)]>=_0x4d6cb0)break;const _0x184bcd=_0x2be8c4[_0x1a36f4(0x1e4)](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!_0x184bcd)continue;const _0x1ec1ac=_0x184bcd[0x1][_0x1a36f4(0x3a4)](/^\[|\]$/g,''),_0x5942cb=_0x184bcd[0x2]?parseInt(_0x184bcd[0x2]):0x1bb,_0x429fe7=_0x1ec1ac+':'+_0x5942cb;if(_0x1dee78['has'](_0x429fe7))continue;if(!_0x1d3446(_0x1ec1ac))continue;_0x1dee78[_0x1a36f4(0x2ca)](_0x429fe7);let _0x4be1a8='';const _0x24da8c=_0x2be8c4[_0x1a36f4(0x2eb)]('#');if(_0x24da8c>=0x0)try{_0x4be1a8=decodeURIComponent(_0x2be8c4[_0x1a36f4(0x9e)](_0x24da8c+0x1)[_0x1a36f4(0x1e6)]());}catch(_0x26b700){_0x4be1a8=_0x2be8c4[_0x1a36f4(0x9e)](_0x24da8c+0x1)[_0x1a36f4(0x1e6)]();}if(_0x4be1a8)_0x45ceb8[_0x4be1a8]=(_0x45ceb8[_0x4be1a8]||0x0)+0x1,_0x40dbdd[_0x1a36f4(0x147)]({'ip':_0x1ec1ac,'port':_0x5942cb,'name':_0x4be1a8+'-'+String(_0x45ceb8[_0x4be1a8])[_0x1a36f4(0x14d)](0x2,'0'),..._0x15f5e0?{'relay':!![]}:{}});else _0x40dbdd[_0x1a36f4(0x147)]({'ip':_0x1ec1ac,'port':_0x5942cb,'name':'',..._0x15f5e0?{'relay':!![]}:{}});}for(const _0x191bd4 of _0x384030['split'](/\r?\n/)){if(_0x40dbdd['length']>=_0x4d6cb0)break;const _0x4d319a=_0x191bd4[_0x1a36f4(0x1e4)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x4d319a)continue;const _0xb0ecff=_0x4d319a[0x1],_0x2c142a=_0x4d319a[0x2]?parseInt(_0x4d319a[0x2]):0x1bb,_0x4f048d=_0xb0ecff+':'+_0x2c142a;if(_0x1dee78[_0x1a36f4(0xf2)](_0x4f048d))continue;if(!_0x1d3446(_0xb0ecff))continue;_0x1dee78[_0x1a36f4(0x2ca)](_0x4f048d);const _0x237525=(_0x4d319a[0x3]||'')['trim']();if(_0x237525&&!/[\u4e00-\u9fa5]/[_0x1a36f4(0x122)](_0x237525)&&!_0x237525[_0x1a36f4(0x14e)]('|')){_0x40dbdd[_0x1a36f4(0x147)]({'ip':_0xb0ecff,'port':_0x2c142a,'name':_0x237525,..._0x15f5e0?{'relay':!![]}:{}});continue;}let _0x57349e='';if(_0x4d319a[0x3]){const _0x19b0ac=_0x4d319a[0x3]['match'](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x19b0ac){const _0x4c85e4=_0x19b0ac[0x0][_0x1a36f4(0x1e4)](/[\u4e00-\u9fa5]{2,5}/);if(_0x4c85e4)_0x57349e=_0x4c85e4[0x0];}else{const _0x4f29c1=_0x4d319a[0x3][_0x1a36f4(0x382)]('|')[_0x1a36f4(0xac)](_0xe0e146=>_0xe0e146[_0x1a36f4(0x1e6)]()),_0x4d1a9b=_0x4f29c1[_0x1a36f4(0x2bc)](_0x2d7130=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[_0x1a36f4(0x122)](_0x2d7130));if(_0x4d1a9b){const _0x5ce4d7=_0x4d1a9b[_0x1a36f4(0x1e4)](/[\u4e00-\u9fa5]{2,5}/);if(_0x5ce4d7)_0x57349e=_0x5ce4d7[0x0];}else{const _0x3197e6=_0x4f29c1[_0x1a36f4(0x2bc)](_0x5cd65e=>/^[\u4e00-\u9fa5]{2,5}$/[_0x1a36f4(0x122)](_0x5cd65e)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/[_0x1a36f4(0x122)](_0x5cd65e));if(_0x3197e6)_0x57349e=_0x3197e6;else{const _0x86d2df=_0x4d319a[0x3]['match'](/\b([A-Z]{2})\b/);if(_0x86d2df)_0x57349e=REGION_CN[_0x86d2df[0x1]]||_0x86d2df[0x1];}}}}if(_0x57349e)_0x45ceb8[_0x57349e]=(_0x45ceb8[_0x57349e]||0x0)+0x1,_0x40dbdd[_0x1a36f4(0x147)]({'ip':_0xb0ecff,'port':_0x2c142a,'name':_0x57349e+'-'+String(_0x45ceb8[_0x57349e])[_0x1a36f4(0x14d)](0x2,'0'),..._0x15f5e0?{'relay':!![]}:{}});else _0x40dbdd[_0x1a36f4(0x147)]({'ip':_0xb0ecff,'port':_0x2c142a,'name':'',..._0x15f5e0?{'relay':!![]}:{}});}if(!_0x40dbdd[_0x1a36f4(0xea)]&&_0x206653){const _0xa11e0b=(String(_0xaecd7f)[_0x1a36f4(0x1e4)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0xaecd7f)['replace'](/^https?:\/\//,'')[_0x1a36f4(0x382)]('.')[0x0];if(REGION_CN[_0xa11e0b]){const _0x47a98d=randomIPsFromCidrs(_0x704fe4?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x4d6cb0);_0x47a98d[_0x1a36f4(0x37f)]((_0x140f5d,_0x50f5e5)=>_0x40dbdd['push']({'ip':_0x140f5d,'port':0x1bb,'name':REGION_CN[_0xa11e0b]+'-'+String(_0x50f5e5+0x1)['padStart'](0x2,'0')}));}}return DNH_CACHE[_0x1a36f4(0x402)](_0x8526ba,{'t':_0x12849d,'ips':_0x40dbdd}),_0x40dbdd['slice']();}catch(_0x53f0c6){const _0x3527cd=DNH_CACHE[_0x1a36f4(0x1e3)](_0x8526ba);if(_0x3527cd&&_0x3527cd[_0x1a36f4(0x1de)]&&_0x3527cd['ips']['length'])return _0x3527cd[_0x1a36f4(0x1de)][_0x1a36f4(0x9e)](0x0,_0x4d6cb0);return[];}}if(!_0xaecd7f['includes'](_0x1a36f4(0x318))&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0xaecd7f)){const _0x21627c=_0xaecd7f[_0x1a36f4(0x1e4)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!_0x21627c)return[];const _0x44ada2=_0x21627c[0x1][_0x1a36f4(0x3a4)](/^\[|\]$/g,''),_0x48b775=_0x21627c[0x2]?parseInt(_0x21627c[0x2]):0x1bb,_0x4ea4f1=(_0x21627c[0x3]||'')[_0x1a36f4(0x1e6)](),_0x470841=isValidIp(_0x44ada2);if(!_0x470841&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x1a36f4(0x122)](_0x44ada2))return[];if(_0x5adc7a&&_0x470841&&!isCloudflareIP(_0x44ada2))return[];if(_0x4ea4f1)return[{'ip':_0x44ada2,'port':_0x48b775,'name':_0x4ea4f1}];if(_0x470841)return[{'ip':_0x44ada2,'port':_0x48b775,'name':''}];}const _0x44443c=DNH_CACHE[_0x1a36f4(0x1e3)](_0xaecd7f);if(_0x44443c&&_0x12849d-_0x44443c['t']<0xa*0x3c*0x3e8)return _0x44443c[_0x1a36f4(0x1de)]['slice'](0x0,_0x4d6cb0)['map']((_0x2d5e64,_0x203304)=>({'ip':_0x2d5e64,'port':0x1bb,'name':_0xaecd7f+'-'+(_0x203304+0x1)}));const _0x7900f4=await _0x513cae(_0xaecd7f,'A',0x1);let _0x263cfa=_0x5adc7a?_0x7900f4[_0x1a36f4(0x13b)](isCloudflareIP):_0x7900f4;if(_0x704fe4){const _0x2cbc2e=await _0x513cae(_0xaecd7f,_0x1a36f4(0x251),0x1c);_0x263cfa=[...new Set(_0x7900f4[_0x1a36f4(0x1bf)](_0x2cbc2e))][_0x1a36f4(0x13b)](_0x318220=>_0x5adc7a?isCloudflareIP(_0x318220):!![]);}_0x263cfa=_0x263cfa[_0x1a36f4(0x9e)](0x0,_0x4d6cb0);if(!_0x263cfa[_0x1a36f4(0xea)]){if(_0x44443c&&_0x44443c['ips']&&_0x44443c[_0x1a36f4(0x1de)][_0x1a36f4(0xea)])return _0x44443c['ips'][_0x1a36f4(0x9e)](0x0,_0x4d6cb0)[_0x1a36f4(0xac)]((_0x54e8c2,_0x1f0ffa)=>({'ip':_0x54e8c2,'port':0x1bb,'name':_0xaecd7f+'-'+(_0x1f0ffa+0x1)}));return[];}return DNH_CACHE[_0x1a36f4(0x402)](_0xaecd7f,{'t':_0x12849d,'ips':_0x263cfa}),_0x263cfa[_0x1a36f4(0xac)]((_0x5e540a,_0x34c86a)=>({'ip':_0x5e540a,'port':0x1bb,'name':_0xaecd7f+'-'+(_0x34c86a+0x1)}));})),_0x579e45=[];let _0x2df914=0x0;while(_0x2df914<_0x42a384){let _0x45e5f7=![];for(const _0x2cefde of _0x4b5217){if(_0x2df914>=_0x42a384)break;_0x2cefde[_0x4486b3(0xea)]&&(_0x579e45['push'](_0x2cefde[_0x4486b3(0x1ac)]()),_0x2df914++,_0x45e5f7=!![]);}if(!_0x45e5f7)break;}return _0x579e45;}async function buildNodes(_0x1cf195,_0xb50b03=0x320,_0x4359e9=null){const _0x140c89=_0x1dc4ca,_0x2e7e57=[],_0xffc6c9=new Set(),_0x3407b6=_0x1cf195[_0x140c89(0x2f8)]&&_0x1cf195[_0x140c89(0x2f8)][_0x140c89(0x1f1)]||'',_0x475e8b=_0x1cf195['filter']&&_0x1cf195['filter']['ipType']||[],_0x311fa2=_0x475e8b[_0x140c89(0x14e)](_0x140c89(0xc0)),_0x51a1d0=_0x475e8b[_0x140c89(0xea)]===0x1&&_0x475e8b[0x0]===_0x140c89(0xc0),_0x5c4f58=_0x51a1d0?OFFICIAL_V6_CIDRS:_0x311fa2?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x523812=_0x3407b6==='custom'&&!(_0x1cf195[_0x140c89(0x2f8)]&&_0x1cf195[_0x140c89(0x2f8)][_0x140c89(0x309)]),_0x3caf7e=(_0x31d5b5,_0x5681c1,_0x29665c,_0x18b4da)=>{const _0x2be3c9=_0x140c89;if(_0x2e7e57[_0x2be3c9(0xea)]>=_0xb50b03)return;if(isValidIp(_0x31d5b5)&&!isCloudflareIP(_0x31d5b5)&&!_0x523812&&!_0x18b4da)return;const _0x50d91f=_0x31d5b5+':'+_0x5681c1;if(_0xffc6c9[_0x2be3c9(0xf2)](_0x50d91f))return;_0xffc6c9[_0x2be3c9(0x2ca)](_0x50d91f);const _0x274f39=!HTTP_PORTS[_0x2be3c9(0xf2)](Number(_0x5681c1));if(_0x1cf195['tlsOnly']&&!_0x274f39)return;const _0x5c520f=_0x274f39?TLS_PORTS[Math[_0x2be3c9(0x170)](Math[_0x2be3c9(0x33b)]()*TLS_PORTS[_0x2be3c9(0xea)])]:Number(_0x5681c1);if(_0x1cf195['enableVless'])_0x2e7e57[_0x2be3c9(0x147)](vlessNode(_0x1cf195,_0x31d5b5,_0x5c520f,_0x29665c));if(_0x1cf195[_0x2be3c9(0x119)])_0x2e7e57[_0x2be3c9(0x147)](trojanNode(_0x1cf195,_0x31d5b5,_0x274f39?_0x5c520f:Number(_0x5681c1),_0x29665c));if(_0x1cf195[_0x2be3c9(0x23f)]&&_0x274f39)_0x2e7e57['push'](vlessNode(_0x1cf195,_0x31d5b5,_0x5c520f,_0x29665c,{'type':'xhttp'}));},_0x3d9516=(_0x466b93,_0x2e0cb3,_0x1c0ae0,_0x553d0b)=>{const _0x5e21a8=_0x140c89,_0x1de1c6=Number(_0x2e0cb3)||0x1bb;_0x3caf7e(_0x466b93,_0x1de1c6,_0x1c0ae0,_0x553d0b);if(_0x1cf195[_0x5e21a8(0x1c0)])return;if(HTTP_PORTS['has'](_0x1de1c6))return;const _0xd79a34=HTTP_PORTS_LIST[hashStr(String(_0x466b93))%HTTP_PORTS_LIST[_0x5e21a8(0xea)]];_0x3caf7e(_0x466b93,_0xd79a34,_0x1c0ae0+'-'+_0xd79a34,_0x553d0b);};if(_0x3407b6===_0x140c89(0x33b)){let _0x101147=Math[_0x140c89(0x33a)](Math[_0x140c89(0x1aa)](parseInt(_0x1cf195['optimizer'][_0x140c89(0x3e7)])||0x10,0x1),Math[_0x140c89(0x33a)](0x63,_0xb50b03));if(_0x1cf195[_0x140c89(0x157)]){const _0x532c21=parseInt(_0x1cf195[_0x140c89(0x305)])||0x0;if(_0x532c21>0x0)_0x101147=Math[_0x140c89(0x33a)](Math[_0x140c89(0x1aa)](_0x101147,_0x532c21),_0xb50b03);}const _0x26ce07=(_0x1cf195[_0x140c89(0x325)]?0x1:0x0)+(_0x1cf195[_0x140c89(0x119)]?0x1:0x0)+(_0x1cf195[_0x140c89(0x23f)]?0x1:0x0)||0x1;let _0x297009=0x0;const _0x408c0b=randomIPsFromCidrs(_0x5c4f58,Math['ceil'](_0x101147/_0x26ce07)*0x3);let _0x1d4bfe=_0x408c0b;if(_0x4359e9){const _0x376451=_0x408c0b[_0x140c89(0x13b)](_0x2958cf=>!_0x4359e9[_0x140c89(0xf2)](_0x2958cf)),_0x3e4081=_0x408c0b[_0x140c89(0x13b)](_0x3034ae=>_0x4359e9[_0x140c89(0xf2)](_0x3034ae));_0x1d4bfe=[..._0x376451,..._0x3e4081];}for(const _0x3d6b94 of _0x1d4bfe){if(_0x297009>=_0x101147)break;const _0x522e71=HTTP_PORTS_LIST[hashStr(String(_0x3d6b94))%HTTP_PORTS_LIST[_0x140c89(0xea)]],_0x5e408c=TLS_PORTS[Math[_0x140c89(0x170)](Math['random']()*TLS_PORTS[_0x140c89(0xea)])];_0x1cf195[_0x140c89(0x325)]&&(_0x2e7e57['push'](vlessNode(_0x1cf195,_0x3d6b94,_0x5e408c,_0x140c89(0x234)+String(_0x297009+0x1)[_0x140c89(0x14d)](0x2,'0'))),_0x297009++);if(_0x297009>=_0x101147)break;_0x1cf195[_0x140c89(0x325)]&&!_0x1cf195[_0x140c89(0x1c0)]&&(_0x2e7e57['push'](vlessNode(_0x1cf195,_0x3d6b94,_0x522e71,'优选IP-'+String(_0x297009+0x1)[_0x140c89(0x14d)](0x2,'0')+'-'+_0x522e71)),_0x297009++);if(_0x297009>=_0x101147)break;_0x1cf195[_0x140c89(0x119)]&&(_0x2e7e57[_0x140c89(0x147)](trojanNode(_0x1cf195,_0x3d6b94,_0x5e408c,'优选IP-'+String(_0x297009+0x1)[_0x140c89(0x14d)](0x2,'0'))),_0x297009++);if(_0x297009>=_0x101147)break;_0x1cf195[_0x140c89(0x119)]&&!_0x1cf195[_0x140c89(0x1c0)]&&(_0x2e7e57[_0x140c89(0x147)](trojanNode(_0x1cf195,_0x3d6b94,_0x522e71,_0x140c89(0x234)+String(_0x297009+0x1)['padStart'](0x2,'0')+'-'+_0x522e71)),_0x297009++);if(_0x297009>=_0x101147)break;_0x1cf195[_0x140c89(0x23f)]&&(_0x2e7e57['push'](vlessNode(_0x1cf195,_0x3d6b94,_0x5e408c,_0x140c89(0x234)+String(_0x297009+0x1)[_0x140c89(0x14d)](0x2,'0'),{'type':_0x140c89(0x2e9)})),_0x297009++);}return _0x2e7e57;}const _0x147b41=String(_0x1cf195[_0x140c89(0x363)]||'')[_0x140c89(0x382)](/[\n,;]+/)[_0x140c89(0xac)](_0x33d2cd=>_0x33d2cd['trim']())['filter'](_0x143b1a=>_0x143b1a&&!_0x143b1a['includes']('://'));_0x147b41[_0x140c89(0x37f)]((_0x20dc73,_0x205806)=>{const _0x5c68c7=_0x140c89,_0x199f9d=_0x20dc73[_0x5c68c7(0x2eb)]('#'),_0x5f60cf=(_0x199f9d>=0x0?_0x20dc73[_0x5c68c7(0x9e)](0x0,_0x199f9d):_0x20dc73)[_0x5c68c7(0x1e6)](),_0x5266f5=(_0x199f9d>=0x0?_0x20dc73['slice'](_0x199f9d+0x1):'')[_0x5c68c7(0x1e6)](),_0x488530=parseHostPort(_0x5f60cf,0x1bb);if(_0x488530[_0x5c68c7(0xa9)][_0x5c68c7(0x1cd)]('*.'))return;_0x3d9516(_0x488530['host'],_0x488530[_0x5c68c7(0x16a)],_0x5266f5||_0x5c68c7(0x234)+String(_0x205806+0x1)[_0x5c68c7(0x14d)](0x2,'0'));});let _0x1f70f0=_0x1cf195['preferredIPs']||[];if(_0x311fa2&&!_0x51a1d0&&_0x1f70f0[_0x140c89(0xea)]>0x1){const _0x2d925c=[],_0x2dae12=[];for(const _0x207317 of _0x1f70f0)(String(_0x207317['ip'])[_0x140c89(0x2eb)](':')>=0x0?_0x2dae12:_0x2d925c)[_0x140c89(0x147)](_0x207317);const _0x550cda=[],_0x48a45f=Math[_0x140c89(0x1aa)](_0x2d925c[_0x140c89(0xea)],_0x2dae12[_0x140c89(0xea)]);for(let _0x39ed94=0x0;_0x39ed94<_0x48a45f;_0x39ed94++){if(_0x39ed94<_0x2d925c[_0x140c89(0xea)])_0x550cda[_0x140c89(0x147)](_0x2d925c[_0x39ed94]);if(_0x39ed94<_0x2dae12[_0x140c89(0xea)])_0x550cda[_0x140c89(0x147)](_0x2dae12[_0x39ed94]);}_0x1f70f0=_0x550cda;}_0x1f70f0[_0x140c89(0x37f)]((_0xba5fdb,_0xb72d7d)=>{const _0x4d9429=_0x140c89;_0x3d9516(_0xba5fdb['ip'],_0xba5fdb[_0x4d9429(0x16a)]||0x1bb,_0xba5fdb[_0x4d9429(0x22c)]||'优选IP-'+String(_0xb72d7d+0x1)[_0x4d9429(0x14d)](0x2,'0'),_0xba5fdb[_0x4d9429(0x3ab)]===!![]);});if(_0x3407b6===_0x140c89(0x316)&&!(_0x1cf195[_0x140c89(0x2f8)]&&_0x1cf195[_0x140c89(0x2f8)][_0x140c89(0x309)]))return _0x2e7e57;!_0x147b41[_0x140c89(0xea)]&&!(_0x1cf195['preferredIPs']||[])[_0x140c89(0xea)]&&(parseIPList(BUILTIN_PREFERRED_IPS[_0x140c89(0x97)]('\x0a'))[_0x140c89(0x37f)](_0x1ee73f=>_0x3d9516(_0x1ee73f['ip'],_0x1ee73f['port']||0x1bb,_0x1ee73f[_0x140c89(0x22c)]||'0')),BUILTIN_OFFICIAL_DOMAINS[_0x140c89(0x37f)]((_0x147739,_0x27490f)=>_0x3d9516(_0x147739,0x1bb,_0x140c89(0x400)+String(_0x27490f+0x1)[_0x140c89(0x14d)](0x2,'0'))));const _0x160b1a=Math[_0x140c89(0x33a)](Math[_0x140c89(0x1aa)](parseInt(_0x1cf195['optimizer']&&_0x1cf195[_0x140c89(0x2f8)][_0x140c89(0x188)]||0x0)||0x0,0x0),0x1388),_0x573a64=Math[_0x140c89(0x33a)](_0x160b1a,_0xb50b03)-_0xffc6c9['size'];if(_0x573a64>0x0){const _0x55c95d=_0x4359e9?BUILTIN_STABLE_IPS[_0x140c89(0x13b)](_0x36a382=>!_0x4359e9[_0x140c89(0xf2)](_0x36a382)):BUILTIN_STABLE_IPS[_0x140c89(0x9e)](),_0x129825=randomIPsFromCidrs(_0x5c4f58,_0x573a64*0x3),_0x385b7c=_0x4359e9?_0x129825[_0x140c89(0x13b)](_0x569747=>!_0x4359e9[_0x140c89(0xf2)](_0x569747)):_0x129825;let _0x4540ca=[..._0x55c95d,..._0x385b7c];if(_0x4540ca[_0x140c89(0xea)]<_0x573a64)_0x4540ca=[...BUILTIN_STABLE_IPS,..._0x129825];if(_0x4540ca[_0x140c89(0xea)]>0x0){const _0x52d898=Math[_0x140c89(0x33a)](_0x4540ca[_0x140c89(0xea)],Math[_0x140c89(0x1aa)](_0x573a64,0x14),0x3c),_0x15d8a4=_0x4540ca[_0x140c89(0x9e)](0x0,_0x52d898)[_0x140c89(0xac)](_0x43198a=>testProxyAlive(_0x43198a,0x1bb,0x5dc)[_0x140c89(0x11c)](_0xae20e7=>({'ip':_0x43198a,'ok':_0xae20e7}))),_0x40bd33=await Promise[_0x140c89(0x3e6)](_0x15d8a4),_0x100951=_0x40bd33[_0x140c89(0x13b)](_0x74a45b=>_0x74a45b['ok'])[_0x140c89(0xac)](_0xdd5aa1=>_0xdd5aa1['ip']),_0x4bcb22=_0x4540ca[_0x140c89(0x9e)](_0x52d898);_0x4540ca=[..._0x100951,..._0x4bcb22]['slice'](0x0,_0x573a64);}let _0xba1e0b=0x0;for(const _0xbec1fe of _0x4540ca){if(_0x2e7e57[_0x140c89(0xea)]>=_0xb50b03)break;_0xba1e0b++,_0x3d9516(_0xbec1fe,0x1bb,_0x140c89(0x234)+String(_0xba1e0b)['padStart'](0x3,'0'));}}return _0x2e7e57;}function parseNodeServer(_0xa857fd){const _0x5d4c26=_0x1dc4ca,_0x71011e=_0xa857fd[_0x5d4c26(0x2eb)]('@'),_0x5bf93a=_0xa857fd['indexOf']('?',_0x71011e),_0x3b355d=_0x5bf93a>_0x71011e&&_0x71011e>=0x0?_0xa857fd[_0x5d4c26(0x9e)](_0x71011e+0x1,_0x5bf93a):_0xa857fd['slice'](_0x71011e+0x1);if(_0x3b355d[_0x5d4c26(0x1cd)]('[')){const _0x4ce4cc=_0x3b355d[_0x5d4c26(0x2eb)](']'),_0x113c5e=_0x4ce4cc>0x0?_0x3b355d[_0x5d4c26(0x9e)](0x1,_0x4ce4cc):_0x3b355d,_0x4f6c84=_0x3b355d[_0x5d4c26(0x9e)](_0x4ce4cc+0x1),_0x54f064=_0x4f6c84['startsWith'](':')?parseInt(_0x4f6c84[_0x5d4c26(0x9e)](0x1)):0x1bb;return{'host':_0x113c5e,'port':isNaN(_0x54f064)?0x1bb:_0x54f064};}const _0x47ed4f=_0x3b355d[_0x5d4c26(0x38f)](':');if(_0x47ed4f>0x0){const _0x52a152=parseInt(_0x3b355d[_0x5d4c26(0x9e)](_0x47ed4f+0x1));return{'host':_0x3b355d[_0x5d4c26(0x9e)](0x0,_0x47ed4f),'port':isNaN(_0x52a152)?0x1bb:_0x52a152};}return{'host':_0x3b355d,'port':0x1bb};}function getParam(_0x39a3a6,_0x14583b){const _0x10d269=_0x1dc4ca,_0x4062b1=_0x39a3a6['indexOf']('?');if(_0x4062b1<0x0)return null;const _0x442574=_0x39a3a6['indexOf']('#',_0x4062b1),_0x40d20c=_0x442574>_0x4062b1?_0x39a3a6[_0x10d269(0x9e)](_0x4062b1+0x1,_0x442574):_0x39a3a6[_0x10d269(0x9e)](_0x4062b1+0x1);for(const _0x224545 of _0x40d20c[_0x10d269(0x382)]('&')){const _0x102019=_0x224545[_0x10d269(0x2eb)]('='),_0x35c009=_0x102019>0x0?_0x224545[_0x10d269(0x9e)](0x0,_0x102019):_0x224545;if(_0x35c009===_0x14583b)return _0x102019>0x0?decodeURIComponent(_0x224545[_0x10d269(0x9e)](_0x102019+0x1)):'';}return null;}function parseShareNode(_0x56feea,_0x524b5b){const _0x38d75b=_0x1dc4ca,{host:_0x6cae9,port:_0x3dd108}=parseNodeServer(_0x56feea),_0x5e9b38=_0x6cae9,_0x116fe7=_0x56feea['indexOf']('#');let _0x38526a='节点'+(_0x524b5b+0x1);if(_0x116fe7>=0x0)try{_0x38526a=decodeURIComponent(_0x56feea[_0x38d75b(0x9e)](_0x116fe7+0x1))||_0x38526a;}catch(_0x22a746){}const _0x4b3660=_0x56feea[_0x38d75b(0x2eb)]('@');let _0x53d4ca='';if(_0x4b3660>=0x0){const _0x22e0fe=_0x56feea[_0x38d75b(0x2eb)](_0x38d75b(0x318)),_0xcd44f2=_0x22e0fe>=0x0?_0x22e0fe+0x3:0x0;try{_0x53d4ca=decodeURIComponent(_0x56feea[_0x38d75b(0x9e)](_0xcd44f2,_0x4b3660));}catch(_0x2bedfb){_0x53d4ca=_0x56feea['slice'](_0xcd44f2,_0x4b3660);}}const _0x506802=_0x56feea[_0x38d75b(0x1cd)](_0x38d75b(0x31b)),_0x238c37=_0x506802||(getParam(_0x56feea,_0x38d75b(0x2da))||'tls')==='tls';return{'srv':_0x5e9b38,'prt':_0x3dd108,'name':_0x38526a,'user':_0x53d4ca,'isTrojan':_0x506802,'tls':_0x238c37};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG',_0x1dc4ca(0x3fd)],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x1dc4ca(0x238)],'联通':['联通','CU',_0x1dc4ca(0x330)],'电信':['电信','CT',_0x1dc4ca(0x1b7)]},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=['IPv4',_0x1dc4ca(0xc0)];function filterNodes(_0x3b258e,_0x3e4d8b){const _0x537da6=_0x1dc4ca;if(!_0x3e4d8b||!_0x3e4d8b[_0x537da6(0x351)]&&!_0x3e4d8b[_0x537da6(0x1f2)]&&!_0x3e4d8b[_0x537da6(0x37c)])return _0x3b258e;const _0x389e9f=_0x3e4d8b[_0x537da6(0x351)]||_0x537da6(0x3e6),_0x3c3732=_0x3e4d8b[_0x537da6(0x1f2)]||FILTER_IPTYPES,_0x51ba29=_0x3e4d8b[_0x537da6(0x37c)]||FILTER_ISPS,_0x2e87be=_0x3b258e['map'](_0x5a1221=>{const _0x54716a=_0x537da6,{host:_0x18b78e}=parseNodeServer(_0x5a1221);let _0x18ff4f='';try{const _0x46ba2c=_0x5a1221[_0x54716a(0x2eb)]('#');if(_0x46ba2c>=0x0)_0x18ff4f=decodeURIComponent(_0x5a1221['slice'](_0x46ba2c+0x1)||'');}catch(_0x9b4fed){_0x18ff4f='';}return{'host':_0x18b78e,'name':_0x18ff4f,'up':_0x18ff4f[_0x54716a(0x3e0)]()};}),_0x2b00bf=_0x2e87be[_0x537da6(0x376)](_0x8d2c1b=>_0x8d2c1b['up']&&Object['keys'](ISP_TAGS)[_0x537da6(0x376)](_0x548cb5=>(ISP_TAGS[_0x548cb5]||[_0x548cb5])['some'](_0x110bc9=>_0x8d2c1b['up']['includes'](_0x110bc9['toUpperCase']())))),_0x16fcfc=(_0x5b6b4b,_0x2aabae,_0x1b041b)=>{const _0x2d5f76=_0x537da6,_0x4cf891=Array['isArray'](_0x5b6b4b)?_0x5b6b4b[_0x2d5f76(0xea)]===0x0||_0x5b6b4b[_0x2d5f76(0x14e)](_0x2d5f76(0x3e6))?null:_0x5b6b4b[_0x2d5f76(0x18e)](_0x30ff3a=>REGION_TAGS[_0x30ff3a]||[]):_0x5b6b4b!==_0x2d5f76(0x3e6)?REGION_TAGS[_0x5b6b4b]||[]:null,_0x2642cb=_0x1b041b[_0x2d5f76(0xea)]>0x0&&_0x1b041b[_0x2d5f76(0xea)]<FILTER_ISPS[_0x2d5f76(0xea)];return _0x3b258e[_0x2d5f76(0x13b)]((_0x59a86b,_0x524fff)=>{const _0x3a5ed6=_0x2d5f76,_0x145751=_0x2e87be[_0x524fff],_0x1a3c13=_0x145751['host'][_0x3a5ed6(0x2eb)](':')>=0x0;if(!_0x145751[_0x3a5ed6(0x22c)])return![];if(_0x4cf891&&!_0x4cf891[_0x3a5ed6(0x376)](_0x18ad76=>_0x145751['up'][_0x3a5ed6(0x14e)](_0x18ad76['toUpperCase']()))){if(!/^(优选IP|域名)-\d+/[_0x3a5ed6(0x122)](_0x145751['name'])&&_0x145751[_0x3a5ed6(0x22c)]!==_0x3a5ed6(0x36c))return![];}if(_0x2aabae[_0x3a5ed6(0xea)]===0x1){if(_0x2aabae[0x0]===_0x3a5ed6(0x11e)&&_0x1a3c13)return![];if(_0x2aabae[0x0]===_0x3a5ed6(0xc0)&&!_0x1a3c13)return![];}if(_0x2642cb&&_0x2b00bf&&!_0x1b041b[_0x3a5ed6(0x376)](_0x717f01=>(ISP_TAGS[_0x717f01]||[_0x717f01])[_0x3a5ed6(0x376)](_0x5f19f3=>_0x145751['up'][_0x3a5ed6(0x14e)](_0x5f19f3[_0x3a5ed6(0x3e0)]()))))return![];return!![];});};let _0x4614a2=_0x16fcfc(_0x389e9f,_0x3c3732,_0x51ba29);if(!_0x4614a2[_0x537da6(0xea)])_0x4614a2=_0x16fcfc(_0x389e9f,_0x3c3732,FILTER_ISPS);if(!_0x4614a2[_0x537da6(0xea)])_0x4614a2=_0x16fcfc(_0x389e9f,FILTER_IPTYPES,FILTER_ISPS);if(!_0x4614a2[_0x537da6(0xea)])_0x4614a2=_0x16fcfc(_0x537da6(0x3e6),FILTER_IPTYPES,FILTER_ISPS);return _0x4614a2;}function yamlVal(_0x997fac){const _0x5d471f=_0x1dc4ca;if(typeof _0x997fac===_0x5d471f(0x2a8)||typeof _0x997fac===_0x5d471f(0x32d))return String(_0x997fac);const _0x5aa32d=String(_0x997fac);return/^[\w.\-/\u4e00-\u9fa5]+$/[_0x5d471f(0x122)](_0x5aa32d)?_0x5aa32d:JSON[_0x5d471f(0x249)](_0x5aa32d);}function clashProxyYaml(_0x55c703){const _0x396446=_0x1dc4ca,_0x4576b7=[];_0x4576b7[_0x396446(0x147)](_0x396446(0x225)+yamlVal(_0x55c703[_0x396446(0x22c)])),_0x4576b7[_0x396446(0x147)](_0x396446(0x34c)+_0x55c703[_0x396446(0x121)]),_0x4576b7[_0x396446(0x147)]('\x20\x20\x20\x20server:\x20'+yamlVal(_0x55c703[_0x396446(0x37d)])),_0x4576b7[_0x396446(0x147)](_0x396446(0x1ec)+_0x55c703['port']);if(_0x55c703[_0x396446(0x121)]===_0x396446(0x3b7))_0x4576b7[_0x396446(0x147)](_0x396446(0x2c1)+yamlVal(_0x55c703['uuid']));else _0x4576b7[_0x396446(0x147)](_0x396446(0x16f)+yamlVal(_0x55c703[_0x396446(0x389)]));_0x4576b7['push']('\x20\x20\x20\x20network:\x20'+_0x55c703[_0x396446(0x13e)]),_0x4576b7[_0x396446(0x147)](_0x396446(0x1e1));if(_0x55c703['tls']){_0x4576b7['push'](_0x396446(0x109)),_0x4576b7['push'](_0x396446(0x2bd)),_0x4576b7[_0x396446(0x147)](_0x55c703[_0x396446(0x13e)]==='xhttp'?_0x396446(0x93):'\x20\x20\x20\x20alpn:\x20[http/1.1]'),_0x4576b7[_0x396446(0x147)](_0x396446(0x401)+yamlVal(_0x55c703['servername']));if(_0x55c703[_0x396446(0x121)]===_0x396446(0x12b))_0x4576b7['push'](_0x396446(0x30b)+yamlVal(_0x55c703[_0x396446(0x2c7)]));_0x4576b7[_0x396446(0x147)]('\x20\x20\x20\x20client-fingerprint:\x20chrome'),_0x55c703[_0x396446(0x2c8)]&&(_0x4576b7['push']('\x20\x20\x20\x20ech-opts:'),_0x4576b7[_0x396446(0x147)](_0x396446(0x3b4)+yamlVal(_0x55c703[_0x396446(0x2c8)][_0x396446(0x1d6)])),_0x4576b7[_0x396446(0x147)](_0x396446(0x106)+yamlVal(_0x55c703[_0x396446(0x2c8)]['query-server-name'])));}if(_0x55c703['network']==='ws')_0x4576b7[_0x396446(0x147)](_0x396446(0x334)),_0x4576b7[_0x396446(0x147)](_0x396446(0x391)+yamlVal(_0x55c703['ws-opts']['path'])),_0x4576b7[_0x396446(0x147)](_0x396446(0x24e)),_0x4576b7[_0x396446(0x147)](_0x396446(0x25b)+yamlVal(_0x55c703[_0x396446(0x322)][_0x396446(0x10f)][_0x396446(0x154)]));else{if(_0x55c703[_0x396446(0x13e)]===_0x396446(0x2e9)){const _0x5b1a74=_0x55c703['xhttp-opts'];_0x4576b7[_0x396446(0x147)](_0x396446(0xc9)),_0x4576b7[_0x396446(0x147)](_0x396446(0x391)+yamlVal(_0x5b1a74[_0x396446(0x23e)])),_0x4576b7[_0x396446(0x147)]('\x20\x20\x20\x20\x20\x20mode:\x20'+yamlVal(_0x5b1a74[_0x396446(0x226)])),_0x4576b7['push']('\x20\x20\x20\x20\x20\x20host:\x20'+yamlVal(_0x5b1a74[_0x396446(0xa9)])),_0x4576b7['push'](_0x396446(0xca)+yamlVal(_0x5b1a74[_0x396446(0x387)])),_0x4576b7[_0x396446(0x147)](_0x396446(0x3d2)+yamlVal(_0x5b1a74['x-padding-method'])),_0x4576b7[_0x396446(0x147)](_0x396446(0x1a0)+yamlVal(_0x5b1a74[_0x396446(0x8b)])),_0x4576b7[_0x396446(0x147)](_0x396446(0x3f8)+yamlVal(_0x5b1a74[_0x396446(0x352)])),_0x4576b7[_0x396446(0x147)](_0x396446(0x35c)+yamlVal(_0x5b1a74['x-padding-key']));}}return _0x4576b7[_0x396446(0x97)]('\x0a');}function generateClash(_0x10a27b,_0x2a72db){const _0x50d0d4=_0x1dc4ca,_0x4e7036=_0x10a27b[_0x50d0d4(0xa9)],_0x522d9f='/'+_0x10a27b[_0x50d0d4(0x23e)],_0x2ffaad=new Set(),_0x5321a2=_0x2a72db['map'](_0x52f42c=>{const _0x39066d=_0x50d0d4,{user:_0x1ed6a4,srv:_0x451d31,prt:_0x4419f1,name:_0x2c88af,isTrojan:_0x18e5aa,tls:_0x3df77a}=parseShareNode(_0x52f42c,0x0);let _0xf2cba=_0x2c88af;const _0x1b04f1=getParam(_0x52f42c,_0x39066d(0x121))||'ws';if(_0x2ffaad[_0x39066d(0xf2)](_0xf2cba)){const _0x1db668=_0x18e5aa?'T':_0x1b04f1===_0x39066d(0x2e9)?'X':'W';let _0x58eb82=_0xf2cba+'·'+_0x1db668,_0x2f83bb=0x2;while(_0x2ffaad[_0x39066d(0xf2)](_0x58eb82)){_0x58eb82=_0xf2cba+'·'+_0x1db668+_0x2f83bb,_0x2f83bb++;}_0xf2cba=_0x58eb82;}_0x2ffaad[_0x39066d(0x2ca)](_0xf2cba);const _0x36df76={'name':_0xf2cba,'server':_0x451d31,'port':_0x4419f1,'udp':!![],..._0x3df77a?{'tls':!![],'skip-cert-verify':!![],'servername':_0x4e7036,'client-fingerprint':_0x39066d(0x287),'alpn':[_0x39066d(0x36d)]}:{},..._0x10a27b[_0x39066d(0x27d)]&&_0x3df77a?{'ech-opts':{'enable':!![],'query-server-name':_0x10a27b[_0x39066d(0x373)]||'cloudflare-ech.com'}}:{}};if(_0x18e5aa)return{..._0x36df76,'type':_0x39066d(0x12b),'password':_0x1ed6a4,'network':'ws','ws-opts':{'path':_0x522d9f,'headers':{'Host':_0x4e7036}}};if(_0x1b04f1===_0x39066d(0x2e9)){let _0x195781={};try{_0x195781=JSON[_0x39066d(0x18f)](getParam(_0x52f42c,'extra')||'{}');}catch(_0xdd5b70){}return{..._0x36df76,'type':_0x39066d(0x3b7),'uuid':_0x1ed6a4,'network':_0x39066d(0x2e9),'alpn':['h2'],'xhttp-opts':{'path':_0x522d9f,'mode':'stream-one','host':_0x4e7036,'x-padding-obfs-mode':_0x195781['xPaddingObfsMode']!==undefined?_0x195781[_0x39066d(0x2c6)]:!![],'x-padding-method':_0x195781['xPaddingMethod']||'tokenish','x-padding-placement':_0x195781[_0x39066d(0x1a2)]||'queryInHeader','x-padding-header':_0x195781['xPaddingHeader']||'','x-padding-key':_0x195781['xPaddingKey']||''}};}return{..._0x36df76,'type':_0x39066d(0x3b7),'uuid':_0x1ed6a4,'network':'ws','ws-opts':{'path':_0x522d9f,'headers':{'Host':_0x4e7036}}};});_0x5321a2['sort']((_0x2a609e,_0x54d8aa)=>(_0x2a609e[_0x50d0d4(0x16a)]===0x1bb?0x0:0x1)-(_0x54d8aa[_0x50d0d4(0x16a)]===0x1bb?0x0:0x1));const _0x50c003=_0x50d0d4(0x34e)+_0x5321a2[_0x50d0d4(0xac)](_0x374a09=>clashProxyYaml(_0x374a09))[_0x50d0d4(0x97)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x50c003;}function generateSurfboard(_0x2d1314,_0x4fb6cf){const _0x41fd41=_0x1dc4ca,_0x1bae56=_0x2d1314['host'],_0x46ecfd='/'+_0x2d1314[_0x41fd41(0x23e)],_0x19ac10=[];for(const _0xb9e16 of _0x4fb6cf){if(_0xb9e16[_0x41fd41(0x1cd)](_0x41fd41(0x31b))&&_0xb9e16['indexOf']('security=none')<0x0)_0x19ac10[_0x41fd41(0x147)](_0xb9e16);else{if(_0xb9e16[_0x41fd41(0x1cd)](_0x41fd41(0x8e))&&_0xb9e16[_0x41fd41(0x2eb)](_0x41fd41(0x3c5))<0x0&&_0xb9e16[_0x41fd41(0x2eb)](_0x41fd41(0xb1))<0x0)_0x19ac10[_0x41fd41(0x147)](_0xb9e16[_0x41fd41(0x3a4)](/^vless:\/\//,_0x41fd41(0x31b))[_0x41fd41(0x3a4)](_0x41fd41(0x164),''));}}const _0x487cb9=_0x19ac10[_0x41fd41(0xac)]((_0x46ed19,_0x3bfc11)=>{const _0x504a10=_0x41fd41,{user:_0x4ef1f8,srv:_0x4e72b8,prt:_0x5d7f5b,name:_0x47f790}=parseShareNode(_0x46ed19,_0x3bfc11);return _0x47f790+_0x504a10(0x11f)+_0x4e72b8+',\x20'+_0x5d7f5b+_0x504a10(0xa2)+_0x4ef1f8+',\x20ws=true,\x20ws-path='+_0x46ecfd+',\x20ws-headers=Host:'+_0x1bae56+_0x504a10(0x235)+_0x1bae56;});return _0x41fd41(0x383)+_0x487cb9[_0x41fd41(0x97)]('\x0a')+_0x41fd41(0xf6)+_0x487cb9[_0x41fd41(0xac)](_0x56f29a=>_0x56f29a[_0x41fd41(0x382)](_0x41fd41(0xee))[0x0])[_0x41fd41(0x97)](',\x20')+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a';}function generateSingbox(_0x4b2458,_0x54dea1){const _0x55ff17=_0x1dc4ca,_0x3ebbba=_0x4b2458[_0x55ff17(0xa9)],_0x1df38d='/'+_0x4b2458[_0x55ff17(0x23e)],_0x65a83e=_0x54dea1[_0x55ff17(0xac)]((_0x479f9d,_0x3edb21)=>{const _0x54566f=_0x55ff17,{user:_0x1f84b0,srv:_0x19bf9f,prt:_0xd0653a,name:_0x5260e6,isTrojan:_0x4359b3,tls:_0x33aa2d}=parseShareNode(_0x479f9d,_0x3edb21),_0x11401=getParam(_0x479f9d,_0x54566f(0x121))||'ws',_0x3b5eab=_0x33aa2d?_0x11401===_0x54566f(0x2e9)?{'enabled':!![],'server_name':_0x3ebbba,'insecure':!![],'alpn':['h2']}:{'enabled':!![],'server_name':_0x3ebbba,'insecure':!![],'alpn':[_0x54566f(0x36d)],'utls':{'enabled':!![],'fingerprint':_0x54566f(0x287)}}:{'enabled':![]},_0x3cc216=_0x11401===_0x54566f(0x2e9)?{'type':'xhttp','mode':'stream-one','path':_0x1df38d}:_0x33aa2d?{'type':'ws','path':_0x1df38d,'headers':{'Host':_0x3ebbba},'max_early_data':0x800,'early_data_header_name':_0x54566f(0x1a3)}:{'type':'ws','path':_0x1df38d,'headers':{'Host':_0x3ebbba}};if(_0x4359b3)return{'type':_0x54566f(0x12b),'tag':_0x5260e6,'server':_0x19bf9f,'server_port':_0xd0653a,'password':_0x1f84b0,'tls':_0x3b5eab,'transport':_0x3cc216};return{'type':_0x54566f(0x3b7),'tag':_0x5260e6,'server':_0x19bf9f,'server_port':_0xd0653a,'uuid':_0x1f84b0,'packet_encoding':_0x54566f(0xed),'tls':_0x3b5eab,'transport':_0x3cc216};}),_0x209b9d=_0x65a83e[_0x55ff17(0xac)](_0x35c62b=>_0x35c62b['tag']),_0xbf32d0=[[_0x55ff17(0x27b),_0x55ff17(0xe0)],['geosite-google',_0x55ff17(0x3c2)],['geosite-apple','🍎\x20苹果服务'],[_0x55ff17(0x206),_0x55ff17(0x236)],[_0x55ff17(0x185),'🤖\x20OpenAI'],[_0x55ff17(0x19f),_0x55ff17(0x126)],['geosite-youtube',_0x55ff17(0x126)],[_0x55ff17(0x3c6),_0x55ff17(0x126)],['geosite-disney',_0x55ff17(0x126)],[_0x55ff17(0x25e),_0x55ff17(0x126)],['geosite-telegram',_0x55ff17(0x126)],[_0x55ff17(0x3fb),'🌍\x20国外媒体'],[_0x55ff17(0x2f0),'block']],_0xdb3fc4={'log':{'level':_0x55ff17(0x29a)},'dns':{'servers':[{'tag':_0x55ff17(0x2dd),'address':_0x55ff17(0x1c3)},{'tag':'dns-direct','address':_0x55ff17(0x31f)}],'strategy':'ipv4_only','independent_cache':!![],'fakeip':{'enabled':!![],'inet4_range':_0x55ff17(0x1b1),'store_fakeip':!![]}},'inbounds':[{'type':_0x55ff17(0x347),'tag':'mixed-in','listen':_0x55ff17(0x194),'listen_port':0x820,'sniff':!![],'sniff_override_destination':!![]},{'type':_0x55ff17(0x115),'tag':_0x55ff17(0x1b8),'interface_name':_0x55ff17(0x192),'inet4_address':[_0x55ff17(0x172)],'mtu':0x2328,'auto_route':!![],'strict_route':!![],'stack':'mixed','sniff':!![],'sniff_override_destination':!![]}],'outbounds':[..._0x65a83e,{'type':'direct','tag':_0x55ff17(0x220)},{'type':'block','tag':'block'},{'type':_0x55ff17(0x156),'tag':_0x55ff17(0x20a)},{'type':_0x55ff17(0xf0),'tag':_0x55ff17(0x2fe),'outbounds':_0x209b9d},{'type':'selector','tag':'🎯\x20全球直连','outbounds':[_0x55ff17(0x220)]},{'type':_0x55ff17(0xf0),'tag':_0x55ff17(0x181),'outbounds':[_0x55ff17(0x2fe),_0x55ff17(0xe0)]},{'type':'selector','tag':'🌍\x20国外媒体','outbounds':[_0x55ff17(0x2fe)]},{'type':'selector','tag':_0x55ff17(0x3c2),'outbounds':[_0x55ff17(0x2fe)]},{'type':'selector','tag':'🤖\x20OpenAI','outbounds':['🚀\x20节点选择']},{'type':'selector','tag':_0x55ff17(0x298),'outbounds':['🎯\x20全球直连']},{'type':_0x55ff17(0xf0),'tag':_0x55ff17(0x236),'outbounds':[_0x55ff17(0xe0)]}],'route':{'rules':[{'protocol':_0x55ff17(0x156),'outbound':_0x55ff17(0x20a)},{'ip_is_private':!![],'outbound':_0x55ff17(0x220)},..._0xbf32d0['map'](([_0x105fdd,_0x46fa0a])=>({'rule_set':[_0x105fdd],'outbound':_0x46fa0a})),{'ip_is_private':!![],'outbound':_0x55ff17(0x19b)}],'rule_set':_0xbf32d0[_0x55ff17(0xac)](([_0x5d6b67])=>({'type':_0x55ff17(0x141),'tag':_0x5d6b67,'format':'source','url':_0x55ff17(0x289)+_0x5d6b67+_0x55ff17(0x227)})),'final':'🐟\x20漏网之鱼','auto_detect_interface':!![],'default_domain_resolver':{'server':'dns-remote'}},'experimental':{'clash_api':{'external_controller':_0x55ff17(0x211)}}};return JSON['stringify'](_0xdb3fc4,null,0x2);}function generateSurge(_0x234899,_0xc77801){const _0xeab4e2=_0x1dc4ca,_0x77e22d=_0x234899[_0xeab4e2(0xa9)],_0x58b718='/'+_0x234899[_0xeab4e2(0x23e)],_0x53383b=_0xc77801[_0xeab4e2(0xac)]((_0x56d706,_0x2fc518)=>{const _0x2aeee0=_0xeab4e2,{user:_0x461366,srv:_0x3ee0f2,prt:_0x32e3bc,name:_0x1c087f,isTrojan:_0x4c13cf,tls:_0x20f26c}=parseShareNode(_0x56d706,_0x2fc518),_0x2d2d53=_0x20f26c?_0x2aeee0(0x235)+_0x77e22d:_0x2aeee0(0xa7);return _0x4c13cf?_0x1c087f+_0x2aeee0(0x11f)+_0x3ee0f2+',\x20'+_0x32e3bc+_0x2aeee0(0xa2)+_0x461366+_0x2aeee0(0x291)+_0x58b718+_0x2aeee0(0x39b)+_0x77e22d+_0x2d2d53:_0x1c087f+_0x2aeee0(0x1fe)+_0x3ee0f2+',\x20'+_0x32e3bc+',\x20username='+_0x461366+',\x20ws=true,\x20ws-path='+_0x58b718+_0x2aeee0(0x39b)+_0x77e22d+_0x2d2d53;});return _0xeab4e2(0x383)+_0x53383b[_0xeab4e2(0x97)]('\x0a')+_0xeab4e2(0xf6)+_0x53383b[_0xeab4e2(0xac)](_0x3f9cb9=>_0x3f9cb9[_0xeab4e2(0x382)](_0xeab4e2(0xee))[0x0])[_0xeab4e2(0x97)](',\x20')+_0xeab4e2(0x204);}function generateLoon(_0x435f5b,_0x1dc314){const _0x43fb4c=_0x1dc4ca,_0x3826f3=_0x435f5b['host'],_0x207251='/'+_0x435f5b[_0x43fb4c(0x23e)],_0x1e73bf=_0x1dc314[_0x43fb4c(0xac)]((_0x553b56,_0x491cf6)=>{const _0x1e921c=_0x43fb4c,{user:_0x51daa7,srv:_0x235b52,prt:_0x208c26,name:_0x3c79c8,isTrojan:_0x4d7980,tls:_0x371276}=parseShareNode(_0x553b56,_0x491cf6),_0xf0424c=_0x371276?',\x20tls=true,\x20skip-cert-verify=true,\x20sni='+_0x3826f3:_0x1e921c(0xa7);return _0x4d7980?_0x3c79c8+'\x20=\x20trojan,\x20'+_0x235b52+',\x20'+_0x208c26+_0x1e921c(0xa2)+_0x51daa7+_0x1e921c(0x291)+_0x207251+',\x20ws-headers=Host:'+_0x3826f3+_0xf0424c:_0x3c79c8+_0x1e921c(0x1fe)+_0x235b52+',\x20'+_0x208c26+_0x1e921c(0x199)+_0x51daa7+',\x20ws=true,\x20ws-path='+_0x207251+_0x1e921c(0x39b)+_0x3826f3+_0xf0424c;}),_0x3fc406=_0x1e73bf[_0x43fb4c(0xac)](_0x4769fb=>_0x4769fb[_0x43fb4c(0x382)](_0x43fb4c(0xee))[0x0])['join'](',\x20');return'[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a'+_0x1e73bf[_0x43fb4c(0x97)]('\x0a')+_0x43fb4c(0xf6)+_0x3fc406+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20'+_0x3fc406+_0x43fb4c(0x107);}function generateQuanX(_0x38ecb9,_0xefa03d){const _0x188892=_0x1dc4ca,_0x9018b8=_0x38ecb9[_0x188892(0xa9)],_0x296910='/'+_0x38ecb9[_0x188892(0x23e)],_0x560437=_0x52c1d7=>_0x52c1d7[_0x188892(0x2eb)](':')>=0x0?'['+_0x52c1d7+']':_0x52c1d7,_0x151b3c=_0xefa03d[_0x188892(0xac)]((_0x2ea189,_0x2b4bd3)=>{const _0xa3bf04=_0x188892,{user:_0x3d3259,srv:_0x356aac,prt:_0x929a76,name:_0x2bfd29}=parseShareNode(_0x2ea189,_0x2b4bd3);if(_0x2ea189[_0xa3bf04(0x1cd)](_0xa3bf04(0x31b)))return _0xa3bf04(0xfb)+_0x560437(_0x356aac)+':'+_0x929a76+_0xa3bf04(0xa2)+_0x3d3259+_0xa3bf04(0x230)+_0x9018b8+_0xa3bf04(0x3e3)+_0x9018b8+',\x20obfs-uri='+_0x296910+_0xa3bf04(0x1fd)+_0x2bfd29;const _0x1c5e81=(getParam(_0x2ea189,_0xa3bf04(0x2da))||_0xa3bf04(0x3a8))===_0xa3bf04(0x3a8);return _0xa3bf04(0x308)+_0x560437(_0x356aac)+':'+_0x929a76+_0xa3bf04(0x2be)+_0x3d3259+_0xa3bf04(0x3b8)+(_0x1c5e81?_0xa3bf04(0x1ed):'ws')+_0xa3bf04(0x20c)+_0x9018b8+_0xa3bf04(0x207)+_0x296910+(_0x1c5e81?_0xa3bf04(0x12e):'')+',\x20tag='+_0x2bfd29;}),_0x5708ea=_0xefa03d[_0x188892(0xac)]((_0x3aee3f,_0x495453)=>{const _0x263b0d=_0x188892,_0x2d93b2=_0x3aee3f[_0x263b0d(0x2eb)]('#');if(_0x2d93b2<0x0)return'节点'+(_0x495453+0x1);try{return decodeURIComponent(_0x3aee3f[_0x263b0d(0x9e)](_0x2d93b2+0x1))||'节点'+(_0x495453+0x1);}catch(_0x44e905){return'节点'+(_0x495453+0x1);}})[_0x188892(0x97)](',\x20');return _0x188892(0xde)+_0x151b3c[_0x188892(0x97)]('\x0a')+'\x0a[policy]\x0astatic=🚀\x20节点选择,\x20'+_0x5708ea+_0x188892(0x365);}async function testProxyAlive(_0x5da016,_0x298260,_0x4682b0){const _0x1581a7=_0x1dc4ca,_0x334a0d=_0x4682b0||0x7d0;try{const _0x5c2b14=connect({'hostname':_0x5da016,'port':_0x298260});await Promise[_0x1581a7(0x327)]([_0x5c2b14[_0x1581a7(0x1df)],new Promise((_0x5c33e7,_0x4bc676)=>setTimeout(()=>_0x4bc676(new Error(_0x1581a7(0x38c))),_0x334a0d))]);try{_0x5c2b14[_0x1581a7(0x29f)]();}catch(_0x43a2d6){}return!![];}catch(_0x56b092){return![];}}async function testRelayAlive(_0x5d7796,_0x38aace,_0x38319a){const _0x2fc77b=_0x1dc4ca,_0xdffcaa=_0x38319a||0x9c4;try{const _0x48bccf=connect({'hostname':_0x5d7796,'port':_0x38aace});await Promise[_0x2fc77b(0x327)]([_0x48bccf[_0x2fc77b(0x1df)],new Promise((_0x5b75e,_0xe507cf)=>setTimeout(()=>_0xe507cf(new Error(_0x2fc77b(0x319))),_0xdffcaa))]);const _0x5988bc=_0x48bccf[_0x2fc77b(0x1a9)]['getWriter'](),_0x7b8657=_0x48bccf[_0x2fc77b(0x3a0)][_0x2fc77b(0x113)]();await _0x5988bc['write'](new TextEncoder()[_0x2fc77b(0x3e5)](_0x2fc77b(0x255)+_0x5d7796+_0x2fc77b(0x290)));const _0x471b6d=await Promise[_0x2fc77b(0x327)]([_0x7b8657[_0x2fc77b(0x100)](),new Promise((_0x3b2328,_0x103b10)=>setTimeout(()=>_0x103b10(new Error(_0x2fc77b(0x3ff))),_0xdffcaa))]);try{_0x48bccf[_0x2fc77b(0x29f)]();}catch(_0x46f64f){}const _0x40cf0c=new TextDecoder()[_0x2fc77b(0x223)](_0x471b6d['value']||new Uint8Array(0x0));return/^HTTP\/1\\.[01] (200|204)/[_0x2fc77b(0x122)](_0x40cf0c);}catch(_0x22c64d){return![];}}const proxyAliveCache={};async function testProxyAliveCached(_0x2710f3,_0x622f0e){const _0x4d47c7=_0x1dc4ca,_0x2a3bd4=_0x2710f3+':'+_0x622f0e,_0x562d3f=proxyAliveCache[_0x2a3bd4];if(_0x562d3f&&Date[_0x4d47c7(0x34b)]()-_0x562d3f['at']<0xa*0x3c*0x3e8)return _0x562d3f[_0x4d47c7(0x29c)];const _0x101845=await testProxyAlive(_0x2710f3,_0x622f0e);return proxyAliveCache[_0x2a3bd4]={'alive':_0x101845,'at':Date[_0x4d47c7(0x34b)]()},_0x101845;}async function dohFirstCF(_0x124f64){const _0x1c627c=_0x1dc4ca;try{const _0x9fca86=await fetchTimeout(_0x1c627c(0x11b)+encodeURIComponent(_0x124f64)+_0x1c627c(0x323),{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x9fca86||!_0x9fca86['ok'])return null;const _0x2920cf=await _0x9fca86[_0x1c627c(0x264)](),_0x4deaa8=(_0x2920cf['Answer']||[])['filter'](_0x1f0925=>_0x1f0925['type']===0x1&&/^\d+\.\d+\.\d+\.\d+$/[_0x1c627c(0x122)](_0x1f0925['data']))[_0x1c627c(0xac)](_0x15280a=>_0x15280a[_0x1c627c(0x239)]);return _0x4deaa8[_0x1c627c(0x13b)](isCloudflareIP)[0x0]||null;}catch(_0x3ff783){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0x2d99d9){const _0x31c444=_0x1dc4ca;if(Date[_0x31c444(0x34b)]()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE[_0x31c444(0x169)]!==null)return DOMAIN_ALIVE_CACHE[_0x31c444(0x169)];const _0x309dd5=String(_0x2d99d9||'')['split'](/[\n,;]+/)['map'](_0x477b23=>_0x477b23[_0x31c444(0x1e6)]()['replace'](/^\*\./,''))[_0x31c444(0x13b)](Boolean),_0x1e2b96=await Promise[_0x31c444(0x3e6)](_0x309dd5[_0x31c444(0xac)](async _0x365389=>{const _0x3d364e=await dohFirstCF(_0x365389);if(!_0x3d364e||!isCloudflareIP(_0x3d364e))return{'d':_0x365389,'alive':![]};return{'d':_0x365389,'alive':await testProxyAliveCached(_0x3d364e,0x1bb)};})),_0x3e7922=_0x1e2b96[_0x31c444(0x13b)](_0x52ee8a=>_0x52ee8a[_0x31c444(0x29c)])[_0x31c444(0xac)](_0x1493ce=>_0x1493ce['d']);return DOMAIN_ALIVE_CACHE['t']=Date[_0x31c444(0x34b)](),DOMAIN_ALIVE_CACHE[_0x31c444(0x169)]=_0x3e7922[_0x31c444(0x97)]('\x0a'),DOMAIN_ALIVE_CACHE[_0x31c444(0x169)];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x571237=_0x1dc4ca;if(bestcfCache['list']&&Date['now']()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache[_0x571237(0x169)];const _0x572960=[],_0x55029a=BESTCF_REGION_URLS[_0x571237(0xac)](async _0x37177b=>{const _0x5bc126=_0x571237;try{const _0x3fb1a2=await fetchTimeout(_0x37177b['url'],{'headers':{'User-Agent':_0x5bc126(0x1f7)}},0x1f40);if(!_0x3fb1a2['ok'])return;const _0x459593=await _0x3fb1a2[_0x5bc126(0x1e2)](),_0x5089c8=[];for(const _0x35b046 of _0x459593[_0x5bc126(0x382)](/[\r\n]+/)){const _0x4edc76=_0x35b046['trim']()['match'](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0x4edc76&&_0x5089c8[_0x5bc126(0xea)]<_0x37177b[_0x5bc126(0x312)])_0x5089c8['push']({'ip':_0x4edc76[0x1],'port':_0x4edc76[0x2]?parseInt(_0x4edc76[0x2],0xa):0x1bb,'name':_0x37177b['label']+'-'+String(_0x5089c8[_0x5bc126(0xea)]+0x1)[_0x5bc126(0x14d)](0x2,'0')});}_0x5089c8['forEach'](_0x280d02=>_0x572960[_0x5bc126(0x147)](_0x280d02));}catch(_0xb1e119){}});return await Promise[_0x571237(0x3e6)](_0x55029a),bestcfCache[_0x571237(0x169)]=_0x572960,bestcfCache['at']=Date[_0x571237(0x34b)](),_0x572960;}function appendStableNodes(_0x527898,_0x585dee,_0x17523b){const _0x30a5df=_0x1dc4ca;if(_0x527898[_0x30a5df(0xea)]>=_0x17523b)return;const _0x54e307=new Set();for(const _0x48dd02 of _0x527898){try{_0x54e307['add'](parseNodeServer(_0x48dd02)['host']);}catch(_0x443e1b){}}let _0xfb93c6=0x0;for(const _0x56ab87 of BUILTIN_STABLE_IPS){if(_0x527898['length']>=_0x17523b)break;if(_0x54e307['has'](_0x56ab87))continue;_0x54e307[_0x30a5df(0x2ca)](_0x56ab87),_0xfb93c6++;const _0xb76dc6=_0x30a5df(0x99)+String(_0xfb93c6)[_0x30a5df(0x14d)](0x2,'0');if(_0x585dee['enableVless'])_0x527898['push'](vlessNode(_0x585dee,_0x56ab87,0x1bb,_0xb76dc6));if(_0x527898['length']>=_0x17523b)break;if(_0x585dee[_0x30a5df(0x119)])_0x527898[_0x30a5df(0x147)](trojanNode(_0x585dee,_0x56ab87,0x1bb,_0xb76dc6));if(_0x527898[_0x30a5df(0xea)]>=_0x17523b)break;if(_0x585dee['enableXhttp'])_0x527898['push'](vlessNode(_0x585dee,_0x56ab87,0x1bb,_0xb76dc6,{'type':_0x30a5df(0x2e9)}));}}function appendFallbackNodes(_0x538819,_0x18dda6,_0x1826af,_0x4c512f){const _0x1e4e82=_0x1dc4ca;if(_0x538819[_0x1e4e82(0xea)]>=_0x1826af)return;const _0x14dba2=new Set();for(const _0x4c2af8 of _0x538819){try{_0x14dba2['add'](parseNodeServer(_0x4c2af8)['host']);}catch(_0x1da639){}}const _0x137cb8=(_0x4d421d,_0x1ee1d9)=>{const _0x1da8b3=_0x1e4e82;if(_0x538819[_0x1da8b3(0xea)]>=_0x1826af)return;if(_0x14dba2[_0x1da8b3(0xf2)](_0x4d421d))return;_0x14dba2['add'](_0x4d421d);if(_0x18dda6['enableVless'])_0x538819['push'](vlessNode(_0x18dda6,_0x4d421d,0x1bb,_0x1ee1d9));if(_0x18dda6[_0x1da8b3(0x119)])_0x538819[_0x1da8b3(0x147)](trojanNode(_0x18dda6,_0x4d421d,0x1bb,_0x1ee1d9));if(_0x18dda6[_0x1da8b3(0x23f)])_0x538819[_0x1da8b3(0x147)](vlessNode(_0x18dda6,_0x4d421d,0x1bb,_0x1ee1d9,{'type':_0x1da8b3(0x2e9)}));};_0x18dda6[_0x1e4e82(0x2f6)]&&_0x18dda6['src'][_0x1e4e82(0x1a4)]===!![]&&_0x137cb8(_0x18dda6[_0x1e4e82(0xa9)],_0x1e4e82(0x36c));}async function generateSubscription(_0x4477d4,_0x221598,_0x4025d8,_0x22b47c,_0x1f8ab5){const _0x4c3b70=_0x1dc4ca;if(!_0x4477d4['path']||_0x4477d4[_0x4c3b70(0x23e)]==='/'||_0x4477d4[_0x4c3b70(0x23e)]==='')_0x4477d4[_0x4c3b70(0x23e)]=_0x4477d4[_0x4c3b70(0xd1)];const _0x53010b=_0x4477d4['filter']&&_0x4477d4[_0x4c3b70(0x13b)]['ipType']||[];if(_0x53010b[_0x4c3b70(0x14e)](_0x4c3b70(0xc0)))await refreshOfficialV6CIDRs();const _0x3755e2=_0x4477d4[_0x4c3b70(0x2f8)]&&_0x4477d4[_0x4c3b70(0x2f8)][_0x4c3b70(0x1f1)]||'';if(_0x3755e2===''&&(!_0x4477d4['preferredIPs']||_0x4477d4['preferredIPs'][_0x4c3b70(0xea)]<0x50))try{const [_0x3633b9,_0x50960e,_0x3e4dfe]=await Promise[_0x4c3b70(0x3e6)]([fetchBestcfPool()[_0x4c3b70(0x3f3)](()=>[]),fetchLatestPreferredIPs(0xc8)[_0x4c3b70(0x3f3)](()=>null),Promise[_0x4c3b70(0x98)](parseIPList(BUILTIN_PREFERRED_IPS[_0x4c3b70(0x97)]('\x0a')))]),_0x5d33e7=[],_0x5b9755=[],_0x472b2b=new Set((_0x4477d4[_0x4c3b70(0x2ad)]||[])[_0x4c3b70(0xac)](_0x3eb1a5=>_0x3eb1a5['ip']));for(const _0x2cd250 of[..._0x4477d4[_0x4c3b70(0x2ad)]||[],..._0x3633b9||[],..._0x50960e||[],..._0x3e4dfe]){if(!_0x2cd250||!_0x2cd250['ip']||_0x472b2b[_0x4c3b70(0xf2)](_0x2cd250['ip']))continue;_0x472b2b[_0x4c3b70(0x2ca)](_0x2cd250['ip']);const _0x4e752f={'ip':_0x2cd250['ip'],'port':_0x2cd250[_0x4c3b70(0x16a)]||0x1bb,'name':_0x2cd250[_0x4c3b70(0x22c)]||'','relay':!!_0x2cd250[_0x4c3b70(0x3ab)]};if(_0x4e752f[_0x4c3b70(0x3ab)]||!isCloudflareIP(_0x4e752f['ip']))_0x5b9755[_0x4c3b70(0x147)](_0x4e752f);else _0x5d33e7['push'](_0x4e752f);}const _0x12a075=_0x5b9755[_0x4c3b70(0x9e)](0x0,0x64),_0x582a06=_0x5d33e7[_0x4c3b70(0x9e)](0x0,0x96),[_0x26148c,_0x3bc0e2]=await Promise[_0x4c3b70(0x3e6)]([Promise['all'](_0x12a075[_0x4c3b70(0xac)](_0x18d249=>testRelayAlive(_0x18d249['ip'],_0x18d249[_0x4c3b70(0x16a)]||0x1bb,0x9c4)[_0x4c3b70(0x11c)](_0x104a0a=>({'ip':_0x18d249['ip'],'ok':_0x104a0a})))),Promise[_0x4c3b70(0x3e6)](_0x582a06[_0x4c3b70(0xac)](_0x8fce3e=>testProxyAlive(_0x8fce3e['ip'],_0x8fce3e['port']||0x1bb,0x9c4)[_0x4c3b70(0x11c)](_0x1ca995=>({'ip':_0x8fce3e['ip'],'ok':_0x1ca995}))))]),_0x3956ad=_0x26148c[_0x4c3b70(0x13b)](_0x133af5=>_0x133af5['ok'])['map'](_0x2c6648=>_0x12a075['find'](_0x582a57=>_0x582a57['ip']===_0x2c6648['ip']))[_0x4c3b70(0x13b)](Boolean),_0x5bae04=_0x3bc0e2[_0x4c3b70(0x13b)](_0x42867f=>_0x42867f['ok'])[_0x4c3b70(0xac)](_0x24f129=>_0x582a06[_0x4c3b70(0x2bc)](_0x4ad74d=>_0x4ad74d['ip']===_0x24f129['ip']))['filter'](Boolean),_0x49bdb2=_0x5bae04[_0x4c3b70(0x9e)](0x0,0xd2),_0x2de035=_0x3956ad['slice'](0x0,0x28);_0x4477d4[_0x4c3b70(0x2ad)]=[..._0x4477d4[_0x4c3b70(0x2ad)]||[],..._0x49bdb2,..._0x2de035][_0x4c3b70(0x9e)](0x0,0xfa);}catch(_0x5bcc07){}const _0x3ed089=!/\.workers\.dev$/i[_0x4c3b70(0x122)](new URL(_0x221598)[_0x4c3b70(0x3f9)]),_0x334e12=Object['assign']({},_0x4477d4,{'host':_0x4477d4[_0x4c3b70(0xa9)]||new URL(_0x221598)[_0x4c3b70(0x3f9)]});_0x3ed089&&(_0x334e12[_0x4c3b70(0x1c0)]=!![]);const _0x3e1afc=_0x4477d4['optimizer']&&_0x4477d4[_0x4c3b70(0x2f8)][_0x4c3b70(0x1f1)]||'';let _0x405bf6=[];const _0x4fe21e=_0x4477d4[_0x4c3b70(0x13b)]&&_0x4477d4[_0x4c3b70(0x13b)]['ipType']||[],_0x599e1f=_0x4fe21e[_0x4c3b70(0x14e)](_0x4c3b70(0xc0)),_0x3e0713=_0x4fe21e['length']===0x1&&_0x4fe21e[0x0]===_0x4c3b70(0xc0),_0x2a44f7=_0x3e0713?OFFICIAL_V6_CIDRS:_0x599e1f?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x4dd0a0=parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))[_0x4c3b70(0xac)](_0x36edbe=>({'ip':_0x36edbe['ip'],'port':_0x36edbe[_0x4c3b70(0x16a)]||0x1bb,'name':_0x36edbe['name']||_0x4c3b70(0x234)+String(BUILTIN_PREFERRED_IPS[_0x4c3b70(0x2eb)](_0x36edbe)+0x1)[_0x4c3b70(0x14d)](0x2,'0')}));if(_0x3e1afc===_0x4c3b70(0x316)){const _0x472e19=!!(_0x4477d4['optimizer']&&_0x4477d4['optimizer']['subIncludeDefault']),_0x2d8aa9=!_0x472e19;_0x405bf6=await resolvePreferredDomains(_0x4477d4[_0x4c3b70(0x363)]||'',_0x2d8aa9?0xc8:0x28,_0x2d8aa9?0x7d0:0x12c,_0x472e19,_0x472e19,_0x599e1f);if(_0x472e19){const _0x5bcf84=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x599e1f),_0xb991d8=new Set(_0x5bcf84[_0x4c3b70(0xac)](_0x515043=>_0x515043['ip']));_0x405bf6=[..._0x5bcf84,..._0x405bf6[_0x4c3b70(0x13b)](_0x3b04de=>!_0xb991d8[_0x4c3b70(0xf2)](_0x3b04de['ip']))],_0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12[_0x4c3b70(0x2ad)]||[],..._0x4dd0a0];if(!_0x334e12[_0x4c3b70(0x2f8)])_0x334e12[_0x4c3b70(0x2f8)]={};_0x334e12[_0x4c3b70(0x2f8)][_0x4c3b70(0x188)]=Math[_0x4c3b70(0x1aa)](parseInt(_0x334e12[_0x4c3b70(0x2f8)][_0x4c3b70(0x188)])||0x0,0x320);}}else{if(_0x3e1afc===''){const _0x5432c5=_0x4477d4[_0x4c3b70(0x2f6)]||{},_0xfc0f26=_0x5432c5['native']===!![],_0x4e1b8b=_0x5432c5[_0x4c3b70(0x297)]!==![],_0x1a564b=_0x5432c5['prefIp']!==![],_0x42f5d1=_0x5432c5[_0x4c3b70(0x3c3)]===!![];_0xfc0f26&&!_0x3e0713&&(_0x334e12[_0x4c3b70(0x363)]=(_0x334e12[_0x4c3b70(0x363)]?_0x334e12['preferredDomains']+'\x0a':'')+_0x334e12['host']+_0x4c3b70(0x39c));if(!_0x42f5d1)_0x334e12['preferredIPs']=[];const _0x173edd=_0x4477d4[_0x4c3b70(0x13b)]||{},_0x2c2318=_0x173edd[_0x4c3b70(0x351)],_0x1408ec=Array[_0x4c3b70(0x218)](_0x2c2318)?_0x2c2318[_0x4c3b70(0xea)]===0x0||_0x2c2318[_0x4c3b70(0x14e)](_0x4c3b70(0x3e6)):!_0x2c2318||_0x2c2318===_0x4c3b70(0x3e6);if(_0x1408ec){_0x405bf6=[];if(_0x4e1b8b&&!_0x3e0713){const _0xcc02c=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0xcc02c)_0x334e12[_0x4c3b70(0x363)]=(_0x334e12[_0x4c3b70(0x363)]?_0x334e12['preferredDomains']+'\x0a':'')+_0xcc02c;}if(_0x1a564b&&!_0x3e0713){const _0x30c6e1=await fetchLatestPreferredIPs(0x96);if(_0x30c6e1&&_0x30c6e1[_0x4c3b70(0xea)])_0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12[_0x4c3b70(0x2ad)]||[],..._0x30c6e1];try{const _0x2b8e52=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x258,!![],!![],![]);if(_0x2b8e52&&_0x2b8e52[_0x4c3b70(0xea)])_0x334e12['preferredIPs']=[..._0x334e12['preferredIPs']||[],..._0x2b8e52];}catch(_0x52670f){}}if(_0x599e1f&&_0x4e1b8b)try{const _0x44e6f4=DEFAULT_PREFERRED_DOMAINS+(_0x3e0713?'\x0a'+BUILTIN_OFFICIAL_DOMAINS[_0x4c3b70(0x97)]('\x0a'):''),_0x571409=await resolvePreferredDomains(_0x44e6f4,0x28,_0x3e0713?0x320:0xf0,![],!![],!![]);if(_0x571409&&_0x571409[_0x4c3b70(0xea)])_0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12['preferredIPs']||[],..._0x571409];}catch(_0xd63737){}}else _0x4e1b8b&&(_0x405bf6=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x599e1f));if(_0x1a564b){if(_0x3e0713){const _0x4341f8=_0x4dd0a0[_0x4c3b70(0xac)](_0x5aa7bc=>({'ip':ipv4ToEmbeddedV6(_0x5aa7bc['ip']),'port':_0x5aa7bc[_0x4c3b70(0x16a)]||0x1bb,'name':_0x5aa7bc[_0x4c3b70(0x22c)]}))[_0x4c3b70(0x13b)](_0x36cc16=>_0x36cc16['ip']);_0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12['preferredIPs']||[],..._0x4341f8];}else{if(_0x599e1f){const _0x46e18d=_0x4dd0a0['map'](_0x46d5e3=>({'ip':ipv4ToEmbeddedV6(_0x46d5e3['ip']),'port':_0x46d5e3[_0x4c3b70(0x16a)]||0x1bb,'name':_0x46d5e3[_0x4c3b70(0x22c)]}))[_0x4c3b70(0x13b)](_0x4a0762=>_0x4a0762['ip']);_0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12['preferredIPs']||[],..._0x4dd0a0,..._0x46e18d];}else _0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12[_0x4c3b70(0x2ad)]||[],..._0x4dd0a0];}}if(!_0xfc0f26&&!_0x4e1b8b&&!_0x1a564b&&!_0x42f5d1){if(_0x3e0713){const _0x5bc3c7=_0x4dd0a0[_0x4c3b70(0xac)](_0x480acb=>({'ip':ipv4ToEmbeddedV6(_0x480acb['ip']),'port':_0x480acb['port']||0x1bb,'name':_0x480acb[_0x4c3b70(0x22c)]}))[_0x4c3b70(0x13b)](_0x370098=>_0x370098['ip']);_0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12[_0x4c3b70(0x2ad)]||[],..._0x5bc3c7];}else _0x334e12[_0x4c3b70(0x2ad)]=[..._0x334e12[_0x4c3b70(0x2ad)]||[],..._0x4dd0a0];}if(_0x3e0713&&_0x334e12['preferredIPs'])_0x334e12['preferredIPs']=_0x334e12['preferredIPs'][_0x4c3b70(0x13b)](_0x21f567=>String(_0x21f567['ip'])['indexOf'](':')>=0x0);if(!_0x334e12[_0x4c3b70(0x2f8)])_0x334e12['optimizer']={};_0x334e12[_0x4c3b70(0x2f8)][_0x4c3b70(0x188)]=Math[_0x4c3b70(0x1aa)](parseInt(_0x334e12[_0x4c3b70(0x2f8)][_0x4c3b70(0x188)])||0x0,_0x3e0713?0x0:0x3e8);if(_0x334e12[_0x4c3b70(0x2ad)]&&_0x334e12[_0x4c3b70(0x2ad)][_0x4c3b70(0xea)]){const _0x29de28=BUILTIN_STABLE_IPS[_0x4c3b70(0xac)]((_0xf9f4b7,_0x57b262)=>({'ip':_0xf9f4b7,'port':0x1bb,'name':_0x4c3b70(0x20f)+String(_0x57b262+0x1)[_0x4c3b70(0x14d)](0x2,'0')})),_0x2c88c9=new Set(_0x29de28[_0x4c3b70(0xac)](_0x472a1b=>_0x472a1b['ip']));_0x334e12[_0x4c3b70(0x2ad)]=[..._0x29de28,..._0x334e12[_0x4c3b70(0x2ad)][_0x4c3b70(0x13b)](_0x18fae9=>!_0x2c88c9[_0x4c3b70(0xf2)](_0x18fae9['ip']))];}}}const _0x4fa291=_0x4477d4['_skipIssued']&&_0x4477d4[_0x4c3b70(0x15b)][_0x4c3b70(0x224)]?_0x4477d4[_0x4c3b70(0x15b)]:null;if(_0x405bf6[_0x4c3b70(0xea)]){let _0x261496=_0x405bf6;if(_0x4fa291){const _0x51d846=_0x405bf6['filter'](_0x2e8654=>!_0x4fa291['has'](_0x2e8654['ip'])),_0x18d3c5=_0x405bf6[_0x4c3b70(0x13b)](_0xc0443c=>_0x4fa291[_0x4c3b70(0xf2)](_0xc0443c['ip']));_0x261496=[..._0x51d846,..._0x18d3c5];}const _0x402ef5=(_0x334e12[_0x4c3b70(0x2ad)]||[])[_0x4c3b70(0xea)];_0x261496=_0x261496[_0x4c3b70(0xac)]((_0x1ce05f,_0x3fb5a3)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x4c3b70(0x122)](_0x1ce05f[_0x4c3b70(0x22c)]||'')?Object[_0x4c3b70(0x108)]({},_0x1ce05f,{'name':_0x4c3b70(0x234)+String(_0x402ef5+_0x3fb5a3+0x1)[_0x4c3b70(0x14d)](0x2,'0')}):_0x1ce05f),_0x334e12['preferredIPs']=[..._0x334e12[_0x4c3b70(0x2ad)]||[],..._0x261496];}if(_0x3e0713&&_0x334e12[_0x4c3b70(0x2ad)])_0x334e12[_0x4c3b70(0x2ad)]=_0x334e12[_0x4c3b70(0x2ad)][_0x4c3b70(0x13b)](_0x16be8b=>String(_0x16be8b['ip'])[_0x4c3b70(0x2eb)](':')>=0x0);_0x22b47c=(_0x22b47c||'')[_0x4c3b70(0x195)]();const _0x4c8f99=(_0x4025d8||'')[_0x4c3b70(0x195)](),_0x2b1c51=[_0x4c3b70(0x3f0),'singbox',_0x4c3b70(0x253),_0x4c3b70(0x3c0),_0x4c3b70(0x2ee),'loon',_0x4c3b70(0x265),_0x4c3b70(0x15d)]['includes'](_0x4c8f99)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/['test'](_0x22b47c);let _0x4352be=_0x2b1c51?0x12c:0x320;if(_0x3e1afc===_0x4c3b70(0x316)&&_0x4477d4[_0x4c3b70(0x2f8)]&&_0x4477d4[_0x4c3b70(0x2f8)][_0x4c3b70(0x309)])_0x4352be=_0x2b1c51?Math[_0x4c3b70(0x1aa)](_0x4352be,0x12c):Math[_0x4c3b70(0x1aa)](_0x4352be,0x320);if(_0x3e1afc==='custom'&&!(_0x4477d4[_0x4c3b70(0x2f8)]&&_0x4477d4[_0x4c3b70(0x2f8)]['subIncludeDefault']))_0x4352be=_0x2b1c51?Math[_0x4c3b70(0x1aa)](_0x4352be,0x320):Math[_0x4c3b70(0x1aa)](_0x4352be,0x7d0);if(_0x4477d4['polling']===![])_0x4352be=0x2710;if(_0x4477d4[_0x4c3b70(0x157)]){const _0x233c73=parseInt(_0x4477d4[_0x4c3b70(0x305)])||0x0;if(_0x233c73>0x0)_0x4352be=Math['min'](_0x233c73,0x3e8);}if(_0x4477d4[_0x4c3b70(0x3b1)])_0x4352be=Math[_0x4c3b70(0x33a)](_0x4352be,_0x4477d4[_0x4c3b70(0x3b1)]);const _0x1045e6=_0x3e1afc===_0x4c3b70(0x33b)?Object[_0x4c3b70(0x108)]({},_0x4477d4[_0x4c3b70(0x13b)],{'region':_0x4c3b70(0x3e6)}):_0x4477d4[_0x4c3b70(0x13b)];let _0x4ad5f6=filterNodes(await buildNodes(_0x334e12,_0x4352be,_0x4fa291),_0x1045e6);const _0x5863a9=_0x3e1afc==='custom'&&!(_0x4477d4[_0x4c3b70(0x2f8)]&&_0x4477d4[_0x4c3b70(0x2f8)][_0x4c3b70(0x309)]);if(!_0x5863a9&&!_0x3e0713)appendFallbackNodes(_0x4ad5f6,_0x334e12,_0x4352be,_0x1f8ab5);if(!_0x3e0713&&!(_0x5863a9&&_0x4ad5f6[_0x4c3b70(0xea)]>0x0))appendStableNodes(_0x4ad5f6,_0x334e12,_0x4352be);if(_0x4477d4['nodeLimit']&&_0x3e1afc&&!_0x5863a9&&_0x4ad5f6[_0x4c3b70(0xea)]<_0x4352be){const _0x18657a=_0x4352be-_0x4ad5f6[_0x4c3b70(0xea)],_0x57538c=new Set();for(const _0xf8c79 of _0x4ad5f6){try{_0x57538c[_0x4c3b70(0x2ca)](parseNodeServer(_0xf8c79)[_0x4c3b70(0xa9)]);}catch(_0x26baed){}}const _0x4d84ce=(_0xa17718,_0xf4a94,_0x1855a1)=>{const _0x48d312=_0x4c3b70;if(_0x4ad5f6['length']>=_0x4352be)return;if(_0x57538c[_0x48d312(0xf2)](_0xa17718))return;_0x57538c['add'](_0xa17718);const _0xc4847d=HTTP_PORTS_LIST[hashStr(String(_0xa17718))%HTTP_PORTS_LIST[_0x48d312(0xea)]],_0xbf726a=TLS_PORTS[Math[_0x48d312(0x170)](Math[_0x48d312(0x33b)]()*TLS_PORTS['length'])];if(!_0x4477d4[_0x48d312(0x1c0)]&&_0x4ad5f6[_0x48d312(0xea)]<_0x4352be)_0x4ad5f6[_0x48d312(0x147)](vlessNode(_0x334e12,_0xa17718,_0xc4847d,_0x1855a1+'-'+_0xc4847d));if(_0x4ad5f6[_0x48d312(0xea)]>=_0x4352be)return;_0x4ad5f6[_0x48d312(0x147)](vlessNode(_0x334e12,_0xa17718,_0xbf726a,_0x1855a1));};try{const _0x491be5=await fetchBestcfPool(),_0x484a8c=_0x4fa291?_0x491be5[_0x4c3b70(0x13b)](_0x3b0a35=>!_0x4fa291[_0x4c3b70(0xf2)](_0x3b0a35['ip'])):_0x491be5,_0x40f40e=_0x484a8c['length']>=_0x18657a?_0x484a8c:_0x491be5;for(const _0x70d3d3 of _0x40f40e){_0x4d84ce(_0x70d3d3['ip'],_0x70d3d3[_0x4c3b70(0x16a)],_0x70d3d3[_0x4c3b70(0x22c)]||_0x4c3b70(0x234)+String(_0x70d3d3[_0x4c3b70(0x16a)]));if(_0x4ad5f6[_0x4c3b70(0xea)]>=_0x4352be)break;}}catch(_0x48853b){}if(_0x4ad5f6[_0x4c3b70(0xea)]<_0x4352be)try{const _0x4d26ac=Object['keys'](PROXY_IP_DOMAINS)[_0x4c3b70(0xac)](_0x3d4222=>({'server':PROXY_IP_DOMAINS[_0x3d4222],'port':0x1bb,'name':_0x4c3b70(0xc4)+_0x3d4222})),_0x3f38a9=[];for(const _0x13b84b of _0x4d26ac){if(await testProxyAliveCached(_0x13b84b[_0x4c3b70(0x37d)],_0x13b84b[_0x4c3b70(0x16a)]))_0x3f38a9['push'](_0x13b84b);if(_0x3f38a9[_0x4c3b70(0xea)]>=0x6)break;}for(const _0x815971 of _0x3f38a9){_0x4d84ce(_0x815971[_0x4c3b70(0x37d)],_0x815971[_0x4c3b70(0x16a)],_0x815971['name']);if(_0x4ad5f6[_0x4c3b70(0xea)]>=_0x4352be)break;}}catch(_0x319d2f){}if(_0x4ad5f6['length']<_0x4352be){const _0x54de3a=_0x4352be-_0x4ad5f6[_0x4c3b70(0xea)],_0x26c2c5=randomIPsFromCidrs(REACHABLE_CIDRS,_0x54de3a*0x3),_0x47337e=_0x4fa291?_0x26c2c5[_0x4c3b70(0x13b)](_0x3b684f=>!_0x4fa291['has'](_0x3b684f)):_0x26c2c5;let _0xeb9a77=_0x47337e['length']>=_0x54de3a?_0x47337e:_0x26c2c5;if(_0xeb9a77[_0x4c3b70(0xea)]>0x0){const _0x4ae8a1=Math[_0x4c3b70(0x33a)](_0xeb9a77['length'],Math[_0x4c3b70(0x1aa)](_0x54de3a,0x14),0x3c),_0x249a08=_0xeb9a77['slice'](0x0,_0x4ae8a1)['map'](_0x39c6d7=>testProxyAlive(_0x39c6d7,0x1bb,0x5dc)['then'](_0x27a812=>({'ip':_0x39c6d7,'ok':_0x27a812}))),_0x413d8d=await Promise[_0x4c3b70(0x3e6)](_0x249a08),_0xd0cd50=_0x413d8d[_0x4c3b70(0x13b)](_0x295b5e=>_0x295b5e['ok'])[_0x4c3b70(0xac)](_0xca15b1=>_0xca15b1['ip']),_0x21ff28=_0xeb9a77[_0x4c3b70(0x9e)](_0x4ae8a1);_0xeb9a77=[..._0xd0cd50,..._0x21ff28]['slice'](0x0,_0x54de3a);}let _0x2c782c=0x0;for(const _0xdb7e66 of _0xeb9a77){if(_0x4ad5f6['length']>=_0x4352be)break;_0x2c782c++;const _0x1c7319=HTTP_PORTS_LIST[hashStr(String(_0xdb7e66))%HTTP_PORTS_LIST['length']],_0x581ae7=TLS_PORTS[Math[_0x4c3b70(0x170)](Math['random']()*TLS_PORTS[_0x4c3b70(0xea)])];if(!_0x4477d4['tlsOnly']&&_0x4ad5f6['length']<_0x4352be)_0x4ad5f6['push'](vlessNode(_0x334e12,_0xdb7e66,_0x1c7319,_0x4c3b70(0x234)+String(_0x2c782c)[_0x4c3b70(0x14d)](0x3,'0')+'-'+_0x1c7319));if(_0x4ad5f6[_0x4c3b70(0xea)]>=_0x4352be)break;_0x4ad5f6['push'](vlessNode(_0x334e12,_0xdb7e66,_0x581ae7,'优选IP-'+String(_0x2c782c)[_0x4c3b70(0x14d)](0x3,'0')));}}}if(_0x4ad5f6['length']>_0x4352be)_0x4ad5f6[_0x4c3b70(0xea)]=_0x4352be;const _0x2d78db=[],_0x39ed4f=new Set();for(const _0x90a061 of _0x4ad5f6){try{const {host:_0x490177}=parseNodeServer(_0x90a061);isValidIp(_0x490177)&&!_0x39ed4f['has'](_0x490177)&&(_0x39ed4f[_0x4c3b70(0x2ca)](_0x490177),_0x2d78db[_0x4c3b70(0x147)](_0x490177));}catch(_0x32b2c2){}}let _0x5719ad,_0x1b8f08;if(_0x4c8f99===_0x4c3b70(0x3f0))_0x5719ad=_0x4c3b70(0x3c7),_0x1b8f08=generateClash(_0x334e12,_0x4ad5f6);else{if(_0x4c8f99==='singbox'||_0x4c8f99==='sing-box')_0x5719ad='application/json',_0x1b8f08=generateSingbox(_0x334e12,_0x4ad5f6);else{if(_0x4c8f99===_0x4c3b70(0x3c0))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateSurge(_0x334e12,_0x4ad5f6);else{if(_0x4c8f99===_0x4c3b70(0x2ee))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateSurfboard(_0x334e12,_0x4ad5f6);else{if(_0x4c8f99==='loon')_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateLoon(_0x334e12,_0x4ad5f6);else{if(_0x4c8f99===_0x4c3b70(0x265)||_0x4c8f99===_0x4c3b70(0x15d))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateQuanX(_0x334e12,_0x4ad5f6);else{if(_0x4c8f99===_0x4c3b70(0x321)||_0x4c8f99==='raw')_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=_0x4ad5f6['join']('\x0a');else{if(_0x4c8f99===_0x4c3b70(0x3cc)||_0x4c8f99==='v2rayn'||_0x4c8f99===_0x4c3b70(0x2ac)||_0x4c8f99===_0x4c3b70(0x19d)||_0x4c8f99===_0x4c3b70(0x3da))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=_0x4ad5f6[_0x4c3b70(0x97)]('\x0a');else{if(_0x22b47c[_0x4c3b70(0x14e)](_0x4c3b70(0x3f0))||_0x22b47c[_0x4c3b70(0x14e)](_0x4c3b70(0x3da)))_0x5719ad='text/yaml',_0x1b8f08=generateClash(_0x334e12,_0x4ad5f6);else{if(_0x22b47c[_0x4c3b70(0x14e)](_0x4c3b70(0x253)))_0x5719ad=_0x4c3b70(0x329),_0x1b8f08=generateSingbox(_0x334e12,_0x4ad5f6);else{if(_0x22b47c[_0x4c3b70(0x14e)](_0x4c3b70(0x3c0)))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateSurge(_0x334e12,_0x4ad5f6);else{if(_0x22b47c[_0x4c3b70(0x14e)]('surfboard'))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateSurfboard(_0x334e12,_0x4ad5f6);else{if(_0x22b47c[_0x4c3b70(0x14e)](_0x4c3b70(0x2d9)))_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateLoon(_0x334e12,_0x4ad5f6);else _0x22b47c[_0x4c3b70(0x14e)]('quantumult')?(_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=generateQuanX(_0x334e12,_0x4ad5f6)):(_0x5719ad=_0x4c3b70(0x19c),_0x1b8f08=_0x4ad5f6[_0x4c3b70(0x97)]('\x0a'));}}}}}}}}}}}}return{'type':_0x5719ad,'body':_0x1b8f08,'issued':_0x2d78db};}const PANEL_HTML=String[_0x1dc4ca(0x2cf)]`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · Cloudflare 隧道面板</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0b0f14;--bg2:#0f141b;--card:#131a23;--card2:#182130;--border:#243041;
  --text:#e8eef6;--dim:#8fa3ba;--faint:#5c6f86;
  --accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);
  --ok:#34c98e;--ok-dim:rgba(52,201,142,.13);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13);--warn:#ffb454;
  --sb-bg:#0d131b;--sb-text:#9fb0c5;--sb-dim:#5c6f86;--sb-border:#1c2737;
  --sb-active-bg:rgba(246,130,31,.13);--sb-active-text:#ffa14d;--sb-active-bar:#f6821f;
  --shadow:0 10px 30px rgba(0,0,0,.28);
}
[data-theme="light"]{
  --bg:#f3f5f9;--bg2:#e9edf3;--card:#ffffff;--card2:#f6f8fb;--border:#dde4ee;
  --text:#1b2634;--dim:#5d6b7d;--faint:#93a1b3;
  --accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);
  --ok:#1f9d6a;--ok-dim:rgba(31,157,106,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--warn:#c07c1e;
  --sb-bg:#ffffff;--sb-text:#5d6b7d;--sb-dim:#a2aec0;--sb-border:#e7ebf2;
  --sb-active-bg:rgba(232,114,14,.09);--sb-active-text:#c96408;--sb-active-bar:#e8720e;
  --shadow:0 10px 28px rgba(30,45,70,.10);
}
html,body{height:100%}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.55}
.app{display:flex;min-height:100vh}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}

/* ===== 侧边栏 ===== */
.sidebar{width:236px;flex:0 0 236px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:50;transition:background .25s,border-color .25s}
.brand{display:flex;align-items:center;gap:10px;padding:18px 18px 14px}
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.2}
.brand .bt b{font-size:15px;letter-spacing:.3px;color:var(--text)}
.brand .bt span{font-size:11px;color:var(--sb-dim)}
.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:2px 0;border-radius:8px;color:var(--sb-text);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-size:13.5px;position:relative;transition:background .15s,color .15s}
.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor}
.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}
.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}
.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}
.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}
.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent;cursor:pointer;transition:border-color .15s,color .15s,background .15s}
.ver-chip:hover{color:var(--accent);border-color:var(--accent)}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}

/* ===== 主区 ===== */
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:40}
.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 10px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}
.pill.off{background:var(--err-dim);color:var(--err)}
.pill .dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.icon-btn:hover{border-color:var(--accent);color:var(--accent)}
.icon-btn svg{width:16px;height:16px;stroke:currentColor}
.hamb{display:none}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}

.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
.view{display:none}
.view.on{display:block;animation:fade .18s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}

/* ===== 卡片 ===== */
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card);transition:border-color .15s,color .15s,background .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px}
.card h3{font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.card .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px dashed var(--border);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim);white-space:nowrap}
.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}

/* ===== 表单 ===== */
.field{margin-bottom:12px}
.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}
input[type=text],input[type=password],input[type=number],select,textarea{
  width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:8px 11px;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s;
  font-family:inherit;
}
input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
textarea{resize:vertical;line-height:1.5;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238fa3ba' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
[data-theme="light"] select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235d6b7d' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")}
input[type=checkbox]{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.hint{font-size:12px;color:var(--dim);margin-top:6px;line-height:1.6}
.inrow{display:flex;gap:8px;align-items:flex-start}
.inrow>div{flex:1}
.inrow .btn{margin-top:1px;white-space:nowrap}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}

/* 开关 */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;transition:border-color .15s,background .15s,transform .05s;font-family:inherit;white-space:nowrap}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn:active{transform:translateY(1px)}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn.sm{padding:4px 10px;font-size:12px;border-radius:6px}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.row .grow{flex:1;min-width:140px}

/* 表格 */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* 消息与提示 */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;overflow:auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* 悬浮操作栏 */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* 分区 */
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.steps{list-style:none;counter-reset:st}
.steps li{counter-increment:st;position:relative;padding:0 0 14px 34px;font-size:13px;color:var(--dim)}
.steps li::before{content:counter(st);position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent2);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}
[data-theme="light"] .steps li::before{color:#c96408}
.steps li b{color:var(--text)}

/* ===== 响应式 ===== */
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
@media (max-width:960px){
  .sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .22s ease;box-shadow:var(--shadow)}
  .sidebar.open{transform:translateX(0)}
  .hamb{display:flex}
  .content{padding:16px 16px 96px}
  .topbar{padding:12px 16px}
  .grid2,.grid3{grid-template-columns:1fr}
}
@media (max-width:560px){
  th,td{padding:8px 8px}
}
</style>
</head>
<body>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>CFNext</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="icon-btn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="content" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（需开启自定义订阅模式，该模式内置六条常用订阅源，可自行增删）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置Cloudflare账户ID及API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="clash">Clash / Mihomo</option>
              <option value="singbox">Sing-box</option>
              <option value="surge">Surge</option>
              <option value="surfboard">Surfboard</option>
              <option value="loon">Loon</option>
              <option value="quanx">Quantumult X</option>
              <option value="v2ray">v2rayN / Shadowrocket</option>
              <option value="stash">Stash</option>
              <option value="plain">明文 vless</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6" checked><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">筛选按 地区 → IP 类型 → 运营商 逐级放宽，任一维度无节点时自动放宽，保证订阅始终非空。「运营商偏好」按节点名称中的运营商标记过滤（移动=移动/CM/CHINAMOBILE、联通=联通/CU/UNICOM、电信=电信/CT/CHINATELECOM），三个全选或节点池无任何运营商标记时不生效。「节点地区」支持多选，仅剔除明确标记为其它地区的节点。「地址来源」控制下发节点的来源：原生地址（工作器域名）、优选域名（第三方优选域名列表）、优选 IP（内置与实时拉取的优选 IP）、自定义优选（「优选配置」保存的优选列表）、随机优选（「优选配置」随机优选模式，与自定义优选互斥）。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控选项后即可在此查看当日用量；详细策略与自动调节见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH 与落地出站（保存后立即生效）</p></div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-vless" checked><span class="sl"></span></label><span>VLESS 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-trojan"><span class="sl"></span></label><span>Trojan 协议（支持Mihomo内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-xhttp"><span class="sl"></span></label><span>XHTTP 协议（支持Mihomo内核，须绑定自定义域名并开启gRPC）</span></div>
          <div class="field" style="margin-top:12px"><label>Trojan 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="Trojan 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）在开启「仅 TLS」后将从订阅中剔除。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点将附带 ech 参数与 alpn 协商，客户端需支持 ECH 才能生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地 IP（填写后作为固定出口优先使用；留空则直连失败后由内置地区反代兜底，格式 host 或 host:port）</label><input type="text" id="s-proxyIP" placeholder="留空则直连失败后走内置地区反代" autocomplete="off"></div>
        <div class="field"><label>出站代理（可选）</label><input type="text" id="s-outbound" placeholder="socks5://user:pass@1.2.3.4:1080 或 ss://chacha20-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 socks5://（可带 user:pass@）、http(s)://、ss:// 或 host:port（默认按 socks5，端口 1080）。SS 加密支持 aes-128-gcm / aes-256-gcm / chacha20-ietf-poly1305。</p>
        <div class="field" style="margin-bottom:0"><label>出站方式</label>
          <select id="s-outmode">
            <option value="">默认（优先代理，失败直连）</option>
            <option value="no">直连优先（no）</option>
            <option value="only">仅走代理（only）</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">所有配置修改后点击右下角「保存全部」才会写入 KV 并生效，保存成功后订阅地址与节点构成立即更新；「重置」将清空 KV 中全部数据并还原为初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="bestcf">优选 IP 列表（bestcf）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>测速端口</label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>自定义模式下追加默认节点</label>
            <select id="o-subinc">
              <option value="0">关闭（仅自定义节点）</option>
              <option value="1">开启（追加内置优选池与默认地区源）</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IP 格式 IP:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为可用 IP 下发。测速结果里的「加入优选」会把最优 IP 写入此列表，保存全部后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点直接下发，不经域名解析。</div>
        </div>
      </div>
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：当日用量达到免费额度 60% 后，节点上限按比例收缩（基准上限 1000 条）——60% 时下发 1000 条、70% 时 750 条、80% 时 500 条、90% 时 250 条、100% 时 100 条（保底下限），用量越高下发越少，保护账户免费额度。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="500"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 500，范围 1-1000），替代原轮询模式的 300/800 分档上限；勾选三种协议时节点总数仍为设定值（不再按协议 3 倍膨胀）。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性下发全部节点，不受 300/800 上限限制；开启后按格式上限轮换下发新 IP（200 条去重窗口，避免重复下发），TLS 端口随每次订阅刷新随机换新。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">严格封顶 / 去重窗口</span><span class="v">1,000 / 200 条</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求都会消耗 Worker 的 CPU 时间（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防，保证稳定运行。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（按生效优先级从高到低）：① 用量监控——查看当日请求量，为自动调节提供数据；② 自动调节——用量 ≥60% 时按比例收缩节点上限，位于计算链末端以 min 收敛，只收紧、永不放大，优先级最高且与轮询状态无关；③ 数量上限（下发控制）——按设定值精确限制，全局生效（轮询开/关均受限）；④ 格式分档与轮询去重——结构化/行式格式上限与轮询去重换新。各层上限冲突时取较小值，让订阅生成的 CPU 消耗始终处于免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>部署基础信息：UUID、面板路径、管理密码与绑定域名</p></div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>面板路径（访问入口，留空用 UUID）</label><input type="text" id="a-path" placeholder="留空自动使用 UUID" autocomplete="off"></div>
        <div class="field"><label>自定义订阅路径（只填 UUID/别名段，如 AAZ；留空用面板路径）</label><input type="text" id="a-suburl" placeholder="AAZ" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <div class="field" style="margin-bottom:0"><label>绑定域名（留空使用 *.workers.dev）</label><input type="text" id="a-host" placeholder="node.example.com" autocomplete="off"></div>
        <p class="hint" style="margin-top:10px">「绑定域名」仅用于订阅节点主机名（XHTTP 协议要求绑定自定义域名），不负责域名解析。自定义域名访问面板需先在 Cloudflare 面板 → Workers 与 Pages → 该 Worker → Domains &amp; Routes 添加自定义域名（DNS 由 Cloudflare 托管，证书自动签发），此字段留空即使用 *.workers.dev。KV 未绑定时配置只在内存中生效，重置后回到默认值。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项（可选）</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（<b>不是邮箱</b>），打开并登录Cloudflare账户后，点击「左侧栏」→「管理账户」→「帐户 API 令牌」→「创建令牌」。查询失败提示 401 时请检查这两项是否填错。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 格式导出全部面板设置（含协议、优选、筛选、配额监控），可保存到本地或迁移到其他部署；导入后请点右下角「保存全部」生效。</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">导出配置</button>
          <button class="btn" onclick="$('importFile').click()">导入配置</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>
        <div class="kv"><span class="k">轮询窗口</span><span class="v">最近 200 条</span></div>
        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>CFNext — Cloudflare 全新代理管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">youtube.com/@PAI_CN</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">t.me/SZ_PAI</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">本面板为全新独立设计/全新编写：后端代理、订阅与优选逻辑参考以下开源项目的功能清单</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>参考仓库</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">github.com/cmliu/edgetunnel</a></td></tr>
            <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">github.com/zizifn/edgetunnel</a></td></tr>
            <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">github.com/6Kmfi6HP/EDtunnel</a></td></tr>
            <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">github.com/IonRh/Cloudflare-BestIP</a></td></tr>
            <tr><td>zvos/CF-Workers-Monitor</td><td><a href="https://github.com/zvos/CF-Workers-Monitor" target="_blank" rel="noopener">github.com/zvos/CF-Workers-Monitor</a></td></tr>
            <tr><td>MetaCubeX/meta-rules-dat</td><td><a href="https://github.com/MetaCubeX/meta-rules-dat" target="_blank" rel="noopener">github.com/MetaCubeX/meta-rules-dat</a></td></tr>
            <tr><td>666OS/rules</td><td><a href="https://github.com/666OS/rules" target="_blank" rel="noopener">github.com/666OS/rules</a></td></tr>
            <tr><td>DustinWin/ruleset_geodata</td><td><a href="https://github.com/DustinWin/ruleset_geodata" target="_blank" rel="noopener">github.com/DustinWin/ruleset_geodata</a></td></tr>
            <tr><td>TG-Twilight/AWAvenue-Ads-Rule</td><td><a href="https://github.com/TG-Twilight/AWAvenue-Ads-Rule" target="_blank" rel="noopener">github.com/TG-Twilight/AWAvenue-Ads-Rule</a></td></tr>
            <tr><td>Koolson/Qure</td><td><a href="https://github.com/Koolson/Qure" target="_blank" rel="noopener">github.com/Koolson/Qure</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.090227.xyz/ip.164746.xyz</td></tr>
            <tr><td>bestcf 地区优选池</td><td class="mono">bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/PAICNI/CFNext/...</td></tr>
            <tr><td>远程规则集（sing-box / Clash）</td><td class="mono">raw.githubusercontent.com/MetaCubeX/meta-rules-dat/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(fallbackCopy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(fallbackCopy(t)); });
      setTimeout(function(){ fin(fallbackCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(fallbackCopy(t));
  }
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };
function buildNav(){
  var html = '';
  NAV.forEach(function(n){
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('sidebar').classList.remove('open');
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){
  var sv = $('sideVer');
  if (sv.classList.contains('checking')) return;
  sv.classList.add('checking');
  sv.textContent = '检测中…';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('检测更新失败，请稍后重试', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '混淆') ? '混淆版' : '明文版';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '混淆') ? '混淆' : '明文';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '检测到更新，已复制最新' + kind + '代码到剪贴板' : '检测到更新（v' + d.latest + '），复制失败，请前往仓库获取', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('检测到更新（v' + d.latest + '），但未能获取代码', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('已是最新版本（v' + d.current + ' ' + kindName + '）', 'ok');
    } else {
      toast('检测更新失败：' + (d.error || '仓库暂不可达'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('检测更新失败，请稍后重试', 'err');
  });
}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  if (/\.workers\.dev$/i.test(location.hostname)) $('wdwarn').style.display = 'block';
  api('status').then(function(r){
    if (r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if (r && r.ok){
      CFG = r.data;
      fillForm();
      renderAll();
      makeSub(false);
      setConn(true);
      refreshQuota();
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.href = '/login?next=' + encodeURIComponent(APIPATH);
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  var wd = !!(d.workersDev) || /\.workers\.dev$/i.test(location.hostname);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '当前为 *.workers.dev 域名：Cloudflare 可能限制该域名直连，若客户端更新订阅失败（提示无效订阅），请在客户端开启系统代理或「更新订阅使用代理」后重试；节点连接不受影响（直连优选 IP）。'
    : '';
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enableVless !== false) a.push('VLESS');
  if (CFG.enableTrojan) a.push('Trojan');
  if (CFG.enableXhttp) a.push('XHTTP');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 500) + ' 节点' : '—';
  var po = !(CFG && CFG.polling === false);
  $('qPoll').textContent = po ? '已开启（每轮换新 IP）' : '关闭（每次下发全部）';
  $('qPoll').className = 'v ' + (po ? 'ok' : '');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-vless').checked = CFG.enableVless !== false;
  $('en-trojan').checked = !!CFG.enableTrojan;
  $('tp-pass').value = CFG.trojanPassword || '';
  $('en-xhttp').checked = !!CFG.enableXhttp;
  $('tls-only').checked = !!CFG.tlsOnly;
  $('alpn').value = CFG.alpn || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 500;
  $('q-poll-on').checked = CFG.polling !== false;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-path').value = CFG.path || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-host').value = CFG.host || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('s-proxyIP').value = CFG.proxyIP || '';
  $('s-outbound').value = CFG.outboundProxy || '';
  $('s-outmode').value = CFG.outboundMode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (parseIps(s).length) ipLines.push(s); else domLines.push(s);
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  return {
    uuid: $('a-uuid').value.trim(),
    path: $('a-path').value.trim() || $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    host: $('a-host').value.trim(),
    alpn: $('alpn').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 500,
    polling: $('q-poll-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enableVless: $('en-vless').checked,
    enableTrojan: $('en-trojan').checked,
    trojanPassword: $('tp-pass').value,
    enableXhttp: $('en-xhttp').checked,
    proxyIP: $('s-proxyIP').value.trim(),
    outboundProxy: $('s-outbound').value.trim(),
    outboundMode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效', 'ok');
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
// 备份：把当前面板表单值收集成 JSON 下载（与保存配置同一套字段，恢复后可直接保存）
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = 'cfnext-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('配置已导出为 JSON', 'ok');
  } catch (e) { toast('导出失败：' + e.message, 'err'); }
}
// 恢复：读取 JSON 填充表单，标记未保存，由用户点「保存全部」写盘
function importConfig(input){
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    try {
      var data = JSON.parse(reader.result);
      CFG = Object.assign({}, CFG, data);
      fillForm();
      renderAll();
      markDirty();
      toast('配置已导入，请点「保存全部」生效', 'ok');
    } catch (e) { toast('导入失败：JSON 格式不正确', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  // 自定义订阅路径优先：自动保留当前域名（location.origin），只替换路径段；
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用面板路径。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（clash/singbox 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/sub$/, '').replace(/\/+$/, '') : '';
  var base = custom ? (location.origin + '/' + custom) : (location.origin + APIPATH);
  var u = base + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// Clash/Mihomo、Stash → clash://install-config（FlyClash / Clash Verge / Stash 扫码装订阅，配置名取订阅响应头 filename=CFNext）
// Sing-box → sing-box://import-remote-profile?url=...#CFNext（官方 scheme，# 后为配置文件名称）
// Surge → surge:///install-config（Surge 官方 scheme）
// auto / v2rayN+Shadowrocket / Loon / Quantumult X / 明文 → 直接使用订阅链接（Shadowrocket / Loon / QuanX 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === 'clash' || fmt === 'stash') return 'clash://install-config?url=' + enc;
  if (fmt === 'singbox') return 'sing-box://import-remote-profile?url=' + enc + '#CFNext';
  if (fmt === 'surge') return 'surge:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = 'cfnext-sub.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/clash|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(vless|trojan|ss|xhttp):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(vless|trojan|ss|xhttp):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
}
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();
</script>
</body>
</html>

`,loginHTML=_0x1dc4ca(0x2e3);function isBrowserUA(_0x43cca6){const _0x5ab1bd=_0x1dc4ca;return(_0x43cca6||'')[_0x5ab1bd(0x195)]()[_0x5ab1bd(0x14e)](_0x5ab1bd(0x3a9));}async function requireAuth(_0x282410,_0x54a15a){const _0x2fe588=_0x1dc4ca;if(!_0x54a15a[_0x2fe588(0x13c)])return!![];const _0x312d3b=_0x282410['headers'][_0x2fe588(0x1e3)](_0x2fe588(0x282))||'',_0x158667=_0x312d3b['match'](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x158667&&_0x158667[0x1]===md5hex(String(_0x54a15a[_0x2fe588(0x13c)])));}async function handleRequest(_0x29ae67,_0x306cda){const _0x2912c6=_0x1dc4ca,_0x2fbcd2=new URL(_0x29ae67[_0x2912c6(0x278)]),_0x77373=_0x29ae67[_0x2912c6(0x10f)][_0x2912c6(0x1e3)](_0x2912c6(0x2b5))||'',_0x177aef=(_0x29ae67[_0x2912c6(0x10f)][_0x2912c6(0x1e3)](_0x2912c6(0x95))||'')[_0x2912c6(0x195)]();if(_0x2fbcd2[_0x2912c6(0x3de)]===_0x2912c6(0x21a))return Response[_0x2912c6(0x3aa)](_0x2fbcd2[_0x2912c6(0x356)][_0x2912c6(0x3a4)]('http://',_0x2912c6(0x13f)),0x12d);const _0x575b73=await loadConfig(_0x306cda),_0x35e19d=_0x575b73[_0x2912c6(0x23e)]||_0x575b73[_0x2912c6(0xd1)],_0x38ece2=_0x2fbcd2[_0x2912c6(0x2ce)]['replace'](/^\/+|\/+$/g,''),_0x103985=_0x38ece2['split']('/');if(_0x103985[0x0]===_0x2912c6(0xfd))return json({'version':VERSION});if(_0x103985[0x0]===_0x2912c6(0xf8)){if(_0x29ae67[_0x2912c6(0x1ba)]==='POST'){const _0x1d47c5=await _0x29ae67[_0x2912c6(0x1e2)](),_0x4eb3a3=new URLSearchParams(_0x1d47c5);if(_0x4eb3a3['get'](_0x2912c6(0x389))===_0x575b73[_0x2912c6(0x13c)]){const _0x5665c9=md5hex(String(_0x575b73[_0x2912c6(0x13c)]));return new Response(JSON['stringify']({'ok':!![],'next':_0x4eb3a3[_0x2912c6(0x1e3)](_0x2912c6(0x25d))||'/'}),{'status':0xc8,'headers':{'Content-Type':_0x2912c6(0x1d1),'Set-Cookie':_0x2912c6(0x135)+_0x5665c9+_0x2912c6(0xd8)}});}return json({'ok':![],'msg':_0x2912c6(0x348)},0x193);}if(_0x575b73[_0x2912c6(0x13c)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':'text/html;\x20charset=utf-8'}});return Response[_0x2912c6(0x3aa)](new URL('/'+_0x35e19d,_0x29ae67[_0x2912c6(0x278)])[_0x2912c6(0x356)],0x12e);}const _0x5bda1a=String(_0x575b73[_0x2912c6(0x392)]||'')['trim']()[_0x2912c6(0x3a4)](/^\/+/,'')[_0x2912c6(0x3a4)](/\/+$/,''),_0x1422ee=_0x103985[0x0]===_0x35e19d||!!_0x5bda1a&&_0x103985[0x0]===_0x5bda1a;if(_0x103985[0x0]===''&&isBrowserUA(_0x77373))return Response[_0x2912c6(0x3aa)](new URL('/'+_0x35e19d,_0x29ae67[_0x2912c6(0x278)])[_0x2912c6(0x356)],0x12e);if(_0x1422ee&&_0x103985[_0x2912c6(0xea)]===0x1){if(_0x177aef===_0x2912c6(0x2d1))return handleWebSocketProxy(_0x29ae67,_0x575b73);if(_0x29ae67['method']===_0x2912c6(0xb6)){if(_0x575b73['enableXhttp'])try{return await handleXhttpProxy(_0x29ae67,_0x575b73);}catch(_0xc8af5f){return json({'ok':![],'msg':_0x2912c6(0xdf)+(_0xc8af5f['message']||_0xc8af5f)},0x1f4);}}}if(_0x1422ee&&(_0x103985[0x1]===_0x2912c6(0xbb)||_0x103985[_0x2912c6(0xea)]===0x1&&!isBrowserUA(_0x77373)&&!_0x77373[_0x2912c6(0x1cd)]('luma'))){const _0x1dae4d=_0x103985[_0x2912c6(0xea)]>=0x3?_0x103985[0x2]:'';try{let _0x33005f=null;if(_0x575b73['polling']!==![]&&_0x306cda['K']&&typeof _0x306cda['K']['get']===_0x2912c6(0x2a1))try{const _0x1783a5=await _0x306cda['K']['get'](_0x2912c6(0x33d));if(_0x1783a5){const _0x59a9bc=JSON[_0x2912c6(0x18f)](_0x1783a5);if(Array[_0x2912c6(0x218)](_0x59a9bc[_0x2912c6(0x1de)])&&_0x59a9bc[_0x2912c6(0x1de)][_0x2912c6(0xea)])_0x33005f=new Set(_0x59a9bc[_0x2912c6(0x1de)]);}}catch(_0x441227){}const _0x5bed38=_0x33005f?Object['assign']({},_0x575b73,{'_skipIssued':_0x33005f}):_0x575b73;if(_0x575b73['quotaAuto'])try{const _0x544262=await getQuota(_0x306cda,_0x575b73);if(_0x544262['configured']&&_0x544262[_0x2912c6(0x174)]&&_0x544262['today'][_0x2912c6(0x37e)]>=Math[_0x2912c6(0xb3)](QUOTA_LIMIT*0.6)){const _0x5ac9b5=_0x544262[_0x2912c6(0x174)]['requests']/_0x544262['limit'],_0x115e57=Math['max'](0.1,(0x1-_0x5ac9b5)/0.4);_0x5bed38[_0x2912c6(0x3b1)]=Math[_0x2912c6(0x1aa)](0x14,Math[_0x2912c6(0xb3)](0x3e8*_0x115e57));}}catch(_0x1d0df4){}const _0x5e0073=await generateSubscription(_0x5bed38,_0x29ae67[_0x2912c6(0x278)],_0x1dae4d,_0x77373,_0x29ae67['cf']&&_0x29ae67['cf'][_0x2912c6(0xf5)]);if(_0x575b73[_0x2912c6(0xae)]!==![]&&_0x306cda['K']&&typeof _0x306cda['K']['put']===_0x2912c6(0x2a1)&&_0x5e0073[_0x2912c6(0x33d)]&&_0x5e0073['issued'][_0x2912c6(0xea)]){const _0x137eb1=_0x33005f?Array['from'](_0x33005f):[],_0x3a2bc0=[...new Set([..._0x5e0073['issued'],..._0x137eb1])][_0x2912c6(0x9e)](0x0,0xc8),_0x49cabd=_0x3a2bc0[_0x2912c6(0xea)]!==_0x137eb1[_0x2912c6(0xea)]||_0x3a2bc0[_0x2912c6(0x376)]((_0x298492,_0x29caf2)=>_0x298492!==_0x137eb1[_0x29caf2]);if(_0x49cabd){const _0x776b21=JSON[_0x2912c6(0x249)]({'t':Date[_0x2912c6(0x34b)](),'ips':_0x3a2bc0});if(_0x306cda[_0x2912c6(0x237)]&&typeof _0x306cda['_ctx'][_0x2912c6(0xfe)]===_0x2912c6(0x2a1))_0x306cda[_0x2912c6(0x237)][_0x2912c6(0xfe)](_0x306cda['K']['put'](_0x2912c6(0x33d),_0x776b21)[_0x2912c6(0x3f3)](()=>{}));else await _0x306cda['K'][_0x2912c6(0x28e)](_0x2912c6(0x33d),_0x776b21)[_0x2912c6(0x3f3)](()=>{});}}return new Response(_0x5e0073[_0x2912c6(0x1b5)],{'status':0xc8,'headers':{'Content-Type':_0x5e0073[_0x2912c6(0x121)]+_0x2912c6(0x25f),'Cache-Control':_0x2912c6(0x313),'Content-Disposition':_0x2912c6(0x361)}});}catch(_0x398308){return new Response('订阅生成失败:\x20'+(_0x398308&&_0x398308[_0x2912c6(0x34f)]||_0x398308),{'status':0x1f4,'headers':{'Content-Type':_0x2912c6(0x2b4)}});}}if(_0x1422ee&&_0x103985['length']===0x1&&isBrowserUA(_0x77373)){if(!await requireAuth(_0x29ae67,_0x575b73))return Response[_0x2912c6(0x3aa)](new URL(_0x2912c6(0x3f6)+encodeURIComponent('/'+_0x35e19d),_0x29ae67[_0x2912c6(0x278)])[_0x2912c6(0x356)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x2912c6(0xe8)}});}if(_0x1422ee&&_0x103985[0x1]==='api'){const _0x58002b=_0x103985[0x2]||'',_0x49d5d4=await requireAuth(_0x29ae67,_0x575b73);if(!_0x49d5d4)return json({'ok':![],'status':0x193,'msg':_0x2912c6(0xba)},0x193);if(_0x58002b===_0x2912c6(0xe5)){if(_0x29ae67[_0x2912c6(0x1ba)]==='GET')return json({'ok':!![],'data':Object['assign']({},_0x575b73,{'version':VERSION})});if(_0x29ae67[_0x2912c6(0x1ba)]===_0x2912c6(0xb6))try{const _0x66767c=await _0x29ae67[_0x2912c6(0x264)]();let _0x5d0842=![];if(_0x306cda['K']&&typeof _0x306cda['K']['get']===_0x2912c6(0x2a1))try{const _0x3d3414=await _0x306cda['K'][_0x2912c6(0x1e3)](_0x2912c6(0xe5),{'cacheTtl':0x1e});if(_0x3d3414){const _0x95ad44=JSON[_0x2912c6(0x18f)](_0x3d3414);if(_0x95ad44[_0x2912c6(0xc2)]!==undefined)_0x5d0842=!![];}}catch(_0x51d7ea){}const _0x1c3178=Object[_0x2912c6(0x108)](JSON['parse'](JSON[_0x2912c6(0x249)](_0x575b73)),_0x66767c);if(!_0x5d0842&&_0x1c3178[_0x2912c6(0xc2)]===![]){const _0x137f2c=Boolean(_0x1c3178[_0x2912c6(0x221)]&&_0x1c3178['cfApiToken']||_0x306cda[_0x2912c6(0x3d3)]&&_0x306cda[_0x2912c6(0x34d)]);if(_0x137f2c)_0x1c3178[_0x2912c6(0xc2)]=!![];}if(_0x66767c[_0x2912c6(0x2f8)]&&typeof _0x66767c[_0x2912c6(0x2f8)]===_0x2912c6(0x374))_0x1c3178[_0x2912c6(0x2f8)]=Object[_0x2912c6(0x108)](_0x1c3178['optimizer'],_0x66767c['optimizer']);if(_0x66767c[_0x2912c6(0x2ad)]&&Array[_0x2912c6(0x218)](_0x66767c[_0x2912c6(0x2ad)]))_0x1c3178[_0x2912c6(0x2ad)]=_0x66767c[_0x2912c6(0x2ad)];await saveConfig(_0x306cda,_0x1c3178);const _0x1e33ba=await loadConfig(_0x306cda,_0x29ae67[_0x2912c6(0x278)]);return json({'ok':!![],'data':Object[_0x2912c6(0x108)]({},_0x1e33ba,{'version':VERSION}),'msg':_0x2912c6(0x15e)});}catch(_0x10f266){return json({'ok':![],'msg':'保存失败:\x20'+(_0x10f266[_0x2912c6(0x34f)]||_0x10f266)},0x1f4);}}if(_0x58002b===_0x2912c6(0x179)){if(_0x29ae67[_0x2912c6(0x1ba)]!=='POST')return json({'ok':![],'msg':_0x2912c6(0x1eb)},0x195);try{if(!_0x306cda['K']||typeof _0x306cda['K'][_0x2912c6(0xc5)]!==_0x2912c6(0x2a1))return json({'ok':![],'msg':_0x2912c6(0xc8)},0x190);return await _0x306cda['K'][_0x2912c6(0xc5)](_0x2912c6(0xe5)),await _0x306cda['K']['delete']('issued'),invalidateConfigCache(),json({'ok':!![],'msg':'已重置：KV\x20已清空，面板还原为初始部署状态'});}catch(_0x4e29be){return json({'ok':![],'msg':_0x2912c6(0x240)+(_0x4e29be['message']||_0x4e29be)},0x1f4);}}if(_0x58002b==='status')return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()==='obfuscated'?_0x2912c6(0x3bc):_0x2912c6(0x161),'host':_0x2fbcd2['hostname'],'path':_0x35e19d,'region':_0x29ae67['cf']&&_0x29ae67['cf'][_0x2912c6(0xf5)]||_0x2912c6(0x159),'kv':!!(_0x306cda['K']&&typeof _0x306cda['K'][_0x2912c6(0x1e3)]==='function'),'workersDev':/\.workers\.dev$/i[_0x2912c6(0x122)](_0x2fbcd2['hostname'])}});if(_0x58002b===_0x2912c6(0x12a))try{const _0x2b8ec4=await checkUpdate(_0x306cda),_0x34c297={'current':_0x2b8ec4[_0x2912c6(0x2fd)],'latest':_0x2b8ec4[_0x2912c6(0x393)],'hasUpdate':_0x2b8ec4[_0x2912c6(0x9c)],'kind':_0x2b8ec4['kind'],'error':_0x2b8ec4[_0x2912c6(0x103)]||''};if(_0x2b8ec4['hasUpdate']&&_0x2b8ec4['code'])_0x34c297[_0x2912c6(0x171)]=_0x2b8ec4['code'];return json({'ok':!![],'data':_0x34c297});}catch(_0x5c0bf0){return json({'ok':![],'msg':_0x2912c6(0x102)+(_0x5c0bf0[_0x2912c6(0x34f)]||_0x5c0bf0)},0x1f4);}if(_0x58002b===_0x2912c6(0x184))try{const _0x1aee38=await getQuota(_0x306cda,_0x575b73);return json({'ok':!![],'data':_0x1aee38});}catch(_0x5e3abc){return json({'ok':![],'msg':_0x2912c6(0x182)+(_0x5e3abc['message']||_0x5e3abc)},0x1f4);}if(_0x58002b===_0x2912c6(0xbb)){const _0x5049da=_0x2fbcd2['searchParams'][_0x2912c6(0x1e3)](_0x2912c6(0x2e4))||'';try{const _0x3879a7=await generateSubscription(_0x575b73,_0x29ae67[_0x2912c6(0x278)],_0x5049da,_0x77373,_0x29ae67['cf']&&_0x29ae67['cf'][_0x2912c6(0xf5)]);return json({'ok':!![],'type':_0x3879a7[_0x2912c6(0x121)],'body':_0x3879a7[_0x2912c6(0x1b5)]});}catch(_0x410baf){return json({'ok':![],'msg':_0x2912c6(0x31a)+(_0x410baf[_0x2912c6(0x34f)]||_0x410baf)},0x1f4);}}if(_0x58002b===_0x2912c6(0xad)){if(_0x29ae67[_0x2912c6(0x1ba)]!==_0x2912c6(0xb6))return json({'ok':![],'msg':_0x2912c6(0x1eb)},0x195);try{const _0x2de092=await _0x29ae67[_0x2912c6(0x264)]()[_0x2912c6(0x3f3)](()=>({})),_0x1d0160=await collectCandidates(Object[_0x2912c6(0x108)]({},_0x575b73[_0x2912c6(0x2f8)],_0x2de092));if(!_0x1d0160[_0x2912c6(0xad)][_0x2912c6(0xea)]){const _0x117855=_0x1d0160[_0x2912c6(0x21f)]||{},_0x21fcb0=[_0x117855[_0x2912c6(0x399)]&&_0x2912c6(0x148)+_0x117855[_0x2912c6(0x399)],_0x117855['customErr']&&_0x2912c6(0x11a)+_0x117855[_0x2912c6(0x243)]][_0x2912c6(0x13b)](Boolean)['join']('；');return json({'ok':![],'msg':_0x2912c6(0x28d)+(_0x21fcb0?'（'+_0x21fcb0+'）':_0x2912c6(0x364))},0x190);}return json({'ok':!![],'data':_0x1d0160[_0x2912c6(0xad)],'stats':_0x1d0160['stats']});}catch(_0x5c4cbc){return json({'ok':![],'msg':_0x2912c6(0x360)+(_0x5c4cbc[_0x2912c6(0x34f)]||_0x5c4cbc)},0x1f4);}}if(_0x58002b===_0x2912c6(0x3f1))try{const _0x588e74=OPTIMIZE_SOURCES[_0x2fbcd2[_0x2912c6(0x241)][_0x2912c6(0x1e3)]('source')||_0x2912c6(0x3b5)]||OPTIMIZE_SOURCES[_0x2912c6(0x3b5)],_0x1957c9=await fetch(_0x588e74[_0x2912c6(0x278)],{'headers':{'User-Agent':_0x2912c6(0x1f7)}});if(!_0x1957c9['ok'])return json({'ok':![],'msg':'拉取失败\x20HTTP\x20'+_0x1957c9[_0x2912c6(0x275)]});const _0xa9a266=extractDomains(await _0x1957c9[_0x2912c6(0x1e2)]());return json({'ok':!![],'data':_0xa9a266});}catch(_0x32ec0f){return json({'ok':![],'msg':_0x2912c6(0x360)+(_0x32ec0f[_0x2912c6(0x34f)]||_0x32ec0f)},0x1f4);}return json({'ok':![],'msg':_0x2912c6(0x307)+_0x58002b},0x194);}return new Response(_0x2912c6(0x247),{'status':0x194});}async function handleScheduled(_0x271e76,_0x48662f,_0x382657){const _0x55c80f=_0x1dc4ca,_0x1d9f6f=String(_0x48662f[_0x55c80f(0x1bc)]||'')[_0x55c80f(0x195)]();if(_0x1d9f6f!=='1'&&_0x1d9f6f!==_0x55c80f(0x3e2))return;try{const _0xc3c853=await loadConfig(_0x48662f),_0x53a365=await collectCandidates(_0xc3c853['optimizer']),_0x573e71=_0x53a365[_0x55c80f(0xad)]||[];if(!_0x573e71[_0x55c80f(0xea)])return;const _0x49ab07=await runLatencyTest(_0x573e71,_0xc3c853[_0x55c80f(0x2f8)][_0x55c80f(0x21c)]||0x5,0x1388),_0x4c2aef=_0x49ab07[_0x55c80f(0x13b)](_0x946e39=>_0x946e39['ok'])[_0x55c80f(0x9e)](0x0,_0xc3c853['optimizer'][_0x55c80f(0x312)]||0x14);if(!_0x4c2aef[_0x55c80f(0xea)])return;_0xc3c853['preferredIPs']=_0x4c2aef['map'](_0x5201a7=>({'ip':_0x5201a7['ip'],'port':_0x5201a7[_0x55c80f(0x16a)]||0x1bb,'name':''})),await saveConfig(_0x48662f,_0xc3c853);}catch(_0x250718){}}export default{async 'fetch'(_0x171598,_0x7e746c,_0x148f0c){const _0x4a78ed=_0x1dc4ca;return handleRequest(_0x171598,Object[_0x4a78ed(0x108)]({},_0x7e746c,{'_ctx':_0x148f0c}));},async 'scheduled'(_0x5ec910,_0x53fa9e,_0x58d2fe){return handleScheduled(_0x5ec910,_0x53fa9e,_0x58d2fe);}};