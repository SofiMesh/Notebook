const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    creationDate: Date
})



module.export =  mongoose.model('Note', noteSchema)