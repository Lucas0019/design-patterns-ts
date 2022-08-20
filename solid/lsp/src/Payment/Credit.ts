import NubankCard from "../NubankCard";

export default class Credit extends NubankCard {

  validate(): void {
    console.log('validate credit limit...');
  }
}