import React from 'react';
import TMDB from './TMDB';
import { useEffect, useState } from 'react';


export default () => {
  const [movieList, setMovieList] = useState([{title: 'oaaxi'}]);
  const test =[1,2,3,4];

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      console.log(list)
      setMovieList(list)
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        a
        {teste.map((item, key) => {
          <div>
            {item}
          </div> 

        })} b
      </section>
     </div>
  );
}


