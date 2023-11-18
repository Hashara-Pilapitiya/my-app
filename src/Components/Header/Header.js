import React, {useEffect, useRef} from 'react';
import "../../Styles/header.css";
import logo from '../../Assets/img/image.avif';
import { FaBars } from "react-icons/fa6";

const nav_links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#schedule',
        display: 'Schedule'
    },
    {
        path: '#classes',
        display: 'Classes'
    },
    {
        path: '#pricing-plan',
        display: 'Pricing'
    }
]

const Header = () => {

  const headerRef = useRef(null)

  const headerFunc = ()=> {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky_header')
    }else{
        headerRef.current.classList.remove('sticky_header')
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);


return (
    <header className='header' ref={headerRef}>
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