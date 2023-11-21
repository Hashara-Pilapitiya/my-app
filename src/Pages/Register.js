import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SignUpImg from '../Assets/img/signup.png';
import '../Styles/register.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';


const Register = () => {
  return (
    <>
      <Header/>
      <section className='signup' id='register'>
        <div className='container'>
          <div className='signup_content'>
            <h2>Sign Up</h2>
          </div>

          <div className='signup_form'>
            <div className='register_form'>
              <form>

                <div className='form_group'>
                  <label htmlFor='name'>
                    <MdAccountCircle />
                  </label>
                  <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>
                </div>

                <div className='form_group'>
                  <label htmlFor='email'>
                    <MdEmail /> 
                  </label>
                  <input type='email' name='email' id='email' autoComplete='off' placeholder='Your Email'/>
                </div>

                <div className='form_group'>
                  <label htmlFor='phone'>
                    <MdLocalPhone />
                  </label>
                  <input type='number' name='phone' id='phone' autoComplete='off' placeholder='Your Phone Number'/>
                </div>

                <div className='form_group'>
                  <label htmlFor='password'>
                    <RiLockPasswordFill />
                  </label>
                  <input type='password' name='password' id='password' autoComplete='off' placeholder='Your Password'/>
                </div>

                <div className='form_group'>
                  <label htmlFor='cpassword'>
                    <RiLockPasswordFill />
                  </label>
                  <input type='text' name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Your Password'/>
                </div>

                <div className='form_btn'>
                  <button className='register_btn'>Submit</button>
                </div>

              </form>
            </div>

            <div className='signup_img'>
              <img src={SignUpImg} alt=''/>

              <p>
                    <a href='#'>Have Already An Account</a>
              </p>
            </div>

              
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Register;