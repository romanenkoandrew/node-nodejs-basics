import { createReadStream, createWriteStream } from 'fs'
import { createGzip  } from 'zlib'
import { join } from 'path'
import { pipeline } from 'stream/promises'

const compress = async () => {
    const sourceFile = join(import.meta.dirname, 'files', 'fileToCompress.txt')
    const destinationFile = join(import.meta.dirname, 'files', 'archive.gz')
    const zip = createGzip()
    const readableStream = createReadStream(sourceFile)
    const writeableStream = createWriteStream(destinationFile)

    try {
        await pipeline(
            readableStream,
            zip,
            writeableStream
        )
    } catch (err) {
        console.error('An error occurred:', err)
        process.exitCode = 1
    }
};

await compress();