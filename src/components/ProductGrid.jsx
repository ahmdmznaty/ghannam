import ProductCard from './ProductCard'

export default function ProductGrid({ products, onOpen, onAdd }) {
  if (!products.length) return <p className="empty">No products match your filters.</p>
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
      ))}
    </div>
  )
}
