import { createReadStream } from 'fs'
import { join } from 'path'

const read = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt') 
    const readableStream = createReadStream(filePath)
    readableStream.pipe(process.stdout)

    readableStream.on('end', () => {
        process.stdout.write('\n')
    });
};

await read();