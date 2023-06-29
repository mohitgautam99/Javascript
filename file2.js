// let  data type var declare only one time
// var data type  variale declare multiple time 

let name="MOHIT ";
console.log(name);
//   name="kumar";
console.log(name);
// const  data type  declare for constant value . which is fixed.
const pi=3.14;
console.log(pi);
// pi=34.88;
// console.log(pi);// can not change 
// use of string in js
console.log(name[2]);// we can acces a particular later of the string.
//  find the length of the string
console.log(name.length);//useing by variable name with length function .
//  some method  use in string
// 1 trim() =>use to remove the space of the string.
// 3 toLowerCase()=> change the character into Upper case
// 4 slice()
let firstname="    shyam  ";
firstname=firstname.trim();
console.log(firstname.length);
// 2 toUpperCase()=> change the character into Upper case
let vill="Rajpur";
vill=vill.toUpperCase();
console.log(vill);
// 3 toLowerCase()=> change the character into Upper case
let nam="MOHAN"
vill=vill.toLowerCase();
console.log(vill);
// 4 slice => 
vill=nam.slice(0 ,4);
console.log(vill);