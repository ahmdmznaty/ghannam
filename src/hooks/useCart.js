import { useEffect, useState, useCallback } from 'react'

const KEY = 'estore-cart'

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

// Cart item shape: { id, name, price, image, qty }
export function useCart() {
  const [items, setItems] = useState(load)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items))
  }, [items])

  const add = useCallback((p, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id)
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + qty } : i))
      return [...prev, { id: p.id, name: p.name, price: p.price, image: p.image, qty }]
    })
  }, [])

  const setQty = useCallback((id, qty) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    )
  }, [])

  const remove = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), [])
  const clear = useCallback(() => setItems([]), [])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)

  return { items, add, setQty, remove, clear, count, total }
}
