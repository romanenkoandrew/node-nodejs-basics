import { createReadStream, createWriteStream } from 'fs'
import { createGunzip } from 'zlib'
import { join } from 'path'
import { pipeline } from 'stream/promises'

const decompress = async () => {
    const sourceFile = join(import.meta.dirname, 'files', 'archive.gz')
    const destinationFile = join(import.meta.dirname, 'files', 'fileToCompress.txt')
    const unzip  = createGunzip()
    const readableStream = createReadStream(sourceFile)
    const writeableStream = createWriteStream(destinationFile)

    try {
        await pipeline(
            readableStream,
            unzip ,
            writeableStream
        )
    } catch (err) {
        console.error('An error occurred:', err)
        process.exitCode = 1
    }
};

await decompress();