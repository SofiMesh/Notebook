const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes');




router.post('/', notesCtrl.create);
router.delete('/:id', notesCtrl.delete)
router.get('/', notesCtrl.index)



module.exports = router;