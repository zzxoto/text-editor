import {Text} from '../src/model/Text';

describe('Insert', () => {
  
  it ('inserting within bounds', () => {
    let text = new Text();

    text.insert(0, ['a', 'b', 'c']);

    expect(text.length).toBe(3);
  })

  it ('inserting beyond bounds', () => {
    let text = new Text();
    try {
      text.insert(1, ['a', 'b', 'c']);
      fail('text.insert expected to fail')
    }
    catch(err) { 
      expect(text.length).toBe(0);
    }
  })

  it ('inserting below lower bound', () => {
    let text = new Text();
    try {
      text.insert(-1, ['a', 'b', 'c']);
      fail('text.insert expected to fail');
    }
    catch(err) { 
      expect(text.length).toBe(0);
    }
  })


  it ('inserting in middle', () => {
    let text = new Text();

    text.insert(0, ['a', 'c']);
    text.insert(1, ['b']);

    expect(text.chars[0]).toBe('a');
    expect(text.chars[1]).toBe('b');
    expect(text.chars[2]).toBe('c');
  })

  it ('inserting at end', () => {
    let text = new Text();

    text.insert(0, ['a', 'b']);
    text.insert(2, ['c']);

    expect(text.chars[0]).toBe('a');
    expect(text.chars[1]).toBe('b');
    expect(text.chars[2]).toBe('c');
  })

  it ('inserting in begining', () => {
    let text = new Text();

    text.insert(0, ['b', 'c']);
    text.insert(0, ['a']);

    expect(text.chars[0]).toBe('a');
    expect(text.chars[1]).toBe('b');
    expect(text.chars[2]).toBe('c');
  })
})


describe('Delete', () => {
  

  it('deleting at very begining should throw error', () => {
    let text = new Text();

    try {
      text.delete(0, 0);
      fail('text.delete should have failed');
    }
    catch(err) {
      expect(text.length).toBe(0);
    }
  });

  describe('successful deletes', () => {
    let text;

    beforeEach(() => {
      text = new Text();
      text.insert(0, ['a', 'b', 'c']);
    })

    it('deleting from 0 to 0', () => {
      text.delete(0, 0);

      expect(text.chars[0]).toBe('b');
      expect(text.chars[1]).toBe('c');
      expect(text.length).toBe(2);
    })
    it('deleting from 0 to 1', () => {
      text.delete(0, 1);

      expect(text.chars[0]).toBe('c');
      expect(text.length).toBe(1);
    })
    it('deleting from 1 to 2', () => {
      text.delete(1, 2);

      expect(text.chars[0]).toBe('a');
      expect(text.length).toBe(1);
    })
    it('deleting from 0 to 2', () => {
      text.delete(0, 2);

      expect(text.length).toBe(0);
    })
  });

  describe('unsuccesfull deletes', () => {
    let text;

    beforeEach(() => {
      text = new Text();
      text.insert(0, ['a', 'b', 'c']);
    });

    it ('from < 0 or to < 0. Index out of bounds', () => {
      try {
        text.delete(-1, -1);
        fail('text.delete should have failed');
      }
      catch(err) {
        expect(text.length).toBe(3);
      }
    });

    it ('from >= length or to >= length. Index out of bounds', () => {
      try {
        text.delete(3, 3);
        fail('text.delete should have failed');
      }
      catch(err) {
        expect(text.length).toBe(3);
      }
    });

    it ('from < to. IllegalArgument', () => {
      try {
        text.delete(2, 1)
        fail('text.delete should have failed');
      }
      catch(err) {
        expect(text.length).toBe(3);
      }
    });
  })


})

describe('getNextNewLineIndex', () => {
  let text = new Text();
  text.insert(0, ['\n', 'b', '\n', 'c', '\n', 'd']);

  it('next new line at 2', () => {
    let i = text.getNextNewLineIndex(0);
    expect(i).toBe(2);    
  })

  it('next new line at 2 #2', () => {
    let i = text.getNextNewLineIndex(1);
    expect(i).toBe(2);
  })

  it('next new line at 4', () => {
    let i = text.getNextNewLineIndex(2);
    expect(i).toBe(4);
  })

  it('next new line at 4 #2', () => {
    let i = text.getNextNewLineIndex(3);
    expect(i).toBe(4);
  })

  it('next new line -1', () => {
    let i = text.getNextNewLineIndex(4);
    expect(i).toBe(-1);
  })

  it('next new line -1 #2', () => {
    let i = text.getNextNewLineIndex(5);
    expect(i).toBe(-1);
  })

  it ('next new line. Index out of bounds #1', () => {
    try {
      let i = text.getNextNewLineIndex(-1);
      fail('It should have thrown error');
    }
    catch(err) { }
  })

  it ('next new line. Index out of bounds #2', () => {
    try {
      let i = text.getNextNewLineIndex(6);
      fail('It should have thrown error');
    }
    catch(err) { }
  })
})

describe('getPrevNewLineIndex', () => {
  let text = new Text();
  text.insert(0, ['\n', 'b', '\n', 'c', '\n', 'd']);

  it('prev new line at 0 #1', () => {
    let i = text.getPrevNewLineIndex(1);
    expect(i).toBe(0);
  })

  it('prev new line at 0 #2', () => {
    let i = text.getPrevNewLineIndex(2);
    expect(i).toBe(0);
  })

  it('prev new line at 2 #1', () => {
    let i = text.getPrevNewLineIndex(3);
    expect(i).toBe(2);
  })

  it('prev new line at 2 #2', () => {
    let i = text.getPrevNewLineIndex(4);
    expect(i).toBe(2);
  })

  it('prev new line at 4', () => {
    let i = text.getPrevNewLineIndex(5);
    expect(i).toBe(4);
  })

  it('prev new line -1', () => {
    let i = text.getPrevNewLineIndex(0);
    expect(i).toBe(-1);
  })

  it('prev new line. Index out of bounds #1', () => {
    try {
      let i = text.getPrevNewLineIndex(-1);
      fail('It should have thrown error');
    }
    catch(err) { }
  })

  it('prev new line. Index out of bounds #2', () => {
    try {
      let i = text.getPrevNewLineIndex(6);
      fail('It should have thrown error');
    }
    catch(err) { }
  })
})









