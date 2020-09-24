const http = require('http');
const { read } = require('fs');


http.createServer((req, res) => {
    console.log('Nueva peticion')
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            res.write('Hola, que tal')
            res.end()
            break;
        default:
            res.write('Error 404')
            res.end()
    }

    //res.writeHead(201, {'Content-Type': 'text/pain'})
    //res.write('Hola!')
    //res.end();
    
}).listen(3000);

console.log('Escuchando http: 3000');