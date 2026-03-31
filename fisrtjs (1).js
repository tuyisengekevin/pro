let fruits=['mango','orange','banana'];
fruits.push('juice');//add item 
fruits.unshift('mao');//add infront
fruits.sort();//sort alphabetic
for(fruit of fruits){//loop
    console.log(fruit);
}
//function
console.log(fruits);
function happy(name,age){//function
console.log(`happy birthday ${name}`);//location of name
console.log(`you are ${age} old`);//location of age
} 
happy(kevin,45);
//lastindexof
let text = "hello-world-hello";
console.log(text.lastIndexOf("hello")); // returns 12
console.log(text.split('-'));// change into array [hello,world,hello]
console.log(text.slice(0,4)+text.slice(-3));//slice it on index4 hell and add last 3chars
//characters to nbr
const moveforward= (str)=> str
.split('')//string to array
.map(char=>String.fromCharCode(char.charCodeAt(0)+1))//fromcharcode change nbr to characters
.join('');//join array to a string
console.log(moveforward('abcd'));
//date
const formatdate=(date = new Date()) => {
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
 return` ${day}/${month}/${year}`;
    
}
console.log(formatdate());
//condition
const formatdate=(str)=>
str.startsWith('new!')? str:`new! ${str}`;//condition? true:false
console.log(formatdate('hello'));
//check even and display  half
const check=(str)=> {
return str.length % 2===0 ? str.slice(0,str.length/2):str;};
console.log(check('hellokevin'));
  //filter check a given condition
  const words = ["cat", "elephant", "dog", "tiger"];

const longWords = words.filter(word => word.length > 3);//(element=>condition)

console.log(longWords); // ["elephant", "tiger"]
//maximum even nbr
const even = (arr) => arr.filter(num => num % 2 === 0);

const largest = (arr) => Math.max(...arr);// math.max give maximum

console.log(
  largest(even([2,3,24,2,4,4,3,2,1,1,4,5,4]))
);
//replace anything 
const place= (str)=>str.replace(/[0-9]/g,'@');//g means global
console.log(place('abdiaai2312kasbdkad'));
//fibonaccii
function fibonacci(n) {
  if (n <= 0) return [];         // No numbers to generate
  if (n === 1) return [0];       // Only first number
  let sequence = [0, 1];         // Start with 0 and 1
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]); // Add previous two
  }
  return sequence;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
//check any non-damage
  function anyArrows(arrows) {
  // Check if there is at least one arrow that is not damaged
  return arrows.some(arrow => !arrow.damaged);//some return true if condition checks
  }
console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])); // Output: true (the first arrow is good)
//ceil
const quarterOf = month => Math.ceil(month / 3);//ceil round up

// Examples
console.log(quarterOf(2));  // 1
//every()
const numbers = [2, 4, 6, 8];

const result = numbers.every(num => num % 2 === 0);

console.log(result); // true
//map()and reduce()
function sumSquares(arr) {
  return arr
    .map(num => num * num)      // square each number
    .reduce((sum, num) => sum + num, 0); // ((a,b)=> a+b ,initial b)
}
console.log(sumSquares([1, 2, 2])); 
//reduce()map() to add points in season
const point = (games) => 
  games.reduce((acc, game) => {
    const [x, y] = game.split(':').map(Number); // convert to numbers
    const points = x > y ? 3 : x === y ? 1 : 0;
    return acc + points; // no need for acc += points
  }, 0);

console.log(point(['1:2','3:3'])); // ✅ pass array of games

//callback function//
function cv(callback){
  console.log('hrll');
  callback()
}
function cd(){
  console.log('helda')
}
cv(cd);//callback output: hrll helda

//string manupilation 
phonenbr=phone.replaceall('d','1')
phone = phone.startwith('q')
phone = phone.endwith('q')
phone = phone.includes('q')
phone = phone.repeat()
phone = phone.padstart(13,'q')
phone = phone.padend('q')
phone = phone.slice(0,3)
phone = phone.trim()//remove spaces
phone = phone.CharAt(2)
 if(isNaN(X))//IS NOT AN NBR

 array manipulation
 fruit.push()//add element at last
 fruit.pop()//remove last
 fruit.unshift('ada')//add at start
 fruit.shift()//remove 1st
 spread operator=...allow to split anything
 let name=[...name]//will change the string into an array
rest parameter=(...nbrs)// allow bundle elements together
function add(...nbr){ nbr=nbr+nbr}
add(12,32,1)
//foreach method
let array=[2,2,3,12]
array.forEach(display)//foreach apply afunction on each separatly
function display(element, index, array){
  console.log(element)
}
//map method
let array=[2,2,3,12]
 const ans= array.map(double)//map create new array[4,4,9,144]
 console.log(ans)
function double(element, index, array){
 return Math.pow(element,2)
}
//or 
let array=[2,2,3,12]
 const ans= array.map((element)=> Math.pow(element,2))//arrow function
 console.log(ans)

//filter method
let nbr=[2,3,4,5,6,6,5];
let ans=nbr.filter(char=>char%2===0);//element=>condition
console.log(ans)
//reduce method
//help to reduce elements to a single unit
let nbr=[2,3,4,5,6,6,5];
let ans=nbr.reduce((acc,next)=>acc+next,0);//acc is start ,0 is initial of acc
console.log(ans)
//object oriented//oopp
const person1={
name:'kevin',
age:21,
convo: function(){console.log(`hello im ${this.name}`)}//reference of object where it is used
}
console.log(person1.name);//dot notation
//bracket notation is Used when the key is coming from a variable.
function solution([m1,m2,d],[um1,um2,ud]) {
  const G = 6.67e-11 ;
  const conversion = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592
                     , m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048
                     } ;
  return G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 ;
}// conversion[key]

person1.convo();
//constructor function help to reuse it in many object
function car(a,b){
 this.name=a;
  this.color=b;
  this.message=function(){console.log(`u drive ${this.name}`)}
}
const car1= new car('ford','red')
console.log(car1.name)
car1.message();
//class with constructor
class Product {
  static x=1;//static means it belong to class not objects
    constructor(name, price) {   // MUST be called 'constructor'
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}
const product1 = new Product("Laptop", 1200);
product1.displayInfo(); // Works
product1.x//undefined
Product.x//1
//inheritance 
class Person {        //parent class
  constructor(name) {
    this.name = name;
  }
  move(speed){console.log(`speed is ${speed}`)}
}

class Student extends Person {
  constructor(name, course,speed) {
    super(name); // takes name to parent class
    this.course = course;
    this.speed=speed;
  }
  showInfo() {
    console.log(this.name + " studies " + this.course);
    super.move(this.speed);//this call method of parent
  }
}

const s1 = new Student("Kevin", "JavaScript",200);
s1.showInfo();
//destructuring is extract and assign values to new variables in array and object in particular ways
let a=1;let b=2
[a,b]=[b,a]//they will swap
const c=[2,3,4]
 [x[0],x[1]] =[x[1],x[0]]//destructuring
 const per1={ name:'sasa' age:12}
 const {a,c}= per1
 console.log(a)// sasa

