import { createContext, useState, useContext, useEffect } from "react";

const Moviefact = createContext();

export const useMoviContext = () => useContext(Moviefact);
export const Moviegiver = ({children}) => {
    const [favs, setFavs] = useState([])
    useEffect(() => {
        const storedFav = localStorage.getItem("Favorites")
        if (storedFav) setFavs(JSON.parse(storedFav))
    }, [])

    useEffect(() => {
        localStorage.setItem('Favorites', JSON.stringify(favs))
    }, [favs])

    const addFavs = (movi) => {

        setFavs(prev => [...prev, movi])
    }
    
    const removeFavs = (moviId) => {
        setFavs(prev => prev.filter(movi => movi.id !== moviId))
    }

    const isFavs = (moviId) => {
        return favs.some(movi => movi.id === moviId)
    }

    const val = {
        favs,
        addFavs,
        removeFavs,
        isFavs 
    }

    return <Moviefact.Provider value = {val}>
        {children}
        </Moviefact.Provider>
};