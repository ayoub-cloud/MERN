
import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom";
import Form from "./components/Form";
import People from "./Components/People";
import Planet from "./Components/Planet";
function App() {
  return (
    <div className="App">
     <h1>Luke API-walker</h1>
      <Form />
    
 <Routes>
<Route path="/people/:id">
<PeopleComponent />
</Route>
<Route path="/planets/:id">
<PlanetComponent />
</Route>
</Routes> 
</div>
  );
}

export default App;


