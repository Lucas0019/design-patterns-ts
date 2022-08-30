import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform {

  constructor() {
    this.configureRMTP();
    console.log("Youtube: Transmitting start");
  }

  configureRMTP(): void {
    this.authToken();    
    console.log("Youtube: Configuring RMTP");
  }
  authToken(): void {
    console.log("Youtube: Auth token authentication");
  }
}