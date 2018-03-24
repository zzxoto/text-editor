import pubSub from '../pubSub'
import BlockFactory from './block.js'
import * as globals from '../globals'

let virtualDOM = {
	/*
	structure object "key" -> "block" i.e. key maps to 'block'
	'block' -> 20 lines worth of text
	each block is an 2d array
	each array is a line of text
	a line is an array of characters
	block[0] contains lines 0 to 19
	block [1] contains lines 20 to 39...
*/
  structure:{
  	0: new BlockFactory()
  },

  getLastBlockIndex: function(){
  	var keys = Object.keys(this.structure);
    return this.structure[keys.length - 1];
  },

  /*
    if line @param lineIndex is described inside the block, returns blockIndex, else returns last blockIndex
  */
  getBlockIndex: function(lineIndex){
    var i = Math.floor(lineIndex/globals.block_size);
    return (i >= this.getLastBlockIndex())? this.getLastBlockIndex(): i;

  },

  getLine: function(lineIndex){
  	var block = this.structure[this.getBlockIndex(lineIndex)];
  	var relativeLine = lineIndex%globals.block_size;//relative to current block
  	return block[relativeLine];
  },
  
  /*
    currently only allows character fill in single array
    returns index of block to be rerendered
  */
  insertChar: function(lineIndex, letterIndex, char){
  	var block = this.structure[this.getBlockIndex(lineIndex)];
    block.insertChar(lineIndex, letterIndex, char);
    this.publish([this.getBlockIndex(lineIndex)]);
  },

  /*
    Returns true if Our vDOM is big enough to encapsulate line @param lineIndex
  */
  containsLine: function(lineIndex){
    var blockIndex = this.getBlockIndex(lineIndex);
    var block = this.structure[blockIndex];
    var l = block.getLastLineIndex();
    return ((blockIndex * globals.block_size) + l) <= lineIndex;
  },
  

  lineContainsLetter: function(lineIndex, letterIndex){
    if(this.containsLine(lineIndex)){
      var block = this.structure[this.getBlockIndex(lineIndex)];
      return block.lineContainsLetter(lineIndex % globals.block_size, letterIndex);
    }
    return false;
  },

  getLastLetterIndex: function(lineIndex){
    var block = this.structure[this.getBlockIndex(lineIndex)];
    return block.getlastLetterIndex(lineIndex % globals.block_size);
  }

};
virtualDOM = {...virtualDOM, ...new pubSub()};

//FOR TESTING PURPOSE
virtualDOM.prettyPrint = function(){
  for(var i in this.structure){
    block = this.structure[i];
    block.prettyPrint();
  }
}

export default virtualDOM;


