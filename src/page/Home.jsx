import Movie from "../componentss/movie"
import { useState, useEffect } from "react"
import  "../css/Home.css";
import { searchMovies, getPopularMovies } from "../service/api";

function Home () {

    const [searchQuery, setSearchQuery] = useState("");
const [movis, setMovies] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (error) {
      console.error(error);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  loadPopularMovies();
}, []);
    


   

    const handlserch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        

        if(loading) return

        setLoading(true)
        
        try{
          const serchreslt = await searchMovies(searchQuery)
          setMovies(serchreslt)
          setError(null)

        }catch(error){
          console.log(error);
          setError("Failed to serach! ")

        }
        finally{
          setLoading(false)
        }
    }

    return <div className="hom">
        <form onSubmit={handlserch} className="serch-form">
            <input type="text" 
            placeholder="Serch for movis! " 
            className="serch-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}

            />
            <button type="submit" className="search-button">Serch</button>
        </form>

        {
        error && <div className="eror-messg">{error} </div> 
        }

        {loading ? <div className="loading"> Just a Sec..</div> :  
        <div className="movis-grid">
            {
            movis.map(movi => 
            movi.title.toLowerCase().startsWith(searchQuery) && 
            <Movie movi={movi} key={movi.id}/>)} </div>
            }
            </div>
            
            }

export default Home;
