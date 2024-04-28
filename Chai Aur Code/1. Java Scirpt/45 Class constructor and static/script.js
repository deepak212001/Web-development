/*
class User {
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    } //basic constructor

    encrptPassword(){
        return `${this.password}`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai =new User("chai","chai@google.com","123")
console.log(chai)   //User { username: 'chai', email: 'chai@google.com', password: '123' }
console.log(chai.encrptPassword()) //123
console.log(chai.changeUsername()) //CHAI
*/
//--BEHIND ----
// SAME IN FUNCTION


function User(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    } 

User.prototype.encrptPassword= function(){
    return `${this.password}`
}
User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const tea =new User("tea","tea@google.com","123")
console.log(tea)   //User { username: 'tea', email: 'tea@google.com', password: '123' }
console.log(tea.encrptPassword()) //123
console.log(tea.changeUsername()) //TEA