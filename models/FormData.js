const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  num: Number,
  eventType: String,
  date: Number,
  venue: String,
  referral: String,
  message: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
