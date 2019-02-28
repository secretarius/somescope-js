var funcs = [];
for (let i = 0; i < 5; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs[3]();

const name = 'Alex';
const age = 36;
const getSay = function(){
    return this.name;
};

const user = {
    name, 
    age,
    getSay,
    getAge() {
        return this.age;
    }
};

const props = {
    country: 'Ukraine',
    city: 'Lviv',
    address: 26
};

Object.assign(user, props); // Не вказавши першим патаметром {}, перезапише перший обєкт який правіше 
console.log(user);    

const newObj = {
    ...user,
    ...props
}

console.log(newObj);

// console.log(user.getSay());
// console.log(user.getAge());

