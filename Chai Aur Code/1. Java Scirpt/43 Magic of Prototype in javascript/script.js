//JS ka default behavior hai prototype behavior menas upar se upar
// agr use koi chi nhi milti to jo vo dhundhna chaha rhe ho to vo upar laye pe jaake dekhti hai parent pe grandpranet pe jati hai jab tak use null value nhi mil jati

function multipleBy5(num) {
    return num * 5
}
multipleBy5.power = 2
console.log(multipleBy5(4))     //20
console.log(multipleBy5.power)      //2
console.log(multipleBy5.prototype)      // {}

// function -> function bhi hai aur object hai

function createUser(username, score) {
    //username=username // confused ho sakte hai to this use jis se current context mila hai 
    this.username = username
    this.score = score
}
// apna khud ka prototype function baya hai 
createUser.prototype.increment = function () {
    this.score++   // this means jisne bulaya ahi us ka kam kar do
}
createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 20)

//ERROR Cannot read properties of undefined  so new key word use hoga 
chai.printMe()      //Price is 25
chai.increment()
chai.printMe()  //Price is 26

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the 
newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the 
newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is returned.

*/
// ab sidha class contructor use hota hai 