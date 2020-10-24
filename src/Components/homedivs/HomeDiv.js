import React, { Component } from 'react';
import '../../Components/homedivs/HomeDiv.css'
//Below imported Images
import MealPlan from '../../assets/images/mealPlan.png';
import Live from '../../assets/images/Live.png';

class HomeDiv extends Component {
    render() {
        return (
            <div className='Container'>

                <div className='MealPlanDiv'>
                    <img src={MealPlan} alt='MealPlan' />


                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sit quaerat placeat exercitationem nulla beatae vero quam, unde recusandae qui est nesciunt at fuga expedita nemo aliquam laborum molestiae assumenda?</p>
                </div>

                <div className='Live'>
                    <img src={Live} alt='MealPlan' />


                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sit quaerat placeat exercitationem nulla beatae vero quam, unde recusandae qui est nesciunt at fuga expedita nemo aliquam laborum molestiae assumenda?</p>
                </div>




            </div>
        )
    }
}
export default HomeDiv;