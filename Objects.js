
const mysym=Symbol();

const obj={
    name:"yunus",
    "fullName" : "Mahammad Yunus",
    //symbol-imp
    [mysym]:"MyKey1",
    //
    email:"Mahammad.Yunus@microsoft.com",
    password:123456,
    isLogin:true,
    isLoginDays:["all weekdays","Depends on weekends"]
}

// how to access
console.log(obj.email);

console.log(obj["email"]);
console.log(obj[mysym]);
console.log(typeof(mysym))

console.log(obj);

obj.greeting=function(){
    console.log("Hello JS");
}

obj.greetingTwo=function(){
    console.log(`Hello Js in another way ${this.fullName}`);
}

//console.log(obj.greeting);[Function (anonymous)]
console.log(obj.greeting());//Hello JS

console.log(obj["greetingTwo"]())

//object creation using Object Constructor(singleton Object)
// const tinderuser=new Object();
// console.log(tinderuser);

//nexted objects
const tinderuser={
    user:{
        fullname:{
            firstname:"hello",
            lastName:"world"
        }
    }
}

console.log(tinderuser.user.fullname?.firstname);
console.log(tinderuser.user.fullname?.age);
// ' ? ' is used as alternate of if-else if age is present it will provide value or it will give undefined

const obj1={
    1:"A",2:"B"
}

const obj2={
    3:"A",4:"B"
}

//join the two objects

let obj3;

obj3={obj1,obj2};
console.log(obj3);//{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'A', '4': 'B' } } -not excepted

obj3=Object.assign({},obj1,obj2);
console.log(obj3);//{ '1': 'A', '2': 'B', '3': 'A', '4': 'B' } 
//Object.assign(target,source)  target-{} source-obj1,obj2


//imp
obj3={...obj1,...obj2};
console.log(obj3);

//imp
console.log(Object.keys(obj));//array of keys in object-Obj
console.log(Object.values(obj));//array of values in object-Obj
console.log(Object.entries(obj));//array of individual entities in object-Obj
console.log(obj.hasOwnProperty("isLoginIn"));//to check if the key is present or not


/////////////====================================     IMPORTANT    =====================================////
/////////////====================================     DESTRUCTING OF JSON OBJECTS[API]  refer video 18   ==========================////
//JSON APIS IN OBJECTS OR ARRAY OF OBJECTS

const CourseJs={
  CourseName:"JavaScript",
  CourseInstructor:"Histest",
  Fees:"999"
}

const {CourseName}=CourseJs;     //destructing
console.log(CourseName);

const {CourseName:name}=CourseJs;
console.log(name);


/*  
from apis data come in JSON(Javasrript Object Notation) Format 

JSON - Consist of Objects or array of Objects

const CourseJs={
  "CourseName":"JavaScript",                              JSON Object
  "CourseInstructor":"Histest",
  "Fees":"999"
}

[
    {Obj1},{Obj2},....
]
*/ 




