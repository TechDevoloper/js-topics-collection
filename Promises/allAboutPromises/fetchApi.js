fetch('https://www.omdbapi.com/?t=batman&y=2018&apikey=a8d8bde6').then(response=>response.json()).then(data=>console.log(data));

/* The fetch() API is used to make network requests 
(e.g., fetching data from an API, loading resources) and it returns a Promise that resolves to the Response object representing the response to the request.
The promise will be resolved when the request is completed, and you can handle the result using .then() or by using async/await syntax.
*/

