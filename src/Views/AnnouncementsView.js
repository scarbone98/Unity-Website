import React, {Component} from 'react';
import moment from 'moment';
import '../styles/AnnouncementsView.css';
import '../styles/Forms.css';
import '../styles/Main.css';
import {addAnnouncement, deleteAnnouncement, fetchAnnouncements} from '../API/APIHandler';

class AnnouncementsView extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            title: '',
            description: '',
            loading: false,
            recentAnnouncements: []
        };
        this.state = {...this.initialState};
    }

    _handleTitleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    _handleDescriptionChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    _validateInput = () => {
        this.setState({loading: true});
        addAnnouncement({title: this.state.title, description: this.state.description, createdAt: moment().valueOf()}).then(() => {
            alert('Successfully created announcement');
            this.setState({loading: false});
        }).catch(e => {
            alert(e.message);
            this.setState({loading: false});
        });
    };

    _renderAnnouncement = (announcement, index) => {
        return (
            <div className="announcement-container">
                <div className="announcement-title">
                    {announcement.title}
                </div>
                <div className="announcement-body">
                    {announcement.description}
                </div>
                <div className="announcement-footer">
                    Created {moment(announcement.createdAt).fromNow()}
                </div>
            </div>
        )
    };

    componentDidMount(){
        this.setState({loading: true});
        fetchAnnouncements().then((data)=>{
            this.setState({recentAnnouncements: data});
        }).catch((e)=>{
            alert(e.message);
        }).finally(()=>{
            this.setState({loading: false});
        })
    }

    render() {
        let renderAnnouncements = this.state.recentAnnouncements.map((announcement, index) => {
            return this._renderAnnouncement(announcement, index);
        });
        return (
            <div style={{display: 'flex', alignItems: 'center', marginTop: 50, flexDirection:'column'}}>
                <h1>Create Announcement</h1>
                <div className="Form-Container">
                    <div>
                        <p>Title</p>
                        <input name="title" autoComplete="off" maxLength={50} onChange={this._handleTitleChange}
                               className={this.state.emailError ? 'error' : ''}/>
                    </div>
                    <div>
                        <p>Description</p>
                        <textarea maxLength={this.maxCharacterCount} onChange={this._handleDescriptionChange}
                                  name="description" className={this.state.textAreaError ? 'error' : ''}/>
                    </div>
                    <div
                        style={{flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <button onClick={this._validateInput}
                                disabled={this.state.loading}>Submit
                        </button>
                    </div>
                </div>
                <div>
                    {renderAnnouncements}
                </div>
            </div>
        );
    }
}

export default AnnouncementsView;
