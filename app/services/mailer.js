const nodemailer = require('nodemailer');
const showdown = require('showdown');

const from = `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`;

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  disableFileAccess: true,
  disableUrlAccess: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const send = ({ to, title, content }) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(content);
  const subject = `${title} | ${process.env.FROM_NAME}`;
  const text = content;

  return transport.sendMail({
    from,
    to,
    subject,
    html,
    text,
  });
};


module.exports = { send };
