const marvel_heros= ["thor", "ironman", "spiderman"]
const dc_heros= ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)   
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//lenth = 4
//console.log(marvel_heros.length)   
//push karte hai to vo as ek data leke pura array dusre aaray me dal diya hai 
// merge nhi kiya to merge karna hai to concat

const all_heros= marvel_heros.concat(dc_heros)
// console.log(all_heros)
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//alternate of concat is spread opertaor

const all_new_heros= [...marvel_heros, ...dc_heros]// ... ye array ae spread ho jata hai
// console.log(all_new_heros) 
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array= another_array.flat(Infinity) 
// console.log(real_another_array)
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
]
ye sab ek arrya me hi ho gaye hai aur infinity ki jagah 2 ,3 aaise
bhi de skte hai to fir utne hi element lega aur baki arrya me hi rhene dega 
*/
const real_another_array= another_array.flat(1) 
// console.log(real_another_array)
/*
[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
[4,5] ye array ke ander array tha to maine 1 diy tha to 1st array ko  merge kar diya 
par 2nd arrya ko nhi 
*/

console.log(Array.isArray("deepak")) //false   check kar rha hi ki array hai ya nhi 

//convert in array
console.log(Array.from("deepak"))   //[ 'd', 'e', 'e', 'p', 'a', 'k' ]
console.log(Array.from({name:"deepak"})) //es me dina hoga ki key ka arrya bana hai ya value ka 

let score1 =100
let score2 =200
let score3 =300 
console.log(Array.of(score1,score2,score3))  //[ 100, 200, 300 ]

