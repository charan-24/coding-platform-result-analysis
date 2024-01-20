const exp = require('express');
const router = exp.Router();
const fetchController = require('../controllers/fetchController');

router.post('/fetchScores',fetchController.fetchScore);
router.post('/updateScoreInd',fetchController.fetchScoreIndividual);
router.get('/getScores',fetchController.getScores);

module.exports = router;