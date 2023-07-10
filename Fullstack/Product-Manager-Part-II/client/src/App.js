import './App.css';

import CreateForm from './components/CreateForm';
import { Routes, Route,link } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductOne from './components/ProductOne';
function App() {
  return (
    <div className="App">
      <h1>Products Manager</h1>
      <Routes>
      <Route path='/create'element={<CreateForm />} />
      <Route path='/'element={<ProductsList />} />
      <Route path='/products/:id' element={<ProductOne />} />

            </Routes>

    </div>
  )
}

export default App