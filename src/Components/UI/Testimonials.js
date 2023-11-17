import React from 'react';
import '../../Styles/testimonials.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import trainer01 from '../../Assets/img/trainer-01.png';
import trainer02 from '../../Assets/img/trainer-02.png';
import trainer03 from '../../Assets/img/trainer-03.png';
import trainer04 from '../../Assets/img/trainer-04.png';
import trainer05 from '../../Assets/img/trainer-05.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <>
        <section>
            <div className='staff'>
                <h2>Our <span>Customer Service</span> Team</h2>
            </div>
            <div className='container sliders'>
                <Swiper
                    navigation={true} 
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide> 
                        <div className='wave_header'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.45" d="M0,160L80,176C160,192,320,224,480,240C640,256,800,256,960,224C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                        </div>     
                        
                        <div className='slide_item-01'> 
                                 
                            <div className='slide_img-01'>
                                <img src={trainer01} alt=''/>
                            </div>   
                        
                            <div className='slide_content'>
                                <h3>Olivia Bennett</h3>
                                <h4>Expert Fitness Trainer</h4>
                                <p>
                                Our team of expert trainers at FitHub is dedicated to guiding you through your fitness journey, offering personalized advice and motivation to help you achieve your goals.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className='wave_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.45" d="M0,256L60,245.3C120,235,240,213,360,192C480,171,600,149,720,133.3C840,117,960,107,1080,133.3C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                        </div>     

                        <div className='slide_item-02'>               
                            <div className='slide_img-02'>
                                <img src={trainer02} alt=''/>
                            </div> 

                            <div className='slide_content'>
                                <h3>Emma Thompson</h3>
                                <h4>Passionate Instructor</h4>
                                <p>
                                Meet our passionate group of fitness instructors who bring energy and enthusiasm to every class. Whether it's a high-intensity workout or a calming yoga session, they are committed to making your experience enjoyable.
                                </p>
                            </div>  
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='wave_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.45" d="M0,96L30,85.3C60,75,120,53,180,48C240,43,300,53,360,90.7C420,128,480,192,540,218.7C600,245,660,235,720,234.7C780,235,840,245,900,250.7C960,256,1020,256,1080,234.7C1140,213,1200,171,1260,144C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                        </div>  

                        <div className='slide_item-03'>               
                            <div className='slide_img-03'>
                                <img src={trainer03} alt=''/>
                            </div>

                            <div className='slide_content'>
                                <h3>Ava Williams</h3>
                                <h4>Nutrition Specialist</h4>
                                <p>
                                At FitHub, we don't just focus on physical fitness. Our wellness experts are available to provide advice on nutrition, recovery, and overall well-being, ensuring a holistic approach to your health.
                                </p>
                            </div>     
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='wave_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.45" d="M0,64L40,90.7C80,117,160,171,240,181.3C320,192,400,160,480,128C560,96,640,64,720,48C800,32,880,32,960,48C1040,64,1120,96,1200,133.3C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                        </div>

                        <div className='slide_item-04'>               
                            <div className='slide_img-04'>
                                <img src={trainer04} alt=''/>
                            </div>  

                            <div className='slide_content'>
                                <h3>Sophia Mitchell</h3>
                                <h4>Personal Trainer</h4>
                                <p>
                                Need that extra push? Our certified personal trainers are available to create customized workout plans, offer one-on-one coaching, and ensure you get the most out of every session.
                                </p>
                            </div>      
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='wave_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.45" d="M0,0L60,32C120,64,240,128,360,176C480,224,600,256,720,266.7C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                        </div> 

                        <div className='slide_item-05'>               
                            <div className='slide_img-05'>
                                <img src={trainer05} alt=''/>
                            </div>  

                            <div className='slide_content'>
                                <h3>Isabella Turner</h3>
                                <h4>Motivational Coache</h4>
                                <p>
                                Beyond physical training, our motivational coaches are here to inspire and uplift you. Discover the team that believes in the power of a positive mindset on your fitness journey.
                                </p>
                            </div>       
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
  );
}


