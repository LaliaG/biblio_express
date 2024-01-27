const mysql = require('mysql2');// PERMET DE R2CUPERER LA    biblio de MySQL

const connection = mysql.createConnection({ // JE CREE LA CONNECTION
  host: 'localhost',
  user: 'root',
  password: 'Laliayou19',
  database: 'bibliotheque',
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

module.exports = connection;