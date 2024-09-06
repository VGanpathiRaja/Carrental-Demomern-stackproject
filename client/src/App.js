import './App.css';
import Menubar from './Components/Menubar';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
function App() {
  return (
    <div>
        <Menubar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
