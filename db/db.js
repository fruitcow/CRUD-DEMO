var mysql = require('mysql');

//------------------------
// 建立資料庫連線池
//------------------------
var db  = mysql.createPool({
    user: 'erty88860',
    password: 'asdf7777',
    host: 'db4free.net',
    database: 'erty88860', 
    waitForConnections : true, 
    connectionLimit : 10     
});

//----------------------------
// 引用此模組時將匯出pool物件
//----------------------------
module.exports = db;