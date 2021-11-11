const mysql = require('mysql');

const connMySQL = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_asteca',
    })
}
const connection = connMySQL()

connection.connect((err) => {
  if (err) {
        console.error(err) 
    };
  console.log("Connected on MySQL!");
});

module.exports = () => {
    return connMySQL;
}


// connection.query("select * from portal_asteca.tipo_chamado", (err, result) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log(result)
// })