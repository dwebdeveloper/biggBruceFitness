import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <ul className="Nav-Links">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/programs'>Programs</Link></li>
                </ul>
            </div>

        )
    }
}

export default NavBar;