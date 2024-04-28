// const clock= document.getElementById('clock')  // both are valid
const clock= document.querySelector('#clock')

// let date= new Date()
// console.log(date.toLocaleTimeString())  //har bar run ho ye to bs time print kr ke ruk jayega 
setInterval(function(){
    let date= new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)
/*
ye bta rha hai ki setInterval ki ye 1000 milisec me change karna hai means re run karna hai 
*/