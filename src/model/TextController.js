class TextController {
    constructor() {
        this.text = new Text();
        this.cursors = [];//TODO atleast one cursor all the time
    }

    mouseDown(index) {
        let headIndex = index, tailIndex = index;

        this.cursors = [];
        this.cursors.push(new Cursor(this.text, headIndex, tailIndex));
    }
    shiftMouseDown(index) {
        this.mouseMove(index);
    }
    altMouseDown(index) {
        let headIndex = index, tailIndex = index,
            newCursor = new Cursor(this.text, headIndex, tailIndex);
        
        let _cursors = [];
        this.cursors.forEach(c => {
            if (Cursor.doesConflict(c, newCursor)) {
                newCursor.setCursorTail(c.getCursorTailIndex());
            }
            else {
                _cursors.push(c);
            }
        })
        
        this.cursors = _cursors;
        this.cursors.push(newCursor);
    }
    mouseMove(index) {
        let headIndex = index,
            tailIndex = this.cursors[this.cursors.length - 1].getCursorTailIndex();

        this.cursors = [];
        this.cursors.push(new Cursor(this.text, headIndex, tailIndex));
    }
    shiftMouseMove(index) {
        this.mouseMove(index);
    }
    altMouseMove(index) {
        let cursor = this.cursors[this.cursors.length - 1];
        cursor.setCursorHead(index);

        this.cursors = this.cursors.filter(c => !Cursor.doesConflict(c, cursor));
    }

    left() {

        this.cursors.forEach(c => c.left());
        this.__resolveCursorConflict((cursor1, cursor2) => cursor1);
    }

    right() {

        this.cursors.forEach(c => c.right());
        this.__resolveCursorConflict((cursor1, cursor2) => cursor1);
    }

    up() {

        this.cursors.forEach(c => c.up());
        this.__resolveCursorConflict((cursor1, cursor2) => cursor1);
    }

    down() {
        
        this.cursors.forEach(c => c.down());
        this.__resolveCursorConflict((cursor1, cursor2) => cursor1);
    }
    shiftLeft() {

        this.cursors.forEach(c => c.shiftLeft());
        this.__resolveCursorConflictLesserHeadPriority();
    }
    shiftRight() {

        this.cursors.forEach(c => c.shiftRight());
        this.__resolveCursorConflictGreaterHeadPriority();
    }
    shiftUp() {

        this.cursors.forEach(c => c.shiftUp());
        this.__resolveCursorConflictLesserHeadPriority();
    }
    shiftDown() {

        this.cursors.forEach(c => c.shiftDown());
        this.__resolveCursorConflictGreaterHeadPriority();
    }
    
    //assumption: no cursor conflict at the time of being called
    insert(char) {

    }

    //assumption: no cursor conflict at the time of being called
    delete(char) {

    }

    //assumption: no cursor conflict at the time of being called
    backSpace(char) {
        
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
        this.cursors = nonConflictCursors;
    }

    __resolveCursorConflictLesserHeadPriority() {
        this.__resolveCursorConflict(() => {
            let leftyHead = cursor1.getCursorHeadIndex() < cursor2.getCursorHeadIndex()? 
                cursor1.getCursorHeadIndex(): cursor2.getCursorHeadIndex();
            let rightyTail = cursor1.getCursorTailIndex() > cursor2.getCursorTailIndex()?
                cursor1.getCursorTailIndex(): cursor2.getCursorTailIndex();
            return new Cursor(this.text, leftyHead, rightyTail);
        })
    }

    __resolveCursorConflictGreaterHeadPriority() {
        this.__resolveCursorConflict((cursor1, cursor2) => {
            let rightyHead = cursor1.getCursorHeadIndex() > cursor2.getCursorHeadIndex()? 
                cursor1.getCursorHeadIndex(): cursor2.getCursorHeadIndex();
            let leftyTail = cursor1.getCursorTailIndex() < cursor2.getCursorTailIndex()?
                cursor1.getCursorTailIndex(): cursor2.getCursorTailIndex();
            return new Cursor(this.text, rightyHead, leftyTail);
        });
    }
}