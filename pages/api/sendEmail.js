const nodemailer = require("nodemailer");
import { EMAIL_HOST, EMAIL_AUTH_USER, EMAIL_AUTH_PASS } from "../../constants/deploy";

export default (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    sendmail: true,
    host: {EMAIL_HOST},
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_AUTH_USER ,
      pass: EMAIL_AUTH_PASS ,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `hello@grasshoppher.com`,
    subject: `Contact - GrasshoppHer website`,
    text: `
        ${message}
    
        ${name}  
        ${email} 
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log("Transporter sendMail error:", err);
      res.send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });

}
