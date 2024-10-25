import React,{useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from '../src/components/LoginPopup/LoginPopup'
import Payment from './pages/Payment/Payment';

import Navbar from './components/Navbar/Navbar';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);


  return(
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes className="routes">
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/payment' element={<Payment/>}/>
        {/* <Route path='/problem' element={<Problem/>}/>  */}
        </Routes>
        </div>
        <Footer/>
      </>
  )
}

export default App;