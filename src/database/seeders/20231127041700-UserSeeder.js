"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          phone: "0123456789",
          address: "Nghệ An",
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phạm Văn Bảo",
          email: "phamvanbao07012002@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          phone: "0397642557",
          address: "Nghệ An",
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
