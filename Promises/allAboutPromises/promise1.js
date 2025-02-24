const Promise1= new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("TechDevoloper");
    },1000)
   resolve("first promise code");
   
});

Promise1.then(function(value){
    console.log(value);
})

// Promise resolves asynchronously: Even though the resolve("first promise code") is called before setTimeout, 
// JavaScript executes the code inside the setTimeout after the promise resolution is complete, meaning "first promise code" will be logged first.
// then() executes when the promise is resolved: The then() function is used to capture the resolved value and run some code with it, which logs "first promise code".