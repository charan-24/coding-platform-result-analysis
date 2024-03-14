const exp = require('express');
const router = exp.Router();
const userController = require('../controllers/userController');

router.get('/fetchUserDetails/:rollno',userController.fetchUserDetails);
router.post('/changeAhandle',userController.changeAhandle);

module.exports = router;