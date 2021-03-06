import React from 'react';
import './MovieRow.css'

const MovieRow = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items !== undefined && items.results.map((item, key) => (
            <div className="movieRow--item" key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow;