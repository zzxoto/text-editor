/*
[H, T)
[T, H)
Delete from lesser to Greater - 1
****be careful with cursor heads and tails pointers***
*/

/**
 * TODO
 * cursor head, tail constructor param index or object.
 * cursor
 */
class Cursor {
    constructor(text, head, tail) {//@param head,tail index or obj
        this.cursorHead = head;
        this.cursorTail = tail;
        this.text = text;
    }
    /**
     * Depends on [H, T) and [T, H)
     */
    getSelectionRange() {
        
    }
    getCursorHeadIndex() {

    }
    getCursorTailIndex() {

    }
    placeCursorHead(char) {//char or index

    }
    placeCursorTail(char) {//char or index

    }
    placeCursor() {
        this.text.getCharItemPos(pos);
    }
    removeCursor() {
    }
    left() {
        let pos = this.__left();
        this.placeCursor(pos);
        this.cursorHead = this.text.getCharItemPos(pos);
        this.cursorTail = this.cursorTail;
    }

    right() {
        let pos = this.__right();
        this.cursorHead = this.text.getCharItemPos(pos);
        this.cursorTail = this.cursorTail;
    }

    up() {
        let pos = this.__up();
        this.cursorHead = this.text.getCharItemPos(pos);
        this.cursorTail = this.cursorTail;
    }

    down() {
        let pos = this.__down();
        this.cursorHead = this.text.getCharItemPos(pos);
        this.cursorTail = this.cursorTail;
    }

    shiftLeft() {
        let pos = this.__left();
        this.cursorHead = this.text.getCharItemPos(pos);
    }

    shiftRight() {
        let pos = this.__right();
        this.cursorHead = this.text.gertCharItem(pos);
    }

    shiftUp() {
        let pos = this.__up();
        this.cursorHead = this.text.gertCharItem(pos);
    }

    shiftDown() {
        let pos = this.__down();
        this.cursorHead = this.text.gertCharItem(pos);
    }

    __left() {
        let headPos = this.text.getCharItemPos(this.cursorHead);
        return headPos > 0? headPos - 1: 0;
    }

    __right() {

        let headPos = this.text.getCharItemPos(this.cursorHead);
        return headPos < this.text.getLastCharItemPos()? 
            headPos + 1: this.text.getLastCharItemPos();
    }

    __up() {
        let head = this.text.getCharItemPos(this.cursorHead),
            prevNewLine = this.text.getPrevNewLineIndex(head),
            prevprevNewLine = this.text.getPrevNewLineIndex(prevNewLine);
        
        prevNewLine = prevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevNewLine,
        prevprevNewLine = prevprevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevprevNewLine;
        
        let newHead = (prevprevNewLine + (head - prevNewLine)) <= prevNewLine? 
            prevprevNewLine + (head - prevNewLine): prevNewLine;
        
        return newHead;
    }

    __down() {
        let head = this.text.getCharItemPos(this.cursorHead),
            prevNewLine = this.text.getPrevNewLineIndex(head),
            nextNewLine = this.text.getNextNewLineIndex(cursorHead),
            nextnextNewLine = this.text.getNextNewLineIndex(nextNewLine);
        
        prevNewLine = prevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevNewLine;
        nextNewLine = nextNewLine == RIGHT_OUTOFBOUND_TEXTINDEX? this.text.getLastCharItemIndex(): nextNewLine;
        nextnextNewLine = nextnextNewLine == RIGHT_OUTOFBOUND_TEXTINDEX? this.text.getLastCharItemIndex(): nextnextNewLine;
        
        let newHead = (nextNewLine + (prevNewLine - head)) <= nextnextNewLine?
            nextNewLine + (prevNewLine - head): nextnextNewLine;
        
        return newHead;
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