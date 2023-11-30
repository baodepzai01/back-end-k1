var express = require("express");
var passport = require("passport");
var router = express.Router();
var AuthController = require("../../http/controllers/auth/auth.controller");
var GuestAuthMiddleware = require("../../http/middlewares/guestAuth.middlewares");
/* GET home page. */
router.get("/login", GuestAuthMiddleware, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  }),
  (req, res) => {
    if (req.query.redirect) {
      res.redirect("/auth/redirect?url=" + req.query.redirect);
    }
    res.redirect("/");
  }
);
module.exports = router;
