import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';

function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked');
  }
  const addToFive = (num) =>{
    alert(num+5);
  }
  return (
    <>
     
      <h1>React Core Concepts 2</h1>
      <User></User>
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>alert('third clicked')}>Click 3</button>
      <button onClick={()=> addToFive(3)}>Button Four</button>
    </>
  )
}

export default App
