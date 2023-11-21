import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/UI/Hero';
import Exercises from '../Components/UI/Exercises';
import Start from '../Components/UI/Start';
import Pricing from '../Components/UI/Pricing';
import Testimonials from '../Components/UI/Testimonials';
import Footer from '../Components/Footer/Footer';



const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Exercises/>
      <Start/>
      <Pricing/>
      <Testimonials/>
      <Footer/>

    </div>
  )
};

export default Home;