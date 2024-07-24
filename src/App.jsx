import { useState } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0);
  function decrease() {
      if(count >0) {
        setCount(count - 1)
      }
  }
  const increase = () => {
    setCount(count+1)
  }

  return (
    <>
    <button onClick={decrease}>Decrease</button>
    <h2>Counter: {count}</h2>
    <button onClick={increase}>Increase</button>
      {/* We need it to be executed when the button is clicked, so, we pass the reference */}
    </>
  )
}

export default App
