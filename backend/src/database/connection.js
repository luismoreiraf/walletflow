
const mysql = require('mysql')


const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'walletflow',
    charset : 'utf8mb4',
    multipleStatements: true
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected in database')
})

module.exports = con