import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {

  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Airplane started route');
  }

  getCargo(): void {
    console.log('we take the passengers');
  }
  checkWind(): void {
    console.log('wind at 25km east, ok start');
  }
}