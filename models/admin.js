var mysql = require("mysql");
var DB = require("../db/db.js");

function adminDataMaping(rowData) {
  var adminData = new Object({
    id: rowData.id,
    name: rowData.name,
    password: rowData.password
  });
  return adminData;
}

function adminModel(user) {
  this.id = user.id;
  this.name = user.name;
  this.password = user.password;
}

var Admin = {};

//Unfinished
Admin.create = function(data, callback) {
  var result = {};
  DB.query("INSERT INTO `admins` SET ?;", data, function(err, rows) {
    if (err) {
      console.log(err);
    }
    data.id = rows.insertId;
    callback(null, data);
  });
};

//Unfinished
Admin.get = function(name, callback) {
  var result = {};
  DB.query("SELECT * FROM `admins` WHERE username = ?;", name, function(err, rows) {
    if (err) {
      console.log(err);
    }
    if(rows.length > 0){
      result = adminDataMaping(rows[0]);
    }
    callback(null, result);
  });
};

module.exports = Admin;
