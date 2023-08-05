const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    photoUrl: String,
})



module.exports =  mongoose.model('Note', noteSchema)