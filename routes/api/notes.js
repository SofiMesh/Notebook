const express = require('express');
const router = express.Router();
const postCtrl = required('../../controllers/post');

const multer = require('multer');
const upload = multer()