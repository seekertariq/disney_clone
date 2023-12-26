
import GenreMovieList from "./components/GenreMovieList"
import Header from "./components/Header"
import ProductionHouse from "./components/ProductionHouse"
import Slider from "./components/Slider"

export default function App() {
  return (
    <div className="">
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
    </div>
  )
}