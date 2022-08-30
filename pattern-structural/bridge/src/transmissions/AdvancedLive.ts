import IPlatform from '../platforms/IPlatform';
import Live from './Live';

export default class AdvancedLive extends Live {

  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {
    console.log("Transmitting subtitles on");
  }

  coments(): void {
    console.log("Transmitting coments on");
  }
}