// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formcontroller');

router.post('/submit', formController.submitForm);

module.exports = router;
