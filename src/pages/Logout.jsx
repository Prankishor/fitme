import React from 'react'
import heroimage from '../images/main.jpg';

export default function Logout() {
    return (
        <div className='home_container'>
            <div className='home_left'>
                <div className='hero_line'>
                    <h1 className='tagline'> GET FIT WITH FITME </h1>
                    <h1 className='tagdesc'>Having issues with weightloss and overeating? Trying to get fit? Looking for guidance? <br></br>FitMe is here to help you achieve your dream physique.</h1>
                </div>
                <div className='btns'>
                    <div id="signInDiv"></div>
                    <p>You have been logged out.</p>
                </div>
            </div>
            <div className='hero_image'>
                <img src={heroimage} alt='Banner' loading='lazy' />
            </div>
        </div >
    )
}
