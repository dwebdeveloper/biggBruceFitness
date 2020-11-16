import React, { Component } from 'react';
import '../consultation/Consultation.css';
import RegistrationForm from '../../Components/registrationform/RegistrationForm';

class Consultation extends Component {


    render() {
        <div className='Consultation'>

            <p className='ConsultationContent'>
                <h2 className='ConsultationTitle'>
                    Free Consultation
                </h2>
                    Fitness goals - nutritional goals - life goals. Lets talk and design the right program for you.
                <a href={RegistrationForm} className='LetsBegin'>LETS BEGIN</a>

            </p>
        </div>
    }
}

export default Consultation;