import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Workouts from './pages/Workouts';
import Aboutus from './pages/Aboutus';
import Cart from './pages/Cart';
import Navbar from './pages/components/Navbar';
import Details from './pages/Details';

function App() {
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

export default App;
