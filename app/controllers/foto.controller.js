const Foto = require('../models/foto.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const foto = new Foto({
        gambar: req.body.gambar,
        judul: req.body.judul,
    });

    // Save Note in the database
    foto.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Foto.find()
        .then(fotos => {
            res.send(fotos);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Foto.findByIdAndUpdate(req.params.fotoId,
        req.body
        , { new: true })
        .then(foto => {
            if (!foto) {
                return res.status(404).send({
                    message: "foto not found with id " + req.params.fotoId
                });
            }
            res.send(foto);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.fotoId
                });
            }
            return res.status(500).send({
                message: "Error updating artikel with id " + req.params.fotoId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Foto.findByIdAndRemove(req.params.fotoId)
        .then(foto => {
            if (!foto) {
                return res.status(404).send({
                    message: "foto not found with id " + req.params.fotoId
                });
            }
            res.send({ message: "foto deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "foto not found with id " + req.params.fotoId
                });
            }
            return res.status(500).send({
                message: "Could not delete foto with id " + req.params.fotoId
            });
        });
};
