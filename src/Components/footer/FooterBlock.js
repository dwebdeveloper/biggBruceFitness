import React, { Component } from 'react';
import '../footer/FooterBlock.css';

import Face from '../../assets/images/Face.png';
import Twitter from '../../assets/images/Twitter.png';
import Instagram from '../../assets/images/Instagram.png';
import Youtube from '../../assets/images/Youtube.png';




class FooterBlock extends Component {
    render() {
        return (
            <div className='Footer' >
                <div className='ScrollUP'>
                    <button className='ScrollButton'>BACK TO TOP</button>
                </div>
                <div className='SocialMediaContainers'>
                    <a href="https://www.facebook.com/BigBruce908"><img className='Face' alt='Twitter' src={Face} /></a>
                    <a href=""><img className='Twitter' src={Twitter} /></a>
                    <a href="https://www.instagram.com/shredseasonlive/?hl=en" target='_blank'><img alt='Instagram' className='Instagram' src={Instagram} /></a>
                    <a href="https://www.youtube.com/channel/UCtkkzqzbGP7BLZiVrBTPvQw" target='_blank'><img alt='Youtube' className='Youtube' src={Youtube} /></a>
                </div>
            </div>



        )
    }
}

export default FooterBlock;