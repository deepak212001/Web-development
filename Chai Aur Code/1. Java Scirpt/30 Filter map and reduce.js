// const coding =["js","ruby","java","python", "cpp"]

// const value= coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(value)  // koi return hi nhi de rha hai 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum=myNums.filter((num)=>num>4) // similary foreach par es me condition hai aur automatic return karta hai
// const newNum1=myNums.filter((num)=>{
//     return num>5
// }) // agr {} ye use karge to return use karna hoga 
// console.log(newNum)  //[ 5, 6, 7, 8, 9, 10 ]
// console.log(newNum1)  //[  6, 7, 8, 9, 10 ]

//return in foreach loop
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4)
//         newNums.push(num)
// })
// console.log(newNums)    //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History") // history not 

// console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/
userBooks = books.filter((bk) => bk.publish >= 2000)

// console.log(userBooks);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

userBooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === "Science")
// console.log(userBooks);

/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //add 10 in everyt element
// // const newNum=myNum.map((num)=>num+10) 
// // aur
// const newNum=myNum.map((num)=>{
//     return num+10
// }) 
// console.log(newNum)   
// /*
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]
// */
// const newNums=[]
// myNum.forEach((num)=>{
//     newNums.push(num+10)
// })
// console.log(newNums)    
// /*
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]
// */

//chaining map ke bad map aur map ke bad filter
// map().map()  ya map().filter()

// const newNum=myNum.map((num)=>num*10).map((num)=>num+1)
// console.log(newNum)
/*
pehle map se mupltiy 10 se fir vahi value durse map ko dega 
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/

const newNum = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
// console.log(newNum)
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/



//----------REDUCE------------
//reduce  react me bhi aata hia 
//in shoping cart 

/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

currentvalue array se lega 
pehle accumulator ki value nhi hai to initialvalue lega fir bad me acc+curval ka sum accumulator lega 
initialvalue      accumulator    currentvale
    0                  0                1
                       1                2
                       3                3
                       6                4
                       10
                    ab ye value 10 sumwithinitial ko mil jayegi 
*/
const muNums = [1, 2, 3]

// const myTotal = muNums.reduce(function (acc,curval){
//     console.log(`acc:- ${acc} and curval:- ${curval}`)
//     /*
//     acc:- 3 and curval:- 1
//     acc:- 4 and curval:- 2
//     acc:- 6 and curval:- 3
//     */
//     return acc+curval;
// },3)
//in arrow function

const myTotal = muNums.reduce((acc,curval)=>acc+curval,3)

// console.log(myTotal) //9

const shopingCart=[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
//add all price
const totalPrice=shopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice)  //22996