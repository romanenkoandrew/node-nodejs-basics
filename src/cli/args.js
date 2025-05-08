const parseArgs = () => {
    const result = []
    const args = process.argv.slice(2)
    for(let i = 0; i < args.length; i++) {
        if (args[i].includes('--')) {
            result.push(`${args[i].replace('--', '')} is ${args[i+1]}`)
        }
    }
    console.log(result.join(', '));
};

parseArgs();