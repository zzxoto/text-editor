import LineFactory from "../src/virtual_dom/line.js";

describe("#line.js", ()=> {
	let line;

	beforeEach(()=> {
		line = new LineFactory();
	})


	it("should exist", ()=> {
		expect(line).toBeDefined();
	})


	it("#getLastLetterIndex", ()=> {
		expect(line.getLastLetterIndex()).toBe(0);
		line.line = [1, 2, 3];
		expect(line.getLastLetterIndex()).toBe(3);
	})


	it("#isEmpty", ()=> {
		expect(line.isEmpty()).toBe(true);

		line.line = [1, 2];
		expect(line.isEmpty()).toBe(false);
	})


	it("#insertChar", ()=> {
		line.insertChar(0, "a");
		expect(line.line[0]).toBe("a");

		line.insertChar(0, "b");
		expect(line.line[0]).toBe("b");

		line.insertChar(1, "c");
		expect(line.line[0]).toBe("b");
		expect(line.line[1]).toBe("c");
		expect(line.line[2]).toBe("a");	

		line.insertChar(3, "d");
		expect(line.line[3]).toBe("d");
		expect(line.line[2]).toBe("a");
	})


	it("#removeChar", ()=> {
		line.line = ["a", "b"];
		line.removeChar(0);
		expect(line.line.length).toBe(2);
		
		line.removeChar(1);
		expect(line.line.length).toBe(1);
		expect(line.line[0]).toBe("b");

		line.line = ["a", "b", "c"];
		line.removeChar(2);
		expect(line.line[0]).toBe("a");
		expect(line.line[1]).toBe("c");
		expect(line.line.length).toBe(2);
	});


	it("#split", ()=> {
		line.line = [];
		expect(line.split(0)).toEqual([[], []]);
		line.line = ["a"];
		expect(line.split(0)).toEqual([[], ["a"]]);
		expect(line.split(1)).toEqual([["a"], []]);
		line.line = ["a", "b"];
		expect(line.split(0)).toEqual([[], ["a", "b"]]);
		expect(line.split(1)).toEqual([["a"], ["b"]]);
		expect(line.split(2)).toEqual([["a", "b"], []]);
		expect(line.line).toEqual(["a", "b"]);
	})


	it("#setLine", ()=> {
		line.line = [];
		line.setLine(["a", "b"]);
		expect(line.line).toEqual(["a", "b"]);
	})


	it("#append", ()=> {
		line.line = [];
		line.append(["a", "b"]);
		expect(line.line).toEqual(["a", "b"])
		line.append([]);
		expect(line.line).toEqual(["a", "b"])
		line.append(["c"]);
		expect(line.line).toEqual(["a", "b", "c"]);
	})
})