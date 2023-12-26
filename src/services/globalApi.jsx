import axios from "axios";

//NOTE: DEFINE THE GIVEN BELOW ENV VARIBABLES in .env file at root for development.
//Note if the environment is set up using create react app
//then you need to prefix the env variable with REACT_APP_
//and then access it using process.env.REACT_APP_<the complete variable name>
// Instead of using import.meta.env.VITE_API_ in case app is setup using vite.

const MOVIE_BASEURL=import.meta.env.VITE_MOVIE_BASEURL
const IMAGE_BASEURL =import.meta.env.VITE_IMAGE_BASEURL
const api_token = import.meta.env.VITE_API_TOKEN

const config  ={
    headers :{
        'Authorization': 'Bearer ' + api_token
    }
}
export const getFullUrl=(url) =>{
    return `${MOVIE_BASEURL}${url}`
}

export const getFullImage=(url) =>{
    return `${IMAGE_BASEURL}${url}`
}

// END POINTS
export const getTrendingVideos = axios.get(getFullUrl('/trending/all/day'),config)
export const getMovieByGenreId=(id) => axios.get(`${getFullUrl('/discover/movie')}?with_genres=${id}`,config)




