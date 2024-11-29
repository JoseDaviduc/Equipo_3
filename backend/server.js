const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yES', // Cambia si tienes una contraseña
    database: 'DecoracionesCastillo' // Cambia por el nombre de tu base de datos
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Endpoint para obtener los paquetes
app.get('/api/packages', (req, res) => {
    const query = 'SELECT * FROM packages';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los paquetes' });
        } else {
            res.json(results);
        }
    });
});

// Servidor escuchando
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
