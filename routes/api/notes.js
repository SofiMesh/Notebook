const express = require('express');
const router = express.Router();
const notesCtrl = required('../../controllers/notes');

const multer = require('multer');
const upload = multer()


router.post('/', notesCtrl.create)
router.get('/', notesCtrl.index)



module.exports = router;