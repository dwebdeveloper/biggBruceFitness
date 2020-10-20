import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <span className="NavBar">
                <span className='Span'>
                    <img className='Logo' src='https://d3qcjjq30235ix.cloudfront.net/logos/12a08ef7d8077776e01317d91764bb8f.png' alt='logo' />
                </span>


                <ul className="Nav-Links">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/programs'>Programs</Link></li>
                    <li><Link to='/aboutbigbrucefitness'>About Big Bruce Fitness</Link></li>

                </ul>
            </span>

        )
    }
}

export default NavBar;