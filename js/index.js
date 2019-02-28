function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    
    var b;
    
    b = a + doSomethingElse( a * 2 );
    
    console.log( (b * 3) );
}

doSomething(2);

// spread
const firstArray = [15, 17, 22, 66];
const secondArray = [456, 273,614];

const result = [...firstArray, ...secondArray];
console.log(result);

function getSum (...args) {
    return args.reduce(function (res, item){
        return res + item;
    })
}
console.log(getSum(1,2,3));

const data = {
    firstName: "Alex",
    age: 21,
    eyesColor: "brown"
}

const data2 = {
    secondName: "M",
    goal: [],
    weight: 90
}

const concObj = Object.assign(data, data2);
console.log(concObj);

const concObj2 = {
    ...data,
    ...data2
}
console.log(concObj2);

function getSomeSum () {
    for (let value of arguments) {
        console.log(value);
    }
}
console.log(getSomeSum(2,3,4,5));

function getSomeSum2 () {
    for (let value of "аргументи") {
        console.log(value);
    }
}
console.log(getSomeSum2(2,3,4,5));

// Symbol
const id = Symbol();

const user = {
    firstName: 'Ivan',
    age: 32,
    eyesColor: 'green',
    [id]:'Ця інформація не доступна для зміни'
};

console.log(user);

for (let key in user){
    console.log(user[key]);
}

user.id = 'Нове зачення id, але воно не міняе Symbol значення';

const productNames = ['BMW', 'Nissan', 'Citroen', 'Subaru', 'Audi'];
productNames.forEach(function (element, idx) {
    if (idx % 2 === 0) {
        console.log(idx, element);
    }
    });
    
    
const arr = [23, 27, 31, 42, 55, 36, 67];
function sumOddIdx(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOddIdx(arr));

//modern
function modernSumOddIdx(arr){
    return arr.filter((el, idx) => idx % 2)
          .reduce ((acc, el) => acc + el, 0);
    
}

console.log(modernSumOddIdx(arr));

//modern-modern
const modernSumOddIdx2 = arr => arr.filter ( (el, idx) => idx % 2)
                                   .reduce ( (acc, el) => acc + el, 0);
console.log(modernSumOddIdx2(arr));



function padIt(str,n){
  let res = str;
  let i = 0;
    while ( i < n) {
	     if (i % 2 === 0){
        res = "*" + res;
  } else {res = res + "*"}
  i++;
}
return res
}

console.log(padIt("a", 3));
console.log(padIt("a", 4));
console.log(padIt("a", 5));

function baz() {
    // стек вызовов: `baz`
    // поэтому наша точка вызова — глобальная область видимости

    console.log( "baz" );
    bar(); // <-- точка вызова для `bar`
}

function bar() {
    // стек вызовов: `baz` -> `bar`
    // поэтому наша точка вызова в `baz`

    console.log( "bar" );
    foo(); // <-- точка вызова для `foo`
}

function foo() {
    // стек вызовов: `baz` -> `bar` -> `foo`
    // поэтому наша точка вызова в `bar`

    console.log( "foo" );
}

baz(); // <-- точка вызова для `baz`

function foo() {
	console.log( this.a );
}

var a = 2;

(function(){
	"use strict";

	console.log(foo()); // 2
})();

const myName = 'Alex';
const myAge = 36;

console.log(`Hello my name is ${myName}. I am ${myAge} years old`);



const Animal = function () {
    this.name = 'Alex';
};

Animal.prototype.attachEvent = function () {
    const body = document.querySelector('body');
    
    body.addEventListener('click', () => { //стрілочна функція не має свого this а бере його у вищестоячої функції тобто з Animal function
        alert(this.name);
});
};

const anima = new Animal();
anima.attachEvent();


var funcs = [];
for (let i = 0; i < 5; i++) {
funcs.push( function(){
console.log( i );
} );
}
funcs[3]();
