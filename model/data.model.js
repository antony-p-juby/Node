const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const dataSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: () => {
            const today = new Date();
            return today.toISOString().split('T')[0]; // "YYYY-MM-DD"
        },
        required: true
    }
});



const DataModel = db.model('scanned_data', dataSchema);

module.exports = DataModel;
