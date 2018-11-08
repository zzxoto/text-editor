import {SafeInsert as Insert} from '../src/model/Insert';
import {Text} from '../src/model/Text';
import {getArrFromIterator} from './util';

describe('should insert with success', () => {
  it ('insert at begining', () => {
    let text = new Text();
    text.insert(0, ['c']);

    new Insert(text, 0, ['a', 'b']).exec();
    let arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);
  })
  
  it ('insert at middle', () => {
    let text = new Text();
    text.insert(0, ['a', 'c']);

    new Insert(text, 1, ['b']).exec();
    let arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);
  })

  it ('insert at end', () => {
    let text = new Text();
    text.insert(0, ['a', 'b']);

    new Insert(text, 2, ['c']).exec();
    let arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);
  })
})

describe('should revert changes', () => {
  it ('insert at begining', () => {
    let text = new Text();
    text.insert(0, ['b', 'c']);

    let ins = new Insert(text, 0, ['a']).exec();
    let arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);

    ins.revert();
    arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['b', 'c', 'EOF']);
  })
  
  it ('insert at middle', () => {
    let text = new Text();
    text.insert(0, ['a', 'c']);

    let ins = new Insert(text, 1, ['b']).exec();
    let arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);

    ins.revert();
    arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'c', 'EOF']);
  })

  it ('insert at end', () => {
    let text = new Text();
    text.insert(0, ['a', 'b']);

    let ins = new Insert(text, 2, ['c']).exec();
    let arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);

    ins.revert();
    arr = getArrFromIterator(text.iterator());
    
    expect(arr).toEqual(['a', 'b', 'EOF']);
  })
})

describe('should throw appropriate errors', () => {
  it('calling exec twice', () => {
    let text = new Text();
    let ins = new Insert(text, 0, ['a']).exec();

    try {
      ins.exec();
      fail('it should have thrown error.');
    }
    catch(err) { }
  })

  it('calling revert without calling exec', () => {
    let text = new Text();
    let ins = new Insert(text, 0, ['a']);

    try {
      ins.revert();
      fail('it should have thrown error');
    }
    catch(err) { }
  })

  it('calling revert twice', () => {
    let text = new Text();
    let ins = new Insert(text, 0, ['a']).exec();
    ins.revert();

    try {
      ins.revert();
      fail('it should have thrown error.')
    }
    catch(err) { }
  })
})

describe('state after multiple reverts', () => {
  it ('should be valid', () => {
    let text = new Text();
    text.insert(0, ['b', 'c']);

    let ins = new Insert(text, 0, ['a']).exec();
    let arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);

    let del = ins.revert();
    arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['b', 'c', 'EOF']);

    ins = del.revert();
    arr = getArrFromIterator(text.iterator());

    expect(arr).toEqual(['a', 'b', 'c', 'EOF']);
  })
})

