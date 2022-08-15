import React from 'react';
import logo from './logo.svg';
import { Search } from './features/search/Search';
import './App.css';
import { PostsList } from './features/postslist/PostsList';
import { NewPost } from './features/newpost/NewPost';
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
