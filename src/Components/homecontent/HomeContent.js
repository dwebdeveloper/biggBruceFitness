import React, { Component } from 'react';
import RegistrationForm from '../../Components/registrationform/RegistrationForm';
import './HomeContent.css'
//Below imported Images
import MealPlan from '../../assets/images/mealPlan.png';
import Live from '../../assets/images/Live.png';
import Abs from '../../assets/images/Abs.jpg';

//import antd below
/*import { Layout } from "antd";
const { Content } = Layout;*/

class HomeContent extends Component {
    render() {
        return (
            <div className='HomeContent'>

                <h2
                    className='HomeHeader'
                >
                    workout programs to reach your goal
                </h2>

                <div className='MealPlan'>

                    <img className='MealPlanImg' src={MealPlan} alt='MealPlan' />

                    <p className='MealPlanContent'>
                        <h2 className='MealPlanTitle'>
                            Personalized meal plans
                        </h2>

                            Made specifically towards your own personal nutritional needs. It all starts in the kitchen. Doing weekly weigh-ins and adjusting your meal plan as needed.

                    </p>

                </div>


                <div className='Live'>
                    <img className='LiveImg' src={Live} alt='LiveWorkout' />


                    <p className='LiveContent'>
                        <h2 className='LiveTitle'>
                            Shred Formula X (Live)
                        </h2>
                        Follow along workouts performed on a separate private Instagram account live from the comforts of your own home. Class schedule is Monday-Friday 6pm.
                    </p>
                </div>

                <div className='ShredProgram'>
                    <img className='ShredImg' src={Abs} alt='RashadAbs' />
                    <p className='ShredContent'>
                        <h2 className='ShredTitle'>
                            Shred Formula 2.0
                        </h2>
                        12 week program delievers the shredded results you have been dying for. combination of Circuit/HIIT based sessions. a serious edge when it comes to fat loss!
                    </p>
                </div>

                <div className='Consultation'>

                    <p className='ConsultationContent'>
                        <h2 className='ConsultationTitle'>
                            Free Consultation
                        </h2>
                        Fitness goals - nutritional goals - life goals. Lets talk and design the right program for you.
                        <a href={RegistrationForm} className='LetsBegin'>LETS BEGIN</a>

                    </p>
                </div>

            </div >
        )
    }
}
export default HomeContent;