var express = require("express");
var User = require("../models/user.js");
var router = express.Router();

// GET index page
router.get("/", function(req, res, next) {
  if (req.session.adminData) {// if already login 
    User.list(function(err, list) {
      if (err) {
        return res.redirect("/");
      }
      res.render("index.ejs", {
        title: "首頁",
        admin: req.session.adminData,
        dataList: list
      });
    });
  }else{
    return res.redirect("/auth");
  }
});

module.exports = router;
