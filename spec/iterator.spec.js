import {Iterator} from '../src/model/Iterator';

describe('#Iterator', () => {


  it('#1, 2 and error', () => {
    let it = new Iterator([1, 2]);

    let i1 = it.next(),
      i2 = it.next();

    expect(i1.value).toBe(1);
    expect(i2.value).toBe(2);
    expect(i1.done).toBe(false);
    expect(i2.done).toBe(true);
    
    expect(it.next.bind(it)).toThrow();
  })

  it('#error when empty array and next attempt', () => {
    let it = new Iterator([]);

    expect(it.next.bind(it)).toThrow();
  })

  it('#from', () => {
    let it = new Iterator([1, 2, 3]).from(1);

    expect(it.next().value).toBe(2);
    expect(it.next().value).toBe(3);
    expect(it.next.bind(it)).toThrow();
  })

  it('#from and #to', () => {
    let it = new Iterator([1, 2, 3, 4]).from(1).to(2);

    expect(it.next().value).toBe(2);
    expect(it.next().value).toBe(3);
    expect(it.next.bind(it)).toThrow();
  })

  it('#from and #to where to == from', () => {
    let it = new Iterator([1, 2, 3, 4]).from(1).to(1);

    expect(it.next().value).toBe(2);
    expect(it.next.bind(it)).toThrow();
  })

  it('#from and #to where from > to', () => {
    let it = new Iterator([1, 2, 3, 4]).from(2).to(1);

    expect(it.next.bind(it)).toThrow();
  })
})