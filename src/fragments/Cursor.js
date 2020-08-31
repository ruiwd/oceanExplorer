import React, {Component, Fragment} from 'react';

class Cursor extends Component {
    componentDidUpdate() {
        const moveCursor = () => {
            const cursor = document.getElementById('cursor');
            let cursorY = this.props.cursorY;
            let cursorX = this.props.cursorX;

            cursor.setAttribute('style', `top:${cursorY}px; left:${cursorX}px`)  
        }
    
        moveCursor()
      }

    render(){
    return(
        <Fragment>
            <div id="cursor" className="cursor">
            </div>
        </Fragment>
    )
}
}

export default Cursor;