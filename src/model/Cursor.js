class Cursor {
    constructor(head, tail) {
        this.cursorHead = head;
        this.cursorTail = tail;
    }

    getCursorHeadIndex() {

    }
    getCursorTailIndex() {

    }
    placeCursorHead(char) {

    }
    placeCursorTail(char) {

    }
    placeCursor(char) {

    }
    removeCursor() {

    }
    insert(c) {

    }
    backSpace() {

    }
    delete() {

    }
}

Cursor.doesConflict = function(c1, c2) {
    let h1 = c1.getCursorHeadIndex(),
        h2 = c2.getCursorHeadIndex(),
        t1 = c1.getCursorTailIndex(),
        t2 = c2.getCursorTailIndex();
    
    return (c1 !== c2) && (
        (h1 == h2) ||
        (h1 < h2 && h2 < t1) ||
        (t2 < h1 && h1 < h2) ||
        (h2 < h1 && h1 < t2) ||
        (t1 < h2 && h2 < t1));
}