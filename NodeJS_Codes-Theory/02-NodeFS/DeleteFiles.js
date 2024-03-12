// Deleting files in Node



const {unlink} = require('fs/promises');

async function deleteFile(filename) {
    try {
        await unlink(filename);
        console.log(`Deleted ${filename}`);
    } catch(error) {
        console.log(error);
    }
}

deleteFile("data.txt");