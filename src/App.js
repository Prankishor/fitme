import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

//pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Workouts from './pages/Workouts';
import Aboutus from './pages/Aboutus';
import Cart from './pages/Cart';
import Navbar from './pages/components/Navbar';
import Details from './pages/Details';
import heroimage from './images/main.jpg';

//Auth
import { jwtDecode } from "jwt-decode"

function App() {

  const [user, setUser] = useState(false)
  function handleCallbackResponse(response) {
    //console.log("Encoded JWT ID token: " + response.credential)
    let userObject = jwtDecode(response.credential)
    console.log(userObject)
    if (userObject) {
      setUser(true)
    }

  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "682949664941-6ksfl4htkfpdffttv8k8svcu0k409amv.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, [])


  if (user === true) {
    { console.log(user) }
    return (
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/details' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }

  else {
    return (
      <div className='home_container'>
        <div className='home_left'>
          <div className='hero_line'>
            <h1 className='tagline'> GET FIT WITH FITME </h1>
            <h1 className='tagdesc'>Having issues with weightloss and overeating? Trying to get fit? Looking for guidance? <br></br>FitMe is here to help you achieve your dream physique.</h1>
          </div>
          <div className='btns'>
            <div id="signInDiv"></div>
          </div>
        </div>
        <div className='hero_image'>
          <img src={heroimage} alt='Banner' loading='lazy' />
        </div>
      </div >
    )
  }

}

export default App;
