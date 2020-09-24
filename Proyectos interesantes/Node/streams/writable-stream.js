const { Writable } = require('stream');

const writeableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(writeableStream);