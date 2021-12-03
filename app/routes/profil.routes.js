module.exports = (app) => {
    const profils = require('../controllers/profil.controller.js');

    // Create a new Note
    app.post('/profils', profils.create);

    // Retrieve all profils
    app.get('/profils', profils.findAll);

    // Retrieve a single Note with noteId
    app.get('/profils/:profilId', profils.findOne);

    // Delete Chat
    app.delete('/profils/:profilId', profils.delete)

    // Update Chat
    app.put('/profils/:profilId', profils.update)
}