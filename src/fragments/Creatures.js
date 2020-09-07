import React, {Component, Fragment} from 'react';
import spermWhale from '../assets/spermWhale.png';
import squid from '../assets/squid.png';

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
      </div>
    )
  }
}

export default Creatures;