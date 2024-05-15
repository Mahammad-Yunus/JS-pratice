const arr1=[1,2,3,4,"world",true,10.5];
// console.log(arr1);

let arr2= new Array(1,2,34,5,56,"hello");

// arr2.push(37);
// arr2.push("World");
// console.log(arr2);
// arr2.pop();
// console.log(arr2);

// let arr3=arr1.join(3,);
// console.log(arr3);

// console.log(`A : ${arr1}`);
// const substringUsingslice=arr1.slice(2,4);
// console.log(`substring using slice method : ${substringUsingslice}`);

// console.log(`B : ${arr1}`);
// const substringUsingsplice=arr1.splice(2,4);
// console.log(`substring using splice method : ${substringUsingsplice}`);

// console.log(`C : ${arr1}`);

let arr4=arr1.push(arr2);
console.log(arr4);//see ouput

arr4=arr1.concat(arr2);
console.log(arr4);
arr4=arr1+","+arr2;
console.log(arr4);

// by using sphered operator(...)

arr4=[...arr1,...arr2];
console.log(arr4);//we used


//we habe convert arr5 into single array we can use arr5.flat();
let arr5=[1,2,3,4,[5,6,7,8],[10,11,[2,4]]];
console.log(arr5);

let arr6=arr5.flat(2);//flat(dimension)
console.log(arr6);

//from string and object to array
const arr7=Array.from("Hello_world");
console.log(arr7);
let Obj={
    name:"Hello",
    place:"world",

}
const arr8=Array.from(Obj);
c//onsole.log(arr8);

//of
const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));