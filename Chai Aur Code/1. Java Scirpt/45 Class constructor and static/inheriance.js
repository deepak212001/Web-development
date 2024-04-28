class User {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username) //super keyword se ab jo class ko etemd kar rhe the vaha se le aayega 
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course wass added by ${this.username}`)
    }

}

const chai = new teacher("chai", 'chai@google.com', "123")
console.log(chai)   //teacher { username: 'chai', email: 'chai@google.com', password: '123' }

chai.addCourse()    //A new course wass added by chai

const masalaChai = new User("masalaChai")
masalaChai.logme()  //USERNAME is masalaChai
console.log(chai === masalaChai)    //false  
console.log(chai === teacher)   //false
console.log(chai instanceof User)   //true