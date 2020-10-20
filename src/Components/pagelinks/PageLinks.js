import React, { Component } from 'react';
import image from '../../assets/images/BBF3.jpg';
import '../pagelinks/PageLinks.css';

class PageLinks extends Component {
    render() {
        return (
            <div className='PageLinks'>
                <img className='Rashadimg' src={image} alt='Big Bruce Fitness' />
            </div>
        )
    }
}
export default PageLinks;
