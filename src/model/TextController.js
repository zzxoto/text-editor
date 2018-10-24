const LEFT_OUTOFBOUND_TEXTINDEX = -1,
    RIGHT_OUTOFBOUND_TEXTINDEX = -2;

class TextController {
    constructor() {
        this.text = new Text();
        this.cursors = [];//TODO atleast one cursor all the time
    }

    mouseDown(index) {
        let charItem = this.text.getCharItem(index);
        this.__clearCursors();
        this.cursors.push(new Cursor(charItem, charItem));
    }
    shiftMouseDown(index) {
        this.mouseMove(index);
    }
    altMouseDown(index) {
        let charItem = this.text.getCharItem(index),
            newCursor = new Cursor(charItem, charItem);
        
        let toRemove = [];
        this.cursors.forEach((c, i) => {
            if (Cursor.doesConflict(c, newCursor)) {
                newCursor.placeCursorTail(this.text.getCharItem(c.getCursorTailIndex()));
                c.removeCursor();
                toRemove.push(i);
            }
        })
        //TODO remove all the items from this.cursors whose index matches indices in toRemove array.
        this.cursors.push(newCursor);
    }
    mouseMove(index) {
        let headCharItem = this.text.getCharItem(index),
            tailCharItem = this.text.getCharItem(this.cursors[this.cursors.length - 1].getCursorTailIndex());
        this.__clearCursors();
        this.cursors.push(new Cursor(headCharItem, tailCharItem));
    }
    shiftMouseMove(index) {
        this.mouseMove(index);
    }
    altMouseMove(index) {
        let cursor = this.cursors[this.cursors.length - 1];
        cursor.placeCursorHead(this.text.getCharItem(index));

        let toRemove = [];
        this.cursors.forEach((c, i) => {
            if (Cursor.doesConflict(c, cursor)) {
                c.removeCursor();
                toRemove.push(i);
            }
        });
        //TODO remove all the items from this.cursors whose index matches indices in toRemove array.
    }

    left() {

        this.__left((cursor, newPos) => cursor.placeCursor(this.text.getCharItem(newPos)));
        this.__resolveCursorInConflict((cursor1, cursor2) => cursor1);
    }

    right() {

        this.__right((cursor, newPos) => cursor.placeCursor(this.text.getCharItem(newPos)));
        this.__resolveCursorInConflict((cursor1, cursor2) => cursor1);
    }

    up() {
        this.__up((cursor, newPos) => { cursor.placeCursor(newPos)});
        this.__resolveCursorInConflict((cursor1, cursor2) => cursor1);
    }

    down() {
        this.__down((cursor, newPos) => cursor.placeCursor(newPos));
        this.__resolveCursorInConflict((cursor1, cursor2) => cursor1);
    }
    shiftLeft() {
        this.__left((cursor, newPos) => cursor.placeCursorHead(this.text.getCharItem(newPos)));
        this.__resolveCursorConflictLeftHead();
    }
    shiftRight() {
        this.__right((cursor, newPos) => cursor.placeCursorHead(this.text.getCharItem(newPos)));
        this.__resolveCursorConflictRightHead();
    }
    shiftUp() {
        this.__up((cursor, newPos) => { cursor.placeCursorHead(newPos)});
        this.__resolveCursorConflictLeftHead();
    }
    shiftDown() {
        this.__down((cursor, newPos) => cursor.placeCursorTail(newPos));
        this.__resolveCursorConflictRightHead();
    }
    insert(char) {

    }
    delete(char) {

    }
    backSpace(char) {
        
    }
    __clearCursors() {
        this.cursors.forEach(c => c.removeCursor());
        this.cursors = [];
    }

    /**
     * Generic conflict resolution
     * @param {Function} resolver, that takes 2 conflicting cursors and returns one cursor
     */
    __resolveCursorConflict(resolver) {
        let cursors = this.cursors; //TODO sort by head. else alg would be incorrect.
        conflictCursors = new Set();
        nonConflictCursors = [];

        for (let c1 of this.cursors) {
            let _c_ = c1;
            
            if (conflictCursors.has(_c_)) 
                continue;

            for (let c2 of this.cursors ) {
                if (Cursor.doesConflict(_c_, c2)) {
                    conflictCursors.add(_c_);
                    conflictCursors.add(c2);
                    _c_ = resolver(_c_, c2);
                }
            }
            nonConflictCursors.push(_c_);
        }
        //TODO remove cursor calling c.removeCursor()
        this.cursors = nonConflictCursors;
    }

