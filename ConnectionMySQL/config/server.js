const express = require('express')
const consign = require('consign')
const appEngine = require('express-react-views')
const app = express()
const path = require('path')
const { application } = require('express')

app.engine('jsx', appEngine.createEngine());
app.set('view engine', 'jsx');
app.set('views', 'app/src');

app.get('/registro', (req, res) => {
    const connection = app.config.dbConnection()

    connection.query('select * from cadastro_os, cadastro_clientes, usuarios, despesa_astec;', (error, result) => {
        if(error) {
            console.error(error)
        }
        console.log(result)
    })

    res.render('app')
})

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app)

module.exports = app

// app.listen(3000, () => {
//     console.log('Server On!')
// })