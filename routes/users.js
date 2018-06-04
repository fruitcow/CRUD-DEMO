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
    res.send(JSON.stringify(list));
  });
});

/* GET user by Id */
router.get("/user/:Id", function(req, res, next) {
  var result = User.get(function(err, list) {
    if (err) {
      next(error);
      return res.redirect("/");
    }
    return res.redirect("/");
  });
});

/* Create a user */
router.post("/users", function(req, res, next) {
  var data = {
    name: req.body.name,
    sex: req.body.sex,
    birthday: req.body.birthday
  };

  var result = User.create(data, function(err, list) {
    if (err) {
      next(error);
      return res.redirect("/");
    }
    return res.redirect("/");
  });
});

/* Update a user */
router.post("/user/:id", function(req, res, next) {
  var id = req.params.id;
  var data = {
    name: req.body.name,
    sex: req.body.sex,
    birthday: req.body.birthday
  };

  var result = User.update(data, id, function(err, list) {
    if (err) {
      next(error);
      return res.redirect("/");
    }
    return res.redirect("/");
  });
});

/* Delete a user */
router.get("/delete/user/:id", function(req, res, next) {
  var id = req.params.id;
  var result = User.delete(id, function(err, list) {
    if (err) {
      next(error);
      return res.redirect("/");
    }
    return res.redirect("/");
  });
});

module.exports = router;
