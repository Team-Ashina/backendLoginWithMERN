const mongoose = require('mongoose');

const dbConnection = async()=>{
try {
    await mongoose.connect(process.env.DB_CONNECTION,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    console.log('Database Online')

} catch (error) {
    console.error(error);
    throw new Error('Error al intentar conectar a la bdd');
}
    
    
    
}

module.exports={
    dbConnection
}