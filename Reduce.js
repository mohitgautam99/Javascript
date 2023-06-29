// reduce
let arr=[1,2,3,4];
// console.log(arr[3]);

const sum = arr.reduce((accumulator,currentvalue)=>
{
    return (accumulator + currentvalue);
    

});
console.log(sum)