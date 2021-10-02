const mongoose = require('mongoose');

// AfterSession Schema
const afterSessionSchema = new mongoose.Schema({
  session: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sessionModel',
  }],
  saturation: {
    type: Number,
  },
  heartRateMax: {
    type: Number,
  },
  heartRateMin: {
    type: Number,
  },
  sessionTime: {
    type: Number,
  },
  breaks: {
    type: Number,
  },
  pressure: {
    type: Number,
  },
  cadence: {
    type: Number,
  },
  score: {
    type: Number,
  },
  velocityStart: {
    type: Number,
  },
  velocityEnd: {
    type: Number,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('afterSessionModel', afterSessionSchema);