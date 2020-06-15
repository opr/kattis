const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin
});

reader.on('line', (line) => {
    const split = line.split(' ').map(x => parseInt(x, 10));
    const avg = split.length > 1 && split.slice(1).reduce((a,b) => (a + b))/split[0];
    avg !== false && console.log(((100/(split.length-1)) * split.slice(1).filter(x => x>avg).length).toFixed(3) + '%');
});