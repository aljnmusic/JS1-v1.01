// const minNum = 1;
// const maxNum = 10;
// const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}: `);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert('Please enter a valid number.');
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
//     }
//     else{
//         attempts++;
//         if(guess > randomNum){
//             window.alert('Your guess is too high.');
//         }
//         else if(guess < randomNum){
//             window.alert('Your guess is too low.');
//         }
//         else{
//             window.alert(`You guessed the number in ${attempts} attempts.`);
//             running = false;
//         }
//     }
// }

// function birthday(username, age){
//     console.log("Happy Birthday!!");
//     console.log(`Happy birthayd ${username}`);
//     console.log(`You are ${age} years old`);
// }

// birthday("John", 27);
// birthday("Jane", 24);

// function add(x, y){
//     return x + y;
// }

// function subtract(x, y){
//     return x - y;
// }

// function multiply(x, y){
//     return x * y;
// }

// function divide(x, y){
//     return x / y;
// }   

// function even(number){
//     return number % 2 === 0 ? true : false;
// }

// console.log(even(2));

// console.log(add(1, 2));
// console.log(subtract(1, 2));
// console.log(multiply(1, 2));
// console.log(divide(1, 2));

// let fruits = ["apple", "banana", "orange", "kiwi", "grape"];

// fruits.push("mango");
// fruits.pop();
// fruits.unshift("watermelon"); 
// fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

// let food1 = "pizza";
// let food2 = "apple";
// let food3 = "banana";

// function openFridge(...foods){
//     console.log(...foods);
// }

// openFridge(food1, food2, food3);

// function combine(...strings){
//     return strings.join(" ");
// }

// const name = combine("John", "Aljenne", "Galos");

// console.log(name);

// hello(leave);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function leave(){
//     console.log("Leave");
// }

// function wait(){
//     console.log("Wait!")
// }

// function goobye(){
//     console.log("goodbye!")
// }

// sum(displayPage, 2, 5);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }
 
// function displayPage(result){
//     document.getElementById("myh1").textContent = `The sum is ${result}`;
// }

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(triple);
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function display(element){
//     console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }

// const students = ["jane", "peter", "mary"];
// const studentsUpper = students.map(uppercase);
// console.log(studentsUpper);


// function uppercase(element){
//     return element.toUpperCase();
// }

// .map
// const dates = ["2024-10-11", "2025-2-12", "2026-3-13"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// // .filter()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evennum = numbers.filter(isEven);
// console.log(evennum);

// function isEven(element){
//     return element % 2 === 0;
// }

// .reduce()
// const prices = [1, 1234, 33, 22, 21]
// const total = prices.reduce(sum);
// console.log(`$${total}`)

// function sum(accumulator, element){
//     return accumulator + element;
// }

// setTimeout(function(){
//     console.log("Hello")
// }, 3000);

// const num = [1, 2, 3, 4, 5, 6]
// const square = num.map(function(element){
//     return Math.pow(element, 2);
// })

// const cube = num.map(function(element){
//     return Math.pow(element, 3);
// })
// console.log(cube);

// const num = [2, 22, 13, 24, 214, 34]
// const odd = num.filter(function(element){
//     return element % 2 === 0;
// })

// console.log(odd);

// //arrow function
// const hello = (name) => console.log(`hello ${name}`)
// hello("bro");
// const num = [1, 2, 3, 4, 5, 6];
// const square = num.map((element) => Math.pow(element, 2));
// const even = num.filter((element) => element % 2 === 0);
// const odd = num.filter((element) => element % 2 !== 0);
// const total = num.reduce((previous, next) => previous + next);
// console.log(total);

//object
// const person = {
//     firstName: "John",
//     lastName: "Galos",
//     Age: 27,
//     isEmployed: false,
//     isStudent: true,
//     sayHello: function(){console.log("Hi, I'm Spongebob")},
// }

// person.sayHello();


//this
// const person1 = {
//     name: "John",
//     age: 20,
//     sayhello: function(){console.log(`Hi ${this.name}`)},
//     myage: function(){console.log(`${this.age} years old`)}
// }

// person1.sayhello();
// person1.myage();

//constructors
// function Car(make, year, model, color){
//     this.make = make,
//     this.year = year,
//     this.model = model,
//     this.color = color
//     this.drive = function(){console.log(`You drive ${this.model}`)};
// }

// const car1 = new Car("Ford", 2024, "Mustang", "Red");

// console.log(car1.make);
// car1.drive();

//CLASSES
// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//     }

//     calcTax(SalesTax){
//         return this.price + (this.price * SalesTax);
//     }
// }

// const product1 = new Product("Pants", 12.99);
// product1.displayProduct();

// const SalesTax = 0.05;
// const total = product1.calcTax(SalesTax);
// console.log(`Total after tax: ${total.toFixed(2)}`);


//STATIC
// class MathUtil{
//     static PI = 3.14159;

//     static getDiamter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiamter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUsercount(){
//         console.log(`There are ${User.userCount} user online`);
//     }

//     sayHello(){
//         console.log(`My name is ${this.username}`);
//     }
// }

// const user1 = new User("Patrick");
// const user2 = new User("SOinig");

// const user3 = new User("Patrick");
// const user4 = new User("SOinig");

// user1.sayHello();
// console.log(user1.username);
// console.log(User.userCount);
// User.getUsercount();


//inheritance
// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is slepping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "Rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// const rabbit = new Rabbit();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.run();


//super
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`This ${this.name} move at ${this.runSpeed}`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// const rabbit = new Rabbit("BugsBunny", 1, 25);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(`${rabbit.runSpeed} kph`);

// rabbit.run();


//getters&setters
// class Rectangle{
//     constructor(width, heigth){
//     this.width = width;
//     this.heigth = heigth;
//     }

//     set width(newWidth){
//         if (newWidth > 0) {
//             this._width = newWidth;
//         }
//         else{
//             console.error("Must be a positive number");
//         }
//     }

//     set heigth(newHeigth){
//         if (newHeigth > 0) {
//             this._heigth = newHeigth;
//         }
//         else{
//             console.error("must be a positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get heigth(){
//         return this._heigth;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// console.log(rectangle.width);
// console.log(rectangle.heigth);

// class Person{
//     constructor(firstname, lastname, age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     set firstname(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             return this._firstname = newFirstName;
//         }
//         else{
//             console.error("Invalid name");
//         }
//     }

//     set lastname(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             return this._lastname = newLastName;
//         }
//         else{
//             console.error("Invalid last name");
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Invalid number");
//         }
//     }

//     get firstname(){
//         return this._firstname;
//     }

//     get lastname(){
//         return this._lastname;
//     }

//     get age(){
//         return this._age;
//     }
//     get fullname(){
//         return this._firstname + this._lastname;
//     }
// }

// const person = new Person("spongebob", "Patrics", 30);

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.fullname);
// console.log(person.age);


