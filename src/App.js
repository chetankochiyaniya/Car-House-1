import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCars from './components/Cars/AllCars';
import CardDetails from './components/Cars/CarDetails';
import Contact from './components/Contact';
import Footer from './components/General/Footer';
import Navbar from './components/General/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<AllCars />} />
        <Route path='/car-details' element={<CardDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Home /> */}
    </>
  );
}

export default App;
