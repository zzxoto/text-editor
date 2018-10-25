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
    constructor(text, head, tail) {//@param text obj, head int; tail int
        this.head = head;
        this.tail = tail;
        this.text = text;
    }
    
    get low() { return this.head > this.tail? this.tail: this.head; }
    get high() { return this.head > this.tail? this.head: this.tail; }

    left() {
        let pos = this.__left();
        this.head = pos;
        this.tail = pos;
    }

    right() {
        let pos = this.__right();
        this.head = pos;
        this.tail = pos;
    }

    up() {
        let pos = this.__up();
        this.head = pos;
        this.tail = pos;
    }

    down() {
        let pos = this.__down();
        this.head = pos;
        this.tail = pos;
    }

    shiftLeft() {
        let pos = this.__left();
        this.head = pos;
    }

    shiftRight() {
        let pos = this.__right();
        this.head = pos;
    }

    shiftUp() {
        let pos = this.__up();
        this.head = pos;
    }

    shiftDown() {
        let pos = this.__down();
        this.head = pos;
    }
     
    __left() {
        return this.head >= 1? this.head - 1: 0;
    }

    __right() {
        let lastPos = this.text.getLastCharItemIndex();
        this.head >= lastPos? lastPos: this.head + 1;
    }

    __up() {
        let head = this.head,
            prevNewLine = this.text.getPrevNewLineIndex(head),
            prevprevNewLine = this.text.getPrevNewLineIndex(prevNewLine);
        
        prevNewLine = prevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevNewLine,
        prevprevNewLine = prevprevNewLine == LEFT_OUTOFBOUND_TEXTINDEX? 0: prevprevNewLine;
        
        let newHead = (prevprevNewLine + (head - prevNewLine)) <= prevNewLine? 
            prevprevNewLine + (head - prevNewLine): prevNewLine;
        
        return newHead;
    }

    __down() {
        let head = this.head,
            prevNewLine = this.text.getPrevNewLineIndex(head),
            nextNewLine = this.text.getNextNewLineIndex(head),
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
    let h1 = c1.head,
        h2 = c2.head,
        t1 = c1.tail,
        t2 = c2.tail;
        
    return (c1 !== c2) && (
        (h1 == h2) ||
        (h1 < h2 && h2 < t1) ||
        (t2 < h1 && h1 < h2) ||
        (h2 < h1 && h1 < t2) ||
        (t1 < h2 && h2 < t1));
}