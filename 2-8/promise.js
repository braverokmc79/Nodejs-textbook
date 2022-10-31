
new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;
    if (a + b > 2) {
        resolve(a + b);
    } else {
        reject(a + b);
    }
})


Promise.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    })
})
    .then((message2) => {
        return new Promise((resolve, reject) => {
            resolve(message2);
        })
    }).then((message3) => {
        return new Promise((resolve, reject) => {
            resolve(message3);
        })
    })
    .catch((error) => {
        console.error(" error: ", error)
    })