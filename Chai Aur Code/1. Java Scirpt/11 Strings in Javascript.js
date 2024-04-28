// const name="deepak"
// const count= 50
// console.log(name+count+" value") //old 
// console.log(`Hello my name is ${name} and my repo count is ${count}`)

// let fname= "Shiva"
// let lname= new String("Sankar-trilochan")  // aaise bhi kar skte hai
// // console.log(`hey ${fname} ${lname}`)
// // console.log(fname[0])  //s
// // console.log(fname.length) //5
// // console.log(fname.toUpperCase()) //SHIVA
// // console.log(fname.toLowerCase()) //shiva
// // console.log(fname.charAt(2))  //i   2 index pe kya hai 
// // console.log(fname.indexOf('i')) //2    i kis index pe hai 

// let sname = lname.substring(0,6)  //to ab lname ka index 0 se 5 tak sname me 
// // console.log(sname)  //Sankar
// let aname = lname.slice(0,6)  //-ve value bhi de skte hai to revrese karega 
// // console.log(aname)  //Sankar
// // subbstring me -ve value denge to vo 0 se start hota hai 



const  newStringOne= "   deepak     "   // when use give extra space 
console.log(newStringOne)
console.log(newStringOne.trim())  // space remove

const url="www.google.com"
console.log(url)        //www.google.com
console.log(url.replace('google','deepak'))  //www.deepak.com
console.log(url.includes('google'))  //true   //check ki ye word hai ya nhi 


let friend="shiva is my friend"
console.log(friend.split(' '))  // vo ab space se split kar dega ya 'a' dalte to a se split kar dete 
// aur array type me store kar dega 
// [ 'shiva', 'is', 'my', 'friend' ]
console.log(friend)