// Decorator

class base {
    constructor(model) {
        model = model;
      }

    async create(data) {
        const modelObj = new this.model({data});
        return await modelObj.save();
    }

}

module.exports = base;

