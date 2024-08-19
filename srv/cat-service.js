const cds = require('@sap/cds');
const { Messages } = cds.entities;

module.exports = cds.service.impl(async function() {
    this.on('sendMessage', async (req) => {
        const { sender, message } = req.data;
        const ID = cds.utils.uuid();
        await INSERT.into(Messages).entries({ ID, sender, message });
        return { ID, sender, message };
    });

    this.on('getMessages', async () => {
        return SELECT.from(Messages);
    });
});