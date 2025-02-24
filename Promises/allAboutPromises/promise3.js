function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error("its not a number"))
            }
            const result = number * number;
            resolve(result);
        }, 2000)
    });
    return promise;
    /*
To call .then() on a function, that function must return a Promise object.
 If the function doesn't return a promise (or returns something that isn’t a promise), 
 the .then() method won’t work as expected
    */
}
calculateSquare("2").then(value => { console.log("success: " + value) },
    reason => {
        console.log("error", reason);
    })



