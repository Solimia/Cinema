import { useEffect, useState } from 'react'


export default function SearchFilters({ onChange, initial }) {
    const [form, setForm] = useState(initial || { q: '', genre: '', year: '', minRating: '' })
    useEffect(() => { onChange?.(form) }, [form, onChange])


    return (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
            <div>
                <div className="label">Назва</div>
                <input className="input" value={form.q} onChange={e => setForm(f => ({ ...f, q: e.target.value }))} placeholder="Dune…" />
            </div>
            <div>
                <div className="label">Жанр</div>
                <select value={form.genre} onChange={e => setForm(f => ({ ...f, genre: e.target.value }))}>
                    <option value="">Всі</option>
                    <option>Horrors</option>
                    <option>Animation</option>
                    <option>ActionMovie</option>
                    <option>Comedy</option>
                    <option>Criminal</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                </select>
            </div>
            <div>
                <div className="label">Рік</div>
                <input className="input" type="number" placeholder="2024" value={form.year} onChange={e => setForm(f => ({ ...f, year: e.target.value }))} />
            </div>
            <div>
                <div className="label">Мін. рейтинг</div>
                <input className="input" type="number" step="0.1" placeholder="7.0" value={form.minRating} onChange={e => setForm(f => ({ ...f, minRating: e.target.value }))} />
            </div>
        </div>
    )
}