// JS and class 
/*
pehle class nhi hoti thi js me aur abhi bhi nhi hoti sahi se 

JS is primarily a prototype-based language not a object oriented language
and classes are primarily syntactic sugar over existing prototype-based inheritance  mechanisms


*/
/*
------------Object------------

collection of properties and methods
toLowerCase

------------parts of OOP------------

Object literal
    Constructor function
    Prototypes
    Classes
    Instances (new, this)


------------4 pillars------------

Abstraction -> details hide karna
Encapsulation ->  details ko wrapper karta hai
Inheritance  ->  
Polymorphism -> many more by one name , ex - function overloading 

*/


//ye ek literally object hai 
// const user={
//     username: "deepak",
//     loginCount: 5,
//     signedIn: true
// }

// console.log(user)    //{ username: 'deepak', loginCount: 5, signedIn: true }


const user = {
    username: "deepak",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {  // method hai 
        //console.log("Got user detailsfrom Database")
        console.log(`username : ${this.username}`) //ese btana hai ki ham bahar se  apne username ki bat kar rhe hai
        console.log(this)  // to ye ab current context ki bat ho rhi hai to pura context dega
        /*{
            username: 'deepak',
            loginCount: 5,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        } */
    }
}

console.log(user.username)  //deepak
console.log(user.getUserDetails())  // ese btana hoga ki current ki bat kar rhe hai
/*Got user detailsfrom Database
username : deepak
undefined */
console.log(user)
/*{
  username: 'deepak',
  loginCount: 5,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
} */

console.log(this)  //ab ye bhar hai ko bahr wala ko current hai to bahar to kuchh bhi nhi hai 
//{}


// Constructor function

const date = new Date()
// const prom = new Promise()
//ye new jo hai vo constructor hai 
//Constructor function means ek hi object se multiple instances bana pao
// new , jo ha naya contact bana me kam aata hai

function User(username, loginCount, isloggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    return this // es se puri detail return hogi
} //this ek object hi hai

// const userOne = User("deepak", 12, true)
// console.log(userOne)
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  navigator: [Getter],
  crypto: [Getter],
  username: 'deepak',  
  loginCount: 12,
  isloggedIn: true
}

*/
// const userTwo = User("deepak", 10, false)
// console.log(userOne) 
/*
 username: 'deepak',
  loginCount: 10,
  isloggedIn: false
*/
// userone print karya par yaha to usertwo ki details to menas usertwo ne overwrite kar diiya ahi
// to new keyword use karege  ki hame new contact do 


const userOne = new User("deepak", 10, false)
console.log(userOne) // User { username: 'deepak', loginCount: 10, isloggedIn: false }
const userTwo = new User("shivam", 5, true)
console.log(userOne) //User { username: 'deepak', loginCount: 10, isloggedIn: false }
console.log(userTwo) //User { username: 'shivam', loginCount: 5, isloggedIn: true }
// agr function me return nhi bhi likha hota to bhi ans milta by default


// new me 
/*
// new me 

1. empty object create
2. Constructor function call hota hai new keyword ke karna
    argument pack kar ke deta ahi
3.  this kwyword me jo bhi argument pack the vo insert hote hai this me 
4.  function ke ander mil jate hai 
*/

console.log(userOne.constructor)
//[Function: User] apna function de rha ahi 