const { Op } = require("sequelize");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SendMail = require("../../../helpers/sendMail");
const formatDate = require("../../../helpers/FormatDate");
const model = require("../../../models/index");
const User = model.User;
const userOpt = model.userOpt;
const loginToken = model.loginToken;
module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    res.render("auth/login", {
      layout: "layouts/auth.layout.ejs",
      error,
    });
  },
  handleLogin: async (req, res) => {
    const { email } = req.body;
    const { id } = req.user;

    const userOtp = await userOtp.findOne({
      where: {
        userId: id,
      },
    });
    if (userOtp) {
      await userOtp.destroy({
        where: {
          userId: id,
        },
      });
    }
    const otp = Math.floor(Math.random() * 90000) + 10000;
    const timeExpires = new Date(new Date().getTime() + 60000);
    const html = "<b>Nhập mã xác mình vừa được gửi để đăng nhập : </b>" + otp;
    SendMail(email, html);
    await userOtp.create({
      otp: otp,
      userId: id,
      expires: formatDate(new Date(timeExpires)),
    });

    const tokenUser = await loginToken.findOne({
      where: {
        userId: id,
      },
    });

    if (tokenUser) {
      await loginToken.destroy({
        where: {
          userId: id,
        },
      });
    }

    const token = md5(new Date() + Math.random());
    await loginToken.create({
      token: token,
      userId: id,
    });
    res.cookie("token", token, { maxAge: 900000, httpOnly: true });

    req.flash("email", email);
    res.redirect("/auth/verification");
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
