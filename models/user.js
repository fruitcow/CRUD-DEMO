var mysql = require('mysql');

var DB = require('../db/db.js');

function UserDataMaping(rowData){
  var UserData = new userModel(
    rowData.id,
    rowData.name,
    rowData.sex,
    rowData.birthday,
    rowData.created_at,
    rowData.updated_at
  );
  return UserData;
}

function userModel(id, name, sex, birthday, created_at, updated_at) {
  this.id = id;
  this.name = name;
  this.sex = sex;
  this.birthday = birthday;
  this.created_at = created_at;
  this.updated_at = updated_at;
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

/*Create a admin in db*/
User.create = function(data, callback){
  DB.query('INSERT INTO `users` SET ?;', data, function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

/*Update a admin in db*/
User.update = function(data, id, callback){
  DB.query('UPDATE `users` SET ? WHERE id = ?;', [data, id], function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

/*Delete a admin in db*/
User.delete = function(id, callback){
  DB.query('DELETE FROM `users` WHERE id = ?;', id, function(err, rows) {
    if (err) {
      console.log(err);
    }
      callback(err,rows);
  });
};

/*Get a admin in db By id*/
User.get = function(id, callback) {
  DB.query('SELECT * FROM `users` WHERE id = ?;', id, function(err, rows) {
    if (err) {
      console.log(err);
    }
      return callback(err,rows);
  });
};

module.exports = User;



