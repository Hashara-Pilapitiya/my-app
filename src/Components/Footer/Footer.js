import React from 'react';
import '../../Styles/footer.css';
import logo from '../../Assets/img/image.avif';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const year = new Date().getFullYear()

const Footer = () => {
  return <footer className='footer'>
    <div className='container'>
        <div className='footer_wrapper'>

            <div className='footer_box'>
                <div className='logo'>
                    <div className='logo_img'>
                        <img src={ logo } alt=''/>
                    </div>
                    <h2>FitHub</h2>
                </div>
                
                <ul className='contacts'>
                    <li>
                        <span><CiLocationOn /></span><p>No,123, Galle Road, Colombo.</p>
                    </li>
                    <li>
                        <span><CiPhone /></span><p>011-3425467</p>
                    </li>
                    <li>
                        <span><CiMail /></span><p>fithub20@gmail.com</p>
                    </li>
                </ul>
                
            </div>

            <div className='footer_box'>
                <h4>Company</h4>
                <ul className='footer_links'>
                    <li>
                        <a href='#'>Our Program</a>
                    </li>
                    <li>
                        <a href='#'>Our Plan</a>
                    </li>
                    <li>
                        <a href='#'>Become a Member</a>
                    </li>
                </ul>
            </div>

            <div className='footer_box'>
                <h4>Quick Links</h4>
                <ul className='footer_links'>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                    <li>
                        <a href='#'>Support</a>
                    </li>
                </ul>
            </div>

            <div className='footer_box'>
                <h4>Social Media Links</h4>
                <ul className='footer_links'>
                    <li>
                        <a href='#'><p>Connect with Us on YouTube</p><span><CiYoutube /></span></a>
                    </li>
                    <li>
                        <a href='#'><p>Visit Our Facebook Page</p><span><CiFacebook /></span></a>
                    </li>
                    <li>
                        <a href='#'><p>Follow Our Instagram for exclusive offers</p><span><CiInstagram /></span></a>
                    </li>
                </ul>
            </div>

            
        </div>

        <p className='copyright'>Copyright - {year} developed by Hashara Pilapitiya. All rights reserved.</p>

    </div>
  </footer>
}

export default Footer;