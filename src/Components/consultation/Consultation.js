import React, { Component } from 'react';
import '../consultation/Consultation.css';

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
            </div>
        )

    }
}

export default Consultation;