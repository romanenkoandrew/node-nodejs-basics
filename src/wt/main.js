import { Worker } from 'worker_threads'
import { join } from 'path'
import os from 'os'

const startNumber = 10

const performCalculations = async () => {
    const workerPath = join(import.meta.dirname, 'worker.js')
    const threadsNumber = os.cpus().length

    const result = new Array(threadsNumber)
    const arrPromises = []

    for (let i = 0; i < threadsNumber; i++) {
        const promise = new Promise((res, rej) => {
            const worker = new Worker(workerPath, { workerData: i + startNumber })
            worker.on('message', (data) => {
                result[i] = { status: 'resolved', data }
                res()
            })
    
            worker.on('error', (err) => {
                result[i] = { status: 'error', data: null }
                rej(err)
            })
        })

        arrPromises.push(promise)
    }

    await Promise.allSettled(arrPromises)

    console.log('result', result)
};

await performCalculations();