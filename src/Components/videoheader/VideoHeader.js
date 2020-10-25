import React, { Component } from 'react';
import './VideoHeader.css';
import ReactPlayer from "react-player"
import Home from '../../assets/images/Home.jpg'

//Unable to use apply width and height for className: Player. Only as props it works. 
//To do list: Find a way to implement it in css file

class VideoHeader extends Component {
    render() {
        return (
            <div className='VideoHeader'>
                <ReactPlayer className='Player' url='https://www.youtube.com/watch?v=QxvmfTI_dZ8' poster={Home} controls={true} width='100%' height='165%' />
            </div>
        )
    }
}
export default VideoHeader;
