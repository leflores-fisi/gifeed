
import React, {useState, useEffect} from 'react';
import './css/App.css';
import './css/normalize.css';
import PostsArea from './components/PostsArea.js';
import Masonry from 'masonry-layout';

function App() {

  const [search, setSearch] = useState("");

  useEffect(function () {
    setSearch("amogus")
  }, [search])

  const searchFor = () => setSearch(document.querySelector(".search").value);
  
  // document.querySelector('.App-header__posting button').addEventListener('keydown', e => {
  //   if (e.key === 'Enter') searchFor();
  //   console.log(e);
  // });

  return (
    <>
      <header className = 'App-header'>
        <div className = 'App-header__logo'>React gift searcher</div>
        <div className = 'App-header__posting'>
          <input type = {"text"} className = 'search'/>
          <button type = {"button"} onClick = {searchFor}>Search</button>
        </div>
      </header>

      <div className='search-results'>
        <PostsArea keyword = {search} quantity = {20}/>
      </div>
    </>
  );
}


export default App;
