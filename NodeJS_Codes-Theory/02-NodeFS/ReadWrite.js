// Pre-defined modules in Node
// - fs
// - http
// - url
// - os
// - path

// File Handling in Node
// - read files
// - write files
// - update files
// - delete files
// - rename files

const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
    fs.readFile('data.txt', (err, data) => {
        // console.log(data);
        res.write(data);
        return res.end();
    });
});

server.listen(9999, () => {
    console.log("Server started at 9999");
});