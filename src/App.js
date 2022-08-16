import React from 'react';
import './App.css';
import { Header } from './features/header/Header';
import { Page } from './features/page/Page';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
      <Page />
      </header>
    </div>
  );
}

export default App;
