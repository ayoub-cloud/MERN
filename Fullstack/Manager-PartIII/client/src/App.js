import './App.css';

import CreateForm from './components/CreateForm';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductOne from './components/ProductOne';
import ProductUpdate from './components/ProductUpdate';
function App() {
  return (
    <div className="App">
      <h1>Products Manager</h1>
      <Routes>
      <Route path='/create'element={<CreateForm />} />
      <Route path='/'element={<ProductsList />} />
      <Route path='/products/:id' element={<ProductOne />} />
      <Route path='/products/edit/:id' element={<ProductUpdate />} />


            </Routes>

    </div>
  )
}

export default App