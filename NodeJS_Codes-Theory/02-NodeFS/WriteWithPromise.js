// Write with promises



const {writeFile} = require("fs/promises");
async function writeFileData(filename) {
    try {
        const data = "This is node fs...";
        await writeFile(filename, data);
    } catch(err) {
        console.error("Error while writin :",err);
    }
}

writeFileData("data_1.txt");