const { exec, spawn } = require('child_process');

exec('node console.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

let proceso = spawn('ls', ['-la']);

//console.log(proceso);
console.log(proceso.connected)

proceso.stdout.on('data', (dato) => {
    console.log(dato)
})

proceso.on('exit', () => {
    console.log('El proceso termino')
})

