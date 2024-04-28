// // for of loop 

// const arr=[10,20,30,40,50]
// for (const iterator of arr) {
//     console.log(iterator)
// }
// /*
// 10
// 20
// 30
// 40
// 50
//  */


// arr.forEach(element => {
//     console.log(element)
// });
// /*
// 10
// 20
// 30
// 40
// 50
//  */


// for (const key in arr) {
//     console.log(key)
//     console.log(arr[key])
// }

// /* 
// 0   // key
// 10
// 1
// 20
// 2
// 30
// 3
// 40
// 4
// 50
// */


// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(greet)
// }
// /*
// h
// e
// l
// l
// o
 
// w
// o
// r
// l
// d
// */


// maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
// console.log(map)
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/

// map for in loop me iterable nhi hai 
// for (const key of map) {
//     console.log(key)
// }
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/

// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }
// /*
// IN :- India
// USA :- United States of America
// FR :- France
// */

// const myObject ={
//     'game1':"NFS",
//     'game2':"SPIDERMAN"
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value)
// }

// //myObject is not iterable for for of loop use for in loop

const myObject={
    js: "javascript",
    cpp: "cpp",
    rb: "ruby"
}
// for (const key in myObject) {
//     console.log(key)
// }
/*
js
cpp
rb
*/

// for (const key in myObject) {
//     console.log(key,":-",myObject[key])
//     //or console.log(`${key} ;- ${myObject[key]}`)
// }
// /*
// js :- javascript
// cpp :- cpp
// rb :- ruby
// */ 

const coding= ["js","ruby","java","python","cpp"]

// coding.forEach(element => {
//     console.log(element)
// });
// //aur
// coding.forEach((element) => {
//     console.log(element)
// });
// //aur
// coding.forEach(function (val){
//     console.log(val)
// })
// /*
// js
// ruby
// java
// python
// cpp
// */

// coding.forEach((item,index , arr)=>{
//     console.log(item,index,arr)
// })
// /*
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// */


const myCoding=[
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "c++",
        languagefilename: "cpp"
    },
    {
        languagename: "python",
        languagefilename: "jy"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagename);
})
/*
javascript
java
c++
python
*/