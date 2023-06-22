import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';



function App() {
  
const people = [
  {firstName:"John", lastName:"Doe", age:25 , hairColor:"Brown"},
  {firstName:"Jane", lastName:"Smith" ,age:30, hairColor:"Black"},
  {firstName:"Mike", lastName:"Johnson", age:35, hairColor:"Black"},
  {firstName:"Emily", lastName:"Davis", age:28, hairColor:"Black"}
];

  return (
    <div className="App">
      {people.map((person, idx) => (
        <PersonCard person={person} key={idx} />
      ))}
    </div>
  );
};

export default App;