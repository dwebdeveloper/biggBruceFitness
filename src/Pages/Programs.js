import React, { Component } from 'react';
import '../Pages/Programs.css';

/*import mealPlan from '../../src/assets/images/mealPlan.png';
import gymWorkout from '../../src/assets/images/gymWorkout.png';
import outdoorWorkout from '../../src/assets/images/outdoorWorkout.jpg';
import Abs from '../../src/assets/images/Abs.jpg';
import Live from '../../src/assets/images/Live.png';
import BootCamp from '../../src/assets/images/BootCamp.jpg';
import AbChallenge from '../../src/assets/images/AbChallenge.png';
import Field from '../../src/assets/images/Field.jpeg';*/








class Programs extends Component {
    render() {
        return (
            <div className='Program'>
                <div className='ProgramContainer' >

                    <div className='P One'>
                        <h3 className='PHeader'>
                            Personalized Meal Plans
                        </h3>
                    </div>

                    <div className='P Two'>
                        <h3 className='PHeader'>
                            1 on 1 Virtual Training
                        </h3>
                    </div>

                    <div className='P Three'>
                        <h3 className='PHeader'>
                            VIRTUAL BOOTCAMP
                        </h3>
                    </div>

                    <div className='P Four'>
                        <h3 className='PHeader'>Shred Formula 2.0</h3>
                    </div >

                    <div className='P Five'>
                        <h3 className='PHeader'>
                            Shred Formula (Live)
                        </h3>
                    </div >

                    <div className='P Six'>
                        <h3 className='PHeader'>
                            BOOTCAMP
                        </h3>
                    </div  >

                    <div className='P Seven'>
                        <h3 className='PHeader'>30 Day ab Challenge</h3>
                    </div>

                    <div className='P Eight'>
                        <h3 className='PHeader'>Shred Szn Weight Loss Challenge</h3>
                    </div>

                </div>
            </div >



        )
    };
}

export default Programs;