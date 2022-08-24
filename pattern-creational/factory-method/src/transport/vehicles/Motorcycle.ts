import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Motocycle started");
  }
  getCargo(): void {
    console.log("Já pegamos a embalagem, estamos prontos");
  }
  
}