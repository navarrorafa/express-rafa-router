const express = require("express");
const router = express.Router();

const {getProf,getProfId,createProf,updateProf,deleteProfById} = require('../controllers/apiControllProf');
const { check } = require("express-validator");
const { validationExpress} = require('../middleware/vallidation')


//recoger todos los servicios

router.get('/profesores' , getProf)

//recoge un servicio por su id

router.get('/profesores/:id' , getProfId)

//cree un servicio

router.post('/profesores/' , 
[
    check("nombre","El nombre es obrigatorio").not().isEmpty(),
    check("apellido",'El apellido es Obrigatorio').not().isEmpty(),
    check("prof",'El prof es Obrigatorio').not().isEmpty(),
    check("correo",'Email es errado').isEmail(),
    validationExpress
]
, createProf )

//actualice servicio


router.put('/profesores/:id' ,updateProf)


//elimine un servicio

router.delete('/profesores/:id' , deleteProfById)

module.exports=router