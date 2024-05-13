// Instanciamos las dependencias que vamos a usar con REQUIRE 
const express = require ('express');
const conectarDB = require('../config/db');
const cors = require('cors');

// Crear el Servidor
const app = express();

// Enlazamos la conexión con nuestra base de datos
conectarDB();
app.use(cors());

// Configurar express para recibir los datos por json
app.use(express.json());

//Ruta principal del proyecto
app.use('/api', require('../routes/rutas'));

//Ruta para verificar el servidor
app.get('/', (req,res) =>{
    res.send('Taller Backend');
})
// Definir ruta principal
app.listen(3000,() => {
    console.log('El servidor está conectado a http://localhost:3000');
})