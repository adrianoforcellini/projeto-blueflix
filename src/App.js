import React from 'react';
import TMDB from './TMDB';
import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const test = [1, 2, 3, 4];

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list)
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>))}
      </section>
    </div>
  );
}


