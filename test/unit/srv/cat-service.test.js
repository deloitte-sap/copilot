const cds = require('@sap/cds')
const { expect } = require('chai')

describe('CatalogService', () => {
  it('should be able to fetch all Books', async () => {
    const CatalogService = await cds.connect.to('CatalogService')
    const { Books } = CatalogService.entities

    const books = await SELECT.from(Books)
    expect(books).to.be.an('array')
  })
})
