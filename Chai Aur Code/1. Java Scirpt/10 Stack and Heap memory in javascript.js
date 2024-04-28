//+++++++++++++++++++++++++++++++
// stack (primitive ) heap(non- primitive)
// primitive data type stack me aur non primitive heap me 
// jab stack memory use hoti hai to uski copy milti hai
// heap me sirf refrence milta hai origin me  change hogi

// let lname="rariya"
// let fname =lname
// fname="deepak"
// // lname ne fname ko copy diya tha to ab sirf fname change 
// console.log(fname )     //deepak
// console.log(lname )     //rariya


// let user1={
//     email: "user@gmail.com",
//     upi: "user@upi"
// }
// // nonprimitive hai to heap memory me hai 

// let user2=user1  // to ye copy nhi diya ye refrence diya hai to user2 me change hoga to user1 me bhi hoga 
// console.log(user1)  //{ email: 'user@gmail.com', upi: 'user@upi' }
// console.log(user2)  //{ email: 'user@gmail.com', upi: 'user@upi' }
// user1.email="user2@google.com"

// console.log(user1)  //{ email: 'user2@google.com', upi: 'user@upi' }
// console.log(user2)  //{ email: 'user2@google.com', upi: 'user@upi' } 