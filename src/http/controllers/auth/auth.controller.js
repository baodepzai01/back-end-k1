const SendMail = require("../../../helpers/sendMail");
const model = require("../../../models/index");
const User = model.User;
module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    res.render("auth/login", {
      layout: "layouts/auth.layout.ejs",
      error,
    });
  },
  handleLogin: async (req, res, next) => {
    const user = await User.findOne({
      email,
    });
    if (user) {
      return {
        code: 404,
        msg: "",
      };
    }
    res.render("auth/otp");
  },

  loginGoogle: (req, res) => {
    console.log(req.user);
    // const user = req.user.dataValues;
    // console.log(user);
    res.redirect("/");
  },

  loginGithub: (req, res) => {
    res.redirect("/");
  },

  loginFacebook: (req, res) => {
    res.redirect("/");
  },
};
