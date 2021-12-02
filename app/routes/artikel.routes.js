module.exports = (app) => {
    const artikels = require('../controllers/artikel.controller.js');

    // Create a new Note
    app.post('/artikels', artikels.create);

    // Retrieve all artikels
    app.get('/artikels', artikels.findAll);

    // Retrieve all artikels
    app.get('/artikels/published', artikels.findAllPublished);

    // Retrieve a single Note with noteId
    app.get('/artikels/:artikelId', artikels.findOne);


    // Retrieve a single Note with noteId
    app.get('/artikels/judul/:juduls', artikels.findOneJudul);

    // Delete Chat
    app.delete('/artikels/:artikelId', artikels.delete)

    // Update Chat
    app.put('/artikels/:artikelId', artikels.update)
}