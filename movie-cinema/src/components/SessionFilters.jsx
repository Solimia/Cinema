import { useEffect, useState } from 'react'


export default function SessionFilters({ onChange, initial }) {
    const [form, setForm] = useState(initial || { date: '', from: '', to: '', genre: '' })
    useEffect(() => { onChange?.(form) }, [form, onChange])
    return (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
            <div>
                <div className="label">Дата</div>
                <input className="input" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div>
                <div className="label">Час від</div>
                <input className="input" type="time" value={form.from} onChange={e => setForm(f => ({ ...f, from: e.target.value }))} />
            </div>
            <div>
                <div className="label">Час до</div>
                <input className="input" type="time" value={form.to} onChange={e => setForm(f => ({ ...f, to: e.target.value }))} />
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
        </div>
    )
}