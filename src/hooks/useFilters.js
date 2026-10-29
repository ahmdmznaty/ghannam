import { useMemo, useState } from 'react'

export const SORTS = {
  'name-asc': 'Alphabetically, A-Z',
  'name-desc': 'Alphabetically, Z-A',
  'price-asc': 'Price, low to high',
  'price-desc': 'Price, high to low',
}

const initial = { search: '', category: null, brands: [], availability: [], min: '', max: '', sort: 'name-asc' }

export function useFilters(products) {
  const [filters, setFilters] = useState(initial)
  const set = (patch) => setFilters((f) => ({ ...f, ...patch }))
  const toggle = (key, value) =>
    setFilters((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }))
  const reset = () => setFilters((f) => ({ ...initial, search: f.search, sort: f.sort }))

  const visible = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    const min = filters.min === '' ? -Infinity : Number(filters.min)
    const max = filters.max === '' ? Infinity : Number(filters.max)
    const list = products.filter(
      (p) =>
        (!q || p.name.toLowerCase().includes(q)) &&
        (!filters.category || p.category === filters.category) &&
        (!filters.brands.length || filters.brands.includes(p.brand)) &&
        (!filters.availability.length || filters.availability.includes(p.stock ? 'in' : 'out')) &&
        p.price >= min &&
        p.price <= max
    )
    const [key, dir] = filters.sort.split('-')
    const sign = dir === 'asc' ? 1 : -1
    return list.sort((a, b) => (key === 'name' ? a.name.localeCompare(b.name) : a.price - b.price) * sign)
  }, [products, filters])

  return { filters, set, toggle, reset, visible }
}
