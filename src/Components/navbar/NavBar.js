import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';
import BigBruce from '../../assets/images/biggsolo.png';







class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">

                <div className='TopHeader'>
                    <h1 className='LogoName'>Bigg Bruce Fitness</h1>
                </div>

                <div className='MidHeader'>
                    <img className='MidHeaderImg' src={BigBruce} alt='Rashad' />
                </div>



                <div className='NavHeader'>
                    <ul className="Nav-Links">

                        <li className='Links'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='Links'>
                            <Link to='/programs'>Programs</Link></li>
                        <li className='Links'>
                            <Link to='/aboutbigbrucefitness'>About</Link>
                        </li>

                    </ul>
                </div>

            </div>

        )
    }
}

export default NavBar;