import './App.css';
import {useState, useCallback} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Buttons from './components/Buttons';
import Count from './components/Count';
import Search from './components/Search'
import MoviesList from './components/MoviesList';

function App() {

  return (
    <div className="App">
      <MoviesList />
    </div>
  );
}

export default App;
