// require all middle wear
let express = require('express'),
    bodyparser = require('body-parser'),
    path = require('path');

// create an instance of express 
const app = express();

// no need to configure session

// no need to set up the view engine

// parse the post data
app.use(bodyparser.urlencoded({extended:true}));

// pointing to the static content
app.use(express.static(path.join(__dirname, './client/dist/client')));

// rendering json objects
app.use(express.json());

// connect to the database
require('./server/config/database');

// connect to routes and the paths to them
require('./server/config/routes')(app);

//catchall
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

// running the server on a loop
app.listen(8010, ()=>{
    console.log("running on 8010");
});