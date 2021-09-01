const base = require('./base');
const patientModel = require('../models/patientModel');

// Decorator

class patientBase extends base {
  constructor() {
    super(patientModel);
  }

  async create(body) {
    try {

      const created = await super.create(body);

      return created;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }

  async listAll() {
    try {
      const patients = await super.listAll();

      return patients;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
}


module.exports = patientBase;