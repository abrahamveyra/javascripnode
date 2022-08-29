const { Readable } = require("stream");

const readableStream = new Readable();

readableStream.push('Eso es '.repeat(5).concat(" es todo amigos!"));

readableStream.push(null);

readableStream.pipe(process.stdout);