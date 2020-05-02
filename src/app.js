const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

// App
const app = express();

//Parametros de configuração do mongoose
//estamos usando a conection string para o mongo atlas
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
});

//Recuperamos a conexão para que possamos manipular determinados eventos
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() =>{
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    })
})

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;