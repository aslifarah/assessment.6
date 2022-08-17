const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
	const myData = ["Apple","Banana","Orange"];
    shuffleArray(myData)
	
	test('is array', () => {
		expect(Array.isArray(shuffleArray(myData))).toBe(true);
	});
	
	test('is correct length array', () => {
		expect(shuffleArray(myData).length).toBe(myData.length);
	});

  
})