import React from 'react';
import '../../Styles/start.css';
import trainer from '../../Assets/img/trainer.png';

const Start = () => {
  return <section id='classes'>
    <div className='container'>
        <div className='start_wrapper'>
            <div className='box-04'>
                <div className='box-05'>
                    <div className='box-06'>
                        <div className='start_img'>
                            <img src={trainer} alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='start_content'>
                <h2 className='title'>Ready to make a change?</h2>
                <p>
                Welcome to <span>FitHub</span> Gym, where your fitness journey begins! Step inside our vibrant community dedicated to helping you achieve your health and wellness goals. Get ready to experience a welcoming atmosphere, state-of-the-art facilities, and expert guidance on your path to a healthier, stronger you. Let's embark on this journey together!
                </p>

                <button className='register_btn'>Get Started</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start;