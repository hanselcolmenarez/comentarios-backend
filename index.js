const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express(); // creamos el servidor

conectarBD(); // estableciendo conexión con la base de datos

app.use( express.static('public') ); //directorios publicos

app.use(express.json());
app.use(cors());
app.use('/api/comentarios', require('./routes/comentario'));

app.listen(process.env.PORT || 5000, () => {
    console.log("El servidor se ha iniciado correctamente en el puerto: " + process.env.PORT);
})