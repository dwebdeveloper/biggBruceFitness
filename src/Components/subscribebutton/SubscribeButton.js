import React, { Component } from 'react';
import '../subscribebutton/SubscribeButton.css'

class SubscribeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attendee: {
                email: ''
            }
        }
    }

    handleChange = (event) => {
        const { attendee } = { ...this.state };
        attendee[event.target.name] = event.target.value
        this.setState({
            attendee
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAttendees({ ...this.state.attendee })
        this.setState({
            attendee: {
                email: ''
            }

        })
    }

    render() {
        return (

            <form
                class='ScrollContainer'
                onSubmit={this.handleSubmit}
            >
                <button className='LetsBegin'>Subscribe</button>

                <input
                    class='Input'
                    name='email'
                    placeholder='Email'
                    type='email'
                    value={this.state.attendee.email}
                    onChange={this.handleChange}

                />


            </form>


        )
    }
}

export default SubscribeButton;