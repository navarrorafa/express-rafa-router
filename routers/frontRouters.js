//requiro el express para este documento
const express = require('express');
//traigo la Clase router del express para aceder seus metodos.
const router = express.Router();

const {getReviewAlumnos,getInstal,getCursos,getProf}=require('../controllers/frontControllers')

router.get('/',getReviewAlumnos);

router.get('/cursos',getCursos);

router.get('/instalaciones',getInstal);

router.get('/profesores',getProf);

router.get('/contacto',(req,res)=> {
    res.render('contacto',{})
});












//exporto el routor para que haga la importacion donde yo necesite 
module.exports=router;