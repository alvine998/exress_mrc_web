const Profil = require('../models/profil.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const profil = new Profil({
        namapt: req.body.namapt,
        alamatpt: req.body.alamatpt,
        logopt: req.body.logopt,
        deskripsipt: req.body.deskripsipt,
        tentangust: req.body.tentangust,
        fotoust: req.body.fotoust,
    });

    // Save Note in the database
    profil.save()
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
    Profil.find()
        .then(profils => {
            res.send(profils);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};


// Find a single note with a noteId
exports.findOne = (req, res) => {
    Profil.findById(req.params.profilId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Profil not found with id " + req.params.profilId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Profil not found with id " + req.params.profilId
                });
            }
            return res.status(500).send({
                message: "Error retrieving profil with id " + req.params.profilId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Profil.findByIdAndUpdate(req.params.profilId,
        req.body
        , { new: true })
        .then(profil => {
            if (!profil) {
                return res.status(404).send({
                    message: "Profil not found with id " + req.params.profilId
                });
            }
            res.send(profil);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "profil not found with id " + req.params.profilId
                });
            }
            return res.status(500).send({
                message: "Error updating profil with id " + req.params.profilId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Profil.findByIdAndRemove(req.params.profilId)
        .then(profil => {
            if (!profil) {
                return res.status(404).send({
                    message: "profil not found with id " + req.params.profilId
                });
            }
            res.send({ message: "profil deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "profil not found with id " + req.params.profilId
                });
            }
            return res.status(500).send({
                message: "Could not delete profil with id " + req.params.profilId
            });
        });
};
