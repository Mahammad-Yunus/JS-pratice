// filter
// it will accept the callback function and return the value
//used for filtering the content

const nums=[1,2,3,4,5,6,7,8,9,10];


// const mynums=nums.filter(function(num){
//     return num>5
// })

//using arrow function

//const mynums=nums.filter( (num)=>num>5);
const mynums=nums.filter((num)=>{
    return num>5
})
console.log(mynums);

//map
//it will accept the callback function and the return the value
//it is used to add or iterate in all the values in array

// const mynum1=nums.map(function(item){
//     return item+10;
// })

//arrow function
//const num1=nums.map((num)=>num+10);
const num1=nums.map((num)=>{
    return num+10
}
);
console.log(num1);

//chaining

const chaining=nums.map((num)=>num*10)
                    .filter((num)=>num>40);
console.log(chaining);

//reduce
//it will accepts the call back function and returns the single value after the addition

const arr=[1,2,4]

// const initalvalue=0;
// const re=arr.reduce(function(accumlator,currentvalue){
//     return accumlator+currentvalue
// },initalvalue)

// console.log(re);

//const arrowre=arr.reduce((acc,currentval)=>acc+currentval,0);

const arrowre=arr.reduce((acc,currentvalue)=>{
    return acc+currentvalue
},0)
console.log(arrowre);

//these methods are try with array of objects -- addcart

const shoppingkart=[
    {
        course:"Javascript",
        price:2999
    },
    {
        course:"Python",
        price:999
    },
    {
        course:"Mobile Dev",
        price:5999
    },
    {
        course:"Data science",
        price:12999
    },
]

// const totalPrice=shoppingkart.reduce(
//     function(acc,item){
//         return acc+item.price;
//     },0
// )

const totalPrice=shoppingkart.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(totalPrice)

//book object array

const Bookstore=[
    {
        name:"book1",
        genre:"History",
        Published:2001,
        version:2021
    },
    {
        name:"book2",
        genre:"History",
        Published:1990,
        version:2015
    },
    {
        name:"book3",
        genre:"History",
        Published:2015,
        version:2022
    },
    {
        name:"book4",
        genre:"Novel",
        Published:1950,
        version:1960
    },
    {
        name:"book5",
        genre:"Friction",
        Published:1800,
        version:1900
    },
    {
        name:"book6",
        genre:"Friction",
        Published:1850,
        version:2012
    },
    {
        name:"book7",
        genre:"Non-Friction",
        Published:2007,
        version:2019
    },
    {
        name:"book8",
        genre:"Non-Friction",
        Published:2011,
        version:2021
    },
]

const book=Bookstore.filter((item)=>{
    return item.genre==="History" && item.version>=2015
})
console.log(book);