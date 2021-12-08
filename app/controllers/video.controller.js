const Video = require('../models/video.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const video = new Video({
        uri: req.body.uri,
        judul: req.body.judul,
    });

    // Save Note in the database
    video.save()
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
    Video.find()
        .then(videos => {
            res.send(videos);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Video.findByIdAndUpdate(req.params.videoId,
        req.body
        , { new: true })
        .then(video => {
            if (!video) {
                return res.status(404).send({
                    message: "video not found with id " + req.params.videoId
                });
            }
            res.send(video);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Artikel not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Error updating artikel with id " + req.params.videoId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Video.findByIdAndRemove(req.params.videoId)
        .then(video => {
            if (!video) {
                return res.status(404).send({
                    message: "video not found with id " + req.params.videoId
                });
            }
            res.send({ message: "video deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Could not delete video with id " + req.params.videoId
            });
        });
};
