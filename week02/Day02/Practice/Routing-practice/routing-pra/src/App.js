
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import NumberPage from './components/NumberPage'
// import Word from './components/Word';
import ColoredWord from './components/ColoredWord';
function App() {
  return (
    <div className="App">
      
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<NumberPage/>} />
        {/* <Route path="/:word" element={<Word/>} /> */}
        <Route path="/:word/:color1/:color2" element={<ColoredWord/>} /> 
     
    </Routes>
    </div>
  );
}

export default App;
