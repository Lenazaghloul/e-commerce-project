import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Comonents/ProducList/ProductList';
import Navbar from './Comonents/Navbar/Navbar';
import Routing from './Routing/Routing';

function App() {
  return (
    

    <BrowserRouter>
        <Navbar />

    <div className="App">
   

   

    <Routing />
    </div>
    </BrowserRouter>

   
    
   
  );
}

export default App;
