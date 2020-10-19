import React, { Component } from 'react';
import Registration from '../Components/registrationform/RegistrationForm';
import image from '../assets/images/step1.jpg'

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
                <img src={image} alt='bakugo' />
                <Registration addAttendees={this.addAttendees} />


            </div>
        )
    }
}

export default Home;