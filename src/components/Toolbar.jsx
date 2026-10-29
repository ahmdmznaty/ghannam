import { SORTS } from '../hooks/useFilters'

export default function Toolbar({ sort, onSort, count }) {
  return (
    <div className="toolbar">
      <select value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Sort products">
        {Object.entries(SORTS).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      <span className="muted">{count} products</span>
    </div>
  )
}
