class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }

    // staic nhi hota to sabhi access le lete kae bar har object ko access nhi dena chatate jo es class se instance huaa ho
    //par static ke karn us method ya proporty ko ruk deta hai 
    static createId(){    
        return `123`
    }
}
const deepak= new user("deepak")
// console.log(deepak.createId())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const phone = new teacher("deepak","deepak@google.com")
phone.logMe() //Username : deepak