const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const Todo = require('./model/Todo')
const cors = require('cors')

const url = "mongodb+srv://keshavsainikesu:Imhater@cluster0.rjyyizy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}

app.use(express.text())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/todo', async (req, res) => {
    const { todo } = req.body
    try {
        const output = await Todo.create({ todo })
        console.log('output: ', output);
        res.status(200).json({ Data: output })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

app.get('/todo', async (req, res) => {
    try {
        const output = await Todo.find({})
        console.log('output: ', output);
        res.status(200).json(output)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

app.put('/todo/:id', async (req, res) => {
    const { id } = req.params
    const { todo } = req.body
    try {
        const output = await Todo.findByIdAndUpdate(id, { todo }, { new: true })
        res.status(200).json({ Data: output })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

app.delete('/todo/:id', async (req, res) => {
    const { id } = req.params
    try {
        const output = await Todo.findByIdAndDelete(id, { new: true })
        res.status(200).json({ Data: output })
    }
    catch (err) {
        res.status(500).json(err)
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})