const course = {
    coursename: "jshindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)    //hitesh
//aur

//de-structure method
const {courseInstructor} = course  //yaha pe course se value lelega aur alga ek variable ban jayega 
// console.log(courseInstructor)   //hitesh
const {courseInstructor: teacher} = course  //yaha pe course se value lelega aur alga ek teacher variable ban jayega 
// console.log(teacher)   //hitesh

//API CONCEPT
//API se value json me aati hai json bhi ek object hai jiska koi name nhi hota hai 
//aur kai bar array me milti hai 

/*
{
    name: "deepak",
    course: "mca",
    rollno : 20
}

aur array me
[
    {},
    {},
    {}
]
*/