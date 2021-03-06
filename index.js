const usersRoute = require('./routes/users')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGODB_URL, () => console.log('Connected to MongoDB'))

app.use(cors())
app.use(morgan('common'))
app.use(bodyParser.json({ limit:'50mb' }))

app.use('/users', usersRoute)

app.get('/', (req, res) => res.send('API with node.js'))

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`))