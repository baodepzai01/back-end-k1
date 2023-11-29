const { Layout } = require("../../../../public/assets/js/adminlte");

module.exports = {
  login: (req, res) => {
    res.render("auth/login", {
      layout: "layout/auth.layout.ejs",
    });
  },
};
