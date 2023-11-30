const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM, // sender address
    to: "phamvanbao07012002@gmail.com", // list of receivers

    html: "<b>OTP</b>", // html body
  });
  transporter.sendMail(email, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(info);
    }
  });
}
