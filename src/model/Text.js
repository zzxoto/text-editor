class Text {
    constructor() {
        this.charItems = [];//TODO atelase one char '\n' in minimum?
    }
    getIndex(char) {
        return this.charItems.indexOf(char);
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
    getNextNewLineIndex() {
        
    }
    getPrevNewLineIndex() {

    }
}
