const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors'); 

app.use(cors());

//connects file to the database
const connectDB = require('./db/connect'); 
connectDB(process.env.MONGOURI);

app.use(express.json());

app.use('/api/photos', require('./routes/photoRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/eagles', require('./routes/eagleRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

//sets up localhost and defines port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
