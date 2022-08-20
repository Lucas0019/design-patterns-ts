import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log('Card validated');
  }
  collectPayment(): void {
    console.log('Payment collected');
  }
  
}