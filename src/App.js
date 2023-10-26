import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nutrition from './pages/Nutrition';
import Workouts from './pages/Workouts';
import Aboutus from './pages/Aboutus';

import Navbar from './pages/components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
