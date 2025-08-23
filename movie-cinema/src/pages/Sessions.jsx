import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import SessionFilters from '../components/SessionFilters'
import { Link } from 'react-router-dom'


export default function Sessions(){
const { sessions, movies } = useApp()
const [filters, setFilters] = useState({ date:'', from:'', to:'', genre:'' })


const movieById = useMemo(()=> Object.fromEntries(movies.map(m=> [m.id, m])), [movies])


const filtered = sessions.filter(s=> {
if(filters.date && s.date !== filters.date) return false
if(filters.from && s.time < filters.from) return false
if(filters.to && s.time > filters.to) return false
if(filters.genre){
const m = movieById[s.movieId]
if(!m || !m.genres.includes(filters.genre)) return false
}
return true
})


const grouped = filtered.reduce((acc, s)=>{ (acc[s.movieId] ||= []).push(s); return acc }, {})
const ids = Object.keys(grouped)


return (
<div className="section">
<h2>Розклад сеансів</h2>
<SessionFilters initial={filters} onChange={setFilters} />
<div style={{height:12}} />
{!ids.length && <div style={{color:'var(--muted)'}}>not</div>}
<div style={{display:'grid', gap:16}}>
{ids.map(id=> {
const movie = movieById[id]
const list = grouped[id].sort((a,b)=> a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
return (
<div key={id} className="card" style={{overflow:'hidden'}}>
<div className="row" style={{padding:12}}>
<img src={movie.poster} alt={movie.title} style={{width:90, borderRadius:10}}/>
<div style={{display:'grid', gap:6}}>
<Link to={`/movie/${movie.id}`} style={{fontWeight:700, textDecoration:'none', color:'var(--text)'}}>{movie.title}</Link>
<div style={{display:'flex', flexWrap:'wrap', gap:8}}>
{list.map(s=> (
<span key={s.id} className="badge">{s.date} • {s.time} • {s.hall} • {s.lang} • {s.price}₴</span>
))}
</div>
</div>
</div>
</div>
)
})}
</div>
</div>
)
}