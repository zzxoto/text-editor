export function getArrFromIterator(iterator) {
    let arr  = [];
    try {
        while(true) {
            let c = iterator.next();
            arr.push(c.value);
        }
    }
    catch(err) {
        return arr;
    }
}