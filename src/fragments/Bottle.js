import React, {Component, Fragment} from 'react';
import bottle from '../assets/bottle.png';

class Beach extends Component {
    clickBottle = () => {
        if (document.querySelector('.bottle').classList.contains('zoomed')) {
            document.querySelector('.note').classList.add('show')
        } else {
            document.querySelector('.bottle').classList.add('zoomed');
        }
    }

    render() {
        return (
            <Fragment>
                <div className="beach">
                    <div className="bottle" onClick={this.clickBottle}>
                        <img src={bottle} alt="Message in a bottle"/>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Beach;