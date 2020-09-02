import React, {Component, Fragment} from 'react';
import Bottle from './Bottle';
import Note from './Note';
// import Wave from './Wave';

class Beach extends Component {
    render() {
        return (
            <Fragment>
                <div className="beach">
                    <h2>Hey look!<br/>A message in a bottle!</h2>
                    <Bottle />
                    {/* <Wave /> */}
                </div>

                <Note />
            </Fragment>
        )
    }
};

export default Beach;