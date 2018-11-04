import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FeedbackView from './Views/CreateFeedbackView';
import ViewFeedbackView from './Views/ViewFeedbackView';
import AnnouncementsView from './Views/AnnouncementsView';
import RootPage from './Views/RootPage';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootPage}/>
                    <Route path="/feedback" component={FeedbackView}/>
                    <Route path="/announcements" component={AnnouncementsView}/>
                    <Route path="/viewfeedback" component={ViewFeedbackView}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
