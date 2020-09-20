const cons = require('consolidate')
const  express = require('express')
const engines = require('consolidate')
const app = express()

app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {hello: 'Hello', world: 'world'})
})

const server = app.listen(8000, function () {
    console.log(`Listening http://localhost:${server.address().port}`)
})