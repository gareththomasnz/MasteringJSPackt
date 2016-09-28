(function(scope, isForgiving) {
	var version = 1.0002;

	console.log("My version is " + version);

	var gQ = function(selector, context) {

	};
        
        
	gQ.loadJS = function() {

	};
        
        
        
	gQ.version = function() {
		return version;
	};
        
        if(!window.gQ){
                window.gQ = gQ;
        }else{
                if(isForgiving && window.gQ.version){
                        window.gQ = window.gQ.version()>version ? window.gQ : gQ;
                }else{
                      throw new Error("You can not load the library twice");  
                }
                
        }

}(window,true));