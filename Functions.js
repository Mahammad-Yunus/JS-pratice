//package of code that has to execute multiple times in code or file.

// function AddTwoNumbers(number1,number2){
//     return number1+number2;
// }
// const result=AddTwoNumbers(6,7);
// console.log(result);

// function AddTwoNumbers(number1,number2){
//     if(typeof(number1,number2)!=String){

//         return number1+number2;
//     }
// }
// const result=AddTwoNumbers(6,7);
// console.log(result);

//how to take n - number of elements as a parameter
function calculatePriceOfCart(...Array){
console.log(...Array);
}
calculatePriceOfCart(200,300,400);

//pass a Object as parameter/argument

function ObjectParameter(AnyObject){
    return `my name is ${AnyObject.name},i am ${AnyObject.age} years old `
}

const obj1={
    name:"yunus",
    age:"21"
};

console.log(ObjectParameter(obj1));

//OR

const result=ObjectParameter({
    name:"hiiiiii",
    age:30
});
console.log(result);

//pass a Array as parameter
function ArrayParameter(AnyArray) {
    return AnyArray[0]
} 

const arr1=[20,3,4,5,7];
console.log(ArrayParameter(arr1));//
//or
console.log(ArrayParameter([50,60,70,80]));//

////This keyword- this keyword in js refers to the current context(variables,fuctions,objects) of objects

const a={
    name:"hello",
    age:20,

    invoke :function(){
// console.log(`${a.name} world!`)
console.log(`${this.name} World`);//this=a
    }
}

a.invoke();
console.log(this)//{} in Node Environment , But in Browsers Console.log(this) is refers to window ,window is the global object

// in function and arrow functions we cannot this keyword

//Arrow functions
//explicit Return
// case1
const Arrow = (num1,num2) => {
  return num1+num2; 
}
console.log(Arrow(3,5));

//implicit return
//case2
const Arrow1=(num1,num2) => (num1+num2);  
console.log(Arrow1(2,5));

const objArrow=()=>({name:"hello"});
console.log(objArrow());
console.log(objArrow);//[Function: objArrow]

// In Arrow Function if we use { } we have to explicit use return keyword  i.e., case1
// In Arrow Function if we use ( ) we don't have to explicit  use return keyword i.e., case2 -- Used in react 


/*Immediately Involed function Expression(IIFE)
   --like when software is running immediate database has to connect
   --donot want to global polution
   --()();
   --IF 2 IIFE are written in 1 file it has to seperated by semi-colon(;)
   */

   //(function-defination)();


   //named IIFE
   (function chai() {
    console.log(`DB CONNECTED`)
   })();

   //using ARROW Function and parameters IIFE

   (()=>{
    console.log(`DB CONNCETED WITH ARROW`);
   })();

   ((name)=>{
    console.log(`${name} -- DB CONNECTED`);
   })("hoisted");
