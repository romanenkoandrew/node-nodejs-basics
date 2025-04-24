import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { join } from 'path'

const calculateHash = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt')
    const hash = createHash('sha256')
    const stream = createReadStream(filePath)

    return new Promise((resolve, reject) => {
        stream.on('error', reject)
        hash.on('error', reject)

        let result = ''
        hash.setEncoding('hex')

        hash.on('data', chunk => {
            result += chunk
        })

        hash.on('end', () => {
            console.log(result)
            resolve()
        })

        stream.pipe(hash)
    })
}

await calculateHash();