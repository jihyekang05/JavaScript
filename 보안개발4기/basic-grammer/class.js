class Person{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello`);
    }
}

const person1 = new Person('Yun',29);
console.log(person1.name);
console.log(person1.age);

//getter setter
class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        if(value<0){
            throw Error('negative');
        }
        this._age=value;
    }
}

const user1=new User('k',2);
console.log(user1.age);

//Inheritance

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`)
    }
    getArea(){
        return this.width*this.height;
    }
}

const shape1 = new Shape(20,20,'blue');
console.log(shape1.getArea());
console.log(shape1.draw())

//overriding
class Rectangle extends Shape{
    draw(){
        console.log(`drawing rectangle ${this.color} color`);
    }
}

const rectangle1 = new Rectangle(20,20,'green');
console.log(rectangle1.getArea());
console.log(rectangle1.draw())

//overriding
class Triangle extends Shape{
    draw(){
        console.log(`drawing triangle ${this.color} color!`)
    }
    getArea(){
        return this.width*this.height*1/2;
    }
}
const triangle1 = new Triangle(20,20,'green');
console.log(triangle1.getArea());
console.log(triangle1.draw())

//for..in vs for..of
for(key in obj)
for(key in person1{
    console.log(key);
})

const array=[1,2,3,4]
for(value of array){
    console.log(value);
}
