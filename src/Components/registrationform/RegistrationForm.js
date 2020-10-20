import React, { Component } from 'react';
import '../registrationform/RegistrationForm.css'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attendee: {
                name: '',
                lastName: '',
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
                name: '',
                lastName: '',
                email: ''
            }

        })
    }

    render() {
        return (
            <div className='RegistrationForm'>



                <form
                    className='Container'
                    onSubmit={this.handleSubmit}
                >
                    <div>
                        <h1>Big Bruce Fitness</h1>
                        <p>Get the latest videos and updates on workout programs</p>
                    </div>

                    <input
                        name='name'
                        type='name'
                        placeholder='First Name'
                        value={this.state.attendee.name}
                        onChange={this.handleChange}
                    /><br />
                    <input
                        name='lastName'
                        type='lastName'
                        placeholder='Last Name'
                        value={this.state.attendee.lastName}
                        onChange={this.handleChange}

                    /><br />
                    <input
                        name='email'
                        placeholder='Email'
                        type='email'
                        value={this.state.attendee.email}
                        onChange={this.handleChange}

                    /><br />

                    <button>Submit</button>

                </form>

            </div>

        )
    }
}

export default RegistrationForm;