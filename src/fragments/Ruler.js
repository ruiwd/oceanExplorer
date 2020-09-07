import React, {Component, Fragment} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Ruler extends Component {
  render() {
    return (
      <Fragment>
        <div className="ruler">
          <div className="standardLabel">
            <p>0 m</p>
            <p>1000 m</p>
            <p>2000 m</p>
            <p>3000 m</p>
            <p>4000 m</p>
            <p>5000 m</p>
            <p>6000 m</p>
            <p>7000 m</p>
            <p>8000 m</p>
            <p>9000 m</p>
            <p>10000 m</p>
            <p>11000 m</p>
          </div>
          <div className="extraLabel">
            <p className="twoHundred">200 m</p>
            <div className="zoneOne zone">Epipelagic Zone (The Sunlight Zone)</div>
            <div className="zoneTwo zone">Mesopelagic Zone (The Twilight Zone)</div>
            <div className="zoneThree zone">Bathypelagic Zone (The Midnight Zone)</div>
            <div className="zoneFour zone">Abyssopelagic Zone (The Abyss)</div>
            <div className="zoneFive zone">Hadalpelagic Zone (The Trenches)</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Ruler;