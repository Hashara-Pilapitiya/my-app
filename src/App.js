import { useEffect } from 'react';
import './App.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import { Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
 
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
   
    </>

  );
}

export default App;
