//traigo el framework para o js 
const express = require('express');
//defino lo metodo/funcion de express en una variavel
const app = express();
//crio la salida del puerto 
const port = process.env.Port || 3000;


//son funciones que executa antes de empezar el servidor MidWorld
app.use(express.static(__dirname+'/public'));

//configuro la ingenaria de plantilla , donde coloco como voy a espelhar a pagina.
app.set('views', __dirname+'/views');


//esto denomina el tipo de lenguaje del framework q vamos usar 
app.set('view engine', 'ejs')

// coloco las rotas

app.use('/', require('./routers/frontRouters'));




app.use((req,res)=> {
    res.status(404).render("404", {
        msg: "Error 404"
    })
})

//colocamos el servidos ON/ escucha 
app.listen(port, ()=> {
    console.log("Servidon ON desde "+port)
})

