const parseEnv = () => {
    const result = []
    
    for (let [key, value] of Object.entries(process.env)) {
        if (key.includes('RSS_')) {
            result.push(`${key}=${value}`)
        }
    }
    console.log(result.join('; '))
};

parseEnv();