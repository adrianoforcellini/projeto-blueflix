import React from 'react';
import TMDB from './TMDB_API';
import './App.css';
import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [futuredData, setfuturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);
      let originals = list.filter((item) => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
      let chosen = originals[0].items.results[randomChosen];
      let chosenData = await TMDB.getMovieInfo(chosen.id, 'tv');
      setfuturedData(chosenData);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
     <center><h1 className="blueflix">BLUEFLIX</h1></center> 
      {futuredData && < FeaturedMovie item={futuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />))}
      </section>
    </div>
  );
}


