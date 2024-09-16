const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error de verificación: ", error);
  } else {
    console.log("Listo para enviar");
  }
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
      from: name,
      to: process.env.MAIL_USER,
      subject: "Contacto - Portfolio",
      html: `<p>Nombre: ${name}</p>
             <p>Email: ${email}</p>
             <p>Telefono: ${phone}</p>
             <p>Mensaje: ${message}</p>`,
    };
  
    try {
      const info = await contactEmail.sendMail(mail);
      console.log("Correo enviado: ", info.response);
      res.status(200).json({ code: 200, status: "Mensaje enviado" });
    } catch (error) {
      console.error("Error al enviar el correo: ", error);
      res.status(500).json({ code: 500, status: "Algo ha salido mal, intentalo de nuevo más tarde." });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
