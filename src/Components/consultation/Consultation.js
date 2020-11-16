import React, { Component } from 'react';
import '../consultation/Consultation.css';
import RegistrationForm from '../../Components/registrationform/RegistrationForm';

class Consultation extends Component {


    render() {
        return (
            <div className='Consultation'>

                <h2 className='ConsultationTitle'>
                    Free Consultation
                </h2>

                <ul className='Goals'>
                    <li>Fitness goals</li>
                    <li>nutritional goals</li>
                    <li>life goals</li>

                </ul>

                <p className='ConsultationContent'>Lets talk and design the right program for you.</p>
                <a href={RegistrationForm} className='LetsBegin'>LETS BEGIN</a>

            </div>
        )

    }
}

export default Consultation;