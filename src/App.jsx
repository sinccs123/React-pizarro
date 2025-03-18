import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <>

      <BrowserRouter>
      
      <Navbar />
  
        <Routes>
          <Route path="/" element ={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element ={<ItemListContainer />} />
          <Route path="/detalle/:id" element ={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


