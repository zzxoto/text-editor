import {Cursor} from '../src/model/Cursor';
import {SaveCursor} from '../src/model/SaveCursor';

describe('SaveCursor', () => {
    it('calling revert twice should throw error', () => {
        let cursor = new Cursor(),
            saveCursor = new SaveCursor(cursor);

        saveCursor.revert();

        try{
            saveCursor.revert();
            fail('it should have thrown error');
        }
        catch(err) { }
    })

    it('Reverting once', () => {
        let cursor = new Cursor(),
            saveCursor = new SaveCursor(cursor);
        
        cursor.head = 2;
        cursor.tail = 2;

        saveCursor.revert();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);
    })

    it('should cursor state be valid when reverting several times', () => {
        let cursor = new Cursor(),
            saveCursor = new SaveCursor(cursor);
        
        cursor.head = 2;
        cursor.tail = 2;

        saveCursor = saveCursor.revert();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);

        saveCursor = saveCursor.revert();

        expect(cursor.head).toBe(2);
        expect(cursor.tail).toBe(2);

        saveCursor.revert();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);
    })

    it('should cursor state be valid when reverting; also cursor state changed in middle', () => {
        let cursor = new Cursor(),
        saveCursor = new SaveCursor(cursor);
    
        cursor.head = 2;
        cursor.tail = 2;

        saveCursor = saveCursor.revert();

        expect(cursor.head).toBe(0);
        expect(cursor.tail).toBe(0);

        cursor.head = 3;
        cursor.tail = 3;

        saveCursor = saveCursor.revert();

        expect(cursor.head).toBe(2);
        expect(cursor.tail).toBe(2);

        saveCursor.revert();

        expect(cursor.head).toBe(3);
        expect(cursor.head).toBe(3);
    })
})