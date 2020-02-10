let mongoose = require('mongoose'),
   Author = mongoose.model('Author'),
   Quote = mongoose.model('Quote');

module.exports = {
    index: (request, response) => {
        Author.find().populate('_quotes').exec()
            .then(data => {
                response.json(data);
            })
            .catch(err => {
                response.json(err);
            })
    },

    create: (request, response) => {
        Author.create(request.body)
            .then(data => {
                response.json(data);
            })
            .catch(err => {
                response.json(err);
            })
    },

    findOneById: (request, response) => {
        Author.findOne({ _id: request.params.id }).populate('_quotes').exec()
            .then(data => {
                response.json(data);
            })
            .catch(err => {
                response.json(err);
            })
    },

    update: (request, response) => {
        Author.updateOne({ _id: request.params.id }, request.body, { runValidators: true })
            .then(data => {
                response.json(data);
            })
            .catch(err => {
                response.json(err);
            })
    },

    delete: (request, response) => {
        // find all the children and delete them first
        Quote.find({ _author: request.params.id })
            .then(allQuotesWithSingleAuthor => {
                console.log(`allQuotesWithSingleAuthor ${allQuotesWithSingleAuthor}`);
                if (!allQuotesWithSingleAuthor) {
                    Quote.remove(allQuotesWithSingleAuthor)
                        .then(data => {
                            // then we want to finally remove the parent
                        })
                        .catch(err => {
                            console.log("erred in the sencond step")
                            response.json(err);
                        })
                }
                Author.remove({ _id: request.params.id })
                    .then(deletedAuthor => {
                        response.json(deletedAuthor);
                    })
                    .catch(err => {
                        console.log("erred in the last step")
                        response.json(err);
                    })

            })
            .catch(err => {
                console.log("erred in the first step")
                response.json(err);
            })
    },
}