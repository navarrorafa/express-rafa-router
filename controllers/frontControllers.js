const Profesores = require('../models/JflProfModels')
const Cursos= require('../models/JflCursoModels')
const Instalation = require('../models/JflInstalacionesModels')
const getReviewAlumnos = (req,res) => {
  res.render('index',{
    review: [
        {
            id: 1,
            url: "assets/m1.jpg",
            lorem: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit." - Silva, Txema - Valencia'
        },
        {
            id: 2,
            url: "assets/m2.jpg",
            alt: "",
            lorem: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde alias labore fugit."Fuente, Maria - Madrid'
        },
        {
            id: 3,
            url: "assets/m3.jpg",
            alt: "",
            lorem: '"Lorem ipsum dolor sit amet consectetur adipisicing elit."Navarro,Pepe - Granada'
        }
    ]

  })
}



const getInstal = (req,res) => {
    res.render('instalaciones', {
        figureInsta : [
            {id:1,url:"",nombre:"Sala de Aula" },
            {id:2,url:"",nombre:"Biblioteca" },
            {id:3,url:"",nombre:"Cafeteria" },
            {id:4,url:"",nombre:"Laboratorio Audio" },
            {id:5,url:"",nombre:"Recepcao" },
            {id:6,url:"",nombre:"Laboratorio de Video" },
            {id:7,url:"",nombre:"Sala de Pratica" },
            {id:8,url:"",nombre:"Sala Clinica" },
            {id:9,url:"",nombre:"Terraza" },
            {id:10,url:"",nombre:"Sala de Juegos" },
            {id:11,url:"",nombre:"Patio" },
            {id:12,url:"",nombre:"Lobby" },

        ]
    })
}

// const getCursos = (req,res) => {
//     res.render('cursos', {
//         figureCursos : [
//             {
//                 url:"",
//                 alt:"",
//                 cursos:"Dietética" ,
//                 descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laboriosam architecto placeatcorporis, totam quasi molestiae! Ea quis in fugit, dolorem ratione officia aperiam ullam natus"
//             },
//             {
//                 url:"",
//                 alt:"",
//                 cursos:"Peluqueria" ,
//                 descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus ipsum accusamus qui atqueanimi quasi sequi asperiores expedita odio illum explicabo, fugiat veniam repudiandae recusandaeconsectetur, vel cupiditate. Blanditiis."
//             },
//             {
//                 url:"",
//                 alt:"",
//                 cursos: "Desarrolo Web",
//                 descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolores, quibusdam oditconsectetur est voluptas suscipit non pariatur molestiae perferendis, repellat itaque voluptatum eum repellendus incidunt ullam. Voluptatum, eligendi quo!"
//             },
//             {
//                 url:"",
//                 alt:"",
//                 cursos:"Gestión Administrativa" ,
//                 descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolores, quibusdam oditconsectetur est voluptas suscipit non pariatur molestiae perferendis, repellat itaque voluptatum eum repellendus incidunt ullam. Voluptatum, eligendi quo!"
//             },
//             {
//                 url:"",
//                 alt:"",
//                 cursos:"Educación Infantil" ,
//                 descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolores, quibusdam oditconsectetur est voluptas suscipit non pariatur molestiae perferendis, repellat itaque voluptatum eum repellendus incidunt ullam. Voluptatum, eligendi quo!"
//             },
//             {
//                 url:"",
//                 alt:"",
//                 cursos:"Animaciones 3D" ,
//                 descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolores, quibusdam oditconsectetur est voluptas suscipit non pariatur molestiae perferendis, repellat itaque voluptatum eum repellendus incidunt ullam. Voluptatum, eligendi quo!"
//             }
//         ]
//     })
// }



// const getProf = (req,res) => {
//     res.render('profesores', {
//        figureProf : [
//         {nombre:"Txema Vagones" , prof:"Java",url:"",alt:""},
//         {nombre:"Carlos S. Talk" , prof:"Oratoria",url:"",alt:""},
//         {nombre:"Gabirel CallBack" , prof:"Funciones CallBack",url:"",alt:""},
//         {nombre:"Trujillo Readme" , prof:"Documentacion",url:"",alt:""},
//         {nombre:"Sergio Bondacio" , prof:"Design Pelos",url:"",alt:""},
//         {nombre:"Hector Captain " , prof:"FullStack",url:"",alt:""},
//         {nombre:"Belem Estaban" , prof:"Piel & cuerpo",url:"",alt:""},
//         {nombre:"Ana Rosa" , prof:"Etiquetas",url:"",alt:""},
//         {nombre:"Isabel Pantoj" , prof:"Tecnicas Vocales",url:"",alt:""},
//         {nombre:"ELton D´Santos" , prof:"Pratica Elaborales",url:"",alt:""},
//        ] 
//     })
// }

const getCursos = async (req,res)=> {
    try {
        const cursos = await Cursos.find();
        console.log(cursos)

        res.render('cursos', {
            cursos:cursos
        })
    } catch (error) {
        
    }
}

const getProf = async (req,res) => {
    try {
        const profesores = await Profesores.find();
        console.log(profesores)

        res.render('profesores', {
            profesores:profesores
        })
    } catch (error) {
        
    }
}






module.exports={
    getReviewAlumnos,
    getInstal,
    getCursos,
    getProf
}