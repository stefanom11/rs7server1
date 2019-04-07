//import express package
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const postgresdb = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Ciao',
        database: 'test'
    }
});

//create our app
const app = express();

//use imported packages
app.use(bodyParser.json());
app.use(cors());

let guida = '';
let veicolo = '';
let stanza = '';

app.post('/availabilitycheck',(req,res) => {
    const {guide, vehicle, accomodation} = req.body;
    postgresdb('requests').insert({
        email: 'eee'
    })    
    .then(data => res.json('Thanks for your interest in RoyalSafari. We received your request for availability and we will get back to you in the next few hours'));
})

app.get('/',(req,res)=>{
    res.send('this is working');
})

//use port 3001 and run as first action a console.log, just to check everything id working fine
app.listen(process.env.PORT, () => {console.log('app is running on port 3001');})

