import { fork } from 'child_process'
import { join } from 'path'

const spawnChildProcess = async (args) => {
    const scriptPath = join(import.meta.dirname, 'files', 'script.js')
    fork(scriptPath, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
