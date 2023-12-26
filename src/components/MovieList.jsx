import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react'
import { getMovieByGenreId } from '../services/globalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import HrMovieCard from './HrMovieCard'

const screenWidth = window.innerWidth
function MovieList({ genreID, index_ }) {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()
    
    useEffect(() => {
        getMovieByGenreId(genreID).then(resp => {
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }, [genreID])


    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    return (
        <div className='relative'>
            <HiChevronLeft onClick={() => sliderLeft(elementRef.current)} className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} `} />

            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
                {movieList.map((item) => (
                    <>
                        {index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </>
                ))}

            </div>
            <HiChevronRight onClick={() => sliderRight(elementRef.current)} className={`text-[50px] text-white hidden md:block
    p-2 cursor-pointer z-10 top-0
     absolute right-0 
     ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />
        </div>
    )
}


MovieList.propTypes = {
    genreID: PropTypes.any.isRequired,
    index_: PropTypes.any.isRequired
}
export default MovieList