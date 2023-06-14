
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route index element={<HomePage/>}/> 
      <Route path='/products' element={<HomePage/>}/>
      <Route path='/products/:id' element={<ProductDetailsPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
