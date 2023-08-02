const express = require("express");
require('dotenv').config();

const {dbConnect} = require('/helpers/connection')

//SERVIDOR 
const app = express();
const port = process.env.PORT;


//CONEXION BASE DE DATOS;
dbConnect();

//para poner o json no servidor
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//RUTAS
app.use('/api/v1',require('./routers/apiRouters'))

// PONER A ESCUCHA 
app.listen(port, ()=> {
    console.log(`Servidor ${port} ON`)
});




