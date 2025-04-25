import { createWriteStream } from 'fs'
import { join } from 'path'

const write = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToWrite.txt')
    const writeableStream = createWriteStream(filePath, { flags: 'a' })
    process.stdin.pipe(writeableStream)
};

await write();