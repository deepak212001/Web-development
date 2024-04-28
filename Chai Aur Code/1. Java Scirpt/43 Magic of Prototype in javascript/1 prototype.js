// let myname= "deepak"
// console.log(myname.length) //6

let myname = "deepak     "
console.log(myname.length) //11  so true value nhi de rha hai 
// to trim kar ke kar skte hai par hmane khud ka ek truelength bana hai
console.log(myname.trim().length) //6
console.log(myname.truelength)  // to method bana rhe hai 






let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy poer is ${this.spiderman}`)
    }
}

Object.prototype.deepak = function () {
    console.log(`deepak is present in all object`)
}
heroPower.deepak()  //deepak is present in all object
myHero.deepak()  //deepak is present in all object


// array ---->object-----> null


Array.prototype.heydeepak = function () {
    console.log(`deepak say hello`)
}

myHero.deepak()     //deepak is present in all object
myHero.heydeepak()      //deepak say hello
// heroPower.heydeepak() //error heroPower.heydeepak is not a function




//----INhERITANCE------

const user = {
    username: "deepak",
    email: "deepak@google.com"
}

const teacher = {
    makeVideo: true
}

const teacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teacherSupport // bahar bhi le skte hai ye method hai 

}
teacher.__proto__ =user //teacher , user ki saki proporty access kar skta hai 

// modern syntax
Object.setPrototypeOf(teacherSupport,teacher) // teacherSupport , teacher ko access kar rha hai 

let anotherusername="tarun     "
String.prototype.truelength=function(){
console.log(`${this}`)  //tarun
console.log(`${this.name}`) // undefined
console.log(`True length is : ${this.trim().length}`)   //True length is : 5
}

anotherusername.truelength() 

"deepak  ".truelength()
/*
deepak
undefined
True length is : 6
*/