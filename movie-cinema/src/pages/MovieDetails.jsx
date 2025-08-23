import { useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Rating from '../components/Rating'


export default function MovieDetails(){
const { id } = useParams()
const { movies, favorites, toggleFavorite } = useApp()
const movie = movies.find(m=> m.id===id)
if(!movie) return <div className="section">Фільм не знайдено.</div>


const isFav = favorites.includes(movie.id)


return (
<div className="section">
<div className="row">
<img src={movie.poster} alt={movie.title} style={{width:260, borderRadius:16}} />
<div style={{display:'grid', gap:10}}>
<h1 style={{margin:0}}>{movie.title}</h1>
<div className="flex" style={{flexWrap:'wrap'}}>
<Rating value={movie.rating} />
<span className="badge">{movie.year}</span>
{movie.genres.map(g=> <span key={g} className="badge">{g}</span>)}
</div>
<p style={{color:'var(--muted)'}}>{movie.synopsis}</p>
<div><b>Акторський склад:</b> {movie.cast.join(', ')}</div>
<div className="row">
<button className="btn primary" onClick={()=> window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})}>Дивитись трейлер</button>
<button className="btn" onClick={()=> toggleFavorite(movie.id)}>{isFav? '− Прибрати з Обраних' : '+ Додати в Обрані'}</button>
</div>
</div>
</div>
<div style={{marginTop:16}}>
<div className="label">Трейлер</div>
<div style={{position:'relative', paddingTop:'56.25%'}}>
<iframe
src={movie.trailer}
title="YouTube video player"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
style={{position:'absolute', inset:0, width:'100%', height:'100%', border:'1px solid #2a2e40', borderRadius:16}}
/>
</div>
</div>
</div>
)
}