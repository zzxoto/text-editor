import lineModule from "../src/virtual_dom/lineModule.js";
import LineFactory from "../src/virtual_dom/line.js";

describe("lineModule", ()=> {

	beforeEach(()=> {
		lineModule.head = new LineFactory();
		lineModule.lastLineIndex = 0;
		lineModule.head.line = ['h', 'e', 'a', 'd'];
	})


	describe("#addLine", ()=> {

		it("add line right next", ()=> {
			expect(lineModule.lastLineIndex).toBe(0);
			expect(lineModule.head.next).toBe(null);
			lineModule.addLine(1);
			expect(lineModule.head.next).not.toBe(null);
			expect(lineModule.lastLineIndex).toBe(1);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual([]);
			expect(lineModule.lastLineIndex).toBe(1);
		})


		it("add line before the first", ()=> {
			expect(lineModule.lastLineIndex).toBe(0);
			expect(lineModule.head.next).toBe(null);
			lineModule.addLine(0);
			expect(lineModule.head.next).not.toBe(null);
			expect(lineModule.lastLineIndex).toBe(1);
			expect(lineModule.head.line).toEqual([]);
			expect(lineModule.head.next.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.lastLineIndex).toBe(1);
		})


		it("add two lines consecutively", ()=> {
			expect(lineModule.lastLineIndex).toBe(0);
			lineModule.addLine(1);
			expect(lineModule.lastLineIndex).toBe(1);
			lineModule.head.next.line = ['n', 'e', 'x', 't'];
			lineModule.addLine(2);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual(['n', 'e', 'x', 't']);
			expect(lineModule.head.next.next.line).toEqual([]);
			expect(lineModule.head.next.next.next).toBe(null);
			expect(lineModule.lastLineIndex).toBe(2);
		})


		it("add two lines not consecutively", ()=> {
			expect(lineModule.lastLineIndex).toBe(0);
			lineModule.addLine(1);
			expect(lineModule.lastLineIndex).toBe(1);
			lineModule.head.next.line = ['n', 'e', 'x', 't'];
			lineModule.addLine(1);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual([]);
			expect(lineModule.head.next.next.line).toEqual(['n', 'e', 'x', 't']);
			expect(lineModule.head.next.next.next).toBe(null);
			expect(lineModule.lastLineIndex).toBe(2);
		})
	})


	describe("#removeLine", ()=> {

		it("should remove nothing", ()=> {
			expect(lineModule.lastLineIndex).toBe(0);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next).toBe(null);
			lineModule.removeLine(0);
			expect(lineModule.lastLineIndex).toBe(0);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next).toBe(null);
		})


		it("should remove first line", ()=> {
			lineModule.addLine(1);
			expect(lineModule.lastLineIndex).toBe(1);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual([]);
			lineModule.removeLine(0);
			expect(lineModule.lastLineIndex).toBe(0);
			expect(lineModule.head.line).toEqual([]);
			expect(lineModule.head.next).toBe(null);
		})


		it("should remove last line", ()=> {
			lineModule.addLine(1);
			expect(lineModule.lastLineIndex).toBe(1);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual([]);
			lineModule.removeLine(1);
			expect(lineModule.lastLineIndex).toBe(0);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next).toBe(null);
		})


		it("should remove middle line", ()=> {
			lineModule.addLine(1);
			lineModule.head.next.line = ['m', 'i', 'd'];
			lineModule.addLine(2);
			lineModule.head.next.next.line = ['e', 'n', 'd'];
			
			expect(lineModule.lastLineIndex).toBe(2);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual(['m', 'i', 'd']);
			expect(lineModule.head.next.next.line).toEqual(['e', 'n', 'd']);
			expect(lineModule.head.next.next.next).toBe(null);
			lineModule.removeLine(1);
			expect(lineModule.lastLineIndex).toBe(1);
			expect(lineModule.head.line).toEqual(['h', 'e', 'a', 'd']);
			expect(lineModule.head.next.line).toEqual(['e', 'n', 'd']);
			expect(lineModule.head.next.next).toBe(null);
		})
	});

	it("should get line", ()=> {
		lineModule.addLine(1);
		lineModule.addLine(2);
		lineModule.head.next.line = ['o', 'n', 'e'];
		lineModule.head.next.next.line = ['t', 'w', 'o'];

		expect(lineModule.getLine(0).line).toEqual(['h', 'e', 'a', 'd']);
		expect(lineModule.getLine(1).line).toEqual(['o', 'n', 'e']);
		expect(lineModule.getLine(2).line).toEqual(['t', 'w', 'o']);
	})
	


})