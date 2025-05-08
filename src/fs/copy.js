import { mkdir, cp } from 'fs/promises'
import { join } from 'path'

const sourceDir = join(import.meta.dirname, 'files')
const targetDir = join(import.meta.dirname, 'files_copy')

const copy = async () => {
    try {
        await mkdir(targetDir)
        await cp(sourceDir, targetDir, { recursive: true })
    } catch {
        throw new Error('FS operation failed')
    }
};

await copy();