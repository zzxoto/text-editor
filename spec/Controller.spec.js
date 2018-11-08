import {Controller} from '../src/model/Controller';
import {UndoRedo} from '../src/model/UndoRedo';
import {Cursor} from '../src/model/Cursor';
import {Text} from '../src/model/Text';


describe('up', () => {
    let cursor, text, undoRedo;
    beforeEach(() => {
        cursor = new Cursor();
        undoRedo = new UndoRedo();
        text = new Text();
    })
    it ('when at first line', () => {
        text.insert(0, ['a', 'b', 'c']);

        cursor.head = 1;
        cursor.tail = 1;

        let c = new Controller(undoRedo, cursor, text);
        c.up();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);
    })

    it ('when at very start of first line', () => {
        text.insert(0, ['a', 'b', 'c']);

        cursor.head = 0;
        cursor.tail = 0;

        let c = new Controller(undoRedo, cursor, text);
        c.up();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);
    })

    it ('when at second line; cursor situated further than end of first line', () => {
        text.insert(0, ['a', 'b', 'c', '\n', 'a', 'b', 'c', 'd']);

        cursor.head = 8;
        cursor.tail = 8;

        let c = new Controller(undoRedo, cursor, text);
        c.up();

        expect(cursor.head).toBe(3);
        expect(cursor.tail).toBe(3);
    })

    it ('when at second line; cursor situated before than end of first line', () => {
        text.insert(0, ['a', 'b', 'c', '\n', 'a', 'b', 'c', 'd']);

        cursor.head = 5;
        cursor.tail = 5;

        let c = new Controller(undoRedo, cursor, text);
        c.up();

        expect(cursor.head).toBe(2);
        expect(cursor.tail).toBe(2);
    })

    it ('when at second line; cursor situated same as end of first line', () => {
        text.insert(0, ['a', 'b', 'c', '\n', 'a', 'b', 'c', 'd']);

        cursor.head = 7;
        cursor.tail = 7;

        let c = new Controller(undoRedo, cursor, text);
        c.up();

        expect(cursor.head).toBe(3);
        expect(cursor.tail).toBe(3);
    })

    it ('when in selection', () => {
        text.insert(0, ['a' , 'b', 'c']);
        
        cursor.tail = 1;
        cursor.head = 2;

        let c = new Controller(undoRedo, cursor, text);
        c.up();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);
    })
})

describe('down', () => {
    it ('when at last line', () => {

    })

    it ('when at end of last line', () => {

    })

    it ('when at second-last line; second-last line longer than last line', () => {

    })

    it ('when at second-last line; second-last line shorter than last line', () => {

    })

    it ('when at second-last line; second-last line same length as last line', () => {

    })

    it ('when in selection', () => {
        
    })
})

describe('left', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    
    it('when cursor at very begining', () => {
        
    })
    
    it('when cursor is in middle', () => {
        
    })
    
    it('when cursor is at end', () => {
        
    })

    it('when cursor is in selection', () => {

    })
})

describe('right', () => {
    let text = new Text();
    text.insert(0, ['a', 'b', 'c']);

    
    it('when cursor at very begining', () => {
        
    })
    
    it('when cursor is in middle', () => {
        
    })
    
    it('when cursor is at end', () => {
        
    })

    it('when cursor is in selection', () => {

    })
})

describe('shiftUp', () => {

    describe('without selection', () => {
        it ('when at first line', () => {
    
        })
    
        it ('when at begining of first line', () => {
    
        })
    
        it ('when at second line; second line longer than first line', () => {
    
        })
    
        it ('when at second line; second line shorter than first line', () => {
    
        })
    
        it ('when at second line; second line as same as first line', () => {
    
        })
    })

    describe('with selection', () => {
        describe('selection head to right of selection tail', () => {
            it('tail at begining of first line; head in same line', () => {

            })

            it('tail at first line; head at second line, aligned left of tail', () => {

            })
            it('tail at first line; head at second line, aligned in same pos as tail', () => {

            })
            it('tail at first line; head at second line, aligned right of tail', () => {

            })
        })

        describe('selection tail to right of selection head', () => {
            it('head at begining of first line', () => {

            })

            it('head at first line; tail at second line, aligned left of head', () => {

            })
            it('head at first line; tail at second line, aligned in same pos as head', () => {

            })
            it('head at first line; tail at second line, aligned right of head', () => {

            })
        })
    })
});



describe('shiftDown', () => {
    describe('without selection', () => {
        it ('when at last line', () => {

        })
    
        it ('when at end of last line', () => {
    
        })
    
        it ('when at second-last line; second-last line longer than last line', () => {
    
        })
    
        it ('when at second-last line; second-last line shorter than last line', () => {
    
        })
    
        it ('when at second-last line; second-last line same length as last line', () => {
    
        })
    })

    describe('with selection', () => {
        describe('selection head to right of selection tail', () => {
            it('head at end of last line; tail in same line', () => {

            })

            it('head at last line; tail at second-last line, aligned left of head', () => {

            })
            it('head at last line; tail at second-last line, aligned in same pos as head', () => {

            })
            it('head at last line; tail at second-last line, aligned right of head', () => {

            })
        })
        describe('selection tail to right of selection head', () => {
            it('tail at end of last line; head in same line', () => {

            })

            it('tail at last line; head at second-last line, aligned left of tail', () => {

            })

            it('tail at last line; head at second-last line, aligned same pos as tail', () => {

            })

            it('tail at last line; head at second-last line, aligned right of tail', () => {

            })
        })
    })
});


describe('shiftLeft', () => {

    it('cursor without selection and at very begining', () => {

    })

    it('cursor without selection and  in middle', () => {

    })

    it('cursor without selection and is at end', () => {

    })

    it('cursor with selection and head to right of tail', () => {

    })

    it('cursor with selection and tail to the right of head', () => {

    })

    it('cursor with selection; tail at very begining; head to right of tail', () => {

    })

    it('cursor with selection; head at very begining; tail to right of head', () => {

    })
});


describe('shiftRight', () => {
    it('cursor without selection and at very begining', () => {

    })

    it('cursor without selection and  in middle', () => {

    })

    it('cursor without selection and is at end', () => {

    })

    it('cursor with selection and head to right of tail', () => {

    })

    it('cursor with selection and tail to the right of head', () => {

    })

    it('cursor with selection; tail at very end; tail to right of head', () => {

    })

    it('cursor with selection; head at very end; head to right of tail', () => {

    })
});


describe('insert', () => {
    describe('insert one valid', () => {

    })

    describe('insert many valid', () => {
    
    })

    describe('insert when selection', () => {

    })
});


describe('delete', () => {
    describe('delete one valid', () => {

    })

    describe('delete when selection', () => {

    })

    describe('delete should do nothing', () => {

    })
})

describe('backspace', () => {
    describe('backspace one valid', () => {
    
    })

    describe('backspace when selection', () => {
    
    })

    describe('backspace should do nothing', () => {
    
    })    
})

describe('copy', () => {

})

describe('paste', () => {

})

describe('undo', () => {

})

describe('redo', () => {

})

