import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/product' element={<ProductPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
