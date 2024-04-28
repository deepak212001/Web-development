//Date

let myDate= new Date()
// console.log(typeof myDate)   //object
// console.log(myDate)  //2024-04-15T08:57:13.046Z ye india ka time nhi hai 
// console.log(myDate.toString())  //Mon Apr 15 2024 14:28:49 GMT+0530 (India Standard Time) 
// //ye india ka time hai 

// console.log(myDate.toLocaleString())    //4/15/2024, 2:42:10 PM

// let myCreateDate = new Date(2024,0, 2)   // month 0 se start hote hai 
// console.log(myCreateDate.toDateString())  //Tue Jan 02 2024


// let myCreateDate = new Date(2024,0, 2,5,3)   // month 0 se start hote hai 
// // let myCreateDate = new Date(yyyy,mm, dd,hh,min,ss)   
// console.log(myCreateDate.toLocaleString())  //1/2/2024, 5:03:00 AM

// let myCreateDate = new Date("2024-1-2")   //string me month 1 se start hote hai 
// console.log(myCreateDate.toDateString())  //Tue Jan 02 2024

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);   // 1713172942950 milisec 1 jan 1970 se
// console.log(myCreateDate.getTime());   // 1704133800000 milisec 1 jan 1970se  se
// console.log(Math.floor(Date.now()/1000))    // 1713173719sec aur 1000 se divide kiya to milisec se sec me aur point me na aaye esliye floor



let newDate=new Date()
// console.log(newDate.getFullYear())  //2024
// console.log(newDate.getMonth()+1)  // 4 month 0 se start hota hai es liye +1
// console.log(newDate.getDate())  //15

console.log(newDate.toLocaleString('default',{
    weekdy: "long",
})) //4/15/2024, 3:10:14 PM

console.log(newDate.toLocaleString())   // dono ka same 

