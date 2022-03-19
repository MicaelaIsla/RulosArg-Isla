import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <div className="position">
      <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
           
            <Route path="/cart" element={<ItemListContainer />} />
   
          </Routes>

          <Footer
          />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
