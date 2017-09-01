module.exports = function solveEquation(equation) {
	let count = 0;	
	let pattern = /^\-/;
	let isMinus = pattern.test(equation); 	
	let mas = equation.match(/\d+/g);
	let figure_1 = eval(mas[0]);
	let figure_2 = eval(mas[2])/figure_1;
	let figure_3 = eval(mas[3])/figure_1;
	
	figure_1 /= figure_1;	
	equation = equation.replace(mas[0],String(figure_1)).replace(mas[2],String(figure_2)).replace(mas[3],String(figure_3));
	
	let isEquation = function (k){return eval(equation.replace(/x\^2/,k*k).replace(/x/,k));}
	let j, mul;
	let result = [];
	let value, item, step, prev;
	
	let findResult = function(m){
		count+=1;
		if(count>110){return;}
		
		value = isEquation(j);	
		if(value===0||step<1){result.push(j); return;}
		prev = item;
		item = Math.abs(value)===value;
		
		if(!prev){prev = item;}
		if(item!==prev){
			step/=10;
			item = null;
		}
		
		if (value > 0){	j+=step*m;}			
		else if(value < 0){	j-=step*m;}

		findResult(m);		
	}	
	
	j=-5000000;	
	step = 1000000;	
	mul = -j/Math.abs(j);
	if(isMinus){mul=-mul;}
	findResult(mul);	
	
	j=5000000;	
	step = 1000000;	
	mul = -j/Math.abs(j);
	if(isMinus){mul=-mul;}
	findResult(mul);
	return result;
}