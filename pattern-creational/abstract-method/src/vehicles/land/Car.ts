import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Car started route');
  }
  getCargo(): void {
    console.log('we take the passengers in the car');
  }
  
}