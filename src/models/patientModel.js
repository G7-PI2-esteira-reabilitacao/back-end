const mongoose = require('mongoose');

// Patient Schema
const patientSchema = new mongoose.Schema({
  measures: {
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    chest: { type: Number }, // torax
    waist: { type: Number }, // cintura
    abdomen: { type: Number },
    hip: { type: Number }, // quadril
    forearm: { type: Number },
    arm: { type: Number },
    thigh: { type: Number }, // coxa
    calf: { type: Number }, // panturrilha
  },
  bodyStats: {
    imc: { type: Number, required: true },
    iac: { type: Number, required: true },
    vo2max: { type: Number },
    fatPercentage: { type: Number },
  },
  ipaq: {
    walkTimePerDay1b: { type: Number, required: true },
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('patientModel', patientSchema);