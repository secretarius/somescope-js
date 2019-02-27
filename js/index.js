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

function sumOddIdx (arr) {
    let sum = 0;
    for (i = 0; i < arr.lengs; i++) {
        if (i % 2) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOddIdx(arr));