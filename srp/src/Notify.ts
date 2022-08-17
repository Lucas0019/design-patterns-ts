import Client from "./Client";

export default class Notify {

  constructor(private client: Client) {
    // ...
  }

  sendEmail(): boolean {

    console.log('Enviando email...');
    this.client.email;
    return true;
  }

  sendSms(): boolean {

    console.log('Enviando sms...');
    this.client.phone;
    return true;
  }
}