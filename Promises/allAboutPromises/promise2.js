// Example of a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; // Simulate success or failure
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Error fetching data');
            }
        }, 1000);
    });
}

fetchData()
    .then((message) => {
        console.log(message); // Output: Data fetched successfully
    })
    .catch((error) => {
        console.error(error); // Output: Error fetching data
    });