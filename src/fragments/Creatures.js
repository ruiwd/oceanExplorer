import React, { Component } from "react";
import spermWhale from "../assets/spermWhale.png";
import squid from "../assets/squid.png";
import blueWhale from "../assets/blueWhale.png";
import lionfish from "../assets/lionfish.png";
import dolphin from "../assets/dolphin.png";
import tuna from "../assets/tuna.png";
import sunfish from "../assets/sunfish.png";
import ray from "../assets/ray.png";
import shark from "../assets/shark.png";
import anglerfish from "../assets/anglerfish.png";
import eel from "../assets/eel.png";
import oarfish from "../assets/oarfish.png";
import octopus from "../assets/octopus.png";
import dragonfish from "../assets/dragonfish.png";
import fangtooth from "../assets/fangtooth.png";
import vampire from "../assets/vampire.png";
import swallower from "../assets/swallower.png";
import tripod from "../assets/tripod.png";
import tentacleOne from "../assets/tentacle1.png";
import tentacleTwo from "../assets/tentacle2.png";
import cthulhu from "../assets/cthulhu.png";
import cthulhuTwo from "../assets/cthulhu2.png";

class Creatures extends Component {
  render() {
    return (
      <div className="creatures">
        <div className="creature spermWhale">
          <img src={spermWhale} alt="Sperm Whale" />
        </div>
        <div className="creature squid">
          <img src={squid} alt="Colossal Squid" />
        </div>
        <div className="creature blueWhale">
          <img src={blueWhale} alt="Blue Whale" />
        </div>
        <div className="creature lionfish">
          <img src={lionfish} alt="Lionfish" />
        </div>
        <div className="creature dolphin">
          <img src={dolphin} alt="Bottlenose Dolphin" />
        </div>
        <div className="creature tuna">
          <img src={tuna} alt="Yellowfin Tuna" />
        </div>
        <div className="creature sunfish">
          <img src={sunfish} alt="Sunfish" />
        </div>
        <div className="creature ray">
          <img src={ray} alt="Manta Ray" />
        </div>
        <div className="creature shark">
          <img src={shark} alt="Frilled Shark" />
        </div>
        <div className="creature anglerfish">
          <img src={anglerfish} alt="Humpback Anglerfish" />
        </div>
        <div className="creature eel">
          <img src={eel} alt="Pelican Eel" />
        </div>
        <div className="creature oarfish">
          <img src={oarfish} alt="Giant Oarfish" />
        </div>
        <div className="creature octopus">
          <img src={octopus} alt="Dumbo Octopus" />
        </div>
        <div className="creature dragonfish">
          <img src={dragonfish} alt="Black Dragonfish" />
        </div>
        <div className="creature fangtooth">
          <img src={fangtooth} alt="Fangtooth" />
        </div>
        <div className="creature vampire">
          <img src={vampire} alt="Vampire Squid" />
        </div>
        <div className="creature swallower">
          <img src={swallower} alt="Black Swallower" />
        </div>
        <div className="creature tripod">
          <img src={tripod} alt="Tripod Fish" />
        </div>
        <div className="creature tentacleOne">
          <img src={tentacleOne} alt="Kraken" />
        </div>
        <div className="creature tentacleTwo">
          <img src={tentacleTwo} alt="Kraken" />
        </div>
        <div className="creature cthulhu">
          <img src={cthulhu} alt="Cthulhu" />
        </div>
        <div className="creature cthulhuTwo">
          <img src={cthulhuTwo} alt="Cthulhu" />
        </div>
      </div>
    );
  }
}

export default Creatures;
