import GenresList from '../constants/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=15 &&(
            <div key={item.id} className='p-2 md:p-6 px-8 md:px-16'>
                <h2 className='text-xs md:text-[20px]  text-white font-bold'>{item.name}</h2>
                <MovieList genreID ={item.id} index_={index}/>
            </div>

        ))
                
        }

    </div>
  )
}

export default GenreMovieList