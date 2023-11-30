const model = require("../../../models/index");
module.exports = {
  index: async (req, res) => {
    res.render("students/home/index");
  },
};
