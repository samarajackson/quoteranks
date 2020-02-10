let authors = require('../controllers/authors');
let quotes = require('../controllers/quotes');
let path = require('path');

module.exports = function(app){
    // routes for authors
    app.get('/api/authors', authors.index);
    app.post('/api/authors', authors.create);
    app.get('/api/authors/:id', authors.findOneById);
    app.put('/api/authors/:id',authors.update);
    app.delete('/authors/:id',authors.delete);

    // routes for quotes
    app.get('/api/authors/quotes', quotes.index); // this will find all the quotes.
    app.post('/api/authors/:authorId/quotes', quotes.create); // this will create the quotes for a specific author
    app.put('/api/authors/:authorId/quotes/:id', quotes.editQuote);

    //catchall to redirect to angular routes
    app.all("*", ( req, res, next ) => {
        res.sendFile(path.join(__dirname, "./../../client/dist/client/index.html"))
      });
}