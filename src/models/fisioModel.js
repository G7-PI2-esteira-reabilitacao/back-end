const mongoose = require('mongoose');

// Fisio Schema
const fisioSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nome obrigatório"],
    max: 255,
  },
  password: {
    type: String,
    require: true,
    min: 8,
    max: 1024,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('fisioModel', fisioSchema);