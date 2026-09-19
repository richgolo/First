const {register} = require('../Controllers/authcontroller');
const express = require('express');
const router = express.Router();

router.post("/signup", register);

module.exports = router;