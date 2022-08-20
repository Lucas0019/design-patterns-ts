import ICDNProvider from "../interfaces/ICDNProvider";
import ICloudHostingProvider from "../interfaces/ICloudHostingProvider";
import ICloudStorageProvider from "../interfaces/ICloudStorageProvider";

export default class Amazon
  implements ICDNProvider, ICloudHostingProvider, ICloudStorageProvider
{

  // ICDNProvider configure
  constructor(
     server: string,
     port: number,
     username: string,
  ) {
    this.configureCDN(server, port, username);
  }

  getCDNAddress(): void {
    console.log("Amazon CDN address");
  }
  
  configureCDN(server: string, port: number, username: string) {
    console.log(
      `Amazon configure CDN ${server} ${port} ${username}`
    );
  }
  


  // ICloudHostingProvider
  storeFile(): void {
    console.log("Amazon storage file");
  }
  getFile(): void {
    console.log("Amazon get file");
  }

  // ICloudStorageProvider
  createServer(): void {
    console.log("Amazon create server");
  }
  listServers(): void {
    console.log("Amazon list servers");
  }

}
