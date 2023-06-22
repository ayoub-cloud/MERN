import PersonCard from './components/PersonCard';
import './App.css';

const Arr =[
  {firstName:"John", lastName:"Doe", age:25 , hairColor:"Brown"},
  {firstName:"Jane", lastName:"Smith" ,age:30, hairColor:"Black"},
  {"firstName":"Mike", "lastName":"Johnson","age":35,"hairColor":"Black"},
  {"firstName":"Emily", "lastName":"Davis","age":28,"hairColor":"Black"}
]

function App() {
  return (
    <div className="App">
     {/* <PersonCard firstName="John" lastName="Doe" age={25} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={30} hairColor="Black" />
      <PersonCard firstName="Mike" lastName="Johnson" age={35} hairColor="Black" />
      <PersonCard firstName="Emily" lastName="Davis" age={28} hairColor="Black" /> */}
      
      {Arr.map((person, idx) => {
        return <PersonCard person={person} key={idx} />;
      })
      
      }
    </div>
  );
}

  export default App;
