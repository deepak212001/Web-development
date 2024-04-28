// Promise -> the promise object represents the eventual completion(or failure) of an asynchronous operation and its reulting value.
//promise ek object hai 


const prom1 = new Promise(function (resolve, reject) {
  //do an async task
  // DB calls , Cryptography, network
  setTimeout(function () {
    console.log('Async task is complete')
    resolve() // ye execute kar rha ahi . then ko ki ye ho gya ab then chale
  }, 1000)
})

//consume the variable prom1
//.then  ka relstion hai resolve ke sath
//.catch ka relation hai reject ke sath
prom1.then(function () {
  console.log('Promise Consumed')
})


//aur kisi variable me store na karye to 
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2")
    resolve()
  }, 1000)
}).then(function () {
  console.log("Asynca 2 resolved")
})

// koi variable nhi thA TO SATH ME hi then use kar liya


const prom3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "deepak", email: "deepak@google.com" }) // mostly object pass hota hai
  }, 1000)
})
prom3.then(function (user) {
  console.log(user)
})


const prom4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({ username: "deepak", password: "123" })
    }
    else {
      reject('Error something wrong')
    }
  }, 1000);
})

prom4.then((user) => {
  console.log(user)
  return user.username  // ye jo return value hai vo next then ke function me pass ho rhi hai 
}).then((username) => {
  console.log(username)
}).catch(function (err) {
  console.log(err)
}).finally(() => {
  // always execute chahiye then ho ya catch
  console.log("The promeisse is either resolved or rejected")
})

/*
prom4
.then((user) => {
    console.log(user)
    return user.username  // ye jo return value hai vo next then ke function me pass ho rhi hai 
})
.then((username) => {
    console.log(username)
})
.catch(function (err) {
    console.log(err)
})

aase bh kar skte hai next line pe
*/


const prom5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({ username: "jaavscript", password: "123" })
    }
    else {
      reject('Error: js went wrong')
    }
  }, 1000);
})

// prom5.then(()=>{ })  then ke alwa bhi kar skte hai reslove ka async use kar ke 
// async function consumeprom5(){   // async direct error to catch nhi kar skte hai 
//     const respone = await prom5  //promise ek object hai to () nhi karna hai 
//     console.log(respone)
// }

async function consumeprom5() {
  try {
    const respone = await prom5  // await use kiya hai ki es me time lagega to wait karna
    console.log(respone)
  }
  catch (eror) {
    console.log(eror)
  }
}
consumeprom5()


// next video ka   fetch

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         //response string me aaya hai to use JSON me convert karna hai 
//         const data=await response.json()
//         // ye bhi time leta hai to await use kiya hai 
//         console.log(data)
//     }catch(error)
//     {
//         console.log("ERROR : ",error)
//     }
// }
// getAllUsers()

//in then catch

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))


//yaha await use ni bcz yaha pe pehla then end hoga tabhi 2nd wala start hoga

/*
OUTPUT

                                         > node "d:\course\Chai Aur Code\1. Java Scirpt\40 Promise in javascript\script.js"
[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object]
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: [Object]
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: [Object]
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: [Object]
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object]
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: [Object]
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: [Object]
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]
Async task is complete
Promise Consumed
Async task 2
Asynca 2 resolved
{ userName: 'deepak', email: 'deepak@google.com' }
Error something wrong
The promeisse is either resolved or rejected
Error: js went wrong
*/

/*
yaha pehle fetch wala ho rha ahi aur ye promise wala bad me ye esliye ho rha hai kyuki promise wale me hamne settimeout kar rhkha hai 1 sec ka vo 1sec hold pe hai jab tak fetch ho gya 
*/