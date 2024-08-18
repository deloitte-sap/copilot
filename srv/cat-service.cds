using { Entity } from '@sap/cds';

service CatalogService {
  entity Books as projection on my.Books;
}
