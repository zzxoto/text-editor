//do before UndoRedo
import {UndoRedoSession} from '../src/model/UndoRedoSession';

describe('#add', () => {

  it ('calling add after revert is triggered should throw error', () => {
    let stub = {revert: function(){ return this; }};
    
    let u = new UndoRedoSession();
    u.add(stub);
    u.revert();

    try {
      u.add(stub);
      fail('it should have thrown error');
    }
    catch(err) { }
  });
});


describe('#revert', () => {
  
  it('should throw error when not added anything', () => {
    let u = new UndoRedoSession();

    try {
      u.revert();
      fail('it should have thrown error');
    }
    catch(err) { }
  });

  //create fancy mock and test, if order of revert is as is supposed to be
  it ('should revert in opposite order than when added', () => {
    let x;
    let stub1 = {revert: function() { x = 0; return this; }},
      stub2 = {revert: function() { x = 1; return this; }};

    let u = new UndoRedoSession();
    u.add(stub1);
    u.add(stub2);

    u.revert();
    expect(x).toBe(0);
  })

  it('when reverted twice should be valid state', () => {
    let x;
    let stub1 = {revert: function() { x = 0; return this; }},
      stub2 = { revert: function() { x = 1; return this; }};

    let u = new UndoRedoSession();
    u.add(stub1);
    u.add(stub2);

    u.revert();
    expect(x).toBe(0);

    u.revert();
    expect(x).toBe(1);
  })
})