import React, {Component, Fragment} from 'react';

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
            <h2 className="zoneOne zone">Epipelagic Zone (The Sunlight Zone)</h2>
            <h2 className="zoneTwo zone">Mesopelagic Zone (The Twilight Zone)</h2>
            <h2 className="zoneThree zone">Bathypelagic Zone (The Midnight Zone)</h2>
            <h2 className="zoneFour zone">Abyssopelagic Zone (The Abyss)</h2>
            <h2 className="zoneFive zone">Hadalpelagic Zone (The Trenches)</h2>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Ruler;