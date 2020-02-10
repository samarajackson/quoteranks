let mongoose = require('mongoose'),
    Author = mongoose.model('Author'),
    Quote = mongoose.model('Quote');

module.exports = {

    index: (req,res) =>{
        Quote.find().populate('_author').exec()
            .then(allR=>{
                res.json(allR);
            })
            .catch(err=>{
                res.json(err);
            })
    },

    create: function (req, res) {
        // create the newest object
        let newestQuote = new Quote(req.body);

        // add an attribute _author, the parent to the newest object
        newestQuote._author = req.params.authorId;

        // below is an acyncrous call to the database
        // thus we need to have a try/catch
        newestQuote.save()
            .then(saveQuote => {
                console.log("saving the " + saveQuote);

                // if the quote is saveable
                // find it's parent and join them
                Author.findOne({ _id: req.params.authorId })
                    .then(theAuthor => {
                        console.log(`****author found and saviing ${saveQuote}  to the author ${theAuthor}`);
                        theAuthor._quotes.push(saveQuote);
                        console.log(theAuthor._quotes)

                        // now save that author
                        theAuthor.save() // this is a trip to the database
                            .then(savedAuthor => {
                                console.log("******saved the author succesfully")
                                // output the orginal quote that we just created 
                                // after all the million joins
                                res.json(newestQuote);
                            })
                            .catch(err => {
                                console.log("errored on the last try");
                                res.json(err);
                            })
                    })
                    .catch(err => {
                        console.log("errored on the second try");
                        res.json(err);
                    })
            })
            .catch(err =>{
                console.log("errored on the first try");
                res.json(err);
            })
    },
    findAllQuotes: (req,res)=>{

    },
    editQuote: (req,res) =>{ Quote.updateOne({ _id: req.params.id }, req.body)
        .then(data => {
            console.log("ok we made it?")
            res.json(data);
        })
        .catch(err => {
            console.log("errors: " + err);
            res.json(err);
        })
    },

    findQuote: (req,res) => { Quote.findOne({_id:req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err=>{
            res.json(err);
        })

    }
}