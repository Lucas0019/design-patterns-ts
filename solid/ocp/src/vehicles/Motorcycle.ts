import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotorcycle {

  constructor(
    color: string,
    year: number,
    engine: number,
  ) {
    this.configVehicle(color, year, engine);
  }

  startVehicle(): void {
    console.log("Starting vehicle motorcycle");
  }

  configVehicle(
    color: string,
    year: number,
    engine: number,
  ): void {
    console.log(
      `This is a motorcycle:
        ${color}
        ${year}
        ${engine}`
    );

    this.startVehicle();
  }
}
