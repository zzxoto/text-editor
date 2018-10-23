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
        let headCharItem = this.text.getCharItem(index),
            tailCharItem = this.text.getCharItem(this.cursors[0].getCursorTailIndex());
        this.__clearCursors();
        this.cursors.push(new Cursor(headCharItem, tailCharItem));
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
        return this.mouseMove(index);
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
    __clearCursors() {
        this.cursors.forEach(c => c.removeCursor());
        this.cursors = [];
    }
    left() {

    }
    right() {

    }
    up() {

    }
    down() {

    }
    shiftLeft() {
        
    }
    shiftRight() {

    }
    shiftUp() {

    }
    shiftDown() {

    }
    insert(char) {

    }
    delete(char) {

    }
    backSpace(char) {
        
    }
}