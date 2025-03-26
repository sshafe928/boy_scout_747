const express = require('express');
const app = express();
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const cors = require('cors'); 

app.use(cors());

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Verify Cloudinary configuration
console.log('Cloudinary Config:', {
  cloud_name: cloudinary.config().cloud_name,
  api_key: cloudinary.config().api_key,
  api_secret: cloudinary.config().api_secret ? '[hidden]' : undefined
});

// Test Cloudinary connection
cloudinary.api.ping((error, result) => {
  if (error) {
    console.error('Cloudinary connection failed:', error);
  } else {
    console.log('Cloudinary connected successfully:', result);
  }
});

// Connected :)
const connectDB = require('./db/connect'); 
connectDB(process.env.MONGOURI);

app.use(express.json());

app.use('/api/photos', require('./routes/photoRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/eagles', require('./routes/eagleRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Sets up localhost and defines port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});