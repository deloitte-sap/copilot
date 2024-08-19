const cds = require('@sap/cds');
const chai = require('chai');
const expect = chai.expect;

describe('Message Service', () => {
    const { Messages } = cds.entities;

    it('should insert a new message', async () => {
        const { data } = await cds.run(INSERT.into(Messages).entries({ sender: 'User', message: 'Hello World' }));
        expect(data).to.have.property('sender', 'User');
        expect(data).to.have.property('message', 'Hello World');
    });

    it('should retrieve messages', async () => {
        await cds.run(INSERT.into(Messages).entries({ sender: 'User', message: 'Hello Again' }));
        const result = await cds.run(SELECT.from(Messages));
        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(0);
    });
});