const exp = require('express');
const router = exp.Router();
const fileUpload = require('express-fileupload');
const batchController = require('../controllers/batchController');

//get all Batches
router.get('/getBatches',batchController.getBatches);

//add a newBatch
router.post('/addBatch',fileUpload({createParentPath: true}),batchController.addANewBatch);

//delete a Batch
router.delete('/deleteBatch/:batchname',batchController.deleteABatch);

//add a newUser
router.post('/addUsers',batchController.addUsers);

//delete a User
router.delete('/deleteUser/:batchname/:rollno',batchController.deleteAUser);


module.exports = router;