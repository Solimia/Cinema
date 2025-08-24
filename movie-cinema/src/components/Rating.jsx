export default function Rating({ value }) {
    const rounded = Math.round(value * 10) / 10
    const color = value >= 8 ? '#46d369' : value >= 6.5 ? '#f1c40f' : '#e74c3c'
    return <span className="badge" style={{ borderColor: '#2a2e40' }}><b style={{ color }}>{rounded}</b>/10</span>
}