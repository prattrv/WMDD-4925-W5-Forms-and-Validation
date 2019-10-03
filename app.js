const express = require('express')
const app = express()
const {validationResult} = require('express-validator')
const {validators} = require(__dirname + '/validators.js')
const {connectionPool} = require(__dirname + '/database/connection.js')

app.use(express.static('public'))
// This middleware is used for parsing the body of the request
app.use(express.urlencoded({extended: true}))

const data = [
    {
        name: "Rover",
        type: "chihuahua"
    },
    {
        name: "Scuffled",
        type: "dachshund"
    }
]

app.post('/dogs', validators, (req, res) => {
    // Get validation errors, if there are any. Convert to array
    const valErrors = validationResult(req).array()
    if(valErrors.length ==! 0) {
        res.send(valErrors)
    } else {
        // data.push(req.body)
        //res.send(req.body)
        connectionPool.query(
            `INSERT INTO dogs (name, type) VALUES ('${req.body.name}', '${req.body.type}');`,
            (error, results) => {
                res.send('Success!')
            }
        )
    }
    
})

app.get('/dogs', (req, res) => {
    res.send(data.filter(dog => dog.type==req.query.type))
})

const server = app.listen('8080', () => {
    console.log('listening')
})