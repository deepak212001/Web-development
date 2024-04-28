console.log("Now we are learn JavaScript , which is use in Web Dev")
const accID =164
let accemail="deepak@google.com"
var accPassword="123"
accCity="jaipur"

//const me change nhi kar skte hai 

// console.log(`${accID} ${accemail} ${accPassword} ${accCity} `)


// console.table([accID, accemail, accPassword, accCity])
// ┌─────────┬─────────────────────┐
// │ (index) │ Values              │
// ├─────────┼─────────────────────┤
// │ 0       │ 164                 │
// │ 1       │ 'deepak@google.com' │
// │ 2       │ '123'               │
// │ 3       │ 'jaipur'            │
// └─────────┴─────────────────────┘

//let and var both are defined variables
// let is local  
/*
prefer  not to use var 
bcz of issue in block scope and function scope
*/

// let a=10
// {
//     let a=4
//     console.log(a)   //4
// }
// console.log(a)   //10

let salary;
console.log(salary) //undefined