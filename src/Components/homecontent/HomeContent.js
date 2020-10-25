import React, { Component } from 'react';
import './HomeContent.css'
//Below imported Images
import MealPlan from '../../assets/images/mealPlan.png';
import Live from '../../assets/images/Live.png';
import outdoorWorkout from '../../assets/images/outdoorWorkout.jpg';

//import antd below
/*import { Layout } from "antd";
const { Content } = Layout;*/

class HomeContent extends Component {
    render() {
        return (
            <div className='HomeContent'>
                <div className='Mealplan'>
                    <img src={MealPlan} alt='MealPlan' />


                    <p>Get kicked started on your fat loss journey with my personalized meal plan . My meal plan is made specifically for you based on foods you absolutely love and geared towards your own personal fitness/nutritional needs . Whether it be to shred, bulk , get rid of that stubborn belly fat , it all starts in the kitchen . Along with the meal plan , I will also be doing weekly weigh ins with you and adjusting the meal plan as needed (because  when your body changes  so does your diet) free of charge.</p>
                </div>


                <div className='Live'>
                    <img src={Live} alt='MealPlan' />


                    <p>Get kicked started on your fat loss journey with my personalized meal plan . My meal plan is made specifically for you based on foods you absolutely love and geared towards your own personal fitness/nutritional needs . Whether it be to shred, bulk , get rid of that stubborn belly fat , it all starts in the kitchen . Along with the meal plan , I will also be doing weekly weigh ins with you and adjusting the meal plan as needed (because  when your body changes  so does your diet) free of charge.</p>
                </div>

                <div className='Live'>



                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sit quaerat placeat exercitationem nulla beatae vero quam, unde recusandae qui est nesciunt at fuga expedita nemo aliquam laborum molestiae assumenda?</p>
                </div>
                <div>
                    <img src={outdoorWorkout} alt='Rashad' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae aliquid neque ipsa minus velit necessitatibus! Incidunt sapiente tenetur id exercitationem impedit, maiores, debitis dolore, quod accusamus obcaecati libero possimus.</p>
                </div>

            </div >
        )
    }
}
export default HomeContent;