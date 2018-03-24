import PubSub from '../public/pubSub';
//import virtualDOM from '../public/virtualDOM';

function pubsub(){
	var a = (args)=>{console.log(args)};
	var b = (args)=>{console.log(args)};
	let pubsub = new PubSub();

	let p = {x: 1};
	p = {...p, ...pubsub};
	p.subscribe(a);
	p.subscribe(b);
	p.publish("hello world");
	////
	console.log('pubSub test completed');	
}

// function vDOM(){
// 	virtualDOM.insertChar(0, 1, "a");

// }

function scribbles(){
}


export {pubsub, scribbles}