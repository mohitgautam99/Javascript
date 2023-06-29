const arr=[2,3,89,1,54,3,9];
arr.sort((a,b)=>{
return a-b// Assending order
});

console.log(arr);
const arr1=[2,3,89,1,54,3,9];
arr.sort((a,b)=>{
return b-a// dessending order
});

console.log(arr);

/* 
working of sorting
89,3
a-b--->positive (Greater than 0)--->b,a
3,89
a-b--->mnegative ---->a,b
3,9
*/