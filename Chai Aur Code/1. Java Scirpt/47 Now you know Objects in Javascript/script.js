// console.log(Math.PI)    //3.141592653589793
// Math.PI=6   // overwrite nhi hogi 
// console.log(Math.PI)    //3.141592653589793
// console.log(Math.floor(Math.PI))    //3
// console.log(Math.ceil(Math.PI)) //4
/*
ye INTERVIEW question hai ki math.pi ko 3 ya 4 kar skte hai 
*/

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const chai ={
    name: "ginger chai",
    price: 250,
    isAvailable: true
}
console.log(chai)   //{ name: 'ginger chai', price: 250, isAvailable: true } 
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
console.log(Object.getOwnPropertyDescriptor(chai,"price"))  
//{ value: 250, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(chai,"isAvailable"))
// { value: true, writable: true, enumerable: true, configurable: true }

//change bhi kar skte hai 
Object.defineProperty(chai,"name",{
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*
{ value: 300, writable: true, enumerable: true, configurable: true }
*/

Object.defineProperty(chai,"price",{
    value: 300
})
console.log(Object.getOwnPropertyDescriptor(chai,"price"))
/*
{
  value: 'masala chai',
  writable: false,
  enumerable: true,
  configurable: true
}
*/
console.log(chai)   //{ name: 'ginger chai', price: 300, isAvailable: true }
//enumerable: false , hua to vo value print nhi hogi
console.log(chai.name)  //ginger chai

// for(let [key, value] of chai){  // chai object hai to error
//     console.log(`${key} : ${value}`)
// }

for(let [key, value] of Object.entries(chai)){ 
    console.log(`${key} : ${value}`)
}
/*
name : ginger chai
price : 300
isAvailable : true
*/