require=function r(c,s,a){function h(e,t){if(!s[e]){if(!c[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var o=s[e]={exports:{}};c[e][0].call(o.exports,function(t){return h(c[e][1][t]||t)},o,o.exports,r,c,s,a)}return s[e].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)h(a[t]);return h}({AppStart:[function(e,t,n){"use strict";cc._RF.push(t,"06e78LMsSVNmJszjcAk3ExC","AppStart"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){(function(){cc.vv={};var t=e("AudioMgr");cc.vv.audioMgr=new t,cc.vv.audioMgr.init()})(),cc.vv.audioMgr.playBGM("bgm.mp3")},start:function(){}}),cc._RF.pop()},{AudioMgr:"AudioMgr"}],AudioMgr:[function(t,e,n){"use strict";cc._RF.push(e,"bbeccN+vhhDKYkhjZ65v07B","AudioMgr");var i=cc.Class({extends:cc.Component,properties:{bgmVolume:1,sfxVolume:1,bgmAudioID:-1},init:function(){var t;null!=(t=cc.sys.localStorage.getItem("bgmVolume"))&&(this.bgmVolume=parseFloat(t)),null!=(t=cc.sys.localStorage.getItem("sfxVolume"))&&(this.sfxVolume=parseFloat(t)),cc.game.on(cc.game.EVENT_HIDE,function(){console.log("cc.audioEngine.pauseAll"),cc.audioEngine.pauseAll()}),cc.game.on(cc.game.EVENT_SHOW,function(){console.log("cc.audioEngine.resumeAll"),cc.audioEngine.resumeAll()})},getUrl:function(t){return cc.url.raw("resources/sounds/"+t)},playBGM:function(t){var e=this.getUrl(t);console.log(e),0<=this.bgmAudioID&&cc.audioEngine.stop(this.bgmAudioID),this.bgmAudioID=cc.audioEngine.play(e,!0,this.bgmVolume)},playSFX:function(t){var e=this.getUrl(t);if(0<this.sfxVolume)cc.audioEngine.play(e,!1,this.sfxVolume)},setSFXVolume:function(t){this.sfxVolume!=t&&(cc.sys.localStorage.setItem("sfxVolume",t),this.sfxVolume=t)},setBGMVolume:function(t,e){0<=this.bgmAudioID&&(0<t?cc.audioEngine.resume(this.bgmAudioID):cc.audioEngine.pause(this.bgmAudioID)),(this.bgmVolume!=t||e)&&(cc.sys.localStorage.setItem("bgmVolume",t),this.bgmVolume=t,cc.audioEngine.setVolume(this.bgmAudioID,t))},pauseAll:function(){cc.audioEngine.pauseAll()},resumeAll:function(){cc.audioEngine.resumeAll()}});e.exports=i,cc._RF.pop()},{}],GotoWeb:[function(t,e,n){"use strict";cc._RF.push(e,"4956e1XJHdAnYMc4bDWMkm9","GotoWeb"),cc.Class({extends:cc.Component,properties:{},start:function(){},gotoWeb:function(){cc.sys.openURL("https://alexdoninic.github.io/MyLove/")}}),cc._RF.pop()},{}],SpScene:[function(t,e,n){"use strict";cc._RF.push(e,"46858yce61AzZvhaXR/0+g9","SpScene"),cc.Class({extends:cc.Component,properties:{editBox:{default:null,type:cc.EditBox},inputStr:""},start:function(){},gotoWeb:function(){this.Jude()&&cc.sys.openURL("https://alexdoninic.github.io/MyLove/")},InPut:function(){""!=this.editBox.string&&(this.inputStr=this.editBox.string)},Jude:function(){return"邹游"==this.inputStr||"王芳"==this.inputStr}}),cc._RF.pop()},{}],backgroundLoader:[function(t,e,n){"use strict";cc._RF.push(e,"1ba569pWT1NW4FvgybtQ/YJ","backgroundLoader"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var t="background"+(100*Math.random()|0)%3,n=this.node.getComponent(cc.Sprite);cc.loader.loadRes("hero/"+t,cc.SpriteFrame,function(t,e){n.spriteFrame=e}),cc.log("========================="+t)}}),cc._RF.pop()},{}],btn:[function(t,e,n){"use strict";cc._RF.push(e,"2da0dBTR9tDEoDKa8CshNX4","btn");var i=t("landMaker");cc.Class({extends:cc.Component,properties:{},onLoad:function(){},buttonClicked:function(){i.restart()},gameStart:function(){cc.director.loadScene("MainGameScene")}}),cc._RF.pop()},{landMaker:"landMaker"}],landMaker:[function(t,e,n){"use strict";cc._RF.push(e,"d0079DKriBNl693joESFHLy","landMaker");var i=t("spriteCreator"),o=t("perfectLabel"),r=t("storageManager"),c=new(t("state-machine"))({data:{gameDirector:null},init:"stand",transitions:[{name:"stickLengthen",from:"stand",to:"stickLengthened"},{name:"heroTick",from:"stickLengthened",to:"heroTicked"},{name:"stickFall",from:"heroTicked",to:"stickFalled"},{name:"heroMoveToLand",from:"stickFalled",to:"heroMovedToLand"},{name:"landMove",from:"heroMovedToLand",to:"stand"},{name:"heroMoveToStickEnd",from:"stickFalled",to:"heroMovedToStickEnd"},{name:"heroDown",from:"heroMovedToStickEnd",to:"heroDowned"},{name:"gameOver",from:"heroDowned",to:"end"},{name:"restart",from:"end",to:"stand"}],methods:{onLeaveHeroTicked:function(){s.unregisterEvent()},onStickLengthen:function(){s.stickLengthen=!0,s.stick=s.createStick(),s.stick.x=s.hero.x+s.hero.width*(1-s.hero.anchorX)+s.stick.width*s.stick.anchorX,s.hero.getComponent(cc.Animation).play("heroPush")},onHeroTick:function(){s.stickLengthen=!1;var t=s.hero.getComponent(cc.Animation);cc.vv.audioMgr.playSFX("jump.mp3"),t.play("heroTick")},onStickFall:function(){var t=cc.rotateBy(.5,90);t.easing(cc.easeIn(3));var e=cc.callFunc(function(){var t=s.stick.height-s.stick.width*s.stick.anchorX;t<s.currentLandRange||t>s.currentLandRange+s.secondLand.width?c.heroMoveToStickEnd():(c.heroMoveToLand(),t>s.currentLandRange+s.secondLand.width/2-5&&t<s.currentLandRange+s.secondLand.width/2+5?(s.perfect++,s.getScore(20*s.perfect),s.perfectLabel.getComponent(o).showPerfect(s.perfect)):s.perfect=0)}),n=cc.sequence(t,e);s.stick.runAction(n)},onHeroMoveToLand:function(){var t=s.hero.getComponent(cc.Animation),e=cc.callFunc(function(){t.stop("heroRun"),s.getScore(),c.landMove()});t.play("heroRun"),s.heroMove(s.hero,{length:s.currentLandRange+s.secondLand.width,callFunc:e})},onLandMove:function(){var t=cc.callFunc(function(){s.registerEvent()});s.landCreateAndMove(t)},onHeroMoveToStickEnd:function(){var t=s.hero.getComponent(cc.Animation),e=cc.callFunc(function(){t.stop("heroRun"),c.heroDown()});t.play("heroRun"),s.heroMove(s.hero,{length:s.stick.height,callFunc:e})},onHeroDown:function(){var t=cc.callFunc(function(){c.gameOver()});s.stickAndHeroDownAction(t)},onGameOver:function(){cc.vv.audioMgr.playSFX("DieAudio.mp3"),s.overLabel.node.active=!0},onRestart:function(){cc.director.loadScene("MainGameScene")}}}),s=null;cc.Class({extends:cc.Component,properties:{landRange:cc.v2(20,300),landWidth:cc.v2(40,200),hero:cc.Node,firstLand:cc.Node,secondLand:cc.Node,moveDuration:.5,stickSpeed:400,heroMoveSpeed:400,stickWidth:6,canvas:cc.Node,scoreLabel:cc.Label,hightestScoreLabel:cc.Label,overLabel:cc.Label,perfectLabel:cc.Node,specialNode:cc.Node,inputBox:cc.EditBox,inputStr:""},onLoad:function(){this.inputStr="",(s=this).runLength=0,this.stick=null,this.stickLengthen=!1,this.score=0,this.perfect=0,this.currentLandRange=0,this.heroWorldPosX=0,this.changeHightestScoreLabel(),this.createNewLand();var t=this.getLandRange();this.heroWorldPosX=this.firstLand.width-(1-this.hero.anchorX)*this.hero.width-this.stickWidth,this.secondLand.setPosition(t+this.firstLand.width,0),this.registerEvent(),s.hero.getComponent(cc.Animation).on("stop",function(t){"heroTick"==t.target.name&&c.stickFall()})},registerEvent:function(){this.canvas.on(cc.Node.EventType.TOUCH_START,this.touchStart.bind(this),this.node),this.canvas.on(cc.Node.EventType.TOUCH_END,this.touchEnd.bind(this),this.node),this.canvas.on(cc.Node.EventType.TOUCH_CANCEL,this.touchCancel.bind(this),this.node),console.log("on")},unregisterEvent:function(){this.canvas.targetOff(this.node),console.log("off")},update:function(t){this.stickLengthen&&(this.stick.height+=t*this.stickSpeed)},touchStart:function(t){0==this.specialNode.active&&c.stickLengthen(),cc.log("touchStart")},touchEnd:function(t){0==this.specialNode.active&&c.heroTick(),cc.log("touchEnd")},touchCancel:function(){0==this.specialNode.active&&this.touchEnd(),cc.log("touchCancel")},stickAndHeroDownAction:function(t){var e=cc.rotateBy(.5,90);e.easing(cc.easeIn(3)),this.stick.runAction(e);var n=cc.moveBy(.5,cc.p(0,-300-this.hero.height));n.easing(cc.easeIn(3));var i=cc.sequence(n,t);this.hero.runAction(i)},heroMove:function(t,e){var n=e.length/this.heroMoveSpeed,i=cc.moveBy(n,cc.p(e.length,0));if(e.callFunc){var o=cc.sequence(i,e.callFunc);this.hero.runAction(o)}else this.hero.runAction(i)},landCreateAndMove:function(t){var e=cc.director.getWinSize(),n=this.currentLandRange+this.secondLand.width;this.runLength+=n;var i=cc.moveBy(this.moveDuration,cc.p(-n,0));this.node.runAction(i),this.firstLand=this.secondLand,this.createNewLand();var o=this.getLandRange();this.secondLand.setPosition(this.runLength+e.width,0);var r=e.width-o-this.heroWorldPosX-this.hero.width*this.hero.anchorX-this.stickWidth,c=cc.moveBy(this.moveDuration,cc.p(-r,0)),s=cc.sequence(c,t);this.secondLand.runAction(s)},createStick:function(){cc.log("sc");var t=i.createStick(this.stickWidth);return t.parent=this.node,t},createNewLand:function(){this.secondLand=i.createNewLand(this.getLandWidth()),this.secondLand.parent=this.node},getScore:function(t){this.score+=t||10,r.getHighestScore()<this.score&&(r.setHighestScore(this.score),this.changeHightestScoreLabel()),this.scoreLabel.string="得分:"+this.score,200<=this.score&&""==this.inputStr&&(this.specialNode.active=!0),520<=this.score&&"张婷"==this.inputStr&&cc.director.loadScene("SpecialScene")},changeHightestScoreLabel:function(){this.hightestScoreLabel.string="最高分:"+r.getHighestScore()},getLandRange:function(){this.currentLandRange=this.landRange.x+(this.landRange.y-this.landRange.x)*Math.random();var t=cc.director.getWinSize();return t.width<this.currentLandRange+this.heroWorldPosX+this.hero.width+this.secondLand.width&&(this.currentLandRange=t.width-this.heroWorldPosX-this.hero.width-this.secondLand.width),this.currentLandRange},getLandWidth:function(){return this.landWidth.x+(this.landWidth.y-this.landWidth.x)*Math.random()},CloseSpecialNode:function(){this.inputStr=this.inputBox.string,this.specialNode.active=!1}}),e.exports=c,cc._RF.pop()},{perfectLabel:"perfectLabel",spriteCreator:"spriteCreator","state-machine":"state-machine",storageManager:"storageManager"}],perfectLabel:[function(t,e,n){"use strict";cc._RF.push(e,"68d3cmKQRxMxJwM5MfqZrPh","perfectLabel"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.anim=this.node.getComponent(cc.Animation),this.label=this.node.getComponent(cc.Label)},showPerfect:function(t){cc.vv.audioMgr.playSFX("score.mp3"),this.label.string="完美 x"+t;var e=cc.fadeIn(.1),n=cc.moveBy(1,cc.p(0,0)),i=cc.fadeOut(0),o=cc.sequence(e,n,i);this.node.runAction(o)},removeLabel:function(){cc.log("removeLabel")},showLabel:function(){cc.log("showLabel")}}),cc._RF.pop()},{}],spriteCreator:[function(t,e,n){"use strict";cc._RF.push(e,"4310ceORutFCrUEBpToyuTd","spriteCreator");var r,c,i=(c=r=null,{createNewLand:function(t){var e=new cc.Node("Land");e.anchorX=0,e.anchorY=0;var n=e.addComponent(cc.Sprite);n.sizeMode=cc.Sprite.SizeMode.CUSTOM,e.height=300,e.width=t;var i=new cc.Node("Red_Land");i.anchorY=1;var o=i.addComponent(cc.Sprite);return o.sizeMode=cc.Sprite.SizeMode.CUSTOM,i.color=cc.Color.RED,i.parent=e,i.height=10,i.width=10,i.setPosition(e.width/2,e.height),r?(n.spriteFrame=r,o.spriteFrame=c):(cc.loader.loadRes("hero/ground",cc.SpriteFrame,function(t,e){n.spriteFrame=e,o.spriteFrame=e,r=e}),cc.loader.loadRes("hero/bang",cc.SpriteFrame,function(t,e){o.spriteFrame=e,c=e})),e.center=i,e},createStick:function(t){var e=new cc.Node("stick");e.anchorY=0,e.y=300;var n=e.addComponent(cc.Sprite);return n.sizeMode=cc.Sprite.SizeMode.CUSTOM,n.spriteFrame=c,e.width=t,e.height=0,e}});e.exports=i,cc._RF.pop()},{}],"state-machine":[function(t,e,n){"use strict";cc._RF.push(e,"5b87f0RBv9JUIU1APm/AFrF","state-machine");var i,o,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o=function(){return function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=i,o.i=function(t){return t},o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,n){t.exports=function(t,e){var n,i,o;for(n=1;n<arguments.length;n++)for(o in i=arguments[n])i.hasOwnProperty(o)&&(t[o]=i[o]);return t}},function(t,e,n){var c=n(0);t.exports={build:function(t,e){var n,i,o,r=e.plugins;for(n=0,i=r.length;n<i;n++)(o=r[n]).methods&&c(t,o.methods),o.properties&&Object.defineProperties(t,o.properties)},hook:function(t,e,n){var i,o,r,c,s=t.config.plugins,a=[t.context];for(n&&(a=a.concat(n)),i=0,o=s.length;i<o;i++)c=s[i],(r=s[i][e])&&r.apply(c,a)}}},function(t,e,n){t.exports=function(t){var e,n=t.split(/[_-]/),i=n[0];for(e=1;e<n.length;e++)i=i+n[e].charAt(0).toUpperCase()+n[e].substring(1);return i}},function(t,e,n){var i=n(0),o=n(2);function r(t,e){t=t||{},this.options=t,this.defaults=e.defaults,this.states=[],this.transitions=[],this.map={},this.lifecycle=this.configureLifecycle(),this.init=this.configureInitTransition(t.init),this.data=this.configureData(t.data),this.methods=this.configureMethods(t.methods),this.map[this.defaults.wildcard]={},this.configureTransitions(t.transitions||[]),this.plugins=this.configurePlugins(t.plugins,e.plugin)}i(r.prototype,{addState:function(t){this.map[t]||(this.states.push(t),this.addStateLifecycleNames(t),this.map[t]={})},addStateLifecycleNames:function(t){this.lifecycle.onEnter[t]=o("on-enter-"+t),this.lifecycle.onLeave[t]=o("on-leave-"+t),this.lifecycle.on[t]=o("on-"+t)},addTransition:function(t){this.transitions.indexOf(t)<0&&(this.transitions.push(t),this.addTransitionLifecycleNames(t))},addTransitionLifecycleNames:function(t){this.lifecycle.onBefore[t]=o("on-before-"+t),this.lifecycle.onAfter[t]=o("on-after-"+t),this.lifecycle.on[t]=o("on-"+t)},mapTransition:function(t){var e=t.name,n=t.from,i=t.to;return this.addState(n),"function"!=typeof i&&this.addState(i),this.addTransition(e),this.map[n][e]=t},configureLifecycle:function(){return{onBefore:{transition:o("on-before-transition")},onAfter:{transition:o("on-after-transition")},onEnter:{state:o("on-enter-state")},onLeave:{state:o("on-leave-state")},on:{transition:o("on-transition")}}},configureInitTransition:function(t){return"string"==typeof t?this.mapTransition(i({},this.defaults.init,{to:t,active:!0})):"object"===(void 0===t?"undefined":l(t))?this.mapTransition(i({},this.defaults.init,t,{active:!0})):(this.addState(this.defaults.init.from),this.defaults.init)},configureData:function(t){return"function"==typeof t?t:"object"===(void 0===t?"undefined":l(t))?function(){return t}:function(){return{}}},configureMethods:function(t){return t||{}},configurePlugins:function(t,e){var n,i,o;for(n=0,i=(t=t||[]).length;n<i;n++)"function"==typeof(o=t[n])&&(t[n]=o=o()),o.configure&&o.configure(this);return t},configureTransitions:function(t){var e,n,i,o,r,c=this.defaults.wildcard;for(n=0;n<t.length;n++)for(i=t[n],o=Array.isArray(i.from)?i.from:[i.from||c],r=i.to||c,e=0;e<o.length;e++)this.mapTransition({name:i.name,from:o[e],to:r})},transitionFor:function(t,e){var n=this.defaults.wildcard;return this.map[t][e]||this.map[n][e]},transitionsFor:function(t){var e=this.defaults.wildcard;return Object.keys(this.map[t]).concat(Object.keys(this.map[e]))},allStates:function(){return this.states},allTransitions:function(){return this.transitions}}),t.exports=r},function(t,e,n){var i=n(0),o=n(5),a=n(1),c=[null,[]];function r(t,e){this.context=t,this.config=e,this.state=e.init.from,this.observers=[t]}i(r.prototype,{init:function(t){if(i(this.context,this.config.data.apply(this.context,t)),a.hook(this,"init"),this.config.init.active)return this.fire(this.config.init.name,[])},is:function(t){return Array.isArray(t)?0<=t.indexOf(this.state):this.state===t},isPending:function(){return this.pending},can:function(t){return!this.isPending()&&!!this.seek(t)},cannot:function(t){return!this.can(t)},allStates:function(){return this.config.allStates()},allTransitions:function(){return this.config.allTransitions()},transitions:function(){return this.config.transitionsFor(this.state)},seek:function(t,e){var n=this.config.defaults.wildcard,i=this.config.transitionFor(this.state,t),o=i&&i.to;return"function"==typeof o?o.apply(this.context,e):o===n?this.state:o},fire:function(t,e){return this.transit(t,this.state,this.seek(t,e),e)},transit:function(t,e,n,i){var o=this.config.lifecycle,r=this.config.options.observeUnchangedState||e!==n;return n?this.isPending()?this.context.onPendingTransition(t,e,n):(this.config.addState(n),this.beginTransit(),i.unshift({transition:t,from:e,to:n,fsm:this.context}),this.observeEvents([this.observersForEvent(o.onBefore.transition),this.observersForEvent(o.onBefore[t]),r?this.observersForEvent(o.onLeave.state):c,r?this.observersForEvent(o.onLeave[e]):c,this.observersForEvent(o.on.transition),r?["doTransit",[this]]:c,r?this.observersForEvent(o.onEnter.state):c,r?this.observersForEvent(o.onEnter[n]):c,r?this.observersForEvent(o.on[n]):c,this.observersForEvent(o.onAfter.transition),this.observersForEvent(o.onAfter[t]),this.observersForEvent(o.on[t])],i)):this.context.onInvalidTransition(t,e,n)},beginTransit:function(){this.pending=!0},endTransit:function(t){return this.pending=!1,t},doTransit:function(t){this.state=t.to},observe:function(t){if(2===t.length){var e={};e[t[0]]=t[1],this.observers.push(e)}else this.observers.push(t[0])},observersForEvent:function(t){for(var e,n=0,i=this.observers.length,o=[];n<i;n++)(e=this.observers[n])[t]&&o.push(e);return[t,o,!0]},observeEvents:function(t,e,n){if(0===t.length)return this.endTransit(!0);var i=t[0][0],o=t[0][1],r=t[0][2];if((e[0].event=i)&&r&&i!==n&&a.hook(this,"lifecycle",e),0===o.length)return t.shift(),this.observeEvents(t,e,i);var c=o.shift(),s=c[i].apply(c,e);return s&&"function"==typeof s.then?s.then(this.observeEvents.bind(this,t,e,i)).catch(this.endTransit.bind(this)):!1===s?this.endTransit(!1):this.observeEvents(t,e,i)},onInvalidTransition:function(t,e,n){throw new o("transition is invalid in current state",t,e,n,this.state)},onPendingTransition:function(t,e,n){throw new o("transition is invalid while previous transition is still in progress",t,e,n,this.state)}}),t.exports=r},function(t,e,n){t.exports=function(t,e,n,i,o){this.message=t,this.transition=e,this.from=n,this.to=i,this.current=o}},function(t,e,n){var i=n(0),o=n(2),r=n(1),c=n(3),s=n(4),a={is:function(t){return this._fsm.is(t)},can:function(t){return this._fsm.can(t)},cannot:function(t){return this._fsm.cannot(t)},observe:function(){return this._fsm.observe(arguments)},transitions:function(){return this._fsm.transitions()},allTransitions:function(){return this._fsm.allTransitions()},allStates:function(){return this._fsm.allStates()},onInvalidTransition:function(t,e,n){return this._fsm.onInvalidTransition(t,e,n)},onPendingTransition:function(t,e,n){return this._fsm.onPendingTransition(t,e,n)}},h={state:{configurable:!1,enumerable:!0,get:function(){return this._fsm.state},set:function(t){throw Error("use transitions to change state")}}};function u(t){return d(this||{},t)}function d(t,e){return f(t,new c(e,u)),t._fsm(),t}function f(e,t){if("object"!==(void 0===e?"undefined":l(e))||Array.isArray(e))throw Error("StateMachine can only be applied to objects");r.build(e,t),Object.defineProperties(e,h),i(e,a),i(e,t.methods),t.allTransitions().forEach(function(t){e[o(t)]=function(){return this._fsm.fire(t,[].slice.call(arguments))}}),e._fsm=function(){this._fsm=new s(this,t),this._fsm.init(arguments)}}u.version="3.0.0-rc.1",u.factory=function(){var t,e;"function"==typeof arguments[0]?(t=arguments[0],e=arguments[1]||{}):(t=function(){this._fsm.apply(this,arguments)},e=arguments[0]||{});var n=new c(e,u);return f(t.prototype,n),t.prototype._fsm.config=n,t},u.apply=d,u.defaults={wildcard:"*",init:{name:"init",from:"none"}},t.exports=u}])},"object"===((i=void 0)===n?"undefined":l(n))&&"object"===(void 0===e?"undefined":l(e))?e.exports=o():"function"==typeof define&&define.amd?define("StateMachine",[],o):"object"===(void 0===n?"undefined":l(n))?n.StateMachine=o():i.StateMachine=o(),cc._RF.pop()},{}],storageManager:[function(t,e,n){"use strict";cc._RF.push(e,"10710Cz8ZRCqLlVtCy4fcaY","storageManager");var i=(cc.sys.localStorage.highestScore||(cc.sys.localStorage.highestScore=0),{getHighestScore:function(){return cc.sys.localStorage.highestScore},setHighestScore:function(t){cc.sys.localStorage.highestScore=t}});e.exports=i,cc._RF.pop()},{}]},{},["AppStart","AudioMgr","GotoWeb","SpScene","backgroundLoader","btn","landMaker","perfectLabel","spriteCreator","state-machine","storageManager"]);