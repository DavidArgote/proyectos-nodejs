const { any } = require("async");

// Promesas
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';


function obetenerPersonaje(id) {
    
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    });

}

// Asinc y await
async function obetenerPersonajes() {
    try {
        var personaje = await obetenerPersonaje(1);
    }catch(error) {
        console.log(error);
    }
}