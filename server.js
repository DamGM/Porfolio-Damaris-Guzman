const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

// server para mandar mails
const app = express();
const corsOptions = {
  origin: 'https://portfolio-damaris.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.listen(8080, () => console.log("Servidor corriendo"));

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

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to:  process.env.MAIL_USER,
    subject: "Contacto - Portfolio",
    html: `<p>Nombre: ${name}</p>
           <p>Email: ${email}</p>
           <p>Telefono: ${phone}</p>
           <p>Mensaje: ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo: ", error);
      res.status(500).json({ code: 500, status: "Algo ha salido mal, intentalo de nuevo más tarde." });
    } else {
      console.log("Correo enviado: ", info.response);
      res.status(200).json({ code: 200, status: "Mensaje enviado" });
    }
  });
});
