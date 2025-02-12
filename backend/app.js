const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors'); 

app.use(cors());

const connectDB = require('./db/connect'); 
connectDB(process.env.MONGOURI);

app.use(express.json());

app.use('/api/photos', require('./routes/photoRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
