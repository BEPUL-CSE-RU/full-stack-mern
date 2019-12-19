const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const logger = require('morgan')

const apiPort = process.env.PORT | 9697;
const db = require('./db/dbindex.js');

const movieRouter = require('./routes/movie-router.js')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/api', movieRouter)

app.get('/', (req, res) => {
    res.send('succefull')
})

app.listen(apiPort, () => console.log(`Server running on port `+apiPort));