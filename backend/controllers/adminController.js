const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.hashedPassword);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    return res.json({ success: true, message: 'Logged in successfully' });
  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { loginAdmin };
