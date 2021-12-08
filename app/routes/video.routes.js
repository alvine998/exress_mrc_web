module.exports = (app) => {
    const videos = require('../controllers/video.controller.js');

    // Create a new Note
    app.post('/videos', videos.create);

    // Retrieve all videos
    app.get('/videos', videos.findAll);

    // Delete Chat
    app.delete('/videos/:videoId', videos.delete)

    // Update Chat
    app.put('/videos/:videoId', videos.update)
}