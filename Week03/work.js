//ES5 way
function foo() {
	console.log('foo');
};

//ES6 way
const bar = () => {
	console.log('bar');
};

const Qux = class Qux {
	say() {
		console.log('Que');
	}
};

foo();
bar();
let q = new Qux();
q.say();

//create a new class called calculator
//give it a method called add(a,b) to return sum of a and b
class Calculator {
	add(a,b) {
		console.log(a + '+' + b + ' = ' + (a+b));
	}
};

let calc = new Calculator();
calc.add(7,3);

