import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Car started");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros, estamos prontos");
  }
  
}