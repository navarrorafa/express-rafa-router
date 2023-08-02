const mongoose= require('mongoose');

const dbConnect = async () => {
    
    
    try {
        const resp = await mongoose.connect(process.env.URI_DB)
        console.log('base de datos conectada');
        return resp
    } catch (error) {
        return {
            ok:false,
            msg:'Erros al conectar a la base de datos'
        }

        
    }
};

module.exports={dbConnect}