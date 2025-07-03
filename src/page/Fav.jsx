import "../css/Fav.css";
import { useMoviContext } from "../Factor/moviefact";
import Movie from "../componentss/movie";

function Fav (){
    const {favs} = useMoviContext();

    if(favs){
        return (<div className="fav">
            <h2>Your Liked Ones.. </h2>
        <div className="movis-grid">
        {
            favs.map((movi => 
            // movi.title.toLowerCase().startsWith(searchQuery) && 
            <Movie movi={movi} key={movi.id}/>))} 
            </div>
            </div>
        );
        }
            

    return <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Lets start adding to the favorites list..</p>

    </div>
}

export default Fav;