const express = require('express');
const { enhanceText, modifyText } = require('../controllers/textController');
const router = express.Router();

router.post('/enhance', enhanceText);
router.post('/modify', modifyText);

module.exports = router;
