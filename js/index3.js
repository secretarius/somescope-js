// Old вариант запису функції конструктора із методом в прототипі
// function Animal (name) {
//     this.name = name;
// }

// Animal.prototype.getName = function () {
//     return this.name;
// };
// Animal.version = '0.0.1'; // Щоб дістати це необхідно звертатися до Animal, дочірні bird, dog ... доступу немають

// const bird = new Animal('bird');
// const dog = new Animal('dog');
// const cat = new Animal('cat');

// console.log(bird.getName());
// console.log(dog.getName());
// console.log(cat.getName()); 


// новий спосіб запису того що вище з допомогою es6
class Animal {
    static version = '0.0.1';
    constructor (name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }
}

// const bird = new Animal('bird');
// const dog = new Animal('dog');
// const cat = new Animal('cat');
// const snake = new Animal('snake');

// console.log(bird.getName());
// console.log(dog.getName());
// console.log(cat.getName()); 
// console.log(snake.getName()); 

// snake.setName('tiger');
// console.log(snake.getName()); 

// console.log(Animal.version);

// Наслідування

function Bird () {
    Animal.aplay(this, arguments); // наслідування з рядка 2 цього файлу по старому синтаксису
}

Bird.prototype = Object.create(Animal.prototype); // наслідування з рядка 6, 7, 8 цього файлу по старому синтаксису
Bird.prototype.constructor = Bird;