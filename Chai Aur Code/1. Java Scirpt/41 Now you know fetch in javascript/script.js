fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))


  // promise interview q.  ->  promise me request ki aur return e error aaya 404 to vo respone me milega error me nhi menas resolve me milega reject nhi 

  //agr kuchh value return karna hai fetch me to 

  /*
  // space in "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });

2. 
fetch('https://example.com/', { mode: 'navigate' });

3. 
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
*/