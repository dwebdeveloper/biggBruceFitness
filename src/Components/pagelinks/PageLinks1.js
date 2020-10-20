import React, { Component } from 'react';
import image from '../../assets/images/BBF2.jpg';
import '../pagelinks/PageLinks.css';

class PageLinks1 extends Component {
    render() {
        return (
            <div className='PageLinks'>
                <a
                    href='http://localhost:3000/home'
                >
                    <img src={image} alt='Big Bruce Fitness' />
                </a>
            </div>
        )
    }
}
export default PageLinks1;