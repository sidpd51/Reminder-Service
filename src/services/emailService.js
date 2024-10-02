const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,
        });
    } catch (error) {
        console.log(error);
    }
};

const fetchPendingEmails = async (timestamp) => {
    try {
        const repo = new TicketRepository();
        const response = await repo.getAll();
        return response;
    } catch (error) {
        console.log(error);
    }
};

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
};
