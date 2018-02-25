module.exports = function solveEquation(equation) {
	
	let pattern = /\-?\s?\d+/g;
	let contejner = equation.match(pattern);
	let figure_1 = eval(contejner[0]);	
	let figure_2 = eval(contejner[2])/figure_1;
	let figure_3 = eval(contejner[3])/figure_1;
	let discriminant = Math.pow(figure_2,2) - 4 * figure_3;
	let value_1 = ( - figure_2 - Math.sqrt(discriminant)) / 2;
	let value_2 = ( - figure_2 + Math.sqrt(discriminant)) / 2;
	
	let result = [value_1, value_2];	
	return result;
}