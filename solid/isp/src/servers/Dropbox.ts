import ICloudStorageProvider from "../interfaces/ICloudStorageProvider"
import ICDNProvider from "../interfaces/ICDNProvider";

export default class Dropbox implements ICDNProvider, ICloudStorageProvider {

   // ICDNProvider configure
   constructor(
    server: string,
    port: number,
    username: string,
 ) {
   this.configureCDN(server, port, username);
 }
 
  getCDNAddress(): void {
    throw new Error("Method not implemented.");
  }

 configureCDN(server: string, port: number, username: string) {
   console.log(
     `Dropbox configure CDN ${server} ${port} ${username}`
   );
 }

  // ICloudStorageProvider
  storeFile(): void {
    console.log('Dropbox storage file')
  }
  getFile(): void {
    console.log('Dropbox get file')
  } 

}