const intalations = require('../models/JfInstalacionesModels')


//GET
const getCursos = async() => {
try {
    const cursos = await Cursos.find()

    res.status(200).json({
        ok:true,
        msg: "Recoge los datos",
        datos: profesores,

    })

    
} catch (error) {
    
}
}

//GET ID 
const getCursosId = async()=> {

}

//POST CREAR
const getCreate = async ()=> {

}

//PUT ACTUALIZAR
const getActuliza = async ()=> {

}

//DELETE
const getDelete = async () => {

}


module.exports = {
     
}