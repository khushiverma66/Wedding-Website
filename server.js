
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://khushi1742be21:admin@cluster0.twuqvfl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
  console.error(err);
});

// Define routes
const routes = require('./routes/formroutes.js');
app.use('/', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
// mongoose.connect('mongodb+srv://khushi1742be21:admn@cluster0.s1pxxgu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define mongoose schema and model for the form data
// const formDataSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   num: Number,
//   eventType: String,
//   date: Number,
//   venue: String,
//   referral: String,
//   message: String,
// });

// const FormData = mongoose.model('FormData', formDataSchema);

// app.use(bodyParser.json());

// // Define the endpoint for form submission
// app.post('/submit', async (req, res) => {
//   try {
//     const formData = new FormData(req.body);
//     await formData.save();
//     res.status(201).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

