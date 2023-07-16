#!/usr/bin/env node

const commandLineArgs = require("command-line-args");
const nodemailer = require("nodemailer");

const optionDefinitions = [{ name: "email", type: String }];

const options = commandLineArgs(optionDefinitions);

let configOptions = {
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "anujgargcse@gmail.com",
    pass: "8I2TJpVwEGva4nCk",
  },
};

let transporter = nodemailer.createTransport(configOptions);

let mailOptions = {
  from: "anujgargcse@gmail.com",
  to: options.email,
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  attachments: [
    {
        filename: "abc.png",
        path: "./abc.png"
    }
  ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Message %s sent: %s", info.messageId, info.response);
});

console.log("Hello from CLI!");
console.log("Email: ", options.email);
