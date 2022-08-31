import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {

  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Helicopter started route');
  }

  getCargo(): void {
    console.log('we take the passengers in the helicopter');
  }
  checkWind(): void {
    console.log('wind at 25km outside, ok start');
  }
}