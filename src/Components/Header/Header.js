import React from 'react';
import "../../Styles/header.css";
import logo from '../../Assets/img/image.avif';
import { FaBars } from "react-icons/fa6";

const nav_links = [
    {
        path: '#',
        display: 'Home'
    },
    {
        path: '#',
        display: 'Schedule'
    },
    {
        path: '#',
        display: 'Classes'
    },
    {
        path: '#',
        display: 'Pricing'
    }
]

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='nav_wrapper'>

                {/*logo*/}
                <div className='logo'>
                    <div className='logo_img'>
                        <img src={ logo } alt=''/>
                    </div>
                    <h2>FitHub</h2>

                </div>

                {/*menu-section*/}
                <div className='navigation'>
                    <ul className='menu'>
                        {
                            nav_links.map(item => (
                                <li className='nav_item'><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/*nav-right*/}
                <div className='nav_right'>
                    <button className='register_btn'>Register</button>
                    <span className='mobile_menu'><FaBars /></span>
                </div>
            </div>
        </div>    
    </header>
  );
}

export default Header;