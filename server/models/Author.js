let mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            require: [true, "You need to input a author's name"],
            minlength: [2, "Author's name needs to be at least 2 characters long"]
        },
        _quotes: [{
            type: mongoose.Types.ObjectId,
            ref: 'Quote'
        }]
    },
    {
        timestamps: true
    }
)

mongoose.model('Author',AuthorSchema);
