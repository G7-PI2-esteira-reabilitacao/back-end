const mongoose = require('mongoose');

// Fisio Schema
const fisioSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    min: 36,
  },
  name: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  phone: {
    type: { type: String, required: true },
    number: { type: String, required: true },
    confirmed: { type: Boolean, required: true, default: false },
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    max: 2,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('fisioModel', fisioSchema);