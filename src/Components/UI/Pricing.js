import React from 'react';
import '../../Styles/pricing.css';
import { GoCheckCircleFill } from "react-icons/go";

const Pricing = () => {
  return <section>
    <div className='container'>
        <div className='pricing_top'>
            <h2 className='section_title'>
                Gym <span>Pricing</span> Plan
            </h2>
            <p>
                Elevate your fitness journey with our  personalized training packages.<br/> Our trainers will work with you to create a plan that aligns with your goals and budget.
            </p>
        </div>

        <div className='pricing_wrapper'>
            <div className='pricing_item'>
                <div className='pricing_card-top'>
                    <h2 className='section_title'>Regular Member</h2>
                    <h3>$50 <span>/Month</span></h3>
                </div>

                <div className='services'>
                    <ul>
                        <li><span><GoCheckCircleFill /></span>Unlimited access to the gym</li>
                        <li><span><GoCheckCircleFill /></span>Customer support</li>
                        <li><span><GoCheckCircleFill /></span>Personal trainer</li>
                        <li><span><GoCheckCircleFill /></span>Standard options</li>
                        <li><span><GoCheckCircleFill /></span>5 classes per week</li>
                    </ul>

                    <button className='register_btn'>Join Now</button>
                </div>
            </div>

            <div className='pricing_item pricing_item-02'>
                <div className='pricing_card-top'>
                    <h2 className='section_title'>Permium Member</h2>
                    <h3>$70 <span>/Month</span></h3>
                </div>

                <div className='services'>
                    <ul>
                        <li><span><GoCheckCircleFill /></span>Unlimited access to the gym</li>
                        <li><span><GoCheckCircleFill /></span>Customer support</li>
                        <li><span><GoCheckCircleFill /></span>Personal trainer</li>
                        <li><span><GoCheckCircleFill /></span>Standard options</li>
                        <li><span><GoCheckCircleFill /></span>5 classes per week</li>
                    </ul>

                    <button className='register_btn'>Join Now</button>
                </div>
            </div>

            <div className='pricing_item'>
                <div className='pricing_card-top'>
                    <h2 className='section_title'>Standard Member</h2>
                    <h3>$100 <span>/Month</span></h3>
                </div>

                <div className='services'>
                    <ul>
                        <li><span><GoCheckCircleFill /></span>Unlimited access to the gym</li>
                        <li><span><GoCheckCircleFill /></span>Customer support</li>
                        <li><span><GoCheckCircleFill /></span>Personal trainer</li>
                        <li><span><GoCheckCircleFill /></span>Standard options</li>
                        <li><span><GoCheckCircleFill /></span>5 classes per week</li>
                    </ul>

                    <button className='register_btn'>Join Now</button>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Pricing;