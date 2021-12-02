module.exports = (app) => {
    const banners = require('../controllers/banner.controller.js');

    // Create a new Note
    app.post('/banners', banners.create);

    // Retrieve all banners
    app.get('/banners', banners.findAll);

    // Delete Chat
    app.delete('/banners/:bannerId', banners.delete)

    // Update Chat
    app.put('/banners/:bannerId', banners.update)
}