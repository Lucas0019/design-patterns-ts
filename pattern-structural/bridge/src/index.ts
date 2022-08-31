// Bridge 

import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from './platforms/Youtube';
import FacebookLive from './platforms/FacebookLive';
import Live from "./transmissions/Live";
import AdvancedLive from './transmissions/AdvancedLive';

// O Bridge é um pa­drão de pro­jeto es­tru­tu­ral que per­mite que você 
// di­vida uma classe grande ou um con­junto de clas­ses in­ti­ma­mente li­ga­das 
// em duas hi­e­rar­quias se­pa­ra­das  ( abs­tra­ção e im­ple­men­ta­ção) que 
// podem ser de­sen­vol­vi­das in­de­pen­den­te­mente umas das outras.

// Seria como lidar com uma live no youtube, twitch e facebook 

function startLive(plataform: IPlatform) {
  console.log('wait, we start in 5min');

  const live = new Live(plataform);

  live.broadcasting();
  live.result();
}

function startAdvancedLive(plataform: IPlatform) {
  console.log('wait, we start in 5min');

  const live = new AdvancedLive(plataform);

  live.broadcasting();
  live.result();
  live.subtitles();
  live.coments();

}

// startLive(new Youtube());
// startLive(new Twitch());
startLive(new FacebookLive());

// startAdvancedLive(new Youtube());
// startAdvancedLive(new Twitch());
startAdvancedLive(new FacebookLive());