import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Motorcycle started route');
  }
  getCargo(): void {
    console.log('we take the passengers in the Motorcycle');
  }
  
}