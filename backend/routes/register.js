const exp = require('express');
const router = exp.Router();
const registerController = require('../controllers/registerController');
router.route('/')
    .get()
    .post(registerController.handleRegister)
    .put()
    .delete()

module.exports = router;