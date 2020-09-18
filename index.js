const express = require('express'); //inicializaicion de backend express
const dotenv= require('dotenv');//incorporando dotenv para usar variables globales propias
//levantar las variables de globales en archivo ".env"
dotenv.config();//El valor de las variables globales se obtiene accediendo a la variable de node "process.env" por ejemplo "process.env.PORT"

//Inciando funcion de express como backend
const app = express();


//Asignacion carpeta publica
app.use(express.static('public'));//"use" se implementa como un middleware, o sea, permite hacer una validacion antes de enviar a una ruta. En este caso, antes de ver cualquier ruta raiz("http://localhost/") envia a preguntar a la carpeta public

//Parsear el body directamente desde express mediante middleware
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));


//Listener del servidor en puerto 3300
const listener = app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}/`);
})
