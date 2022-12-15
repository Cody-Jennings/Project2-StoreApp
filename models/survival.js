const mongoose = require('mongoose')

 const survivalSchema = new mongoose.Schema({
    name: { type: String, required: true},
    inventory: {type: Number, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
 })

 const Survival = mongoose.model('Survival', survivalSchema)

 module.exports = Survival
 