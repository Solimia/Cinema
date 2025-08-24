import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import SearchFilters from '../components/SearchFilters'
import MovieCard from '../components/MovieCard'
import EmptyState from '../components/EmptyState'


function useQuery() {
    const { search } = useLocation()
    return useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search])
}


export default function Search() {
    const { movies } = useApp()
    const qs = useQuery()
    const [filters, setFilters] = useState({ q: qs.q || '', genre: '', year: '', minRating: '' })


    const result = movies.filter(m => {
        if (filters.q && !m.title.toLowerCase().includes(filters.q.toLowerCase())) return false
        if (filters.genre && !m.genres.includes(filters.genre)) return false
        if (filters.year && Number(m.year) !== Number(filters.year)) return false
        if (filters.minRating && Number(m.rating) < Number(filters.minRating)) return false
        return true
    })


    return (
        <div className="section">
            <h2>Пошук фільмів</h2>
            <SearchFilters initial={filters} onChange={setFilters} />
            <div style={{ height: 6 }} />
            {result.length ? <div className="grid">{result.map(m => <MovieCard key={m.id} movie={m} />)}</div> : <EmptyState hint="Спробуйте змінити критерії пошуку." />}
        </div>
    )
}