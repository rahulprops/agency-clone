import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Dashboard } from './components/dashboard/Dashboard';
import { Productdetails } from './components/productdetails/Productdetails';
import { Addtocart } from './components/addtocart/Addtocart';

function App() {
  return (
   <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="product-detail/:id" element={<Productdetails/>}/>
        <Route path="cart" element={<Addtocart/>}/>
        <Route path="*" element={<Dashboard/>}/>
      
        
      </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
