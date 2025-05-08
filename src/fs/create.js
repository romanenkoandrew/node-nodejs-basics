import { writeFile } from 'fs/promises'
import { join } from 'path'

const create = async () => {
    try {
        const filePath = join(import.meta.dirname, 'files', 'fresh.txt')
        const text = 'I am fresh and young'
        await writeFile(filePath, text, { flag: 'ax+' })
    } catch {
        throw new Error('FS operation failed')
    }
};

await create();