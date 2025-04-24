import { readdir } from 'fs/promises'
import { join } from 'path'

const list = async () => {
    try {
        console.log(await readdir(join(import.meta.dirname, 'files')))
    } catch {
        throw new Error('FS operation failed')
    }
};

await list();