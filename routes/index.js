var express = require("express");
var router = express.Router();

const data = {
  name: "Adhitya Hasan",
  title: "About Me",
  desc: "I can provide clean code and pixel perfect design. I also make the website more interactive with web animations. A responsive desgin makes your website accesible to all users, regardless of their device.",
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { data });
});

module.exports = router;
