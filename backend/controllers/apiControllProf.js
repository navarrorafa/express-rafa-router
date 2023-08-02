const Profesores =require('../models/JflProfModels');


//GET 
const getProf = async (req,res) => {


    try {
        const profesores = await Profesores.find()
      

        res.status(200).json({
            ok: true,
            msg: 'recore todos los profesores',
            data: profesores,
            total_results: profesores.length
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'contacta con el administrador'
        })
    }

}

//GET ID 
const getProfId = async (req, res) => {
 
    const id = req.params.id
    console.log(id)
    

    try {
        const findId = await Profesores.findById(id).exec()
        if(!findId){
            return res.status(201).json({
                ok:false,
                msg:"Id de Professor no encontrado"
            })
        }
        console.log(findId)

        return res.status(200).json({
            ok:true,
            data:findId,
            total_results: findId.length
        })
    }catch(error) {
        return res.status(500).json({
            ok: false,
            msg: 'contacta con el administrador'
    })}

}

//POST
const  createProf = async (req,res) => {

    const profesores = new Profesores(req.body)
    try {
         
        const {matricula}= req.body;
        const existe = await Profesores.findOne({matricula});
      

        if(existe) {
            return res.status(400).json({
              ok:false,
              msg: "Ya existe esta matricula"
            })
        }
        


        const profSaved = await profesores.save()
        console.log(profSaved)

        return res.status(201).json({
            ok: true,
            profesores: profSaved,
            msg: 'crea servicios'
         
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'contacta con el administrador'
        })
    }


}

// PUT 
const updateProf = async (req,res) => {
   // recorro o ID por el parametro
    const id = req.params.id;
    //requiro o body do postman o que vou a cambiar
    const nuevosDatos = req.body;
    console.log(nuevosDatos)

    try {
        // uso o metodo findUpdate para criar la actualizacion
        const profActualizado = await Profesores.findByIdAndUpdate(id, nuevosDatos, { new: true });
        //crio una condiccao if caso no se encuentre el id fornecido
        if (!profActualizado) {
            return res.status(404).json({
                mensaje: 'Profesor no encontrado'
            });
        }
        //caso encontrado o id executo o uptade
        return res.status(200).json({
            ok: true,
            msg: 'Profesor actualizado exitosamente', 
            prof: profActualizado });
    } catch (error) {
        console.log(error);
        return res.status(500).json
    }
}

//DELETE 
const deleteProfById =async (req, res) => {
   const id = req.params.id

   const delDatos = req.body;

   try {
    const deletar = await Profesores.findByIdAndRemove(id, {new:true});

    if(!deletar){
        return res.status(2001).json({
            ok:false,
            msg:'Dados do profesor no encontrado'
        });
    }

    return res.status(200).json({
        ok:true,
        msg:"Dados deletado"

    })

   } catch (error) {
    console.log(error);
    return res.status(500).json
   }


}

module.exports = {
    getProf,
    getProfId,
    createProf,
    updateProf,
    deleteProfById
}