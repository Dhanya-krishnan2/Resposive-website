import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import HeaderResponsive from './Components/HeaderResponsive';
import HeroSession from './Components/HeroSession.jsx';




function App() {
  return (
    <div className="App">
      <HeaderResponsive />
      <HeroSession />
    </div>
  );
}

export default App;
