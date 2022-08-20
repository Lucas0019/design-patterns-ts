// OCP - Open Closed Principle
// As clas­ses devem ser aber­tas para ex­ten­são mas fe­cha­das para modificação.

import TypeVehicle from "./TypeVehicle";

import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const type = TypeVehicle.CAR;
let vehicle

if ( type === TypeVehicle.CAR) {
  vehicle = new Car("red", 2019, 1.0, 4, 4);
} else if ( type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("blue", 2019, 1.0);
}
