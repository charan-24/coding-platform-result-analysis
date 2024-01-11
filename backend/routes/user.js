const exp = require('express');
const router = exp.Router();
const userController = require('../controllers/userController');

router.post('/changeAhandle',userController.changeAhandle);

module.exports = router;