//destructuring
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(b);

// const colors = ["red", "green", "yellow", "blue", "black"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors[0]);

// function displayPerson({firstName, lastName, age, student}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`student: ${student}`);
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Galos",
//     age: 27,
//     student: true,
// }

// displayPerson(person1);

// const {firstName, lastName, age, student} = person1;

// console.log(firstName);



//Nested Object
// const person = {
//     fullname: "John Galos",
//     age: 20,
//     student: true,
//     hobbies: ["Basketball", "Coding", "Movies"],
//     address: {
//         street: "Zone 4",
//         baranggay: "Loho",
//         town: "Lagonoy",
//         city: "Naga"
//     }
// }

// // console.log(person.fullname);
// // console.log(person.hobbies[0])
// // console.log(person.address.baranggay)

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "126 Conch St.", "Bikini Bottom", "Int. Waters");

// console.log(person1.address.city);





//ARRAY OF OBJECT/////
const fruits = [{name: "apple", color: "red", calorie: 95},
                {name: "orange", color: "orange", calorie: 67},
                {name: "banana", color: "yellow", calorie: 87}];

fruits.push({name: "grapes", color: "purple", calorie: 62});
// console.log(fruits[0].color);
// fruits.splice(0, 2);
// // fruits.pop();
// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.name));
// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);
// const yellowfrutis = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowfrutis);
// const lowcal = fruits.filter(fruit => fruit.calorie < 70);
// console.log(lowcal);
// const maxfruit = fruits.reduce((max, fruit) => fruit.calorie > max.calorie ? fruit : max);
// console.log(maxfruit);
// const minfruit = fruits.reduce((min, fruit) => fruit.calorie < min.calorie ? fruit : min);
// console.log(minfruit);


//SORT()////
// const people = [{name: "John", age: 27, gpa: 2.5},{name: "Mike", age: 23, gpa: 3.2},{name: "Peter", age: 25, gpa: 4.5},{name: "Juan", age: 22, gpa: 2}];

