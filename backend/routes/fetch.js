const exp = require('express');
const router = exp.Router();
const asyncHandler = require('express-async-handler');
const fetch = require('../controllers/fetchController');
router.post('/',fetch.fetchScore);

module.exports = router;