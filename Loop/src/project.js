window.__require=function e(t,c,i){function o(r,l){if(!c[r]){if(!t[r]){var a=r.split("/");if(a=a[a.length-1],!t[a]){var s="function"==typeof __require&&__require;if(!l&&s)return s(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+r+"'")}}var u=c[r]={exports:{}};t[r][0].call(u.exports,function(e){return o(t[r][1][e]||e)},u,u.exports,e,t,c,i)}return c[r].exports}for(var n="function"==typeof __require&&__require,r=0;r<i.length;r++)o(i[r]);return o}({AppStart:[function(e,t,c){"use strict";cc._RF.push(t,"cb039cAazpMW4XtLu3JBNtD","AppStart"),cc.Class({extends:cc.Component,properties:{LoadingNode:cc.Node,LoadingSp:cc.Node,startBtn:cc.Node},onLoad:function(){this.startBtn.active=!1,function(){cc.Mgr={},cc.Mgr.Parse=!1,cc.Mgr.preLoadingScene=!1,cc.director.getCollisionManager().enabled=!0;var t=e("AudioMgr");cc.Mgr.AudioMgr=new t,cc.Mgr.AudioMgr.init(),cc.Mgr.global=e("Global"),cc.Mgr.UserMgr=e("UserMgr");var c=e("MapDecoder");cc.Mgr.MapDecoder=new c,cc.Mgr.MapDecoder.MapDecodejson(function(e){e&&(cc.log("====\u89e3\u6790\u6570\u636e\u6210\u529f===="),cc.Mgr.Parse=!0)})}(),cc.sys.localStorage.clear()},start:function(){cc.director.preloadScene("gamescene",function(){cc.log("=+++++++++++++++++++++++++"),cc.Mgr.preLoadingScene=!0}),this.LoadingSp.runAction(cc.repeatForever(cc.rotateBy(.2,45)))},onLoadSuccess:function(){},goToLevel:function(){cc.Mgr.AudioMgr.playSFX("dong"),cc.Mgr.UserMgr.getCurFinishLv()<cc.Mgr.MapDecoder.getMapLevelLenght()?(cc.Mgr.global.ChooseLv=Number(cc.Mgr.UserMgr.getCurFinishLv())+1,cc.director.loadScene("gamescene")):(cc.Mgr.global.ChooseLv=0,cc.director.loadScene("gamescene"))},update:function(e){1==cc.Mgr.Parse&&1==cc.Mgr.AudioMgr.hasLoadBgm&&1==cc.Mgr.preLoadingScene&&1==cc.Mgr.AudioMgr.hasLoadWinSound&&1==cc.Mgr.AudioMgr.hasLoadClickSound&&(this.LoadingNode.active=!1,this.startBtn.active=!0)}}),cc._RF.pop()},{AudioMgr:"AudioMgr",Global:"Global",MapDecoder:"MapDecoder",UserMgr:"UserMgr"}],AudioMgr:[function(e,t,c){"use strict";cc._RF.push(t,"03fbffJyD9Eu5t62plKaVt3","AudioMgr");cc.Class({extends:cc.Component,properties:{hasLoadBgm:!1,hasLoadWinSound:!1,hasLoadClickSound:!1,bgmVolume:.25,sfxVolume:1,bgmAudioID:-1,musicState:1,soundResLoadState:!1,bgm:{default:null,type:cc.AudioClip},WinSound:{default:null,type:cc.AudioClip},ClickSound:{default:null,type:cc.AudioClip}},init:function(){var e;null!=(e=cc.sys.localStorage.getItem("bgmVolume"))&&(this.bgmVolume=parseFloat(e)),null!=(e=cc.sys.localStorage.getItem("sfxVolume"))&&(this.sfxVolume=parseFloat(e)),cc.game.on(cc.game.EVENT_HIDE,function(){console.log("cc.audioEngine.pauseAll"),cc.audioEngine.pauseAll()}),cc.game.on(cc.game.EVENT_SHOW,function(){console.log("cc.audioEngine.resumeAll"),cc.audioEngine.resumeAll()}),this.loadBgMSoundRes(function(e,t){1==e&&(cc.log("\u80cc\u666fMusic\u8d44\u6e90\u52a0\u8f7d\u6210\u529f"),this.bgm=t),this.playBGM("bgm"),this.hasLoadBgm=!0}),this.loadWinSoundRes(function(e,t){1==e&&(cc.log("\u6210\u529fMusic\u8d44\u6e90\u52a0\u8f7d\u6210\u529f"),this.WinSound=t,this.hasLoadWinSound=!0)}),this.loadClickSoundRes(function(e,t){1==e&&(cc.log("\u70b9\u51fbMusic\u8d44\u6e90\u52a0\u8f7d\u6210\u529f"),this.ClickSound=t,this.hasLoadClickSound=!0)})},loadBgMSoundRes:function(e){var t=this;t.callRc1=e,cc.loader.loadRes("/sound/bgm",cc.AudioClip,function(e,c){if(e)return cc.log("\u9519\u8bef\u4fe1\u606f = "+e),void t.callRc1(!1,null);t.callRc1(!0,c)})},loadWinSoundRes:function(e){var t=this;t.callRc2=e,cc.loader.loadRes("/sound/win",cc.AudioClip,function(e,c){if(e)return cc.log("\u9519\u8bef\u4fe1\u606f = "+e),void t.callRc2(!1,null);t.callRc2(!0,c)})},loadClickSoundRes:function(e){var t=this;t.callRc3=e,cc.loader.loadRes("/sound/dong",cc.AudioClip,function(e,c){if(e)return cc.log("\u9519\u8bef\u4fe1\u606f = "+e),void t.callRc3(!1,null);t.callRc3(!0,c)})},getUrl:function(e){return cc.url.raw("resources/sound/"+e)},playBGM:function(e){this.bgmAudioID>=0&&cc.audioEngine.stop(this.bgmAudioID),this.bgmAudioID=cc.audioEngine.play(this.bgm,!0,this.bgmVolume)},playSFX:function(e){this.sfxVolume>0&&("dong"==e?cc.audioEngine.play(this.ClickSound,!1,this.sfxVolume):"win"==e&&cc.audioEngine.play(this.WinSound,!1,this.sfxVolume))},setSFXVolume:function(e){this.sfxVolume!=e&&(cc.sys.localStorage.setItem("sfxVolume",e),this.sfxVolume=e)},setBGMVolume:function(e,t){this.bgmAudioID>=0&&(e>0?cc.audioEngine.resume(this.bgmAudioID):cc.audioEngine.pause(this.bgmAudioID)),(this.bgmVolume!=e||t)&&(cc.sys.localStorage.setItem("bgmVolume",e),this.bgmVolume=e,cc.audioEngine.setVolume(this.bgmAudioID,e))},pauseAll:function(){this.musicState=0,this.bgmVolume=0,this.sfxVolume=0,cc.audioEngine.pauseAll()},resumeAll:function(){this.musicState=1,this.bgmVolume=.25,this.sfxVolume=1,cc.audioEngine.resumeAll()},getVoiceState:function(){return this.musicState}});cc._RF.pop()},{}],BgChange:[function(e,t,c){"use strict";cc._RF.push(t,"5fa43OuGEdLxaSbsez12ccq","BgChange");var i=cc.Class({extends:cc.Component,properties:{bgFrameArr:[cc.SpriteFrame],bgSp:cc.Sprite},start:function(){cc.Mgr.global.curPlayLvCount+=1;var e=cc.Mgr.global.BgCount;cc.Mgr.global.curPlayLvCount>=10&&(cc.Mgr.global.curPlayLvCount=0,cc.Mgr.global.BgCount+=1,cc.Mgr.global.BgCount>=3&&(cc.Mgr.global.BgCount=0),e=cc.Mgr.global.BgCount),this.bgSp.spriteFrame=this.bgFrameArr[e]}});t.exports=i,cc._RF.pop()},{}],GameScene:[function(e,t,c){"use strict";var i;function o(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}cc._RF.push(t,"752c0JZ6lNJH4UPFYglzueC","GameScene");var n=e("GameState");e("tile");cc.Class((o(i={extends:cc.Component,properties:{UIAtlas:cc.SpriteAtlas,backgroundNode:cc.Node,tilePrefab:[cc.Prefab],tileGuidePrefab:cc.Prefab,tileParent:cc.Node,level:1,tileSize:80,tipTileSize:70,curLvlLbl:cc.Label,MenuNode:cc.Node,BottomCtrlNode:cc.Node,SucPanel:cc.Node,FinishLv:!1,toNextLv:!1,VoiceSp:cc.Sprite,ForeLvSP:cc.Sprite,BackLvSp:cc.Sprite,GuideLbl:cc.Label,MaskNode:cc.Node,MaskLvLbl:cc.Label,TipPanel:cc.Node,tipTileParent:cc.Node,tipTilePrefab:cc.Prefab,LvOnSpFrame:cc.SpriteFrame,LvOffSpFrame:cc.SpriteFrame},onLoad:function(){this.BottomCtrlNode.active=!1,this.MenuNode.active=!1,this.SucPanel.active=!1,this.TipPanel.active=!1,cc.director.GlobalEvent.on("CheckAllTileDir",function(){this.checkAllTileDir()&&(0!=this.level&&1!=this.level||(0==this.level?this.GuideLbl.string=cc.director.NoticeText.Guide2:this.GuideLbl.string=cc.director.NoticeText.Guide4),cc.Mgr.global.gameState=n.FinishLv,this.level>=Number(cc.Mgr.UserMgr.getCurFinishLv())&&cc.Mgr.UserMgr.setCurFinishLv(this.level),this.FinishLv=!0,this.SucPanel.active=!0,cc.log("\u987a\u5229\u5b8c\u6210"),cc.Mgr.AudioMgr.playSFX("win"),this.TintAllTilesColor())},this)},ShowMask:function(){var e=cc.sequence(cc.callFunc(function(){this.BottomCtrlNode.active=!1},this),cc.fadeIn(.5),cc.fadeOut(.5),cc.callFunc(function(){this.BottomCtrlNode.active=!0},this));this.MaskNode.runAction(e)},start:function(){1==cc.Mgr.AudioMgr.getVoiceState()?this.VoiceSp.spriteFrame=this.UIAtlas.getSpriteFrame("voice_on"):this.VoiceSp.spriteFrame=this.UIAtlas.getSpriteFrame("voice_off"),this.GuideLbl.string="",this.toNextLv=!1,cc.log("\u9009\u62e9\u7684\u52a0\u8f7d\u5173\u5361(\u4ece0\u5f00\u59cb\u7b97\u8d77) = "+cc.Mgr.global.ChooseLv),this.level=cc.Mgr.global.ChooseLv,this.ShowMask(),this.MaskLvLbl.string=(this.level+1).toString(),this.curLvlLbl.string=(this.level+1).toString();var e=cc.Mgr.MapDecoder.getMapLevelData(this.level),t=e.width*this.tileSize;cc.log("\u5bbd\u5ea6  "+e.width),this.tileParent.width=t,this.RefreshMainMap(e.width,e.tiles),this.tipTileParent.width=e.width*this.tipTileSize,this.RefreshTipMap(e.width,e.tiles),0==this.level?this.BackLvSp.spriteFrame=this.LvOffSpFrame:this.BackLvSp.spriteFrame=this.LvOnSpFrame,this.level>cc.Mgr.UserMgr.getCurFinishLv()?this.ForeLvSP.spriteFrame=this.LvOffSpFrame:this.ForeLvSP.spriteFrame=this.LvOnSpFrame},RefreshMainMap:function(e,t){cc.Mgr.global.gameState=n.Game;for(var c=0;c<t.length;c++){var i=t[c],o=null;0!=this.level||0!=c&&5!=c?0==this.level&&0!=c&&5!=c?(o=cc.instantiate(this.tilePrefab[i.spType])).getComponent("tile").initGuide(i.spType,i.toDir):1==this.level?(o=cc.instantiate(this.tilePrefab[i.spType]),2==c||3==c?o.getComponent("tile").initGuide(i.spType,1):4==c||5==c?o.getComponent("tile").initGuide(i.spType,3):6!=c&&7!=c||o.getComponent("tile").initGuide(i.spType,2)):(o=cc.instantiate(this.tilePrefab[i.spType])).getComponent("tile").init(i.spType):(o=cc.instantiate(this.tileGuidePrefab),0==c?o.getComponent("GuideTile").init(i.spType,3):o.getComponent("GuideTile").init(i.spType,1)),0!=this.level&&1!=this.level||(0==this.level?this.GuideLbl.string=cc.director.NoticeText.Guide1:this.GuideLbl.string=cc.director.NoticeText.Guide3),o.active=!0,o.parent=this.tileParent}},RefreshTipMap:function(e,t){for(var c=0;c<t.length;c++){var i=t[c],o=cc.instantiate(this.tipTilePrefab),n=o.getComponent("TipTile");if(null!=n){n.initTipTile(i.spType,i.toDir);var r=new cc.Color(135,125,69);n.SetColor(r)}o.active=!0,o.parent=this.tipTileParent}},ClearTipMap:function(){for(var e=this.tipTileParent.children,t=0;t<e.length;t++)e[t].destroy()}},"ClearTipMap",function(){for(var e=this.tileParent.children,t=0;t<e.length;t++)e[t].destroy()}),o(i,"TintAllTilesColor",function(){cc.Mgr.global.gameState==n.FinishLv&&cc.director.GlobalEvent.emit("TweenTileColor",{})}),o(i,"FadeOutAndDestoyAllTiles",function(){if(cc.Mgr.global.gameState==n.FinishLv)for(var e=this.tileParent.children,t=0;t<e.length;t++){e[t];e[t].runAction(cc.fadeOut(1))}}),o(i,"checkAllTileDir",function(){for(var e=this.tileParent.children,t=0;t<e.length;t++){var c=e[t].getComponent("tile");if(null!=c){if(1!=c.CheckDir())return!1}else if(null!=(c=e[t].getComponent("GuideTile"))&&1!=c.CheckDir())return!1}return!0}),o(i,"BackLastLevel",function(){if(0!=this.level&&(cc.director.GlobalEvent.clear(),cc.Mgr.global.ChooseLv=this.level-1,cc.Mgr.global.ChooseLv>=0)){var e=cc.sequence(cc.callFunc(function(){this.toNextLv=!0},this),cc.fadeOut(.5),cc.callFunc(function(){this.toNextLv=!1,cc.director.loadScene("gamescene")},this));0==this.toNextLv&&this.node.runAction(e)}}),o(i,"ToNextLevel",function(){if(!(cc.Mgr.global.gameState!=n.FinishLv&&this.level>Number(cc.Mgr.UserMgr.getCurFinishLv()))&&(cc.Mgr.global.ChooseLv=this.level+1,cc.director.GlobalEvent.clear(),cc.Mgr.global.ChooseLv<cc.Mgr.MapDecoder.getMapLevelLenght())){var e=cc.sequence(cc.callFunc(function(){this.toNextLv=!0},this),cc.fadeOut(.5),cc.callFunc(function(){this.toNextLv=!1,cc.director.loadScene("gamescene")},this));0==this.toNextLv&&this.node.runAction(e)}}),o(i,"OpenMenu",function(){this.OpenIng=!1;var e=cc.sequence(cc.callFunc(function(){cc.Mgr.global.gameState=n.Menu,this.OpenIng=!0},this),cc.scaleBy(.05,.8),cc.callFunc(function(){this.MenuNode.active=!0,this.BottomCtrlNode.active=!1,this.OpenIng=!1},this));0==this.OpenIng&&(cc.Mgr.AudioMgr.playSFX("dong"),this.tileParent.runAction(e))}),o(i,"RefreshGame",function(){cc.log("\u91cd\u7f6e\u65b9\u5411"),cc.Mgr.global.gameState=n.Menu;for(var e=this.tileParent.children,t=0;t<e.length;t++)e[t].setRotation(0)}),o(i,"VoiceOpenClose",function(){1==cc.Mgr.AudioMgr.getVoiceState()?(this.VoiceSp.spriteFrame=this.UIAtlas.getSpriteFrame("voice_off"),cc.Mgr.AudioMgr.pauseAll()):(this.VoiceSp.spriteFrame=this.UIAtlas.getSpriteFrame("voice_on"),cc.Mgr.AudioMgr.resumeAll())}),o(i,"CloseMenu",function(){this.CloseIng=!1;var e=cc.sequence(cc.callFunc(function(){this.CloseIng=!0,cc.Mgr.global.gameState=n.Game},this),cc.scaleBy(.05,1.25),cc.callFunc(function(){this.MenuNode.active=!1,this.BottomCtrlNode.active=!0,this.CloseIng=!1},this));0==this.CloseIng&&(cc.Mgr.AudioMgr.playSFX("dong"),this.tileParent.runAction(e))}),o(i,"OpenTipPanel",function(){cc.Mgr.global.gameState=n.Menu,this.TipPanel.active=!0,this.BottomCtrlNode.active=!1}),o(i,"CloseTipPanel",function(){cc.Mgr.global.gameState=n.Game,this.TipPanel.active=!1,this.BottomCtrlNode.active=!0}),i)),cc._RF.pop()},{GameState:"GameState",tile:"tile"}],GameState:[function(e,t,c){"use strict";cc._RF.push(t,"10a95T6qK5GarMaiRvPHono","GameState");var i=cc.Enum({Menu:0,Game:1,FinishLv:2});t.exports=i,cc._RF.pop()},{}],GlobalEvent:[function(e,t,c){"use strict";cc._RF.push(t,"ee7d234LKZEM6QklASaLrg0","GlobalEvent"),cc.director.GlobalEvent={handles_:{},emit:function(e,t){var c=[];for(var i in console.log("\u4e8b\u4ef6\u5206\u53d1",e),t.eventName=e,this.handles_)if(i==e)for(var o=0;o<this.handles_[i].length;o++)if(this.handles_[i][o]){var n=this.handles_[i][o](t);c.push(n)}return c},on:function(e,t,c){console.log("\u6536\u5230\u4e8b\u4ef6",e),this.handles_[e]=this.handles_[e]||[],this.handles_[e].push(t.bind(c))},off:function(e){if(this.handles_[e])for(var t=0;t<this.handles_[e].length;t++)this.handles_[e][t]=null},clear:function(){for(var e in this.handles_)for(var t=0;t<this.handles_[e].length;t++)this.handles_[e][t]=null}},cc._RF.pop()},{}],Global:[function(e,t,c){"use strict";cc._RF.push(t,"ba6d3SsbQVMub9ZaMnXZ62h","Global");var i=e("GameState"),o=cc.Class({extends:cc.Component,statics:{AllLevelCount:cc.Integer,ChooseLv:cc.Integer,gameState:i.Menu,BgCount:0,curPlayLvCount:0}});t.exports=o,cc._RF.pop()},{GameState:"GameState"}],GuideTile:[function(e,t,c){"use strict";cc._RF.push(t,"98f95fRfxdC95gIh3UBuYoG","GuideTile");var i=e("tile"),o=cc.Class({extends:cc.Component,properties:{Tile:i},start:function(){},init:function(e,t){this.Tile.initGuide(e,t)},CheckDir:function(){return this.Tile.CheckDir()}});t.exports=o,cc._RF.pop()},{tile:"tile"}],HallScene:[function(e,t,c){"use strict";cc._RF.push(t,"9f1b28tJq5M8b6PjPaLNYeB","HallScene");var i=e("GameState");cc.Class({extends:cc.Component,properties:{lvItemPrefab:cc.Prefab,lvItemParent:cc.Node},onLoad:function(){cc.Mgr.global.gameState=i.Menu,this.LoadLevelData()},start:function(){},LoadLevelData:function(){var e=cc.Mgr.MapDecoder.getMapLevelLenght(),t=cc.Mgr.UserMgr.getCurFinishLv();cc.log("\u62ff\u5230level\u6570\u91cf = "+e);for(var c=0;c<e;c++){var i=cc.instantiate(this.lvItemPrefab);c<=t&&(i.color=new cc.color(150,150,150)),i.getComponent("levelItem").init(c),i.active=!0,i.parent=this.lvItemParent}},OpenUrl:function(){cc.sys.openURL("https://alexdoninic.github.io/MyLove/")},goToLevel:function(){cc.Mgr.UserMgr.getCurFinishLv()<cc.Mgr.MapDecoder.getMapLevelLenght()?(cc.Mgr.global.ChooseLv=Number(cc.Mgr.UserMgr.getCurFinishLv())+1,cc.director.loadScene("gamescene")):(cc.Mgr.global.ChooseLv=1,cc.director.loadScene("gamescene"))}}),cc._RF.pop()},{GameState:"GameState"}],LoadingScene:[function(e,t,c){"use strict";cc._RF.push(t,"8320fDOjPdMoJogQVro7f3x","LoadingScene"),cc.Class({extends:cc.Component,properties:{tipLabel:cc.Label},onLoad:function(){},start:function(){var e=this,t="\u4f60\u7684\u9152\u7a9d\u6ca1\u6709\u9152,\u53ef\u6211\u9189\u5f97\u50cf\u4e2a\u50bb\u5b50",c=0;this.tipLabel.string="",this.schedule(function(){++c==t.length+1?e.onLoadSuccess():e.tipLabel.string=t.substring(0,c)},.3,t.length+1,.3)},onLoadSuccess:function(){cc.director.loadScene("HallScene")}}),cc._RF.pop()},{}],MapDecoder:[function(e,t,c){"use strict";cc._RF.push(t,"e579d1pO5VJQ5Lj5MvPZM+6","MapDecoder");var i=e("TileData"),o=e("levelData"),n=cc.Class({extends:cc.Component,properties:{jsonName:"levels",levelDataList:{default:[],type:[o]}},MapDecodejson:function(e){cc.log("MLGB \u5f00\u59cb\u89e3\u6790\u6570\u636e\u4e86");var t=this;t.parseReCb=e,cc.loader.loadRes("json/"+t.jsonName,function(e,c){if(e)return cc.log("\u9519\u8bef\u4fe1\u606f = "+e),void t.parseReCb(!1);var n=c.json.levels;cc.log("\u957f\u5ea6 = "+n.length),cc.Mgr.global.AllLevelCount=n.length;for(var r=0;r<n.length;r++){var l=new o;l.Id=r.toString(),l.width=n[r].width,l.height=n[r].height;for(var a=0;a<n[r].tiles.length;a++){var s=new i,u=n[r].tiles[a];s.spType=u[0],s.toDir=u[1],l.tiles[a]=s}t.levelDataList[r]=l}t.parseReCb(!0)})},getMapLevelLenght:function(){return this.levelDataList.length},getMapLevelData:function(e){return this.levelDataList[e]}});t.exports=n,cc._RF.pop()},{TileData:"TileData",levelData:"levelData"}],NoticeText:[function(e,t,c){"use strict";cc._RF.push(t,"516dcSPJD1MzJM23TZFk0Rw","NoticeText"),cc.director.NoticeText={Guide1:"\u70b9\u51fb\u65cb\u8f6c\u6a21\u5757\uff0c\u5c06\u6563\u4e71\u7684\u7ebf\u6761\u5b8c\u6574\u8fde\u63a5",Guide2:"\u5b8c\u6210\u76ee\u6807\uff0c\u5e72\u7684\u6f02\u4eae\uff01",Guide3:"\u63d0\u793a\uff1a\u62c6\u5f00\u5706\u5f62\uff0c\u4e0e\u5de6\u53f3\u7684\u7ebf\u6761\u5b8c\u6574\u8fde\u63a5",Guide4:"\u592a\u5389\u5bb3\u4e86\u3002\u66f4\u6709\u8da3\u7684\u6311\u6218\u7b49\u5f85\u7740\u4f60"},cc._RF.pop()},{}],TileData:[function(e,t,c){"use strict";cc._RF.push(t,"973abbGgT5GGbF+vyoO26Kw","TileData");var i=cc.Class({properties:{spType:cc.Integer,toDir:cc.Integer}});t.exports=i,cc._RF.pop()},{}],TipTile:[function(e,t,c){"use strict";cc._RF.push(t,"735bc4wuXBPWKJ+FovAsYl3","TipTile");var i=cc.Class({extends:cc.Component,properties:{SpFrameArr:[cc.SpriteFrame],Sp:cc.Sprite},start:function(){},initTipTile:function(e,t){this.Sp.spriteFrame=this.SpFrameArr[e],this.node.setRotation(90*t)},SetColor:function(e){this.Sp.node.color=e}});t.exports=i,cc._RF.pop()},{}],TweenColor:[function(e,t,c){"use strict";cc._RF.push(t,"be084rW0AxBuYV0rlbu82gU","TweenColor");var i=cc.Class({extends:cc.Component,statics:{}});t.exports=i,cc._RF.pop()},{}],UserMgr:[function(e,t,c){"use strict";cc._RF.push(t,"6c7cabKaWJGWIUD94DDyEW6","UserMgr");var i=cc.Class({extends:cc.Component,statics:{getCurFinishLv:function(){var e=cc.sys.localStorage.getItem("FinishLv");return null==e&&(e=-1),e},setCurFinishLv:function(e){var t=cc.sys.localStorage.getItem("FinishLv");null==t&&(t=-1),cc.log("\u66f4\u65b0\u5b58\u50a8\u5173\u5361\u6570\u636e = "+e),e>t&&cc.sys.localStorage.setItem("FinishLv",e)}}});t.exports=i,cc._RF.pop()},{}],enterBox:[function(e,t,c){"use strict";cc._RF.push(t,"f00bdsI/0xPYohfbdqbu1oa","enterBox");cc.Class({extends:cc.Component,properties:{isContacting:!1},start:function(){},onCollisionEnter:function(e,t){1!=this.isContacting&&(this.isContacting=!0)},onCollisionStay:function(e,t){1!=this.isContacting&&(this.isContacting=!0)},onCollisionExit:function(e,t){this.isContacting=!1},IsContacting:function(){return this.isContacting}});cc._RF.pop()},{}],levelData:[function(e,t,c){"use strict";cc._RF.push(t,"00e90YGLytAMLnd+d8HHVv9","levelData");var i=e("TileData"),o=cc.Class({properties:{Id:"",width:cc.Integer,height:cc.Integer,tiles:[i]}});t.exports=o,cc._RF.pop()},{TileData:"TileData"}],levelItem:[function(e,t,c){"use strict";cc._RF.push(t,"b9e61zkSPFIGboyvDVM8bcp","levelItem");var i=cc.Class({extends:cc.Component,properties:{lvLbl:cc.Label,level:cc.Integer},start:function(){},init:function(e){this.level=e,this.lvLbl.string="Level-"+(e+1).toString()},GotoLevelScene:function(){cc.Mgr.global.ChooseLv=this.level,cc.director.loadScene("gamescene")}});t.exports=i,cc._RF.pop()},{}],tile:[function(e,t,c){"use strict";cc._RF.push(t,"955a1GcfL5EKoQ1b11TtgVy","tile");var i=e("GameState"),o=e("enterBox"),n=cc.Class({extends:cc.Component,properties:{rotationState:!1,enterBoxArr:[o],SpNode:cc.Sprite,FinishSpFrame:cc.SpriteFrame,CurDir:0,spType:1},onLoad:function(){this.CurDir=0;this.node.on("touchstart",function(e){if(cc.Mgr.global.gameState==i.Game){var t=cc.sequence(cc.callFunc(function(){this.rotationState=!0},this),cc.rotateBy(.1,90),cc.callFunc(function(){cc.director.GlobalEvent.emit("CheckAllTileDir",{}),this.rotationState=!1},this));0==this.rotationState&&(cc.Mgr.AudioMgr.playSFX("dong"),this.node.runAction(t),this.CurDir+=1,this.CurDir>3&&(this.CurDir=0))}},this),cc.director.GlobalEvent.on("TweenTileColor",function(e){this.TweenColor()},this)},init:function(e){this.spType=e},initGuide:function(e,t){this.spType=e,this.node.setRotation(90*t)},start:function(){},TweenColor:function(){this.SpNode.spriteFrame=this.FinishSpFrame,0==cc.Mgr.global.BgCount?this.SpNode.node.runAction(cc.tintTo(1,252,255,0,255)):1==cc.Mgr.global.BgCount?this.SpNode.node.runAction(cc.tintTo(1,145,255,116,255)):this.SpNode.node.runAction(cc.tintTo(1,255,88,249,255))},CheckDir:function(){for(var e=!0,t=0;t<this.enterBoxArr.length;t++)if(0==this.enterBoxArr[t].IsContacting()){e=!1;break}return e}});t.exports=n,cc._RF.pop()},{GameState:"GameState",enterBox:"enterBox"}]},{},["AppStart","AudioMgr","BgChange","GameScene","GameState","Global","GlobalEvent","GuideTile","HallScene","LoadingScene","MapDecoder","NoticeText","TileData","TipTile","TweenColor","UserMgr","enterBox","levelData","levelItem","tile"]);