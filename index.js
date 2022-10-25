const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.Port || 4200;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome from Coders Ground')
})

app.listen(port, () => {
    console.log(`Coders Ground listening on port ${port}`)
})