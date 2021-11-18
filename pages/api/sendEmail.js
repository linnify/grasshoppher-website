const nodemailer = require("nodemailer");
import { EMAIL_AUTH_USER, EMAIL_AUTH_PASS } from "../../constants/deploy";

export default (req, res) => {
  
  const { name, email, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    sendmail: true,
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_AUTH_USER ,
      pass: EMAIL_AUTH_PASS ,
    },
  });
  const html = `Hello, <br/> <br/> <b>${name}</b> completed the contact form</b>. <br/>
    <br/> Name: ${name}
    <br/> E-Mail: ${email}
    <br/> Mesage: ${message}
  `;
  
  const mailOption = {
    from: {
      name: "Grasshoppher Website",
      address: 'website@grasshoppher.com',
    },
    to: `hello@grasshoppher.com`,
    subject: `Contact - GrasshoppHer website`,
    html,
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log("Transporter sendMail error:", err);
        return reject(err)
      }
      resolve()
    });
  })
    .then(() => res.send("success"))
    .catch((err) =>  res.send("error" + JSON.stringify(err)))
  
}
