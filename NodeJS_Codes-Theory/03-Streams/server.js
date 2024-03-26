const fs = require("fs");
const http = require("http").createServer();

// http.on("request", (req, res) => {
//     fs.readFile("someText.txt", (err, data) => {
//         if(err) {
//             throw err;
//         }
//         res.end(data);
//     });
// });

http.on("request", (req, res) => {
    const source = fs.createReadStream("someText.txt");
    source.pipe(res);
});

http.listen(9900);