import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import nodemailer from "nodemailer";

type requestType = Request<any, any, any, ParsedQs, Record<string, any>>;
type responseType = Response<any, Record<string, any>, number>;

export const sendEmail = async (req: requestType, res: responseType) => {
  // load stuff from the .env file
  const nodemailerConfig: any = {
    host: process.env.REACT_APP_HOST,
    port: process.env.REACT_APP_PORT,
    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASS,
    },
  };

  // create transporter object with smtp server details
  const transporter = nodemailer.createTransport(nodemailerConfig);

  // build message
  const { email, name, type, description } = req.body;

  const remitente = `<strong>Remitente: </strong><span>${email}</span>`;
  const nombreCliente = `<strong>Nombre: </strong><span>${name}</span>`;
  const tipo = `<strong>Tipo: </strong><span>${type}</span>`;
  const descripción = `<strong>Descripción: </strong><span>${description}</span>`;

  // send email
  await transporter.sendMail({
    from: email,
    to: "aldoglez34@gmail.com",
    subject: `aldosolano.com -- ${type} -- ${name}`,
    html: `${remitente} <br/> ${nombreCliente} <br/> ${tipo} <br/> ${descripción}`,
  });

  // send response to the client
  res.send(
    "Gracias por ponerte en contacto conmigo, te responderé a la brevedad al correo proporcionado."
  );
};
