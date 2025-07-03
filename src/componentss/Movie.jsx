import  "../css/Movie.css";
import { useMoviContext } from "../Factor/moviefact";

function Movie({movi}){

    const { isFavs, addFavs, removeFavs} = useMoviContext() 
    const favorit = isFavs(movi.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorit) removeFavs(movi.id)
        else addFavs(movi)
        
    }
    return <div className="movie-id">
        <div className="movi-poster">
            <img src={'https://image.tmdb.org/t/p/w500${movi.poster_path}'} alt={movi.title}/>
            <div className="movie-overlay">
                <button className={'favorite-btn ${favorit ? "active" : " "}'}  onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            
            <h3>{movi.title}</h3>
            <p>{movi.release_date?.split("-")[0]}</p>
        </div>
    </div>
    
}

export default Movie;
