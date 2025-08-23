import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { seedMovies, seedSessions } from '../data/seed'


const AppContext = createContext(null)


const LS_KEYS = { movies:'cinema_movies', sessions:'cinema_sessions', favorites:'cinema_favorites' }


function readLS(key, fallback){
try{ const v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v)||v? v : fallback }catch{ return fallback }
}
function writeLS(key, value){ localStorage.setItem(key, JSON.stringify(value)) }


function genId(prefix='id'){ return `${prefix}_${Math.random().toString(36).slice(2,9)}` }


export function AppProvider({children}){
const [movies, setMovies] = useState(()=> readLS(LS_KEYS.movies, seedMovies))
const [sessions, setSessions] = useState(()=> readLS(LS_KEYS.sessions, seedSessions))
const [favorites, setFavorites] = useState(()=> readLS(LS_KEYS.favorites, []))


useEffect(()=> writeLS(LS_KEYS.movies, movies), [movies])
useEffect(()=> writeLS(LS_KEYS.sessions, sessions), [sessions])
useEffect(()=> writeLS(LS_KEYS.favorites, favorites), [favorites])


// Movies
const addMovie = (movie)=> setMovies(prev=> [{...movie, id:genId('mov')}, ...prev])
const updateMovie = (id, patch)=> setMovies(prev=> prev.map(m=> m.id===id? {...m, ...patch}: m))
const removeMovie = (id)=> {
setMovies(prev=> prev.filter(m=> m.id!==id))
setSessions(prev=> prev.filter(s=> s.movieId!==id)) 
setFavorites(prev=> prev.filter(fid=> fid!==id))
}


//Sessions
const addSession = (session)=> setSessions(prev=> [{...session, id:genId('ses')}, ...prev])
const updateSession = (id, patch)=> setSessions(prev=> prev.map(s=> s.id===id? {...s, ...patch}: s))
const removeSession = (id)=> setSessions(prev=> prev.filter(s=> s.id!==id))


// Favorites
const toggleFavorite = (movieId)=> setFavorites(prev=> prev.includes(movieId)? prev.filter(id=> id!==movieId) : [...prev, movieId])


const value = useMemo(()=> ({
movies, sessions, favorites,
addMovie, updateMovie, removeMovie,
addSession, updateSession, removeSession,
toggleFavorite
}), [movies, sessions, favorites])


return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


export const useApp = ()=> useContext(AppContext)