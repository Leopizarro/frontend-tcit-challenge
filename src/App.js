import React from 'react';
import './App.css';
import { Header } from './features/header/Header';
import { MainPage } from './pages/mainpage/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
      <MainPage />
      </header>
    </div>
  );
}

export default App;
