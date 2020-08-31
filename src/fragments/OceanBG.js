import React, {Component, Fragment} from 'react';
import Cursor from './Cursor';
import Bubbles from './Bubbles';

class OceanBG extends Component {   
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
            document.querySelector('.cursor').classList.add('faceRight')
          } else if (cursorOldX > this.state.cursorX) {
            console.log('left');
            document.querySelector('.cursor').classList.remove('faceRight')
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

        toggleCursor = () => {
            document.querySelector('.cursor').classList.toggle('show');
            document.querySelector('.toggleCursor').classList.toggle('strikethrough');
        }

        toggleBubbles = () => {
            document.querySelector('.bubbles').classList.toggle('show');
            document.querySelector('.toggleBubbles').classList.toggle('strikethrough');
        }

    render() {
        return (
            <Fragment>
                <Cursor cursorX={this.state.cursorX} cursorY={this.state.cursorY}/>
                <Bubbles />
                <div className="oceanBG">
                    <div className="buttons">
                        <div className="button toggleCursor" onClick={this.toggleCursor}>Cursor</div>
                        <div className="button toggleBubbles" onClick={this.toggleBubbles}>Bubbles</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default OceanBG;