import { rm } from 'fs/promises'
import { join } from 'path'

const remove = async () => {
    try {
        await rm(join(import.meta.dirname, 'files', 'fileToRemove.txt'))
    } catch {
        throw new Error('FS operation failed')
    }
};

await remove();