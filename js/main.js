/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-setclasses !*/
//!function(e,n,a){function o(e,n){return typeof e===n}function s(){var e,n,a,s,t,c,r;for(var u in l)if(l.hasOwnProperty(u)){if(e=[],n=l[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)c=e[t],r=c.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),i.push((s?"":"no-")+r.join("-"))}}function t(e){var n=u.className,a=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),p?u.className.baseVal=n:u.className=n)}function c(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],l=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=c("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n}),s(),t(i),delete r.addTest,delete r.addAsyncTest;for(var f=0;f<Modernizr._q.length;f++)Modernizr._q[f]();e.Modernizr=Modernizr}(window,document);


console.log(gQ.version() + " ___  ____");

gQ.start = function(){
	gQ('h1').text('Why, Hello There!');
};

//window.onload = function() {
//	console.log("window is loaded");
//};
//
//
//addOnReady(function() {
//	console.log("2 window is loaded");
//});

//addOnReady(function() {
//	console.log("3 window is loaded");
//        if(document.querySelectorAll && document.querySelectorAll('body:first-of-type')){
//                q = function(parm){
//                        return document.querySelectorAll(parm);
//                };
//                
//                onReadySelect();
//        
//        }else{
//            loadScript('js/sizzle.js', function(){
//                q = Sizzle;
//                onReadySelect();
//                });    
//        }
//});
//
//function onReadySelect(){
//        var subTitle = q('subTitle'),
//        innerText = (subTitle.innerText===undefined) ? 'textContent' : 'innerText';
//        
//        subTitle[innerText] = "This is new dynamic text";
//}
//
//addOnReady(function() {
//	console.log("4 window is loaded");
//        if(Modernizr.audio.mp3){
//                var snd = new Audio();
//                snd.src = "./media/bubbles.mp3";
//                snd.play();
//        }
//});

//function addOnReady(fun) {
//	var last = window.onload;
//	var isReady = false;
//	if (document.addEventListener) {
//		document.addEventListener('DOMContentLoaded', function() {
//			console.log("DOM is loaded");
//			isReady = true;
//			fun();
//		});
//	}
//	window.onload = function() {
//		if (last) last();
//		if (isReady) fun();
//	};
//}

//function loadScript(path, callback){
//        var js = document.createElement('script');
//        js.src = path;
//        js.type = 'text/javascript';
//        js.onLoad = function(){
//                callback();
//                this.onload = this.onreadystatechange = null;
//        };
//        js.onreadystatechange = function(){
//              if(this.readState == 'complete'){
//                this.onload();
//                }  
//        };
//        
//        document.getElementsByTagName('head')[0].appendChild(js);
//}