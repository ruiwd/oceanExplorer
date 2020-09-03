import React, {Component, Fragment} from 'react';
import waves from '../assets/waves.png';

class Note extends Component {
    dive = () => {
        document.querySelector('.waveTransition').innerHTML=`<div class='fade'></div><img src=${waves} alt="Page transition"/>`;

        setTimeout(function() {
            document.querySelector('.oceanBG').style.display = "block";
            document.querySelector('.beach').style.display = "none";
            document.querySelector('.note').style.display = "none";
            document.querySelector('.bubbles').classList.toggle('show');
            document.querySelector('.cursor').classList.toggle('show');
        }, 2000)

        setTimeout(function() {
            document.querySelector('.waveTransition').innerHTML=``;
        }, 3000)
    }

    noDive = () => {
        document.querySelector('.note.show').classList.remove('show');
        document.querySelector('.bottle.zoomed').classList.remove('zoomed');
    }

    render() {
        return (
            <Fragment>
                <div className="note">
                    <div className="text">                        
                        <h2>Explore the depths with me!</h2>
                        <div className="options">
                            <h3 className="yes" onClick={this.dive}>Okay!</h3>
                            <h3 className="no" onClick={this.noDive}>Nah...</h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Note;