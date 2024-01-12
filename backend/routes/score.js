const exp = require('express');
const router = exp.Router();
const fetchController = require('../controllers/fetchController');

router.post('/getScores',fetchController.fetchScore);
router.post('/updateScoreInd',fetchController.fetchScoreIndividual);

module.exports = router;