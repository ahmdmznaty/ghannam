import { formatPrice } from '../utils/format'

export default function Price({ product }) {
  return (
    <span className="price">
      <b>{formatPrice(product.price)}</b>
      {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
    </span>
  )
}
