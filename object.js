// Objects  reference type
// Array are good but not sifficient
// for real world data
// object store ke value pairs
// objecrt don't have index

// how to create objects

//  const person={name:"mohit", age:24}
//  console.log(person);
//  console.log(person['name'])//To Access a particular element
//  console.log(person['age'])
//  console.log(person.age)
// //  How to add key value pair to objects
//    person.gend="male";
//    console.log(person);


//How to iterate object
const man = {
    name:"mohit",
    working: "student",
    age: 23,
    perso_nhobbies:["singing", "writing", 'coading']

}
console.log(man);
// for in loop
// print the key .
for(let key in man)
{
    console.log(key);
}

//print  the key value 

for(let key in man)
{
    console.log(man[key]);
}

//print  the key with  value

 for(let key in man)
 {
    //  console.log(`${key}: ${man[key]}`); first method to print 
    console.log(key, " :" ,man[key]);
 }
