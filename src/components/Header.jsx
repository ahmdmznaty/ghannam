import { Search, ShoppingBag, Cpu } from 'lucide-react'
import { formatPrice } from '../utils/format'
import { STORE_NAME } from '../config'

export default function Header({ search, onSearch, cartCount, cartTotal, onCartClick }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="/"><Cpu size={22} /> {STORE_NAME}</a>
        <label className="search">
          <Search size={16} />
          <input
            placeholder="Search products…"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search products"
          />
        </label>
        <button className="cart-btn" onClick={onCartClick} aria-label="Open cart">
          <ShoppingBag size={18} />
          <span data-testid="cart-count">({cartCount})</span>
          <span className="accent">{formatPrice(cartTotal)}</span>
        </button>
      </div>
    </header>
  )
}
