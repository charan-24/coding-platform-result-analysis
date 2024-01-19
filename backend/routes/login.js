const exp = require('express');
const router = exp.Router();
const loginController = require('../controllers/loginController');

router.post('/',loginController.handleLogin)

module.exports = router;