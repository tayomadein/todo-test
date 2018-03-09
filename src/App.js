import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/addTodo/';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Tay&#39;s Playground</h1>
    </header>
    <h1>Todo list</h1>
    <AddTodo submitTodo={() => {}} />
  </div>
);

export default App;
