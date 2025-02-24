// Simulate an asynchronous operation using Promise
const fetchData = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(`Fetched data: ${data}`);
        } else {
          reject('No data provided');
        }
      }, 2000); // Simulate a 2-second delay
    });
  };
  
  // Using async/await to fetch data
  const getData = async () => {
    try {
      // Using await to pause execution until fetchData() resolves
      const result = await fetchData('My sample data');
      console.log(result);  // 'Fetched data: My sample data'
    } catch (error) {
      console.log(error);  // If there is an error (e.g., 'No data provided'), it'll be caught here
    }
  };
  
  // Call the async function
  getData();
  