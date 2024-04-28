// function one(){
//     const username ="deepak"
    
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     two()
//     //console.log(website) // ye nhi kar skte hai kyuki pranet function child se nhi le skta ha par child pranet se le skta hai 
// }
// one()
// same in if else
if(1){
    const username ="deepak"
    if(username==="deepak"){
        const website =" youtube"
        console.log(username)
    }
    //console.log(website) // same as function 
}



// ++++++++++ INTERESTING ++++++++++

console.log(addone(5)) //6
function addone(num){
    return num+1
}
console.log(addone(5)) //6
// es me function se pehle bhi likh skte hai par expression wale me nhi 


//console.log(addTwo(5)) // ye error dega es me nhi likha skte hai 
// Cannot access 'addTwo' before initialization
const addTwo =function(num){     // ye function hi hai par ese expression bhi keh skte hai
    return num+2
}
console.log(addTwo(5))