// // people.sort((a, b) => a.gpa - b.gpa);
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);


//SHUFFLE ARRAY///

// const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// shuffle(cards);
// console.log(cards);


//DATE OBJECT////
// const date = new Date(2025, 0, 5, 4, 5, 6);
// const date = new Date();
// const year = date.getFullYear();
// console.log(year);


//CLOSURE///
// function outer(){
//     let message = "Hello";
//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();

// function createCounter(){
//     let counter = 0;

//     function increment(){
//         counter++;
//         console.log(`Count increased by ${counter}`);
//     }

//     function getCount(){
//         return counter;
//     }

//     return {increment, getCount};

// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`Current count is ${counter.getCount()}`);

// function createGame(){
//     let score = 0;

//     function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore(){
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();

// game.increaseScore(324);
// game.decreaseScore(142);
// game.increaseScore(346);
// game.decreaseScore(244);
// console.log(`Final score: ${game.getScore()}pts`);




//setTimeout()
// function sayHello(){
//     window.alert("Hello");
// }
// setTimeout(sayHello, 2000);

// setTimeout(function(){window.alert("Hellow")}, 2000);
// setTimeout(() => window.alert("Hello"), 2000);

// let timeoutId;
// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// }

// function endTimer(){
//     clearTimeout(timeoutId);
// }



//ES6 module
// import {PI, getCircumference, add, multiply} from './mathUtil.js';

// console.log(PI);
// const circumference = getCircumference(34);
// const sum = add(2, 3);
// const product = multiply(2,3);

// console.log(product);
// console.log(sum);
// console.log(circumference.toFixed(2));


//Asynchronous
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// console.log("Hello2");

//Synchronous
// function func1(callback){
//     setTimeout(() => {
//         console.log("Hello");
//     callback()}, 2000);
// }

// function func2(){
//     console.log("Heeeee");
// }

// func1(func2);




//ERROR - try - catch - finally
// try{
//     console.log(x);
// }
// catch(error){
//     console.log(error);
// }

// console.log("END");

// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if(divisor == 0){
//         throw new Error("You cant divide by zero!");
//     }

//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("invalid number");
//     }

//     const result = dividend / divisor;
//     console.lag(result);
// }

// catch(error){
//     console.log(error)
// }

// console.log("End");1


//DOM
// const username = "";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;


//ELEMENT SELECTOR
//getelementbyid
// const welcome = document.getElementById("welcome-msg");
// welcome.style.backgroundColor = "Green";
// welcome.style.textAlign = "center";

//getelementbyclassname()
// const Myfruits = document.getElementsByClassName("fruits");

// Myfruits[1].style.backgroundColor = "yellow";
// for(let MyFruit of Myfruits){
//     MyFruit.style.backgroundColor = "yellow";
// // }
// Array.from(Myfruits).forEach(MyFruit => {
//     MyFruit.style.backgroundColor = "red";
// })

//document.getElementByTagName()
// const h4Elements = document.getElementsByTagName("h4");
// // for(let h4Element of h4Elements){
// //     h4Element.style.backgroundColor = "yellow";
// // }
// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// })

// const liElements = document.getElementsByTagName("li");
// // for(let liElement of liElements){
// //     liElement.style.backgroundColor = "lightgreen";
// // }
// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// })

//document.querySelector()
// const element = document.querySelector("h4");
// element.style.backgroundColor = "yellow";

//querySelectorAll()
// const foods = document.querySelectorAll(".fruits");
// foods[0].style.backgroundColor = "yellow";
// const vegs = document.querySelectorAll("li");
// vegs.forEach(veg => {
//     veg.style.backgroundColor = "yellow";
// })


//DOM SELECTOR
//.firtsElementChild
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

//.lastElementChild
// const element = document.getElementById("veg");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "green";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "green";
// })


//.nextElementSibling
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


//.previousElementSibling
// const element = document.getElementById("orange");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";


// //.parentElement
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "red";

// //children
// const element = document.getElementById("fruits");
// const children = element.children;
// // console.log(children);
// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "red";
// })



//ADD change HTML
//create
// const newH1 = document.createElement("h1");
// newH1.textContent = "John";
// newH1.id = "newH1";
// newH1.style.textAlign = "center";
// newH1.style.color = "tomato";

// //document.body.append(newH1);
// document.getElementById("box1").append(newH1);
// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1, box2);

// //remove
// document.getElementById("box1").removeChild(newH1);


// const newListItem = document.createElement("li");
// newListItem.textContent = "Coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";
// // document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);


