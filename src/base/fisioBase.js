const base = require('./base');
const fisioModel = require('../models/fisioModel');

// Decorator

class fisioBase extends base {
  constructor() {
    super(fisioModel);
  }
  
   async create(body) {
    try {
      const {
        name, email, password, birthDate, sex, phone, city, state,
      } = body;
    const fisio = { name, email, password, birthDate, sex, phone, city, state, };
      const created = await super.create(fisio);
      return created;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
  
   async listAll() {
    try {
      const allElements = await super.listAll();

      return allElements;
    } catch (error) {
      throw { status: 400, message: error.errors[0].message };
    }
  }
}


module.exports = fisioBase;