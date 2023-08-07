const Note = require("../models/note");




module.exports = {
    create, 
    index,
    delete: deleteNote
};

async function deleteNote(req, res) {
    try {
        const noteDoc = await Note.findByIdAndDelete(req.params.id);
       res.json({data: "deleted"})

    }catch(err) {
        console.log(err)
        res.status(400).json({ error: err });

    }
}


async function create(req, res) {
   console.log(req.body)
        try {
            const note = await Note.create({
            text: req.body.text,
            title: req.body.title,
            user: req.user,
            });
            await note.populate("user");
            res.status(201).json({ data: note });
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }



async function index(req, res) {
    try {
console.log("--")
        const note = await Note.find({}).populate("user").exec();
        console.log(note)
        res.status(200).json({ note });
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err });

    }
}
