const mongoose = require('mongoose');

const Admin = mongoose.models.Admin || mongoose.model('Admin', new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  hashedPassword: {
    type: String,
    required: true,
  },
}, { collection: 'admins' })); 

module.exports = Admin;
