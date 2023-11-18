import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Exercises from './Components/UI/Exercises';
import Hero from './Components/UI/Hero';
import Pricing from './Components/UI/Pricing';
import Start from './Components/UI/Start';
import Testimonials from './Components/UI/Testimonials';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
  <>
  <Header/>
  <Hero/>
  <Exercises/>
  <Start/>
  <Pricing/>
  <Testimonials />
  <Footer/>
  </>
  );
}

export default App;
