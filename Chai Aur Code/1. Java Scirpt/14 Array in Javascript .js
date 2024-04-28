//arry is object and resizeable in js
const myArr= [1,2,3,4,5]
// console.log(myArr[1])   //2
// console.log(myArr.length)   //5

const myfr = ["shiva","trilochan","adidev"]
const arr= new Array(10,20,30,40)

// myArr.push(6)
// console.log(myArr)  //[ 1, 2, 3, 4, 5, 6 ]
// myArr.pop() //remove last element
// console.log(myArr)  //[ 1, 2, 3, 4, 5 ]

// myArr.unshift(10)   //add in front
// console.log(myArr)  //[ 10,1, 2, 3, 4, 5 ]
// myArr.shift()       //remove form front
// console.log(myArr)  //[ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(14)) //false
// console.log(myArr.indexOf(3))   // 2

// const newArr=myArr.join()

// console.log(myArr)      //[ 1, 2, 3, 4, 5 ]  array format
// console.log(newArr)     //1,2,3,4,5 in string


// console.log(typeof myArr)      //object
// console.log(typeof newArr)     //string

//-----SLICE ,SPLICE

// console.log("A",myArr) //A [ 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3) //index 1 se 3 tak  1,2 bs

// console.log(myn1)   //[ 2, 3 ]
// console.log("B",myArr)  //B [ 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3) //index 1 se 3 tak  1,2 ,3 BHI
console.log(myn2)   //[ 2, 3 ,4]
console.log(myArr)  //[1,5]
// means splice me origional array se hata ke new array me deta hai
 