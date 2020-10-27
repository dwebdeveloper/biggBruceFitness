import React, { Component } from 'react';
import '../Pages/Home.css'
import VideoHeader from '../Components/videoheader/VideoHeader';
import HomeDiv from '../Components/homediv/HomeDiv';
import HomeContent from '../Components/homecontent/HomeContent';
import Footer from '../Components/footer/FooterBlock';

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
                <HomeDiv />
                <HomeContent />
                <Footer />
            </div >
        );
    }
}

export default Home;