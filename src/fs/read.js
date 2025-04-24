import { readFile } from 'fs/promises'
import { join } from 'path'

const read = async () => {
    try {
        console.log(await readFile(join(import.meta.dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8' }))
    } catch {
        throw new Error('FS operation failed')
    }
};

await read();