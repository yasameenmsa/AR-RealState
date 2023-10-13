const multer = require("multer");
const uploadController = require("express").Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    },
});

const upload = multer({
    storage: storage,
});


uploadController.post("/image", upload.single("image"), async (req, res) => {
    try {
        // Check if the file was uploaded successfully
        if (req.file) {
            return res.status(200).json("File uploaded successfully");
        } else {
            return res.status(400).json("File upload failed");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server error");
    }
});


module.exports = uploadController
