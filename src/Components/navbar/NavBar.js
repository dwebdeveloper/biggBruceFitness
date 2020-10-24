import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';
import BigBruceLogo from '../../assets/images/BigBruceLogo.png';







class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className='Containerimg'>
                    <img className='BigBruceLogo' src={BigBruceLogo} alt='Big Bruce' />
                </div>


                <ul className="Nav-Links">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/programs'>Programs</Link></li>
                    <li><Link to='/aboutbigbrucefitness'>About Big Bruce Fitness</Link></li>

                </ul>
            </div>

        )
    }
}

export default NavBar;