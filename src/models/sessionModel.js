const mongoose = require('mongoose');

// Session Schema
const sessionSchema = new mongoose.Schema({
  patient: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patientModel',
  }],
  sistolica: {
    type: Number,
    require: [true, "Sistolica obrigatória"],
  },
  diastolica: {
    type: Number,
    require: [true, "Diastolica obrigatória"],
  },
  comments: {
    type: String,
  },
  hip: {
    type: Number,
  },
  knee: {
    type: Number,
  },
  ankle: {
    type: Number,
  },
},
  {
    timestamps: true,
  });

module.exports = mongoose.model('sessionModel', sessionSchema);