// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// research that=> JS is statically type or dynamically type

const score= 100
const scoreValue= 100.3

// console.log(typeof score);// number
// console.log(typeof scoreValue);// number

const isLoggedIn= false
const outsideTemp= null
let userEmail;

// console.log(typeof isLoggedIn);// boolean
// console.log(typeof outsideTemp);// object
// console.log(typeof userEmail);//undefined

const id=Symbol('123')
const anotherid=Symbol('123')
//console.log(id === anotherid);

// console.log(typeof id);//Symbol
// console.log(typeof anotherid);//Symbol

const bigNumber = 345677899134242267n

// console.log(typeof bigNumber);//bigint

// Reference Type (Non- Primitive)

// Array, Objects, Functions

const heroes=["shaktiman","naagraj","doga"];

// console.log(typeof heroes);//object

let myObj={
    name:"alka",
    age:"30"
}

// console.log(typeof myObj);//object

const myFunction= function(){
    console.log("Hello World");    
}

// console.log(typeof myFunction);//function

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non Primitive)

// Stack(Primitive)=> whenever we put something in stack and then we always get value's copy only
// Heap(Non Primitive)=> whenever we put something in heap and then we always get value's references only, it means that it provides the actual value not the copy

let myYoutubeName="alkapandey"

let anothername=myYoutubeName;
anothername="chaiaurcode"

console.log(myYoutubeName);//alkapandey
console.log(anothername);//chaiaurcode

let userOne={
    email:"alka.pandey@google.com",
    upi:"alka@apl"
}

let userTwo=userOne;
console.log(userTwo);
console.log(userOne);

userTwo.email="alka@google.com"

console.log(userOne.email);
console.log(userTwo.email);
