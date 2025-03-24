const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');


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

const getAdmins = async (req, res) => {
  try {
      const admins = await Admin.find({});
      res.status(200).json({ success: true, data: admins });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
      const { id } = req.params;
      const admin = await Admin.findByIdAndDelete(id);
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' });
      }
      res.json({ success: true, message: 'Admin deleted successfully' });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = { loginAdmin, getAdmins , deleteAdmin};
