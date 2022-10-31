const { odd, even } = require("./var");

function checkOddOrEven(num) {
    let result = even
    if (num % 2) {
        result = odd
    }
    return result;
}

//사용할 변수들을 불러오면 된다.
// console.log(odd);
// console.log(even);


module.exports = checkOddOrEven;

