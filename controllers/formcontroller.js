// controllers/formController.js
const FormData = require('../models/FormData'); // Import the FormData model

exports.submitForm = async (req, res) => {
  try {
    const { name, email, num, insta, date, venue, source, message } = req.body;

    // Create a new FormData instance
    const formData = new FormData({
      name,
      email,
      num,
      eventType: insta, // Assuming insta is the event type
      date,
      venue,
      referral: source, // Assuming source is how they heard about you
      message,
    });

    // Save the form data to the database
    await formData.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

  