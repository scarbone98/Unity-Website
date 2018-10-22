import React, {Component} from 'react';
import moment from 'moment';
import '../styles/Forms.css';
import '../styles/Main.css';
import {addFeedback} from '../API/APIHandler';

class FeedbackView extends Component {

    constructor(props) {
        super(props);
        this.maxCharacterCount = 1000;
        this.initialState = {
            wordCount: 0,
            email: '',
            feedback: '',
            emailError: true,
            textAreaError: true,
            loading: false
        };
        this.state = {...this.initialState};
    }

    _handleEmailChange = (e) => {
        let emailError = !e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.setState({[e.target.name]: e.target.value, emailError});
    };

    _handleTextareaChange = (e) => {
        let textAreaError = e.target.value.length < 10;
        let wordCount = e.target.value.length;
        this.setState({wordCount, [e.target.name]: e.target.value, textAreaError})
    };

    _validateInput = () => {
        if (this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            && this.state.feedback.length > 10) {
            this.setState({loading: true}, () => {
                addFeedback({email: this.state.email, feedback: this.state.feedback, createdAt: moment().valueOf()}).then(() => {
                    alert('Thank you for the feedback!');
                    this.setState({loading: false});
                }).catch((e) => {
                    alert(e.message);
                    this.setState({loading: false});
                });
            });
        }
    };

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, alignItems:'center', flexDirection:'column'}}>
                <h1>Feedback</h1>
                <div className="Form-Container">
                    <div>
                        <p>Email</p>
                        <input name="email" autoComplete="off" maxLength={50} onChange={this._handleEmailChange}
                               className={this.state.emailError ? 'error' : ''}/>
                    </div>
                    <div>
                        <p>Comments</p>
                        <textarea maxLength={this.maxCharacterCount} onChange={this._handleTextareaChange}
                                  name="feedback" className={this.state.textAreaError ? 'error' : ''}/>
                        <span>{this.state.wordCount}/{this.maxCharacterCount}</span>
                    </div>
                    <div style={{flex:1, alignContent:'flex-end', justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <button onClick={this._validateInput}
                                disabled={this.state.emailError || this.state.textAreaError || this.state.loading}>Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedbackView;