//MOUSE EVENTS
//eventListeners
//click
// const mybox = document.getElementById("mybox");
// const mybutton = document.getElementById("myButton");
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Hello!"
// }

// mybox.addEventListener("click", changeColor);

// mybox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Hello!"
// })

// mybutton.addEventListener("click", event => {
//     mybox.style.backgroundColor = "tomato";
//     mybox.textContent = "Hello!"
// })

// mybutton.addEventListener("mouseover", event => {
//     mybox.textContent = "Get Out";
//     mybox.style.backgroundColor = "lightgreen";
// })

// mybutton.addEventListener("mouseleave", event => {
//     mybox.textContent = "Good";
//     mybox.style.backgroundColor = "pink";
// })

//keyup & keydown
// const mybox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     mybox.style.backgroundColor = "lightgreen";
//     mybox.textContent = "HOY";
// })

// document.addEventListener("keyup", event => {
//     mybox.style.backgroundColor = "lightblue";
//     mybox.textContent = "HEY";
// })

// document.addEventListener("keydown", event => {


//     if(event.key.startsWith("Arrow")){

//         event.preventDefault();

//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
            
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
            
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
            
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//         }

//         mybox.style.top = `${y}px`;
//         mybox.style.left = `${x}px`;
//     }

// })


//hide & show html
// const mybutton = document.getElementById("myButton");
// const myimg = document.getElementById("myImg");

// mybutton.addEventListener("click", event => {
//     if(myimg.style.display === "none"){
//         myimg.style.display = "block";
//         mybutton.textContent = "Hide";
//     }
//     else{
//         myimg.style.display = "none";
//         mybutton.textContent = "Show";
//     }
// });



//nodeList
//add/change html
// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.style.backgroundColor = "lightgreen";
//     button.textContent = "HQ";
// })

//click event
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "lightgreen";
//     })
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "lightblue";
//     })
// })

//add element
// const newbutton = document.createElement("button");
// newbutton.textContent = "Button 5";
// newbutton.classList = "myButtons";
// document.body.appendChild(newbutton);

//remove element
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//     })
// })


//classlist
//add/remove()
// const mybutton = document.getElementById("myButton");
// mybutton.classList.add("enabled");
// mybutton.classList.remove("enabled");
// mybutton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })

// mybutton.addEventListener("mouseleave", event => {
//     event.target.classList.remove("hover");
// })

// mybutton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "Nope";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// })

// const myh1 = document.getElementById("myH1");
// myh1.classList.add("enabled");
// myh1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "HIIII";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// })

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.classList.add("enabled");
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("click", event => {

//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "bottons";
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled");
//         }
//     })
// })



//CALLBACK HELL
// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
// }


// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// }


// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 1500);
// }


// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1000);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("all task complete"));
//         });
//     });
// });



//PROMISES
// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const walkedDog = true;
//             if(walkedDog){
//                 resolve("You walked the dog 🐕");
//             }
//             else{
//                 reject("You didnt walked the dog");
//             }
//         });
//     });
// };


// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cleanedKitchen = true;
//             if(cleanedKitchen){
//                 resolve("You cleaned the kitchen");
//             }
//             else{
//                 reject("You did not clean the kitchen");
//             }
//         });
//     });
// };


// function takeTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const takenTrash = false;
//             if(takenTrash){
//                 resolve("You took out the trash");
//             }
//             else{
//                 reject("You didnt took out the trash");
//             }
//         });
//     });
// };

// // walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeTrash()}).then(value => {console.log(value); console.log("Done with the shit!")}).catch(error => console.error(error));

// async function doChores(){
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeTrashResult = await takeTrash();
//     console.log(takeTrashResult);
// }

// doChores();



//JSON
//JSON.stringify()
//JSON.parse()

// const names = `["John", "Peter", "Albert", "Brando"]`;
// const person = {
//     "name": "John",
//     "age": 27,
//     "isStudent": true,
//     "hobbies": ["Basketball", "coding", "movies"]
// };
// // const jsonNames = JSON.stringify(names);
// const jsonNames = JSON.parse(names);
// const jsonPerson = JSON.stringify(person);
// console.log(jsonNames);


//fetch
//fetc(url, {method: "GET/POST/PUT/DELETE"})
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(response => console.log(response))
//     .then(response => response.json())
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

fetchData();
async function fetchData(){

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("No data");
        }

        const data = await response.json();
        console.log(data.name);
    }
    catch{  
        console.error(error);
    }

}