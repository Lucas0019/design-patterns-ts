import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Bike started");
  }
  getCargo(): void {
    console.log("Já pegamos a embalagem, estamos prontos");
  }
  
}