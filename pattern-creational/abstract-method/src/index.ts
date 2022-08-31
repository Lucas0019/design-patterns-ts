// Abstract Method

// É um pa­drão de pro­jeto cri­a­ci­o­nal que per­mite que você pro­duza 
// fa­mí­lias de ob­je­tos re­la­ci­o­na­dos sem ter que es­pe­ci­fi­car suas clas­ses concretas.

import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from './vehicles/factories/interfaces/ITransportFactory';
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const currentComapny = Company.NINENINE
let factory: ITransportFactory

function initRouteClient() {
  const client = new Client(factory);
  client.starRoute();
}

switch (currentComapny) {
  case Company.UBER:
    factory = new UberTransport()
    initRouteClient()
    break;
  case Company.NINENINE:
    factory = new NineNineTransport()
    initRouteClient()
    break;
  default:
    console.error('Invalid company')
}

