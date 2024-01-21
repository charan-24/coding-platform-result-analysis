const exp = require('express');
const router = exp.Router();
const fetchController = require('../controllers/fetchController');

router.post('/fetchScores',fetchController.fetchScore);
router.post('/fetchNewUserScore',fetchController.fetchNewUserScore);
router.post('/updateScoreInd',fetchController.fetchScoreIndividual);
router.get('/getScores/:batchname',fetchController.getScores);
router.get('/getIndScore/:rollno',fetchController.getIndScore);

module.exports = router;