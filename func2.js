// methods
//  function inside function
const person = {
    firstname:"ramu",
    lastname: "kumar",
    age:24,
    about: function(){
        // console.log(`person name is ${this.firstname} and age is  ${this.age}`);
        console.log(this)
        // this is here object
    }

 }
// console.log(person.firstname);
// console.log(person['lastname']);
// console.log(person);
// console.log(person.about);
person.about();