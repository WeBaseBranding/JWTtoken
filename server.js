const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json()); // ✅ Important for JSON body

// 👇 Your routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






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
