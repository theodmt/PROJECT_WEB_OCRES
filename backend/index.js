const express = require('express');
const app = express();
require('./models/dbConfig');
const clientRoutes = require ('./routes/clientController');
const bodyParser = require('body-parser');
const cors = require ('cors');



app.use(bodyParser.json());
app.use(cors());
app.use('/client', clientRoutes);

app.listen(5000, () => { 
    console.log('Le serveur est lance sur le port : ${5000}')
});


