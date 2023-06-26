import React from 'react'
import heroimage from '../images/main.jpg';

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_left'>
                <div className='hero_line'>
                    <h1 className='tagline'> GET FIT WITH FITME </h1>
                    <h1 className='tagdesc'>Having issues with weightloss and overeating? Trying to get fit? Looking for guidance? <br></br>FitMe is here to help you achieve your dream physique.</h1>
                </div>
                <div className='btns'>
                    <a href="#chat"><button className='chat'>Chat with us</button></a>
                    <a href="#know"><button className='knowmore'>Know More</button></a>
                </div>
            </div>
            <div className='hero_image'>
                <img src={heroimage} alt='Banner' />
            </div>
        </div >
    )
}

export default Home
