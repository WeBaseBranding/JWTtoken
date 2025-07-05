const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config(); // ✅ Load .env

app.use(express.json()); // ✅ Required for POST JSON

// 👉 Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch(err => console.log('Mongo Error ❌', err));

// 👉 Import & use routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// 👉 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



// const express = require('express');
// const connectDB = require('./config/db');
// const dotenv = require('dotenv');
// const app = express();

// dotenv.config();
// connectDB();

// app.use(express.json());

// app.use('/api/auth', require('./routes/auth'));

// app.get('/', (req, res) => {
//   res.send('🚀 API is running...');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
