import PubSub from '../pubsub'
import BlockFactory from './block.js'
import * as globals from '../globals'

let virtual_dom = {
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
    return keys[keys.length - 1];  
  },

  /*
    if line @param lineIndex is described insi  de the block, returns blockIndex, else returns last blockIndex
  */
  getBlockIndex: function(lineIndex){
    var i = Math.floor(lineIndex/globals.block_size);
    return (i >= this.getLastBlockIndex())? this.getLastBlockIndex(): i;
  },

  /*
    adds new block
  */
  appendNewBlock: function(){
    this.structure[this.getLastBlockIndex() + 1] = new BlockFactory();
  }

  /*  
    if line @param lineIndex is inside existing blocks, returns block. Else create new BLock
    ONLY USED BY insert char
  */
  getNextBlock(lineIndex){  
    var i = Math.floor(lineIndex/globals.block_size);
    if(i < this.getLastBlockIndex())
      return this.structure[i];
    else{
      this.appendNewBlock(); 
      return this.structure[this.getLastBlockIndex()];
    }
  }

  getLine: function(lineIndex){
  	var block = this.structure[this.getBlockIndex(lineIndex)];
  	var relativeLine = lineIndex%globals.block_size;//relative to current block
  	return block[relativeLine];
  },
  
  /*
    char => [a-ZA-Z0-9[[Symbols]][[Space]]]
    returns array of affected block in the process of inserting the character
  */
  insertChar: function(lineIndex, letterIndex, char, blocksAffected = new Set()){
    var block = this.getNextBlock(lineIndex);
    var carryOver = block.insertChar(lineIndex, letterIndex, char);
    if (carryOver){
      blocksAffected.add(this.getBlockIndex(lineIndex));
      return this.insertChar(lineIndex + 1, 0, carryOver, blocksAffected);
    }
    else
      return Array.from(blocksAffected);
  },

  /*
    If backspace somewhere between the characters:
     just remove the character
    else if backspace is at begining of line:
      shift the entire structure one step up until the line @parm lineIndex
      add the characters in line @param lineIndex to  line at lineIndex - 1
  */
  insertBackSpace: function(lineIndex, letterIndex, blockIndexSet){
    var block = this.structure[this.getBlockIndex(lineIndex)];
    if(letterIndex > 0){
      block.removeChar(lineIndex, letterIndex);
    }
    else{
      var shiftedLine = this.shiftUp(lineIndex);
      this.bulkInsert(shiftedLine, lineIndex - 1, this.getLastLetterIndex(lineIndex - 1));
    }
  }

  /*
    Returns True if line is big enough to contain index @param letterIndex
  */
  lineContainsLetter: function(lineIndex, letterIndex){
    var block = this.structure[this.getBlockIndex(lineIndex)];
    return block.lineContainsLetter(lineIndex % globals.block_size, letterIndex);
  },

  getLastLetterIndex: function(lineIndex){
    var block = this.structure[this.getBlockIndex(lineIndex)];
    return block.getLastLetterIndex(lineIndex % globals.block_size);
  },

  getLastLineIndex: function(){
    var lastBlock = this.structure[this.getLastBlockIndex()];
    return lastBlock.getLastLineIndex();
  },

  /*
    Inserts each character in {Array}`toInsert` onto the line at `lineIndex` at letter `letterIndex`
    if line is not completely filled:
      "shift" array and insert into the line
    if line is already completely filled:
      "pop" array and insert SUBTLE TRICK!!
  */
  bulkInsert: function(toInsert, lineIndex, letterIndex){
    var blocksAffected = new Set();
    var block = this.structure[this.getBlockIndex(lineIndex)];
    var line = block.getLine(lineIndex % 20);
    
    while(toInsert.length > 0){
      if(letterIndex >= globals.line_size - 1)//letterIndex is beyond the end of the line
        this.insertChar(lineIndex, globals.line_size, toInsert.pop(), blocksAffected);
      else//letterIndex is withIn the capacity of line
        this.insertChar(lineIndex, letterIndex, toInsert.shift(), blocksAffected);
      letterIndex++;
    }
    return Array.from(blocksAffected);
  }
};
virtual_dom = {...virtual_dom, ...new PubSub()};

//FOR TESTING PURPOSE
virtual_dom.prettyPrint = function(){
  for(var i in this.structure){
    block = this.structure[i];
    block.prettyPrint();
  }
}
export default virtual_dom;
