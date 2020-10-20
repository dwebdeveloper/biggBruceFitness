import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
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
        this.props.addAttendee({ ...this.state.attendee })
        this.setState({
            name: '',
            lastName: '',
            email: ''
        })
    }

    render() {
        return (
            <div className='RegistrationForm'>
                <h1>Big Bruce Fitness</h1>

                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        name='name'
                        type='name'
                        placeholder='Name'
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