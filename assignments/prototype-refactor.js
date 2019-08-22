/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
TASK 1

- Build a Person Constructor that takes name and age.
- Give persons the ability to greet by returning a string stating name and age.
- Give persons the ability to eat edibles.
- When eating an edible, it should be pushed into a "stomach" property which is an array.
- Give persons the ability to poop.
- When pooping, the stomach should empty.
*/

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    greet() {
        return `Hi my name is ${this.name} and my age is ${this.age}`;        
    }
    eat(edible) {
        if (edible) {
            this.stomach.push(edible);
          }
    }
    poop() {
        if (this.stomach.length > 0) this.stomach = [];
    }
}
let Meg = new Person('Megan', 21);
//TEST
// console.log(Meg);
// console.log(Meg.stomach);
// Meg.eat('pasta');
// console.log(Meg.stomach);
// Meg.eat('orange');
// console.log(Meg.stomach);
// Meg.poop();
// console.log(Meg.stomach);

/*
TASK 2

- Build a Car constructor that takes model name and make.
- Give cars the ability to drive a distance.
- By driving a car, the distance driven should be added to an "odometer" property.
- Give cars the ability to crash.
- A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
- Give cars the ability to be repaired.
- A repaired car can be driven again.

*/

class Car{
    constructor(model, name, make){
        this.model= model;
        this.name= name;
        this.make = make;
        this.odometer = 0;
        this.canDrive = true;
    }
    drive(distance){
        if (!this.canDrive) {
             return `I crashed at ${this.odometer} miles!`;
        }
        this.odometer += distance;
    }
    crash() {
        this.canDrive = false;
    }
    repair() {
        this.canDrive = true;
    }
}
let newCar = new Car ('Toyota', 'Yarris', 'Blablabla');

/* TEST
console.log(newCar);
newCar.drive(20);
console.log(newCar.odometer);// --> should return 20
newCar.crash();// --> should return I crashed at 20 miles!
newCar.repair();
newCar.drive(40);
newCar.odometer; // --> should return 60
*/

/*
TASK 3

- Build a Baby constructor that subclasses the Person built earlier.
- Babies of course inherit the ability to greet, which can be strange.
- Babies should have the ability to play, which persons don't.
- By playing, a string is returned with some text of your choosing.
*/
class Baby extends Person {
    playing() {  return `I am playing with my train`; }
} 


  var newBaby = new Baby('Joe', 1);
/*
TASK 4

Use your imagination and come up with constructors that allow to build objects
With amazing and original capabilities. Build 3 small ones, or a very
complicated one with lots of state. Surprise us!

*/

function Library(name, area, postCode) {
this.name = name;
this.area = area;
this.postCode = postCode;
this.books = [];
}
Library.prototype.addBook = function(book) {
this.books.push(book);
}

Library.prototype.checkoutBook = function(book) {
// var bookFound = this.books.filter(book => book.ISBN === bookISBN);
  var isFound = this.books.includes(book);
  if(isFound) {
    book.isCheckedOut = true; 
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex,1);
    return 'You have checked out ' + book.name;
  } else {
    return "This book isnt available right now";
  }
}

function Book(name, area, postCode, author, ISBN) {
Library.call(this, name, area, postCode);
this.name = name;
this.author = author;
this.ISBN = ISBN; 
this.isCheckedOut = false;
}

Book.prototype = Object.create(Library.prototype);

//TEST
var myLibrary = new Library('Fingal Library', 'Malahide', 'K36 PK20');
var book1 = new Book('Eloquent JavaScript', 'Fingal Library', 'K36PK40', 'Marijn Haverbeke', '1045435M');
var book2 = new Book('Book2', 'New Library', 'K36PK41', 'Megan Ennis', '10465655M');
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.checkoutBook('10465655M');

