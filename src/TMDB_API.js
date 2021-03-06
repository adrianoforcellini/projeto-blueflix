const API_KEY = "api_key=46ed5c5144d30a1bf13fb51cbc8e4cdc",
    API_BASE = "https://api.themoviedb.org/3",
    LANGUAGE = "language=pt-BR&";


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}

const JSON_API = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&${LANGUAGE}${API_KEY}`)
            },
            {
                slug: 'trending',
                title: "Recomendados para Você",
                items: await basicFetch(`/trending/all/week?${LANGUAGE}${API_KEY}`)
            },
            {
                slug: 'action',
                title: "Acão",
                items: await basicFetch(`/discover/movie?with_genres=28&${LANGUAGE}${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&${LANGUAGE}${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&${LANGUAGE}${API_KEY}`)
            },
            {
                slug: 'romance',
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&${LANGUAGE}${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&${LANGUAGE}${API_KEY}`)
            },

        ]
    },
    getMovieInfo: async (movieID, type) => {
        let info = {};
        if (movieID) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieID}?${LANGUAGE}&${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieID}?${LANGUAGE}&${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}

export default JSON_API;