    __resolveCursorConflictLeftHead() {
        this.__resolveCursorConflict(() => {
            let leftyHead = cursor1.getCursorHeadIndex() < cursor2.getCursorHeadIndex()? 
                cursor1.getCursorHeadIndex(): cursor2.getCursorHeadIndex();
            let rightyTail = cursor1.getCursorTailIndex() > cursor2.getCursorTailIndex()?
                cursor1.getCursorTailIndex(): cursor2.getCursorTailIndex();
            return newCursor(this.text.getCharItem(leftyHead), this.text.getCharItem(rightyTail));
        })
    }

    __resolveCursorConflictRightHead() {
        this.__resolveCursorConflict((cursor1, cursor2) => {
            let rightyHead = cursor1.getCursorHeadIndex() > cursor2.getCursorHeadIndex()? 
                cursor1.getCursorHeadIndex(): cursor2.getCursorHeadIndex();
            let leftyTail = cursor1.getCursorTailIndex() < cursor2.getCursorTailIndex()?
                cursor1.getCursorTailIndex(): cursor2.getCursorTailIndex();
            return newCursor(this.text.getCharItem(leftyHead), this.text.getCharItem(rightyTail));
        });
    }

    __left(cb) {
        for (var c of this.cursors){
            if (c.getCursorHeadIndex() > 0) {
                let newPos = c.getCursorHeadIndex() - 1;
                cb(c, newPos);
            }
        }
    }

    __right(cb) {
        for(var c of this.cursors) {
            if (c.getCursorHeadIndex() < this.text.getLastCharItemIndex()) {
                let newPos = c.getCursorHeadIndex() + 1;
                cb(c, newPos)
                c.placeCursor(this.text.getCharItem(newPos));
            }
        }
    }

    __up(cb) {
        for(var c of this.cursors) {
            let cursorHead = c.getCursorHeadIndex(),
                prevNewLine = this.text.getPrevNewLineIndex(cursorHead),
                prevprevNewLine = this.text.getPrevNewLineIndex(prevNewLine);
            
            prevNewLine = prevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevNewLine,
            prevprevNewLine = prevprevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevprevNewLine;
            
            let newPos = (prevprevNewLine + (cursorHead - prevNewLine)) <= prevNewLine? 
                prevprevNewLine + (cursorHead - prevNewLine): prevNewLine;
            
            cb(c, newPos)
            
        }
    }

    __down(cb) {
        for(var c of this.cursors) {
            let cursorHead = c.getCursorHeadIndex(),
                prevNewLine = this.text.getPrevNewLineIndex(cursorHead),
                nextNewLine = this.text.getNextNewLineIndex(cursorHead),
                nextnextNewLine = this.text.getNextNewLineIndex(nextNewLine);
            
            prevNewLine = prevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevNewLine;
            nextNewLine = nextNewLine == RIGHT_OUTOFBOUND_TEXTINDEX? this.text.getLastCharItemIndex(): nextNewLine;
            nextnextNewLine = nextnextNewLine == RIGHT_OUTOFBOUND_TEXTINDEX? this.text.getLastCharItemIndex(): nextnextNewLine;
            
            let newPos = (nextNewLine + (prevNewLine - cursorHead)) <= nextnextNewLine?
                nextNewLine + (prevNewLine - cursorHead): nextnextNewLine;
            
            cb(c, newPos);
        }
    }
}
/*
    cursors = []
    con_cursors = []
    resolved_cursors = []

    for c in cursors:
        k = c
        if k not in con_cursors:
            for j in cursors:
                if inConflict(k, j):
                    con_cursors.add(k)
                    con_cursors.add(j)
                    k = resolve(k, j) -(i)
            resolved_cursors.add(k)

    left, right, up, down, resolve alg:
        def resolve(i, j):
            return i;
    shift_left resolve alg:
        //lesser head, greater tail
        def resolve(i, j):
            head = i.head < j.head? i.head: j.head
            tail = i.tail > j.tail? i.tail: j.tail
            return new Cursor(head, tail)
    shift_right resolve alg:
        //greater head, lesser tail
*/