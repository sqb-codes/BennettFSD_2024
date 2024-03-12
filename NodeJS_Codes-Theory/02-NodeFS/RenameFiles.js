// Renaming files in Node



const {rename} = require('fs/promises');

async function renameFile(filename, updatedFileName) {
    try {
        await rename(filename, updatedFileName);
        console.log(`Renamed from ${filename} to ${updatedFileName}`);
    } catch(error) {
        console.log(error);
    }
}

renameFile("data.txt", "dataUpdated.txt");