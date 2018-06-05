var express = require("express");
var User = require("../models/user.js");
var router = express.Router();

/* GET users listing. */
router.get("/users", function(req, res, next) {
  var result = User.list(function(err, list) {
    if (err) {
      next(error);
      return res.redirect("/");
    }
    var data = {
      type: 'success',
      result: list
    };
    res.send(JSON.stringify(data));
  });
});

/* GET user by Id */
router.get("/user/:id", function(req, res, next) {
  var id = req.params.id;
  var result = User.get(id, function(err, userData) {
    if (err) {
      next(err);
    }
    var data = {
      type: 'success',
      result: userData
    };
    return res.json(data);
  });
});

/* Create a user */
router.post("/users", function(req, res, next) {
  var Birthday = new Date(req.body.birthday).Format("yyyy-MM-dd hh:mm:ss")
  var data = {
    name: req.body.name,
    sex: req.body.sex,
    birthday: Birthday
  };
  
  var result = User.create(data, function(err, list) {
    if (err) {
      next(err);
    }
    var data = {
      type: 'success'
    };
    return res.json(data);
  });
});

/* Update a user */
router.put("/user/:id", function(req, res, next) {
  var id = req.params.id;
  var Birthday = new Date(req.body.birthday).Format("yyyy-MM-dd hh:mm:ss")
  var data = {
    name: req.body.name,
    sex: req.body.sex,
    birthday: Birthday
  };

  var result = User.update(data, id, function(err, list) {
    if (err) {
      next(err);
    }
    var data = {
      type: 'success'
    };
    return res.json(data);
  });
});

/* Delete a user */
router.delete("/user/:id", function(req, res, next) {
  var id = req.params.id;
  var result = User.delete(id, function(err, list) {
    if (err) {
      next(err);
    }
    var data = {
      type: 'success'
    };
    return res.json(data);
  });
});

/* date Formater */
Date.prototype.Format = function (fmt) {  
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

module.exports = router;
