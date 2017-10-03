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
		console/log('Que');
	}
}

foo();
bar();

//create a new class called calculator
//give it a method called add(a,b) to return sum of a and b
class Calculator {
	add(a,b) {
		return a+b;
	}
}
