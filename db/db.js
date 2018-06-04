var mysql = require('mysql');

//------------------------
// 建立資料庫連線池
//------------------------
var db  = mysql.createPool({
    user: 'root',
    password: '1234',
    host: '127.0.0.1',
    database: 'demo', 
    waitForConnections : true, 
    connectionLimit : 10       
});

//----------------------------
// 引用此模組時將匯出pool物件
//----------------------------
module.exports = db;