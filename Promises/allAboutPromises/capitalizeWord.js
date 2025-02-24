function capitalizeWord(text) {
    const promise = new Promise(function (resolve, reject) {

        if (typeof text !== 'string') {
            return reject(new Error("not a string"));
        }
        setTimeout(() => {
            const result = text[0].toUpperCase() + text.slice(1);
            resolve(result);
        }, 2000);
    });

    return promise;
}

capitalizeWord('techedv').then(value => {
    console.log("success", value)
},
    reason => {
        console.log("reason", + reason)
    });

