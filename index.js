"use strict";
const express = require('express');
const dotenv= require('dotenv');
//levantar las variables de entorno de archivo ".env"
dotenv.config();//El valor de las variables globales se obtiene accediendo a la variable de node "process.env" por ejemplo "process.env.PORT"



//Inciando funcion de express como backend
const app= express();

//Asignacion carpeta publica
app.use(express.static('public'));

//Rutas de la app
app.get('/',(req,res)=>{
    res.json({
        msg:`Hola`
    });
});

//Listener del servidor en puerto 3300
const listener = app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}/`);
})
