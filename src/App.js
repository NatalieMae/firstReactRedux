import Counter from './Counter';
import './App.css';
import React from 'react';
import CounterSlice, { counterSlice } from './features/counterSlice';


function App() {
  return (
    <div className="App">
      <Counter />
      <CounterSlice />
    </div>
  );
}

export default App;
