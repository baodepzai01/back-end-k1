var express = require("express");
var passport = require("passport");
var router = express.Router();

var AuthController = require("../../http/controllers/auth/auth.controller");
// var facebookRouter = require("../../http/controllers/auth/auth.controller");
// var githubRouter = require("../../http/controllers/auth/auth.controller");
// var googleRouter = require("../../http/controllers/auth/auth.controller");
var GuestAuthMiddleware = require("../../http/middlewares/guestAuth.middlewares");
var CheckAuthMiddleware = require("../../http/middlewares/checkAuth.middlewares");
/* GET home page. */
router.get("/login", GuestAuthMiddleware, AuthController.login);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/auth/login",
//     failureMessage: true,
//   }),
//   AuthController.loginGoogle
// );

// router.get("/facebook/redirect", passport.authenticate("facebook"));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     failureRedirect: "/auth/login",
//     failureMessage: true,
//   }),
//   AuthController.loginFacebook
// );

// router.get("/github/redirect", passport.authenticate("github"));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     failureRedirect: "/auth/login",
//     failureMessage: true,
//   }),
//   AuthController.loginGithub
// );
module.exports = router;
