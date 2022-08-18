export default interface IVehicleMotorcycle {
  startVehicle(): void;
  configVehicle(
     color: string,
     year: number,
     engine: number,
  ): void;
}