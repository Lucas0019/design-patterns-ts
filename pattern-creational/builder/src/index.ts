import Director from './director/Director';
import VehicleBuilder from './builders/VehicleBuilder';
// Builder

// É um pa­drão de pro­jeto cri­a­ci­o­nal que per­mite você 
// cons­truir ob­je­tos com­ple­xos passo a passo. 
// O pa­drão per­mite que você pro­duza di­fe­ren­tes tipos e re­pre­sen­ta­ções 
// de um ob­jeto usando o mesmo có­digo de construção.

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.contructSedanCar();
const vehicle = builder.getVehicle();
console.log({vehicle});

director.constructorTruck();
const truck = builder.getVehicle();
console.log({truck});