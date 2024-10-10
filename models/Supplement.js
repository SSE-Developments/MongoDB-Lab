const mongoose = require('mongoose');

const supplementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    }
}, { timestamps: true });

const Supplement = mongoose.model('Supplement', supplementSchema, 'supplements');

module.exports = Supplement;