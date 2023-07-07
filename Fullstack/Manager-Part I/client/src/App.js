
import './App.css';
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>ProductManager</h1>
      <Routes>
        <Route path='/'element = {<Form/>} />
      
      
      
      </Routes>
    </div>
  )
}

export default App;
