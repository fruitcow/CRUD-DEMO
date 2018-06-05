var express = require("express");
var Admin = require("../models/admin.js");
var router = express.Router();

/* Create a Admin */
router.post("/signup", function(req, res, next) {
  var newAdmin = {
    username: req.body.username,
    password: req.body.password
  };

  var result = Admin.get(newAdmin.username, function(err, admin) {
    /* Check a Admin Data Exist */
    if (err) {
      return res.redirect("/auth");
    }
    if (admin.username) {
      //用户已存在!
      return res.redirect("/auth"); //返回註冊頁
    }
    var result = Admin.create(newAdmin, function(err, adminData) {
      /* Insert a Admin Data To Db */
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(adminData);
      req.session.adminData = adminData;
      return res.redirect("/");
    });
  });
});

/*  Admin Login*/
router.post("/login", function(req, res, next) {
  var data = {
    username: req.body.username,
    password: req.body.password
  };

  var sessionAdmin = {};
  var result = Admin.get(data.username, function(err, adminData) {
    if (err) {
      console.log(err);
      return next(err);
    }
    
    if (adminData.password != data.password) {
      return res.redirect("/auth");
    }
    sessionAdmin.id = adminData.id;
    sessionAdmin.username = data.username;
    req.session.adminData = sessionAdmin;
    return res.redirect("/");
  });
});

router.get('/logout', function (req, res) {
  req.session.adminData = null;
  return res.redirect("/auth");
});

router.get("/", function(req, res) {
   
  if(!req.session === undefined){
    return res.redirect("/");
  }
  res.render("auth.ejs", {
    title: "Welcome"
  });
});

module.exports = router;
