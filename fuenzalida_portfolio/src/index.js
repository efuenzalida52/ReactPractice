import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Parent Class
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am ', this.name, 'and I am ', this.age, 'years old')
    }
}
//providing arguments for parameters  and calling function
const animal1 = new Animal('Simba', 3);
animal1.speak();
//debugging, showing data passed
console.log(animal1);

// Child class
class Lion extends Animal{ 
    // inheriting name & age from parent class
    constructor(name, age, furColor, speed){ 
        super(name,age)
        this.furColor = furColor;
        this.speed = speed;
    }
    // new function
    roar(){
        console.log('ROAR! I have a',
        this.furColor, 
        'mane',
        'and can run ',
         this.speed, 
         'mph.');
    }

}
// passing arguments for both local & inherited parameters
const loin1 = new Lion('mufasa',20,'gold',60);
loin1.speak();
loin1.roar();
console.log(loin1);
