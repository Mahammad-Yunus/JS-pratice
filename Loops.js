//for Loop

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log(`Table of ${i}`);
//     for(let j=1;j<=10;j++){
//     console.log(`${i}*${j}=${i*j}`);    
//     }
// }

// let str="";
// for(let i=1;i<=5;i++){
//     for(let k=0;j<=5)
//     for(let j=1;j<=i;j++){
//       str=str+"*";
//     }
//     str=str+"\n";
// }

// console.log(str);

//While Loop
const arr=["BatMan","SpiderMan","HelloMan"];
let i=0;//initialize
while(i<arr.length){//condition check
    //console.log(arr[i]);
    i++;//increment
}

//Do-while Loop-at least 1 time 

let Score=11;
// do {
//     console.log(Score);
//     Score++
// } while (Score<=10);
do {
    //console.log(Score);
} while (Score<=10);


//========================================
//Array Specific Loop

//--for of loops
["","",""]
[{},{},{}] //--Object Array

//Array
const myarr=[1,2,3,4,5];
for(const num of myarr){
   // console.log(num);
}

//string
const str="Hello World";
for (const s of str) {
    if(s==' '){
        continue;
    }
    //console.log(`word is ${s}`);
}


/////////////////////////////////////////////
//object-objects are not iterateable by for Of loop --they have special loops
const Obj1={
    ID1:"game1",
    ID2:"game2"
};

// for (const ob of Obj1) {
//    // console.log(ob);
// }

/////////////////////////////////////////////////////

//maps
const Map1=new Map();
Map1.set("game1","spiderman1");
Map1.set("game2","spiderman2");
Map1.set("game3","spiderman3");

for (const key of Map1) {
   // console.log(key);
//     [ 'game1', 'spiderman1' ]
//     [ 'game2', 'spiderman2' ]
//     [ 'game3', 'spiderman3' ]
} 

//destruction
for (const [key,value] of Map1) {
    console.log(`key : value is ${key} : ${value}`);
}

//for-IN Loops- it hold the keys of the objects it not of maps

const obj1={
    js:'javasccript',
    cpp:'C++',
    rb:'Ruby',
    py:'Python'
};

for (const key in obj1) {
  // console.log(key)
  ///console.log(obj1[key]);
}

//Foreach - it is method we have to give a callback it it 

const coding =["JS","Java","Ruby","Python","cpp"];

coding.forEach(function (item){
    //console.log(item);
})

//arrow functions
coding.forEach((item)=>
    console.log(item)
)

//foreach-- item,inedx,array(whole array)
coding.forEach((item,index,array) =>
{
   // console.log(item);
    //console.log(index);
   // console.log(array);
})

//array of objects --imp
const coding1=[
    {
        lanugage:"javascript",
        lanugagefilename:"js"
    },
    {
        lanugage:"java",
        lanugagefilename:"java"
    },
    {
        lanugage:"Ruby",
        lanugagefilename:"rb"
    },
]

coding1.forEach(function (item){
    console.log(item.lanugage);
})