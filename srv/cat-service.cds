
using { managed, sap } from '@sap/cds/common';

entity Messages : managed {
  key ID : UUID;
  sender : String;
  message : String;
}
    