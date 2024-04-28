//THIS keyword current contest ke bare me btata hai 

const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
        
    }
}
// user.welcomeMessage()   
// //deepak, welcome to website
// /*
// {
//   username: 'deepak',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// ye console.log(this ke karna)
// */
// user.username="shiva"
// user.welcomeMessage()   //shiva, welcome to website
// /*
// {
//   username: 'shiva',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// */

// console.log(this)
/*
output=> {}
empty bcz abhi ham node eniverment ne hai to abhi this empty ko refernce kar rha hai

browser ke console me karte hai ye to window karta hai print kyuki 
browser me sabse jayda global object hai window
***INTERVIEW QUESTION++++
*/

// function chai(){
//     console.log(this) // abhi ye global detail print karega 
// }
// chai()

// function chai(){
//     let name= "deepak"
//     console.log(this.name) // undefined kyuki this keyword object me hi kam karta hai function me nhi 
// }
// chai()

//+++++++++++ FUNCTION DECLARE USING ARROW FUNCTION
// const chai= function(){
//     code
// }

// const chai = ()=>{
//     let name= "deepak"
//     console.log(this.name)  //undefined
//     console.log(this)   //{}
// }
// chai()

// --------------ARROW FUNCTION-----
// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// const addTwo=(num1,num2) =>num1+num2
// const addTwo=(num1,num2)=>(
//     num1+num2
// )
// jab {} use hoga to return likhna hai par () ye use hoga to nhi likhana hai 
//return a object
const addTwo=(num1,num2)=>({name:"deepak"}) //{ name: 'deepak' }
console.log(addTwo(3,4)) //7