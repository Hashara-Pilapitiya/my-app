import React from 'react';
import Header from '../Components/Header/Header';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SignInImg from '../Assets/img/signin.png';
import '../Styles/signin.css';
import Footer from '../Components/Footer/Footer';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <>
    <Header/>
      <section className='signin'>
        <div className='container'>
          <div className='signin_content'>
            <h2>Sign In</h2>
          </div>

          

          <div className='signin_form'>
            <div className='sign_form'>
              <form>

                <div className='form1_group'>
                  <label htmlFor='email'>
                    <MdEmail /> 
                  </label>
                  <input type='email' name='email' id='email' autoComplete='off' placeholder='Your Email'/>
                </div>

                <div className='form1_group'>
                  <label htmlFor='password'>
                    <RiLockPasswordFill />
                  </label>
                  <input type='password' name='password' id='password' autoComplete='off' placeholder='Your Password'/>
                </div>

                <div className='form_btn'>
                  <button className='register_btn'>LogIn</button>
                </div>

                <div className='links'>
                    <div className='title'>
                        <p>OR Login With</p>
                    </div>

                    <div className='media'>
                    <a href='#'><span className='facebook'><FaFacebookF /></span></a>
                    <a href='#'><span className='twitter'><FaTwitter /></span></a>
                    <a href='#'><span className='google'><FaGoogle /></span></a>
                    </div>
                </div>

              </form>
            </div>

            <div className='signin_img'>
              <img src={SignInImg} alt=''/>

              <p>
                    <a href='#'>Create An Account</a>
              </p>

            </div>

        </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default SignIn;