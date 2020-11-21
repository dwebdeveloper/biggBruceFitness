import React, { Component } from 'react';
import '../Pages/About.css'
import BBF from '../assets/images/BBF1.jpg';
/*import Rashad from '../assets/images/Rashad.jpg';*/


class About extends Component {
    render() {
        return (
            <div className='AboutContainer'>
                <img className='AboutImg' src={BBF} alt='Rashad' />

                <p className='AboutMe'>
                    <h1 className='RashadName'>RASHAD AKA BIGG BRUCE</h1>
                    I am NASM certified personal trainer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab laboriosam deserunt? Quia pariatur placeat atque nesciunt soluta totam, aliquid voluptatibus repudiandae, ab at vitae! Ex labore aliquid impedit enim!
                </p>
            </div>
        )
    };
}

export default About;