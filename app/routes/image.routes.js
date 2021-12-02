module.exports = (app) => {
    const multer = require("multer");
    const path = require("path");
    const { v4: uuidv4 } = require('uuid');
    
    // Use Multer
    var storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './upload/images')
        },
        filename: (res, file, callBack) => {
            callBack(null, file.fieldname + '-' + file.originalname)
        }
    });
    
    var upload = multer({
        storage: storage
    });
    

    app.post("/upload", upload.single('gambar'), (req,res) => {
        if(!req.file){
            console.log("No file upload");
        } else {
            console.log(req.file.filename)
            res.status(200).send({
                message: "success",
                info : req.file.filename
            })
        }
    })
}