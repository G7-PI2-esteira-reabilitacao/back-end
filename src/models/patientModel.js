const mongoose = require('mongoose');

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nome obrigatório"]
  },
  birthDate: {
    type: Date,
    require: [true, "Data de nascimento obrigatoria"]
  },
  healthCard: {
    type: Number,
    require: [true, "Cartão de saude obrigatorio"],
  },
  rg: {
    type: String,
    require: [true, "Rg obrigatório"]
  },
  cpf: {
    type: Number,
    require: [true, "Cpf obrigatorio"],
  },
  telephone: {
    type: Number,
    require: [true, "Telefone obrigatorio"],
  },
  genre: {
    type: String,
    require: [true, "Genero obrigatorio"],
  },
  motherName: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  medicalRecord: {
    type: String,
    require: [true, "Prontuário obrigatorio"],
  },
  height: {
    type: String,
    require: [true, "Altura obrigatoria"],
  },
  weight: {
    type: String,
    require: [true, "Peso obrigatorio"],
  },
  difficultyLevel: {
    type: String,
    require: [true, "Grau de dificuldade obrigatorio"],
  },
  limitations: {
    type: String,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('patientModel', patientSchema);