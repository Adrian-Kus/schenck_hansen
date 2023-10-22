import nodemailer from "nodemailer";

const contactApi = async (req, res) => {
  const { firstName, lastName, email, phone, message, privacy } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "umzug.hamburg.schenck.hansen@gmail.com",
      subject: `Neue Nachricht von ${lastName} (Kontaktformular)`,
      html: `<h2>Kontaktanfrage von ${firstName} ${lastName}</h2><br>
            <h3>Nachname: </h3><p> ${lastName} </p><br>
            <h3>Vorname: </h3><p> ${firstName} </p><br>
            <h3>E-Mail: </h3><p> ${email} </p><br>
            <h3>Telefon: </h3><p> ${phone} </p><br>
            <h3>Nachricht: </h3><p> ${message} </p><br>
            <h3>Einwilligung zur Datenschutzerklärung: </h3><p> ${privacy} </p>`,
    });
    console.log("Message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};

export default contactApi;
