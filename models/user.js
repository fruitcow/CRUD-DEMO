var mysql = require('mysql');

var DB = require('../db/db.js');

function UserDataMaping(rowData){
    var UserData = new Object({
      id: rowData.id,
      name: rowData.name,
      sex: rowData.sex,
      birthday: rowData.birthday,
      created_at: rowData.created_at,
      updated_at: rowData.updated_at
    });
    return UserData;
}

function userModel(id, name, sex, birthday) {
  this.id = id;
  this.name = name;
  this.sex = sex;
  this.birthday = birthday;
}

var User = {};

User.list = function(callback){
    var list = [];
    DB.query('SELECT * FROM users;', function(err, results) {
        if (err) throw err;
        for(key in results){
          var data = UserDataMaping(results[key])
          list.push(data);
        }
      callback(err,list);
    });
};

//Unfinished
User.create = function(data, callback){
  data.birthday+= " 00:00:00";
  DB.query('INSERT INTO `users` SET ?;', data, function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

//Unfinished
User.update = function(data, id, callback){
  data.birthday+= " 00:00:00";
  DB.query('UPDATE `users` SET ? WHERE id = ?;', [data, id], function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

//Unfinished
User.delete = function(id, callback){
  DB.query('DELETE FROM `users` WHERE id = ?;', id, function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

//Unfinished
User.get = function(data, callback) {
  DB.query('SELECT FROM `users` WHERE id = :id;', data, function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

module.exports = User;



