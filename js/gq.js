(function(win) {
	var version = 1.0003;
	var doc = window.document;
	var q;
	
	console.log("My version is " + version);
	

	var gQ = function(selector, context) {
		return q(selector);
	};
	
	
	gQ.loadJS = function(path, callback){
        var js = doc.createElement('script');
        js.src = path;
        js.type = 'text/javascript';
        js.onLoad = function(){
                callback();
                this.onload = this.onreadystatechange = null;
        };
        js.onreadystatechange = function(){
              if(this.readState == 'complete'){
                this.onload();
                }  
        };
	      
        doc.getElementsByTagName('head')[0].appendChild(js);
	};
	
	gQ.ready = function(fun) {
	var last = window.onload;
	var isReady = false;
	if (doc.addEventListener) {
		doc.addEventListener('DOMContentLoaded', function() {
			console.log("DOM is loaded");
			isReady = true;
			fun();
		});
	}
	window.onload = function() {
		if (last) last();
		if (isReady) fun();
	};
}
	
	gQ.start = function(){};
	gQ.version = function() {
		return version;
	};
	
	gQ.ready(function(){
		if(doc.querySelectorAll && doc.querySelectorAll('body:first-of-type')){
                q = function(parm){
                        return doc.querySelectorAll(parm);
                };
                
                gQ.start();
        
        }else{
            loadScript('js/sizzle.js', function(){
                q = Sizzle;
                gQ.start();
                });    
        }
});	
	
        
        if(!window.gQ){
                window.gQ = gQ;
        }else{
                
        }

}(window));
