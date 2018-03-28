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
      this.done("blocksAffected",{
       blocksAffected: Array.from(blocksAffected)
     });
      this.done("caret",{
        right: 1
      })
    }
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
      this.done("caret", {
        left: 1
      });
    }
    else{
      var shiftedLine = this._shiftUp(lineIndex);
      var blocksAffected = this._bulkInsert(shiftedLine, lineIndex - 1, this.getLastLetterIndex(lineIndex - 1));
      this.done("blocksAffected",{
        blocksAffected: Array.from(blocksAffected)
      });
      this.done("caret", {
        absolute: this.getLastletterIndex(lineIndex)
      });
    }
  },

  /*
    Returns True if line is big enough to contain index @param letterIndex
  */
  lineContainsLetter: function(lineIndex, letterIndex){
    var block = this.structure[this.getBlockIndex(lineIndex)];
    return block.lineContainsLetter(lineIndex % globals.block_size, letterIndex);
  },


  /*
    Invoked by _bulkInsert
    Same as insert Char it does not call `this.done` at the end;
  */
  _insertChar: function(lineIndex, letterIndex, char, blocksAffected = new Set()){
    var block = this.getNextBlock(lineIndex);
    var carryOver = block.insertChar(lineIndex, letterIndex, char);
    if (carryOver){
      blocksAffected.add(this.getBlockIndex(lineIndex));
      this._insertChar(lineIndex + 1, 0, carryOver, blocksAffected);
      return;
    }
  },

  /*
    Inserts each character in {Array}`toInsert` onto the line at `lineIndex` at position `letterIndex`
    if line is not completely filled:
      "shift" array and insert somewhere between the line
    if line is already completely filled:
      "pop" array and insert at the end of the line. SUBTLE TRICK!!
  */
  _bulkInsert: function(toInsert, lineIndex, letterIndex){
    var blocksAffected = new Set();
    var block = this.structure[this.getBlockIndex(lineIndex)];
    var line = block.getLine(lineIndex % 20);
    
    while(toInsert.length > 0){
      if(letterIndex >= globals.line_size)//letterIndex is beyond the end of the line
        this._insertChar(lineIndex, globals.line_size, toInsert.pop(), blocksAffected);
      else//letterIndex is withIn the capacity of line
        this._insertChar(lineIndex, letterIndex, toInsert.shift(), blocksAffected);
      letterIndex++;
    }
    return blocksAffected;
  },

  /*
    Removes the line @param lineIndex and shifts everything underneath, one Line up
  */
  _shiftUp: function(lineIndex, blockIndex, shiftedArray){
    if(!blockIndex){
      //when the method is called for first time
      return this._shiftUp(lineIndex, this.structure.length - 1, []);
    }
    else if(this.getBlockIndex(lineIndex) === blockIndex){
      //array @param lineIndex is finally popped up and returned
      var block = this.structure[blockIndex];
      var _shiftedArray = block._shiftUp(lineIndex);
      block.setLine(globals.block_size - 1, shiftedArray);
      return _shiftedArray;
    }
    else{
      //recursively popping first array and passing it as the parameter.
      var block = this.structure[blockIndex];
      var _shiftedArray = block._shiftUp();
      block.setLine(globals.block_size - 1, shiftedArray);
      return this._shiftUp(lineIndex, blockIndex - 1, _shiftedArray);
    }
  };

  }

  done: function(arr){
    var blocks = {};
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
