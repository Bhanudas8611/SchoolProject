var mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_db'
})

connection.connect((err) => {
    (err) ? console.log('Error while connection database') : console.log('Connection Establish')
})

module.exports = connection;