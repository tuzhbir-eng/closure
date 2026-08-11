// 1. ✅ Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).
// Приклади використання:
// const myCounter = customCounter (1, 5);
// const result1 = myCounter(); // => 6
// const result2 = myCounter(); // => 11
// const result3 = myCounter(); // => 16
// У ДЕБАГЕРІ відстежити змінні, які перебувають у Замиканні (Closure).

function counter(start = 0, step = 1) {
	debugger;
	let i = start;

	return function () {
		const current = i;
		i += step;
		return current;
		console.log(current);
	};
}
const counter1 = counter(2, 4);
console.log("counter1:>> ", counter1());
console.log("counter1:>> ", counter1());
console.log("counter1:>> ", counter1());
console.log("counter1:>> ", counter1());

const counter2 = counter(10, 10);
console.log("counter2:>> ", counter2());
console.log("counter2:>> ", counter2());
console.log("counter2:>> ", counter2());
