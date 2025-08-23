import { useApp } from '../context/AppContext'
import MovieCard from '../components/MovieCard'


export default function Home(){
const { movies } = useApp()
const newest = [...movies].sort((a,b)=> b.year - a.year).slice(0,6)
const topRated = [...movies].sort((a,b)=> b.rating - a.rating).slice(0,6)
return (
<div className="section">
<h2>Новинки</h2>
<div className="grid">{newest.map(m=> <MovieCard key={m.id} movie={m} />)}</div>
<h2 style={{marginTop:18}}>Топ за рейтингом</h2>
<div className="grid">{topRated.map(m=> <MovieCard key={m.id} movie={m} />)}</div>
</div>
)
}