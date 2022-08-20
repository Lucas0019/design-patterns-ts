import NubankCard from "../NubankCard";

export default class Debit extends NubankCard {

  validate(): void {
    console.log('Validate debit balance...');
  }
}