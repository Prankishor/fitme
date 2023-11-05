import heroimage from '../images/main.jpg';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Home = () => {
    const form = useRef();
    const notify = () => toast("Message Sent!");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_btmyjr9', 'template_gj2o03d', form.current, '7aL6LFVluF5YQLFVw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>
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
                    <img src={heroimage} alt='Banner' loading='lazy' />
                </div>
            </div >

            <div className='know_more_container' id='know'>
                <div className='content_title'>
                    <h1>Know More</h1>
                </div>
                <div>
                    <p className='know_more_content'>"Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and reduce your risk for some cancers."
                        <br></br><br></br>
                        The aforementioned paragraph is just a fraction of benefits that you get while maintaining a healthy lifestyle.
                        But we understand that it is not always easy to balance all the aspects of life. While chasing career specially, it becomes hard to track your diet, to go for a run, to go for a workout session while all the other work keeps knocking at your head.
                        <br></br><br></br>
                        But there is always a way out. And we are there to help you find that way.
                        <br></br><br></br>
                        FitMe is an initiative to help individuals who are stuck with their busy
                        schedules and are finding it hard to maintain a healthy lifestyle. Being healthy or fit doesn't always need you to go to a gym, or to track calories of all the things you eat.
                        <br></br><br></br>
                        To join our program, register yourself in the "Chat" section.

                    </p>
                </div>
            </div>
            <div className='chat_container' id='chat'>
                <div className='chat_title'>
                    <h1>Chat</h1>
                </div>

                <div className='chat_box'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input className='sendbtn' type="submit" value="Send" onClick={notify} />
                        <ToastContainer />
                    </form>
                </div>
            </div>

            <div className='footer'>
                <div className='footer_content'>
                    <p>Powered By React</p>
                    <p>Developed By Prankishore Talukdar</p>
                    <p>v1.0</p>
                </div>
            </div>
        </>
    )
}

export default Home
