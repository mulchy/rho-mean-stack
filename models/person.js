const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String
});

module.exports = Person;
