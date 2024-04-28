/*
this   -\in window   to data 
in node  ->  {}
*/


function SetUsername(username){
    //compex DB calls
    this.username=username
}

function CresteUser(username, email,password){
    // SetUsername.call(username)  // ab ye call hoga
    //username set nhi ho rha hai to ye this pass karna hoga ki hamra current context use karo 
    // CresteUser { email: 'chai@googlle.com', password: '123' }
    SetUsername.call(this,username)
    /*
    CresteUser {
    username: 'chai',
    email: 'chai@googlle.com',
    password: '123'
    }
    */

    this.email=email
    this.password=password
}

const chai= new CresteUser("chai","chai@googlle.com", "123")
console.log(chai)