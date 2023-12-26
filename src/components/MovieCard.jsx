import PropTypes from 'prop-types';
import { getFullImage } from '../services/globalApi'

function MovieCard({movie}) {
  return (
    <>
        <img src={getFullImage(movie.poster_path)}
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400
        hover:scale-110 transition-all duration-150 ease-in
        cursor-pointer
        '
        />
    </>
  )
}

MovieCard.propTypes ={
    movie:PropTypes.object.isRequired,
  }
  
export default MovieCard