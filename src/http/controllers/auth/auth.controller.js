module.exports = {
  login: (req, res) => {
    res.render("auth/login", {
      layout: "layouts/auth.layout.ejs",
    });
  },
};
