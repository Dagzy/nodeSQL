const mysql = require('mysql')
const config = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Bigmoney2019!',
    database:'example'
});
config.connect((err)=>{
    if(err){
        throw err
    }
    console.log("Connected to SQL DB")
});

module.exports = config