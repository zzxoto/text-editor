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
    if line @param lineIndex is described inside the block, returns blockIndex, else returns last blockIndex
  */
  getBlockIndex: function(lineIndex){
    var i = Math.floor(lineIndex/globals.block_size);
    return (i >= this.getLastBlockIndex())? this.getLastBlockIndex(): i;
  },

  /*  
    if line @param lineIndex is inside existing blocks, returns block. Else create new BLock
    ONLY USED BY insert char
  */
  getNextBlock: function(lineIndex){  
    var i = Math.floor(lineIndex/globals.block_size);
    if(i < this.getLastBlockIndex())
      return this.structure[i];
    else{
      this.appendNewBlock(); 
      return this.structure[this.getLastBlockIndex()];
    }
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
    adds new block
  */
  appendNewBlock: function(){
    this.structure[this.getLastBlockIndex() + 1] = new BlockFactory();
  },

  /*
    Returns True if line is big enough to contain index @param letterIndex
  */
  lineContainsLetter: function(lineIndex, letterIndex){
    var block = this.structure[this.getBlockIndex(lineIndex)];
    return block.lineContainsLetter(lineIndex % globals.block_size, letterIndex);
  }, 
 
  /*
    char => [a-zA-Z0-9[[Symbols]][[Space]]]
    returns array of affected block in the process of inserting the character
  */
  insertChar: function(lineIndex, letterIndex, char, blocksAffected = new Set()){
    var block = this.getNextBlock(lineIndex);
    var carryOver = block.insertChar(lineIndex, letterIndex, char);
    if (carryOver){
      blocksAffected.add(this.getBlockIndex(lineIndex));
      this.insertChar(lineIndex + 1, 0, carryOver, blocksAffected);
      return;
    }
    else{
      this.publish("blocksAffected",{
       blocksAffected: Array.from(blocksAffected)
     });
      this.publish("caret",{
        right: 1
      })
    }
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
