const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const contactRoutes = require('./routes/contactRoutes');
const eventRoutes = require('./routes/eventRoutes');
const aiRoutes = require('./routes/aiRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/ai', aiRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.warn('MongoDB not available, running in demo mode');
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
