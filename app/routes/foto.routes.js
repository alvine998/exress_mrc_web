module.exports = (app) => {
    const fotos = require('../controllers/foto.controller.js');

    // Create a new Note
    app.post('/fotos', fotos.create);

    // Retrieve all fotos
    app.get('/fotos', fotos.findAll);

    // Delete Chat
    app.delete('/fotos/:fotoId', fotos.delete)

    // Update Chat
    app.put('/fotos/:fotoId', fotos.update)
}