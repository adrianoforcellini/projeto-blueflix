import React from 'react';
import TMDB from './TMDB_API';
import './App.css';
import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [futuredData, setfuturedData] = useState(null);

  const test = [1, 2, 3, 4];

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);
       let originals = list.filter((item) => item.slug === 'originals')
       let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length));
       let chosen = originals[0].items.results[randomChosen];
       console.log(chosen)
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <header><h1>BLUEFLIX</h1></header>
     {futuredData &&  < FeaturedMovie item={futuredData}/>}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>))}
      </section>
    </div>
  );
}


