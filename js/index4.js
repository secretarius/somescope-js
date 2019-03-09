//Генератори
function* generator(e) {
  yield e + 10;
  yield e + 25;
  yield e + 33;
}
var generate = generator(27);
console.log(generate.next().value); // 37
console.log(generate.next().value); // 52
console.log(generate.next().value); // 60
console.log(generate.next().value); // undefined

//
function * randomize() {
  while (true) {
    let random = Math.floor(Math.random()*1000);
    yield random;
  }
}
var random= randomize();

console.log(random.next().value);




//Виведемо у консоль усі слова з рядка з використанням ітераторів. Рядки також являють собою ітератори.
const string = 'abcde';

// const iterator = string[Symbol.iterator]();
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

//Те ж саме з використанням генераторів:
function * iterator() {
  yield 'a';
  yield 'b';
  yield 'c';
  yield 'd';
  yield 'e';
}
for (let x of iterator()) {
  console.log(x);
}
// з генераторами код більш організованний