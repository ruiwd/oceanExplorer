import React, {Component, Fragment} from 'react';

class Submarine extends Component {
    componentDidUpdate() {
        const moveSubmarine = () => {
            const submarine = document.getElementById('submarine');
            let cursorY = this.props.cursorY;
            let cursorX = this.props.cursorX;

            submarine.setAttribute('style', `top:${cursorY}px; left:${cursorX}px`)  
        }
    
        moveSubmarine()
      }

    render(){
    return(
        <Fragment>
            <div id="submarine" className="submarine">
            </div>
        </Fragment>
    )
}
}

export default Submarine;