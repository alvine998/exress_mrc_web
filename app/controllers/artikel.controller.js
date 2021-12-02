const Artikel = require('../models/artikel.model.js');
const bcrypt = require('bcryptjs');


// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const artikel = new Artikel({
        judul: req.body.judul,
        gambar: req.body.gambar,
        paragraph1: req.body.paragraph1,
        paragraph2: req.body.paragraph2,
        paragraph3: req.body.paragraph3,
        status: req.body.status,
        penulis: req.body.penulis,
    });

    // Save Note in the database
    artikel.save()
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
    Artikel.find()
        .then(artikels => {
            res.send(artikels);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find Status Published
exports.findAllPublished = (req, res) => {
    Artikel.find({status: 'published'})
        .then(artikels => {
            res.send(artikels);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find a single note with a noteId
exports.findOneJudul = (req, res) => {
    const juduls = req.params.juduls;
    Artikel.findOne({ "judul": juduls })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.juduls
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.juduls
                });
            }
            return res.status(500).send({
                message: "Error retrieving artikel with id " + req.params.juduls
            });
        });
};


// Find a single note with a noteId
exports.findOne = (req, res) => {
    Artikel.findById(req.params.artikelId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.artikelId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.artikelId
                });
            }
            return res.status(500).send({
                message: "Error retrieving artikel with id " + req.params.artikelId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Artikel.findByIdAndUpdate(req.params.artikelId,
        req.body
        , { new: true })
        .then(artikel => {
            if (!artikel) {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.artikelId
                });
            }
            res.send(artikel);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.artikelId
                });
            }
            return res.status(500).send({
                message: "Error updating artikel with id " + req.params.artikelId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Artikel.findByIdAndRemove(req.params.artikelId)
        .then(artikel => {
            if (!artikel) {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.artikelId
                });
            }
            res.send({ message: "Artikel deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.artikelId
                });
            }
            return res.status(500).send({
                message: "Could not delete artikel with id " + req.params.artikelId
            });
        });
};
