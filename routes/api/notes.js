const express = require('express');
const router = express.Router();
const notesCtrl = required('../../controllers/notes');

const multer = require('multer');
const upload = multer()


router.post('/', upload.single('photo'), postsCtrl.create);
router.get('/', notesCtrl.index)



module.exports = router;