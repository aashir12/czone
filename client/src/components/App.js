import '../App.css';
import Landing from './Landing/landing';
import Card from './card';
import CardCover from './cardCover';
import Cart from './cart';
import Desc from './desc';
import Footer from './footer';
import Gallery from './gallery';
import MidBar from './midBar';
import Search from './search';
import SingleProduct from './singleProduct/singleProduct';
import Stock from './stock';
import TopBar from './topBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
   <>
    <Router>
    <div className='allCover'>
    <TopBar/>
    <MidBar/>
    <Routes>
    <Route path='/' element={<CardCover/>}/>
    <Route path='/single/:id' element={<SingleProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
   

    </div>
    </Router>
   </>
  );
}

export default App;
