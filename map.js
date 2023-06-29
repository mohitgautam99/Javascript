console.log("Here we are explain use of  Map()");
// Map() Use   Key Value pairs
const  person=new Map();
console.log(person);
person.set('firstName','Harshit');
person.set('age', 7);
person.set(1 ,'one ');
console.log(person);

//How to access a articular  element
console.log(person.get('firstName'));
console.log(person.get(1 ));
//used to access all key of the map
console.log(person.keys());
// secound methode
for(let i of person.keys())
{
   console.log(i);
}
person.delete(1 ,'one ');// used to delet the pair from the Map Array
console.log(person);
//used to access all key with value of the map
 for(let i of person)
 {
    console.log(i);
 }
 // use of The has() Method
 console.has();
 
 