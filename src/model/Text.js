class Text {
    constructor() {
        this.charItems = [];//TODO atelase one char '\n' in minimum?
    }
    getIndex(char) {
        return this.charItems.indexOf(char);
    }
    getLastCharItemIndex() {
        return this.charItems.length - 1;
    }
    getCharItem(i) {
        return this.charItems[i];
    }
    insertCharItem(i, char) {
        this.charItems[i] = char;
        return true;
    }
    deleteCharItem(i, char) {
        if (i == this.charItems.length - 1) {
            return false;
        }
        //TODO delete
        return true;
    }
    
    /**
     * @param {*} i index
     * Next new line index w.r.t @param i
     * if there is no next new line return -1
     * if i points at new line, still get next new line index
     */
    getNextNewLineIndex(i) {

    }

    /**
     * @param {*} i index
     * Previous new line index w.r.t @param i
     * if there is no previous line return -1
     * if i points at new line, still get prev new line index
     */
    getPrevNewLineIndex(i) {

    }
}
