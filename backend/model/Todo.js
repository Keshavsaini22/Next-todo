const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo: { type: String, require: true },
}, { timestamps: true })

module.exports = mongoose.model("todo", TodoSchema)