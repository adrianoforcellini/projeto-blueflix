import React from 'react';
import './FuturedMovie.css';

const FeaturedMovies = ({ item }) => {
    console.log(item)
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="featured--vertical" >
                <div className="featured--horizontal" >
                    <div className="featured--name" >
                        {item.original_name}</div>
                    <div className="featured--info" >
                        {/* {item.original_name} */}
                        <div className="featured--points" >
                            {item.vote_average} pontos   </div>
                        <div className="featured--yeay" >{firstDate.getFullYear()}</div>
                        <div className="featured--seasons" > {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description" >{item.overview}</div>
                    <div className="featured--buttons" >
                        <a href={`www.netflix.com/watch/${item.id}`} className="featured--watch-button"> ▶ Assistir</a>
                        <a href={`www.netflix.com/list/${item.id}`} className="featured--list-button" >+ Minha Lista</a>
                    </div>
                    <div className="featured--genres" >Gêneros: {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}


export default FeaturedMovies;
