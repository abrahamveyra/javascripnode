const { Writable } = require("stream"); //importar las librerias

const writableStream = new Writable({
    write(chunk, encoding, callback){
        console.log(chunk);
        callback();
    },
});

process.stdin.pipe(writableStream);