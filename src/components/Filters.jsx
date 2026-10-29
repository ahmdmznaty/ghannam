export default function Filters({ filters, categories, brands, set, toggle, reset }) {
  return (
    <aside className="filters">
      <h3>Shop By Categories</h3>
      <ul className="cat-list">
        <li>
          <button className={!filters.category ? 'active' : ''} onClick={() => set({ category: null })}>All</button>
        </li>
        {categories.map((c) => (
          <li key={c}>
            <button className={filters.category === c ? 'active' : ''} onClick={() => set({ category: c })}>{c}</button>
          </li>
        ))}
      </ul>

      <h4>Availability</h4>
      {[['in', 'In stock'], ['out', 'Out of stock']].map(([v, label]) => (
        <label key={v} className="check">
          <input type="checkbox" checked={filters.availability.includes(v)} onChange={() => toggle('availability', v)} />
          {label}
        </label>
      ))}

      <h4>Price</h4>
      <div className="price-range">
        <input type="number" min="0" placeholder="From" value={filters.min} onChange={(e) => set({ min: e.target.value })} aria-label="Min price" />
        <input type="number" min="0" placeholder="To" value={filters.max} onChange={(e) => set({ max: e.target.value })} aria-label="Max price" />
      </div>

      <h4>Brand</h4>
      {brands.map((b) => (
        <label key={b} className="check">
          <input type="checkbox" checked={filters.brands.includes(b)} onChange={() => toggle('brands', b)} />
          {b}
        </label>
      ))}

      <button className="btn ghost" onClick={reset}>Clear filters</button>
    </aside>
  )
}
