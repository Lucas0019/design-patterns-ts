import IPaymentInstrument from "../IPaymentInstrument";

export default class Rewards implements IPaymentInstrument {
  validate(): void {
    console.log('Validate rewards user...');
  }
  collectPayment(): void {
    console.log('Payment collected by rewards');
  }
} 