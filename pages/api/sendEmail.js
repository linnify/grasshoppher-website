import Mailgun from "mailgun.js";
const formData = require('form-data');

export default async (req, res) => {
  const mailgun = new Mailgun(formData);
  const { name, email, message } = req.body;
  const html = `Hello, <br/> <br/> <b>${name}</b> completed the contact form</b>. <br/>
    <br/> Name: ${name}
    <br/> E-Mail: ${email}
    <br/> Mesage: ${message}
  `;
  
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });
  
  try {
    const response = await mg.messages.create('mg.grasshoppherapp.com', {
      from: 'Grasshoppher Website <mailgun@mg.grasshoppherapp.com>',
      to: ['hello@grasshoppher.com'],
      subject: `Contact - GrasshoppHer website`,
      html,
    })
    console.log('Send Mail ', response)
    
    return res.send("success")
  } catch (e) {
    console.error('Error response ', e)
    return res.send("error" + JSON.stringify(e))
  }
}
