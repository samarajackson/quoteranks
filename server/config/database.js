let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quotes',{ useNewUrlParser: true });

require('../models/Author');
require('../models/Quote');

