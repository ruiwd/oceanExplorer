import React, {Component, Fragment} from 'react';
import Beach from './fragments/Beach';
import OceanBG from './fragments/OceanBG';
import Submarine from './fragments/Submarine';
import Bubbles from './fragments/Bubbles';
import './styles/styles.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      cursorX:null,
      cursorY:null,
    }
  }

  componentDidMount() {
    let cursorOldX = 0;

    const setCursorPos = (e) => {
      this.setState({
        cursorX:e.pageX,
        cursorY:e.pageY,
      })
    }
  
    const setCursorDirection = () => {
      if (cursorOldX < this.state.cursorX) {
        console.log('right')
        document.getElementById('submarine').classList.add('faceRight')
      } else if (cursorOldX > this.state.cursorX) {
        console.log('left');
        document.getElementById('submarine').classList.remove('faceRight')
      }
  
      cursorOldX = this.state.cursorX
    }

    document.addEventListener('mousemove', setCursorPos);
    document.addEventListener('mousemove', setCursorDirection);

    const createBubble = () => {
      const bubbles = document.querySelector('.bubbles');
      const spawnBubble = document.createElement('span');
      let size = (Math.random()) * 60;

      spawnBubble.style.width = `${10 + size}px`;
      spawnBubble.style.height = `${10 + size}px`;
      spawnBubble.style.transform = `translateX(-100%)`;
      spawnBubble.style.left = `${Math.random() * window.innerWidth}px`;
      bubbles.appendChild(spawnBubble);

      setTimeout(()=> {spawnBubble.remove()}, 4000)
  }

  setInterval(createBubble, 100)
  }

  render() {
    return (
      <Fragment>
        <Beach />
        <Submarine cursorX={this.state.cursorX} cursorY={this.state.cursorY}/>
        <Bubbles />
        <OceanBG />
      </Fragment>
    );
  }
}

export default App;
