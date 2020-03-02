import React from 'react';

import './App.css';
import Home from './componets/Home';
import Contact from './componets/Contact'

function App() {
  return (
    <div className="App">
      <h1>This is React App</h1>
      <Home company="Capgemini"></Home>
      <Contact name="shweta"></Contact>
      <Contact age="24"></Contact>
    </div>
  );
}

export default App;
