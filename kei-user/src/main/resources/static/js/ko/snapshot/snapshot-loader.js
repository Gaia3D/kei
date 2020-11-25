/**
 * 
 */
Snapshot.Loader = function(magoManager) {
	var magoManagerClass = (window['Mago3D']) ? Mago3D.MagoManager : MagoManager;
	if(!magoManager || !(magoManager instanceof magoManagerClass)) {
		throw new Error('magoManager is required');
	}
	
	this.magoManager = magoManager;
	this.snapshotStore = {};
}

Snapshot.Loader.prototype.load = function(url) {
	var that = this;
	$.ajax({
		url: url,
	    type: "GET",
	    headers: {"X-Requested-With": "XMLHttpRequest"},
	    dataType: "json",
	    success: function(msg){
	        console.info(msg);
	        if(!that.snapshotStore[url]) that.snapshotStore[url] = {};
	        
	    },
	    error:function(request,status,error){
	    	alert(JS_MESSAGE["ajax.error.message"]);
	    }
	});
}

Snapshot.Loader.prototype.delete = function() {

}

Snapshot.Loader.prototype.render = function() {

}

Snapshot.Loader.loadJSON = function(json) {
	
}

Snapshot.Loader.loadURL = function(url) {
	
}