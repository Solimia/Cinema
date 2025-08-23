import { useState } from 'react'
import { useApp } from '../context/AppContext'


export default function Admin(){
const { movies, sessions, addMovie, removeMovie, addSession, removeSession } = useApp()


// Форма фільмів
const [mv, setMv] = useState({ title:'', year:'', rating:'', genres:'', poster:'', synopsis:'', trailer:'', cast:'' })
const submitMovie = (e)=>{ e.preventDefault(); if(!mv.title) return; addMovie({
title: mv.title.trim(),
year: Number(mv.year)||new Date().getFullYear(),
rating: Number(mv.rating)||0,
genres: mv.genres.split(',').map(s=>s.trim()).filter(Boolean),
poster: mv.poster||'https://placehold.co/400x600?text=Poster',
synopsis: mv.synopsis||'Без опису',
trailer: mv.trailer||'https://www.youtube.com/embed/dQw4w9WgXcQ',
cast: mv.cast.split(',').map(s=>s.trim()).filter(Boolean)
}); setMv({ title:'', year:'', rating:'', genres:'', poster:'', synopsis:'', trailer:'', cast:'' }) }


// Форма сеансів
const [ss, setSs] = useState({ movieId:'', date:'', time:'', hall:'', lang:'UA', price:'' })
const submitSession = (e)=>{ e.preventDefault(); if(!ss.movieId||!ss.date||!ss.time) return; addSession({
movieId: ss.movieId, date:ss.date, time:ss.time, hall:ss.hall||'2D', lang:ss.lang||'UA', price:Number(ss.price)||0
}); setSs({ movieId:'', date:'', time:'', hall:'', lang:'UA', price:'' }) }


return (
<div className="section">
<h2>Панель адміністратора</h2>


<h3>Додати фільм</h3>
<form onSubmit={submitMovie} className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
<input className="input" placeholder="Назва" value={mv.title} onChange={e=>setMv({...mv,title:e.target.value})} />
<input className="input" placeholder="Рік" type="number" value={mv.year} onChange={e=>setMv({...mv,year:e.target.value})} />
<input className="input" placeholder="Рейтинг (0-10)" type="number" step="0.1" value={mv.rating} onChange={e=>setMv({...mv,rating:e.target.value})} />
<input className="input" placeholder="Жанри (через кому)" value={mv.genres} onChange={e=>setMv({...mv,genres:e.target.value})} />
<input className="input" placeholder="URL постера" value={mv.poster} onChange={e=>setMv({...mv,poster:e.target.value})} />
<input className="input" placeholder="YouTube трейлер" value={mv.trailer} onChange={e=>setMv({...mv,trailer:e.target.value})} />
<input className="input" placeholder="Актори (через кому)" value={mv.cast} onChange={e=>setMv({...mv,cast:e.target.value})} />
<textarea className="input" placeholder="Опис" value={mv.synopsis} onChange={e=>setMv({...mv,synopsis:e.target.value})} />
<button className="btn primary" type="submit">+ Додати</button>
</form>


<div style={{height:12}} />
<h3>Фільми ({movies.length})</h3>
<div className="grid">
{movies.map(m=> (
<div key={m.id} className="card">
<img src={m.poster} alt={m.title} />
<div className="content">
<div style={{fontWeight:700}}>{m.title}</div>
<div className="flex">
<span className="tag">{m.year}</span>
<span className="tag">{m.rating}</span>
<span className="tag">{m.genres.join(', ')}</span>
</div>
<div className="row">
<button className="btn" onClick={()=> removeMovie(m.id)}>Видалити</button>
</div>
</div>
</div>
))}
</div>


<div style={{height:24}} />
<h3>Додати сеанс</h3>
<form onSubmit={submitSession} className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
<select value={ss.movieId} onChange={e=>setSs({...ss,movieId:e.target.value})}>
<option value="">— Оберіть фільм —</option>
{movies.map(m=> <option key={m.id} value={m.id}>{m.title}</option>)}
</select>
<input className="input" type="date" value={ss.date} onChange={e=>setSs({...ss,date:e.target.value})} />
<input className="input" type="time" value={ss.time} onChange={e=>setSs({...ss,time:e.target.value})} />
<input className="input" placeholder="Зал (2D/IMAX/Dolby)" value={ss.hall} onChange={e=>setSs({...ss,hall:e.target.value})} />
<input className="input" placeholder="Мова" value={ss.lang} onChange={e=>setSs({...ss,lang:e.target.value})} />
<input className="input" type="number" placeholder="Ціна" value={ss.price} onChange={e=>setSs({...ss,price:e.target.value})} />
<button className="btn primary" type="submit">+ Додати</button>
</form>


<div style={{height:12}} />
<h3>Сеанси ({sessions.length})</h3>
<div className="grid">
{sessions.map(s=> {
const title = movies.find(m=> m.id===s.movieId)?.title || '—'
return (
<div key={s.id} className="card">
<div className="content" style={{gap:6}}>
<div style={{fontWeight:700}}>{title}</div>
<div className="flex" style={{flexWrap:'wrap'}}>
<span className="badge">{s.date}</span>
<span className="badge">{s.time}</span>
<span className="badge">{s.hall}</span>
<span className="badge">{s.lang}</span>
<span className="badge">{s.price}₴</span>
</div>
<div className="row">
<button className="btn" onClick={()=> removeSession(s.id)}>Видалити</button>
</div>
</div>
</div>
)
})}
</div>
</div>
)
}