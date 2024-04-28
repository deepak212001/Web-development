// function sayMyNmae(){

//     console.log("D")
//     console.log("E")
//     console.log("E")
//     console.log("P")
//     console.log("A")
//     console.log("K")
// }

// sayMyNmae() //function call
// /*
// function function_name(){
//     code----
// }
// */

//add two number 
// function add(num1,num2){  // num1 and num2 are parameters
//     console.log(num1+num2)

// }
// add(3,4)    //7    //3,4 are arguments
// add(3,"5")  //35    converstion wala sence hai 
// add(3,"a")  //3a
// add(3,null)  //3


function add(num1,num2){
    // let ans=num1+num2
    // return ans // result is local for this function 
    return num1+num2
}
const result = add(3,5)  
// console.log("Result: ",result)  //Result:  8

// function loginusermessage(username){
//     return `${username} welcome`
// }
// console.log(loginusermessage('deepak'))  //deepak welcome
// console.log(loginusermessage())  //undefined welcome  , so check with if else 


// function loginusermessage(username){
//     if(username===undefined)
//         return "please enter a username"
//     return `${username} welcome`
// }
// console.log(loginusermessage())  //please enter a username

// function loginusermessage(username){
//     if(!username)
//         return "please enter a username"
//     return `${username} welcome`
// }
// console.log(loginusermessage())  //please enter a username

//default value
function loginusermessage(username="ram"){
    return `${username} welcome`
}
console.log(loginusermessage())  //ram welcome
console.log(loginusermessage("deepak"))  //deepak welcome
