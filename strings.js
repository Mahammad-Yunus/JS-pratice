// const name ="yunus";
// const age="24";

// //strinng interpolation
// // console.log(`Hello, I am ${name} and my age is ${age}`);



// let v="string";
// console.log(typeof v);//string
//  let gameuser=new String("Javascript-aweswome@google-.com");
//  console.log(typeof gameuser);//object


// // console.log(gameuser.length);
// // console.log(gameuser.charAt(8));
// // console.log(gameuser.indexOf('g'));

// //substring(start,end) which excludes end index
// let v=gameuser.substring(3,17);
// console.log(v);

// //slice(start,end) we can provide negative value 
// let a=gameuser.slice(-20,10);
// console.log(a);

// //trim-removes white spaces
// let b="           hello_world    "
// const tt=b.trim();
// console.log(tt);

// //split("spliter",limit)-returns array of words
// let n=gameuser.split("-",2);
// console.log(n)

// let c=gameuser.split("-");
// console.log(c)


// console.log(gameuser.includes("Javascript"));


//numbers
// const  balance=new Number(400.77777);
// console.log(balance);//400

// console.log(balance.toString().length);//3

// console.log(balance.toFixed(4));//400.7778

// console.log(balance.toLocaleString());//400.778
// console.log(balance.toPrecision(3));//401


/*console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);
*/

//////////////////IMPORTANT//////////////////////
// const min=10;
// const max=20;

// let random=Math.floor(Math.random()*(max-min+1))+min;


// console.log(Math.floor(Math.random()*(max-min+1))+min);    


//=========================================================== DATE OBJECT IN JAVASCRIPT=================================//

const dateNow=new Date();
// console.log(dateNow);
// console.log(dateNow.toString());
// console.log(dateNow.toDateString());
// console.log(dateNow.toLocaleDateString());
// console.log(dateNow.toJSON());
// console.log(dateNow.toISOString());
// console.log(dateNow.toLocaleTimeString());

let datn=new Date(2023,0,14,5,30,35,1);
let datn2=Date.now();
console.log(datn2);
//console.log(datn.toTimeString());
console.log(datn.getTime());
console.log(datn.getTime===datn2);

console.log(datn.toLocaleString("default",{
    month:"long"
}))










