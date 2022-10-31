// const promise = new Promise((res, rej) => {
//     res('성공');
// })

// const successPromise = Promise.resolve('성공').then();
// const failurePromise = Promise.reject("실패").catch();

// Promise.all([Users.findOne(), User.remove(), Users.update()])
//     .then((result) => { })
//     .catch((error) => { });


const hello = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("안녕 ");
            resolve("hello");
        }, 3000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await hello();
    console.log("결과 :", result);
    // expected output: "resolved"
}

asyncCall();





