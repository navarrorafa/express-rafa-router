//traigo el framework para o js 
const express = require('express');
//requiro el mongoose para  el app
const {dbConnect}= require('./utils/connection')
//para requerer las variables de entorno
require('dotenv').config();
//defino lo metodo/funcion de express en una variavel
const app = express();
//crio la salida del puerto 
const port = process.env.PORT



//son funciones que executa antes de empezar el servidor MidWorld
app.use(express.static(__dirname+'/public'));

//configuro la ingenaria de plantilla , donde coloco como voy a espelhar a pagina.
app.set('views', __dirname+'/views');



//esto denomina el tipo de lenguaje del framework q vamos usar 
app.set('view engine', 'ejs')

// coloco las rotas

app.use('/', require('./routers/frontRouters'));


//CONECTO AO MONGODB
dbConnect()


app.use((req,res)=> {
    res.status(404).render("404", {
        msg: "Error 404"
    })
})

//colocamos el servidos ON/ escucha 
app.listen(port, ()=> {
    console.log("Servidon ON desde "+port)
})

