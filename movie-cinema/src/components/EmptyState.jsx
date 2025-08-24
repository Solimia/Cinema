export default function EmptyState({ title = "Нічого не знайдено", hint }) {
    return (
        <div className="section" style={{ textAlign: 'center', opacity: .9 }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{title}</div>
            {hint && <div style={{ color: 'var(--muted)' }}>{hint}</div>}
        </div>
    )
}