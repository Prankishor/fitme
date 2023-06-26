import React from 'react'
import heroimage from '../images/main.jpg';

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_left'>
                <div className='hero_line'>
                    <h1>Having issues with weightloss? Trying to get fit?<br></br> Well, FitMe is here to help you achieve your dream physique.</h1>
                </div>
                <div className='btns'>
                    <button className='chat'>Chat with us</button>
                    <button className='knowmore'>Know More</button>
                </div>
            </div>
            <div className='hero_image'>
                <img src={heroimage} alt='Banner' />
            </div>
        </div >
    )
}

export default Home
