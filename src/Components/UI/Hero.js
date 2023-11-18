import React from 'react';
import { FaPlayCircle } from "react-icons/fa";
import hero_img from '../../Assets/img/hero-image.png';
import { FaHeartPulse } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import '../../Styles/hero.css';

const Hero = () => {
  return <section id='home'>
    <div className='container'>
        <div className='hero_wrapper'>

            {/*hero content*/}
            <div className='hero_content'>
                <h2 data-aos = "fade-up" data-aos-duration = "1500">Exercise is crucial for maintaining a <span className='highlight'>Healthy Body</span> composition.</h2>
                <p data-aos = "fade-up" data-aos-duration = "1700">Join <span>FitHub</span> and experience a fusion of fitness and fun, where every <br/> workout is a step towards a healthier and happier you.</p>

                <div className='hero_btn' data-aos = "fade-up" data-aos-duration = "2000">
                    <button className='register_btn'>Get Started</button>
                    <button className='watch_btn'><span><FaPlayCircle /></span>Watch Video</button>
                </div>
            </div>

            {/*hero image*/}
            <div className='hero_img'>
                <div className='hero_img-wrapper'>
                    <div className='box-01'>
                        <div className='box-02'>
                            <div className='box-03'>
                                <div className='box_img'>
                                    <img src={hero_img} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='heart_rate' data-aos = "fade-right" data-aos-duration = "1700">
                        <h5>Heart Rate</h5>
                        <span><FaHeartPulse /></span>
                        <h5>2567 BPM</h5>
                    </div>

                    <div className='gym_location' data-aos = "fade-left" data-aos-duration = "1700">
                        <span><FaLocationDot /></span>
                        <h5>Find a new <br/> gym near you.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero;