const _0x247a15=_0x2ca5;(function(_0x4cd1f9,_0x2c2354){const _0xc877cb=_0x2ca5,_0x5402ab=_0x4cd1f9();while(!![]){try{const _0x4d49fe=-parseInt(_0xc877cb(0x237))/0x1*(-parseInt(_0xc877cb(0x204))/0x2)+-parseInt(_0xc877cb(0x1f5))/0x3+-parseInt(_0xc877cb(0x23a))/0x4+-parseInt(_0xc877cb(0x20b))/0x5+parseInt(_0xc877cb(0x23e))/0x6*(parseInt(_0xc877cb(0x24a))/0x7)+parseInt(_0xc877cb(0x203))/0x8+parseInt(_0xc877cb(0x216))/0x9;if(_0x4d49fe===_0x2c2354)break;else _0x5402ab['push'](_0x5402ab['shift']());}catch(_0x38e590){_0x5402ab['push'](_0x5402ab['shift']());}}}(_0x5419,0x30538));function _0x2ca5(_0x527ca1,_0x50d2cf){const _0x54197a=_0x5419();return _0x2ca5=function(_0x2ca57c,_0x104dec){_0x2ca57c=_0x2ca57c-0x1e3;let _0x4842f1=_0x54197a[_0x2ca57c];return _0x4842f1;},_0x2ca5(_0x527ca1,_0x50d2cf);}const fs=require('fs'),chalk=require(_0x247a15(0x219)),moment=require(_0x247a15(0x244)),{default:makeWASocket,getContentType,downloadContentFromMessage,generateForwardMessageContent,generateWAMessageFromContent}=require(_0x247a15(0x1ec)),{decodeJid}=require(_0x247a15(0x233)),{ownerNumber,ownerName,limitAwal}=require(_0x247a15(0x23d)),store=require(_0x247a15(0x226));function _0x5419(){const _0x5b6c15=['premium','downloadMediaMessage','@store','join','Asia/Jakarta','relayMessage','@s.whatsapp.net','conversation','expired','ucapanWaktu','[()+-/\x20+/]','ext','Primordial\x20Glory','@g.us','botNumber','@libs/function','documentWithCaptionMessage','unwatchFile','defineProperty','71795vBxpXr','\x0aEND:VCARD','type','947348WNWHcU','trim','name','@config','48sTZdgy','args','pushName','contextInfo','remoteJid','participant','moment-timezone','chat','senderNumber','text','Low\x20Tier','isMention','108241FmgNgC','user','owner','writeFileSync','11:00:00','sewa','users','input','whiteBright','audioMessage','serialize','imageMessage','log','Selamat\x20siang','viewOnceMessage','senderKeyDistributionMessage','HH:mm:ss','mentionedJid','budy','sendContact','Selamat\x20malam','videoMessage','vip','extendedTextMessage','number','quoted','message','06:00:00','cache','isPremium','from','makeWASocket','slice','\x20Kontak','limit','\x0aTEL;type=CELL;type=VOICE;waid=','send','chats','Unlimited','stanzaId','baileys','keys','downloadAndSaveMediaMessage','includes','caption','contactMessage','quotedMessage','file-type','concat','292758ktpsYX','watchFile','timeWib','Selamat\x20pagi','isOwner','fromMe','18:00:00','status','messageContextInfo','stringify','fetchBlocklist','23:59:00','level','format','936040OFKzcr','10gvlGZZ','No\x20Name','forwardingScore','sendMessage','documentMessage','replace','body','1340815BUfNrs','red','resolve','BEGIN:VCARD\x0aVERSION:3.0\x0aFN:','isSewa','locationMessage','stickerMessage','balance','split','Selamat\x20sore','contactsArrayMessage','1807614TOECWk','viewOnceMessageV2','copyNForward','chalk','19:00:00','sendKontak','push','isCreator','sender','key','length','[\x20UPDATE\x20]','reset','Message'];_0x5419=function(){return _0x5b6c15;};return _0x5419();}exports[_0x247a15(0x1e3)]=_0x176db5=>{const _0x299a84=_0x247a15,_0x43249d=makeWASocket(_0x176db5);return _0x43249d[_0x299a84(0x218)]=async(_0x28e688,_0x593246,_0x449150=!![],_0x1bceab={})=>{const _0x36017a=_0x299a84;let _0x1589f7=generateForwardMessageContent(_0x593246,!!_0x449150),_0x238086=Object[_0x36017a(0x1ed)](_0x1589f7)[0x0];if(_0x449150&&typeof _0x449150==_0x36017a(0x262)&&_0x449150>0x1)_0x1589f7[_0x238086][_0x36017a(0x241)][_0x36017a(0x206)]+=_0x449150;return _0x1589f7=generateWAMessageFromContent(_0x28e688,_0x1589f7,{..._0x1bceab,'userJid':_0x43249d[_0x36017a(0x24b)]['id']}),await _0x43249d[_0x36017a(0x229)](_0x28e688,_0x1589f7[_0x36017a(0x264)],{'messageId':_0x1589f7[_0x36017a(0x21f)]['id'],'additionalAttributes':{..._0x1bceab}}),_0x1589f7;},_0x43249d[_0x299a84(0x1ee)]=async(_0x4f64ce,_0x2ec5ba)=>{const _0x97e54b=_0x299a84,{fromBuffer:_0x1f9ae2}=require(_0x97e54b(0x1f3)),_0x78f67d=[_0x97e54b(0x217),_0x97e54b(0x258),_0x97e54b(0x234)][_0x97e54b(0x1ef)](_0x4f64ce[_0x97e54b(0x239)])?getContentType(_0x4f64ce['message'])['split'](_0x97e54b(0x223))[0x0]:_0x4f64ce[_0x97e54b(0x239)][_0x97e54b(0x213)](_0x97e54b(0x223))[0x0],_0x20a127=await downloadContentFromMessage(_0x4f64ce[_0x97e54b(0x264)][_0x78f67d+_0x97e54b(0x223)],_0x78f67d);let _0xc886fb=Buffer[_0x97e54b(0x268)]([]);for await(const _0x302ea4 of _0x20a127){_0xc886fb=Buffer[_0x97e54b(0x1f4)]([_0xc886fb,_0x302ea4]);}let _0x4a6b0d=await _0x1f9ae2(_0xc886fb);return await fs[_0x97e54b(0x24d)](_0x2ec5ba+'.'+_0x4a6b0d[_0x97e54b(0x22f)],_0xc886fb),_0x2ec5ba+'.'+_0x4a6b0d[_0x97e54b(0x22f)];},_0x43249d[_0x299a84(0x225)]=async _0xf715e6=>{const _0x1236d4=_0x299a84,_0x462daf=[_0x1236d4(0x217),'viewOnceMessage',_0x1236d4(0x234)][_0x1236d4(0x1ef)](_0xf715e6[_0x1236d4(0x239)])?getContentType(_0xf715e6['message'])[_0x1236d4(0x213)](_0x1236d4(0x223))[0x0]:_0xf715e6[_0x1236d4(0x239)][_0x1236d4(0x213)](_0x1236d4(0x223))[0x0],_0x5c3711=await downloadContentFromMessage(_0xf715e6['message'][_0x462daf+'Message'],_0x462daf);let _0x4c2ca0=Buffer[_0x1236d4(0x268)]([]);for await(const _0x359ea2 of _0x5c3711){_0x4c2ca0=Buffer[_0x1236d4(0x1f4)]([_0x4c2ca0,_0x359ea2]);}return _0x4c2ca0;},_0x43249d[_0x299a84(0x25d)]=async(_0x1ffd7c,_0x51e9cd,_0x1449ae,_0x1aea77,_0x651e22)=>{const _0x1e444f=_0x299a84;let _0x235d7d=_0x51e9cd['replace'](new RegExp(_0x1e444f(0x22e),'gi'),'')+'@s.whatsapp.net',_0x4ac467='BEGIN:VCARD\x0aVERSION:3.0\x0aFN:'+_0x1449ae['replace'](/\n/g,'\x5cn')+_0x1e444f(0x1e7)+_0x51e9cd+':'+_0x51e9cd+_0x1e444f(0x238);return await _0x43249d['sendMessage'](_0x1ffd7c,{'contacts':{'displayName':''+_0x1449ae,'contacts':[{'vcard':_0x4ac467}],..._0x651e22}},{'quoted':_0x1aea77,..._0x651e22});},_0x43249d[_0x299a84(0x21b)]=async(_0x460be0,_0x20e51c,_0x3e7423,_0x2aa07e)=>{const _0x5dca77=_0x299a84,_0x485514=[];for(let _0x21b869 of _0x20e51c){const _0x259e38=_0x21b869==ownerNumber+_0x5dca77(0x22a)?ownerName:Object[_0x5dca77(0x1ed)](db[_0x5dca77(0x250)])[_0x5dca77(0x1ef)](_0x21b869)?db['users'][_0x21b869][_0x5dca77(0x23c)]:_0x21b869[_0x5dca77(0x213)]('@')[0x0];_0x485514[_0x5dca77(0x21c)]({'vcard':_0x5dca77(0x20e)+_0x259e38[_0x5dca77(0x209)](/\n/g,'\x5cn')+_0x5dca77(0x1e7)+_0x21b869[_0x5dca77(0x213)]('@')[0x0]+':'+_0x21b869[_0x5dca77(0x213)]('@')[0x0]+'\x0aEND:VCARD'});}return await _0x43249d[_0x5dca77(0x207)](_0x460be0,{'contacts':{'displayName':_0x485514[_0x5dca77(0x220)]+_0x5dca77(0x1e5),'contacts':_0x485514,..._0x2aa07e}},{'quoted':_0x3e7423,..._0x2aa07e});},Object[_0x299a84(0x236)](_0x43249d,_0x299a84(0x23c),{'value':{...{}},'configurable':!![]}),_0x43249d;},exports[_0x247a15(0x254)]=async(_0x450663,_0x28e2c0)=>{const _0x38a987=_0x247a15,_0x900750={},_0x4165ff={};_0x28e2c0[_0x38a987(0x21f)]&&(_0x900750[_0x38a987(0x21f)]={'id':_0x28e2c0[_0x38a987(0x21f)]['id'],'fromMe':_0x28e2c0[_0x38a987(0x21f)][_0x38a987(0x1fa)],'remoteJid':_0x28e2c0[_0x38a987(0x21f)][_0x38a987(0x242)],'participant':_0x28e2c0?.[_0x38a987(0x21f)]?.['participant']||''},_0x900750[_0x38a987(0x245)]=_0x900750[_0x38a987(0x21f)]['remoteJid'],_0x900750['isGroup']=_0x900750[_0x38a987(0x245)]['endsWith'](_0x38a987(0x231)),_0x900750['sender']=decodeJid(_0x900750[_0x38a987(0x21f)][_0x38a987(0x1fa)]&&_0x450663[_0x38a987(0x24b)]['id']||_0x900750['key'][_0x38a987(0x243)]||_0x900750[_0x38a987(0x245)]||''),_0x900750[_0x38a987(0x246)]=_0x900750[_0x38a987(0x21e)]['split']('@')[0x0]);_0x900750[_0x38a987(0x239)]=![_0x38a987(0x259),_0x38a987(0x1fd)][_0x38a987(0x1ef)](Object['keys'](_0x28e2c0[_0x38a987(0x264)])[0x0])&&Object[_0x38a987(0x1ed)](_0x28e2c0['message'])[0x0]||Object[_0x38a987(0x1ed)](_0x28e2c0[_0x38a987(0x264)])[_0x38a987(0x220)]>=0x3&&Object[_0x38a987(0x1ed)](_0x28e2c0[_0x38a987(0x264)])[0x1]!==_0x38a987(0x1fd)&&Object[_0x38a987(0x1ed)](_0x28e2c0['message'])[0x1]||Object[_0x38a987(0x1ed)](_0x28e2c0[_0x38a987(0x264)])[Object[_0x38a987(0x1ed)](_0x28e2c0[_0x38a987(0x264)])['length']-0x1];if(Object[_0x38a987(0x1ed)](db['message'])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])){if(_0x900750[_0x38a987(0x239)]=='extendedTextMessage')db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db['message'][_0x900750[_0x38a987(0x21e)]]['key']=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['message']={'extendedTextMessage':_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750['type']==_0x38a987(0x22b))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x264)]={'conversation':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750['type']==_0x38a987(0x255))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['type']=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750['sender']][_0x38a987(0x264)]={'imageMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750['type']]};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x25f))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750['sender']][_0x38a987(0x21f)]=_0x900750['key'],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['message']={'videoMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750['type']]};else{if(_0x900750['type']=='stickerMessage')db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750['sender']][_0x38a987(0x21f)]=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x264)]={'stickerMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750['type']==_0x38a987(0x253))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750['key'],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x264)]={'audioMessage':_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x258))db[_0x38a987(0x264)][_0x900750['sender']][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['key']=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['message']={'viewOnceMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750['type']==_0x38a987(0x217))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db['message'][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750['sender']]['message']={'viewOnceMessageV2':_0x28e2c0[_0x38a987(0x264)][_0x900750['type']]};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x1f1))db['message'][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750['sender']][_0x38a987(0x264)]={'contactMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x215))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750['sender']][_0x38a987(0x21f)]=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x264)]={'contactsArrayMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x210))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db['message'][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750['key'],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x264)]={'locationMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x208))db[_0x38a987(0x264)][_0x900750['sender']]['type']=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x21f)]=_0x900750['key'],db['message'][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x264)]={'documentMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]};else _0x900750[_0x38a987(0x239)]=='documentWithCaptionMessage'&&(db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x239)]=_0x900750[_0x38a987(0x239)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['key']=_0x900750[_0x38a987(0x21f)],db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]['message']={'documentWithCaptionMessage':_0x28e2c0['message'][_0x900750['type']]});}}}}}}}}}}}}else{if(!Object['keys'](db[_0x38a987(0x264)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])){if(_0x900750[_0x38a987(0x239)]=='extendedTextMessage')db['message'][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'extendedTextMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x22b))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750['key'],'message':{'conversation':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]=='imageMessage')db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'imageMessage':_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750['type']=='videoMessage')db['message'][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'videoMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x211))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'stickerMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x253))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'audioMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750['type']]}};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x258))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750['type'],'key':_0x900750[_0x38a987(0x21f)],'message':{'viewOnceMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x217))db['message'][_0x900750['sender']]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'viewOnceMessageV2':_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750['type']==_0x38a987(0x1f1))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750['type'],'key':_0x900750[_0x38a987(0x21f)],'message':{'contactMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]==_0x38a987(0x215))db['message'][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'contactsArrayMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750[_0x38a987(0x239)]=='locationMessage')db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'locationMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}};else{if(_0x900750['type']==_0x38a987(0x208))db[_0x38a987(0x264)][_0x900750[_0x38a987(0x21e)]]={'type':_0x900750['type'],'key':_0x900750[_0x38a987(0x21f)],'message':{'documentMessage':_0x28e2c0['message'][_0x900750['type']]}};else _0x900750[_0x38a987(0x239)]==_0x38a987(0x234)&&(db[_0x38a987(0x264)][_0x900750['sender']]={'type':_0x900750[_0x38a987(0x239)],'key':_0x900750[_0x38a987(0x21f)],'message':{'documentWithCaptionMessage':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]}});}}}}}}}}}}}}}[_0x38a987(0x258),_0x38a987(0x217),_0x38a987(0x234)][_0x38a987(0x1ef)](_0x900750['type'])&&(_0x28e2c0[_0x38a987(0x264)]=_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x264)]);_0x900750[_0x38a987(0x20a)]=_0x900750[_0x38a987(0x239)]==_0x38a987(0x22b)?_0x28e2c0[_0x38a987(0x264)]['conversation']:_0x900750[_0x38a987(0x239)]=='extendedTextMessage'?_0x28e2c0[_0x38a987(0x264)][_0x38a987(0x261)][_0x38a987(0x247)]:_0x900750[_0x38a987(0x239)]==_0x38a987(0x255)?_0x28e2c0[_0x38a987(0x264)][_0x38a987(0x255)][_0x38a987(0x1f0)]:_0x900750['type']==_0x38a987(0x25f)?_0x28e2c0[_0x38a987(0x264)][_0x38a987(0x25f)][_0x38a987(0x1f0)]:_0x900750[_0x38a987(0x239)]==_0x38a987(0x258)?_0x28e2c0[_0x38a987(0x264)][getContentType(_0x28e2c0[_0x38a987(0x264)])]?.[_0x38a987(0x1f0)]:_0x900750[_0x38a987(0x239)]==_0x38a987(0x217)?_0x28e2c0['message'][getContentType(_0x28e2c0[_0x38a987(0x264)])]?.['caption']:_0x900750[_0x38a987(0x239)]==_0x38a987(0x234)?_0x28e2c0[_0x38a987(0x264)][_0x38a987(0x208)][_0x38a987(0x1f0)]:'',_0x900750[_0x38a987(0x25c)]=_0x900750[_0x38a987(0x239)]==_0x38a987(0x22b)?_0x28e2c0['message'][_0x38a987(0x22b)]:_0x900750[_0x38a987(0x239)]=='extendedTextMessage'?_0x28e2c0[_0x38a987(0x264)][_0x38a987(0x261)]['text']:'',_0x900750['args']=_0x900750[_0x38a987(0x20a)][_0x38a987(0x23b)]()[_0x38a987(0x213)](/ +/)['slice'](0x1),_0x900750[_0x38a987(0x247)]=_0x900750?.[_0x38a987(0x23f)]?.[_0x38a987(0x227)]('\x20'),_0x900750[_0x38a987(0x232)]=decodeJid(_0x450663[_0x38a987(0x24b)]['id']),_0x900750['listBlock']=await _0x450663[_0x38a987(0x1ff)](),_0x900750[_0x38a987(0x240)]=_0x28e2c0[_0x38a987(0x240)],_0x900750[_0x38a987(0x1f7)]=moment()['tz'](_0x38a987(0x228))[_0x38a987(0x202)](_0x38a987(0x25a));_0x900750[_0x38a987(0x1f7)]<_0x38a987(0x200)&&(_0x900750['ucapanWaktu']=_0x38a987(0x25e));_0x900750[_0x38a987(0x1f7)]<_0x38a987(0x21a)&&(_0x900750[_0x38a987(0x22d)]=_0x38a987(0x25e));_0x900750['timeWib']<_0x38a987(0x1fb)&&(_0x900750[_0x38a987(0x22d)]='Selamat\x20sore');_0x900750[_0x38a987(0x1f7)]<'15:00:00'&&(_0x900750[_0x38a987(0x22d)]=_0x38a987(0x257));_0x900750[_0x38a987(0x1f7)]<_0x38a987(0x24e)&&(_0x900750[_0x38a987(0x22d)]=_0x38a987(0x1f8));_0x900750[_0x38a987(0x1f7)]<_0x38a987(0x265)&&(_0x900750['ucapanWaktu']='Selamat\x20pagi');_0x900750[_0x38a987(0x25b)]=_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]]?.[_0x38a987(0x241)]?.[_0x38a987(0x25b)]?.[_0x38a987(0x220)]>0x0?_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]]['contextInfo'][_0x38a987(0x25b)]:[],_0x900750['isMention']=_0x900750[_0x38a987(0x25b)][_0x38a987(0x220)]>0x0;Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x232)])?(_0x900750[_0x38a987(0x21d)]=[ownerNumber+'@s.whatsapp.net',...Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)][_0x900750['botNumber']][_0x38a987(0x260)])][_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)]),_0x900750['isOwner']=_0x900750['isCreator']?!![]:Object['keys'](db[_0x38a987(0x22c)][_0x900750['botNumber']][_0x38a987(0x24c)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)]),_0x900750[_0x38a987(0x267)]=_0x900750[_0x38a987(0x1f9)]?!![]:Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)][_0x900750['botNumber']]['premium'])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)]),_0x900750[_0x38a987(0x20f)]=_0x900750[_0x38a987(0x267)]?!![]:Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)][_0x900750[_0x38a987(0x232)]][_0x38a987(0x24f)])['includes'](_0x900750[_0x38a987(0x245)])?!![]:Object[_0x38a987(0x1ed)](db[_0x38a987(0x1e9)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x245)])?db[_0x38a987(0x1e9)][_0x900750[_0x38a987(0x245)]][_0x38a987(0x24f)][_0x38a987(0x1fc)]:_0x900750[_0x38a987(0x21f)][_0x38a987(0x1fa)]):(_0x900750[_0x38a987(0x21d)]=[ownerNumber+_0x38a987(0x22a)][_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)]),_0x900750[_0x38a987(0x1f9)]=_0x900750['isCreator']?!![]:![],_0x900750[_0x38a987(0x267)]=_0x900750[_0x38a987(0x1f9)]?!![]:![],_0x900750[_0x38a987(0x20f)]=_0x900750[_0x38a987(0x267)]?!![]:_0x900750['key']['fromMe']);_0x900750['messageTimestamp']=_0x28e2c0['messageTimestamp'],_0x900750[_0x38a987(0x264)]=_0x28e2c0['message'],_0x900750[_0x38a987(0x263)]=_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]?.[_0x38a987(0x241)]?.['quotedMessage']?{}:![];_0x900750[_0x38a987(0x263)]&&(_0x900750[_0x38a987(0x263)][_0x38a987(0x21f)]={'id':_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]['contextInfo'][_0x38a987(0x1eb)],'fromMe':_0x28e2c0[_0x38a987(0x264)][_0x900750['type']][_0x38a987(0x241)]['participant']==_0x900750[_0x38a987(0x232)],'remoteJid':decodeJid(_0x900750['message'][_0x900750['type']][_0x38a987(0x241)]['remoteJid']||_0x900750[_0x38a987(0x245)]||_0x900750[_0x38a987(0x21e)]),'participant':decodeJid(_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x243)])},_0x900750['quoted'][_0x38a987(0x245)]=_0x900750['quoted']['key'][_0x38a987(0x242)],_0x900750['quoted']['isGroup']=_0x900750['quoted'][_0x38a987(0x245)]['endsWith'](_0x38a987(0x231)),_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)]=_0x900750['quoted'][_0x38a987(0x21f)]['participant'],_0x900750['quoted']['senderNumber']=_0x900750[_0x38a987(0x21e)][_0x38a987(0x213)]('@')[0x0],_0x900750[_0x38a987(0x263)][_0x38a987(0x239)]=Object['keys'](_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)]['quotedMessage'])[0x0],[_0x38a987(0x258),_0x38a987(0x217),'documentWithCaptionMessage'][_0x38a987(0x1ef)](_0x900750[_0x38a987(0x263)][_0x38a987(0x239)])&&(_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)]=_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]['contextInfo']['quotedMessage'][_0x900750[_0x38a987(0x263)][_0x38a987(0x239)]][_0x38a987(0x264)]),_0x900750[_0x38a987(0x263)][_0x38a987(0x20a)]=_0x900750[_0x38a987(0x263)][_0x38a987(0x239)]==_0x38a987(0x22b)?_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)][_0x38a987(0x22b)]:_0x900750['quoted']['type']==_0x38a987(0x261)?_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)]['quotedMessage']['extendedTextMessage']['text']:_0x900750[_0x38a987(0x263)]['type']==_0x38a987(0x255)?_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)][_0x38a987(0x255)][_0x38a987(0x1f0)]:_0x900750[_0x38a987(0x263)][_0x38a987(0x239)]==_0x38a987(0x25f)?_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)][_0x38a987(0x25f)][_0x38a987(0x1f0)]:_0x900750['quoted']['type']==_0x38a987(0x258)?_0x28e2c0[_0x38a987(0x264)][_0x900750['type']][_0x38a987(0x241)][_0x38a987(0x1f2)][getContentType(_0x28e2c0[_0x38a987(0x264)])]?.[_0x38a987(0x1f0)]:_0x900750[_0x38a987(0x263)][_0x38a987(0x239)]==_0x38a987(0x217)?_0x28e2c0[_0x38a987(0x264)][_0x900750['type']][_0x38a987(0x241)][_0x38a987(0x1f2)][getContentType(_0x28e2c0[_0x38a987(0x264)])]?.['caption']:_0x900750['type']==_0x38a987(0x234)?_0x28e2c0[_0x38a987(0x264)][_0x900750['type']][_0x38a987(0x241)]['quotedMessage'][_0x38a987(0x208)][_0x38a987(0x1f0)]:'',_0x900750[_0x38a987(0x263)][_0x38a987(0x25c)]=_0x900750[_0x38a987(0x263)][_0x38a987(0x239)]==_0x38a987(0x22b)?_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)][_0x38a987(0x22b)]:_0x900750[_0x38a987(0x263)]['type']==_0x38a987(0x261)?_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)][_0x38a987(0x261)][_0x38a987(0x247)]:'',_0x900750[_0x38a987(0x263)][_0x38a987(0x23f)]=_0x900750[_0x38a987(0x263)][_0x38a987(0x20a)][_0x38a987(0x23b)]()[_0x38a987(0x213)](/ +/)[_0x38a987(0x1e4)](0x1),_0x900750['quoted'][_0x38a987(0x247)]=_0x900750?.[_0x38a987(0x263)]?.[_0x38a987(0x23f)]?.[_0x38a987(0x227)]('\x20'),_0x900750['quoted'][_0x38a987(0x240)]=Object['keys'](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)])?db['users'][_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)]][_0x38a987(0x23c)]:_0x38a987(0x205),_0x900750[_0x38a987(0x263)]['timeWib']=Object[_0x38a987(0x1ed)](_0x4165ff)['includes'](_0x900750['quoted']['key']['id'])?_0x4165ff[_0x900750[_0x38a987(0x263)][_0x38a987(0x21f)]['id']][_0x38a987(0x1f7)]:'',_0x900750[_0x38a987(0x263)][_0x38a987(0x1f7)]<'23:59:00'&&(_0x900750[_0x38a987(0x263)]['ucapanWaktu']='Selamat\x20malam'),_0x900750[_0x38a987(0x263)]['timeWib']<'19:00:00'&&(_0x900750[_0x38a987(0x263)][_0x38a987(0x22d)]=_0x38a987(0x25e)),_0x900750[_0x38a987(0x263)][_0x38a987(0x1f7)]<_0x38a987(0x1fb)&&(_0x900750[_0x38a987(0x263)][_0x38a987(0x22d)]=_0x38a987(0x214)),_0x900750[_0x38a987(0x263)][_0x38a987(0x1f7)]<'15:00:00'&&(_0x900750[_0x38a987(0x263)]['ucapanWaktu']=_0x38a987(0x257)),_0x900750[_0x38a987(0x263)][_0x38a987(0x1f7)]<_0x38a987(0x24e)&&(_0x900750['quoted'][_0x38a987(0x22d)]=_0x38a987(0x1f8)),_0x900750[_0x38a987(0x263)][_0x38a987(0x1f7)]<_0x38a987(0x265)&&(_0x900750['quoted'][_0x38a987(0x22d)]='Selamat\x20pagi'),_0x900750[_0x38a987(0x263)][_0x38a987(0x25b)]=_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]]?.[_0x38a987(0x241)]?.[_0x38a987(0x1f2)]?.[_0x38a987(0x241)]?.[_0x38a987(0x25b)]?.['length']>0x0?_0x28e2c0['message'][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)]['quotedMessage'][_0x38a987(0x241)][_0x38a987(0x25b)]:[],_0x900750[_0x38a987(0x263)][_0x38a987(0x249)]=_0x900750[_0x38a987(0x263)][_0x38a987(0x25b)][_0x38a987(0x220)]>0x0,db&&Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)])['includes'](_0x900750['botNumber'])?(_0x900750['quoted'][_0x38a987(0x21d)]=[ownerNumber+_0x38a987(0x22a),...Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)][_0x900750['botNumber']][_0x38a987(0x260)])]['includes'](_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)]),_0x900750[_0x38a987(0x263)]['isOwner']=_0x900750[_0x38a987(0x21d)]?!![]:Object['keys'](db[_0x38a987(0x22c)][_0x900750[_0x38a987(0x232)]][_0x38a987(0x24c)])['includes'](_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)]),_0x900750['quoted'][_0x38a987(0x267)]=_0x900750[_0x38a987(0x1f9)]?!![]:Object['keys'](db[_0x38a987(0x22c)][_0x900750[_0x38a987(0x232)]][_0x38a987(0x224)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)]),_0x900750[_0x38a987(0x263)][_0x38a987(0x20f)]=_0x900750['isPremium']?!![]:Object[_0x38a987(0x1ed)](db[_0x38a987(0x22c)][_0x900750[_0x38a987(0x232)]][_0x38a987(0x24f)])[_0x38a987(0x1ef)](_0x900750['quoted']['chat'])?!![]:Object[_0x38a987(0x1ed)](db[_0x38a987(0x1e9)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x263)][_0x38a987(0x245)])?db[_0x38a987(0x1e9)][_0x900750[_0x38a987(0x263)][_0x38a987(0x245)]][_0x38a987(0x24f)][_0x38a987(0x1fc)]:_0x900750['quoted'][_0x38a987(0x21f)][_0x38a987(0x1fa)]):(_0x900750[_0x38a987(0x263)][_0x38a987(0x21d)]=[ownerNumber+_0x38a987(0x22a)][_0x38a987(0x1ef)](_0x900750[_0x38a987(0x263)][_0x38a987(0x21e)]),_0x900750['quoted'][_0x38a987(0x1f9)]=_0x900750[_0x38a987(0x21d)]?!![]:![],_0x900750['quoted']['isPremium']=_0x900750[_0x38a987(0x1f9)]?!![]:![],_0x900750[_0x38a987(0x263)][_0x38a987(0x20f)]=_0x900750[_0x38a987(0x267)]?!![]:_0x900750[_0x38a987(0x263)][_0x38a987(0x21f)][_0x38a987(0x1fa)]),_0x900750[_0x38a987(0x263)][_0x38a987(0x264)]=_0x28e2c0[_0x38a987(0x264)][_0x900750[_0x38a987(0x239)]][_0x38a987(0x241)][_0x38a987(0x1f2)]);_0x900750[_0x38a987(0x251)]=_0x900750['quoted']?_0x900750['quoted'][_0x38a987(0x21e)]:_0x900750[_0x38a987(0x249)]?_0x900750['mentionedJid'][0x0]:_0x900750[_0x38a987(0x247)]!=''&&!isNaN(_0x900750['text'][_0x38a987(0x209)](new RegExp(_0x38a987(0x22e),'gi'),''))?_0x900750[_0x38a987(0x247)][_0x38a987(0x209)](new RegExp(_0x38a987(0x22e),'gi'),'')+_0x38a987(0x22a):![];Object['keys'](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])&&db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x23c)]!==_0x900750[_0x38a987(0x240)]&&(db[_0x38a987(0x250)][_0x900750['sender']][_0x38a987(0x23c)]=_0x900750[_0x38a987(0x240)]);Object['keys'](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])&&_0x900750[_0x38a987(0x267)]&&db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x201)]!==_0x38a987(0x230)&&(db['users'][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x201)]=_0x38a987(0x230));Object['keys'](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750['sender'])&&_0x900750[_0x38a987(0x267)]&&!isNaN(db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]]['limit'])&&(db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x1e6)]=_0x38a987(0x1ea));Object[_0x38a987(0x1ed)](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])&&_0x900750[_0x38a987(0x267)]&&!isNaN(db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x212)])&&(db['users'][_0x900750['sender']][_0x38a987(0x212)]=_0x38a987(0x1ea));Object[_0x38a987(0x1ed)](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750['sender'])&&!_0x900750[_0x38a987(0x267)]&&db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]]['level']==_0x38a987(0x230)&&(db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x201)]=_0x38a987(0x248));Object[_0x38a987(0x1ed)](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])&&!_0x900750['isPremium']&&isNaN(db[_0x38a987(0x250)][_0x900750['sender']]['limit'])&&(db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]]['limit']=limitAwal);Object[_0x38a987(0x1ed)](db[_0x38a987(0x250)])[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21e)])&&!_0x900750[_0x38a987(0x267)]&&isNaN(db[_0x38a987(0x250)][_0x900750[_0x38a987(0x21e)]][_0x38a987(0x212)])&&(db[_0x38a987(0x250)][_0x900750['sender']][_0x38a987(0x212)]=0x0);if(!Object['keys'](_0x4165ff)[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x21f)]['id']))_0x4165ff[_0x900750['key']['id']]={'timeWib':_0x900750[_0x38a987(0x1f7)]};return!Object['keys'](store)[_0x38a987(0x1ef)](_0x900750[_0x38a987(0x232)])&&!_0x900750[_0x38a987(0x21f)][_0x38a987(0x1fa)]&&(store[_0x900750['botNumber']]={'chats':[_0x900750[_0x38a987(0x245)]]}),Object['keys'](store)['includes'](_0x900750[_0x38a987(0x232)])&&!store[_0x900750[_0x38a987(0x232)]]['chats'][_0x38a987(0x1ef)](_0x900750[_0x38a987(0x245)])&&!_0x900750[_0x38a987(0x21f)][_0x38a987(0x1fa)]&&store[_0x900750[_0x38a987(0x232)]][_0x38a987(0x1e9)][_0x38a987(0x21c)](_0x900750[_0x38a987(0x245)]),setTimeout(()=>{const _0xa6563c=_0x38a987;fs[_0xa6563c(0x24d)]('./store/store.json',JSON[_0xa6563c(0x1fe)](store,null,0x2));},0x3e8),_0x900750;};let file=require[_0x247a15(0x20d)](__filename);fs[_0x247a15(0x1f6)](file,()=>{const _0x2d1fb1=_0x247a15;fs[_0x2d1fb1(0x235)](file),console[_0x2d1fb1(0x256)](chalk[_0x2d1fb1(0x252)]('├'),chalk['keyword'](_0x2d1fb1(0x20c))(_0x2d1fb1(0x221)),''+__filename),delete require[_0x2d1fb1(0x266)][file],process[_0x2d1fb1(0x1e8)](_0x2d1fb1(0x222));});