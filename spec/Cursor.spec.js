import {Cursor} from '../src/model/Cursor';

describe('cursor', () => {
    it('head and tail be 0, at begining', () => {
        let cursor = new Cursor();
        expect(cursor.head).toBe(0);
    })

    it('high as same as low', () => {
        let cursor = new Cursor();
        cursor.head = 2;
        cursor.tail = 2;

        expect(cursor.high).toBe(2);
        expect(cursor.low).toBe(2);
    })

    it('high = head and low = tail', () => {
        let cursor = new Cursor();
        cursor.head = 3;
        cursor.tail = 2;

        expect(cursor.high).toBe(cursor.head);
        expect(cursor.low).toBe(cursor.tail);
    })

    it('high = tail and low = head', () => {
        let cursor = new Cursor();
        cursor.head = 2;
        cursor.tail = 3;

        expect(cursor.high).toBe(cursor.tail);
        expect(cursor.low).toBe(cursor.head);
    })
})