import { useState } from 'react';

import './App.css'

function App(  ) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // Ensure count doesn't go below 0
  };

  return (
    <main>
      <p>{count}</p>    
      <div>
        <button
          className="btn--menor"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          Decrementar
        </button>
        <button 
          className="btn--maior" 
          onClick={handleIncrement}
        >
          Incrementar
        </button>
      </div>
    </main>
  )
}

export default App
