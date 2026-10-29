import { ShoppingCart } from 'lucide-react'
import Rating from './Rating'
import Price from './Price'
import { discountPercent } from '../utils/format'

export default function ProductCard({ product, onOpen, onAdd }) {
  const discount = discountPercent(product)
  return (
    <article className="card" data-testid="product-card">
      <button className="card-image" onClick={() => onOpen(product)} aria-label={`View ${product.name}`}>
        {discount > 0 && <span className="badge">-{discount}%</span>}
        {!product.stock && <span className="badge out">Sold out</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </button>
      <Rating value={product.rating} />
      <h2>{product.name}</h2>
      <Price product={product} />
      <button className="btn" disabled={!product.stock} onClick={() => onAdd(product)}>
        <ShoppingCart size={15} /> Add to cart
      </button>
    </article>
  )
}
