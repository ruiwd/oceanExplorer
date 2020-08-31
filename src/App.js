import React, {Component, Fragment} from 'react';
import Beach from './fragments/Beach';
import OceanBG from './fragments/OceanBG';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Beach />
        <OceanBG />
      </Fragment>
    );
  }
}

export default App;
