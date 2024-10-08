const express = require("express");
const bodyParser = require("body-parser");
const cron = require('node-cron');

const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/emailService");
const jobs = require('./utils/job')

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`server is listening on PORT: ${PORT}`);
        // sendBasicEmail('"Maddison Foo Koch 👻" <maddison53@ethereal.email>','sidpd510@gmail.com','Just a testing sample','testing body')
        jobs()

       
    });
};
setupAndStartServer();
