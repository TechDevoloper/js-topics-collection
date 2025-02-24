const url='https://www.omdbapi.com/?t=batman&y=2018&apikey=a8d8bde6'

function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("server sent request and fetch the data : ");
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        resolve(data);
      }).catch(error=>reject("something went wrong"+error));
      },2000)
    })
}
 

function processData(data){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("process the Title of Movie :");
        resolve(data);
       }, 2000);
    })
};

function processYear(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Process the Year of Movie :");
           resolve(data.Year);
        }, 2000);
      })
    };

//promise chaning

fetchData().then(response=>{
    return processData(response)
}).then(data=>{
    console.log(`Title: ${data.Title}`); 
    return processYear(data)
}).then(year=>{
    console.log(`Year: ${year}`); 
}).catch(error => {
    console.log("Error in promise chain:", error); // Catch any errors
  });
