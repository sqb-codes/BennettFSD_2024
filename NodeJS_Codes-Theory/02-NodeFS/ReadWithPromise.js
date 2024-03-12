// Read with promises



const {readFile} = require("fs/promises");
async function readFileData(filename) {
    try {
        const data = await readFile(filename);
        console.log(data.toString());
    } catch(err) {
        console.error("Error while reading :",err);
    }
}

readFileData("data.txt");