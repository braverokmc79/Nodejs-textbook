const http = require('http');


http.createServer((req, res) => {
    console.log("서버 실행");
    res.write("<h1>Hello Node!</h1>");
    res.write('<h2>Hello JS!</h2>');

}).listen(8080, () => {
    console.log("8080 번 포트에서 서버 대기중입니다.");
})