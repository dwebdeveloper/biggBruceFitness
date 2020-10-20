import React, { Component } from 'react';
import PageLink from '../Components/pagelinks/PageLinks';
import Registration from '../Components/registrationform/RegistrationForm';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attendees: []
        }
    }

    addAttendees = (attendee) => {
        this.setState((state, props) => ({
            attendees: [...state.attendees, attendee]
        }))
    }

    render() {
        return (
            <div className="Home">
                <PageLink />
                <Registration addAttendees={this.addAttendees} />
            </div>
        );
    }
}

export default Home;