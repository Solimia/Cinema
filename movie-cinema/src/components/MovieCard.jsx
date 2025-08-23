import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useApp } from '../context/AppContext'


export default function MovieCard({movie}){
const { favorites, toggleFavorite } = useApp()
const isFav = favorites.includes(movie.id)
return (
    
<div className="card">
<img src={movie.poster} alt={movie.title}
className="w-full h-64 object-cover rounded-lg shadow-md" />
<div className="content">
<div className="row" style={{justifyContent:'space-between', alignItems:'start'}}>
<div style={{fontWeight:700}}>{movie.title}</div>
<Rating value={movie.rating} />
</div>
<div className="flex" style={{flexWrap:'wrap'}}>
{movie.genres.map(g=> <span className="tag" key={g}>{g}</span>)}
<span className="tag">{movie.year}</span>
</div>
<div style={{color:'var(--muted)', fontSize:14, lineHeight:1.4}}>
{movie.synopsis.length>120? movie.synopsis.slice(0,120)+'…' : movie.synopsis}
</div>
<div className="row" style={{marginTop:6}}>
<Link className="btn primary" to={`/movie/${movie.id}`}>Детальніше</Link>
<button className="btn" onClick={()=> toggleFavorite(movie.id)}>
{isFav? '− Прибрати з Обраних' : '+ Додати в Обрані'}
</button>
</div>
</div>
</div>
)
}