// singleton object 


// const tinderUser = new Object()  //singleton object hai 
// console.log(tinderUser)     // {}


const tinderUser = {}  //non singleton object
// console.log(tinderUser)       // {}

tinderUser.id = "123abc"
tinderUser.name = "deepak"
tinderUser.isLoggedIn = false
// console.log(tinderUser)       // { id: '123abc', name: 'deepak', isLoggedIn: false }


const regularUser = {
    email: "deepak@google.com",
    fullname: {
        username: {
            firstname: "deepak",
            lastname: "yadav"
        }
    }
}
// console.log(regularUser)
/*
{
  email: 'deepak@google.com',
  fullname: { username: { firstnname: 'deepak', lastname: 'yadav' } }    
}
*/
// console.log(regularUser.fullname)   //{ username: { firstnname: 'deepak', lastname: 'yadav' } }
// console.log(regularUser.fullname.username)  //{ firstnname: 'deepak', lastname: 'yadav' }
// console.log(regularUser.fullname.username.firstname)    // deepak

// nested object


//object merge 
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}// wrong array wli mistake object ke ander object
// console.log(obj3)   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//alternate
// const obj3=Object.assign(target,source,source)
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//best
const obj3={...obj1,...obj2}
// console.log(obj3)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

 const users= [         //array me object
    {
        id:1,
        email: "ho@gmail.com"
    },
    {
        id:2,
        email: "host@gmail.com"
    },
    {
    },
 ]
//  console.log(users[1])  //{ id: 2, email: 'host@gmail.com' }

//ttinderUser
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
// tinderUser object ki key mil gayi hai array type me 
console.log(Object.values(tinderUser))  //[ '123abc', 'deepak', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'deepak' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    //true
// check ki ye property hai ?

