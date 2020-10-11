import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to='/'>Home</Link>
                <Link to='/Programs'>Programs</Link>
            </div>

        )
    }
}

export default NavBar;