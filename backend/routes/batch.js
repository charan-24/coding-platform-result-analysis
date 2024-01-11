const exp = require('express');
const router = exp.Router();
const batchController = require('../controllers/batchController');

//add a newBatch
router.post('/addBatch',batchController.addANewBatch);

//delete a Batch
router.delete('/deleteBatch',batchController.deleteABatch);

//add a newUser
router.post('/addUsers',batchController.addUsers);

//delete a User
router.delete('/deleteUser',batchController.deleteAUser);


module.exports = router;