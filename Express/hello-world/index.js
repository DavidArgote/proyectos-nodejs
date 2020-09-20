const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const server = app.listen(8080, function(){
    console.log(`Server listening http://localhost:${server.address().port}`);
});