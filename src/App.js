import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, action, trending, ComedyMovies} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost  url={action} title='Action' isSmall />
      <RowPost url={trending} title='Trending' isSmall/>
     
      
      
     
    </div>
  );
}

export default App;
