const express = require('express');
const router = express.Router();
const urlMethod = require('../controller/postController');

router.post('/', urlMethod.seturl);
router.get('/:id', urlMethod.setid);

module.exports = router;