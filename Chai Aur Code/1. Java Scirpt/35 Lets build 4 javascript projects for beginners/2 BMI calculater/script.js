const form = document.querySelector('form')
//form ko hi select karna hai kyuki form me hi sumbit button hai 
// form sumbit jab hota ahi to post type se ya get type se hota hai
// value to servel ke pass jane se rokna padega
// const height= parseInt(document.querySelector('#heigth').value)
// this usecase will give you empty value


form.addEventListener('submit',function(e){
    e.preventDefault() // default action hold ke liye
    const height= parseInt(document.querySelector('#height').value)
    // parseInt()  jo bhi value milegi vo int me hoo jayegi
    const weight= parseInt(document.querySelector('#weight').value)
    const result= document.querySelector('#results')
    if(height ==='' || height<0 || isNaN(height)){
       result.innerHTML= 'Please give a valid height'
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        result.innerHTML= 'Please give a valid weight'
     }
    else {
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6){
            result.innerHTML=`<span>${bmi}</span><br>Under Weight`
        }
        else if(bmi>25){
            result.innerHTML=`<span>${bmi}</span><br>Over Weight`
        }
        else result.innerHTML=`<span>${bmi}</span><br>Normal Weight`
    }
    


})