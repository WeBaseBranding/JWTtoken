const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
