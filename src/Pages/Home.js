import React, { Component } from 'react';
import '../Pages/Home.css'
import VideoHeader from '../Components/videoheader/VideoHeader';
import HomeContent from '../Components/homecontent/HomeContent';
import Registration from '../Components/registrationform/RegistrationForm';
//import antd below

class Home extends Component {
    constructor(props) {
        super(props);
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
                <VideoHeader />
                <Registration addAttendees={this.addAttendees} />

                <HomeContent />

            </div >
        );
    }
}

export default Home;