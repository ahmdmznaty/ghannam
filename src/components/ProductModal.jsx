import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Rating from './Rating'
import Price from './Price'

export default function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        <img src={product.image} alt={product.name} />
        <div className="modal-body">
          <span className="muted">{product.category} · {product.brand}</span>
          <h2>{product.name}</h2>
          <Rating value={product.rating} />
          <Price product={product} />
          <p>{product.description}</p>
          <p className={product.stock ? 'in-stock' : 'out-stock'}>{product.stock ? 'In stock' : 'Out of stock'}</p>
          <div className="modal-actions">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
            <button
              className="btn"
              disabled={!product.stock}
              onClick={() => { onAdd(product, qty); onClose() }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
