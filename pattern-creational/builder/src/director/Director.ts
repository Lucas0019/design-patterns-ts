// A classe Di­re­tor de­fine a ordem na qual as eta­pas de cons­tru­ção são cha­ma­das,
// então você pode criar e reu­ti­li­zar con­fi­gu­ra­ções es­pe­cí­fi­cas de produtos.

import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from '../components/types/VehicleType';
import Wheel from "../components/Wheel";

export default class Director {

  constructor(private builder: IBuilder) {
    
  }

  contructSedanCar(): void {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(4);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }

  constructorTruck(): void {
    this.builder.setVehicleType(VehicleType.TRUCK)
    this.builder.setSeats(2);
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAl);
    this.builder.setEngine(new Engine(13000));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }

}
