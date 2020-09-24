const fs = require('fs');

function leer(ruta) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, contenido) {
    fs.writeFile(ruta, contenido, function(err){
        if (err) {
            console.log('No se pudo escribir el archivo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo');
leer(__dirname + '/archivo1.txt');
//borrar(__dirname + '/archivo1.txt', console.log);