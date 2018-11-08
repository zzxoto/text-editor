//do before UndoRedoSession
import {SafeDelete as Delete} from '../src/model/Delete';
import {Text} from '../src/model/Text';
import {getArrFromIterator} from './util';

describe('should delete with success', () => {
  it ('delete at begining', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    new Delete(text, 0, 0).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['b', 'c', 'EOF']);
  })
  
  it ('delete at middle', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    new Delete(text, 1, 1).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'c', 'EOF']);
  })

  it ('delete at end', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    new Delete(text, 2, 2).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'b', 'EOF']);
  })

  it ('delete many', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    new Delete(text, 0, 1).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['c', 'EOF']);
  })

  it ('delete all', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    new Delete(text, 0, 2).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['EOF']);
  })

})

describe('should revert changes', () => {
  it ('delete at begining', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    let del = new Delete(text, 0, 0).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['b', 'c', 'EOF']);

    del.revert();
    arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);
  })
  
  it ('delete all', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    let del = new Delete(text, 0, 2).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['EOF']);

    del.revert();
    arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);
  })  
})

describe('should throw appropriate errors', () => {
  it('calling exec twice', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    let del = new Delete(text, 0, 0).exec();

    try {
      del.exec();
      fail('it should have thrown error');
    }
    catch(err) { }
  })

  it('calling revert without calling exec', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    let del = new Delete(text, 0, 0);

    try {
      del.revert();
      fail('it should have thrown error');
    }
    catch(err) { }
  })

  it('calling revert twice', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    let del = new Delete(text, 0, 0).exec()
    del.revert();

    try {
      del.revert();
      fail('it should have thrown error');
    }
    catch(err) { }
  })
})

describe('state after multiple reverts', () => {
  it ('should be valid', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    let del = new Delete(text, 0, 0).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['b', 'c', 'EOF']);

    let ins = del.revert();
    arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);

    del = ins.revert();
    arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['b', 'c', 'EOF']);
  })
})