const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.Port || 4200;

app.use(cors())

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('API Coders Ground Running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);

})

app.listen(port, () => {
    console.log(`Coders Ground listening on port ${port}`)
})