const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes');

const multer = require('multer');
const upload = multer()


router.post('/', upload.single('photo'), notesCtrl.create);
router.delete('/notes/:id/', notesCtrl.delete)
router.get('/', notesCtrl.index)



module.exports = router;