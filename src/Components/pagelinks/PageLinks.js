import React, { Component } from 'react';
import image from '../../assets/images/step1.jpg';
import '../pagelinks/PageLinks.css';

class PageLinks extends Component {
    render() {
        return (
            <div className='PageLinks'>
                <img src={image} alt='bakugo' />
            </div>
        )
    }
}
export default PageLinks;
