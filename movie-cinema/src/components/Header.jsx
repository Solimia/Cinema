import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Header(){
const nav = useNavigate()
const [q, setQ] = useState('')
const onSubmit = (e)=>{ e.preventDefault(); nav(`/search?q=${encodeURIComponent(q)}`) }
return (
<header className="header">
<div className="container nav">
<NavLink to="/" className="logo">🎬 Кінотеатр</NavLink>
<NavLink to="/" end>Головна</NavLink>
<NavLink to="/search">Пошук</NavLink>
<NavLink to="/sessions">Сеанси</NavLink>
<NavLink to="/favorites">Обрані</NavLink>
<NavLink to="/admin">Адмін</NavLink>
<form onSubmit={onSubmit} style={{marginLeft:'auto', display:'flex', gap:8}}>
<input className="input" placeholder="Пошук за назвою…" value={q} onChange={e=>setQ(e.target.value)} />
<button className="btn">Знайти</button>
</form>
</div>
</header>
)
}