import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { join } from 'path'

const calculateHash = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt')
    const hash = createHash('sha256').setEncoding('hex')
    const readStream = createReadStream(filePath)
    
    readStream
        .pipe(hash)
        .pipe(process.stdout)

    readStream.on('end', () => {
        process.stdout.write('\n')
    })
}

await calculateHash();