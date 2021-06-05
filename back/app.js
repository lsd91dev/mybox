const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

// Environment variable

require('dotenv').config();

// Connect to DB
require('./databaseConfiguration/DatabaseConnection')();

// ROUTES
const { router: project } = require('./routes/project.routes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> { res.redirect('/mybox') })
app.use('/mybox/project', project);

app.listen(port, (error)=> {
    if(error){ console.log(error) }
    console.log('Listening at port ' + port )
})