import React, {Component} from 'react';
import spermWhale from '../assets/spermWhale.png';
import squid from '../assets/squid.png';
import blueWhale from '../assets/blueWhale.png';
import lionfish from '../assets/lionfish.png';
import dolphin from '../assets/dolphin.png';
import tuna from '../assets/tuna.png';
import sunfish from '../assets/sunfish.png';
import ray from '../assets/ray.png';
import shark from '../assets/shark.png';
import anglerfish from '../assets/anglerfish.png';
import eel from '../assets/eel.png';

class Creatures extends Component {
  render () {
    return (
      <div className="creatures">
        <div className="creature spermWhale">
          <img src={spermWhale} alt="Sperm Whale"/>
        </div>
        <div className="creature squid">
          <img src={squid} alt="Colossal Squid"/>
        </div>
        <div className="creature blueWhale">
          <img src={blueWhale} alt="Blue Whale"/>
        </div>
        <div className="creature lionfish">
          <img src={lionfish} alt="Lionfish"/>
        </div>
        <div className="creature dolphin">
          <img src={dolphin} alt="Bottlenose Dolphin"/>
        </div>
        <div className="creature tuna">
          <img src={tuna} alt="Yellowfin Tuna"/>
        </div>
        <div className="creature sunfish">
          <img src={sunfish} alt="Sunfish"/>
        </div>
        <div className="creature ray">
          <img src={ray} alt="Manta Ray"/>
        </div>
        <div className="creature shark">
          <img src={shark} alt="Frilled Shark"/>
        </div>
        <div className="creature anglerfish">
          <img src={anglerfish} alt="Humpback Anglerfish"/>
        </div>
        <div className="creature eel">
          <img src={eel} alt="Pelican Eel"/>
        </div>
      </div>
    )
  }
}

export default Creatures;