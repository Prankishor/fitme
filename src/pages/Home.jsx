import React, { useEffect } from 'react'
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse fuga quas! Iusto laboriosam consequuntur, aliquam blanditiis iure quia illum quae atque aut illo in, a libero quod! Quos, eius.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, inventore. Ratione accusantium illo reiciendis fugiat tenetur, officia sed nesciunt, possimus modi maxime error nihil necessitatibus molestiae et! Sequi, libero reiciendis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis aliquam qui rem et nisi! Voluptatum quia labore, numquam aperiam ab, ducimus, nesciunt tempore facere incidunt rerum quos expedita repellat.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptates ad fugiat exercitationem voluptatum. Architecto aliquam, culpa expedita quas quos provident a, omnis facilis, dolor consectetur ab quidem sequi delectus!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique itaque unde inventore consequuntur nostrum labore ut totam a odit explicabo veniam pariatur vero fugit accusantium fugiat ea et, non fuga!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit, exercitationem quis ea fugiat neque, expedita eligendi rerum unde animi repellat ab maxime? Dicta corrupti esse modi quos harum fugiat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores culpa numquam repudiandae in, provident, quis repellendus dolore quae ullam voluptatem quasi unde cupiditate rem nam, accusamus consequuntur nobis beatae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur voluptatibus velit, sed eius eaque, suscipit pariatur cupiditate deserunt quidem quis inventore error ullam quisquam. Sint saepe optio incidunt praesentium!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, quae nemo natus, sit velit nam ut voluptatibus eveniet porro expedita deleniti ipsum. Molestiae aperiam necessitatibus minima illo sequi. Natus, est
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iure pariatur molestiae, voluptate sunt aperiam accusamus voluptatum ipsam dolores, consectetur ipsum corrupti ex facere, modi alias inventore ratione voluptatem. Voluptate!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam quis ullam, delectus, totam dignissimos molestias repellendus officiis distinctio vero hic? Commodi fuga ad, odio at perferendis deleniti ratione corrupti!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid cupiditate maiores, quaerat iure cumque architecto illo omnis, consequatur eum harum quod deserunt magni eligendi eaque. Minima asperiores veniam pariatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus laudantium dolorem molestiae consectetur perspiciatis qui velit unde voluptates accusantium cumque veritatis adipisci expedita dolores officia ut, sequi porro in!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque tempore animi, eum tempora dolorem maxime et quos, cumque veniam debitis omnis repudiandae voluptate? Voluptatem ab illum suscipit voluptas? Repudiandae, quas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, assumenda aspernatur! Optio, nihil minima omnis quaerat, veniam dignissimos ut aliquam, consequuntur ipsum ratione incidunt excepturi enim mollitia deserunt asperiores esse.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus magni adipisci autem animi dolorem sit consequatur praesentium consequuntur accusantium tempore ducimus modi sapiente quis, necessitatibus laborum dolor iure?</p>
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
