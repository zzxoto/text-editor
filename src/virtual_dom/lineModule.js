import * as globals from '../globals.js';
import LineFactory from './line.js';

function LineModule(){
	this.head = new LineFactory();
	this.lastLineIndex = 0;

	/*
		Inserts new Line with arr @param{arr} at index @param`index`
	*/
	this.addLine = function(index, arr=[]){
		this.lastLineIndex++;
		
		let newLine = new LineFactory();
		newLine.line = arr;

		if(index == 0){
			newLine.next = this.head;
			this.head = newLine;
			return;
		}

		var curr = this.head;
		var prev = curr;

		while(index > 0){
			prev = curr;
			curr = curr.next;
			index--;
		}

		prev.next = newLine;
		newLine.next = curr;
	};

	/*
		Removes line at index index
	*/
	this.removeLine = function(index){
		if(this.lastLineIndex == 0)
			return;
		this.lastLineIndex--;
		
		if(index == 0){
			this.head = this.head.next;
			return;
		}

		var curr = this.head;
		var prev = curr;

		while(index > 0){
			prev = curr;
			curr = curr.next;
			index--;
		}

		prev.next  = curr.next;
	};

	
	this.getLine = function(index){
		if(index > this.lastLineIndex)
			return null;
		
		var curr = this.head;
		while(index > 0){
			curr = curr.next;
			index--;
		}
		// console.log("getLine");
		// console.log(curr);
		return curr;
	}

	/*
		Simulating map function on linked List
	*/
	this.map = function(callback){
		var _head = this.head;
		var toReturn = [];
		var index = 0;

		while(_head){
			toReturn.push(callback(_head.line, index))
			_head = _head.next;
			index++;
		}
		return toReturn;
	}

	this.print = function(){
		var _head = this.head;
		while(_head){
			console.log(_head.line);
			_head = _head.next;
		}
	}
}

export default new LineModule();
