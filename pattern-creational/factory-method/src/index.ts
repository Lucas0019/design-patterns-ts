// Patter Creational

import Transport from "./transport/Transport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import BikeTransport from "./transport/BikeTransport";

// O Factory Method é um padrão criacional de projeto que fornece 
// uma interface para criar objetos em uma superclasse, 
// mas permite que as subclasses alterem o tipo de objetos que serão criados.


declare var process;

let transport: Transport;

const startedVehicle = () => { if (transport) transport.startTransport();}

if (process.argv.includes("--uber")) {
  transport = new CarTransport();
  startedVehicle()
} else if (process.argv.includes("--log")) {
  transport = new MotorcycleTransport();
  startedVehicle()
} else if (process.argv.includes("--eats")) {
  transport = new BikeTransport();
  startedVehicle()
} else {
  console.log("Select a transport");
}
