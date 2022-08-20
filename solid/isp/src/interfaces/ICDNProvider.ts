export default interface ICDNProvider {
  getCDNAddress(): void;
  configureCDN(
    server: string,
    port: number,
    username: string
  ): void;
}