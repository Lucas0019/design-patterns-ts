import IPlatform from "./IPlatform";

export default class FacebookLive implements IPlatform {

  constructor() {
    this.configureRMTP();
    console.log("Facebook Live: Transmitting start");
  }

  configureRMTP(): void {
    this.authToken();    
    console.log("Facebook Live: Configuring RMTP");
  }
  authToken(): void {
    console.log("Facebook Live: Auth token authentication");
  }
}