import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cars from './components/Cars';
import Footer from './components/General/Footer';
import Navbar from './components/General/Navbar';
import Home from './components/Home';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cars' element={<Cars/>}/>
   </Routes>
   <Footer/>
   {/* <Home /> */}
   </>
  );
}

export default App;
