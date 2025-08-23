import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Search from './pages/Search'
import Sessions from './pages/Sessions'
import Favorites from './pages/Favorites'
import Admin from './pages/Admin'
import Header from './components/Header'


export default function App(){
return (
<div>
<Header />
<div className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/movie/:id" element={<MovieDetails />} />
<Route path="/search" element={<Search />} />
<Route path="/sessions" element={<Sessions />} />
<Route path="/favorites" element={<Favorites />} />
<Route path="/admin" element={<Admin />} />
<Route path="*" element={<div className="section">Сторінку не знайдено</div>} />
</Routes>
</div>
<footer className="container" style={{padding:"30px 0", color:"var(--muted)"}}>
© {new Date().getFullYear()} Кінотеатр • Demo (LocalStorage)
</footer>
</div>
)
}
