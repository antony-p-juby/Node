const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const dataSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
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

dataSchema.pre('save', async function (next) {
    if (this.isNew) {
        const lastDoc = await this.constructor.findOne().sort({ id: -1 });
        this.id = lastDoc ? lastDoc.id + 1 : 1; // if no doc, start from 1
    }
    next();
});

const DataModel = db.model('scanned_data', dataSchema);
module.exports = DataModel;
