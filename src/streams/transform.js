import { Transform } from 'stream'
import { pipeline } from 'stream/promises'

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStringified = chunk.toString().trim()
            const reversedChunk = chunkStringified.split('').reverse().join('')
            this.push(reversedChunk + '\n')
            callback()
        }
    })

    try {
        await pipeline(
            process.stdin,
            transform,
            process.stdout
        )
    } catch (err) {
        console.error('An error occurred:', err)
        process.exitCode = 1
    }
};

await transform();