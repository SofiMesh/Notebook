const Note = require("../models/note");

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

const BUCKET_NAME = process.env.sofi-aws-bucket;

modeule.export = {
    create, 
    index,
    delete
}