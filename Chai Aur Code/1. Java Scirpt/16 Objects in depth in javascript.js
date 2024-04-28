//singleton 
//Object.create 


//object literals


const mySym = Symbol("key1")
// console.log(typeof mySym)  //symbol
const JsUser = {      //non singleton object
    name : "deepak", // js name to "name" manega
    "last name": "yadav", // bich me space hai to " " me hi rkhna hai 
    // mySym: "mykey1",     // do not use that bcz ab ye string tpye hai  line 28
    [mySym]: "mykey1",  // symbol ko aaise likhte hai 
    age : 18,
    location: "delhi",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// //access 
// console.log(JsUser.email)  // access kar skte hai but is not good way to access
// console.log(JsUser["email"]) //deepak@google.com dono ka output

// //console.log(JsUser.last name) //se access nhi kar skte hai 
// console.log(JsUser["last name"]) //yadav

// console.log(typeof JsUser.mySym)   //string
// console.log(JsUser[mySym])   //mykey1

// JsUser.email= "deepak@gmail.com"  //aaise value chnage kar skte hai 
// Object.freeze(JsUser)  // ab freeze kar diya hai to ab kuchh bhi change nhi hoga
// console.log(JsUser)
/*
{
  name: 'deepak',
  'last name': 'yadav',
  age: 18,
  location: 'delhi',
  email: 'deepak@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/


// ADD FUNCTION IN OBJECT
JsUser.greeting = function(){
    console.log("hello js user")
}
console.log(JsUser.greeting) //[Function (anonymous)]
//function ka refrence aaya hai excute nhi huaa hai 

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)// this use for refrence same object
}
console.log(JsUser.greeting()) //hello js user
console.log(JsUser.greetingTwo())   //hello js user, deepak