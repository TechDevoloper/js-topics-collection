const url = 'http://www.omdbapi.com/?t=harry+potter&y=2004&apikey=a8d8bde6';

/* Comment below code when you want to check the Async And Await Code */

fetch(url).then(response => {
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    return response.json();
}).then(data => {
    console.log(data);
    console.log(`Title: ${data.Title}`);
    console.log(`Year: ${data.Year}`);
    console.log(`Genre: ${data.Genre}`);
}).catch(error => {
    console.log(error)
});

//Using Async  & Await 


async function products() {
    try {
        const rawData = await fetch(url);
        {
            if (!rawData.ok) {
                throw new Error("Something went wrong with the fetch operation.");
            }
        }
        const productsData = await rawData.json();
        console.log(`TITLE  ,${productsData.Title}`);
        console.log(`Year: ${productsData.Year}`);
        console.log(`Genre,${productsData.Genre}`)
    } catch (error) {
        // This block catches any errors that happen during the async operations
        console.log("Error:", error);
    }
}

products();

