const express = require('express');
const app = express();
require('dotenv').config();
const cloudinary = require('cloudinary').v2

const cors = require('cors'); 

app.use(cors());

//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const connectDB = require('./db/connect'); 
connectDB(process.env.MONGOURI);

app.use(express.json());

app.use('/api/photos', require('./routes/photoRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/eagles', require('./routes/eagleRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
