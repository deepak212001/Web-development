//NUMBER
const score=400
// console.log(score)  //400
// console.log(typeof score)   //Number

//aur
const balance= new Number(100)
// console.log(balance)    //[Number: 100]
// console.log(typeof balance)   //0bject 

// console.log(balance.toString().length) //3
// console.log(balance.length) //undefined
// console.log(balance.toFixed(2)) // 100.00 ye point me lata hai

// const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3))// 23.9   3 digit chahiye to round off kar dega

// const hundreds= 1000000
// console.log(hundreds.toLocaleString()) //1,000,000  in US satndard
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000  in Indian satndard

//+++++++MATHS

// console.log(Math)   //Object [Math] {}
// console.log(Math.abs(-4))  //4   -ve in +ve 
// console.log(Math.round(4.3))   //4
// console.log(Math.round(4.7))    //5   normal round off karega 
// console.log(Math.ceil(4.3))     //5   ceil use kiya hai to upar wala no
// console.log(Math.floor(4.7))    //4   floor use kiya hai to niche wala no

// console.log(Math.min(4,3,5,8,6))   //3
// console.log(Math.max(4,3,5,8,6))    //8


// console.log(Math.random())   // random value b/w 0 to 1
// console.log(Math.random()*10)   // random value b/w 0 to 10
// console.log((Math.random()*10)+1)   // random value b/w 1 to 10
// console.log(Math.floor(Math.random()*10)+1)   // random value b/w 1 to 10 only interger float nhi 


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)) +min)  // random value b/w 10 to 20 only interger float nhi


