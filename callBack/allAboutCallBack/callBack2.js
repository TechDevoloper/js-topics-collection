const notifyCustomer= ()=>{
    console.log("calling customer")
}


const order=(item,callback)=>{
    console.log(`preparing your ${item}`);
    setTimeout(() => {
        console.log(`your ${item} is prepared`)
        callback();
    }, 2000);
}
order("burger",notifyCustomer);