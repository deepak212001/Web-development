//for shopping carts  // hame pta nhi ki kitne add krega 
//rests operator ...
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(299,499,349))  //299 esne bas first ko return kar diya to eska solution rests operator hai 


// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(299,499,349))  //[ 299, 499, 349 ]


function calculateCartPrice(val1,val2,...num1){
    console.log(val1)   //299
    console.log(val2)   //499
    return num1
}
// console.log(calculateCartPrice(299,499,349,799))  //[  349, 799  ]
 // first two value 299 val1 me gayi aur val2 me 499 aur baki num1 me hai 


 const user={
    username: "deepak",
    price: 2999
 }

 function handlobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }
 handlobject(user)
 //to argument me object bhi dete hai 
 //username is deepak and price is 2999
 // direct object bhi pass kar skte hai 
 handlobject({
    username:"shiva",
    price: 987456
 })
 // username is shiva and price is 987456
 //array also passsed as argument

 function returnSecondValue(getArray)
 {
    return getArray[1]
 }
 const myNewArray =[200,400,600] 
 console.log(returnSecondValue(myNewArray)) //400
 console.log(returnSecondValue([800,900,102])) //900
