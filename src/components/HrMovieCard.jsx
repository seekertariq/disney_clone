
import PropTypes from 'prop-types';
import { getFullImage } from '../services/globalApi';

function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
    <img src={getFullImage(movie.backdrop_path)} 
    className='w-[110px] md:w-[260px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    '/>
    <h2 className='w-[110px] md:w-[260px] text-white
    mt-2 text-xs md:text-lg'  >{movie.title}</h2>
    </section>
  )
}

HrMovieCard.propTypes ={
  movie:PropTypes.object.isRequired
}


export default HrMovieCard