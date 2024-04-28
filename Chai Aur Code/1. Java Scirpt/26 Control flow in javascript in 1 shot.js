//if else

// if(true){

// }
// else{
    
// }

// < , >, <=, >=, ==, !=, ===, !==

// var ka scope completly global hai 

// if(true){
//     let power="fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`) // error dega kyuki power scope hai hai aur vo scope ke ander access le skte hai bahar nhi 
// var hota to error nhi hota kyuki var completly global hai


// const month=1
// switch (month) {
//     case 1:
//         //code
//         break;

//     default:
//         break;
// }
// const month="may"
// switch (month) {
//     case "may":
//         //code
//         break;

//     default:
//         break;
// }


// const user="deepak"
// if(user){
//     console.log("got the name")
// }
// else{
//     console.log("srry")
// }

// falsy value 
// false,0,-0,BigInt 0n, "", null, underfined, NaN

//truthy value
// "0",'false' , " ",[], {}, function(){}


// false==0 , false=="", 0==""  ans true



// Nullish Coalescing Operator (??) : null undefined
// let val1=5 ?? 10
// let val2=null ?? 10
// let val3=undefined ?? 10
// let val4=null ?? 10 ??20

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)

// Terniary operator (if else in one line)
// condition ? true : false

const price=100
price>=80 ? console.log("more than 80") : console.log("less than 80")