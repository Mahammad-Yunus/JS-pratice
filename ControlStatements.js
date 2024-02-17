//if-statement
//if(condition==true){
    //executed
//}
//>,<,>=,<=,==,!=,===,!==

// let score=90;
// if(score>=100){
//     let power="fly";
//     console.log(`user is ${power}`);
// }else{
//     console.log(`user is not ${power}`);
// }


//const balance=1000;
//bad pratices

// if(balance>9000) 
//    console.log("test"),
//    console.log("is now")
// else
//    console.log("is now also")

//if(balance>500) console.log("test"),console.log(test2); //bacd pratice

const promise =new Promise((resolve,reget) => {

    //asyncnous operation
    setTimeout(()=>{
       let value=Math.floor(Math.random()*10);

    //resolve promise
    if(value < 5){
      resolve(`promise is successfull : ${value}`)
    }
    //error
    else{
        reget(`promise is reget : ${value}`)
    }

    },1000)


});

promise.then((result)=>{
    console.log(result);
 }).catch((result)=>{
     console.log(result);
 });

