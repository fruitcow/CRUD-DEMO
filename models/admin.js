var mysql = require("mysql");
var DB = require("../db/db.js");

function adminDataMaping(rowData) {
  var adminData = new adminModel(
    rowData.id,
    rowData.name,
    rowData.password
  );
  return adminData;
}

function adminModel(id, name, password) {
  this.id = id;
  this.name = name;
  this.password = password;
}

var Admin = {};

/*Create a admin in db*/
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

/*Get a admin by name*/
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
