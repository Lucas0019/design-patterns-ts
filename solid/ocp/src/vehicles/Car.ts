import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configVehicle(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("Starting vehicle");
  }

  configVehicle(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `This is a car: 
        ${color} 
        ${year} 
        ${engine} 
        ${seats} 
        ${doors}`
    );

    this.startVehicle();
  }
}
