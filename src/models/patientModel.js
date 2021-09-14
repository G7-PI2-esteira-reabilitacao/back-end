const mongoose = require('mongoose');

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nome obrigatório"]
  },
  rg: {
    type: String,
    require: [true, "Rg obrigatório"]
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('patientModel', patientSchema);