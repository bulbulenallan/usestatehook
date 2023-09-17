
import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState('Allan');
  const [age, setAge] = useState('20');

  const handleClick = () => {
    setName('bulbulen');
    setAge('56');
    
  }
  return (
    <div className="App">
      <p>My name is {name} and I'm {age} years old</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
