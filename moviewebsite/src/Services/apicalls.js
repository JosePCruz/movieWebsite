
import axios from 'axios';


export const bringMovies = () => {
    
    try {

        return axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=491057fb5e219f367741b5b0ea09a3bf&language=en-US");

    } catch (error) {
        console.log(error);
    }
};

export const bringMovieType = (id) => {
    
    try {

        return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=491057fb5e219f367741b5b0ea09a3bf&language=en-US&with_genres="+id);

    } catch (error) {
        console.log(error);
    }
};
