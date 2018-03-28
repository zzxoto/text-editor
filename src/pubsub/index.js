
//prototype function
export default function(){
	this.subscribers = [];
	
	this.publish = function(type, payload){
		for(var i = 0; i < this.subscribers.length; i++){
			if(this.subscribers[i].type === type)
				this.subscribers[i].callback(payload);
		}
	};

	this.subscribe = function(type, callback){
		this.subscribers.push({type, callback});
	}
}