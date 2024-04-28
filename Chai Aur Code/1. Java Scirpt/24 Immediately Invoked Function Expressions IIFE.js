// Immediately Invoked Function Expressions IIFE

// means jaise function likha khud execute ho jaye 
 // means app jaise start ho to db connection ho jaye 
 // aur global varible kisi scope me dikkat na kare, local variable kabhi global variable se pollute ho jate hai 
 // es hi karn IIFE use kana hai 

//  function chai(){
//     console.log(`DB CONNECTED`)
//  }
//  chai()

// aur jab ham chahate hai ki global scope ke pollute na hoye to to hame chaye ki es function me pollute na ho ye to 
// to IIFE use karte hai 

// named IIFE
// (function chai(){
//     console.log(`DB CONNECTED`)
// })()  

// first () use for function defintion nad second () use for execution

// global scope se pollution se problem hoti hai to global scope ko vo variable hai  to use hata ne ke liye IIFE use karte hai

// in arrow function
// (()=> {
//     console.log(`DB CONNECED`)  //DB CONNECTED
//  })();  //; USE FOR END 
// (function chai(){
//     console.log(`DB CONNECED`)
//  })();  //; USE FOR END 


((name)=>{
    console.log(`DB connected ${name}`);
})('deepak')