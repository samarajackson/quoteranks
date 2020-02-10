let mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
    {
        value:{
            type: Number,
            default: 0
        },
        content:{
            type: String,
            required: [true, "Quote must be provided."]
        },
        _author: {
            type: mongoose.Types.ObjectId,
            ref: 'Author'
        }
    },{
        timestamp: true
    }
)

mongoose.model('Quote', QuoteSchema);