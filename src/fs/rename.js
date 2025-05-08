import { access, rename as renameFile } from 'fs/promises'
import { join } from 'path'

const oldPath = join(import.meta.dirname, 'files', 'wrongFileName.txt')
const newPath = join(import.meta.dirname, 'files', 'properFilename.md')

const rename = async () => {
    try {
        await access(oldPath)

        try {
            await access(newPath);
            throw new Error();
        } catch (err) {
            if (err.code !== 'ENOENT') throw err
        }

        await renameFile(oldPath, newPath)
    } catch {
        throw new Error('FS operation failed')
    }
};

await rename();