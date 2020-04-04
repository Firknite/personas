function sum(a, b) {
	return a + b;
}

test('test para funcion suma', () => {
	expect(sum(1, 2)).toBe(3);
});