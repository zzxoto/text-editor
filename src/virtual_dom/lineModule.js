import globals from '../globals.js';
import LineFactory from './line.js';

function LineModule(){
	this.head = new LineFactory();
	this.lastLineIndex = 0;

	/*
		Inserts line at index @param index
	*/
	this.addLine = function(index){
		this.lastLineIndex++;
		let newLine = new LineFactory();
		
		if(index == 0){
			newLine.next = this.head;
			this.head = newLine;
			return;
		}

		var curr = head;
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
		return curr;
	}
}

export default new LineModule();
