import { Component } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './App.css';



// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
];

// totalComponent
const totalComponent = { total: 0 };

// Counter Component
function Counter({ id, value, onDecrement, onIncrement }) {
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          className="button-dec"
          onClick={() => onDecrement(id)}
        >
          -
        </button>
        <button
          className="button-inc"
          onClick={() => onIncrement(id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

function Total({ counters }) {
  const total = counters.reduce((acc, counter) => acc + counter.value, 0);

  return (
    <div className="total-counter">
      <h1>Total: {total}</h1>
    </div>
  );
}

function App() {
  const [counters, setCounter] = useState(data);

  const doDecrement = (id) => {
    setCounter((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      )
    );
  };

  const doIncrement = (id) => {
    setCounter((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          id={counter.id}
          onDecrement={doDecrement}
          onIncrement={doIncrement}
        />
      ))}
      <Total counters={counters} />
    </div>
  );
}

render(<App />, document.querySelector("#root"));

export default App;
