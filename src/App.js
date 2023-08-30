import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';
import ProductListing from './components/common/ProductListing/ProductListing';
import SingleProductPage from './components/common/SingleProductPage/SingleProductPage';
import MarketingPage from './components/pages/MarketingPage/MarketingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/shop'/>
          <Route element={<MarketingPage/>} path='/'/>

          <Route element={<ProductListing/>} path='/productlists'/>
          <Route element={<SingleProductPage/>} path='/singleproductpage'/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
