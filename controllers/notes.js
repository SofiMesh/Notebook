const Note = require("../models/note");

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME

module.exports = {
    create, 
    index,
    delete: deleteNote
};

async function deleteNote(req, res, next) {
    try {
        const noteDoc = await NoteModel.findOne({'notes._id': req.params.id, 'notes.user': req.user._id});
        noteDoc. notes.remove(req.params.id)
        await noteDoc.save();

    }catch(err) {
        res.status(400).json({ error: err });

    }
}

function create(req, res) {
    if (!req.file) return res.status(400).json({ error: "Add Photo"});
    const filePath = `sofi-aws-bucket/notes/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };

    s3.upload(params, async function (err, data) {
        if (err) {
          console.log("===========================================");
          console.log(
            err,
            " err from aws, either your bucket name is wrong or your keys arent correct"
          );
          console.log("===========================================");
          res.status(400).json({ error: "Error from aws, check your terminal!" });
        }
        try {
            const note = await Note.create({
            text: req.body.text,
            title: req.body.title,
            user: req.user,
            photoUrl: data.Location,
            });
            await note.populate("user");
            res.status(201).json({ data: note });
        } catch (err) {
            res.status(400).json({ error: err });
        }
});
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
