// var mysql = require('mysql2');

// var conexion = mysql.createConnection({
//     host: 'localhost',
//     database: 'dbantoniaestradamonzon',
//     user: 'root',
//     password: '1998',
// });

// conexion.connect((error) => {
//     if(error) {
//         console.error('Error de conexión:', error);
//         return;
//     } else {
//         console.log('¡CONEXION EXITOSA A LA BASE DE DATOS!')
//     }
// });

// conexion.query('SELECT * from grado', function(error, results, fields){
//     if(error)
//         throw error;
//         results.forEach(result => {
//             console.log(result);
//         })
// })

// conexion.query('SELECT * from administrador', function(error, results, fields){
//     if(error)
//         throw error;
//         results.forEach(result => {
//             console.log(result);
//         })
// })

// module.exports = conexion;
