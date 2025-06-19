import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import ProductPage from "./pages/productspage/ProductPage"
import BrandPage from './pages/BrandPage';
import UpdatePage from './pages/productspage/UpdatePage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/product' element={<ProductPage />}/>
          <Route path='/product/update/:id' element={<UpdatePage />}/>
          <Route path='/brand' element={<BrandPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
