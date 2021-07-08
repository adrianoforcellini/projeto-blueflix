import React from 'react';
import './MovieRow.css'

export default ({ title, items }) => {
    console.log(items)
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {items !== undefined  && items.results.map((item, key) => (
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                ))}
            </div>
        </div>
    )
}