export default interface IVehicleCar {
  startVehicle(): void;
  configVehicle(
     color: string,
     year: number,
     engine: number,
     seats: number,
     doors: number
  ): void;
}