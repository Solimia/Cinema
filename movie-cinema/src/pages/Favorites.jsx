import { useApp } from '../context/AppContext'
import MovieCard from '../components/MovieCard'
import EmptyState from '../components/EmptyState'


export default function Favorites(){
const { favorites, movies } = useApp()
const list = movies.filter(m=> favorites.includes(m.id))
return (
<div className="section">
<h2>Обрані</h2>
{list.length? <div className="grid">{list.map(m=> <MovieCard key={m.id} movie={m} />)}</div> : <EmptyState hint="Додайте фільми " />}
</div>
)
}