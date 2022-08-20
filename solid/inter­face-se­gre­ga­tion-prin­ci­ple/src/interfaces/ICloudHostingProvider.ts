export default interface ICloudHostingProvider {
  createServer(): void;
  listServers(): void;
}