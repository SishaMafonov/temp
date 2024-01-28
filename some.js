function misha() {
	const [,,first, operation, second] = process.argv;
	let res = 0
	switch(operation) {
		case "+":
			res = Number.parseInt(first) + Number.parseInt(second);
			break;
		case "-":
			res = first - second;
			break;
		case "/":
			res = first / second;
			break;
		case "*":
			res = first * second;
			break;
		case "^":
			res = Math.pow(first, second);
			break;
		case "!":
			res = factorial(Number.parseInt(first));
			break;
		default:
			console.log("Unknown operation");
			break;
	}
	console.log(res);
	
}

function factorial(num) {
	let sum = 1;
	for(let i = 1; i < num + 1; i++) {
		sum *= i;
	}
	return sum;
}
misha();