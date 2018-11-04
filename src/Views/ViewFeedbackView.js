import React, {Component} from 'react';
import moment from 'moment';
import '../styles/Forms.css';
import '../styles/Main.css';
import '../styles/AnnouncementsView.css';
import {fetchFeedback} from "../API/APIHandler";

class FeedbackView extends Component {

    state = {
        renderFeedback: []
    };

    componentDidMount() {
        fetchFeedback().then((data) => {
            data.sort((a, b) => {
                return b.createdAt - a.createdAt;
            });
            this.setState({renderFeedback: data});
        })
    }

    _renderFeedback = (feedback, index) => {
        console.log(feedback);
        return (
            <div className="announcement-container" style={{width:'50vw'}} key={index}>
                <div className="announcement-title">
                    {feedback.email}
                </div>
                <div className="announcement-body" style={{textAlign:'start'}}>
                    {feedback.feedback}
                </div>
                <div className="announcement-footer">
                    Created {moment(feedback.createdAt).fromNow()}
                </div>
            </div>
        )
    };

    render() {
        let renderFeedback = this.state.renderFeedback.map((feedback, index) => {
            return this._renderFeedback(feedback, index);
        });
        return (
            <div style={{display: 'flex', flex: 1, flexDirection:'column', alignItems:'center'}}>
                <h2>Feedback</h2>
                {renderFeedback}
            </div>
        );
    }
}

export default FeedbackView;
