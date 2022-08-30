import IPlatform from "../platforms/IPlatform";
import ITransmissions from "./ITransmissions";

export default class Live implements ITransmissions {

  constructor(private platform: IPlatform) {
    this.platform.configureRMTP();
    this.broadcasting();
  }


  broadcasting(): void {
    console.log("Live: Transmitting start");
  }
  result(): void {
    console.log("************* ON AIR *************");
  }
}