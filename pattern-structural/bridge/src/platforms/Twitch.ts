import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {

  constructor() {
    this.configureRMTP();
    console.log("Twitch: Transmitting start");
  }

  configureRMTP(): void {
    this.authToken();    
    console.log("Twitch: Configuring RMTP");
  }
  authToken(): void {
    console.log("Twitch: Auth token authentication");
  }
}