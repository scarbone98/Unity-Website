import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Root.css';

class RootPage extends Component {
    render() {
        return (
            <div>
                <h1>MINT</h1>
                <div className="links-container" style={{display: 'flex', flexDirection: 'column'}}>
                    <Link to="/feedback" style={{margin: 5}}>Add Feedback</Link>
                    <Link to="/announcements" style={{margin: 5}}>Create Announcement</Link>
                    <Link to="/viewfeedback" style={{margin: 5}}>View Feedback</Link>
                </div>
            </div>
        );
    }
}

export default RootPage;
