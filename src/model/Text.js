const LEFT_OUTOFBOUND_TEXTINDEX = -1,
    RIGHT_OUTOFBOUND_TEXTINDEX = -2;

class Text {
    constructor() {
        this.charItems = [];//TODO atelase one char '\n' in minimum?
    }
    getCharItemPos(char) {
        return this.charItems.indexOf(char);
    }
    getLastCharItemPos() {
        return this.charItems.length - 1;
    }
    getCharItem(i) {
        return this.charItems[i];
    }
    insertCharItem(i, charItem) {
        this.charItems.splice(i, 0, charItem);
    }
    deleteCharItem(i) {
        this.charItems.splice(i, 1);
        return true;
    }

    /**
     * 
     * @param {*} i1 charItemIndex starting from
     * @param {*} i2 charItemIndex ending in
     * delete [i1, i2] inclusive
     */
    delteManyCharItem(i1, i2) {
        let range = i2 - i1 + 1;
        this.charItems.splice(i1, range);
    }
    
    /**
     * @param {*} i index
     * Next new line index w.r.t @param i
     * if there is no next new line return -2
     * if i points at new line, still get next new line index
     */
    getNextNewLineIndex(i) {
        let charItem;
        for (let j = i + 1; j < this.charItems.length; j++) {
            charItem = this.charItems[j];

            if (charItem.char === '\n')
                return j;
        }
        return RIGHT_OUTOFBOUND_TEXTINDEX;
    }

    /**
     * @param {*} i index
     * Previous new line index w.r.t @param i
     * if there is no previous line return -1
     * if i points at new line, still get prev new line index
     */
    getPrevNewLineIndex(i) {
        let charItem;
        for (let j = i - 1; j >= 0; j--) {
            charItem = this.charItems[j];

            if (charItem.char === '\n')
                return j;
        }
        return LEFT_OUTOFBOUND_TEXTINDEX;
    }
}
